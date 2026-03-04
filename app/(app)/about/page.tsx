import { AboutRFCI } from './AboutRFCI'
import { ABOUT_PAGE } from '../../_data/pages'
import { MEMBERS } from '../../_data/members'

export const metadata = {
  title: 'About RFCI | Resilient Floor Covering Institute',
  description: 'Founded in 1976, RFCI is the trade association for the resilient flooring industry — representing manufacturers and suppliers of vinyl, rubber, linoleum, and cork flooring.',
}

export default function AboutPage() {
  return (
    <AboutRFCI
      aboutPage={ABOUT_PAGE}
      members={MEMBERS}
    />
  )
}
