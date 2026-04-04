import Image from "next/image";

// All images served directly from Framer CDN (publicly accessible, no auth needed)
const CDN = "https://framerusercontent.com/images";

const IMAGES = {
  logo:        `${CDN}/1BRDkIzVV7TxG8fJDyUWdUDDE.png`,
  heroDecor:   `${CDN}/MoQjUaFVDcKosmLtidv94kjQ3Zk.png`,
  heroMain:    `${CDN}/Qzg7hOnOYm2PR1xuvL1xDf7C4M.png`,
  weightLoss1: `${CDN}/M9XaNbbDAjo8pUf3JffgMRQ44.png`,
  weightLoss2: `${CDN}/zmJZrAHLgexbSUaBuE8JSFohl8.png`,
  womens1:     `${CDN}/vyhgfyTZdnvKgcOFSsKadXmcI.png`,
  womens2:     `${CDN}/TDqwwuuERJIkMwN3ZjsZgCTOFoU.png`,
  meals1:      `${CDN}/mz3nMVX8VGPBcqgjBYUldp4jw.png`,
  meals2:      `${CDN}/3b210go7xrqsX3cBCZkQjPg7lc.png`,
  supplements: `${CDN}/kGnNaK4Hq75IROfl09b8iDmZSY.png`,
  mens1:       `${CDN}/6NG7JMcShVQy0ZvhiVszVR6REZg.jpg`,
  mens2:       `${CDN}/7XTSiB6TPpicn3IN6IcNvoPO4.png`,
  peptides:    `${CDN}/Qq1hpfsOGdVcMBaTsJ8cRIZxYM.jpg`,
  hair:        `${CDN}/hTDlc2jTbUoIvwdIm9paun4dC2E.png`,
  skin1:       `${CDN}/WUFCBuh0wNjDvRv5B5ZqEH4mjA.png`,
  skin2:       `${CDN}/ihBupsd47mUBkztGVAMt31VNRN4.png`,
  doctorAna:   `${CDN}/6DlpR3ftJ6MctTZwyeuvp0hxAY.jpg`,
  doctorKelly: `${CDN}/iZZOz7kuB4YLvdGWAg8yO3avoLQ.jpg`,
  reviewMain:  `${CDN}/A1lwE6WKdaWtTNHV4R3xFZ1ljVo.jpg`,
  badgeMoney:  `${CDN}/QZxfRAhxllYfpGxMEuk6kFVLhU.svg`,
  badgeShip:   `${CDN}/uBsU5ZsqLrzBSK23aKqkDZSVGIo.svg`,
  badgeDoctor: `${CDN}/YNzdkrl3B55n6jdaG6fo6LYESZA.svg`,
  badgeFee:    `${CDN}/QG8WHNxXqMMGSvYoe11QogyAaQ.svg`,
  iconEmail:   `${CDN}/mOouvtzIDHOerqUQ0hDOpizA.svg`,
  iconPhone:   `${CDN}/E2HTcWzFVYj8RkAxT3IGYNuY.svg`,
  iconAddr:    `${CDN}/Ly2H9feVHgGgo55QqMcUBXLE5uo.svg`,
  legitScript: `${CDN}/q2uWrYWiZmMyus58IGeMLSbGI.png`,
};

