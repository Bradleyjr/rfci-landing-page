import type { GlobalConfig } from 'payload'

export const VideosPage: GlobalConfig = {
  slug: 'videos-page',
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
          defaultValue: 'Education & CEU Courses',
          admin: { description: 'Main heading for the videos page' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          defaultValue:
            "Explore RFCI's continuing education program — earn CEU credits and deepen your understanding of resilient flooring certifications, sustainability practices, and material health.",
        },
      ],
    },
  ],
}
