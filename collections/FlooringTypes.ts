import type { CollectionConfig } from 'payload'

export const FlooringTypes: CollectionConfig = {
  slug: 'flooring-types',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'subtitle', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'accentColor',
      type: 'text',
      required: true,
      defaultValue: '#9CA3AF',
      admin: {
        description: 'Hex color for the decorative card background (e.g. #9CA3AF)',
      },
    },
    {
      name: 'tags',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          required: true,
          defaultValue: 'gray',
          options: [
            { label: 'Green (sustainable/positive)', value: 'green' },
            { label: 'Tan/Amber (notable/feature)', value: 'tan' },
            { label: 'Gray (neutral)', value: 'gray' },
          ],
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
      admin: {
        description: 'Controls carousel order (lower = first)',
      },
    },
  ],
}
