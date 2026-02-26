import type { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order'],
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-safe identifier used as the tab key (e.g. floorscore, assure, epd)',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'iconName',
      type: 'select',
      required: true,
      defaultValue: 'shieldCheck',
      options: [
        { label: 'Shield Check (certification badge)', value: 'shieldCheck' },
        { label: 'File Text (document/EPD)', value: 'fileText' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      maxRows: 2,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description: 'Animated number/value (e.g. 10k+, 100%, 5)',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'Stat label (e.g. Certified Products, Global Recognition)',
          },
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
      admin: {
        description: 'Controls tab order (lower = first/default tab)',
      },
    },
  ],
}
