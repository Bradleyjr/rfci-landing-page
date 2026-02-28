import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ResourcesPage } from './ResourcesPage'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Resources & Technical Documents | RFCI',
  description: 'Access technical guides, sustainability reports, standards documents, and white papers from RFCI.',
}

export default async function ResourcesRoute() {
  const payload = await getPayload({ config: configPromise })
  const resourcesResult = await payload.find({ collection: 'resources', sort: 'order', limit: 100 })
  return <ResourcesPage resources={resourcesResult.docs} />
}
