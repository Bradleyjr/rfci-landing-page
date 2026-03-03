import type { GlobalConfig } from 'payload'

export const MembersPage: GlobalConfig = {
  slug: 'members-page',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Hero Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'heroHeading',
          type: 'text',
          defaultValue: 'Meet our member companies.',
          admin: { description: 'Main heading for the members page' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          defaultValue:
            'RFCI members are the manufacturers and suppliers behind resilient flooring. Together, we set standards, share knowledge, and move the category forward.',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Flooring Manufacturers Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'boardSectionHeading',
          type: 'text',
          defaultValue: 'Flooring Manufacturers',
        },
        {
          name: 'boardSectionDescription',
          type: 'textarea',
          defaultValue:
            'RFCI Flooring Manufacturer members are the leading producers of resilient flooring sold in North America — represented on the RFCI Board of Directors.',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Supply Chain Partners Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'associateSectionHeading',
          type: 'text',
          defaultValue: 'Supply Chain Partners',
        },
        {
          name: 'associateSectionDescription',
          type: 'textarea',
          defaultValue:
            'RFCI Supply Chain Partner members provide the raw materials, additives, adhesives, and components that make resilient flooring possible.',
        },
      ],
    },
  ],
}
