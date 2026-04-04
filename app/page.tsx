import Image from "next/image";

const CDN = "https://framerusercontent.com/images";

const IMG = {
  logo:          `${CDN}/1BRDkIzVV7TxG8fJDyUWdUDDE.png`,
  // Hero thumbnails
  heroThumbWL:   `${CDN}/M9XaNbbDAjo8pUf3JffgMRQ44.png`,
  heroThumbPep:  `${CDN}/zmJZrAHLgexbSUaBuE8JSFohl8.png`,
  heroThumbMen:  `${CDN}/6NG7JMcShVQy0ZvhiVszVR6REZg.jpg`,
  heroThumbWom:  `${CDN}/vyhgfyTZdnvKgcOFSsKadXmcI.png`,
  // Weight loss
  wlProduct:     `${CDN}/Qzg7hOnOYm2PR1xuvL1xDf7C4M.png`,
  wlPhone:       `${CDN}/MoQjUaFVDcKosmLtidv94kjQ3Zk.png`,
  wlSupport:     `${CDN}/M9XaNbbDAjo8pUf3JffgMRQ44.png`,
  // Women's health
  womens1:       `${CDN}/TDqwwuuERJIkMwN3ZjsZgCTOFoU.png`,
  womens2:       `${CDN}/vyhgfyTZdnvKgcOFSsKadXmcI.png`,
  // Meals
  meals:         `${CDN}/mz3nMVX8VGPBcqgjBYUldp4jw.png`,
  meals2:        `${CDN}/3b210go7xrqsX3cBCZkQjPg7lc.png`,
  // Supplements (3 containers)
  supp:          `${CDN}/snLhnFxV1S915H070FVXdFseVw.png`,
  suppCard:      `${CDN}/DledV5XhgNZMvvKuNPweP2g.png`,
  // Men's health
  mens1:         `${CDN}/nrGxwSsRFp57MwVq6ihfcnRm8bA.png`,
  mens2:         `${CDN}/9WyYelkv3EfaJFi50PZydNSt2ws.png`,
  // Peptides
  peptides1:     `${CDN}/WUFCBuh0wNjDvRv5B5ZqEH4mjA.png`,
  peptides2:     `${CDN}/ihBupsd47mUBkztGVAMt31VNRN4.png`,
  // Hair
  hair1:         `${CDN}/paOnEoR3Gqf2LWRZGYBJ2Uokw.png`,
  hair2:         `${CDN}/vC7EYvFVXWs3QWn7JLdi51Vvd7s.png`,
  // Skincare
  skin1:         `${CDN}/ZlJbchQEeboQ3J4HC0w7Lj2SRvQ.png`,
  skin2:         `${CDN}/L7wxKZ4YKHUKiODGYQrRlQYvTKo.png`,
  // Why MEDVi
  whyMain:       `${CDN}/VlXVSTuHKTz4XzjZzNLWYchfHMQ.png`,
  whyBadge:      `${CDN}/keDlEK59Fa69dFZn1FAHPjD1j8.png`,
  whyCard1:      `${CDN}/h93zMm4ey20O082JGj8IZMrl3I.png`,
  whyCard2:      `${CDN}/ntqVQOpXgrrjXKAUz9BTmnE2u0I.png`,
  whyCard3:      `${CDN}/eNSyOYR4nWN2eC2kBvfFakC0Jc.png`,
  whyCard4:      `${CDN}/Mxnbv5mgfdNQdzlTMMRKrfJZJE.png`,
  // Doctors
  doctorAna:     `${CDN}/6DlpR3ftJ6MctTZwyeuvp0hxAY.jpg`,
  doctorKelly:   `${CDN}/iZZOz7kuB4YLvdGWAg8yO3avoLQ.jpg`,
  // Reviews
  reviewHero:    `${CDN}/A1lwE6WKdaWtTNHV4R3xFZ1ljVo.jpg`,
  // Trust bar icons
  badgeMoney:    `${CDN}/QZxfRAhxllYfpGxMEuk6kFVLhU.svg`,
  badgeShip:     `${CDN}/uBsU5ZsqLrzBSK23aKqkDZSVGIo.svg`,
  badgeDoctor:   `${CDN}/YNzdkrl3B55n6jdaG6fo6LYESZA.svg`,
  badgeFee:      `${CDN}/QG8WHNxXqMMGSvYoe11QogyAaQ.svg`,
  // Footer
  iconEmail:     `${CDN}/mOouvtzIDHOerqUQ0hDOpizA.svg`,
  iconPhone:     `${CDN}/E2HTcWzFVYj8RkAxT3IGYNuY.svg`,
  iconAddr:      `${CDN}/Ly2H9feVHgGgo55QqMcUBXLE5uo.svg`,
  legitScript:   `${CDN}/q2uWrYWiZmMyus58IGeMLSbGI.png`,
};

