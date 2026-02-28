import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { WhyResilient } from './WhyResilient'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Why Resilient Flooring | RFCI',
  description: 'Discover why resilient flooring is the fastest-growing segment of the hard surface market — unmatched versatility across design, performance, and sustainability.',
}

export default async function WhyResilientPage() {
  const payload = await getPayload({ config: configPromise })

  const [whyResilientPage, flooringTypesResult, environmentsResult] = await Promise.all([
    payload.findGlobal({ slug: 'why-resilient-page', draft: true }),
    payload.find({ collection: 'flooring-types', sort: 'order', limit: 50, draft: true }),
    payload.find({ collection: 'environments', sort: 'order', limit: 10, draft: true }),
  ])

  return (
    <>
      <RefreshRouteOnSave />
      <WhyResilient
        pageData={whyResilientPage}
        flooringTypes={flooringTypesResult.docs}
        environments={environmentsResult.docs}
      />
    </>
  )
}
