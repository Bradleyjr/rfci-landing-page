import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { WhyResilient } from './WhyResilient'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Why Resilient Flooring | RFCI',
  description: 'Discover why resilient flooring is the fastest-growing segment of the hard surface market — unmatched versatility across design, performance, and sustainability.',
}

export default async function WhyResilientPage() {
  const payload = await getPayload({ config: configPromise })

  const [whyResilientPage, flooringTypesResult, environmentsResult] = await Promise.all([
    payload.findGlobal({ slug: 'why-resilient-page' }),
    payload.find({ collection: 'flooring-types', sort: 'order', limit: 50 }),
    payload.find({ collection: 'environments', sort: 'order', limit: 10 }),
  ])

  return (
    <WhyResilient
      pageData={whyResilientPage}
      flooringTypes={flooringTypesResult.docs}
      environments={environmentsResult.docs}
    />
  )
}
