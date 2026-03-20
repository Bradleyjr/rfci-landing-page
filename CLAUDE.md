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
```
text-7xl font-display font-light   — homepage hero
text-6xl font-display font-light   — page heroes (lg)
text-5xl font-display font-light   — page heroes (md)
text-4xl font-display font-light   — page heroes (sm) / section headings (lg)
text-3xl font-display font-light   — section headings
text-2xl font-display font-light   — subsection headings
text-xl  font-display font-light   — card titles / sub-headings
```

**Heading emphasis pattern:** Use `font-semibold` (not bold) on the key word inside a light heading.
```tsx
// Correct
<h2 className="font-display font-light">Why <span className="font-semibold">resilient flooring?</span></h2>
// Never
<h2 className="font-display font-bold">...</h2>
```

### Label / eyebrow text
```tsx
<div className="text-label font-bold tracking-widest uppercase text-rfci-blue">Section Label</div>
```
- Always: `text-label font-bold tracking-widest uppercase`
- Color: `text-rfci-blue` on light bg, `text-white/70` on blue/dark bg

### Body text
- Default: `text-rfci-black/60 leading-relaxed font-light`
- Large body: `text-lg md:text-xl text-rfci-black/60 leading-relaxed font-light`

---

## Buttons & CTAs

### Rules
- All action CTAs are **square** (no `rounded-*` classes)
- `rounded-full` is **only** for filter tabs and tag chips — never for action buttons
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
- Hero sections: `pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20`
  - Top padding accounts for fixed nav (~80px tall). `pb = pt - 80px` for visual equality.
- Page max-width: `max-w-7xl mx-auto px-6 md:px-12`

### Section eyebrow + heading block
```tsx
<SectionReveal className="mb-12 md:mb-16">
  <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Label</div>
  <h2 className="text-3xl md:text-4xl font-display font-light">
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

- Nav is fixed, ~80px tall (72px scrolled, 88px unscrolled)
- `<main>` has **no** top padding — nav clearance is handled by each page's first section
- Pages using `<PageHero>`: clearance is built into the component
- Custom hero sections: use `pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20`

---

## Design Decisions to Always Maintain

1. **No rounded buttons** — square CTAs only (except filter tabs)
2. **Icons right** — never put icons to the left of CTA label text
3. **No uppercase CTA text** — `font-semibold` only, no `uppercase tracking-wider` on buttons
4. **No bold icon weights** — don't pass `weight="bold"` to Phosphor icons in CTAs/links
5. **Card hover border `/20` not `/30`** — always `hover:border-rfci-blue/20`
6. **No card translate on hover** — cards don't lift, only border + shadow changes
7. **Animation stagger resets per row** — use `(index % colCount) * 0.06`
