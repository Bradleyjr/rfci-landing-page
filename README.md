# RFCI Landing Page

Redesigned landing page for the **Resilient Floor Covering Institute (RFCI)** — built with Next.js 15, Payload CMS v3, and Tailwind CSS v4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| CMS | Payload CMS v3 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| Icons | Phosphor Icons |
| Database | SQLite (local) / PostgreSQL (production) |
| Deployment | Vercel |

**Fonts:** DM Sans (body) · Sora (headings)
**Brand colors:** `#0164DB` blue · `#00C2D1` teal · `#121212` black

---

## Page Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen split layout with parallax image, animated headline, and CTA card |
| **Environments** | 2×2 image grid (Healthcare, Schools, Corporations, Retail) with interactive dot tooltips |
| **Flooring Types** | Horizontal scroll carousel — Luxury Vinyl, Sheet Vinyl, Rubber, Linoleum, Cork |
| **Standards** | Tabbed (desktop) / accordion (mobile) showcase of FloorScore® and RFCI certification programs with animated stats |
| **Community** | Upcoming industry event card + scroll-parallax scrapbook arc of event photos |
| **Education** | Featured video + 2 secondary video tiles |
| **Members** | Auto-scrolling logo marquee of 23 member companies on a dark background |

All section content is CMS-driven via Payload with static fallbacks for local development.

---

## Payload CMS

Admin panel available at `/admin`.

**Collections:** `Users` · `Media` · `Members` · `FlooringTypes` · `Certifications` · `Environments` · `Videos`
**Globals:** `SiteSettings` (hero copy, images) · `CommunityEvent` (event details + photo gallery)

---

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the example env file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

   Key variables:
   ```
   PAYLOAD_SECRET=your-secret-here
   DATABASE_URI=file:./rfci-dev.db   # SQLite for local dev
                                      # or postgresql://... for Postgres
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

4. (Optional) Seed the database with sample data:
   ```bash
   npm run seed
   ```

---

## Database

The app auto-detects the database adapter based on `DATABASE_URI`:
- Starts with `postgresql://` or `postgres://` → **PostgreSQL** (production)
- Anything else → **SQLite** (defaults to `./rfci-dev.db`)

To run migrations manually:
```bash
npm run migrate
```

---

## Deployment (Vercel)

The `vercel.json` sets the build command to run migrations before building:

```json
{ "buildCommand": "npm run migrate && npm run build" }
```

Set the following environment variables in your Vercel project:
- `PAYLOAD_SECRET`
- `DATABASE_URI` (PostgreSQL connection string)
