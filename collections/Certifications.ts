import type { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order'],
  },
  versions: {
    drafts: { autosave: true },
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
        { label: 'Shield Check (FloorScore / certification badge)', value: 'shieldCheck' },
        { label: 'File Text (document)', value: 'fileText' },
        { label: 'Leaf (sustainability / NSF-ANSI)', value: 'leaf' },
        { label: 'Globe (environmental / EPD)', value: 'globe' },
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
    // ── Detail page fields (used by /certifications/[slug]) ──────────
    {
      name: 'longDescription',
      type: 'richText',
      admin: {
        description: 'Full page content for the certification detail page',
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
      name: 'benefits',
      type: 'array',
      maxRows: 8,
      admin: {
        description: 'Key benefits of this certification program',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'process',
      type: 'array',
      maxRows: 10,
      admin: {
        description: 'Steps to achieve this certification',
      },
      fields: [
        { name: 'step', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'downloads',
      type: 'array',
      admin: {
        description: 'Downloadable documents (PDFs, flyers, applications, etc.)',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'description',
          type: 'textarea',
          admin: { description: 'Optional short description of the document' },
        },
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Upload a PDF or document file' },
        },
        {
          name: 'url',
          type: 'text',
          admin: { description: 'External download URL (used if no uploaded file)' },
        },
        {
          name: 'year',
          type: 'text',
          admin: { description: 'Year or version label (e.g., "2024", "2019 Archived")' },
        },
        {
          name: 'category',
          type: 'text',
          admin: { description: 'Grouping label (e.g., "Current EPDs", "Archived EPDs")' },
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      admin: {
        description: 'Call-to-action button text (e.g. "Visit FloorScore.org")',
      },
    },
    {
      name: 'ctaUrl',
      type: 'text',
      admin: {
        description: 'Call-to-action URL',
      },
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
