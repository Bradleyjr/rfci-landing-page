import { VideosLibrary } from './VideosLibrary'
import { VIDEOS_PAGE } from '../../_data/pages'
import { VIDEOS } from '../../_data/videos'

export const metadata = {
  title: 'Education & CEU Courses | RFCI',
  description: 'Explore RFCI\'s library of continuing education courses and videos on resilient flooring certifications, sustainability, and material health.',
}

export default function VideosRoute() {
  return (
    <VideosLibrary videos={VIDEOS} pageSettings={VIDEOS_PAGE} />
  )
}
