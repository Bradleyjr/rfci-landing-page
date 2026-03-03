import type { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'category', 'order'],
  },
  versions: {
    drafts: { autosave: true },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "demystifying-epds")',
      },
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
        { label: 'Technical Paper', value: 'technical' },
        { label: 'Video', value: 'video' },
        { label: 'Certification', value: 'certification' },
        { label: 'Declaration', value: 'declaration' },
        { label: 'Article', value: 'article' },
        { label: 'Website', value: 'website' },
      ],
    },
    {
      name: 'category',
      type: 'text',
      admin: {
        description: 'Topic grouping (e.g., Sustainability, Installation, Cork)',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Thumbnail image for the resource card',
      },
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      admin: {
        description: 'External thumbnail URL (used if no uploaded thumbnail)',
      },
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
        description: 'External URL (website link, resource page, etc.)',
      },
    },
    {
      name: 'downloadUrl',
      type: 'text',
      admin: {
        description: 'Direct download URL for PDFs hosted externally',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        description: 'YouTube or video embed URL',
      },
    },
    {
      name: 'body',
      type: 'richText',
      admin: {
        description: 'Full article body content (used for article-type resources)',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
    },
  ],
}
