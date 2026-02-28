import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FlooringOverview } from './FlooringOverview'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Resilient Flooring Types | RFCI',
  description: 'Explore the full range of resilient flooring — from luxury vinyl tile to linoleum, rubber, cork, and more.',
}

export default async function FlooringPage() {
  const payload = await getPayload({ config: configPromise })

  const flooringTypesResult = await payload.find({
    collection: 'flooring-types',
    sort: 'order',
    limit: 50,
  })

  return <FlooringOverview flooringTypes={flooringTypesResult.docs} />
}
