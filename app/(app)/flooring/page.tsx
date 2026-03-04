import { FlooringOverview } from './FlooringOverview'
import { FLOORING_PAGE } from '../../_data/pages'
import { FLOORING_TYPES } from '../../_data/flooring-types'

export const metadata = {
  title: 'Resilient Flooring Types | RFCI',
  description: 'Explore the full range of resilient flooring — from luxury vinyl tile to linoleum, rubber, cork, and more.',
}

export default function FlooringPage() {
  return (
    <FlooringOverview flooringTypes={FLOORING_TYPES} pageSettings={FLOORING_PAGE} />
  )
}
