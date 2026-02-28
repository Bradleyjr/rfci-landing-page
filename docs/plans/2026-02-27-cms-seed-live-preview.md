# CMS Content Seeding & Live Preview Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Seed all static fallback content into Payload CMS and enable server-side live preview so editors can see changes in real-time within the admin panel.

**Architecture:** Extend existing `scripts/seed.ts` with missing collections (FAQs, Resources, InspirationProjects, Certifications detail data) and globals (AboutPage, WhyResilientPage). Add a `historyMilestones` array field to the WhyResilientPage global. Install `@payloadcms/live-preview-react`, configure `admin.livePreview` in `payload.config.ts` with URL mappings and responsive breakpoints, add `RefreshRouteOnSave` component to all page routes, and enable drafts + autosave on content collections.

**Tech Stack:** Payload CMS v3, Next.js 15 App Router, `@payloadcms/live-preview-react`, SQLite (dev) / PostgreSQL (prod), TypeScript

---

### Task 1: Add historyMilestones field to WhyResilientPage global

**Files:**
- Modify: `globals/WhyResilientPage.ts`
- Modify: `app/(app)/why-resilient/WhyResilient.tsx`

**Step 1: Add the historyMilestones array field**

In `globals/WhyResilientPage.ts`, add after the `sustainabilityContent` field:

```ts
{
  name: 'historyMilestones',
  type: 'array',
  maxRows: 10,
  admin: {
    description: 'Timeline milestones shown on the Why Resilient page',
  },
  fields: [
    { name: 'year', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
  ],
},
```

**Step 2: Update WhyResilient.tsx to read milestones from CMS data**

In `app/(app)/why-resilient/WhyResilient.tsx`, the component already receives `pageData` prop from the server component. Update the history section to prefer CMS data:

Replace the line where `HISTORY_MILESTONES` is used in the `.map()` call with:

```tsx
const milestones = pageData?.historyMilestones?.length ? pageData.historyMilestones : HISTORY_MILESTONES
```

Then use `milestones` in the `.map()` instead of `HISTORY_MILESTONES`.

**Step 3: Verify build compiles**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

**Step 4: Commit**

```bash
git add globals/WhyResilientPage.ts app/(app)/why-resilient/WhyResilient.tsx
git commit -m "feat(cms): add historyMilestones field to WhyResilientPage global"
```

---

### Task 2: Expand seed script — FAQs collection

**Files:**
- Modify: `scripts/seed.ts`

**Step 1: Add FAQs seed data**

Add after the existing `seedGlobal('community-event', ...)` block in `scripts/seed.ts`. The FAQ answer field is `richText` (Lexical format), so answers must be wrapped in Lexical root structure:

