import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'general',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Certifications', value: 'certifications' },
        { label: 'Sustainability', value: 'sustainability' },
        { label: 'Installation', value: 'installation' },
        { label: 'Membership', value: 'membership' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
      admin: {
        description: 'Controls display order (lower = first)',
      },
    },
  ],
}
