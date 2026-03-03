import type { GlobalConfig } from 'payload'

export const FAQPage: GlobalConfig = {
  slug: 'faq-page',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Hero Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'heroHeading',
          type: 'text',
          defaultValue: 'Frequently Asked Questions',
          admin: { description: 'Main heading for the FAQ page' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          defaultValue:
            'Find answers to common questions about resilient flooring, RFCI certifications, sustainability, and membership.',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'CTA Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'ctaHeading',
          type: 'text',
          defaultValue: 'Still have questions?',
        },
        {
          name: 'ctaSubheading',
          type: 'textarea',
          defaultValue:
            'We are here to help. Reach out to our team and we will get back to you as soon as possible.',
        },
        {
          name: 'ctaEmail',
          type: 'text',
          defaultValue: 'info@rfci.com',
          admin: { description: 'Contact email for the CTA button' },
        },
      ],
    },
  ],
}
