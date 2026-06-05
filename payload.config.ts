import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media } from './payload/collections/Media.ts'
import { Users } from './payload/collections/Users.ts'
import { Blogs } from './payload/collections/Blogs.ts'
import { Cases } from './payload/collections/Cases.ts'
import { fallbackBlogPosts } from './lib/blogModels.ts'
import { fallbackCases } from './lib/cases.ts'

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
  collections: [Users, Media, Blogs, Cases],
  onInit: async (payload) => {
    try {
      const existingBlogs = await payload.find({
        collection: 'blogs',
        limit: 1,
      })

      if (existingBlogs.totalDocs > 0) {
        return
      }

      for (const post of fallbackBlogPosts) {
        await payload.create({
          collection: 'blogs',
          data: {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            publishedAt: post.publishedAt,
            readTime: post.readTime,
            featured: post.featured || false,
            status: 'published',
            categories: post.categories.map((label) => ({ label })),
          },
        })
      }

      const existingCases = await payload.find({
        collection: 'cases',
        limit: 1,
      })

      if (existingCases.totalDocs === 0 && process.env.PAYLOAD_SEED_CASES !== 'false') {
        for (const item of fallbackCases) {
          await payload.create({
            collection: 'cases',
            data: {
              title: item.title,
              slug: item.slug,
              excerpt: item.excerpt,
              category: item.category,
              services: item.services.map((service) => ({ service })),
              year: item.year,
              featured: item.featured,
              sortOrder: item.sortOrder,
            },
          })
        }
      }
    } catch (error) {
      payload.logger.warn({ err: error }, 'Skipping automatic blog seed')
    }
  },
  db: postgresAdapter({
    push: process.env.PAYLOAD_DB_PUSH === 'false' ? false : true,
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
