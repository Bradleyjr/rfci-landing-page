import { WhyResilient } from './WhyResilient'
import { WHY_RESILIENT_PAGE } from '../../_data/pages'
import { FLOORING_TYPES } from '../../_data/flooring-types'
import { ENVIRONMENTS } from '../../_data/environments'

export const metadata = {
  title: 'Why Resilient Flooring | RFCI',
  description: 'Discover why resilient flooring continues to earn specifications across healthcare, education, retail, housing, hospitality, and workplace interiors.',
}

export default function WhyResilientPage() {
  return (
    <WhyResilient
      pageData={WHY_RESILIENT_PAGE}
      flooringTypes={FLOORING_TYPES}
      environments={ENVIRONMENTS}
    />
  )
}
