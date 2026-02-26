import type { GlobalConfig } from 'payload'

export const CommunityEvent: GlobalConfig = {
  slug: 'community-event',
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      required: true,
      defaultValue: 'Industry people. Getting together twice a year.',
    },
    {
      name: 'sectionSubheading',
      type: 'textarea',
      required: true,
      defaultValue:
        "Twice a year, RFCI members and industry professionals get together to share what's working, talk through technical standards, and discuss sustainability. If you work in resilient flooring, this is where you want to be.",
    },
    {
      name: 'eventTitle',
      type: 'text',
      required: true,
      defaultValue: 'Fall Industry Meeting',
    },
    {
      name: 'eventLocation',
      type: 'text',
      required: true,
      defaultValue: 'Austin, TX',
    },
    {
      name: 'eventDate',
      type: 'text',
      required: true,
      defaultValue: 'Oct 12–14',
      admin: {
        description: 'Display date string (e.g. Oct 12–14)',
      },
    },
    {
      name: 'photos',
      type: 'array',
      admin: {
        description: 'Community event photos shown in the rotating arc (up to 12 ideal)',
      },
      fields: [
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
