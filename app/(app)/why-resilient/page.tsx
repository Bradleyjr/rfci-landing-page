import { WhyResilient } from './WhyResilient'
import { WHY_RESILIENT_PAGE } from '../../_data/pages'

export const metadata = {
  title: 'Why Resilient Flooring | RFCI',
  description: 'Discover why resilient flooring continues to earn specifications across healthcare, education, retail, housing, hospitality, and workplace interiors.',
}

export default function WhyResilientPage() {
  return <WhyResilient pageData={WHY_RESILIENT_PAGE} />
}
