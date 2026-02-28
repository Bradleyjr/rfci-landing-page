import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'duration', 'featured', 'order'],
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
      admin: {
        description: 'Short description of what the video covers',
      },
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      admin: {
        description: 'Display duration (e.g. 17 min watch)',
      },
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      admin: {
        description: 'Direct URL to the thumbnail image (e.g. from rfci.com/wp-content/uploads/...)',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional: uploaded thumbnail. thumbnailUrl above takes priority if set.',
      },
    },
    {
      name: 'courseUrl',
      type: 'text',
      admin: {
        description: 'Link to the full course/video page (e.g. https://rfci.com/courses/...)',
      },
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'ceu',
      options: [
        { label: 'CEU', value: 'ceu' },
        { label: 'Product', value: 'product' },
        { label: 'Installation', value: 'installation' },
        { label: 'Sustainability', value: 'sustainability' },
      ],
      admin: {
        description: 'Video category for filtering',
      },
    },
    {
      name: 'embedUrl',
      type: 'text',
      admin: {
        description: 'YouTube/Vimeo embed URL for inline playback',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Only one video should be featured (shown large on left)',
      },
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
