import type { GlobalConfig } from 'payload'

export const ResourcesPage: GlobalConfig = {
  slug: 'resources-page',
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
          defaultValue: 'Resources & Technical Documents',
          admin: { description: 'Main heading for the resources page' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          defaultValue:
            'Access technical guides, sustainability reports, standards documents, and white papers from RFCI.',
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
          defaultValue: 'Need something specific?',
        },
        {
          name: 'ctaSubheading',
          type: 'textarea',
          defaultValue:
            'If you are looking for a specific document or technical resource, reach out to our team and we will help you find it.',
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
