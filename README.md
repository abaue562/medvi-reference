# MEDVi Site Reference

Scraped reference package for rebuilding [home.medvi.org](https://home.medvi.org) in v0.

## How to use with v0

1. Go to [v0.dev](https://v0.dev)
2. Open `v0-prompt.md` from this repo
3. Copy the entire contents and paste as your v0 prompt
4. Reference images from the `images/` folder when v0 asks for assets

## What's in here

| File / Folder | Description |
|---|---|
| `index.html` | Full rendered HTML with local asset paths |
| `v0-prompt.md` | **Complete v0 prompt** — design system + all 15 sections |
| `report.json` | Structured content: all text, links, reviews, headings |
| `images/` | 67 images downloaded from Framer CDN |
| `fonts/` | 7 web fonts (Red Hat Text, Red Hat Display, Onest, Montserrat) |
| `js/` | Page scripts |
| `manifest.json` | Map of every original CDN URL → local file |

## Design system (quick reference)

**Colors**
```
Background:   #faf9f7
Dark bg/nav:  #242220
Primary text: #242220
Green CTA:    #2e936f
Purple:       #956bad
Gold:         #c6a673
Salmon:       #eb8771
Pink:         #d690b3
Teal:         #8cb0b2
```

**Fonts**
- Headings: `Red Hat Display` / `Red Hat Text` — weight 600
- Body: `Red Hat Text` — weight 400
- Eyebrows: `Onest` — weight 500, uppercase
- Accent: `Montserrat`

**Buttons:** pill-shaped (`border-radius: 9999px`), green bg `#2e936f`, white text

## Services on the site

1. GLP-1 Weight Loss — starting at $179/mo
2. Women's Health
3. Metabolic Nutrition / Meals
4. Supplements
5. Men's Health (QUAD)
6. Peptides & Longevity
7. Hair Restoration
8. Skincare

## Contact info (from site)

- Email: help@medvi.org
- Phone: (323) 690-1564
- Address: 131 Continental Dr. Ste 305, Newark, DE 19713
