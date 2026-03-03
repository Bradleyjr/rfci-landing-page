import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FlooringOverview } from './FlooringOverview'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Resilient Flooring Types | RFCI',
  description: 'Explore the full range of resilient flooring — from luxury vinyl tile to linoleum, rubber, cork, and more.',
}

export default async function FlooringPage() {
  const payload = await getPayload({ config: configPromise })

  const [flooringTypesResult, pageSettings] = await Promise.all([
    payload.find({ collection: 'flooring-types', sort: 'order', limit: 50, draft: true }),
    payload.findGlobal({ slug: 'flooring-page', draft: true }).catch(() => null),
  ])

  return (
    <>
      <RefreshRouteOnSave />
      <FlooringOverview flooringTypes={flooringTypesResult.docs} pageSettings={pageSettings} />
    </>
  )
}
