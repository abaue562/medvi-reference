# MEDVi — Full-Site Reference & v0 Build Prompt

This repository is a **pixel-accurate reference implementation** of the MEDVi telehealth platform (home.medvi.org, glp.medvi.org, meals.medvi.org, quad.medvi.org). All pages, components, copy, and design tokens have been extracted via Playwright scraping and screenshot capture.

**When building with v0:** Use the existing TSX files in `app/` as your source of truth. The screenshots in `public/` show exactly what each page should look like. Do not invent copy or layouts — match the files here precisely.

---

## Project Structure

```
app/
  layout.tsx                    — Root layout (fonts, global styles)
  page.tsx                      — Homepage (/)
  components/
    Nav.tsx                     — Shared sticky nav (dark #242220)
    Footer.tsx                  — Shared white footer
    LegalPage.tsx               — Shared legal page shell
  glp/
    page.tsx                    — GLP-1 marketing page (/glp)
    intake/page.tsx             — GLP-1 intake quiz (/glp/intake)
  quad/
    page.tsx                    — Men's health marketing page (/quad)
    intake/page.tsx             — QUAD intake quiz (/quad/intake)
  meals/
    page.tsx                    — MEDVi Meals landing (/meals)
    how-it-works/page.tsx       — Meals how-it-works (/meals/how-it-works)
    programs/page.tsx           — Meal plan builder (/meals/programs)
    faq/page.tsx                — Meals FAQ accordion (/meals/faq)
  weight-loss/page.tsx          — Weight loss detail page (/weight-loss)
  terms-and-conditions/page.tsx
  privacy-policy/page.tsx
  notice-of-privacy-practices/page.tsx
  cancellation-and-refund-policy/page.tsx
  medical-consent/page.tsx
  privacy-statement-california/page.tsx
  bill-of-rights/page.tsx
public/
  home_medvi_org_.png           — Homepage desktop screenshot
  home_medvi_org__mobile.png    — Homepage mobile screenshot
  glp_medvi_org_.png            — GLP page screenshot
  quad_medvi_org_.png           — QUAD page screenshot
  meals_medvi_org_.png          — Meals page screenshot
  (+ 150 more screenshots)
```

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background warm | `#faf9f7` | Page background |
| Text primary | `#242220` | Body text, dark nav |
| Text muted | `#24222099` | Subtext, paragraphs |
| Text faint | `#24222066` | Footer links, captions |
| Accent green | `#2e936f` | CTAs, highlights |
| Hero green (deep) | `#172B1F` | Homepage hero background |
| Near-black | `#1a1a1a` | Trust bar background |
| White | `#ffffff` | Sections, footer |
| QUAD navy | `#060d1f` | QUAD page background |
| Purple | `#956bad` | Women's health accent |
| Tan/gold | `#c6a673` | Supplements accent |
| Salmon | `#eb8771` | Hair/skin accent |
| Pink | `#d690b3` | Women's health accent |
| Teal | `#8cb0b2` | Peptides accent |
| Border | `#e8e5e0` | Dividers, card borders |

### Typography
- **Display headings (h1/h2):** `Red Hat Display`, 700, sizes 2.25rem–3.5rem
- **Section headings (h2/h3):** `Red Hat Display`, 600–700
- **Body:** `Red Hat Text`, 400, 14–16px
- **Eyebrow labels:** `Onest`, 500, 10–11px, uppercase, wide letter-spacing
- **Accent/pill text:** `Montserrat`

### Buttons
- **Primary CTA:** `bg-[#2e936f]` white text `rounded-full` uppercase font-semibold px-8 py-3
- **Dark CTA:** `bg-[#242220]` white text `rounded-full`
- **Outline:** border green, green text, `rounded-full`
- **Coming Soon badge:** small pill, green or accent color, uppercase

### Images (all from Framer CDN)
Base URL: `https://framerusercontent.com/images/`

