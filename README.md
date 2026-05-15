# AntiGravity — Agent Handoff README
*Last updated: 2026-05-15*

---

## What This Workspace Is

This is the **SR Builders and Developers website project** — a Next.js 16 site for a Hyderabad-based construction and real estate company. The working directory is `~/Desktop/AntiGravity/construction-site/`.

---

## Live Status

| Item | Status |
|---|---|
| GitHub repo | github.com/K1NT0UN/srsm-group-website |
| Vercel deployment | Auto-deploys on push to `main` |
| Supabase project | oobbgnvmapsanaqbpzvi.supabase.co |
| Supabase `enquiries` table | ✅ Created and live |

---

## Tech Stack

- **Next.js 16.2.6** — App Router, TypeScript
- **Tailwind CSS v4** — CSS-based config in `app/globals.css` (no `tailwind.config.ts`)
- **Framer Motion** — scroll reveals, tab transitions, hover lift animations
- **GSAP + ScrollTrigger** — hero text animation, stat counters
- **Supabase** — enquiry form submissions (`@supabase/ssr`)

Read `CLAUDE.md` at workspace root and `construction-site/AGENTS.md` before editing.

---

## Brand / Design System

Defined in `app/globals.css` via `@theme`:

| Token | Value | Usage |
|---|---|---|
| `forest` | `#1a3320` | Footer, full-bleed sections, nav links |
| `gold` | `#c8a951` | All CTAs, underlines, icon tints, hover |
| `parchment` | `#faf7f0` | Navbar background, page background, content sections |
| `linen` | `#ede0c8` | Alternating sections |
| `forest-dark` | `#112216` | Hover states, mobile menu bg |

**Fonts:** Oswald (headings via `font-serif`) + Barlow (body via `font-sans`)
**Rule:** Never use cool grey. Brand is entirely warm-toned.
**Navbar:** Off-white (`parchment`) background — use dark logo (`sr-builders-logo.png`). Mobile menu is forest-dark — light logo not shown in dropdown (header logo remains visible).

---

## Logo Files

Both are in `construction-site/public/images/`:

| File | Usage | Notes |
|---|---|---|
| `sr-builders-logo.png` | Navbar, light backgrounds | Dark maroon mark + dark charcoal text, transparent bg |
| `sr-builders-logo-light.png` | Footer, dark backgrounds | Dark maroon mark + parchment text, transparent bg |

Source: `~/Desktop/SRSM Profile/SR B & D Logo/SR Builders Logo_pdf.pdf.png` (horizontal layout, 2000x1545)
Processing script: Pillow pixel loop — remove white bg, then for light variant replace low-saturation dark pixels with parchment.

---

## File Structure

```
construction-site/
├── app/
│   ├── globals.css              ← Brand colors + fonts (Tailwind v4 @theme)
│   ├── layout.tsx               ← Root layout, Oswald + Barlow fonts
│   ├── page.tsx                 ← Homepage — renders NisargaPageContent directly
│   ├── about/page.tsx           ← About + Leadership (no Team section), 3 entities
│   ├── projects/
│   │   ├── page.tsx             ← Projects tabs (current/pipeline/completed)
│   │   └── nisarga/page.tsx     ← Also renders NisargaPageContent (same as homepage)
│   └── enquire/page.tsx         ← Enquiry + site visit forms → Supabase
├── components/
│   ├── Navbar.tsx               ← Off-white bg, forest green links, dark logo
│   ├── Footer.tsx               ← Forest bg, light logo, 3 entities listed
│   ├── HeroSection.tsx          ← GSAP hero (orphaned — no longer used on homepage)
│   ├── StatsSection.tsx         ← GSAP counters: 25yr, 24 projects, 3 entities, 30 staff
│   ├── FadeInView.tsx           ← Framer Motion scroll reveal wrapper
│   ├── NisargaPageContent.tsx   ← Full Nisarga page JSX (shared by / and /projects/nisarga)
│   ├── ProjectsTabs.tsx         ← Tab switching, hover animations, Highrise featured tile
│   └── EnquireClient.tsx        ← Supabase form submission (createClient inside handlers)
├── lib/
│   ├── projects.ts              ← All project data
│   └── supabase/client.ts + server.ts
├── public/images/
│   ├── sr-builders-logo.png
│   ├── sr-builders-logo-light.png
│   └── nisarga/                 ← 15 brochure renders
└── supabase/migrations/001_enquiries.sql
```

---

## What's Been Built