```ts
// ── FAQs ──────────────────────────────────────────────────────────────
const faqEntries = [
  { question: 'What is resilient flooring?', answer: 'Resilient flooring refers to a category of hard surface flooring materials that offer a degree of flexibility and "give" underfoot. This includes luxury vinyl tile (LVT), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber, and cork flooring.', category: 'general', order: 1 },
  { question: 'What is the Resilient Floor Covering Institute (RFCI)?', answer: 'RFCI is the trade association for the resilient flooring industry in North America. Founded in 1976, we represent manufacturers and suppliers of vinyl, rubber, linoleum, and cork flooring products.', category: 'general', order: 2 },
  { question: 'What is FloorScore certification?', answer: "FloorScore is the flooring industry's most recognized indoor air quality certification. It independently verifies that a flooring product meets California's strict VOC emissions standards (CA Section 01350), one of the toughest air quality benchmarks in the world.", category: 'certifications', order: 3 },
  { question: 'What does ASSURE certification cover?', answer: "ASSURE is RFCI's third-party sustainability certification that evaluates resilient flooring products across the full lifecycle—raw materials, manufacturing, product performance, and end-of-life recovery.", category: 'certifications', order: 4 },
  { question: 'What is an Environmental Product Declaration (EPD)?', answer: 'An EPD is a standardized, third-party verified document that transparently reports the environmental impact of a product across its entire lifecycle, from raw material extraction through manufacturing, use, and end-of-life disposal.', category: 'sustainability', order: 5 },
  { question: 'Is resilient flooring recyclable?', answer: 'Many resilient flooring products are recyclable. Several RFCI member companies operate take-back and recycling programs for post-installation and post-consumer flooring waste. The industry is continuously expanding recycling capabilities.', category: 'sustainability', order: 6 },
  { question: 'Can resilient flooring be installed over existing floors?', answer: "In many cases, yes. Resilient flooring can often be installed over existing hard, smooth surfaces, which can reduce demolition waste and installation time. However, subfloor conditions must meet the manufacturer's requirements.", category: 'installation', order: 7 },
  { question: 'What subfloor preparation is needed for resilient flooring?', answer: "Subfloors must be clean, dry, smooth, and structurally sound. Specific moisture, flatness, and temperature requirements vary by product. Always follow the manufacturer's installation guidelines.", category: 'installation', order: 8 },
  { question: 'How does RFCI membership work?', answer: 'RFCI membership is by invitation and is open to manufacturers and suppliers within the resilient flooring industry. Members participate in industry advocacy, certification programs, and educational initiatives.', category: 'membership', order: 9 },
  { question: 'Does RFCI offer continuing education?', answer: 'Yes. RFCI provides AIA-approved continuing education units (CEUs) covering topics like indoor air quality, sustainability certifications, material health, and Environmental Product Declarations.', category: 'general', order: 10 },
  { question: 'How does resilient flooring impact indoor air quality?', answer: 'Resilient flooring can significantly contribute to healthy indoor environments. Products certified through FloorScore meet California Section 01350 standards for low VOC emissions—one of the strictest indoor air quality benchmarks in the world. Proper product selection and installation help maintain healthy IAQ in homes, schools, healthcare facilities, and commercial buildings.', category: 'sustainability', order: 11 },
  { question: 'What are VOCs and why do they matter in flooring?', answer: 'VOCs (Volatile Organic Compounds) are chemicals that can off-gas from building materials, including some flooring products. Prolonged exposure to high VOC levels may cause headaches, respiratory irritation, and other health effects. FloorScore-certified resilient flooring products are independently tested to ensure VOC emissions fall well below recognized health thresholds.', category: 'sustainability', order: 12 },
  { question: 'What is the difference between FloorScore, ASSURE, and AFFIRM?', answer: "FloorScore certifies that a product meets strict indoor air quality (VOC emission) standards. ASSURE evaluates broader sustainability criteria across a product's full lifecycle—materials, manufacturing, performance, and end-of-life. AFFIRM is an ANSI-accredited program that verifies product composition and regulatory compliance through independent lab testing. Together, these three programs provide comprehensive, third-party assurance of quality, health, and environmental responsibility.", category: 'certifications', order: 13 },
  { question: 'How does resilient flooring compare to carpet for health and maintenance?', answer: 'Resilient flooring offers several advantages over carpet in health-sensitive environments. Its smooth, non-porous surface does not harbor dust mites, mold, or allergens the way carpet fibers can. It is easier to clean and disinfect, which is why it is the preferred flooring in healthcare, education, and food-service settings. It also does not absorb moisture, reducing the risk of microbial growth.', category: 'general', order: 14 },
  { question: 'What types of resilient flooring are available?', answer: 'The resilient flooring category includes luxury vinyl tile and plank (LVT/LVP), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber flooring, cork flooring, and rigid-core products like WPC and SPC. Each type offers different performance characteristics suited to residential, commercial, and institutional applications.', category: 'general', order: 15 },
  { question: 'How long does resilient flooring last?', answer: 'With proper installation and maintenance, commercial-grade resilient flooring can last 20 years or more. Luxury vinyl and rubber flooring in particular are known for exceptional durability. Lifecycle cost analyses consistently show resilient flooring among the most cost-effective hard surface options when factoring in installation, maintenance, and replacement cycles.', category: 'general', order: 16 },
  { question: 'What is NSF/ANSI 332?', answer: 'NSF/ANSI 332 is the Sustainability Assessment Standard for Resilient Floor Coverings. It provides a framework for evaluating the environmental and social responsibility of resilient flooring products across their full lifecycle, including raw materials, manufacturing, long-term value, and end-of-life management. Products are rated at Silver, Gold, or Platinum levels.', category: 'sustainability', order: 17 },
]

// FAQ answer field is richText (Lexical), so wrap plain strings in Lexical root format
function textToLexical(text: string) {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text, version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

await seedCollection('faqs', faqEntries.map(f => ({
  ...f,
  answer: textToLexical(f.answer),
})), 'FAQs')
```

