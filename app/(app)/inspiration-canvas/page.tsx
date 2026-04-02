import { InspirationGallery } from '../inspiration/InspirationGallery'
import { INSPIRATION_PROJECTS } from '../../_data/inspiration-projects'
import { FLOORING_TYPES } from '../../_data/flooring-types'
import { ENVIRONMENTS } from '../../_data/environments'
import { MEMBERS } from '../../_data/members'

export const metadata = {
  title: 'Inspiration Canvas | RFCI',
  description: 'Explore real-world resilient flooring installations on an interactive 2D canvas.',
  robots: 'noindex, nofollow',
}

export default function InspirationCanvasRoute() {
  return (
    <InspirationGallery
      projects={INSPIRATION_PROJECTS}
      flooringTypes={FLOORING_TYPES}
      environments={ENVIRONMENTS}
      members={MEMBERS}
    />
  )
}
