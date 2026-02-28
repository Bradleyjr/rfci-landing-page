import type { CollectionConfig } from 'payload'

export const LinkedInPosts: CollectionConfig = {
  slug: 'linkedin-posts',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'postDate', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Post headline or summary',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        description: 'Short snippet of post content (1-2 sentences)',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional: uploaded post image/thumbnail',
      },
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: {
        description: 'Direct URL to the post image (fallback if no upload)',
      },
    },
    {
      name: 'postUrl',
      type: 'text',
      required: true,
      admin: {
        description: 'Link to the actual LinkedIn post',
      },
    },
    {
      name: 'postDate',
      type: 'text',
      admin: {
        description: 'Display date (e.g., "Feb 15, 2026")',
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
