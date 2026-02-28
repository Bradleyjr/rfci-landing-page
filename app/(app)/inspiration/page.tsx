import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { InspirationGallery } from './InspirationGallery'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Inspiration Gallery | RFCI',
  description: 'Explore real-world resilient flooring installations across healthcare, education, hospitality, and more — featuring projects from RFCI member companies.',
}

export default async function InspirationPage() {
  const payload = await getPayload({ config: configPromise })

  const [projectsResult, flooringTypesResult, environmentsResult, membersResult] = await Promise.all([
    payload.find({ collection: 'inspiration-projects', sort: 'order', limit: 100 }),
    payload.find({ collection: 'flooring-types', sort: 'order', limit: 50 }),
    payload.find({ collection: 'environments', sort: 'order', limit: 20 }),
    payload.find({ collection: 'members', sort: 'order', limit: 100 }),
  ])

  return (
    <InspirationGallery
      projects={projectsResult.docs}
      flooringTypes={flooringTypesResult.docs}
      environments={environmentsResult.docs}
      members={membersResult.docs}
    />
  )
}
