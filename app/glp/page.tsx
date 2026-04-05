"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const BASE = "https://framerusercontent.com/images/";

// ─── NAV ────────────────────────────────────────────────────────────────────
function GlpNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Nuestros Productos", href: "#products" },
    { label: "Resultados Reales", href: "#results" },
    { label: "Cómo Funciona", href: "#metabolism" },
    { label: "Preguntas Frecuentes", href: "#faq" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: "#ffffff", borderColor: "#e8e5e0" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/glp" className="flex-shrink-0">
          <Image
            src={`${BASE}1BRDkIzVV7TxG8fJDyUWdUDDE.png`}
            alt="ClínicaRenova"
            width={100}
            height={30}
            unoptimized
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium hover:text-black transition-colors whitespace-nowrap"
              style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/glp/intake"
          className="hidden lg:inline-block px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 whitespace-nowrap"
          style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
        >
          COMENZAR
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 border-t" style={{ backgroundColor: "#ffffff", borderColor: "#e8e5e0" }}>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm hover:text-black transition-colors"
              style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/glp/intake"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block text-center py-3 rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            COMENZAR
          </Link>
        </div>
      )}
    </nav>
  );
}

// ─── HERO CAROUSEL ──────────────────────────────────────────────────────────
const ALL_LIFESTYLE = [
  `${BASE}6DlpR3ftJ6MctTZwyeuvp0hxAY.jpg`,
  `${BASE}A1lwE6WKdaWtTNHV4R3xFZ1ljVo.jpg`,
  `${BASE}iZZOz7kuB4YLvdGWAg8yO3avoLQ.jpg`,
  `${BASE}a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg`,
  `${BASE}cYEX3QqVD69lMmw1NIEAUOSMB8.jpg`,
  `${BASE}OGDQI8XA7V2CREgeUjtv3qMehk.jpg`,
  `${BASE}d4SpmpLmhUfMZkWsTOukrdAmhg.jpg`,
  `${BASE}yTHZiTQnD4nN9DjRINV2s2nJf6c.jpg`,
];

