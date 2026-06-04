import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media } from './payload/collections/Media.ts'
import { Users } from './payload/collections/Users.ts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const databaseURI = process.env.DATABASE_URI || process.env.DATABASE_URL || ''
const databaseSSL = process.env.DATABASE_SSL === 'false' ? false : { rejectUnauthorized: false }
const payloadSecret =
  process.env.PAYLOAD_SECRET ||
  (process.env.NODE_ENV === 'production' ? '' : 'local-development-secret-change-before-production')
const serverURL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  db: postgresAdapter({
    push: false,
    pool: {
      connectionString: databaseURI,
      max: Number(process.env.DATABASE_POOL_MAX || 5),
      ssl: databaseSSL,
    },
  }),
  editor: lexicalEditor(),
  secret: payloadSecret,
  serverURL,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload/payload-types.ts'),
  },
})