const REVIEWS = [
  { name: "Billy",      stars: 5, photo: `${CDN}/OGDQI8XA7V2CREgeUjtv3qMehk.jpg`, quote: "Ms. Gonzalez was great! She listened to my needs and provided details of the meds and any issues that rise." },
  { name: "Terika",     stars: 5, photo: `${CDN}/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg`, quote: "The provider was knowledgeable and helpful. She answered all my questions and made me feel as if this was not our first time meeting. I was very comfortable." },
  { name: "Jamie",      stars: 5, photo: `${CDN}/naCtfcJucSb08iZrMiFEu70fwNw.jpg`, quote: "The questions are to the point and easy to navigate. I'm able to voice my concerns if needed and ask questions of MEDVi. They are quick to respond." },
  { name: "Jacqueline", stars: 5, photo: `${CDN}/u8K8rbgmRaS81RzFu2M7Wl00qI.jpg`, quote: "My experience is very positive. I am doing very well. Slowly and surely reaching my goals with MEDVi's help. They have been very attentive." },
  { name: "Diana",      stars: 5, photo: `${CDN}/cYEX3QqVD69lMmw1NIEAUOSMB8.jpg`, quote: "The staff has been so friendly and caring. I didn't expect that! If I call, I get an immediate answer from a real person!" },
  { name: "Donna",      stars: 5, photo: `${CDN}/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg`, quote: "The Physician was very knowledgeable and ready to answer all my concerns. She even told me about future checkups that will be needed throughout my journey." },
  { name: "Terri",      stars: 5, photo: `${CDN}/yTHZiTQnD4nN9DjRINV2s2nJf6c.jpg`, quote: "Losing weight without a crazy diet, without cardio...it just felt like magic. I was a snacker, but not anymore. I feel so much better." },
  { name: "Greg",       stars: 5, photo: `${CDN}/c7UYcEZ9pL7emhQ8SH0e0iV0d8.jpg`, quote: "I was ready to give up. Wow. I would pay 10x as much if I had to. Dieting days are over. Thanks to the guys at medvi for the metabolic fix - game changer." },
  { name: "Elizabeth",  stars: 5, photo: `${CDN}/lu5vH4LF2nsjUd4R8sM08tMXhFw.jpg`, quote: "My Clinician was kind, informative, gave a clear understanding of expectations, what was needed and future follow ups. Very easy to understand." },
];

