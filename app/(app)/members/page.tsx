import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { MembersDirectory } from './MembersDirectory'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'


export const metadata = {
  title: 'Member Directory | RFCI',
  description: 'Meet the manufacturers and suppliers behind resilient flooring. RFCI member companies set standards, share knowledge, and move the category forward.',
}

export default async function MembersRoute() {
  const payload = await getPayload({ config: configPromise })

  const [membersResult, pageSettings] = await Promise.all([
    payload.find({ collection: 'members', sort: 'order', limit: 100, draft: true }),
    payload.findGlobal({ slug: 'members-page', draft: true }).catch(() => null),
  ])

  return (
    <>
      <RefreshRouteOnSave />
      <MembersDirectory members={membersResult.docs} pageSettings={pageSettings} />
    </>
  )
}
