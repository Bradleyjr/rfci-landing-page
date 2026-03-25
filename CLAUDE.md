# RFCI Landing Page — Design System Reference

This file is automatically loaded by Claude Code at the start of every session.
Always reference these rules before editing any component or adding any UI.

---

## Color Tokens

| Token | Usage |
|---|---|
| `rfci-blue` | Primary brand blue — CTAs, links, active states, accents |
| `rfci-black` | Body text, dark backgrounds |
| `rfci-cream` | Page section backgrounds (default light bg) |
| `rfci-white` | Card backgrounds (slightly warm white, distinct from pure white) |
| `rfci-teal` | Secondary brand color — AFFIRM certification identity only |
| `rfci-light-gray` | Dividers, subtle borders |

**Text opacity variants in use:**
- `text-rfci-black/60` — body copy, descriptions
- `text-rfci-black/50` — secondary labels, meta text
- `text-rfci-black/40` — decorative numbers, placeholder text
- `text-white/60`, `text-white/70`, `text-white/80` — body copy on dark backgrounds

---

## Typography

### Font families
- `font-display` — headings, titles (Canela or equivalent serif)
- `font-sans` — body text (default)

### Heading scale

Strict H1–H4 hierarchy that maps directly to WordPress / Elementor / Astra global font-size settings. Every tag at a given level MUST use the same classes — no exceptions, no per-instance overrides.

```
h1  — text-5xl md:text-6xl lg:text-7xl font-display font-bold
      — Homepage hero ONLY (single use on the root page)
h1  — text-4xl md:text-5xl lg:text-6xl font-display font-light
      — All other page hero titles (PageHero, PhotoPageHero, SplitPageHero, detail page heroes)
h2  — text-4xl md:text-5xl font-display font-light
      — ALL section headings (exactly this, everywhere — no text-2xl, no text-5xl, no lg:text-6xl)
h3  — text-xl md:text-2xl font-display font-light
      — Subsection headings, card titles, modal content titles
h4  — text-lg font-display font-medium
      — Small headings within content blocks (FAQ questions, event card titles, sidebar headings)
```

**CRITICAL: Every section h2 on every page MUST use `text-4xl md:text-5xl font-display font-light`. No exceptions. No `text-5xl`, no `lg:text-6xl` on section headings.**

**CRITICAL: Every card/subsection h3 MUST use `text-xl md:text-2xl font-display font-light`. No `text-lg`, no `text-2xl` alone, no `text-3xl`.**

**CRITICAL: h4 is for small headings WITHIN content blocks only. Use `text-lg font-display font-medium`. Never use h4 for section-level headings.**

**Heading emphasis pattern:** Use `font-semibold` (not bold) on the key word inside a light heading. The `font-light` + `font-semibold` span pattern is a weight treatment, not a size issue.
```tsx
// Correct
<h2 className="text-4xl md:text-5xl font-display font-light">Why <span className="font-semibold">resilient flooring?</span></h2>
// Never
<h2 className="font-display font-bold">...</h2>
// Never — mixing sizes within a level
<h2 className="text-5xl font-display font-light">...</h2>
```

### Label / eyebrow text
```tsx
<div className="text-label font-bold tracking-widest uppercase text-rfci-blue">Section Label</div>
```
- Always: `text-label font-bold tracking-widest uppercase`
- Color: `text-rfci-blue` on light bg, `text-white/70` on blue/dark bg

### Body text

**Size scale:**
- `text-base` (16px) — standard body copy: main paragraphs, benefit descriptions, FAQ answers, pillar descriptions, feature/application descriptions
- `text-sm` (14px) — card descriptions (resource, certification, flooring, member cards), hover overlay text, line-clamped preview text (`line-clamp-*`), LinkedIn post text, footer text, event details, meta text, secondary labels, anything inside a compact card or widget
- `text-xs` (12px) — labels, badges, meta chips (use `text-label` token instead where applicable)

**Patterns:**
- Default: `text-base text-rfci-black/60 leading-relaxed font-light`
- Large body: `text-lg md:text-xl text-rfci-black/60 leading-relaxed font-light`
- Card description: `text-sm text-rfci-black/60 leading-relaxed font-light`

---

## Buttons & CTAs

### Rules
- All action CTAs are **square** (no `rounded-*` classes)
- `rounded-full` is **only** for filter tabs — never for action buttons or tag chips (chips are square)
- Icon always on the **RIGHT**, never left
- No `uppercase` or `tracking-wider` on CTA text
- Use `font-semibold` on CTA text, never `font-bold`