Key images referenced across the site:
- MEDVi logo (dark bg): `1BRDkIzVV7TxG8fJDyUWdUDDE.png`
- GLP hero phone: `DLDTFlOSb2FnS4jzqGt3DORzQ.png`
- Meals hero food: `S6GwNHJ43LwHkHsaF7FHF89E.jpg`
- QUAD hero: `rkR26FDLhJH3M6LbYGUvT9Tbtw.jpg`
- LegitScript seal: `q2uWrYWiZmMyus58IGeMLSbGI.png`

---

## Page Specs

### `/` — Homepage (`app/page.tsx`)
**Screenshot:** `public/home_medvi_org_.png`

Structure:
1. **Nav** — sticky dark (`#242220`), MEDVi logo left, links center (Weight Loss / Peptides & Longevity / Men's Health / Women's Health), green GET STARTED button right
2. **Hero** — deep forest green `#172B1F`, full-width. Static badge strip at top: "LICENSED MEDICAL PROVIDERS · 100% ONLINE · CLEAR PRICING · SHIPPED TO YOUR DOOR". Centered content: badge "Join 500,000+ MEDVi patients", H1 "Healthcare, redefined for real life.", subtext. 4 category pill tabs below. Thumbnail category cards (rounded, real CDN images).
3. **Service sections** (alternating left/right layout, 8 total):
   - Weight Loss, Women's Health (COMING SOON), Metabolic Nutrition/Meals, Supplements (COMING SOON), Men's Health, Peptides & Longevity (COMING SOON), Hair Restoration (COMING SOON), Skincare (COMING SOON)
4. **Why MEDVi** — white background, 4 photo cards (grid), 2 feature text cards ("Everything all in one place" / "Unlimited 24/7 support")
5. **Trust bar** — near-black `#1a1a1a`, 4 trust badges horizontal
6. **Footer** — white

### `/glp` — GLP-1 Marketing (`app/glp/page.tsx`)
**Screenshot:** `public/glp_medvi_org_.png`

- Separate dark nav: "Our Products / Real Results / How It Works / FAQs" + green GET STARTED
- Hero: centered, "Finally serious about weight loss? So are we."
- 5 pricing cards: GLP-1 Injections $179/mo (Popular), GLP-1 Tablets $249/mo, Wegovy® Pill $99+med, Wegovy® Injection $99+med, Zepbound® $99+med
- Stats bar: 500k+ patients / 94% satisfaction / 87% hit goal / licensed providers
- Science section, 4-step how it works, reviews
- CTA to intake form

### `/glp/intake` — GLP Intake Quiz (`app/glp/intake/page.tsx`)
**Screenshot:** `public/glp_medvi_org_intakeform_php_afid_org.png`

- `"use client"` component
- Split layout: dark image left panel, form right panel
- Progress bar at top (step X of Y)
- Multi-step: height/weight inputs → goals → medical history → contact info
- Next button disabled until required field filled

### `/quad` — Men's Health Marketing (`app/quad/page.tsx`)
**Screenshot:** `public/quad_medvi_org_.png`

- Dark navy background `#060d1f` throughout
- Hero: "Speed. Strength. Stamina." large centered headline
- 4-in-1 formula explanation section
- 3-step how it works
- CTA to intake

### `/quad/intake` — QUAD Intake Quiz (`app/quad/intake/page.tsx`)
**Screenshot:** `public/quad_medvi_org_intake_nwpck.png`

- `"use client"` component
- Dark theme matching QUAD brand
- Opening headline: "You Deserve a Better Sex Life."
- Step 1: 5 radio goal cards with colored icons (Performance, Stamina, Energy, Confidence, All of the above)
- Multi-step quiz flow, up to 15 steps

### `/meals` — MEDVi Meals Landing (`app/meals/page.tsx`)
**Screenshot:** `public/meals_medvi_org_.png`

- **Separate brand identity** — uses "M" logo not MEDVi wordmark
- Announcement bar with countdown timer at very top
- Food photo hero with meal plan CTA
- 3-step how it works (Choose → Delivered → Enjoy)
- 8-meal photo grid
- Plan builder: 6/10/14/18 meals per week options
- Email signup section

