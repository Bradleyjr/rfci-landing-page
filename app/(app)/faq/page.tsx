import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FAQPage } from './FAQPage'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Frequently Asked Questions | RFCI',
  description: 'Find answers to common questions about resilient flooring, RFCI certifications, sustainability, and membership.',
}

export default async function FAQRoute() {
  const payload = await getPayload({ config: configPromise })
  const faqsResult = await payload.find({ collection: 'faqs', sort: 'order', limit: 100 })
  return <FAQPage faqs={faqsResult.docs} />
}