**Step 2: Verify seed runs**

Run: `npx tsx scripts/seed.ts --force 2>&1 | grep -i faq`
Expected: `✅ FAQs: seeded 17 documents`

**Step 3: Commit**

```bash
git add scripts/seed.ts
git commit -m "feat(seed): add FAQs collection to seed script"
```

---

### Task 3: Expand seed script — Resources collection

**Files:**
- Modify: `scripts/seed.ts`

**Step 1: Add Resources seed data**

Add the Resources seed block. Pull data from `RESOURCES_STATIC` in `app/(app)/resources/ResourcesPage.tsx`. The Resources collection has fields: `title`, `description`, `type` (select: technical/sustainability/standard/whitepaper/brochure), `externalUrl`, `order`.

```ts
// ── Resources ─────────────────────────────────────────────────────────
await seedCollection('resources', [
  { title: 'FloorScore Indoor Air Quality', description: 'Learn how FloorScore certification ensures hard surface flooring meets California Section 01350 VOC emission standards.', type: 'sustainability', externalUrl: 'https://rfci.com/floorscore/', order: 1 },
  { title: 'ASSURE Certification Overview', description: 'ASSURE verifies that rigid core luxury flooring meets uniform quality standards for indoor air quality, performance, heavy metals, and phthalates.', type: 'sustainability', externalUrl: 'https://rfci.com/resources/assurecertified/', order: 2 },
  { title: 'AFFIRM Sustainability Standard', description: 'AFFIRM is an ANSI-accredited sustainability certification for resilient flooring covering environmental, health, and social responsibility.', type: 'sustainability', externalUrl: 'https://rfci.com/affirm/', order: 3 },
  { title: 'Resilient Flooring Installation Guide', description: 'Best practices for subfloor preparation, adhesive selection, acclimation, and proper installation of resilient flooring products.', type: 'technical', externalUrl: 'https://rfci.com/resources/', order: 4 },
  { title: 'Recommended Work Practices for Removal of Resilient Floor Coverings', description: 'RFCI-recommended procedures for the safe removal of existing resilient flooring, including guidelines for handling older materials.', type: 'technical', externalUrl: 'https://rfci.com/installation/', order: 5 },
  { title: 'NSF/ANSI 332 Assessment Standard', description: 'The sustainability assessment standard for resilient floor coverings covering raw materials, manufacturing, long-term value, and end-of-life management.', type: 'standard', externalUrl: 'https://rfci.com/resources/', order: 6 },
  { title: 'Industry Wide EPDs (2024)', description: 'Updated 2024 Environmental Product Declarations for nine resilient flooring product types, based on ISO 14025 and ISO 14040 standards.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 7 },
  { title: 'Resilient Flooring Care & Maintenance', description: 'Comprehensive guide to cleaning, maintaining, and extending the lifecycle of all resilient flooring types.', type: 'technical', externalUrl: 'https://rfci.com/resources/', order: 8 },
  { title: 'Moisture Testing Standards', description: 'ASTM standards and procedures for testing subfloor moisture content before installing resilient flooring.', type: 'standard', externalUrl: 'https://rfci.com/installation/', order: 9 },
  { title: 'CEU: Resilient Flooring Verified and Certified!', description: 'AIA-approved continuing education course covering FloorScore, ASSURE, AFFIRM, and EPD certifications for resilient flooring.', type: 'technical', externalUrl: 'https://rfci.com/courses/resilient-flooring-verified-and-certified/', order: 10 },
  { title: 'CEU: Demystifying EPDs in Sustainable Design', description: 'AIA-approved course on understanding and utilizing Environmental Product Declarations for sustainable material specification.', type: 'sustainability', externalUrl: 'https://rfci.com/courses/demystifying-epds-in-sustainable-design/', order: 11 },
  { title: 'CEU: Resilient Flooring and Sustainability', description: 'Multi-attribute approach for selecting resilient flooring products to verify performance, durability, and material health attributes.', type: 'sustainability', externalUrl: 'https://rfci.com/courses/resilient-flooring-and-sustainability/', order: 12 },
  { title: 'CEU: Resilient Flooring and Materiality', description: 'Understanding the origin of material ingredients and how they are used to produce resilient floor products.', type: 'technical', externalUrl: 'https://rfci.com/courses/resilient-flooring-materiality/', order: 13 },
  { title: 'Heterogeneous Sheet Vinyl EPD', description: 'Industry Wide Environmental Product Declaration for heterogeneous (multi-layer) sheet vinyl flooring.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 14 },
  { title: 'Rigid Core SPC EPD', description: 'Industry Wide Environmental Product Declaration for rigid core SPC (Stone Polymer Composite) flooring.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 15 },
  { title: 'Rigid Core WPC EPD', description: 'Industry Wide Environmental Product Declaration for rigid core WPC (Wood Polymer Composite) flooring.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 16 },
  { title: 'VCT EPD', description: 'Industry Wide Environmental Product Declaration for vinyl composition tile (VCT) flooring products.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 17 },
], 'Resources')
```

