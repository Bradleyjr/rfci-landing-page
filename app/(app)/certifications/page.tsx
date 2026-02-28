import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CertificationsHub } from './CertificationsHub'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Certifications | RFCI',
  description: 'RFCI certification programs for resilient flooring — FloorScore, ASSURE, AFFIRM, and Environmental Product Declarations.',
}

export default async function CertificationsPage() {
  const payload = await getPayload({ config: configPromise })

  const certificationsResult = await payload.find({
    collection: 'certifications',
    sort: 'order',
    limit: 20,
  })

  return <CertificationsHub certifications={certificationsResult.docs} />
}
