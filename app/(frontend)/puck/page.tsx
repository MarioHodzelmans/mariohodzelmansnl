import config from '@payload-config'
import type { Data } from '@puckeditor/core'
import { headers as getHeaders } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

import PuckEditorClient, { defaultPuckData } from './PuckEditorClient'

export const dynamic = 'force-dynamic'

type PuckPageDocument = {
  id: number | string
  puckData?: Data
}

export default async function PuckEditorPage() {
  const payload = await getPayload({ config })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  if (!user) {
    redirect('/admin/login?redirect=/puck')
  }

  // Payload's generated declaration file is updated separately from the runtime config.
  // Cast the new collection slug here so this isolated feature can build before generated
  // types are regenerated, while keeping the returned document shape explicit below.
  const existing = await payload.find({
    collection: 'puck-pages' as never,
    where: {
      slug: {
        equals: 'home',
      },
    },
    limit: 1,
    overrideAccess: false,
    user,
  })

  const document = existing.docs[0] as unknown as PuckPageDocument | undefined
  const initialData = document?.puckData ?? defaultPuckData

  return <PuckEditorClient initialData={initialData} documentId={document?.id ? String(document.id) : undefined} />
}
