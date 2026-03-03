import type { GlobalConfig } from 'payload'

export const FlooringPage: GlobalConfig = {
  slug: 'flooring-page',
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
          defaultValue: 'The full range of resilient flooring.',
          admin: { description: 'Main heading for the flooring page' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          defaultValue:
            'From luxury vinyl tile to linoleum, rubber to cork—resilient flooring offers the widest range of performance, aesthetics, and sustainability options in the hard surface category.',
        },
      ],
    },
  ],
}
