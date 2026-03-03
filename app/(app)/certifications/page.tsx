import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CertificationsHub } from './CertificationsHub'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Certifications | RFCI',
  description: 'RFCI certification programs for resilient flooring — FloorScore, ASSURE, AFFIRM, and Environmental Product Declarations.',
}

export default async function CertificationsRoute() {
  const payload = await getPayload({ config: configPromise })

  const [certificationsResult, pageSettings] = await Promise.all([
    payload.find({ collection: 'certifications', sort: 'order', limit: 20, draft: true }),
    payload.findGlobal({ slug: 'certifications-page', draft: true }).catch(() => null),
  ])

  return (
    <>
      <RefreshRouteOnSave />
      <CertificationsHub certifications={certificationsResult.docs} pageSettings={pageSettings} />
    </>
  )
}
