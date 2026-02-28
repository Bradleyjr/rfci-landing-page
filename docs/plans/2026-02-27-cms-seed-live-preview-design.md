# CMS Content Seeding & Live Preview — Design Document

**Date:** 2026-02-27
**Status:** Approved

## Overview

Two goals:

1. **Seed all static fallback content into Payload CMS** so every page is fully CMS-driven
2. **Enable Payload Live Preview** so editors can see changes in real-time within the admin panel

## Part 1: CMS Content Seeding

### Schema Change

Add `historyMilestones` array field to the `WhyResilientPage` global:

```ts
{
  name: 'historyMilestones',
  type: 'array',
  label: 'History Milestones',
  maxRows: 10,
  fields: [
    { name: 'year', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
  ],
}
```

This is the only schema gap — all other static data already has a matching collection/global.

### Seed Script (`scripts/seed.ts`)

A TypeScript script using Payload's Local API that:

1. Initializes Payload with the existing config
2. Clears existing documents (optional `--clean` flag)
3. Seeds data in dependency order:
   - **Globals first:** SiteSettings, AboutPage, WhyResilientPage (incl. milestones), CommunityEvent
   - **Independent collections:** Members, Environments, Videos, LinkedInPosts
   - **Dependent collections:** FlooringTypes, Certifications (have relationships)
   - **FAQs, Resources** (no relationships)
   - **InspirationProjects** (references Members, FlooringTypes, Environments)

Data sources: the existing `_STATIC` / `_FALLBACK` arrays already in each page component.

Run via: `npx tsx scripts/seed.ts`

### What Gets Seeded

| Target | Source | Count |
|--------|--------|-------|
| SiteSettings global | Homepage hero values | 1 |
| AboutPage global | AboutRFCI.tsx (pillars, mission, history) | 1 |
| WhyResilientPage global | WhyResilient.tsx (benefits, milestones, stat) | 1 |
| CommunityEvent global | Homepage component | 1 |
| Members collection | MEMBERS_STATIC | 35 |
| FlooringTypes collection | FLOORING_STATIC / FLOORING_FALLBACK | 9 |
| Certifications collection | CERTS_FALLBACK | 4 |
| Environments collection | Hardcoded in homepage | 4 |
| Videos collection | VIDEOS_STATIC | 4 |
| FAQs collection | FAQS_STATIC | 17 |
| Resources collection | RESOURCES_STATIC | 17 |
| InspirationProjects collection | PROJECTS_STATIC | 6 |

## Part 2: Live Preview

### Approach: Server-Side with RefreshRouteOnSave

Since all pages are server components fetching via Payload Local API, we use the server-side approach:

- Admin panel shows an iframe of the actual frontend page
- On autosave/draft save, `RefreshRouteOnSave` calls `router.refresh()`
- Next.js re-renders the server component with fresh data from Payload

### Config Changes (`payload.config.ts`)

```ts
admin: {
  livePreview: {
    url: ({ data, collectionConfig, globalConfig }) => {
      // Map collections/globals to frontend URLs
      if (collectionConfig?.slug === 'faqs') return '/faq'
      if (collectionConfig?.slug === 'certifications') return `/certifications/${data.slug}`
      // ... etc for each collection
      if (globalConfig?.slug === 'site-settings') return '/'
      if (globalConfig?.slug === 'about-page') return '/about'
      return '/'
    },
    breakpoints: [
      { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
      { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
      { label: 'Desktop', name: 'desktop', width: 1280, height: 800 },
    ],
    collections: [
      'faqs', 'resources', 'certifications', 'flooring-types',
      'inspiration-projects', 'members', 'videos', 'environments',
    ],
    globals: ['site-settings', 'about-page', 'why-resilient-page', 'community-event'],
  },
}
```

### Enable Drafts + Autosave

Add to key collections:

```ts
versions: {
  drafts: {
    autosave: true,
  },
},
```

### RefreshRouteOnSave Component

```tsx
'use client'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter()
  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={process.env.NEXT_PUBLIC_PAYLOAD_URL || ''}
    />
  )
}
```

Added to each page's layout so Live Preview works across all routes.

### Draft-Aware Fetching

Update page server components to pass `draft: true` when in preview mode so unpublished changes are visible.

## Dependencies

- `@payloadcms/live-preview-react` (new install)
- `NEXT_PUBLIC_PAYLOAD_URL` environment variable

## Files Changed

### Schema:
- `globals/WhyResilientPage.ts` — add historyMilestones array
- `app/(app)/why-resilient/WhyResilient.tsx` — read milestones from CMS data

### Seed Script:
- `scripts/seed.ts` (new)
- `package.json` — add seed script

### Live Preview:
- `payload.config.ts` — add livePreview config + drafts/autosave
- `app/_components/RefreshRouteOnSave.tsx` (new)
- All page server components — add RefreshRouteOnSave + draft fetching
- Collections that need drafts: FAQs, Resources, Certifications, FlooringTypes, InspirationProjects, Members, Videos
- `.env` / `.env.example` — add NEXT_PUBLIC_PAYLOAD_URL
