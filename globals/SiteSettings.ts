import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'heroLine1',
      type: 'text',
      required: true,
      defaultValue: 'THE HOME OF',
      admin: {
        description: 'First line of hero headline (displayed in bold)',
      },
    },
    {
      name: 'heroLine2',
      type: 'text',
      required: true,
      defaultValue: 'RESILIENT FLOORING.',
      admin: {
        description: 'Second line of hero headline (displayed italic + blue)',
      },
    },
    {
      name: 'heroSubheading',
      type: 'textarea',
      required: true,
      defaultValue:
        'RFCI is the trade association for the resilient flooring industry. We bring together manufacturers and suppliers to set standards, run certification programs, and advance the category.',
    },
    {
      name: 'heroCta',
      type: 'text',
      required: true,
      defaultValue: 'Learn about RFCI',
      admin: {
        description: 'CTA button text in the hero info card',
      },
    },
    {
      name: 'heroBoxText',
      type: 'textarea',
      required: true,
      defaultValue:
        'Find out who our members are, what certifications we run, and how we support the industry.',
      admin: {
        description: 'Body text inside the floating hero info card',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
