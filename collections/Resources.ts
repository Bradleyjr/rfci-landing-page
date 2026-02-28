import type { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'technical',
      options: [
        { label: 'Technical Guide', value: 'technical' },
        { label: 'Sustainability', value: 'sustainability' },
        { label: 'Standard', value: 'standard' },
        { label: 'White Paper', value: 'whitepaper' },
        { label: 'Brochure', value: 'brochure' },
      ],
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload document (PDF, etc.)',
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        description: 'External URL if document is hosted elsewhere',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
    },
  ],
}
