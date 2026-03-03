import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FAQPage } from './FAQPage'
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Frequently Asked Questions | RFCI',
  description: 'Find answers to common questions about resilient flooring, RFCI certifications, sustainability, and membership.',
}

export default async function FAQRoute() {
  const payload = await getPayload({ config: configPromise })
  const [faqsResult, pageSettings] = await Promise.all([
    payload.find({ collection: 'faqs', sort: 'order', limit: 100, draft: true }),
    payload.findGlobal({ slug: 'faq-page', draft: true }).catch(() => null),
  ])
  return (
    <>
      <RefreshRouteOnSave />
      <FAQPage faqs={faqsResult.docs} pageSettings={pageSettings} />
    </>
  )
}
