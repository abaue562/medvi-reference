"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "MENÚ SEMANAL", href: "/meals/menu" },
  { label: "PROGRAMAS", href: "/meals/programs" },
  { label: "CÓMO FUNCIONA", href: "/meals/how-it-works" },
  { label: "PREGUNTAS FRECUENTES", href: "/meals/faq" },
  { label: "CONTACTO", href: "/meals/contact" },
];

function MealsNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-1 focus:outline-none"
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Center: logo */}
        <Link href="/meals" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="https://framerusercontent.com/images/snLhnFxV1S915H070FVXdFseVw.png"
            alt="ClínicaRenova Nutrición"
            width={40}
            height={40}
            unoptimized
          />
        </Link>

        {/* Right: login + sign up */}
        <div className="flex items-center gap-3">
          <Link href="/meals/login"
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 border rounded-full transition-colors hover:bg-gray-50"
            style={{ borderColor: "#d1d5db", color: "#242220", fontFamily: "'Onest', sans-serif" }}>
            INGRESAR
          </Link>
          <Link href="/meals/place-first-order"
            className="text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Onest', sans-serif" }}>
            REGISTRARSE
          </Link>
        </div>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold tracking-widest uppercase text-gray-800 hover:text-black transition-colors py-2 border-b border-gray-100 last:border-0"
                style={{ fontFamily: "'Onest', sans-serif" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

const SLIDE_IMGS = [
  "https://framerusercontent.com/images/ihBupsd47mUBkztGVAMt31VNRN4.png",
  "https://framerusercontent.com/images/keDlEK59Fa69dFZn1FAHPjD1j8.png",
  "https://framerusercontent.com/images/Qzg7hOnOYm2PR1xuvL1xDf7C4M.png",
  "https://framerusercontent.com/images/TDqwwuuERJIkMwN3ZjsZgCTOFoU.png",
  "https://framerusercontent.com/images/ZlJbchQEeboQ3J4HC0w7Lj2SRvQ.png",
  "https://framerusercontent.com/images/zmJZrAHLgexbSUaBuE8JSFohl8.png",
  "https://framerusercontent.com/images/3YQLMZEk5tHlkmMh4CjpAifaEc.jpg",
  "https://framerusercontent.com/images/u8K8rbgmRaS81RzFu2M7Wl00qI.jpg",
];

function MealSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % SLIDE_IMGS.length), 2500);
    return () => clearInterval(t);
  }, []);
  // Show 4 images starting from current, wrapping around
  const visible = [0, 1, 2, 3].map(i => SLIDE_IMGS[(current + i) % SLIDE_IMGS.length]);
  return (
    <div className="flex gap-3 mb-10 max-w-2xl mx-auto overflow-hidden">
      {visible.map((src, i) => (
        <div key={src + i}
          className="flex-1 aspect-square rounded-2xl overflow-hidden relative transition-all duration-700"
          style={{ opacity: i === 0 ? 0.7 : 1, transform: i === 0 ? "scale(0.95)" : "scale(1)" }}>
          <Image src={src} alt="" fill unoptimized className="object-cover" />
        </div>
      ))}
    </div>
  );
}

const mealImgList = [
  "https://framerusercontent.com/images/ihBupsd47mUBkztGVAMt31VNRN4.png",
  "https://framerusercontent.com/images/keDlEK59Fa69dFZn1FAHPjD1j8.png",
  "https://framerusercontent.com/images/Qzg7hOnOYm2PR1xuvL1xDf7C4M.png",
  "https://framerusercontent.com/images/TDqwwuuERJIkMwN3ZjsZgCTOFoU.png",
  "https://framerusercontent.com/images/ZlJbchQEeboQ3J4HC0w7Lj2SRvQ.png",
  "https://framerusercontent.com/images/zmJZrAHLgexbSUaBuE8JSFohl8.png",
  "https://framerusercontent.com/images/3YQLMZEk5tHlkmMh4CjpAifaEc.jpg",
  "https://framerusercontent.com/images/u8K8rbgmRaS81RzFu2M7Wl00qI.jpg",
];

const meals = [
  { name: "Bowl de Cerdo Asiático", color: "#f9e4b7" },
  { name: "Pecho de Res BBQ", color: "#fcd5b5" },
  { name: "Pollo Teriyaki", color: "#d5f5e3" },
  { name: "Albóndigas de Pavo", color: "#fde8d8" },
  { name: "Filete de Salmón", color: "#d6eaf8" },
  { name: "Salteado de Verduras", color: "#d5f5e3" },
  { name: "Pollo a la Griega", color: "#fce4d6" },
  { name: "Tacos de Res", color: "#fef9e7" },
];

const planOptions = [6, 10, 14, 18];

