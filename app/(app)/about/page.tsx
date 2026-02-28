import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { AboutRFCI } from './AboutRFCI'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'About RFCI | Resilient Floor Covering Institute',
  description: 'Founded in 1929, RFCI is the trade association for the resilient flooring industry — representing manufacturers and suppliers of vinyl, rubber, linoleum, and cork flooring.',
}

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise })

  const [aboutPage, communityEvent, membersResult] = await Promise.all([
    payload.findGlobal({ slug: 'about-page' }),
    payload.findGlobal({ slug: 'community-event' }),
    payload.find({ collection: 'members', sort: 'order', limit: 100 }),
  ])

  return (
    <AboutRFCI
      aboutPage={aboutPage}
      communityEvent={communityEvent}
      members={membersResult.docs}
    />
  )
}