function HeroCarousel() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setOffset(o => o + 1), 2000);
    return () => clearInterval(t);
  }, []);
  // Two columns scrolling at different speeds
  const col1 = [...ALL_LIFESTYLE, ...ALL_LIFESTYLE];
  const col2 = [...ALL_LIFESTYLE.slice(3), ...ALL_LIFESTYLE.slice(0, 3), ...ALL_LIFESTYLE];
  return (
    <div className="lg:w-1/2 hidden lg:flex gap-3 overflow-hidden" style={{ height: 480 }}>
      {/* Column 1 — scrolls up */}
      <div className="flex-1 flex flex-col gap-3 transition-transform duration-1000 ease-linear"
        style={{ transform: `translateY(-${(offset % ALL_LIFESTYLE.length) * 13}%)` }}>
        {col1.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shrink-0" style={{ height: 160 }}>
            <Image src={src} alt="" width={200} height={160} unoptimized className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      {/* Column 2 — scrolls down */}
      <div className="flex-1 flex flex-col gap-3 transition-transform duration-1000 ease-linear"
        style={{ transform: `translateY(-${((ALL_LIFESTYLE.length - offset) % ALL_LIFESTYLE.length) * 13}%)` }}>
        {col2.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shrink-0" style={{ height: 160 }}>
            <Image src={src} alt="" width={200} height={160} unoptimized className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function HeroSection() {

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-6" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-7xl mx-auto">
        {/* Two-column: text left, grid right on desktop; stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: headline + CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "#f0faf6", color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}>
              <span>✦</span> Más de 500,000 pacientes
            </div>

            <h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              ¿Por fin decidido a perder peso?{" "}
              <em className="not-italic" style={{ color: "#2e936f" }}>Nosotros también.</em>
              <br />
              <span className="text-3xl md:text-4xl xl:text-5xl font-semibold" style={{ color: "#242220" }}>
                Pérdida de grasa simplificada con atención personalizada y medicación GLP-1.
              </span>
            </h1>

            <p className="text-lg mb-4 font-medium" style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}>
              ¡Sin membresía ni costos ocultos! Comienza desde solo{" "}
              <strong style={{ color: "#2e936f" }}>$179/mes</strong>
            </p>

            <Link
              href="/glp/intake"
              className="inline-block px-10 py-4 rounded-full text-base font-bold text-white mb-8 transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              ¿SOY ELEGIBLE?
            </Link>

            {/* Sub trust */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
              <span>✔ Sin contrato</span>
              <span>✔ Recetado por médicos</span>
              <span>✔ Envío directo a domicilio</span>
            </div>
          </div>

          {/* Right: auto-scrolling lifestyle carousel */}
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}

// ─── PRESS / TRUST BAR ──────────────────────────────────────────────────────
function PressBar() {
  const logos = [
    "Yahoo Finance", "Forbes", "Bloomberg", "Healthline", "SELF", "Fortune",
  ];
  return (
    <section className="py-8 px-6 border-y" style={{ backgroundColor: "#f3f0eb", borderColor: "#e8e5e0" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs tracking-widest uppercase mb-5 text-gray-400"
          style={{ fontFamily: "'Onest', sans-serif" }}>
          Presencia en los principales medios
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <span key={logo} className="text-gray-300 font-bold text-lg tracking-wide"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ───────────────────────────────────────────────────────────────
const products = [
  {
    popular: true,
    badge: "POPULAR",
    name: "Inyecciones GLP-1",
    price: "Desde $179/mes",
    detail: "Una inyección sencilla por semana.",
    image: `${BASE}Qzg7hOnOYm2PR1xuvL1xDf7C4M.png`,
  },
  {
    popular: false,
    badge: "Rx",
    name: "Pastilla Wegovy®",
    price: "$99 Membresía + Costo del Medicamento",
    detail: "Una pastilla al día.",
    image: `${BASE}M9XaNbbDAjo8pUf3JffgMRQ44.png`,
  },
  {
    popular: false,
    badge: "Rx",
    name: "Tabletas GLP-1",
    price: "Desde $249/mes",
    detail: "Una tableta disoluble al día.",
    image: `${BASE}3b210go7xrqsX3cBCZkQjPg7lc.png`,
  },
  {
    popular: false,
    badge: "Rx",
    name: "Inyección Wegovy®",
    price: "$99 Membresía + Costo del Medicamento",
    detail: "Disponibilidad sujeta a cambios.",
    image: `${BASE}Qzg7hOnOYm2PR1xuvL1xDf7C4M.png`,
  },
  {
    popular: false,
    badge: "Rx",
    name: "Inyección Zepbound®",
    price: "$99 Membresía + Costo del Medicamento",
    detail: "Disponibilidad sujeta a cambios.",
    image: `${BASE}M9XaNbbDAjo8pUf3JffgMRQ44.png`,
  },
];

function ProductsSection() {
  return (
    <section id="products" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
            Respaldado por expertos, accesible para ti.
          </h2>
          <p className="text-base max-w-2xl mx-auto"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
            Encuentra el medicamento GLP-1 adecuado con la tranquilidad de saber que está
            aprobado por médicos y cabe en tu presupuesto.
          </p>
          <p className="mt-3 text-sm font-semibold" style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}>
            ¡Sin membresía ni costos ocultos!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className="relative bg-white rounded-2xl p-6 flex flex-col"
              style={{
                border: p.popular ? "2px solid #2e936f" : "1px solid #e8e5e0",
                boxShadow: p.popular ? "0 8px 30px rgba(46,147,111,0.15)" : "none",
              }}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: p.popular ? "#2e936f" : "#8a8278", fontFamily: "'Onest', sans-serif" }}>
                {p.popular ? "⭐ " + p.badge : p.badge}
              </div>

              {/* Product image */}
              <div className="flex items-center justify-center h-24 mb-4 mt-3">
                <Image src={p.image} alt={p.name} width={80} height={80} unoptimized className="object-contain" />
              </div>

              <h3 className="font-bold text-base mb-1"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                {p.name}
              </h3>
              <p className="text-sm font-semibold mb-2" style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}>
                {p.price}
              </p>
              <p className="text-sm flex-1 mb-5" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                {p.detail}
              </p>

              <Link
                href="/glp/intake"
                className="block text-center py-2.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                COMENZAR
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STAR QUOTE ─────────────────────────────────────────────────────────────
function StarQuote() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <Image
            src={`${BASE}Qzg7hOnOYm2PR1xuvL1xDf7C4M.png`}
            alt="Producto GLP-1"
            width={160}
            height={160}
            unoptimized
            className="object-contain"
          />
        </div>
        <div>
          <div className="flex gap-1 mb-3 text-yellow-400 text-xl">{"⭐⭐⭐⭐⭐"}</div>
          <blockquote
            className="text-2xl md:text-3xl font-bold italic mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            "Cuando nada más funcionó, ClínicaRenova lo logró."
          </blockquote>
          <p className="text-sm" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
            — Paciente verificada de ClínicaRenova
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── GOAL WEIGHT CALCULATOR ─────────────────────────────────────────────────
function WeightCalculator() {
  const [currentWeight, setCurrentWeight] = useState(220);
  const [goalWeight, setGoalWeight] = useState(170);

  const lossLbs = Math.max(0, currentWeight - goalWeight);
  const lossPercent = currentWeight > 0 ? Math.round((lossLbs / currentWeight) * 100) : 0;

  return (
    <section id="the-numbers" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
            ¿Quieres alcanzar tu peso ideal rápidamente?
          </h2>
          <p className="text-base max-w-xl mx-auto"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
            No es magia, es ciencia metabólica. El GLP-1 regula el apetito y el azúcar en sangre,
            mejora tu metabolismo y elimina los antojos.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm" style={{ border: "1px solid #e8e5e0" }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Sliders */}
            <div className="space-y-8">
              {/* Current weight */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold" style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}>
                    Peso actual
                  </label>
                  <span className="text-sm font-bold" style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>
                    {currentWeight} lbs
                  </span>
                </div>
                <input
                  type="range" min={100} max={400} value={currentWeight}
                  onChange={(e) => setCurrentWeight(Number(e.target.value))}
                  className="w-full accent-[#2e936f]"
                />
                <div className="flex justify-between text-xs mt-1 text-gray-400">
                  <span>100 lbs</span><span>400 lbs</span>
                </div>
              </div>

              {/* Goal weight */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold" style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}>
                    Peso meta
                  </label>
                  <span className="text-sm font-bold" style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>
                    {goalWeight} lbs
                  </span>
                </div>
                <input
                  type="range" min={80} max={400} value={goalWeight}
                  onChange={(e) => setGoalWeight(Number(e.target.value))}
                  className="w-full accent-[#2e936f]"
                />
                <div className="flex justify-between text-xs mt-1 text-gray-400">
                  <span>80 lbs</span><span>400 lbs</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#f0faf6" }}>
                <p className="text-5xl font-black mb-1" style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>
                  {lossLbs}
                </p>
                <p className="text-base" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                  libras a perder
                </p>
              </div>
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#f0faf6" }}>
                <p className="text-5xl font-black mb-1" style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>
                  {lossPercent}%
                </p>
                <p className="text-base" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                  de tu peso corporal
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/glp/intake"
              className="inline-block px-10 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              ¡ESTOY LISTO, VAMOS!
            </Link>
            <p className="mt-3 text-xs text-gray-400" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
              En promedio, los pacientes de ClínicaRenova pierden el 15–20% de su peso corporal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CHANGE GRID ────────────────────────────────────────────────────────────
function ChangeGrid() {
  const changeImages = [
    `${BASE}6DlpR3ftJ6MctTZwyeuvp0hxAY.jpg`,
    `${BASE}A1lwE6WKdaWtTNHV4R3xFZ1ljVo.jpg`,
    `${BASE}iZZOz7kuB4YLvdGWAg8yO3avoLQ.jpg`,
    `${BASE}a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg`,
    `${BASE}cYEX3QqVD69lMmw1NIEAUOSMB8.jpg`,
    `${BASE}OGDQI8XA7V2CREgeUjtv3qMehk.jpg`,
    `${BASE}d4SpmpLmhUfMZkWsTOukrdAmhg.jpg`,
    `${BASE}yTHZiTQnD4nN9DjRINV2s2nJf6c.jpg`,
  ];

  return (
    <section id="results" className="py-20 px-6" style={{ backgroundColor: "#242220" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
            El cambio que todos esperábamos.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
            Únete a más de 500,000 pacientes de ClínicaRenova y obtén resultados reales y duraderos.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {changeImages.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-square">
              <Image src={src} alt="" width={300} height={300} unoptimized className="object-cover w-full h-full" />
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: "✓", label: "Pierde peso más rápido" },
            { icon: "✓", label: "Hasta 18% de tu peso corporal" },
            { icon: "✓", label: "Mantén el peso a largo plazo" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: "#2e936f" }}>
                {item.icon}
              </span>
              <span className="text-white/80 text-sm" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── METABOLISM / FEATURE CARDS ─────────────────────────────────────────────
function MetabolismSection() {
  return (
    <section id="metabolism" className="py-20 px-6" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase mb-3 font-semibold"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}>
              POR QUÉ FUNCIONA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
              Vamos a reactivar tu metabolismo.
            </h2>
            <p className="text-base leading-relaxed mb-8"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
              Las dietas tradicionales no funcionan porque cerca del 70% del peso está determinado
              genéticamente. Con medicación, trabajarás con tu cuerpo en lugar de contra él,
              para alcanzar tu peso ideal y mantenerlo.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                "Reduce el apetito y los antojos de forma natural",
                "Regula el azúcar en sangre y mejora el metabolismo",
                "Resultados reales desde el primer mes",
                "Aprobado y supervisado por médicos licenciados",
              ].map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                    style={{ backgroundColor: "#2e936f" }}>✓</span>
                  <p className="text-sm" style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}>{feat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="space-y-5">
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#f0faf6" }}>
              <p className="text-6xl font-black mb-2" style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>93%</p>
              <p className="text-base" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                de los pacientes mantuvo el peso perdido de forma definitiva
              </p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#f0faf6" }}>
              <p className="text-6xl font-black mb-2" style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>500K+</p>
              <p className="text-base" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                pacientes confían en ClínicaRenova
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS BAR ──────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "2 min", label: "Evaluación en línea" },
    { value: "24/7", label: "Soporte ilimitado" },
    { value: "15–20%", label: "Peso corporal perdido en promedio" },
    { value: "$179", label: "Comienza desde" },
  ];

  return (
    <section className="py-14 px-6" style={{ backgroundColor: "#2e936f" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.value}>
            <p className="text-4xl font-black text-white mb-1"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
              {s.value}
            </p>
            <p className="text-sm text-white/80" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ───────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Completa tu evaluación",
      description:
        "Completa una evaluación rápida en línea para determinar si el medicamento GLP-1 es adecuado para ti. Nuestro equipo de profesionales licenciados revisará tu información y te dará una respuesta en poco tiempo.",
      image: `${BASE}eNSyOYR4nWN2eC2kBvfFakC0Jc.png`,
    },
    {
      number: "02",
      title: "Obtén tu receta",
      description:
        "Una vez aprobado, recibirás atención personalizada y una receta médica para apoyar tu pérdida de peso. Tu plan de cuidado está diseñado para ayudarte a lograr resultados duraderos de forma segura.",
      image: `${BASE}DledV5XhgNZMvvKuNPweP2g.png`,
    },
    {
      number: "03",
      title: "Recibe tu medicamento",
      description:
        "Tu medicamento será enviado directamente a tu domicilio para mayor comodidad. Con ClínicaRenova, comenzar tu tratamiento es tan sencillo como abrir tu paquete y seguir las instrucciones.",
      image: `${BASE}MoQjUaFVDcKosmLtidv94kjQ3Zk.png`,
    },
  ];

  return (
    <section id="journey" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase mb-3 font-semibold"
            style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}>
            TU PROCESO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
            Comienza tu camino hacia la pérdida de peso con ClínicaRenova.
          </h2>
          <p className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
            Comienza tu transformación hoy con el proceso sencillo y personalizado de ClínicaRenova
            para acceder a los medicamentos GLP-1.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e8e5e0" }}>
              {/* Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image src={step.image} alt={step.title} fill unoptimized className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black" style={{ color: "#e8e5e0", fontFamily: "'Red Hat Display', sans-serif" }}>
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold" style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/glp/intake"
            className="inline-block px-10 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            COMENZAR AHORA
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 24/7 SUPPORT ───────────────────────────────────────────────────────────
function SupportSection() {
  return (
    <section id="support" className="py-20 px-6" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={`${BASE}9WyYelkv3EfaJFi50PZydNSt2ws.png`}
              alt="Soporte 24/7"
              width={600}
              height={500}
              unoptimized
              className="object-cover w-full"
            />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-3 font-semibold"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}>
              SIEMPRE A TU LADO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
              Soporte ilimitado 24/7 incluido.
            </h2>
            <p className="text-base leading-relaxed mb-8"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
              ClínicaRenova te brinda acceso las 24 horas, los 7 días de la semana, a un equipo
              dedicado de especialistas. Con citas y mensajes ilimitados, puedes comunicarte en
              cualquier momento para orientación, preguntas o dudas.
            </p>

            <div className="space-y-4">
              {[
                "Citas médicas ilimitadas incluidas",
                "Mensajes directos con tu equipo de especialistas",
                "Respuestas rápidas en cualquier momento del día",
                "Seguimiento personalizado de tu progreso",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                    style={{ backgroundColor: "#2e936f" }}>✓</span>
                  <p className="text-sm" style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── REVIEWS ────────────────────────────────────────────────────────────────
const reviews = [
  {
    name: "Ms. Gonzalez",
    text: "La Dra. Gonzalez fue excelente. Escuchó mis necesidades y me explicó los detalles de los medicamentos y posibles efectos.",
    stars: 5,
  },
  {
    name: "Billy",
    text: "La proveedora fue muy conocedora y servicial. Respondió todas mis preguntas y me hizo sentir como si nos conociéramos de antes.",
    stars: 5,
  },
  {
    name: "Sandra",
    text: "Las preguntas son precisas y fáciles de navegar. Puedo expresar mis inquietudes y ClínicaRenova responde rápidamente.",
    stars: 5,
  },
  {
    name: "Belinda",
    text: "Mi experiencia ha sido muy positiva. Lentamente pero seguro estoy alcanzando mis metas. Son muy atentos y me han dado todos los recursos para tener éxito.",
    stars: 5,
  },
  {
    name: "Diana",
    text: "El personal ha sido tan amable y atento. Si llamo, obtengo respuesta inmediata de una persona real.",
    stars: 5,
  },
  {
    name: "Greg",
    text: "Perder peso sin una dieta loca, sin cardio... se sentía como magia. Era alguien que picaba todo el tiempo, pero ya no. Me siento mucho mejor.",
    stars: 5,
  },
  {
    name: "Terri",
    text: "Estaba listo para rendirme. Pagaría 10 veces más si tuviera que hacerlo. Los días de dieta han terminado. Gracias a ClínicaRenova por el arreglo metabólico.",
    stars: 5,
  },
  {
    name: "Alexandra",
    text: "Los Médicos y el Personal han sido muy profesionales y rápidos con cualquier pregunta. Me siento en muy buenas manos. ¡Estoy a 13 libras de mi meta!",
    stars: 5,
  },
];

function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase mb-3 font-semibold"
            style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}>
            TESTIMONIOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
            Hay una razón por la que la gente nos recomienda.
          </h2>
          <p className="mt-4 text-base" style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
            Únete a los miles de personas que han confiado en ClínicaRenova para cambiar sus vidas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 flex flex-col"
              style={{ border: "1px solid #e8e5e0" }}>
              <div className="flex gap-0.5 mb-3 text-yellow-400">
                {"⭐".repeat(r.stars)}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-4 italic"
                style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}>
                "{r.text}"
              </p>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                  style={{ backgroundColor: "#2e936f" }}>✓</span>
                <p className="text-xs font-semibold" style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}>
                  {r.name} — Cliente verificado
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── NUTRITION ──────────────────────────────────────────────────────────────
function NutritionSection() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "#242220" }}>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-14">
              <p className="text-xs tracking-widest uppercase mb-3 font-semibold"
                style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}>
                POTENCIADO POR
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                Nutrición ClínicaRenova
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                Combustible para tu transformación, protección para tu progreso.
                Omite la molestia de planificar y preparar comidas.
              </p>
              <Link
                href="/meals"
                className="inline-block px-8 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                EXPLORAR COMIDAS
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[280px]">
              <Image
                src={`${BASE}naCtfcJucSb08iZrMiFEu70fwNw.jpg`}
                alt="Comidas ClínicaRenova"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: "#f0faf6" }}>
      <div className="max-w-2xl mx-auto">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6"
          style={{ backgroundColor: "#2e936f" }}>
          ✓
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
          Lo único que perderás es el peso extra.
        </h2>
        <p className="text-base mb-8 max-w-lg mx-auto"
          style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
          Con más de 500,000 pacientes, estamos seguros de que alcanzarás tu meta con
          nuestro programa personalizado.
        </p>
        <Link
          href="/glp/intake"
          className="inline-block px-12 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
        >
          CONTINUAR CON CONFIANZA
        </Link>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cuánto cuesta el programa?",
      a: "El programa de Semaglutida de ClínicaRenova comienza en $179 el primer mes sin contrato. Este costo incluye la revisión médica, el plan personalizado, orientación 1:1, informe metabólico y el costo del medicamento enviado a tu puerta. Las recargas están fijadas en $299 e incluyen todos los mismos beneficios.",
    },
    {
      q: "¿Funcionará para mí?",
      a: "Nuestros proveedores explorarán la posibilidad de recetarte medicamentos GLP-1 compuestos, si es apropiado. Los medicamentos compuestos pueden proporcionar resultados increíbles usando ingredientes GLP-1 activos que te ayudan a alcanzar tus metas.",
    },
    {
      q: "¿Qué pasa si mi seguro no cubre el medicamento?",
      a: "Si bien todas las recetas de ClínicaRenova son de pago en efectivo, tu seguro puede reembolsarte por opciones de marca. Mantenemos los medicamentos compuestos a un precio justo para que no sea necesario el seguro mientras trabajas hacia tu peso ideal.",
    },
    {
      q: "¿Qué puedo esperar después de registrarme?",
      a: "Después de completar tu visita en línea, nuestros proveedores médicos revisarán tus respuestas y determinarán si el tratamiento es adecuado para ti. Si es así, recibirás un medicamento enviado directamente desde la farmacia a tu puerta.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-6" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e8e5e0" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="font-bold text-base pr-4"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                  {faq.q}
                </h3>
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm"
                  style={{ backgroundColor: openIndex === i ? "#2e936f" : "#e8e5e0", color: openIndex === i ? "white" : "#6b7280" }}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GUARANTEE / REFUND ──────────────────────────────────────────────────────
function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl p-10 md:p-16 text-center" style={{ backgroundColor: "#242220" }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6"
            style={{ backgroundColor: "#2e936f" }}>
            ✓
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
            Garantía ClínicaRenova
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
            Estamos comprometidos con tu éxito. Si por alguna razón no estás satisfecho con tu
            experiencia, contáctanos. Nuestro equipo está aquí para asegurarse de que obtengas
            los resultados que mereces.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: "✓", label: "Pierde peso más rápido" },
              { icon: "✓", label: "Garantía ClínicaRenova" },
              { icon: "✓", label: "Sin costos ocultos" },
              { icon: "✓", label: "HSA y FSA aceptados" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                  style={{ backgroundColor: "#2e936f" }}>
                  {item.icon}
                </span>
                <p className="text-white/80 text-xs text-center"
                  style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/glp/intake"
            className="inline-block px-10 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            COMENZAR
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── DOCTORS ─────────────────────────────────────────────────────────────────
function DoctorsSection() {
  const doctors = [
    {
      name: "Dra. Ana García",
      specialty: "Medicina de Emergencias",
      education: "Universidad St. George's, Facultad de Medicina",
      board: "Junta Americana de Medicina de Emergencias",
      image: `${BASE}VlXVSTuHKTz4XzjZzNLWYchfHMQ.png`,
    },
    {
      name: "Dra. Kelly Williams",
      specialty: "Medicina de Emergencias",
      education: "Universidad St. George's, Facultad de Medicina",
      board: "Junta Americana de Medicina de Emergencias",
      image: `${BASE}WUFCBuh0wNjDvRv5B5ZqEH4mjA.png`,
    },
  ];

  return (
    <section id="doctors" className="py-20 px-6" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
            Conoce a los increíbles médicos con los que trabajamos.
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
            Los médicos asociados de ClínicaRenova están aquí para guiarte en cada paso del camino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {doctors.map((doc) => (
            <div key={doc.name} className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e8e5e0" }}>
              <div className="relative h-64 bg-gray-100">
                <Image src={doc.image} alt={doc.name} fill unoptimized className="object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                  {doc.name}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}>
                  {doc.specialty}
                </p>
                <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  {doc.education}
                </p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                  {doc.board}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INTAKE FORM PREVIEW ────────────────────────────────────────────────────
function IntakeFormPreview() {
  const [selected, setSelected] = useState<string | null>(null);

  const goals = [
    "Perder 1–20 libras",
    "Perder 21–50 libras",
    "Perder 51+ libras",
    "No estoy seguro, solo quiero perder el peso",
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm" style={{ border: "1px solid #e8e5e0" }}>
          <div className="text-center mb-8">
            <p className="text-xs tracking-widest uppercase mb-3 font-semibold"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}>
              COMENZAR
            </p>
            <h2 className="text-2xl md:text-3xl font-bold"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
              ¿Cuál es tu meta de pérdida de peso?
            </h2>
          </div>

          <div className="space-y-3 mb-8">
            {goals.map((goal) => (
              <button
                key={goal}
                onClick={() => setSelected(goal)}
                className="w-full text-left px-5 py-4 rounded-xl transition-all border-2 font-medium text-sm"
                style={{
                  borderColor: selected === goal ? "#2e936f" : "#e8e5e0",
                  backgroundColor: selected === goal ? "#f0faf6" : "white",
                  color: selected === goal ? "#242220" : "#6b7280",
                  fontFamily: "'Red Hat Text', sans-serif",
                }}
              >
                <span className="inline-block w-4 h-4 rounded-full border-2 mr-3 align-middle"
                  style={{ borderColor: selected === goal ? "#2e936f" : "#d1d5db",
                    backgroundColor: selected === goal ? "#2e936f" : "transparent" }} />
                {goal}
              </button>
            ))}
          </div>

          <Link
            href="/glp/intake"
            className="block text-center py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            CONTINUAR
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function GlpFooter() {
  return (
    <footer style={{ backgroundColor: "#242220" }} className="py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src={`${BASE}1BRDkIzVV7TxG8fJDyUWdUDDE.png`}
              alt="ClínicaRenova"
              width={100}
              height={30}
              unoptimized
              className="brightness-0 invert mb-4"
            />
            <p className="text-white/40 text-xs max-w-xs leading-relaxed"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
              Atención médica personalizada de pérdida de peso. Contáctanos en{" "}
              <a href="mailto:hola@clinicarenova.org" className="underline hover:text-white/70">
                hola@clinicarenova.org
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Términos y Condiciones", href: "/terms-and-conditions" },
              { label: "Política de Privacidad", href: "/privacy-policy" },
              { label: "Política de Reembolso", href: "/cancellation-and-refund-policy" },
              { label: "Consentimiento Médico", href: "/medical-consent" },
              { label: "Declaración de Derechos", href: "/bill-of-rights" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
                style={{ fontFamily: "'Red Hat Text', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t pt-8 mb-6" style={{ borderColor: "#ffffff15" }}>
          <p className="text-white/20 text-xs leading-relaxed"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
            *Los resultados varían según el peso inicial y el cumplimiento del programa. Los pacientes de ClínicaRenova típicamente
            pierden 1–2 libras por semana después de 4 semanas, combinado con una dieta saludable y ejercicio. Consulta a un
            profesional de salud antes de usar medicación o iniciar cualquier programa de pérdida de peso. Los medicamentos compuestos
            se producen en instalaciones reguladas por la FDA, pero no son aprobados por la FDA. La decisión de usar medicamentos
            compuestos es guiada por el juicio médico del proveedor licenciado.
          </p>
        </div>

        <p className="text-center text-sm text-white/30"
          style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
          © 2026 ClínicaRenova. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function GlpPage() {
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen">
      <GlpNav />
      <HeroSection />
      <PressBar />
      <ProductsSection />
      <StarQuote />
      <WeightCalculator />
      <ChangeGrid />
      <MetabolismSection />
      <StatsBar />
      <HowItWorksSection />
      <SupportSection />
      <ReviewsSection />
      <NutritionSection />
      <CtaSection />
      <FaqSection />
      <GuaranteeSection />
      <DoctorsSection />
      <IntakeFormPreview />
      <GlpFooter />
    </div>
  );
}
