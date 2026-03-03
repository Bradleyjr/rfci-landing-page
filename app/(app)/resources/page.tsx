import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ResourcesPage } from './ResourcesPage'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Resources & Technical Documents | RFCI',
  description: 'Access technical guides, sustainability reports, standards documents, and white papers from RFCI.',
}

export default async function ResourcesRoute() {
  const payload = await getPayload({ config: configPromise })
  const [resourcesResult, pageSettings] = await Promise.all([
    payload.find({ collection: 'resources', sort: 'order', limit: 100, draft: true }),
    payload.findGlobal({ slug: 'resources-page', draft: true }).catch(() => null),
  ])
  return (
    <>
      <RefreshRouteOnSave />
      <ResourcesPage resources={resourcesResult.docs} pageSettings={pageSettings} />
    </>
  )
}
