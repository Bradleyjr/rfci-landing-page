import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { VideosLibrary } from './VideosLibrary'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'


export const metadata = {
  title: 'Education & CEU Courses | RFCI',
  description: 'Explore RFCI\'s library of continuing education courses and videos on resilient flooring certifications, sustainability, and material health.',
}

export default async function VideosRoute() {
  const payload = await getPayload({ config: configPromise })
  const [videosResult, pageSettings] = await Promise.all([
    payload.find({ collection: 'videos', sort: 'order', limit: 50, draft: true }),
    payload.findGlobal({ slug: 'videos-page', draft: true }).catch(() => null),
  ])
  return (
    <>
      <RefreshRouteOnSave />
      <VideosLibrary videos={videosResult.docs} pageSettings={pageSettings} />
    </>
  )
}
