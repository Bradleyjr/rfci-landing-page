import { FAQPage } from './FAQPage'
import { FAQ_PAGE } from '../../_data/pages'
import { FAQS } from '../../_data/faqs'

export const metadata = {
  title: 'Frequently Asked Questions | RFCI',
  description: 'Find answers to common questions about resilient flooring, RFCI certifications, sustainability, and membership.',
}

export default function FAQRoute() {
  return (
    <FAQPage faqs={FAQS} pageSettings={FAQ_PAGE} />
  )
}
