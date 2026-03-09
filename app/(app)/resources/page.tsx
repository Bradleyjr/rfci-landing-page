import { RESOURCES_PAGE } from '../../_data/pages'
import { RESOURCES } from '../../_data/resources'
import { ResourcesPage } from './ResourcesPage'

export const metadata = {
  title: 'Resources & Technical Documents | RFCI',
  description: 'Access technical guides, sustainability reports, standards documents, and white papers from RFCI.',
}

export default function ResourcesRoute() {
  return <ResourcesPage resources={RESOURCES} pageSettings={RESOURCES_PAGE} />
}
