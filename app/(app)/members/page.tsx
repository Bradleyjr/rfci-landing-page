import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { MembersDirectory } from './MembersDirectory'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Member Directory | RFCI',
  description: 'Meet the manufacturers and suppliers behind resilient flooring. RFCI member companies set standards, share knowledge, and move the category forward.',
}

export default async function MembersPage() {
  const payload = await getPayload({ config: configPromise })

  const membersResult = await payload.find({
    collection: 'members',
    sort: 'order',
    limit: 100,
  })

  return <MembersDirectory members={membersResult.docs} />
}
