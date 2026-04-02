import { InspirationGrid } from './InspirationGrid'
import { INSPIRATION_PROJECTS } from '../../_data/inspiration-projects'
import { FLOORING_TYPES } from '../../_data/flooring-types'
import { ENVIRONMENTS } from '../../_data/environments'
import { MEMBERS } from '../../_data/members'

export const metadata = {
  title: 'Inspiration Gallery | RFCI',
  description: 'Explore real-world resilient flooring installations across healthcare, education, hospitality, and more — featuring projects from RFCI member companies.',
}

export default function InspirationRoute() {
  return (
    <InspirationGrid
      projects={INSPIRATION_PROJECTS}
      flooringTypes={FLOORING_TYPES}
      environments={ENVIRONMENTS}
      members={MEMBERS}
    />
  )
}
