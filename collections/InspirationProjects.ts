import type { CollectionConfig } from 'payload'

export const InspirationProjects: CollectionConfig = {
  slug: 'inspiration-projects',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'featured', 'order'],
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
      unique: true,
      admin: {
        description: 'URL-friendly identifier',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'member',
      type: 'relationship',
      relationTo: 'members',
      admin: {
        description: 'Member company associated with this project',
      },
    },
    {
      name: 'flooringType',
      type: 'relationship',
      relationTo: 'flooring-types',
      admin: {
        description: 'Type of flooring used in this project',
      },
    },
    {
      name: 'environment',
      type: 'relationship',
      relationTo: 'environments',
      admin: {
        description: 'Environment/application type',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Project location (e.g. "Chicago, IL")',
      },
    },
    {
      name: 'architect',
      type: 'text',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
    },
  ],
}
