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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    // ── Detail page fields (used by /flooring/[slug]) ─────────────────
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        description: 'URL-safe identifier (e.g. flexible-lvt, rigid-core, rubber)',
      },
    },
    {
      name: 'longDescription',
      type: 'richText',
      admin: {
        description: 'Full page content for the flooring type detail page',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Hero banner image for the detail page',
      },
    },
    {
      name: 'features',
      type: 'array',
      maxRows: 8,
      admin: {
        description: 'Performance attributes and specifications',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'applications',
      type: 'array',
      maxRows: 8,
      admin: {
        description: 'Environments where this flooring type excels',
      },
      fields: [
        { name: 'environment', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'relatedCertifications',
      type: 'relationship',
      relationTo: 'certifications',
      hasMany: true,
      admin: {
        description: 'Which RFCI certification programs apply to this product type',
      },
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
