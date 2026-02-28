import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { VideosLibrary } from './VideosLibrary'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Education & CEU Courses | RFCI',
  description: 'Explore RFCI\'s library of continuing education courses and videos on resilient flooring certifications, sustainability, and material health.',
}

export default async function VideosPage() {
  const payload = await getPayload({ config: configPromise })
  const videosResult = await payload.find({ collection: 'videos', sort: 'order', limit: 50, draft: true })
  return (
    <>
      <RefreshRouteOnSave />
      <VideosLibrary videos={videosResult.docs} />
    </>
  )
}
