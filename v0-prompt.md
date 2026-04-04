# v0 Prompt — MEDVi Telehealth Landing Page Recreation

Paste this entire prompt into v0.dev:

---

Create a full-page telehealth marketing landing page called "MEDVi" that closely matches the following design spec. Use Next.js, Tailwind CSS, and shadcn/ui components.

---

## Design System

**Colors:**
- Background: `#faf9f7` (off-white, warm)
- Primary text: `#242220` (near-black, warm)
- Dark text alt: `#1a1a1a`
- Accent green (primary CTA): `#2e936f`
- Accent purple: `#956bad`
- Accent tan/gold: `#c6a673`
- Accent salmon: `#eb8771`
- Accent pink: `#d690b3`
- Accent teal: `#8cb0b2`
- Muted brown: `#a58979`
- Light sage bg: `#f1f5e9`
- White: `#ffffff`

**Typography:**
- Headings (h2/h3/h4): `Red Hat Display` or `Red Hat Text`, semibold (600)
- Body / paragraphs: `Red Hat Text`, regular (400)
- Eyebrow labels (h6 uppercase): `Onest`, medium (500), ~10px, wide letter-spacing
- Accent/subheadings: `Montserrat`
- H2 size: ~50px desktop, ~32px mobile
- H3 size: ~30px
- Body: 14–16px

**Buttons:**
- Primary CTA: background `#2e936f`, white text, rounded-full, uppercase, font-weight 600, px-8 py-3
- Secondary: outlined, same green border/text
- Border radius: pill-shaped (rounded-full) for CTAs

---

## Page Sections (in order)

### 1. Sticky Navbar
- Logo: "MEDVi" wordmark (white text on dark bg, or dark on light bg)
- Nav links: Weight Loss | Peptides & Longevity | Men's Health | Women's Health
- Right side CTA button: "GET STARTED" (green, pill-shaped)
- Background: dark near-black (`#242220`) or transparent that turns solid on scroll

### 2. Hero Section
- Full-width, dark background (`#242220` or deep charcoal)
- Marquee/ticker strip at top: "LICENSED MEDICAL PROVIDERS · 100% ONLINE · CLEAR PRICING · SHIPPED TO YOUR DOOR" repeating
- Badge: "Join 500,000+ MEDVi patients"
- Large headline (split across lines with line breaks):
  ```
  Healthcare,
  redefined for real life.
  ```
- Subtext: "We provide medical care online—simple, direct, and led by licensed providers. No waiting rooms. No unnecessary steps. Just care that works."
- 4 pill-shaped nav tags below: "Weight Loss" | "Peptides & Longevity" | "Men's Health" | "Women's Health"
- Right side: lifestyle photo of person (use a placeholder)

### 3. Service Section — Weight Loss (GLP-1)
- id="weight-loss"
- Eyebrow label (H6 uppercase): "DOCTOR-GUIDED GLP-1 CARE"
- H2: "Weight loss made easy with personalized care"
- H3: "A smarter approach to weight loss, built around you"
- 5 feature bullet points with checkmarks:
  - Prescription to fast, effective GLP-1
  - 1:1 physician guidance
  - 24/7 support
  - Weight loss guarantee
  - Fast & discreet shipping
- CTA button: "GET STARTED" → links to glp.medvi.org
- Right side: phone mockup showing patient portal (use placeholder)
- Background: light warm white `#faf9f7`

### 4. Service Section — Women's Health
- Eyebrow: "CARE DESIGNED FOR WOMEN'S HEALTH"
- H2: "Whole-body care for her balance, vitality, and confidence"
- H3: "Support that evolves with your body"
- Bullet points: Hormone balance | Healthy weight management | Hair strength & growth support | Skin health & radiance | Fast & discreet shipping
- Copy: "Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support your health through every stage of life."
- Badge: "COMING SOON"
- Background: light sage `#f1f5e9` or soft warm tone

### 5. Service Section — Metabolic Nutrition / Meals
- Eyebrow: "METABOLIC NUTRITION"
- H2: "Fuel your transformation, protect your progress"
- H3: "Skip the hassle of meal planning and prepping"
- Bullets: Meal prep made simple | Chef-made, portion-controlled | Weekly rotating meals | Nutritionally balanced | Macro-friendly options | Completely hassle-free
- Copy: "MEDVi Meals is the perfect partner for your GLP-1 journey—delivering chef-prepared, medically aligned nutrition designed to help you lose fat while preserving muscle."
- CTA: "GET STARTED" → meals.medvi.org
- Background: white

### 6. Service Section — Supplements
- Eyebrow: "PURPOSE-DRIVEN SUPPLEMENTATION"
- H2: "Supplements with the power to boost real results"
- H3: "Support that helps you feel better over time"
- Bullets: Clean, transparent ingredients | Built to support daily health | Evidence-based dosing | Doctor-formulated blends | High-quality sourcing
- Copy: "Doctor-designed formulas made with quality ingredients and evidence-based dosing to support your body day after day."
- Badge: "COMING SOON"

### 7. Service Section — Men's Health
- id="mens-health"
- Eyebrow: "CARE FOR ENERGY, HORMONES, AND PERFORMANCE"
- H2: "Men's healthcare, built for men who expect more"
- H3: "Care designed to help you feel stronger, sharper, and more in control"
- Bullets: Physical performance | Hormone balance | Energy levels | Mental focus | Fast & discreet shipping
- CTA: "GET STARTED" → quad.medvi.org