### Pages
- ✅ **Homepage (`/`)** — IS the Nisarga Villas page (full brochure content, 13 sections). Navbar/footer present.
- ✅ **`/projects/nisarga`** — Same content as homepage via shared `NisargaPageContent` component
- ✅ **About** — Mission, 25yr history, Core Strengths, Mission quote, 3 active Group Entities, Leadership (6 people with hover lift), no Team section
- ✅ **Projects** — Tabs: Current (Nisarga Villas) + Pipeline (Highrise Apartments featured + 6 others) / Completed (24 projects). Hover animations throughout.
- ✅ **Enquire** — Quick enquiry + site visit forms → Supabase `enquiries` table

### Nisarga Page Sections
1. Hero — entrance gate render, CTAs (Book Site Visit, Explore Villas)
2. Stats bar — 17+ Acres, 50+ Amenities, 4,000 Acres Greenery, 2 Clubhouses, 800m Frontage, G+2
3. Vision — forest lifestyle image + "Wood Morning" copy
4. Architecture — streetscape full-bleed
5. Aerial + Master Plan — side by side
6. Villa Types — 200 / 239 / 300 sq yd cards with per-floor area statements
7. Streetscape full-bleed (rain render)
8. Interiors collage on charcoal bg
9. Clubhouses — Club N'Spire + Club N'finite with amenity lists
10. Outdoor amenities — collage + 9 labels
11. Specifications table — 15 categories
12. Location — map + 5 highlight categories
13. CTA — gold section, RERA, phone, email, two buttons

### Projects Data (`lib/projects.ts`)
**Current:** Nisarga Villas (Integrated Township — Villas, ongoing, 2028)
**Pipeline (7 total):**
1. Highrise Apartments — SR Builders, Kollur, featured tile, **name TBD**, 2030
2. Borampet Villas — ~30 acres
3. Nagole Villas — ~10 acres
4. Medchal Commercial
5. Bashirbag Commercial — 60k sqft
6. Chandanagar Commercial — 30k sqft
7. Lingampally Residences — 120 flats

**Completed:** 24 projects across SR Builders, SM Builders, SM Builders and Developers, SM Projects, SM Constructions, SM Infra Developers

### Group Entities (3 active)
1. SR Builders and Developers — Residential & Villas
2. SM Builders — Residential & Commercial
3. SM Builders and Developers — Residential

---

## What Still Needs To Be Done

### 1. Highrise Apartments — Final Name
`lib/projects.ts` line ~30: `name: 'Highrise Apartments'`. Update once brand name decided. The "Name TBD" badge in ProjectsTabs will still show until removed.

### 2. Leadership Photos
Placeholder initials circles for all 6 leadership members. Upload real photos to Supabase Storage, update `app/about/page.tsx` `<img>` src.

### 3. Qualifications + Bios (About Page)
- Yashwanth Raavi, Raavi Rishi Chowdary, Manaswitha Raavi: `qualifications: '[Qualifications to be added]'`
- Most members: `bio: ''` — one sentence each

### 4. Contact Details
Footer (`components/Footer.tsx`) and Enquire page (`app/enquire/page.tsx`):
- Phone: "To be updated"
- Email: "To be updated"

### 5. Supabase `media_items` Table
Schema in workspace `CLAUDE.md`. Not yet created. Needed for CMS-based media management.

### 6. Hero Images for HeroSection
`components/HeroSection.tsx` references `/images/hero-1.jpg` through `hero-5.jpg` which don't exist. This component is currently orphaned (not used). Either delete it or wire up real images.

### 7. Highrise Apartments Dedicated Page
Once brand name is decided, build `/projects/highrise` page similar to Nisarga page.

---

## Supabase

- **URL:** `https://oobbgnvmapsanaqbpzvi.supabase.co`
- **Anon key:** in `construction-site/.env.local` (gitignored + set in Vercel env vars)
- **Tables live:** `enquiries`
- **Storage:** Create bucket `media` (public) for team photos + future media

---

## Key Content Files on Desktop

| Path | Contents |
|---|---|
| `~/Desktop/SRSM Profile/SR B & D Logo/SR Builders Logo_pdf.pdf.png` | Current logo source (2000x1545 PNG, horizontal) |
| `~/Desktop/SRSM Profile/Nisarga_Brochure_APRL_21_26_.pdf` | Full Nisarga brochure (31 pages) |
| `~/Desktop/Nisarga_Project_Website_Assets/` | All extracted brochure images (15 in `public/images/nisarga/`) |
| `~/Desktop/Nisarga_Project_Website_Assets/Website_Content_References/website_copy.md` | Full verified Nisarga website copy |
| `~/Desktop/Nisarga_Project_Website_Assets/Website_Content_References/IMAGE_REFERENCE_MAP.txt` | Every brochure page mapped to image type + placement |
