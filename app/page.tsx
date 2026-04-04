// MEDVi Landing Page — reference scaffold for v0
// Paste the contents of v0-prompt.md into v0 to generate the full UI.
// This file is the entry point v0 will edit.

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-[#242220]">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-[#242220] px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-2xl tracking-tight font-display">MEDVi</span>
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          <a href="#weight-loss" className="hover:text-white transition-colors">Weight Loss</a>
          <a href="#peptides" className="hover:text-white transition-colors">Peptides &amp; Longevity</a>
          <a href="#mens-health" className="hover:text-white transition-colors">Men&apos;s Health</a>
          <a href="#womens-health" className="hover:text-white transition-colors">Women&apos;s Health</a>
        </div>
        <a
          href="https://glp.medvi.org"
          className="bg-[#2e936f] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#267d5f] transition-colors"
        >
          GET STARTED
        </a>
      </nav>

      {/* ── Ticker ── */}
      <div className="bg-[#1a1a1a] text-white/60 text-xs py-2 overflow-hidden whitespace-nowrap">
        <span className="inline-block animate-marquee">
          LICENSED MEDICAL PROVIDERS &nbsp;·&nbsp; 100% ONLINE &nbsp;·&nbsp; CLEAR PRICING &nbsp;·&nbsp; SHIPPED TO YOUR DOOR &nbsp;·&nbsp;
          LICENSED MEDICAL PROVIDERS &nbsp;·&nbsp; 100% ONLINE &nbsp;·&nbsp; CLEAR PRICING &nbsp;·&nbsp; SHIPPED TO YOUR DOOR &nbsp;·&nbsp;
        </span>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#242220] text-white px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Join 500,000+ MEDVi patients
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display">
            Healthcare,<br />
            <span className="text-[#2e936f]">redefined</span> for real life.
          </h1>
          <p className="text-white/70 text-lg max-w-lg">
            We provide medical care online—simple, direct, and led by licensed providers.
            No waiting rooms. No unnecessary steps. Just care that works.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Weight Loss", "Peptides & Longevity", "Men's Health", "Women's Health"].map((item) => (
              <span key={item} className="border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full hover:border-white/50 cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-white/5 rounded-2xl aspect-[3/4] max-w-sm w-full" />
      </section>

      {/* ── Weight Loss ── */}
      <ServiceSection
        id="weight-loss"
        eyebrow="DOCTOR-GUIDED GLP-1 CARE"
        headline="Weight loss made easy with personalized care"
        subhead="A smarter approach to weight loss, built around you"
        bullets={[
          "Prescription to fast, effective GLP-1",
          "1:1 physician guidance",
          "24/7 support",
          "Weight loss guarantee",
          "Fast & discreet shipping",
        ]}
        copy="Find the right GLP-1 medication with the confidence that comes from knowing it is doctor-approved and budget-friendly."
        cta={{ label: "GET STARTED", href: "https://glp.medvi.org" }}
        bg="#ffffff"
        flip={false}
      />

      {/* ── Women's Health ── */}
      <ServiceSection
        id="womens-health"
        eyebrow="CARE DESIGNED FOR WOMEN'S HEALTH"
        headline="Whole-body care for her balance, vitality, and confidence"
        subhead="Support that evolves with your body"
        bullets={[
          "Hormone balance",
          "Healthy weight management",
          "Hair strength & growth support",
          "Skin health & radiance",
          "Fast & discreet shipping",
        ]}
        copy="Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support your health through every stage of life."
        badge="COMING SOON"
        bg="#f1f5e9"
        flip={true}
      />

      {/* ── Metabolic Nutrition ── */}
      <ServiceSection
        id="nutrition"
        eyebrow="METABOLIC NUTRITION"
        headline="Fuel your transformation, protect your progress"
        subhead="Skip the hassle of meal planning and prepping"
        bullets={[
          "Meal prep made simple",
          "Chef-made, portion-controlled",
          "Weekly rotating meals",
          "Nutritionally balanced",
          "Macro-friendly options",
        ]}
        copy="MEDVi Meals is the perfect partner for your GLP-1 journey—delivering chef-prepared, medically aligned nutrition designed to help you lose fat while preserving muscle."
        cta={{ label: "GET STARTED", href: "https://meals.medvi.org" }}
        bg="#ffffff"
        flip={false}
      />

      {/* ── Men's Health ── */}
      <ServiceSection
        id="mens-health"
        eyebrow="CARE FOR ENERGY, HORMONES, AND PERFORMANCE"
        headline="Men's healthcare, built for men who expect more"
        subhead="Care designed to help you feel stronger, sharper, and more in control"
        bullets={[
          "Physical performance",
          "Hormone balance",
          "Energy levels",
          "Mental focus",
          "Fast & discreet shipping",
        ]}
        copy="Doctor-guided care for hormones, energy, and performance, with treatment plans tailored to your goals and adjusted as your body responds."
        cta={{ label: "GET STARTED", href: "https://quad.medvi.org" }}
        bg="#f1f5e9"
        flip={true}
      />

      {/* ── Peptides ── */}
      <ServiceSection
        id="peptides"
        eyebrow="ADVANCED PEPTIDE SUPPORT"
        headline="Targeted support for recovery, performance, and longevity"
        subhead="Support that works below the surface"
        bullets={[
          "Recovery support (BPC-157, TB-500)",
          "Performance (CJC-1295, Ipamorelin)",
          "Recovery cycles (Sermorelin, MK-677)",
          "Strength (Tesamorelin)",
          "And more—all to support your goals",
        ]}
        copy="Peptide therapy is designed to support how your body recovers, performs, and repairs over time."
        badge="COMING SOON"
        bg="#ffffff"
        flip={false}
      />

      {/* ── Hair ── */}
      <ServiceSection
        id="hair"
        eyebrow="TARGETED HAIR RESTORATION"
        headline="Proven care for thinning hair and regrowth"
        subhead="Advanced hair regrowth care to help you look and feel your best"
        bullets={[
          "Clinically backed regrowth ingredients",
          "Targeted scalp and follicle support",
          "Long-term hair density approach",
          "Fast shipping",
        ]}
        copy="Revitalize your roots and restore fuller-looking hair with our powerful hair regrowth serum."
        badge="COMING SOON"
        bg="#f1f5e9"
        flip={true}
      />

      {/* ── Skincare ── */}
      <ServiceSection
        id="skincare"
        eyebrow="PERSONALIZED CARE FOR HEALTHIER, CLEARER SKIN"
        headline="Skincare that goes deeper than the surface"
        subhead="Skincare designed to treat the root cause—not just cover it up."
        bullets={[
          "Clinician-guided tailored care",
          "Prescription-strength options",
          "Simple daily routines",
          "Visible skin results",
          "Personalized treatment plans",
        ]}
        copy="From acne and aging to sensitivity and texture, every plan is built for real, visible improvement."
        badge="COMING SOON"
        bg="#ffffff"
        flip={false}
      />

      {/* ── Why MEDVi ── */}
      <section className="bg-[#242220] text-white px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <p className="text-[#2e936f] text-xs font-semibold tracking-widest uppercase font-eyebrow">
              BETTER IS POSSIBLE—AND WE BUILT FOR IT.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Modern healthcare, built around you</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Licensed and regulated", body: "Care is provided by licensed clinicians and filled through FDA-regulated pharmacies." },
              { title: "100% online medical care", body: "Appointments, follow-ups, and treatment all take place online." },
              { title: "Shipping that's fast & discreet", body: "Orders arrive quickly and in plain packaging to protect your privacy." },
              { title: "Unlimited 24/7 support", body: "Medical support continues throughout your care, whenever you need it." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#2e936f]/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#2e936f]" />
                </div>
                <h3 className="font-semibold text-lg font-display">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctors ── */}
      <section className="bg-[#faf9f7] px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[#2e936f] text-xs font-semibold tracking-widest uppercase font-eyebrow">OUR INCREDIBLE DOCTORS</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Medical care from leading health experts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Dr. Ana Lisa Carr", credentials: "Board Certified Physician" },
              { name: "Dr. Kelly Tenbrink", credentials: "St. George's University · American Board of Emergency Medicine" },
            ].map((doc) => (
              <div key={doc.name} className="bg-white rounded-2xl p-8 flex gap-6 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[#f1f5e9] shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-xl font-display">{doc.name}</h4>
                  <p className="text-sm text-[#242220]/60">{doc.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[#2e936f] text-xs font-semibold tracking-widest uppercase font-eyebrow">THOSE WHO CHOSE MEDVI</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display">There&apos;s a reason people are raving about us.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Billy", quote: "Ms. Gonzalez was great! She listened to my needs and provided details of the meds and any issues that rise." },
              { name: "Terika", quote: "The provider was knowledgeable and helpful. She answered all my questions and made me feel as if this was not our first time meeting." },
              { name: "Jamie", quote: "The questions are to the point and easy to navigate. I'm able to voice my concerns if needed and ask questions of MEDVi. They are quick to respond." },
              { name: "Jacqueline", quote: "My experience is very positive. I am doing very well. Slowly and surely reaching my goals with MEDVi's help." },
              { name: "Diana", quote: "The staff has been so friendly and caring. I didn't expect that! If I call, I get an immediate answer from a real person!" },
              { name: "Terri", quote: "Losing weight without a crazy diet, without cardio...it just felt like magic. I was a snacker, but not anymore. I feel so much better." },
              { name: "Greg", quote: "I was ready to give up. Wow. I would pay 10x as much if I had to. Dieting days are over. Thanks to the guys at medvi—game changer." },
              { name: "Donna", quote: "The Physician was very knowledgeable and ready to answer all my concerns. She even told me about future checkups throughout my journey." },
              { name: "Elizabeth", quote: "My Clinician was kind, informative, gave a clear understanding of expectations and future follow ups. Very easy to understand and helpful." },
            ].map((r) => (
              <div key={r.name} className="bg-[#faf9f7] rounded-2xl p-6 space-y-4">
                <div className="flex gap-1 text-[#c6a673]">{"★★★★★"}</div>
                <p className="text-sm leading-relaxed text-[#242220]/80">&ldquo;{r.quote}&rdquo;</p>
                <p className="font-semibold text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-[#2e936f] px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {["MEDVi guarantee", "Free, expedited delivery", "Doctor-led plans & coaching", "No hidden fees"].map((item) => (
            <div key={item} className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-white/20 mx-auto" />
              <p className="font-semibold text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#242220] text-white/60 px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <div className="space-y-4">
              <span className="text-white font-bold text-2xl font-display">MEDVi</span>
              <div className="text-sm space-y-1">
                <p>help@medvi.org</p>
                <p>(323) 690-1564</p>
                <p>131 Continental Dr. Ste 305, Newark, DE 19713</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {["Terms & Conditions", "Privacy Policy", "Privacy Practices", "Refund Policy", "Medical Consent", "For California Residents", "Bill of Rights"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-xs">
            <p>© 2026 MEDVi. All rights reserved</p>
          </div>
        </div>
      </footer>

    </main>
  );
}

// ── Reusable service section component ────────────────────────────────────────
function ServiceSection({
  id, eyebrow, headline, subhead, bullets, copy, cta, badge, bg, flip,
}: {
  id: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  bullets: string[];
  copy: string;
  cta?: { label: string; href: string };
  badge?: string;
  bg: string;
  flip: boolean;
}) {
  return (
    <section id={id} style={{ backgroundColor: bg }} className="px-6 py-24">
      <div className={`max-w-6xl mx-auto flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16`}>
        {/* Text */}
        <div className="flex-1 space-y-6">
          <p className="text-[#2e936f] text-xs font-semibold tracking-widest uppercase font-eyebrow">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight font-display">{headline}</h2>
          <h3 className="text-xl font-semibold text-[#242220]/70 font-display">{subhead}</h3>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-[#242220]/80">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2e936f]/15 text-[#2e936f] flex items-center justify-center shrink-0 text-xs">✓</span>
                {b}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#242220]/60 leading-relaxed max-w-md">{copy}</p>
          {cta && (
            <a href={cta.href} className="inline-block bg-[#2e936f] text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#267d5f] transition-colors">
              {cta.label}
            </a>
          )}
          {badge && (
            <span className="inline-block bg-[#c6a673]/20 text-[#c6a673] text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
              {badge}
            </span>
          )}
        </div>
        {/* Image placeholder */}
        <div className="flex-1 max-w-sm w-full aspect-[3/4] rounded-3xl bg-[#242220]/5" />
      </div>
    </section>
  );
}