### `/meals/how-it-works` (`app/meals/how-it-works/page.tsx`)
- 4-step alternating text/image layout
- Dotted connecting line between steps

### `/meals/programs` (`app/meals/programs/page.tsx`)
- `"use client"` — interactive plan builder
- Live price calculation as user selects meal count
- "Add to Cart" / checkout flow

### `/meals/faq` (`app/meals/faq/page.tsx`)
- `"use client"` — accordion FAQ
- 9 questions: 8 about ordering, 1 about meals
- Click to expand/collapse

### Legal Pages (all use `<LegalPage>` component)
All at routes: `/terms-and-conditions`, `/privacy-policy`, `/notice-of-privacy-practices`, `/cancellation-and-refund-policy`, `/medical-consent`, `/privacy-statement-california`, `/bill-of-rights`

**Screenshot example:** `public/home_medvi_org_cancellation_and_refund_policy.png`

The `LegalPage` component accepts:
```tsx
interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  sections: {
    heading?: string;
    level?: 1 | 2 | 3;
    body: string[];
  }[];
}
```

---

## Shared Components

### `Nav.tsx`
- Sticky, `position: sticky; top: 0; z-index: 50`
- Background: `#242220`
- MEDVi logo (white) left — links to `/`
- Center nav links (white text, hover green): Weight Loss | Peptides & Longevity | Men's Health | Women's Health
- Right: GET STARTED button (`bg-[#2e936f]` white text rounded-full)

### `Footer.tsx`
- Background: white `#ffffff`
- Top row: MEDVi logo left, contact info right (help@medvi.org / (323) 690-1564 / 131 Continental Dr. Ste 305, Newark, DE 19713)
- Legal links row: Terms & Conditions | Privacy Policy | Privacy Practices | Refund Policy | Medical Consent | For California Residents | Bill of Rights
- Bottom row: "© 2026 MEDVi. All rights reserved" + LegitScript seal (links to legitscript.com verification)
- Disclaimer text (tiny, gray): note about assessments, OpenLoop Health, FDA-regulated pharmacies, compounded GLP-1s

---

## Implementation Notes

1. **All images load from Framer CDN** — use `next/image` with `unoptimized` prop and the full `https://framerusercontent.com/images/[ID]` URL. Never use local paths for images.

2. **Meals and QUAD have separate brand identities** — do NOT use the shared `Nav`/`Footer` on those pages. They have their own nav bars.

3. **"use client"** is required on any page with React state (intake quizzes, FAQ accordion, plan builder).

4. **No apostrophe/quote escaping issues** — all legal page strings use backtick template literals for any string containing double quotes internally.

5. **Tailwind + inline styles** — the codebase mixes both. Complex color values use `style={{ color: "#..." }}` since they're not in the default Tailwind palette.

6. **Font loading** — fonts are loaded via `next/font/google` in `app/layout.tsx` and applied via CSS variables.

---

## Screenshots Index

All screenshots are in `public/`. Key ones:

| File | Shows |
|------|-------|
| `home_medvi_org_.png` | Homepage desktop |
| `home_medvi_org__mobile.png` | Homepage mobile |
| `glp_medvi_org_.png` | GLP marketing page |
| `glp_medvi_org_intakeform_php_afid_org.png` | GLP intake form step 1 |
| `quad_medvi_org_.png` | QUAD landing page |
| `quad_medvi_org_intake_nwpck.png` | QUAD quiz step 1 |
| `meals_medvi_org_.png` | Meals landing page |
| `meals_medvi_org_pages_how_it_works.png` | Meals how-it-works |
| `home_medvi_org_cancellation_and_refund_policy.png` | Legal page example |

---

## How to Use This Repo in v0

1. Connect this GitHub repo to v0.dev
2. v0 will read this file (`v0-prompt.md`) as context
3. Reference existing files: e.g., "update app/glp/page.tsx to match the screenshot in public/glp_medvi_org_.png"
4. All design decisions are documented above — no guessing needed
5. The full scraped page data is in `public/all-pages.json` for any copy/content questions
