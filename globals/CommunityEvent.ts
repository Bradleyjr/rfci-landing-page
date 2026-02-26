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
      defaultValue: 'More than a category. A community.',
    },
    {
      name: 'sectionSubheading',
      type: 'textarea',
      required: true,
      defaultValue:
        "Twice a year, the resilient flooring community gathers to share knowledge, advance technical standards, and champion sustainability. It's the engine of our movement and an invitation to shape what's next.",
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