export default function Home() {
  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#faf9f7", color: "#242220" }}>

      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <nav style={{ backgroundColor: "#242220" }} className="sticky top-0 z-50 px-6 lg:px-16 py-4 flex items-center justify-between">
        <a href="/">
          <Image src={IMAGES.logo} alt="MEDVi" width={120} height={26} className="h-7 w-auto" unoptimized />
        </a>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
          {["Weight Loss","Peptides & Longevity","Men's Health","Women's Health"].map((l, i) => (
            <a key={l} href={["#weight-loss","#peptides","#mens-health","#womens-health"][i]} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <a href="https://glp.medvi.org" style={{ backgroundColor: "#2e936f" }}
          className="text-white text-xs font-semibold tracking-widest px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity uppercase">
          GET STARTED
        </a>
      </nav>

      {/* ── Ticker ──────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#1a1a1a" }} className="overflow-hidden py-2.5">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]" style={{ width: "max-content" }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="text-xs tracking-[0.2em] uppercase mx-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              LICENSED MEDICAL PROVIDERS &nbsp;·&nbsp; 100% ONLINE &nbsp;·&nbsp; CLEAR PRICING &nbsp;·&nbsp; SHIPPED TO YOUR DOOR &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#242220" }} className="relative overflow-hidden px-6 lg:px-16 pt-16 pb-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end gap-8 lg:gap-0">
          {/* Left copy */}
          <div className="flex-1 pb-20 space-y-7 z-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide rounded-full px-4 py-2"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
              Join 500,000+ MEDVi patients
            </span>
            <h1 className="font-display font-bold leading-[1.05]" style={{ fontSize: "clamp(2.8rem,5vw,4.5rem)", color: "#ffffff" }}>
              Healthcare,<br />
              <span style={{ color: "#2e936f" }}>redefined</span>{" "}for<br />
              real life.
            </h1>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              We provide medical care online—simple, direct, and led by licensed providers. No waiting rooms. No unnecessary steps. Just care that works.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: "Weight Loss",          href: "#weight-loss" },
                { label: "Peptides & Longevity", href: "#peptides" },
                { label: "Men's Health",          href: "#mens-health" },
                { label: "Women's Health",        href: "#womens-health" },
              ].map(({ label, href }) => (
                <a key={label} href={href}
                  className="text-xs px-4 py-2 rounded-full border transition-colors hover:border-white/50"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.65)" }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right images */}
          <div className="flex-1 flex justify-end items-end gap-4 relative">
            <div className="relative w-40 lg:w-56 mb-8">
              <Image src={IMAGES.heroDecor} alt="" width={295} height={321} className="w-full h-auto object-contain" unoptimized />
            </div>
            <div className="relative w-52 lg:w-72">
              <Image src={IMAGES.heroMain} alt="" width={752} height={670} className="w-full h-auto object-contain" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* ── Weight Loss ─────────────────────────────────────────────── */}
      <section id="weight-loss" className="relative overflow-hidden px-6 lg:px-16 py-24 bg-white">
        {/* Green blob */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#2e936f" }} />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow>DOCTOR-GUIDED GLP-1 CARE</Eyebrow>
            <H4>Everything you need—included:</H4>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Weight loss made easy with<br />personalized care
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              A smarter approach to weight loss, built around you
            </h3>
            <Bullets items={["Prescription to fast, effective GLP-1","1:1 physician guidance","24/7 support","Weight loss guarantee","Fast & discreet shipping"]} />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              Find the right GLP-1 medication with the confidence that comes from knowing it is doctor-approved and budget-friendly.
            </p>
            <CTAButton href="https://glp.medvi.org">GET STARTED</CTAButton>
          </div>
          <div className="flex-1 flex justify-center gap-4 z-10">
            <Image src={IMAGES.weightLoss1} alt="" width={500} height={398} className="w-1/2 h-auto rounded-2xl object-cover" unoptimized />
            <Image src={IMAGES.weightLoss2} alt="" width={1211} height={1140} className="w-1/2 h-auto rounded-2xl object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Women's Health ──────────────────────────────────────────── */}
      <section id="womens-health" className="relative overflow-hidden px-6 lg:px-16 py-24" style={{ backgroundColor: "#f7f3fb" }}>
        {/* Purple blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#956bad" }} />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow color="#956bad">CARE DESIGNED FOR WOMEN&apos;S HEALTH</Eyebrow>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Whole-body care for her balance, vitality, and confidence
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              Support that evolves with your body
            </h3>
            <Bullets items={["Hormone balance","Healthy weight management","Hair strength & growth support","Skin health & radiance","Fast & discreet shipping"]} accentColor="#956bad" />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support your health through every stage of life.
            </p>
            <ComingSoon color="#eb8771" />
          </div>
          <div className="flex-1 flex justify-center gap-4 z-10">
            <Image src={IMAGES.womens1} alt="" width={800} height={966} className="w-1/2 h-auto rounded-3xl object-cover" unoptimized />
            <Image src={IMAGES.womens2} alt="" width={619} height={823} className="w-1/2 h-auto rounded-3xl object-cover mt-8" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Metabolic Nutrition ─────────────────────────────────────── */}
      <section id="nutrition" className="relative overflow-hidden px-6 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow>METABOLIC NUTRITION</Eyebrow>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Fuel your transformation,<br />protect your progress
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              Skip the hassle of meal planning and prepping
            </h3>
            <Bullets items={["Meal prep made simple","Chef-made, portion-controlled","Weekly rotating meals","Nutritionally balanced","Macro-friendly options","Completely hassle-free"]} />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              MEDVi Meals is the perfect partner for your GLP-1 journey—delivering chef-prepared, medically aligned nutrition designed to help you lose fat while preserving muscle.
            </p>
            <CTAButton href="https://meals.medvi.org">GET STARTED</CTAButton>
          </div>
          <div className="flex-1 flex justify-center gap-4 z-10">
            <Image src={IMAGES.meals1} alt="" width={604} height={892} className="w-1/2 h-auto rounded-3xl object-cover" unoptimized />
            <Image src={IMAGES.meals2} alt="" width={604} height={892} className="w-1/2 h-auto rounded-3xl object-cover mt-8" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Supplements ─────────────────────────────────────────────── */}
      <section id="supplements" className="relative overflow-hidden px-6 lg:px-16 py-24" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow>PURPOSE-DRIVEN SUPPLEMENTATION</Eyebrow>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Supplements with the power to boost real results
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              Support that helps you feel better over time
            </h3>
            <h3 className="font-display font-semibold text-lg" style={{ color: "#242220cc" }}>
              Doctor-formulated blends designed to support how your body works best.
            </h3>
            <Bullets items={["Clean, transparent ingredients","Built to support daily health","Evidence-based dosing","Doctor-formulated blends","High-quality sourcing"]} />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              Doctor-designed formulas made with quality ingredients and evidence-based dosing to support your body day after day.
            </p>
            <ComingSoon />
          </div>
          <div className="flex-1 flex justify-center z-10">
            <Image src={IMAGES.supplements} alt="" width={620} height={1468} className="w-2/3 h-auto rounded-3xl object-contain" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Men's Health ────────────────────────────────────────────── */}
      <section id="mens-health" className="relative overflow-hidden px-6 lg:px-16 py-24 bg-white">
        {/* Dark olive blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#242220" }} />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow>CARE FOR ENERGY, HORMONES, AND PERFORMANCE</Eyebrow>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Men&apos;s healthcare, built for men who expect more
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              Care designed to help you feel stronger, sharper, and more in control
            </h3>
            <Bullets items={["Physical performance","Hormone balance","Energy levels","Mental focus","Fast & discreet shipping"]} />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              Doctor-guided care for hormones, energy, and performance, with treatment plans tailored to your goals and adjusted as your body responds.
            </p>
            <CTAButton href="https://quad.medvi.org">GET STARTED</CTAButton>
          </div>
          <div className="flex-1 flex justify-center gap-4 z-10">
            <Image src={IMAGES.mens1} alt="" width={1200} height={1632} className="w-1/2 h-auto rounded-3xl object-cover" unoptimized />
            <Image src={IMAGES.mens2} alt="" width={302} height={446} className="w-1/3 h-auto rounded-3xl object-cover mt-8" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Peptides ────────────────────────────────────────────────── */}
      <section id="peptides" className="relative overflow-hidden px-6 lg:px-16 py-24" style={{ backgroundColor: "#eff6f7" }}>
        {/* Teal blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#8cb0b2" }} />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow color="#8cb0b2">ADVANCED PEPTIDE SUPPORT</Eyebrow>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Targeted support for recovery, performance, and longevity
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              Support that works below the surface
            </h3>
            <Bullets items={["Recovery support (BPC-157, TB-500)","Performance (CJC-1295, Ipamorelin)","Recovery cycles (Sermorelin, MK-677)","Strength (Tesamorelin)","And more—all to support your goals"]} accentColor="#8cb0b2" />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              Peptide therapy is designed to support how your body recovers, performs, and repairs over time—with targeted options for goals like recovery, strength, sleep, and overall optimization.
            </p>
            <ComingSoon color="#8cb0b2" />
          </div>
          <div className="flex-1 flex justify-center z-10">
            <Image src={IMAGES.peptides} alt="" width={896} height={1344} className="w-2/3 h-auto rounded-3xl object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Hair ────────────────────────────────────────────────────── */}
      <section id="hair" className="relative overflow-hidden px-6 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow>TARGETED HAIR RESTORATION</Eyebrow>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Proven care for thinning hair and regrowth
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              Advanced hair regrowth care to help you look and feel your best
            </h3>
            <Bullets items={["Clinically backed regrowth ingredients","Targeted scalp and follicle support","Long-term hair density approach","Fast shipping"]} />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              Revitalize your roots and restore fuller-looking hair with our powerful hair regrowth serum, formulated to nourish the scalp and support visibly thicker, healthier strands.
            </p>
            <ComingSoon />
          </div>
          <div className="flex-1 flex justify-center z-10">
            <Image src={IMAGES.hair} alt="" width={800} height={800} className="w-2/3 h-auto rounded-3xl object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Skincare ────────────────────────────────────────────────── */}
      <section id="skincare" className="relative overflow-hidden px-6 lg:px-16 py-24" style={{ backgroundColor: "#fdf6f4" }}>
        {/* Salmon blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#eb8771" }} />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6 z-10">
            <Eyebrow color="#eb8771">PERSONALIZED CARE FOR HEALTHIER, CLEARER SKIN.</Eyebrow>
            <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Skincare that goes deeper than the surface
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "#242220cc" }}>
              Skincare designed to treat the root cause—not just cover it up.
            </h3>
            <Bullets items={["Clinician-guided tailored care","Prescription-strength options","Simple daily routines","Visible skin results","Personalized treatment plans"]} accentColor="#eb8771" />
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#24222099" }}>
              From acne and aging to sensitivity and texture, every plan is built for real, visible improvement. Proven ingredients. Targeted treatments. Care that evolves with your skin.
            </p>
            <ComingSoon color="#eb8771" />
          </div>
          <div className="flex-1 flex justify-center gap-4 z-10">
            <Image src={IMAGES.skin1} alt="" width={604} height={892} className="w-1/2 h-auto rounded-3xl object-cover" unoptimized />
            <Image src={IMAGES.skin2} alt="" width={604} height={892} className="w-1/2 h-auto rounded-3xl object-cover mt-8" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Why MEDVi ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#242220" }} className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-5">
            <Eyebrow color="#2e936f" dark>BETTER IS POSSIBLE—AND WE BUILT FOR IT.</Eyebrow>
            <h2 className="font-display font-semibold leading-tight text-white" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Modern healthcare, built around you
            </h2>
            <h3 className="font-display font-semibold text-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
              Care coaching and nutrition support
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our care coaching team, led by certified medical assistants and registered dietitians, helps answer questions about your medication, program, and day-to-day lifestyle changes—so you have the guidance you need to stay on track and see results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed and regulated",     body: "Care is provided by licensed clinicians and filled through FDA-regulated pharmacies." },
              { title: "100% online medical care",   body: "Appointments, follow-ups, and treatment all take place online." },
              { title: "Shipping that's fast & discreet", body: "Orders arrive quickly and in plain packaging to protect your privacy." },
              { title: "Unlimited 24/7 support",     body: "Medical support continues throughout your care, whenever you need it." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 space-y-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(46,147,111,0.2)" }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#2e936f" }} />
                </div>
                <h3 className="font-display font-semibold text-white text-base">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctors ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#faf9f7" }} className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <Eyebrow centered>OUR INCREDIBLE DOCTORS</Eyebrow>
            <h2 className="font-display font-semibold" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Medical care from leading health experts
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "#24222099" }}>
              The doctors we&apos;ve partnered with are here to guide you every step of the way, bringing both their expertise and genuine care to help you feel supported.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Dr. Ana Lisa Carr",    creds: "Board Certified Physician", photo: IMAGES.doctorAna,   w: 604, h: 892 },
              { name: "Dr. Kelly Tenbrink",   creds: "St. George's University · American Board of Emergency Medicine", photo: IMAGES.doctorKelly, w: 604, h: 892 },
            ].map((doc) => (
              <div key={doc.name} className="rounded-3xl overflow-hidden bg-white shadow-sm">
                <Image src={doc.photo} alt={doc.name} width={doc.w} height={doc.h} className="w-full h-72 object-cover object-top" unoptimized />
                <div className="p-6 space-y-1">
                  <h4 className="font-display font-semibold text-lg">{doc.name}</h4>
                  <p className="text-xs" style={{ color: "#24222099" }}>{doc.creds}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <Eyebrow centered>THOSE WHO CHOSE MEDVI</Eyebrow>
            <h2 className="font-display font-semibold" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              There&apos;s a reason people are raving about us.
            </h2>
          </div>

          {/* Feature review */}
          <div className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" style={{ backgroundColor: "#f1f5e9" }}>
            <Image src={IMAGES.reviewMain} alt="MEDVi Customer Review" width={1232} height={696} className="w-full h-64 lg:h-full object-cover" unoptimized />
            <div className="p-10 flex flex-col justify-center space-y-4">
              <div className="flex gap-1 text-lg" style={{ color: "#c6a673" }}>★★★★★</div>
              <p className="text-base leading-relaxed" style={{ color: "#242220" }}>
                &ldquo;Join the multitude of people who have trusted MEDVi to help change their lives, achieving significant, lasting weight loss.&rdquo;
              </p>
            </div>
          </div>

          {/* Review grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl p-6 space-y-4" style={{ backgroundColor: "#faf9f7" }}>
                <div className="flex items-center gap-3">
                  <Image src={r.photo} alt={r.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" unoptimized />
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <div className="flex gap-0.5 text-xs" style={{ color: "#c6a673" }}>★★★★★</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>&ldquo;{r.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#2e936f" }} className="px-6 lg:px-16 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: IMAGES.badgeMoney,  label: "MEDVi guarantee" },
            { img: IMAGES.badgeShip,   label: "Free, expedited delivery" },
            { img: IMAGES.badgeDoctor, label: "Doctor-led plans & coaching" },
            { img: IMAGES.badgeFee,    label: "No hidden fees" },
          ].map(({ img, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-white text-center">
              <Image src={img} alt={label} width={28} height={28} className="w-7 h-7 invert" unoptimized />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#242220" }} className="px-6 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            {/* Brand + contact */}
            <div className="space-y-6">
              <Image src={IMAGES.logo} alt="MEDVi" width={120} height={26} className="h-7 w-auto" unoptimized />
              <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <div className="flex items-center gap-2">
                  <Image src={IMAGES.iconEmail} alt="" width={20} height={20} className="w-4 h-4 invert opacity-50" unoptimized />
                  <span>help@medvi.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={IMAGES.iconPhone} alt="" width={20} height={20} className="w-4 h-4 invert opacity-50" unoptimized />
                  <span>(323) 690-1564</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={IMAGES.iconAddr} alt="" width={20} height={20} className="w-4 h-4 invert opacity-50" unoptimized />
                  <span>131 Continental Dr. Ste 305, Newark, DE 19713</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm content-start" style={{ color: "rgba(255,255,255,0.45)" }}>
              {["Terms & Conditions","Privacy Policy","Privacy Practices","Refund Policy","Medical Consent","For California Residents","Bill of Rights"].map((l) => (
                <a key={l} href={`https://home.medvi.org/${l.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-")}`}
                  className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-start gap-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>© 2026 MEDVi. All rights reserved</p>
            <a href="https://www.legitscript.com/websites/?checker_keywords=medvi.org" target="_blank" rel="noopener noreferrer">
              <Image src={IMAGES.legitScript} alt="Verify Approval for www.medvi.org" width={80} height={86} className="h-14 w-auto opacity-70 hover:opacity-100 transition-opacity" unoptimized />
            </a>
          </div>

          <p className="text-xs leading-relaxed max-w-4xl" style={{ color: "rgba(255,255,255,0.2)" }}>
            *The assessment made available on the MEDVi website does not create a doctor-patient relationship between the individual completing the assessment and MEDVi. OpenLoop Health, a network of US-licensed doctors that adhere to rigorous medical protocols designed for patient safety, has established exclusionary criteria to determine if an individual does not qualify for GLP-1s. Prescriptions are issued only after an online consultation with an independent licensed provider. Compound medications are dispensed by state-licensed pharmacies but are not FDA approved.
          </p>
        </div>
      </footer>

    </main>
  );
}

// ── Shared sub-components ────────────────────────────────────────────────────

function Eyebrow({ children, color = "#2e936f", dark = false, centered = false }: {
  children: React.ReactNode; color?: string; dark?: boolean; centered?: boolean;
}) {
  return (
    <p className={`text-[10px] font-semibold tracking-[0.2em] uppercase font-eyebrow ${centered ? "text-center" : ""}`}
      style={{ color: dark ? color : color }}>
      {children}
    </p>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="font-display font-semibold text-base" style={{ color: "#242220" }}>{children}</h4>;
}

function Bullets({ items, accentColor = "#2e936f" }: { items: string[]; accentColor?: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#242220" }}>
          <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
            style={{ backgroundColor: `${accentColor}22`, color: accentColor }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{ backgroundColor: "#2e936f" }}
      className="inline-block text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">
      {children}
    </a>
  );
}

function ComingSoon({ color = "#2e936f" }: { color?: string }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full"
      style={{ backgroundColor: `${color}18`, color }}>
      COMING SOON
    </span>
  );
}
