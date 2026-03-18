# RFCI Homepage — Copywriting Scaffold

> **Instructions for Copywriter:** Replace every `[WRITE COPY HERE]` placeholder below with final copy. Each field includes the HTML tag it maps to, where it appears on the page, and the **target character count** (based on the current layout's spacing). Staying within the character range ensures the design holds without layout breaks.
>
> **Character counts include spaces.** Counts are approximate targets — a little over/under is fine, but significant deviation may require a design adjustment.

---

## 1. HERO SECTION

Full-screen opening section. Left side has headline + subtext; right side has a video/image with an overlaid white card.

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 1.1 | **Headline — Line 1** | `<h1>` (bold) | ~11–20 | Short, punchy. All-caps in the design. |
| 1.2 | **Headline — Line 2** | `<h1>` (italic, blue) | ~14–22 | Continuation of H1. Italic + brand blue. |
| 1.3 | **Subheading** | `<p>` | ~140–160 | 1–2 sentences below the headline. Lighter weight, sets context. |
| 1.4 | **Card Body Text** | `<p>` | ~120–150 | White overlay card on the right. Brief value prop or positioning statement. |
| 1.5 | **Card CTA Label** | `<a>` (uppercase link) | ~10–20 | Text for the arrow-link at the bottom of the card (e.g., "Explore More"). Links to `/about`. |

**Current placeholders:**
```
1.1: "LOREM IPSUM"
1.2: "DOLOR SIT AMET"
1.3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud."
1.4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui."
1.5: "Explore More"
```

---

## 2. MISSION SECTION

Blue background section. Two-column header (heading left, description right), followed by a 5-row "pillars" list.

### 2A. Header Area

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 2.1 | **Section Label** | `<div>` (uppercase micro-label) | ~10–20 | Small eyebrow text above the heading. |
| 2.2 | **Heading — Line 1** | `<h2>` (bold) | ~10–20 | First line of the section heading. |
| 2.3 | **Heading — Line 2** | `<h2>` (italic, lighter) | ~12–20 | Second line, italic + slightly transparent white. |
| 2.4 | **Founded Text** | `<div>` (uppercase micro-label) | ~20–30 | Right column eyebrow. Format: "Est. [YEAR] · [City], [State]" |
| 2.5 | **Description — Paragraph 1** | `<p>` | ~130–150 | First paragraph of the mission description. |
| 2.6 | **Description — Paragraph 2** | `<p>` | ~120–140 | Second paragraph of the mission description. |
| 2.7 | **CTA Link Text** | `<a>` | ~15–25 | Arrow-link below description. Links to `/about`. |

**Current placeholders:**
```
2.1: "Lorem Ipsum"
2.2: "Lorem ipsum"
2.3: "dolor sit amet."
2.4: "Est. 0000 · Lorem, Ipsum"
2.5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus."
2.6: "Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
2.7: "Lorem ipsum dolor"
```

### 2B. Pillars List (5 items)

Label row above the pillars:

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 2.8 | **Pillars Section Label** | `<span>` (uppercase micro-label) | ~15–25 | Small label above the list of pillars. |

Each pillar row has a **number** (01–05), a **title**, and a **description**:

| Pillar | Title Tag | Title Target | Description Tag | Description Target |
|--------|-----------|-------------|-----------------|-------------------|
| 01 | `<h4>` | ~15–25 chars | `<p>` | ~90–110 chars |
| 02 | `<h4>` | ~15–25 chars | `<p>` | ~90–110 chars |
| 03 | `<h4>` | ~15–25 chars | `<p>` | ~90–110 chars |
| 04 | `<h4>` | ~15–25 chars | `<p>` | ~90–110 chars |
| 05 | `<h4>` | ~15–25 chars | `<p>` | ~90–110 chars |

**Current placeholders:**
```
2.8: "Lorem Ipsum Dolor"

Pillar 01 Title: "Lorem Ipsum Dolor"
Pillar 01 Desc:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."

Pillar 02 Title: "Sit Amet Consectetur"
Pillar 02 Desc:  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."

Pillar 03 Title: "Adipiscing Elit Sed"
Pillar 03 Desc:  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

Pillar 04 Title: "Eiusmod Tempor Magna"
Pillar 04 Desc:  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."

Pillar 05 Title: "Veniam Nostrud Labore"
Pillar 05 Desc:  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
```

---

## 3. MATERIALS CAROUSEL SECTION

Horizontal scrolling carousel of flooring type cards. White background.

### 3A. Header

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 3.1 | **Section Label** | `<div>` (uppercase micro-label, blue) | ~12–20 | Eyebrow above heading. Currently hardcoded as "The Categories". |
| 3.2 | **Heading** | `<h2>` (light weight) | ~20–35 | Section heading for the carousel. |

**Current placeholders:**
```
3.1: "The Categories"
3.2: "Lorem ipsum dolor sit amet."
```

### 3B. Flooring Type Cards (9 cards)

Each card in the carousel needs:

| Field | Tag | Target Chars | Notes |
|-------|-----|-------------|-------|
| **Title** | `<h3>` | ~10–25 | Product category name. |
| **Subtitle** | `<span>` (uppercase micro-label) | ~12–25 | Format: "Word · Word" or "Word · Word · Word" |
| **Description** | `<p>` (3-line clamp) | ~160–220 | Brief description. Truncated to 3 lines in the card. |
| **Tags** | `<span>` (pill badges) | ~5–15 each | 2–3 short keyword tags per card (e.g., "Residential", "Commercial"). |

**Current placeholders (9 cards):**
```
Card 1 — Title: "Lorem Ipsum" | Subtitle: "Dolor Sit · Amet" | Tags: Lorem, Ipsum, Dolor
Card 2 — Title: "Dolor Amet" | Subtitle: "Sed · Do · Eiusmod" | Tags: Lorem, Amet
Card 3 — Title: "Consectetur Adipiscing" | Subtitle: "Tempor · Incididunt" | Tags: Consectetur, Adipiscing
Card 4 — Title: "Sed Eiusmod Tempor" | Subtitle: "Labore · Dolore" | Tags: Consectetur, Elit Sed
Card 5 — Title: "Magna Aliqua" | Subtitle: "Magna · Aliqua" | Tags: Eiusmod, Tempor
Card 6 — Title: "Veniam Nostrud" | Subtitle: "Veniam · Nostrud" | Tags: Incididunt, Labore
Card 7 — Title: "Exercitation" | Subtitle: "Quis · Exercitation" | Tags: Dolore, Magna, Aliqua
Card 8 — Title: "Ullamco" | Subtitle: "Ullamco · Laboris" | Tags: Veniam, Nostrud
Card 9 — Title: "Laboris" | Subtitle: "Nisi · Aliquip" | Tags: Quis, Nisi
```

> **Note:** Each card also has a full `description` field (~160–220 chars). All currently contain lorem ipsum. Please provide a description for each flooring type.

---

## 4. ENVIRONMENTS SECTION

Grid of 8 flip-cards (4 columns on desktop). Light background. Each card has a front (photo + label) and back (icon, name, description, flooring type, courtesy credit).

### 4A. Header

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 4.1 | **Section Label** | `<div>` (uppercase micro-label, blue) | ~20–30 | Currently hardcoded: "Residential & Commercial". |
| 4.2 | **Heading** | `<h2>` (light weight) | ~18–30 | Section heading. |
| 4.3 | **Subheading** | `<p>` | ~130–155 | Supporting text below the heading. |

**Current placeholders:**
```
4.1: "Residential & Commercial"
4.2: "Lorem ipsum dolor sit."
4.3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
```

### 4B. Environment Cards (8 cards)

Each card needs:

| Field | Tag | Target Chars | Notes |
|-------|-----|-------------|-------|
| **Environment Name** | `<span>` / `<h3>` | ~10–22 | Shown on front label + back heading. (e.g., "Residential", "Healthcare") |
| **Back Description** | `<p>` | ~90–110 | Paragraph on the back of the flip card. |
| **Flooring Type** | `<span>` (uppercase micro-label) | ~10–22 | What type of flooring suits this environment. |
| **Courtesy Credit** | `<div>` (uppercase micro-label) | ~15–25 | Photo credit or courtesy line. |

**Current placeholders (8 cards):**
```
Card 1 — Name: "Lorem Ipsum"       | Flooring Type: "Dolor Sit Amet"
Card 2 — Name: "Consectetur Elit"  | Flooring Type: "Sed Eiusmod"
Card 3 — Name: "Tempor Incididunt" | Flooring Type: "Labore Dolore"
Card 4 — Name: "Magna Aliqua"      | Flooring Type: "Veniam Nostrud"
Card 5 — Name: "Ut Enim Minim"     | Flooring Type: "Quis Exercitation"
Card 6 — Name: "Ullamco Laboris"   | Flooring Type: "Nisi Aliquip"
Card 7 — Name: "Commodo Consequat" | Flooring Type: "Duis Aute Irure"
Card 8 — Name: "Reprehenderit"     | Flooring Type: "Voluptate Velit"

All back descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
All courtesy credits: "Lorem ipsum courtesy"
```

---

## 5. WHY RESILIENT SECTION

Two-column layout. Left: large photo with a stat badge overlay. Right: heading + 5 benefit rows.

### 5A. Header + Stat

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 5.1 | **Section Label** | `<div>` (uppercase micro-label, blue) | ~10–20 | Eyebrow above the heading (right column). |
| 5.2 | **Heading** | `<h2>` (light weight) | ~30–45 | Main section heading. |
| 5.3 | **Stat Value** | `<span>` (large display number) | ~2–5 | Animated counter number on the photo badge (e.g., "65"). Displayed with "%" suffix. |
| 5.4 | **Stat Label** | `<p>` (small text) | ~30–45 | Two-line label below the stat number. Use `\n` for line break. |
| 5.5 | **CTA Link Text** | `<a>` | ~15–25 | Arrow-link below the benefits list. Links to `/why-resilient`. |

**Current placeholders:**
```
5.1: "Lorem Ipsum?"
5.2: "Lorem ipsum dolor sit amet consectetur."
5.3: "65"
5.4: "lorem ipsum dolor\nsit amet consectetur"
5.5: "Lorem ipsum dolor"
```

### 5B. Benefits List (5 items)

Each benefit row has an icon (pre-assigned), a title, and a description:

| Benefit | Title Tag | Title Target | Description Tag | Description Target |
|---------|-----------|-------------|-----------------|-------------------|
| 1 (Broom icon) | `<h3>` | ~10–20 chars | `<p>` | ~90–110 chars |
| 2 (Water drop icon) | `<h3>` | ~10–20 chars | `<p>` | ~90–110 chars |
| 3 (Dollar icon) | `<h3>` | ~10–20 chars | `<p>` | ~90–110 chars |
| 4 (Palette icon) | `<h3>` | ~10–20 chars | `<p>` | ~90–110 chars |
| 5 (Recycle icon) | `<h3>` | ~10–20 chars | `<p>` | ~90–110 chars |

> **Hint:** The icons suggest these themes: (1) Easy maintenance, (2) Water resistance, (3) Cost-effectiveness, (4) Design variety, (5) Sustainability.

**Current placeholders:**
```
Benefit 1 — Title: "Lorem Ipsum"        | Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
Benefit 2 — Title: "Dolor Sit Amet"     | Desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
Benefit 3 — Title: "Consectetur Elit"   | Desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
Benefit 4 — Title: "Sed Do Eiusmod"     | Desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
Benefit 5 — Title: "Tempor Incididunt"  | Desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur."
```

---

## 6. STANDARDS & CERTIFICATIONS SECTION

Tabbed interface on a light stone background. Left column: tab buttons. Right column: content panel with image, description, stats, and CTA.

### 6A. Header

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 6.1 | **Section Label** | `<div>` (uppercase micro-label, blue) | ~10–20 | Hardcoded eyebrow above heading. |
| 6.2 | **Heading** | `<h2>` (light weight) | ~20–35 | Section heading. |
| 6.3 | **Subheading** | `<p>` | ~140–160 | Supporting paragraph below heading. |

**Current placeholders:**
```
6.1: "Lorem Ipsum"
6.2: "Lorem ipsum dolor sit amet"
6.3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud."
```

### 6B. Certification Tabs (4 tabs)

Each certification tab needs:

| Field | Tag | Target Chars | Notes |
|-------|-----|-------------|-------|
| **Title** | `<h3>` (tab button + panel) | ~12–30 | Certification program name (e.g., "FloorScore(R)"). |
| **Description** | `<p>` | ~180–240 | Shown in the content panel when the tab is active. |
| **Stat 1 — Value** | `<div>` (large display) | ~3–10 | e.g., "10,000+", "WPC + SPC", "ANSI", "ISO 14025" |
| **Stat 1 — Label** | `<div>` (uppercase micro-label) | ~15–25 | Label under the stat value. |
| **Stat 2 — Value** | `<div>` (large display) | ~3–10 | Second stat value. |
| **Stat 2 — Label** | `<div>` (uppercase micro-label) | ~15–25 | Label under the second stat value. |

**Current placeholders (4 tabs):**
```
Tab 1 — Title: "Lorem Ipsum(R)"
         Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
         Stat 1: "10,000+" / "Certified Products"
         Stat 2: "90%" / "Of time spent indoors"

Tab 2 — Title: "Dolor Sit(R) Amet"
         Desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur esse possimus omnes quas voluptates sit aspernatur aut odit aut."
         Stat 1: "WPC + SPC" / "Rigid Core Products"
         Stat 2: "100PPM" / "Max Heavy Metals"

Tab 3 — Title: "Consectetur(TM) Adipiscing"
         Desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet."
         Stat 1: "ANSI" / "Accredited Standard"
         Stat 2: "Level 1 + 2" / "Certification Tiers"

Tab 4 — Title: "Sed Eiusmod Tempor Incididunt"
         Desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur esse possimus omnes quas voluptates sit aspernatur aut odit aut fugit sed."
         Stat 1: "ISO 14025" / "EPD Standard"
         Stat 2: "9" / "Product Types Covered"
```

---

## 7. ECOMEDES SECTION

Narrow horizontal banner on a cream background. Logo on the left, description in the middle, CTA button on the right.

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 7.1 | **Description** | `<p>` | ~160–200 | What Ecomedes is and why it matters. Displayed next to the Ecomedes logo. |
| 7.2 | **CTA Button Text** | `<a>` (button) | ~10–20 | Button text. Links to `https://rfci.ecomedes.com/`. |

**Current placeholders:**
```
7.1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
7.2: "Lorem Ipsum"
```

---

## 8. COMMUNITY SECTION

Two-column header (heading left, event card right), followed by a scrolling photo arc/scrapbook.

### 8A. Header + Event Card

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 8.1 | **Section Label** | `<div>` (uppercase micro-label, blue) | ~12–20 | Hardcoded eyebrow. Currently "The Community". |
| 8.2 | **Heading** | `<h2>` (light weight) | ~25–50 | The last sentence is rendered bold + blue. Use a period to separate — everything after the last period becomes the bold/blue portion. |
| 8.3 | **Subheading** | `<p>` | ~150–180 | Supporting paragraph below the heading. |
| 8.4 | **Event Title** | `<h4>` (bold) | ~15–30 | Name of the upcoming event. |
| 8.5 | **Event Location** | `<p>` (inline) | ~8–20 | City, State abbreviation. |
| 8.6 | **Event Date** | `<p>` (inline) | ~8–15 | Date range (e.g., "Oct 12-15"). |

**Current placeholders:**
```
8.1: "The Community"
8.2: "Lorem ipsum dolor sit amet."
8.3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
8.4: "Lorem Ipsum Dolor"
8.5: "Lorem, IP"
8.6: "Jan 00-00"
```

### 8B. Photo Captions (12 photos)

Short captions that appear on hover over each scrapbook photo:

| Photo | Tag | Target Chars | Current Placeholder |
|-------|-----|-------------|-------------------|
| 1 | `<span>` (uppercase micro-label) | ~15–25 | "Lorem ipsum dolor sit" |
| 2 | `<span>` | ~15–25 | "Consectetur adipiscing" |
| 3 | `<span>` | ~15–25 | "Sed do eiusmod tempor" |
| 4 | `<span>` | ~15–25 | "Ut enim ad minim" |
| 5 | `<span>` | ~15–25 | "Quis nostrud exercitation" |
| 6 | `<span>` | ~15–25 | "Duis aute irure dolor" |
| 7 | `<span>` | ~15–25 | "Excepteur sint occaecat" |
| 8 | `<span>` | ~15–25 | "Cupidatat non proident" |
| 9 | `<span>` | ~15–25 | "Sunt in culpa qui" |
| 10 | `<span>` | ~15–25 | "Officia deserunt mollit" |
| 11 | `<span>` | ~15–25 | "Anim id est laborum" |
| 12 | `<span>` | ~15–25 | "Voluptate velit esse" |

> **Note:** Captions should describe the event/moment in the photo (e.g., "Spring Meeting 2025", "Board Dinner, Sea Island").

---

## 9. LINKEDIN FEED SECTION

Three mock LinkedIn post cards displayed in a grid.

### 9A. Header

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 9.1 | **Section Label** | `<div>` (uppercase micro-label, blue) | ~10–20 | Eyebrow text next to LinkedIn icon. |
| 9.2 | **Heading** | `<h2>` (light weight) | ~15–25 | Section heading. |
| 9.3 | **CTA Link Text** | `<a>` | ~10–20 | "Follow us" style link text. Links to LinkedIn page. |

**Current placeholders:**
```
9.1: "Lorem Ipsum"
9.2: "Lorem ipsum dolor"
9.3: "Lorem ipsum"
```

### 9B. LinkedIn Posts (3 posts)

Each post needs:

| Field | Tag | Target Chars | Notes |
|-------|-----|-------------|-------|
| **Account Name** | `<div>` (bold) | ~15–40 | The posting account name. |
| **Time Ago** | `<div>` | ~2–5 | e.g., "2d", "5d", "1w" |
| **Post Text** | `<p>` (4-line clamp) | ~160–220 | The post body. Can include hashtags. |

**Current placeholders (3 posts):**
```
Post 1 — Name: "Lorem Ipsum Corp." | Time: "2d"
          Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."

Post 2 — Name: "Lorem Ipsum Corp." | Time: "5d"
          Text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. #LoremIpsum #DolorSit"

Post 3 — Name: "Lorem Ipsum Corp." | Time: "1w"
          Text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
```

> **Note:** These are decorative/representative posts. They can reflect real recent RFCI LinkedIn content or be written as representative examples of the kind of content RFCI posts.

---

## 10. MEMBERS SECTION

Dark background section with centered heading, subtext, CTA link, and a scrolling logo marquee.

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 10.1 | **Heading** | `<h2>` (light weight, large) | ~20–35 | Centered heading on dark background. |
| 10.2 | **Subheading** | `<p>` | ~130–155 | Supporting text below the heading. |
| 10.3 | **CTA Link Text** | `<a>` (large display link) | ~15–30 | Arrow-link below subheading. Links to `/members`. |

**Current placeholders:**
```
10.1: "Lorem ipsum dolor sit amet."
10.2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
10.3: "Lorem Ipsum Dolor"
```

---

## 11. FOOTER

The footer already contains mostly finalized copy. The following field may need review:

| # | Element | Tag | Target Chars | Notes |
|---|---------|-----|-------------|-------|
| 11.1 | **Footer Description** | `<p>` | ~150–180 | Brief org description under the logo. |

**Current copy (appears finalized — confirm or revise):**
```
11.1: "The Resilient Floor Covering Institute represents the manufacturers and suppliers behind resilient flooring—working together on standards, certifications, and education."
```

---

## QUICK REFERENCE — TOTAL COPY ITEMS

| Section | Items to Write |
|---------|---------------|
| 1. Hero | 5 fields |
| 2. Mission | 8 fields + 5 pillars (10 sub-fields) |
| 3. Materials Carousel | 2 fields + 9 cards (36 sub-fields) |
| 4. Environments | 3 fields + 8 cards (32 sub-fields) |
| 5. Why Resilient | 5 fields + 5 benefits (10 sub-fields) |
| 6. Standards | 3 fields + 4 tabs (24 sub-fields) |
| 7. Ecomedes | 2 fields |
| 8. Community | 6 fields + 12 captions |
| 9. LinkedIn | 3 fields + 3 posts (9 sub-fields) |
| 10. Members | 3 fields |
| 11. Footer | 1 field (review only) |
| **TOTAL** | **~170 copy fields** |
