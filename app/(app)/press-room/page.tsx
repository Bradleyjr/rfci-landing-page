import { PressRoomPage } from './PressRoomPage'
import { PRESS_RELEASES } from '../../_data/press-releases'

export const metadata = {
  title: 'Press Room | RFCI',
  description:
    'Archive of RFCI press releases, announcements, and organization updates.',
}

export default function PressRoomRoute() {
  return <PressRoomPage releases={PRESS_RELEASES} />
}
