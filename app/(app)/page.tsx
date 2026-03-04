import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { LandingPage } from '../_components/LandingPage'
import { RefreshRouteOnSave } from '../_components/RefreshRouteOnSave'


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
    linkedInPostsResult,
  ] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings', draft: true }),
    payload.findGlobal({ slug: 'community-event', draft: true }),
    payload.find({ collection: 'members', sort: 'order', limit: 100, draft: true }),
    payload.find({ collection: 'flooring-types', sort: 'order', limit: 50, draft: true }),
    payload.find({ collection: 'certifications', sort: 'order', limit: 20, draft: true }),
    payload.find({ collection: 'environments', sort: 'order', limit: 10, draft: true }),
    payload.find({ collection: 'videos', sort: 'order', limit: 20, draft: true }),
    payload.find({ collection: 'linkedin-posts', sort: 'order', limit: 10, draft: true }),
  ])

  return (
    <>
      <RefreshRouteOnSave />
      <LandingPage
        siteSettings={siteSettings}
        communityEvent={communityEvent}
        members={membersResult.docs}
        flooringTypes={flooringTypesResult.docs}
        certifications={certificationsResult.docs}
        environments={environmentsResult.docs}
        videos={videosResult.docs}
        linkedInPosts={linkedInPostsResult.docs}
      />
    </>
  )
}
