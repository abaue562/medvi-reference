# MEDVi — Full-Site Reference Implementation

This is a **pixel-accurate Next.js recreation** of the MEDVi telehealth platform, scraped from live sites across all subdomains (home, glp, meals, quad). Use this repo as the reference when building or iterating in v0.dev.

## How to use with v0

1. Connect this GitHub repo to v0.dev
2. v0 reads this README automatically for context
3. Reference `v0-prompt.md` for the full design spec and page-by-page breakdown
4. All screenshots are in `public/` — reference them to validate accuracy
5. All page code is already written in `app/` — ask v0 to refine specific pages

## What's in this repo

| Path | Description |
|------|-------------|
| `app/page.tsx` | Homepage — main MEDVi landing page |
| `app/glp/page.tsx` | GLP-1 weight loss marketing page |
| `app/glp/intake/page.tsx` | GLP-1 intake quiz (multi-step) |
| `app/quad/page.tsx` | QUAD men's health marketing page |
| `app/quad/intake/page.tsx` | QUAD intake quiz (multi-step) |
| `app/meals/page.tsx` | MEDVi Meals landing page |
| `app/meals/how-it-works/page.tsx` | Meals how-it-works detail |
| `app/meals/programs/page.tsx` | Interactive meal plan builder |
| `app/meals/faq/page.tsx` | FAQ accordion |
| `app/components/Nav.tsx` | Shared sticky dark navbar |
| `app/components/Footer.tsx` | Shared white footer |
| `app/components/LegalPage.tsx` | Shared legal page shell |
| `app/[legal-route]/page.tsx` | 7 legal pages (terms, privacy, etc.) |
| `public/*.png` | 158 screenshots (desktop + mobile) for every page |
| `public/all-pages.json` | Full scraped content from all pages |
| `v0-prompt.md` | Complete design system + per-page spec |

## Design System (quick reference)

**Colors**
```
Page background:   #faf9f7  (warm off-white)
Dark nav/text:     #242220
Hero background:   #172B1F  (deep forest green — homepage hero)
QUAD background:   #060d1f  (dark navy — quad pages)
Trust bar bg:      #1a1a1a
Green CTA:         #2e936f
Muted text:        #24222099
Faint text:        #24222066
Border:            #e8e5e0
```

**Fonts**
- Headings: `Red Hat Display` 700
- Body: `Red Hat Text` 400
- Eyebrows: `Onest` 500, uppercase, wide letter-spacing
- Accent: `Montserrat`

**Buttons:** `rounded-full`, green `#2e936f` bg, white text, uppercase, font-semibold

## All Pages

| Route | Screenshot |
|-------|-----------|
| `/` | `public/home_medvi_org_.png` |
| `/glp` | `public/glp_medvi_org_.png` |
| `/glp/intake` | `public/glp_medvi_org_intakeform_php_afid_org.png` |
| `/quad` | `public/quad_medvi_org_.png` |
| `/quad/intake` | `public/quad_medvi_org_intake_nwpck.png` |
| `/meals` | `public/meals_medvi_org_.png` |
| `/meals/how-it-works` | `public/meals_medvi_org_pages_how_it_works.png` |
| `/terms-and-conditions` | `public/home_medvi_org_terms_and_conditions.png` |
| `/privacy-policy` | `public/home_medvi_org_privacy_policy.png` |
| `/cancellation-and-refund-policy` | `public/home_medvi_org_cancellation_and_refund_policy.png` |

## Key Implementation Notes

1. **Images:** All from Framer CDN — `https://framerusercontent.com/images/[ID]`. Use `next/image` with `unoptimized`.
2. **Meals + QUAD have separate brand identities** — they use their own nav, not the shared `<Nav>` component.
3. **Interactive pages need `"use client"`** — intake quizzes, FAQ accordion, plan builder.
4. **Legal pages** use the shared `<LegalPage>` component with section data passed as props.
5. **Full scraped data** (all text, headings, buttons, forms, prices) is in `public/all-pages.json`.

## Contact Info

- Email: help@medvi.org
- Phone: (323) 690-1564
- Address: 131 Continental Dr. Ste 305, Newark, DE 19713
