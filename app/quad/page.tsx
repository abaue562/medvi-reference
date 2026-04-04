import Image from "next/image";
import Link from "next/link";

function QuadNav() {
  return (
    <nav
      style={{ backgroundColor: "#060d1f", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/quad">
          <Image
            src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
            alt="MEDVi"
            width={100}
            height={32}
            unoptimized
            className="brightness-0 invert"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Science", "How it Works", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              {item}
            </a>
          ))}
        </div>

        <Link
          href="/quad/intake"
          className="px-5 py-2.5 rounded-pill text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#3b82f6", fontFamily: "'Red Hat Text', sans-serif" }}
        >
          GET STARTED →
        </Link>
      </div>
    </nav>
  );
}

export default function QuadPage() {
  const steps = [
    {
      number: "01",
      title: "Online Visit",
      description:
        "Answer a few questions on our secure intake form. It takes 3 minutes.",
    },
    {
      number: "02",
      title: "Doctor Approval",
      description:
        "A US-licensed doctor reviews your case within 24 hours. If approved, your script is issued instantly.",
    },
    {
      number: "03",
      title: "Fast Discreet Delivery",
      description:
        "Your treatment arrives in a plain, unmarked package. Free rush shipping included.",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#060d1f", color: "#ffffff" }}
      className="min-h-screen"
    >
      <QuadNav />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 text-center relative overflow-hidden">
        {/* Background gradient orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Trustpilot */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-green-400 text-sm">★</span>
              ))}
            </div>
            <span className="text-white/60 text-sm" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
              Excellent 4.5 out of 5 | TrustPilot
            </span>
          </div>

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill mb-8 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(59,130,246,0.15)", color: "#3b82f6", fontFamily: "'Onest', sans-serif" }}>
            USA Made | Clinician Prescribed
          </div>

          {/* Title */}
          <p className="text-white/40 text-sm tracking-widest uppercase mb-3" style={{ fontFamily: "'Onest', sans-serif" }}>
            QUAD by MEDVi
          </p>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Speed.{" "}
            <span style={{ color: "#3b82f6" }}>Strength.</span>
            <br />
            Stamina.
          </h1>

          {/* Labels */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase text-white/40 mb-1" style={{ fontFamily: "'Onest', sans-serif" }}>
                H5 GLOBALLY RECOGNIZED
              </p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase text-white/40" style={{ fontFamily: "'Onest', sans-serif" }}>
                THE 4-IN-1 BREAKTHROUGH
              </p>
            </div>
          </div>

          <p
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            The world's first 4-in-1 formula that activates your desire and your body.
            Fast-acting, clinician-prescribed, and delivered discreetly.
          </p>

          <Link
            href="/quad/intake"
            className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#3b82f6", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            SEE IF YOU QUALIFY
          </Link>
        </div>
      </section>

      {/* Science / Ready Faster Section */}
      <section
        id="science"
        className="py-20 px-6"
        style={{ backgroundColor: "#080f24" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Ready Faster,{" "}
                <span style={{ color: "#3b82f6" }}>Lasts All Weekend.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                Pills are slow. Our rapid-absorb liquid goes under your tongue and hits
                your system in{" "}
                <span className="text-white font-semibold">10 minutes.</span>
              </p>

              <div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
                style={{ borderColor: "rgba(59,130,246,0.3)", backgroundColor: "rgba(59,130,246,0.08)" }}
              >
                <span style={{ color: "#3b82f6" }} className="text-xl">⚡</span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/40 mb-0.5" style={{ fontFamily: "'Onest', sans-serif" }}>
                    QUAD STACK — 1 SOLUTION
                  </p>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                    4 powerful ingredients — APOMORPHINE
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredient Pills */}
            <div className="grid grid-cols-2 gap-4">
              {["Apomorphine", "Sildenafil", "Oxytocin", "PT-141"].map((ingredient, i) => (
                <div
                  key={ingredient}
                  className="p-5 rounded-2xl border"
                  style={{
                    backgroundColor: "rgba(59,130,246,0.06)",
                    borderColor: "rgba(59,130,246,0.2)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-bold"
                    style={{ backgroundColor: "#3b82f6" }}
                  >
                    {i + 1}
                  </div>
                  <p className="font-semibold text-white" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                    {ingredient}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-3" style={{ fontFamily: "'Onest', sans-serif" }}>
              SIMPLE PROCESS
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              How It{" "}
              <span style={{ color: "#3b82f6" }}>Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-2xl border relative"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(59,130,246,0.15)",
                }}
              >
                <div
                  className="text-5xl font-black mb-5 leading-none"
                  style={{ color: "rgba(59,130,246,0.25)", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quad/intake"
              className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#3b82f6", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              SEE IF YOU QUALIFY
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section
        id="testimonials"
        className="py-20 px-6"
        style={{ backgroundColor: "#080f24" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-3" style={{ fontFamily: "'Onest', sans-serif" }}>
            REAL RESULTS
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            What Our{" "}
            <span style={{ color: "#3b82f6" }}>Patients Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "James R.", quote: "Works exactly as described — fast and effective. Game changer.", stars: 5 },
              { name: "Michael T.", quote: "Finally something that actually works. Under 10 minutes, no joke.", stars: 5 },
              { name: "David K.", quote: "The discreet delivery and fast results make this perfect.", stars: 5 },
            ].map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl text-left"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  "{t.quote}"
                </p>
                <p className="text-white/40 text-xs font-semibold" style={{ fontFamily: "'Onest', sans-serif" }}>
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10 px-6 border-t"
        style={{ backgroundColor: "#060d1f", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
            alt="MEDVi"
            width={80}
            height={26}
            unoptimized
            className="brightness-0 invert opacity-60"
          />
          <p className="text-white/30 text-sm" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
            © 2026 MEDVi. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/30 text-sm hover:text-white/60 transition-colors"
                style={{ fontFamily: "'Red Hat Text', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
