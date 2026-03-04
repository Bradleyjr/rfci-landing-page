import { CERTIFICATIONS_PAGE } from '../../_data/pages'
import { CERTIFICATIONS } from '../../_data/certifications'
import { CertificationsHub } from './CertificationsHub'

export const metadata = {
  title: 'Certifications | RFCI',
  description: 'RFCI certification programs for resilient flooring — FloorScore, ASSURE, AFFIRM, and Environmental Product Declarations.',
}

export default function CertificationsRoute() {
  return <CertificationsHub certifications={CERTIFICATIONS} pageSettings={CERTIFICATIONS_PAGE} />
}
