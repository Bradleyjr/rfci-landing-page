import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Content',
  },
  fields: [
    // ── Hero Section ──────────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Hero Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'heroLine1',
          type: 'text',
          required: true,
          defaultValue: 'THE HOME OF',
          admin: { description: 'First line of hero headline (displayed in bold)' },
        },
        {
          name: 'heroLine2',
          type: 'text',
          required: true,
          defaultValue: 'RESILIENT FLOORING.',
          admin: { description: 'Second line of hero headline (displayed italic + blue)' },
        },
        {
          name: 'heroSubheading',
          type: 'textarea',
          required: true,
          defaultValue:
            'RFCI is the trade association for the resilient flooring industry. We bring together manufacturers and suppliers to set standards, run certification programs, and advance the category.',
        },
        {
          name: 'heroCta',
          type: 'text',
          required: true,
          defaultValue: 'Learn about RFCI',
          admin: { description: 'CTA button text in the hero info card' },
        },
        {
          name: 'heroBoxText',
          type: 'textarea',
          required: true,
          defaultValue:
            'Find out who our members are, what certifications we run, and how we support the industry.',
          admin: { description: 'Body text inside the floating hero info card' },
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },

    // ── Materials Carousel Section ────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Materials Carousel Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'materialsHeading',
          type: 'text',
          defaultValue: 'The full range of resilient flooring.',
          admin: { description: 'Main heading for the materials/flooring types carousel' },
        },
      ],
    },

    // ── Environments Section ──────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Environments Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'environmentsHeading',
          type: 'text',
          defaultValue: 'Built for real spaces.',
          admin: { description: 'Main heading for the environments grid' },
        },
        {
          name: 'environmentsSubheading',
          type: 'textarea',
          defaultValue: 'From single-family homes to hospitals and hotels, resilient flooring delivers in any environment.',
        },
      ],
    },

    // ── Why Resilient Section ─────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Why Resilient Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'whyResilientHeading',
          type: 'text',
          defaultValue: 'Why Resilient?',
        },
        {
          name: 'whyResilientSubheading',
          type: 'text',
          defaultValue: 'The number one flooring category in North America.',
        },
        {
          name: 'whyResilientStatValue',
          type: 'text',
          defaultValue: '65',
          admin: { description: 'Animated counter target number (e.g. 65 for 65%)' },
        },
        {
          name: 'whyResilientStatLabel',
          type: 'text',
          defaultValue: 'of hard surface flooring in North America',
        },
        {
          name: 'whyResilientImage',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Background image for the Why Resilient section' },
        },
        {
          name: 'whyResilientBenefits',
          type: 'array',
          maxRows: 8,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── Mission Section ───────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Mission Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'missionLabel',
          type: 'text',
          defaultValue: 'About RFCI',
        },
        {
          name: 'missionHeading',
          type: 'text',
          defaultValue: 'The voice of',
          admin: { description: 'First part of heading (before italic text)' },
        },
        {
          name: 'missionHeadingItalic',
          type: 'text',
          defaultValue: 'resilient flooring.',
          admin: { description: 'Italic part of heading' },
        },
        {
          name: 'missionFoundedText',
          type: 'text',
          defaultValue: 'Est. 1976 · LaGrange, Georgia',
        },
        {
          name: 'missionDescription1',
          type: 'textarea',
          defaultValue: 'Founded in 1976, RFCI is the non-profit trade association representing and protecting the resilient flooring industry in ways that no single manufacturer can.',
        },
        {
          name: 'missionDescription2',
          type: 'textarea',
          defaultValue: 'From setting technical standards to running third-party certification programs, we advance the category for the entire built environment.',
        },
        {
          name: 'missionPillarsHeading',
          type: 'text',
          defaultValue: 'Our Strategic Focus',
        },
        {
          name: 'missionPillars',
          type: 'array',
          maxRows: 8,
          fields: [
            { name: 'number', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ── Standards/Certifications Section ───────────────────────────────────
    {
      type: 'collapsible',
      label: 'Standards Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'standardsHeading',
          type: 'text',
          defaultValue: 'Certifications you can rely on',
        },
        {
          name: 'standardsSubheading',
          type: 'textarea',
          defaultValue: "RFCI manages three of the flooring industry's most trusted certification programs—built on rigorous testing, transparency, and continuous improvement.",
        },
        {
          name: 'standardsCtaText',
          type: 'text',
          defaultValue: 'More about our certifications',
        },
      ],
    },

    // ── Education Section ─────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Education Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'educationHeading',
          type: 'text',
          defaultValue: 'From our video library',
        },
        {
          name: 'educationSubheading',
          type: 'text',
          defaultValue: 'Continuing education and technical training',
        },
      ],
    },

    // ── LinkedIn Feed Section ─────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'LinkedIn Feed Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'linkedinHeading',
          type: 'text',
          defaultValue: 'Latest from RFCI',
        },
        {
          name: 'linkedinUrl',
          type: 'text',
          defaultValue: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
          admin: { description: 'LinkedIn company page URL' },
        },
      ],
    },

    // ── Members Section ───────────────────────────────────────────────────
    {
      type: 'collapsible',
      label: 'Members Section',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'membersHeading',
          type: 'text',
          defaultValue: 'Meet our member companies.',
        },
        {
          name: 'membersSubheading',
          type: 'textarea',
          defaultValue: 'RFCI members are the manufacturers and suppliers behind resilient flooring. Together, we set standards, share knowledge, and move the category forward.',
        },
        {
          name: 'membersCtaText',
          type: 'text',
          defaultValue: 'View Member Directory',
        },
      ],
    },
  ],
}