### Primary CTA (blue bg)
```tsx
<a className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200">
  Label <ArrowRight className="w-4 h-4" />
</a>
```

### Secondary CTA (white bg)
```tsx
<a className="inline-flex items-center gap-2 bg-white text-rfci-black px-8 py-3.5 text-sm font-semibold hover:bg-rfci-blue hover:text-white transition-colors duration-200">
  Label <ArrowRight className="w-4 h-4" />
</a>
```

### Ghost CTA (on dark bg)
```tsx
<a className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
  Label <ArrowRight className="w-4 h-4" />
</a>
```

### Text link CTA (no bg)
```tsx
<a className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all duration-200">
  Label <ArrowRight className="w-4 h-4" />
</a>
```

### Filter tabs (the ONE case for rounded-full)
```tsx
<button className="inline-flex items-center gap-1.5 text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-colors duration-200 bg-rfci-blue text-white">
  Active Tab
</button>
<button className="inline-flex items-center gap-1.5 text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-colors duration-200 bg-white text-rfci-black/60 hover:text-rfci-black">
  Inactive Tab
</button>
```

---

## Cards

### Utility cards (resources, members, downloads, videos, LinkedIn posts)
The canonical pattern — use this for all content grid cards:
```tsx
<div className="bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200">
```
- Border: `border-black/5` default, `hover:border-rfci-blue/20` on hover
- Shadow: `hover:shadow-lg` — no custom shadow for utility cards
- Transition: `transition-all duration-200`
- No translate/lift on hover

### Featured showcase cards (cert hub, flooring overview, materials carousel)
For primary hero-level cards only:
```tsx
<div className="bg-rfci-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-[0_20px_60px_rgba(1,100,219,0.08)] transition-all duration-500">
```
- Same border rule (`hover:border-rfci-blue/20`)
- Custom branded blue shadow
- Slower transition: `duration-500`

### Card padding
- Standard: `p-8` or `p-8 md:p-10`
- Compact: `p-6`
- Never mix padding tiers within the same grid

---

## Shadows

Two shadow tiers only:

| Context | Class |
|---|---|
| Utility card hover | `hover:shadow-lg` |
| Featured showcase card hover | `hover:shadow-[0_20px_60px_rgba(1,100,219,0.08)]` |
| Static image/element | `shadow-sm` |
| Dropdown/overlay | `shadow-2xl` |

Never use `shadow-md`, `shadow-xl`, or other custom shadow values on cards.

---

## Borders

| Context | Class |
|---|---|
| Default card border | `border border-black/5` |
| Card border on hover | `hover:border-rfci-blue/20` |
| Section dividers | `border-b border-black/5` or `border-b border-rfci-light-gray/30` |
| FAQ / list dividers | `divide-y divide-rfci-black/10` or `border-b border-rfci-black/10` |
| Active tab/state left border | `border-l-2 border-rfci-blue` |
| Dark bg borders | `border-white/10` or `border-white/20` |

**Never use `border-rfci-blue/30`** on cards (use `/20`).

---

## Transitions

| Context | Class |
|---|---|
| All utility card/button hover | `transition-all duration-200` |
| Color-only changes (text, icon) | `transition-colors duration-200` |
| Featured showcase cards | `transition-all duration-500` |
| Image zoom | `transition-transform duration-700` |
| FAQ accordion grid | `transition-[grid-template-rows] duration-200` |
| Arrow icon nudge | `group-hover:translate-x-1 transition-transform` |

Always use explicit `duration-*`. Never rely on Tailwind's default 150ms.

---

## Spacing / Layout

### Section padding
- Standard sections: `py-20 md:py-28`
- Hero sections: `pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20`
  - Nav is `sticky` (not fixed) — it sits in the document flow and pushes content down. No manual nav-clearance padding needed.
- Page max-width: `max-w-7xl mx-auto px-6 md:px-12`

### Section eyebrow + heading block
```tsx
<SectionReveal className="mb-12 md:mb-16">
  <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Label</div>
  <h2 className="text-4xl md:text-5xl font-display font-light">
    Heading with <span className="font-semibold">emphasis</span>
  </h2>
</SectionReveal>
```

---

## Icons

- Library: `@phosphor-icons/react`
- Default weight: **light** (the IconContext sets this globally — never pass `weight="bold"` or `weight="fill"` unless there is a specific intentional reason)
- Size on CTAs: `w-4 h-4` (16px) for small links, `size={18}` for medium, `w-5 h-5` for cards
- Icons in CTAs always go **right** of the label text

---

## Animation

