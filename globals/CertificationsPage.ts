import type { GlobalConfig } from 'payload'

export const CertificationsPage: GlobalConfig = {
  slug: 'certifications-page',
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
          defaultValue: 'Certifications you can rely on.',
          admin: { description: 'Main heading for the certifications hub page' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          defaultValue:
            "RFCI's certification programs verify indoor air quality, sustainability, and material transparency—giving architects and designers confidence in every specification.",
        },
      ],
    },
  ],
}
