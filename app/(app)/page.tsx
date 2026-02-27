import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { LandingPage } from '../_components/LandingPage'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const [
    siteSettings,
    communityEvent,
    membersResult,
    flooringTypesResult,
    certificationsResult,
    environmentsResult,
    videosResult,
  ] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }),
    payload.findGlobal({ slug: 'community-event' }),
    payload.find({ collection: 'members', sort: 'order', limit: 100 }),
    payload.find({ collection: 'flooring-types', sort: 'order', limit: 50 }),
    payload.find({ collection: 'certifications', sort: 'order', limit: 20 }),
    payload.find({ collection: 'environments', sort: 'order', limit: 10 }),
    payload.find({ collection: 'videos', sort: 'order', limit: 20 }),
  ])

  // Debug: log CMS data counts on server
  console.log('[PAGE] Flooring Types:', flooringTypesResult.totalDocs, flooringTypesResult.docs.map((d: any) => d.title))
  console.log('[PAGE] Certifications:', certificationsResult.totalDocs, certificationsResult.docs.map((d: any) => d.title))
  console.log('[PAGE] Members:', membersResult.totalDocs)

  return (
    <LandingPage
      siteSettings={siteSettings}
      communityEvent={communityEvent}
      members={membersResult.docs}
      flooringTypes={flooringTypesResult.docs}
      certifications={certificationsResult.docs}
      environments={environmentsResult.docs}
      videos={videosResult.docs}
    />
  )
}