**Step 2: Commit**

```bash
git add scripts/seed.ts
git commit -m "feat(seed): add Resources collection to seed script"
```

---

### Task 4: Expand seed script — Certifications detail data + AboutPage + WhyResilientPage globals

**Files:**
- Modify: `scripts/seed.ts`

**Step 1: Update existing Certifications seed with full detail page data**

The current seed only has 3 certs (missing EPD) and lacks detail-page fields (benefits, process, ctaText, ctaUrl). Replace the existing `seedCollection('certifications', ...)` block with the complete data from `CERTS_FALLBACK` in `app/(app)/certifications/[slug]/page.tsx`. Include all 4 certifications with their full `benefits`, `process`, `stats`, `ctaText`, and `ctaUrl` fields.

**Step 2: Add AboutPage global seed**

```ts
// ── AboutPage global ──────────────────────────────────────────────────
await seedGlobal('about-page', {
  heroHeading: 'The voice of resilient flooring.',
  heroSubheading: 'Founded in 1976, the Resilient Floor Covering Institute is the trade association for North America\u2019s resilient flooring industry\u2014representing the manufacturers and suppliers behind vinyl, rubber, linoleum, and cork flooring.',
  missionStatement: 'RFCI is a non-profit organization that brings the resilient flooring industry together to advocate, educate, and lead\u2014advancing the interests of manufacturers, specifiers, and end users alike.',
  strategicPillars: [
    { number: '01', title: 'Advocacy & Government Affairs', description: 'Represent the resilient flooring industry before legislative and regulatory bodies at federal, state, and local levels.' },
    { number: '02', title: 'Certification Programs', description: 'Administer FloorScore, ASSURE, and AFFIRM certification programs that independently verify indoor air quality, sustainability, and material health.' },
    { number: '03', title: 'Technical Standards', description: 'Develop and maintain industry standards, recommended work practices, and installation guidelines that ensure product quality and performance.' },
    { number: '04', title: 'Sustainability Leadership', description: 'Publish Environmental Product Declarations, promote lifecycle assessment, and advance recycling and end-of-life recovery programs.' },
    { number: '05', title: 'Education & Outreach', description: 'Provide AIA-approved continuing education, industry research, and resources to architects, designers, facility managers, and specifiers.' },
  ],
}, 'AboutPage')
```