### 8. Service Section — Peptides & Longevity
- id="peptides"
- Eyebrow: "ADVANCED PEPTIDE SUPPORT"
- H2: "Targeted support for recovery, performance, and longevity"
- H3: "Support that works below the surface"
- Bullets: Recovery support (BPC-157, TB-500) | Performance (CJC-1295, Ipamorelin) | Recovery cycles (Sermorelin, MK-677) | Strength (Tesamorelin) | And more
- Badge: "COMING SOON"

### 9. Service Section — Hair Restoration
- Eyebrow: "TARGETED HAIR RESTORATION"
- H2: "Proven care for thinning hair and regrowth"
- H3: "Advanced hair regrowth care to help you look and feel your best"
- Bullets: Clinically backed regrowth ingredients | Targeted scalp and follicle support | Long-term hair density approach | Fast shipping
- Badge: "COMING SOON"

### 10. Service Section — Skincare
- Eyebrow: "PERSONALIZED CARE FOR HEALTHIER, CLEARER SKIN."
- H2: "Skincare that goes deeper than the surface"
- H3: "Skincare designed to treat the root cause—not just cover it up."
- Bullets: Clinician-guided tailored care | Prescription-strength options | Simple daily routines | Visible skin results | Personalized treatment plans
- Badge: "COMING SOON"

### 11. "Why MEDVi" / Features Section
- Eyebrow: "BETTER IS POSSIBLE—AND WE BUILT FOR IT."
- H2: "Modern healthcare, built around you"
- H3: "Care coaching and nutrition support"
- Copy: "Our care coaching team, led by certified medical assistants and registered dietitians, helps answer questions about your medication, program, and day-to-day lifestyle changes."
- 4-column trust grid:
  | Icon | Title | Description |
  |------|-------|-------------|
  | Shield | Licensed and regulated | Care is provided by licensed clinicians and filled through FDA-regulated pharmacies. |
  | Laptop | 100% online medical care | Appointments, follow-ups, and treatment all take place online. |
  | Truck | Shipping that's fast & discreet | Orders arrive quickly and in plain packaging to protect your privacy. |
  | Headset | Unlimited 24/7 support | Medical support continues throughout your care, whenever you need it. |

### 12. Doctors Section
- Eyebrow: "OUR INCREDIBLE DOCTORS"
- H2: "Medical care from leading health experts"
- 2 doctor cards side-by-side:
  - Dr. Ana Lisa Carr
  - Dr. Kelly Tenbrink — St. George's University, School of Medicine / American Board of Emergency Medicine
- Each card: photo placeholder, name, credentials, brief bio

### 13. Reviews / Testimonials Section
- Eyebrow: "THOSE WHO CHOSE MEDVI"
- H2: "There's a reason people are raving about us."
- Scrollable/grid layout of review cards. Each card has: reviewer name, star rating (5 stars), quote text
- Reviews:
  1. Billy — "Ms. Gonzalez was great! She listened to my needs and provided details of the meds and any issues that rise."
  2. Terika — "The provider was knowledgeable and helpful. She answered all my questions and made me feel as if this was not our first time meeting."
  3. Jamie — "The questions are to the point and easy to navigate. I'm able to voice my concerns if needed and ask questions of MEDVi. They are quick to respond."
  4. Jacqueline — "My experience is very positive. I am doing very well. Slowly and surely reaching my goals with MEDVi's help."
  5. Diana — "The staff has been so friendly and caring. I didn't expect that! If I call, I get an immediate answer from a real person!"
  6. Donna — "The Physician was very knowledgeable and ready to answer all my concerns. She even told me about future checkups needed throughout my journey."
  7. Terri — "Losing weight without a crazy diet, without cardio...it just felt like magic. I was a snacker, but not anymore."
  8. Greg — "I was ready to give up. Wow. I would pay 10x as much if I had to. Dieting days are over. Thanks to the guys at medvi for the metabolic fix - game changer."

### 14. Bottom CTA / Trust Bar
- 4 trust badges in a horizontal bar:
  - MEDVi guarantee
  - Free, expedited delivery
  - Doctor-led plans & coaching
  - No hidden fees

### 15. Footer
- Logo: MEDVi
- Contact info:
  - help@medvi.org
  - (323) 690-1564
  - 131 Continental Dr. Ste 305, Newark, DE 19713
- Footer links: Terms & Conditions | Privacy Policy | Privacy Practices | Refund Policy | Medical Consent | For California Residents | Bill of Rights
- Copyright: © 2026 MEDVi. All rights reserved
- Small legal disclaimer text (gray, 11px)
- Background: dark `#242220`

---

## Layout Notes
- Alternate service sections left/right (image left + text right, then text left + image right)
- Each service section has ~80-100px vertical padding
- Smooth scroll between sections
- All "COMING SOON" badges: small pill badge, accent color (green or tan), uppercase
- Use `next/font` to load Red Hat Display, Red Hat Text, Onest, Montserrat from Google Fonts
- Mobile: stack all two-column layouts vertically, hamburger nav menu

---

## Pricing (for a separate /pricing or glp page):
- GLP-1 Injections: Starting at $179/month (Popular badge)
- GLP-1 Tablets: Starting at $249/month
- Wegovy® Pill: $99 Membership + Medication Cost
- Wegovy® Injection: $99 Membership + Medication Cost
- Zepbound® Injection: $99 Membership + Medication Cost
- Note: "No membership or hidden fees!" for the base plans
