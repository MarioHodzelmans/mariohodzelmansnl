import config from '@payload-config'
import type { Data } from '@puckeditor/core'
import { headers as getHeaders } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

import PuckEditorClient, { defaultPuckData } from './PuckEditorClient'

export const dynamic = 'force-dynamic'

export default async function PuckEditorPage() {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  if (!user) {
    redirect('/admin/login?redirect=/puck')
  }

  const existing = await payload.find({
    collection: 'puck-pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    limit: 1,
    overrideAccess: false,
    user,
  })

  const document = existing.docs[0]
  const initialData = (document?.puckData as Data | undefined) ?? defaultPuckData

  return <PuckEditorClient initialData={initialData} documentId={document?.id ? String(document.id) : undefined} />
}
