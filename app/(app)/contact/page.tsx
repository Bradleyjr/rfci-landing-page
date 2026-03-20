import { Suspense } from 'react'
import { ContactPage } from './ContactPage'

export const metadata = {
  title: 'Contact Us | RFCI',
  description: 'Get in touch with the Resilient Floor Covering Institute. Reach our team for questions about certifications, membership, or resilient flooring.',
}

export default function Page() {
  return (
    <Suspense>
      <ContactPage />
    </Suspense>
  )
}