**Step 3: Add WhyResilientPage global seed (including historyMilestones)**

```ts
// ── WhyResilientPage global ───────────────────────────────────────────
await seedGlobal('why-resilient-page', {
  heroHeading: 'Why resilient flooring?',
  heroSubheading: 'Resilient flooring is the fastest-growing segment of the hard surface flooring market\u2014and for good reason. It delivers unmatched versatility across design, performance, and sustainability.',
  heroStatValue: '65',
  heroStatLabel: 'of hard surface flooring installed in North America',
  benefits: [
    { title: 'Easy Maintenance', description: 'Simple cleaning protocols and minimal upkeep keep lifecycle costs low and surfaces looking new for years.' },
    { title: 'Water Resistance', description: 'Engineered to handle moisture-prone environments\u2014from kitchens and baths to healthcare and hospitality.' },
    { title: 'Cost Effective', description: 'Competitive installed cost paired with a long service life delivers strong value across the full lifecycle.' },
    { title: 'Design Versatility', description: 'Realistic wood, stone, and custom visuals across tile, plank, and sheet formats for any design vision.' },
    { title: 'Sustainability', description: 'Recyclable materials, low-VOC manufacturing, and third-party certifications support green building goals.' },
    { title: 'Certified Performance', description: 'FloorScore, ASSURE, and AFFIRM certifications provide independent verification of indoor air quality and sustainability.' },
    { title: 'Dimensional Stability', description: 'Resistant to temperature fluctuations and moisture expansion, making it ideal for challenging subfloor conditions.' },
    { title: 'Comfort Underfoot', description: 'Resilient by definition\u2014these floors flex underfoot, reducing fatigue and impact noise in high-traffic environments.' },
  ],
  historyMilestones: [
    { year: '1845', title: 'Linoleum Invented', description: 'Frederick Walton patents linoleum in England, creating the first true resilient floor covering from linseed oil and natural materials.' },
    { year: '1872', title: 'US Manufacturing Begins', description: 'The American Linoleum Manufacturing Company opens in Staten Island, New York, launching domestic resilient flooring production.' },
    { year: '1933', title: 'Vinyl Composition Tile', description: 'VCT is introduced as a durable, affordable alternative for commercial spaces, quickly becoming the standard in schools and hospitals.' },
    { year: '1950s', title: 'The Vinyl Boom', description: 'Post-war construction drives massive adoption of sheet vinyl and VCT across residential and commercial markets nationwide.' },
    { year: '1960s', title: 'Cushioned Vinyl', description: 'Cushion-backed sheet vinyl delivers improved comfort underfoot and sound absorption, expanding resilient flooring into new applications.' },
    { year: 'Today', title: '#2 in North America', description: 'Resilient flooring accounts for 65% of all hard surface flooring installed in North America, driven by LVT innovation and sustainability leadership.' },
  ],
}, 'WhyResilientPage')
```

**Step 4: Verify full seed**

Run: `npx tsx scripts/seed.ts --force 2>&1`
Expected: All collections and globals show `✅` messages. No errors.

**Step 5: Commit**

```bash
git add scripts/seed.ts
git commit -m "feat(seed): add full cert details, AboutPage + WhyResilientPage globals"
```

---

### Task 5: Expand seed script — Members (add missing supply chain partners + Lonseal)

**Files:**
- Modify: `scripts/seed.ts`