- Scroll reveals: `<SectionReveal>` component with `delay` prop for stagger
- Stagger delay: `delay={index * 0.06}` — reset per row with `delay={(index % colCount) * 0.06}`
- Never stagger more than 3–4 items worth of delay in a grid (max ~0.18s)
- Background blob animations: pure CSS `@keyframes`, not Motion `animate` props (perf)

---

## Nav & Page Layout

- Nav is `sticky top-0` — sits in the document flow and pushes content down naturally
- No manual nav-clearance padding needed on any page or hero
- `<main>` has **no** top padding — the nav handles itself
- Hero sections use standard padding: `pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20`

---

## Design Decisions to Always Maintain

1. **No rounded buttons** — square CTAs only (filter tabs are the only exception; tag chips are also square)
2. **Icons right** — never put icons to the left of CTA label text
3. **No uppercase CTA text** — `font-semibold` only, no `uppercase tracking-wider` on buttons
4. **No bold icon weights** — don't pass `weight="bold"` to Phosphor icons in CTAs/links
5. **Card hover border `/20` not `/30`** — always `hover:border-rfci-blue/20`
6. **No card translate on hover** — cards don't lift, only border + shadow changes
7. **Animation stagger resets per row** — use `(index % colCount) * 0.06`

---

## Figma MCP Integration Rules

These rules define how to translate Figma inputs into code for this project. Follow them for every Figma-driven change.

### Required Flow (do not skip)

1. Run `get_design_context` first to fetch the structured representation for the exact node(s)
2. If the response is too large or truncated, run `get_metadata` to get the high-level node map, then re-fetch only the required node(s) with `get_design_context`
3. Run `get_screenshot` for a visual reference of the node being implemented
4. Only after you have both `get_design_context` and `get_screenshot`, start implementation
5. Translate the output (usually React + Tailwind) into this project's conventions (see below)
6. Validate against the Figma screenshot for 1:1 visual parity before marking complete

### Implementation Rules

- Treat Figma MCP output as a **representation of intent**, not final code — always adapt to this project's conventions
- Replace any Tailwind color utilities with RFCI color tokens (`rfci-blue`, `rfci-black`, `rfci-cream`, `rfci-white`, `rfci-teal`, `rfci-light-gray`)
- Replace any `rounded-*` on buttons with no rounding — CTAs are always square
- Replace any icon imports with `@phosphor-icons/react` equivalents at `weight="light"`
- Reuse existing components from `app/_components/` and `app/sections/` instead of creating new ones
- Wrap new sections in `<SectionReveal>` with appropriate `direction` and `delay` props
- Apply stagger delay formula: `delay={index * 0.06}` (reset per row: `delay={(index % cols) * 0.06}`)
- Strive for 1:1 visual parity with the Figma design — validate against the screenshot

### Component Locations

| Type | Location |
|------|----------|
| Shared layout/wrapper | `app/_components/` |
| Page sections | `app/sections/` |
| Page-specific components | Co-located in route folder (e.g. `app/(app)/about/`) |
| Static content/data | `app/_data/*.ts` |
| Utilities / helpers | `app/_lib/` |

### Styling Approach

- **Tailwind CSS v4** — all tokens in `app/globals.css` via `@theme` directive, no `tailwind.config.ts`
- Path alias: `@/*` maps to project root
- Custom utilities: `hide-scrollbar`, `bg-noise`, `bg-dot-grid` (defined in `globals.css`)
- Custom keyframes: `marquee` (30s linear infinite), `hero-zoom`
- No CSS Modules, no styled-components — utility classes only

### Asset Handling

- Local images live in `public/media/` (logos, video, photos) and `public/images/inspiration/` (gallery)
- Reference local assets with root-relative paths: `/media/filename.jpg`, `/images/inspiration/...`
- Hero video: `/media/hero-video.mp4`
- IMPORTANT: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly
- IMPORTANT: Do NOT install new icon packages — use `@phosphor-icons/react` for all icons
- IMPORTANT: Do NOT use placeholder images if a localhost source is provided

### Design Token Quick Reference

```
Colors:    rfci-blue (#0164DB), rfci-black (#121212), rfci-cream (#F5F5F0),
           rfci-white (#ECEFF1), rfci-teal (#00C2D1), rfci-light-gray (#CFD8DC)
Fonts:     font-display (Sora, headings), font-sans (DM Sans, body)
Label:     text-label (0.75rem / 12px)
Sections:  py-20 md:py-28 | max-w-7xl mx-auto px-6 md:px-12
Cards:     bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200
```
