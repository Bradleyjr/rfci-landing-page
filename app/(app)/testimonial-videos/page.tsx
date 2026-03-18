import { TestimonialVideosPage } from './TestimonialVideosPage'
import { TESTIMONIAL_VIDEOS } from '../../_data/testimonial-videos'

export const metadata = {
  title: 'Testimonial Videos | RFCI',
  description:
    'Archive for RFCI testimonial videos from members, partners, and industry stakeholders.',
}

export default function TestimonialVideosRoute() {
  return <TestimonialVideosPage videos={TESTIMONIAL_VIDEOS} />
}
