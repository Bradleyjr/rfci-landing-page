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
      defaultValue: 'THE VOICE OF',
      admin: {
        description: 'First line of hero headline (displayed in bold)',
      },
    },
    {
      name: 'heroLine2',
      type: 'text',
      required: true,
      defaultValue: 'A MOVEMENT.',
      admin: {
        description: 'Second line of hero headline (displayed italic + blue)',
      },
    },
    {
      name: 'heroSubheading',
      type: 'textarea',
      required: true,
      defaultValue:
        'RFCI is more than an information resource—we are the community of manufacturers and suppliers shaping the future of resilient flooring through advocacy, standards, and education.',
    },
    {
      name: 'heroCta',
      type: 'text',
      required: true,
      defaultValue: 'Get to know RFCI',
      admin: {
        description: 'CTA button text in the hero info card',
      },
    },
    {
      name: 'heroBoxText',
      type: 'textarea',
      required: true,
      defaultValue:
        'Discover the people, events, and rigorous certifications driving the resilient flooring industry forward.',
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
