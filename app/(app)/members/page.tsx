import { MEMBERS_PAGE } from '../../_data/pages'
import { MEMBERS } from '../../_data/members'
import { MembersDirectory } from './MembersDirectory'

export const metadata = {
  title: 'Member Directory | RFCI',
  description: 'Meet the manufacturers and suppliers behind resilient flooring. RFCI member companies set standards, share knowledge, and move the category forward.',
}

export default function MembersRoute() {
  return <MembersDirectory members={MEMBERS} pageSettings={MEMBERS_PAGE} />
}
