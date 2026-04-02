import { FLOORING_TYPES } from '../../_data/flooring-types'
import { FlooringOverview } from './FlooringOverview'

export const metadata = {
  title: 'Resilient Flooring Types | RFCI',
  description: 'Explore the full range of resilient flooring — from luxury vinyl tile to linoleum, rubber, cork, and more.',
}

export default function FlooringPage() {
  return <FlooringOverview flooringTypes={FLOORING_TYPES} />
}