**Step 1: Update Members seed data**

The current seed has 23 board members. Update it to include all 35 members from `MEMBERS_STATIC` in `app/(app)/members/MembersDirectory.tsx`, adding the `tier` field and all associate (supply chain partner) members. Add `Lonseal` as a board member. Add all 35 supply chain partners with `tier: 'associate'`.

Pull the full data directly from `MEMBERS_STATIC`. Each member needs: `name`, `logoUrl`, `website`, `tier` ('board' or 'associate'), `row`, `order`.

**Step 2: Verify seed**

Run: `npx tsx scripts/seed.ts --force 2>&1 | grep Members`
Expected: `✅ Members: seeded ~59 documents`

**Step 3: Commit**

```bash
git add scripts/seed.ts
git commit -m "feat(seed): add complete members list with supply chain partners"
```

---

### Task 6: Install live-preview-react and create RefreshRouteOnSave component

**Files:**
- Create: `app/_components/RefreshRouteOnSave.tsx`
- Modify: `.env` (or `.env.example`)

**Step 1: Install the package**

Run: `npm install @payloadcms/live-preview-react`

**Step 2: Create RefreshRouteOnSave component**

Create `app/_components/RefreshRouteOnSave.tsx`:

```tsx
'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'
import React from 'react'

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

**Step 3: Add env variable**

Add to `.env` (create if needed):

```
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
```

**Step 4: Verify build**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add app/_components/RefreshRouteOnSave.tsx .env package.json package-lock.json
git commit -m "feat(live-preview): install live-preview-react, create RefreshRouteOnSave"
```

---

### Task 7: Configure livePreview in payload.config.ts

**Files:**
- Modify: `payload.config.ts`

**Step 1: Add livePreview config to admin block**

In `payload.config.ts`, within the `admin: { ... }` block, add after `importMap`:

```ts
livePreview: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  url: ({ data, collectionConfig, globalConfig }: any) => {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'
    // Collection URL mappings
    if (collectionConfig?.slug === 'faqs') return `${base}/faq`
    if (collectionConfig?.slug === 'resources') return `${base}/resources`
    if (collectionConfig?.slug === 'certifications') return `${base}/certifications/${data?.slug || ''}`
    if (collectionConfig?.slug === 'flooring-types') return `${base}/flooring/${data?.slug || ''}`
    if (collectionConfig?.slug === 'inspiration-projects') return `${base}/inspiration`
    if (collectionConfig?.slug === 'members') return `${base}/members`
    if (collectionConfig?.slug === 'videos') return `${base}/videos`
    if (collectionConfig?.slug === 'environments') return `${base}/inspiration`
    if (collectionConfig?.slug === 'linkedin-posts') return `${base}/`
    // Global URL mappings
    if (globalConfig?.slug === 'site-settings') return `${base}/`
    if (globalConfig?.slug === 'about-page') return `${base}/about`
    if (globalConfig?.slug === 'why-resilient-page') return `${base}/why-resilient`
    if (globalConfig?.slug === 'community-event') return `${base}/`
    return `${base}/`
  },
  breakpoints: [
    { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
    { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
    { label: 'Desktop', name: 'desktop', width: 1280, height: 800 },
  ],
  collections: [
    'faqs', 'resources', 'certifications', 'flooring-types',
    'inspiration-projects', 'members', 'videos', 'environments',
    'linkedin-posts',
  ],
  globals: ['site-settings', 'about-page', 'why-resilient-page', 'community-event'],
},
```

