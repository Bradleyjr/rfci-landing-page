import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'heroHeading',
      type: 'text',
      defaultValue: 'The voice of resilient flooring.',
    },
    {
      name: 'heroSubheading',
      type: 'textarea',
      defaultValue:
        'Founded in 1929, the Resilient Floor Covering Institute is the trade association for North America\u2019s resilient flooring industry\u2014representing the manufacturers and suppliers behind vinyl, rubber, linoleum, and cork flooring.',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'missionStatement',
      type: 'textarea',
      defaultValue:
        'RFCI is a non-profit organization that brings the resilient flooring industry together to advocate, educate, and lead\u2014advancing the interests of manufacturers, specifiers, and end users alike.',
    },
    {
      name: 'historyContent',
      type: 'richText',
      admin: {
        description: 'Timeline/history content for the About page',
      },
    },
    {
      name: 'strategicPillars',
      type: 'array',
      maxRows: 6,
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
