import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'row', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logoUrl',
      type: 'text',
      admin: {
        description: 'Direct URL to the member logo image (e.g. from rfci.com/wp-content/uploads/...)',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional: uploaded logo file. logoUrl above takes priority if set.',
      },
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'row',
      type: 'select',
      required: true,
      defaultValue: '1',
      options: [
        { label: 'Row 1 (Primary Marquee)', value: '1' },
        { label: 'Row 2 (Secondary)', value: '2' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
      admin: {
        description: 'Lower numbers appear first in the marquee',
      },
    },
  ],
}
