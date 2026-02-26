import type { CollectionConfig } from 'payload'

export const Environments: CollectionConfig = {
  slug: 'environments',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'flooringType', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Environment name shown on card (e.g. Healthcare, Schools)',
      },
    },
    {
      name: 'flooringType',
      type: 'text',
      required: true,
      admin: {
        description: 'Flooring product shown in tooltip (e.g. Rubber Flooring, Linoleum)',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 1,
      admin: {
        description: 'Grid position (1–4, fills 2×2 grid). Use 1, 2, 3, 4.',
      },
    },
  ],
}