const TICKER_ITEMS = [
  { label: "LICENSED MEDICAL PROVIDERS" },
  { label: "100% ONLINE" },
  { label: "CLEAR PRICING" },
  { label: "SHIPPED TO YOUR DOOR" },
];

const REVIEWS = [
  { name: "Billy",      photo: `${CDN}/OGDQI8XA7V2CREgeUjtv3qMehk.jpg`, quote: "Ms. Gonzalez was great! She listened to my needs and provided details of the meds and any issues that rise." },
  { name: "Terika",     photo: `${CDN}/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg`, quote: "The provider was knowledgeable and helpful. She answered all my questions and made me feel as if this was not our first time meeting." },
  { name: "Jamie",      photo: `${CDN}/naCtfcJucSb08iZrMiFEu70fwNw.jpg`, quote: "The questions are to the point and easy to navigate. I'm able to voice my concerns and ask questions. They are quick to respond." },
  { name: "Jacqueline", photo: `${CDN}/u8K8rbgmRaS81RzFu2M7Wl00qI.jpg`, quote: "My experience is very positive. Slowly and surely reaching my goals with MEDVi's help. They have been very attentive." },
  { name: "Diana",      photo: `${CDN}/cYEX3QqVD69lMmw1NIEAUOSMB8.jpg`, quote: "The staff has been so friendly and caring. I didn't expect that! If I call, I get an immediate answer from a real person!" },
  { name: "Donna",      photo: `${CDN}/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg`, quote: "The Physician was very knowledgeable and ready to answer all my concerns. She even told me about future checkups throughout my journey." },
  { name: "Terri",      photo: `${CDN}/yTHZiTQnD4nN9DjRINV2s2nJf6c.jpg`, quote: "Losing weight without a crazy diet, without cardio...it just felt like magic. I was a snacker, but not anymore." },
  { name: "Greg",       photo: `${CDN}/c7UYcEZ9pL7emhQ8SH0e0iV0d8.jpg`, quote: "I was ready to give up. Wow. I would pay 10x as much if I had to. Dieting days are over. Thanks to medvi—game changer." },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "'Red Hat Text', sans-serif", backgroundColor: "#faf9f7", color: "#242220" }}>

      {/* ── Navbar ─────────────────────────────────────────────────── */}
      <nav style={{ backgroundColor: "#242220", position: "sticky", top: 0, zIndex: 50 }}
        className="px-6 lg:px-16 py-4 flex items-center justify-between">
        <a href="/">
          <Image src={IMG.logo} alt="MEDVi" width={110} height={24} className="h-6 w-auto" unoptimized />
        </a>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          {[["Weight Loss","#weight-loss"],["Peptides & Longevity","#peptides"],["Men's Health","#mens-health"],["Women's Health","#womens-health"]].map(([l,h])=>(
            <a key={l} href={h} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <a href="https://glp.medvi.org"
          className="text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2e936f" }}>
          GET STARTED
        </a>
      </nav>

      {/* ── Hero — deep forest green ────────────────────────────────── */}
      <section style={{ backgroundColor: "#172B1F", position: "relative", overflow: "hidden" }}
        className="px-6 lg:px-16 pt-20 pb-0 text-center">

        {/* Large watermark "MEDVi" background text */}
        <div style={{
          position: "absolute", bottom: 120, right: -40,
          fontSize: "22vw", fontWeight: 900, color: "rgba(255,255,255,0.04)",
          fontFamily: "'Red Hat Display', sans-serif", lineHeight: 1, userSelect: "none", pointerEvents: "none",
        }}>MEDVi</div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-wide"
          style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)" }}>
          Join{" "}<strong style={{ color: "#fff" }}>500,000+</strong>{" "}MEDVi patients
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, lineHeight: 1.05, color: "#ffffff" }}
          className="text-5xl md:text-6xl lg:text-7xl mb-6">
          Healthcare,<br />
          <em style={{ color: "#6aaa84", fontStyle: "italic" }}>redefined</em>{" "}for real life.
        </h1>

        {/* Subtext */}
        <p className="text-base max-w-md mx-auto mb-12" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
          We provide medical care online—simple, direct, and led by licensed providers.
          No waiting rooms. No unnecessary steps. Just care that works.
        </p>

        {/* Category thumbnail cards */}
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden grid grid-cols-4 mb-0"
          style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {[
            { label: "Weight Loss",          img: IMG.heroThumbWL,  href: "#weight-loss" },
            { label: "Peptides & Longevity", img: IMG.heroThumbPep, href: "#peptides" },
            { label: "Men's Health",         img: IMG.heroThumbMen, href: "#mens-health" },
            { label: "Women's Health",       img: IMG.heroThumbWom, href: "#womens-health" },
          ].map(({ label, img, href }, i) => (
            <a key={label} href={href}
              className="flex flex-col items-center gap-3 p-5 hover:bg-white/5 transition-colors border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="w-full h-24 rounded-xl overflow-hidden">
                <Image src={img} alt={label} width={200} height={200} className="w-full h-full object-cover" unoptimized />
              </div>
              <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "rgba(255,255,255,0.8)" }}>
                {label} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Badge strip (ticker) ────────────────────────────────────── */}
      <div className="bg-white border-b overflow-x-auto" style={{ borderColor: "#e8e5e0" }}>
        <div className="flex items-center divide-x divide-[#e8e5e0] min-w-max mx-auto">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map(({ label }, i) => (
            <div key={i} className="flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}>
              <span className="w-4 h-4 rounded-full inline-block" style={{ backgroundColor: "#2e936f", opacity: 0.3 }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Weight Loss ─────────────────────────────────────────────── */}
      <section id="weight-loss" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* Top row: eyebrow + H2 */}
          <div className="space-y-3">
            <Eyebrow>DOCTOR-GUIDED GLP-1 CARE</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.1 }}>
              Weight loss <em style={{ color: "#2e936f", fontStyle: "normal" }}>made easy</em><br />
              with personalized care
            </h2>
          </div>

          {/* Two-column: image | bullets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden">
              <Image src={IMG.wlProduct} alt="GLP-1 medication" width={752} height={670} className="w-full h-auto object-cover" unoptimized />
            </div>
            <div className="space-y-5">
              <h4 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                Everything you need—included:
              </h4>
              <Bullets items={[
                "Prescription to fast, effective GLP-1",
                "1:1 physician guidance",
                "24/7 support",
                "Weight loss guarantee",
                "Fast & discreet shipping",
              ]} />
            </div>
          </div>

          {/* Subheading + copy + CTA */}
          <div className="max-w-2xl space-y-4">
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.6rem" }}>
              A smarter approach to weight loss, built around you
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Find the right GLP-1 medication with the confidence that comes from knowing it is doctor-approved and budget-friendly.
            </p>
            <CTAButton href="https://glp.medvi.org">GET STARTED</CTAButton>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 flex gap-5 items-start" style={{ backgroundColor: "#f7f9f5" }}>
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image src={IMG.wlPhone} alt="" width={295} height={321} className="w-full h-full object-cover" unoptimized />
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                  Everything,{" "}<em style={{ color: "#2e936f", fontStyle: "normal" }}>all in one place</em>
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#24222099" }}>
                  Track your progress, check in with your provider, and manage your care in your all-in-one patient portal.
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-6 flex gap-5 items-start" style={{ backgroundColor: "#f7f9f5" }}>
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image src={IMG.wlSupport} alt="" width={500} height={398} className="w-full h-full object-cover" unoptimized />
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                  Unlimited{" "}<em style={{ color: "#2e936f", fontStyle: "normal" }}>24/7 support</em>
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#24222099" }}>
                  Medical support continues throughout your care, whenever you need it.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs" style={{ color: "#24222055" }}>
            Prescriptions are issued only after an online consultation with an independent licensed provider. Compound medications are dispensed by state-licensed pharmacies but are not FDA approved.
          </p>
        </div>
      </section>

      {/* ── Women's Health ──────────────────────────────────────────── */}
      <section id="womens-health" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos */}
          <div className="flex gap-4">
            <Image src={IMG.womens1} alt="" width={619} height={823} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.womens2} alt="" width={800} height={966} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>CARE DESIGNED FOR WOMEN&apos;S HEALTH</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Whole-body care for her balance, vitality, and confidence
            </h2>
            <Bullets items={["Hormone balance","Healthy weight management","Hair strength & growth support","Skin health & radiance","Fast & discreet shipping"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Support that evolves with your body
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support your health through every stage of life.
            </p>
            <ComingSoon />
          </div>
        </div>
      </section>

      {/* ── Metabolic Nutrition ─────────────────────────────────────── */}
      <section id="nutrition" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <div className="space-y-6">
            <Eyebrow>METABOLIC NUTRITION</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Fuel your transformation,<br />protect your progress
            </h2>
            <Bullets items={["Meal prep made simple","Chef-made, portion-controlled","Weekly rotating meals","Nutritionally balanced","Macro-friendly options","Completely hassle-free"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Skip the hassle of meal planning and prepping
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              MEDVi Meals is the perfect partner for your GLP-1 journey—delivering chef-prepared, medically aligned nutrition designed to help you lose fat while preserving muscle.
            </p>
            <CTAButton href="https://meals.medvi.org">GET STARTED</CTAButton>
          </div>
          {/* Food photo */}
          <div className="flex gap-4">
            <Image src={IMG.meals} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.meals2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Supplements ─────────────────────────────────────────────── */}
      <section id="supplements" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product images */}
          <div>
            <Image src={IMG.supp} alt="MEDVi supplements" width={1352} height={658} className="w-full rounded-2xl object-contain" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>PURPOSE-DRIVEN SUPPLEMENTATION</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Supplements with the power to boost real results
            </h2>
            <Bullets items={["Clean, transparent ingredients","Built to support daily health","Evidence-based dosing","Doctor-formulated blends","High-quality sourcing"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Support that helps you feel better over time
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Doctor-designed formulas made with quality ingredients and evidence-based dosing to support your body day after day.
            </p>
            <ComingSoon />
            {/* Doctor formulated card */}
            <div className="rounded-2xl p-5" style={{ backgroundColor: "#f0f4ec" }}>
              <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                Doctor-formulated blends designed to support how your body works best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Men's Health ────────────────────────────────────────────── */}
      <section id="mens-health" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>CARE FOR ENERGY, HORMONES, AND PERFORMANCE</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Men&apos;s healthcare, built for men who expect more
            </h2>
            <Bullets items={["Physical performance","Hormone balance","Energy levels","Mental focus","Fast & discreet shipping"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Care designed to help you feel stronger, sharper, and more in control
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Doctor-guided care for hormones, energy, and performance, with treatment plans tailored to your goals and adjusted as your body responds.
            </p>
            <CTAButton href="https://quad.medvi.org">GET STARTED</CTAButton>
          </div>
          {/* Photos */}
          <div className="flex gap-4">
            <Image src={IMG.mens1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.mens2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Peptides ────────────────────────────────────────────────── */}
      <section id="peptides" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos */}
          <div className="flex gap-4">
            <Image src={IMG.peptides1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.peptides2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>ADVANCED PEPTIDE SUPPORT</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Targeted support for recovery, performance, and longevity
            </h2>
            <Bullets items={["Recovery support (BPC-157, TB-500)","Performance (CJC-1295, Ipamorelin)","Recovery cycles (Sermorelin, MK-677)","Strength (Tesamorelin)","And more—all to support your goals"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Support that works below the surface
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Peptide therapy is designed to support how your body recovers, performs, and repairs over time—with targeted options for recovery, strength, sleep, and overall optimization.
            </p>
            <ComingSoon />
          </div>
        </div>
      </section>

      {/* ── Hair ────────────────────────────────────────────────────── */}
      <section id="hair" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>TARGETED HAIR RESTORATION</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Proven care for thinning hair and regrowth
            </h2>
            <Bullets items={["Clinically backed regrowth ingredients","Targeted scalp and follicle support","Long-term hair density approach","Fast shipping"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Advanced hair regrowth care to help you look and feel your best
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Revitalize your roots and restore fuller-looking hair with our powerful hair regrowth serum, formulated to nourish the scalp and support visibly thicker, healthier strands.
            </p>
            <ComingSoon />
          </div>
          {/* Photos */}
          <div className="flex gap-4">
            <Image src={IMG.hair1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.hair2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Skincare ────────────────────────────────────────────────── */}
      <section id="skincare" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos */}
          <div className="flex gap-4">
            <Image src={IMG.skin1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.skin2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>PERSONALIZED CARE FOR HEALTHIER, CLEARER SKIN.</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Skincare that goes deeper than the surface
            </h2>
            <Bullets items={["Clinician-guided tailored care","Prescription-strength options","Simple daily routines","Visible skin results","Personalized treatment plans"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Skincare designed to treat the root cause—not just cover it up.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              From acne and aging to sensitivity and texture, every plan is built for real, visible improvement.
            </p>
            <ComingSoon />
          </div>
        </div>
      </section>

      {/* ── Why MEDVi — LIGHT background ────────────────────────────── */}
      <section className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Headline */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="space-y-3 max-w-xl">
              <Eyebrow>BETTER IS POSSIBLE—AND WE BUILT FOR IT.</Eyebrow>
              <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3.2rem)", lineHeight: 1.1 }}>
                Modern healthcare,{" "}<em style={{ color: "#2e936f", fontStyle: "normal" }}>built around you</em>
              </h2>
              <p style={{ color: "#24222066", fontSize: "0.9rem" }}>
                We&apos;re creating a better healthcare experience, and the details matter.<br />
                <strong style={{ color: "#2e936f" }}>We&apos;re here for those details</strong>
              </p>
            </div>
            <div className="shrink-0">
              <Image src={IMG.whyBadge} alt="" width={120} height={120} className="w-28 h-28 object-contain" unoptimized />
            </div>
          </div>

          {/* H3: care coaching */}
          <div className="max-w-2xl space-y-3">
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.4rem" }}>
              Care coaching and nutrition support
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Our care coaching team, led by certified medical assistants and registered dietitians, helps answer questions about your medication, program, and day-to-day lifestyle changes—so you have the guidance you need to stay on track and see results.
            </p>
          </div>

          {/* 4 photo cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[IMG.whyCard1, IMG.whyCard2, IMG.whyCard3, IMG.whyCard4].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src={src} alt="" width={600} height={770} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>

          {/* 4 feature text cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed and regulated",        body: "Care is provided by licensed clinicians and filled through FDA-regulated pharmacies." },
              { title: "100% online medical care",      body: "Appointments, follow-ups, and treatment all take place online." },
              { title: "Shipping that's fast & discreet", body: "Orders arrive quickly and in plain packaging to protect your privacy." },
              { title: "Unlimited 24/7 support",        body: "Medical support continues throughout your care, whenever you need it." },
            ].map((card) => (
              <div key={card.title} className="space-y-2">
                <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctors ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#faf9f7" }} className="px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <Eyebrow centered>OUR INCREDIBLE DOCTORS</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Medical care from leading health experts
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "#24222099", lineHeight: 1.7 }}>
              The doctors we&apos;ve partnered with are here to guide you every step of the way, bringing both their expertise and genuine care to help you feel supported.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Dr. Ana Lisa Carr",  creds: "St. George's University, School of Medicine",      photo: IMG.doctorAna,   w: 604, h: 892 },
              { name: "Dr. Kelly Tenbrink", creds: "American Board of Emergency Medicine",             photo: IMG.doctorKelly, w: 604, h: 892 },
            ].map((doc) => (
              <div key={doc.name} className="rounded-3xl overflow-hidden bg-white shadow-sm relative">
                <Image src={doc.photo} alt={doc.name} width={doc.w} height={doc.h} className="w-full h-80 object-cover object-top" unoptimized />
                {/* Name badge overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-md">
                  <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "0.875rem" }}>{doc.name}</p>
                  <p style={{ fontSize: "0.7rem", color: "#24222066" }}>{doc.creds}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <Eyebrow centered>THOSE WHO CHOSE MEDVI</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              There&apos;s a reason people are{" "}
              <em style={{ color: "#2e936f" }}>raving about us.</em>
            </h2>
            <p className="text-sm" style={{ color: "#24222099" }}>
              Join the multitude of people who have trusted MEDVi to help change their lives,<br />
              achieving significant, lasting weight loss.
            </p>
          </div>

          {/* Horizontal scrolling reviewer strip */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl p-5 space-y-4 shrink-0 w-72 snap-start" style={{ backgroundColor: "#faf9f7" }}>
                <div className="flex items-center gap-3">
                  <Image src={r.photo} alt={r.name} width={48} height={48} className="w-11 h-11 rounded-full object-cover" unoptimized />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>{r.name}</p>
                    <span style={{ color: "#c6a673", fontSize: "0.75rem" }}>★★★★★</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#24222099" }}>&ldquo;{r.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar — DARK background ─────────────────────────────── */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="px-6 lg:px-16 py-10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
          {[
            { img: IMG.badgeMoney,  label: "MEDVi guarantee" },
            { img: IMG.badgeShip,   label: "Free, expedited delivery" },
            { img: IMG.badgeDoctor, label: "Doctor-led plans & coaching" },
            { img: IMG.badgeFee,    label: "No hidden fees" },
          ].map(({ img, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                <Image src={img} alt="" width={20} height={20} className="w-5 h-5 invert" unoptimized />
              </div>
              <span className="text-sm font-semibold text-white">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer — WHITE background ────────────────────────────────── */}
      <footer className="bg-white px-6 lg:px-16 pt-16 pb-8 border-t" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Top row: logo + contact */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <Image src={IMG.logo} alt="MEDVi" width={110} height={24} className="h-6 w-auto" unoptimized />
            <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm" style={{ color: "#24222099" }}>
              <span className="flex items-center gap-2">
                <Image src={IMG.iconEmail} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
                help@medvi.org
              </span>
              <span className="flex items-center gap-2">
                <Image src={IMG.iconPhone} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
                (323) 690-1564
              </span>
              <span className="flex items-center gap-2">
                <Image src={IMG.iconAddr} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
                131 Continental Dr. Ste 305, Newark, DE 19713
              </span>
            </div>
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs" style={{ color: "#24222066" }}>
            {["Terms & Conditions","Privacy Policy","Privacy Practices","Refund Policy","Medical Consent","For California Residents","Bill of Rights"].map((l)=>(
              <a key={l} href={`https://home.medvi.org/${l.toLowerCase().replace(/ & /g,"-and-").replace(/ /g,"-")}`}
                className="hover:text-current transition-colors">{l}</a>
            ))}
          </div>

          {/* Bottom: copyright + legitscript */}
          <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: "#e8e5e0" }}>
            <p className="text-xs" style={{ color: "#24222044" }}>© 2026 MEDVi. All rights reserved</p>
            <a href="https://www.legitscript.com/websites/?checker_keywords=medvi.org" target="_blank" rel="noopener noreferrer">
              <Image src={IMG.legitScript} alt="Verify Approval for www.medvi.org" width={80} height={80} className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" unoptimized />
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs leading-relaxed max-w-5xl" style={{ color: "#24222044" }}>
            *The assessment made available on the MEDVi website does not create a doctor-patient relationship. OpenLoop Health, a network of US-licensed doctors, has established exclusionary criteria to determine if an individual does not qualify for GLP-1s. Prescriptions are issued only after an online consultation with an independent licensed provider. Compound medications are dispensed by state-licensed pharmacies but are not FDA approved. Compounded GLP-1s are produced in FDA-regulated facilities. The decision to use compounded drugs is guided by the licensed provider&apos;s medical judgment.
          </p>
        </div>
      </footer>

    </main>
  );
}

// ── Shared sub-components ───────────────────────────────────────────────────

function Eyebrow({ children, centered }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <p className={centered ? "text-center" : ""}
      style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500, fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#2e936f" }}>
      {children}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#242220" }}>
          <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
            style={{ backgroundColor: "rgba(46,147,111,0.12)", color: "#2e936f" }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href}
      className="inline-block text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
      style={{ backgroundColor: "#2e936f" }}>
      {children}
    </a>
  );
}

function ComingSoon() {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full"
      style={{ backgroundColor: "#2e936f", color: "#ffffff" }}>
      COMING SOON
    </span>
  );
}
