import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { AboutRFCI } from './AboutRFCI'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'About RFCI | Resilient Floor Covering Institute',
  description: 'Founded in 1929, RFCI is the trade association for the resilient flooring industry — representing manufacturers and suppliers of vinyl, rubber, linoleum, and cork flooring.',
}

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise })

  const [aboutPage, communityEvent, membersResult] = await Promise.all([
    payload.findGlobal({ slug: 'about-page', draft: true }),
    payload.findGlobal({ slug: 'community-event', draft: true }),
    payload.find({ collection: 'members', sort: 'order', limit: 100, draft: true }),
  ])

  return (
    <>
      <RefreshRouteOnSave />
      <AboutRFCI
        aboutPage={aboutPage}
        communityEvent={communityEvent}
        members={membersResult.docs}
      />
    </>
  )
}
