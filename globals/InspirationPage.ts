import type { GlobalConfig } from 'payload'

export const InspirationPage: GlobalConfig = {
  slug: 'inspiration-page',
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
          defaultValue: 'Real-world installations.',
          admin: { description: 'Main heading for the inspiration page' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          defaultValue:
            'Explore resilient flooring projects from RFCI member companies across healthcare, education, hospitality, corporate, and more.',
        },
      ],
    },
  ],
}