export default function MealsPage() {
  const [selectedPlan, setSelectedPlan] = useState(10);

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div
        className="text-center py-2.5 px-4 text-sm font-medium text-white"
        style={{ backgroundColor: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
      >
        <span className="tracking-wide">
          PEDIDOS ABIERTOS PARA ENVÍO EL LUNES 13 DE ABRIL
        </span>
        <span className="ml-4 text-white/50">|</span>
        <span className="ml-4 text-white/70 text-xs">
          [Contador regresivo]
        </span>
      </div>

      <MealsNav />

      {/* Hero */}
      <section className="py-16 px-6" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Auto-sliding meal carousel */}
          <MealSlider />

          <h1
            className="text-7xl md:text-8xl font-black tracking-tight mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            ClínicaRenova
          </h1>
          <p
            className="text-2xl font-semibold mb-2"
            style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Nutrición GLP-1. Más Proteína. Menos Estrés.
          </p>
          <p
            className="text-base font-medium mb-6"
            style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            ¡Comidas frescas entregadas en todo el país cada semana!
          </p>
          <p
            className="text-base max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Olvídate de planificar y preparar tus comidas: ClínicaRenova Nutrición lo hace por ti.
            Preparamos cada plato para que sea ligero, limpio y perfectamente balanceado, con
            una nutrición de alto nivel y un sabor inigualable en cada bocado.
          </p>
          <Link
            href="/meals/programs"
            className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Suscribirme
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-2xl md:text-3xl font-black tracking-widest"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              DE NUESTRA COCINA A TU PUERTA: ASÍ FUNCIONA CLINICARENOVA NUTRICIÓN
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🍽️",
                title: "ELIGE TUS COMIDAS LISTAS PARA COMER",
                body: "Selecciona entre más de 75 comidas preparadas por chefs, curadas especialmente para ti cada semana.",
              },
              {
                icon: "👨‍🍳",
                title: "PREPARADAS POR CHEFS, ENTREGADAS FRESCAS",
                body: "Nosotros cocinamos, tú descansas, y las recibes directo en tu puerta.",
              },
              {
                icon: "⚡",
                title: "CALIENTA, SIRVE Y DISFRUTA",
                body: "Sin complicaciones: calienta tu comida y disfruta en minutos.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-8 text-center"
                style={{ border: "1px solid #e8e5e0" }}
              >
                <div className="text-4xl mb-5">{step.icon}</div>
                <h3
                  className="font-black tracking-wider text-sm mb-4"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-2xl md:text-3xl font-black tracking-wider mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              EXPLORA UN MENÚ DE COMIDAS FRESCAS, LIGERAS Y ORIENTADAS A TUS METAS
            </h2>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Con más de 300 comidas curadas por chefs repletas de sabor extraordinario...
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {meals.map((meal, idx) => (
              <div
                key={meal.name}
                className="rounded-2xl overflow-hidden aspect-square relative"
              >
                <Image
                  src={mealImgList[idx % mealImgList.length]}
                  alt={meal.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}>
                  <span
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    {meal.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              href="/meals/menu"
              className="inline-block px-8 py-3 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              VER MENÚ COMPLETO
            </Link>
          </div>
        </div>
      </section>

      {/* Order Box Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-black tracking-wide text-center mb-10"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            CREA TU PRIMERA CAJA CON CLINICARENOVA NUTRICIÓN
          </h2>

          {/* Program selection */}
          <div className="mb-10">
            <h3
              className="text-sm font-black tracking-widest uppercase mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              1. SELECCIONA TU PROGRAMA
            </h3>
            <div
              className="p-5 rounded-2xl border-2 bg-white cursor-pointer"
              style={{ borderColor: "#2e936f" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#2e936f" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#2e936f" }} />
                </div>
                <div>
                  <p
                    className="font-bold"
                    style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    Clásico
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    Opciones tradicionales de preparación de comidas con porciones estándar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Plan selection */}
          <div className="mb-10">
            <h2
              className="text-sm font-black tracking-widest uppercase mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              2. SELECCIONA TU PLAN
            </h2>
            <p
              className="text-sm mb-4"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Comidas por semana:
            </p>
            <div className="grid grid-cols-4 gap-3">
              {planOptions.map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className="py-4 rounded-xl text-lg font-bold transition-all"
                  style={{
                    backgroundColor: selectedPlan === plan ? "#2e936f" : "#fff",
                    color: selectedPlan === plan ? "#fff" : "#242220",
                    border: `2px solid ${selectedPlan === plan ? "#2e936f" : "#e8e5e0"}`,
                    fontFamily: "'Red Hat Display', sans-serif",
                  }}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/meals/place-first-order"
            className="block text-center py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Continuar a Seleccionar Comidas
          </Link>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-black tracking-wide mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            ÚNETE PARA OFERTAS EXCLUSIVAS Y NOVEDADES
          </h2>
          <p
            className="text-base mb-6 leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Suscríbete a nuestro boletín y sé el primero en conocer ofertas, nuevos
            productos y consejos de expertos para un estilo de vida más saludable.
          </p>
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-5 py-3 rounded-pill border-2 text-sm outline-none"
              style={{
                borderColor: "#e8e5e0",
                color: "#242220",
                fontFamily: "'Red Hat Text', sans-serif",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-pill text-sm font-bold text-white whitespace-nowrap"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Suscribirme
            </button>
          </form>
          <p
            className="text-xs mt-3"
            style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-10 px-6" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <Image
              src="https://framerusercontent.com/images/snLhnFxV1S915H070FVXdFseVw.png"
              alt="ClínicaRenova Nutrición"
              width={40}
              height={40}
              unoptimized
            />
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Inicio", href: "/meals" },
                { label: "Menú Semanal", href: "/meals/menu" },
                { label: "Programas", href: "/meals/programs" },
                { label: "Preguntas Frecuentes", href: "/meals/faq" },
                { label: "Contacto", href: "/meals/contact" },
                { label: "Ingresar", href: "/meals/login" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold tracking-widest text-gray-500 hover:text-black transition-colors"
                  style={{ fontFamily: "'Onest', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p
            className="text-center text-sm"
            style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Copyright © 2026 ClínicaRenova Nutrición. Todos los derechos reservados.{" "}
            <Link href="/terms-and-conditions" className="underline" style={{ color: "#9ca3af" }}>
              Términos y Condiciones
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