**Step 2: Verify build**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add payload.config.ts
git commit -m "feat(live-preview): add livePreview config with URL mappings and breakpoints"
```

---

### Task 8: Enable drafts + autosave on content collections

**Files:**
- Modify: `collections/FAQs.ts`
- Modify: `collections/Resources.ts`
- Modify: `collections/Certifications.ts`
- Modify: `collections/FlooringTypes.ts`
- Modify: `collections/InspirationProjects.ts`
- Modify: `collections/Members.ts`
- Modify: `collections/Videos.ts`
- Modify: `collections/LinkedInPosts.ts`
- Modify: `collections/Environments.ts`

**Step 1: Add versions config to each collection**

For each collection file listed above, add after the `admin` block:

```ts
versions: {
  drafts: {
    autosave: true,
  },
},
```

Do NOT add this to Users or Media collections.

**Step 2: Verify build**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add collections/
git commit -m "feat(cms): enable drafts + autosave on all content collections"
```

---

### Task 9: Add RefreshRouteOnSave to all page server components

**Files:**
- Modify: `app/(app)/page.tsx` (homepage)
- Modify: `app/(app)/about/page.tsx`
- Modify: `app/(app)/certifications/page.tsx`
- Modify: `app/(app)/certifications/[slug]/page.tsx`
- Modify: `app/(app)/faq/page.tsx`
- Modify: `app/(app)/flooring/page.tsx`
- Modify: `app/(app)/flooring/[slug]/page.tsx`
- Modify: `app/(app)/inspiration/page.tsx`
- Modify: `app/(app)/members/page.tsx`
- Modify: `app/(app)/resources/page.tsx`
- Modify: `app/(app)/videos/page.tsx`
- Modify: `app/(app)/why-resilient/page.tsx`

**Step 1: Add RefreshRouteOnSave to each page**

For each server component page listed above:

1. Add import: `import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'` (adjust relative path as needed — nested routes like `[slug]` pages need `../../../_components/RefreshRouteOnSave`)
2. Add `<RefreshRouteOnSave />` as the first child inside the returned JSX (before the page component)

Example for `app/(app)/faq/page.tsx`:

```tsx
import { RefreshRouteOnSave } from '../../_components/RefreshRouteOnSave'
// ... existing imports

export default async function FAQRoute() {
  // ... existing data fetching
  return (
    <>
      <RefreshRouteOnSave />
      <FAQPage faqs={faqs} />
    </>
  )
}
```

For pages that return a component directly (not wrapped in `<>`), wrap in a fragment first, then add `<RefreshRouteOnSave />`.

**Step 2: Enable draft-aware fetching**

For pages that fetch collection data, add `draft: true` to the `payload.find()` calls. This ensures unpublished draft content is visible in the live preview iframe. Example:

```ts
const result = await payload.find({
  collection: 'faqs',
  sort: 'order',
  limit: 100,
  draft: true,
})
```

Add `draft: true` to all `payload.find()` and `payload.findGlobal()` calls across all page server components.

**Step 3: Verify build**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add app/
git commit -m "feat(live-preview): add RefreshRouteOnSave to all page routes + draft fetching"
```

---

### Task 10: Run full seed, verify, and deploy

**Step 1: Delete existing SQLite DB and re-seed**

```bash
rm -f rfci-dev.db
npx tsx scripts/seed.ts 2>&1
```

Expected: All collections and globals show `✅` messages.

**Step 2: Start dev server and verify**

Run: `npm run dev`

Visit each page and confirm CMS data loads (not static fallback):
- `/` (homepage)
- `/about`
- `/certifications` and `/certifications/floorscore`
- `/faq`
- `/flooring`
- `/inspiration`
- `/members`
- `/resources`
- `/videos`
- `/why-resilient`

**Step 3: Test live preview in admin**

1. Visit `/admin` and log in (create a user if needed: `npx tsx -e "..."` or via admin UI)
2. Navigate to any collection (e.g. FAQs)
3. Edit a document — the Live Preview panel should appear showing the frontend page
4. Make a change and verify it appears in the preview iframe

**Step 4: Build and deploy**

```bash
npx next build
vercel --prod
```

**Step 5: Commit any final fixes**

```bash
git add -A
git commit -m "chore: seed CMS content and verify live preview"
```
