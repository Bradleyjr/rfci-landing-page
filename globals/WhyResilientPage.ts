import type { GlobalConfig } from 'payload'

export const WhyResilientPage: GlobalConfig = {
  slug: 'why-resilient-page',
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'heroHeading',
      type: 'text',
      defaultValue: 'Why Resilient Flooring?',
    },
    {
      name: 'heroSubheading',
      type: 'textarea',
      defaultValue:
        'Resilient flooring is the fastest-growing segment of the hard surface flooring market\u2014and for good reason. It delivers unmatched versatility across design, performance, and sustainability.',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroStatValue',
      type: 'text',
      defaultValue: '65%',
      admin: { description: 'Stat value displayed in the hero (e.g. 65%)' },
    },
    {
      name: 'heroStatLabel',
      type: 'text',
      defaultValue: 'of hard surface flooring installed in North America',
      admin: { description: 'Stat label text' },
    },
    {
      name: 'benefits',
      type: 'array',
      maxRows: 10,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'sustainabilityContent',
      type: 'richText',
      admin: {
        description: 'Rich text section about sustainability credentials',
      },
    },
  ],
}
