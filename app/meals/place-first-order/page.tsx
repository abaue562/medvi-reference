"use client";

import Link from "next/link";
import { useState } from "react";

function MealsNav() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/meals">
          <span
            className="text-3xl font-black text-black"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            M
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "MENÚ SEMANAL", href: "/meals/menu" },
            { label: "PROGRAMAS", href: "/meals/programs" },
            { label: "CÓMO FUNCIONA", href: "/meals/how-it-works" },
            { label: "PREGUNTAS FRECUENTES", href: "/meals/faq" },
            { label: "CONTACTO", href: "/meals/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-gray-700 hover:text-black transition-colors"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/meals/login"
            className="px-4 py-2 rounded-pill text-sm font-semibold border transition-colors hover:bg-gray-50"
            style={{
              borderColor: "#d1d5db",
              color: "#242220",
              fontFamily: "'Red Hat Text', sans-serif",
            }}
          >
            INGRESAR
          </Link>
          <Link
            href="/meals/programs"
            className="px-5 py-2 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Suscribirme
          </Link>
        </div>
      </div>
    </nav>
  );
}

const planOptions = [6, 10, 14, 18];

const priceMap: Record<number, { weekly: string; perMeal: string }> = {
  6:  { weekly: "$79.99/semana",  perMeal: "$13.33/comida" },
  10: { weekly: "$119.99/semana", perMeal: "$12.00/comida" },
  14: { weekly: "$154.99/semana", perMeal: "$11.07/comida" },
  18: { weekly: "$189.99/semana", perMeal: "$10.56/comida" },
};

const sampleMeals = [
  { name: "Bowl de Pollo BBQ", color: "#fcd5b5", emoji: "🍗" },
  { name: "Pasta Bolognese de Res", color: "#fce4d6", emoji: "🍝" },
  { name: "Pollo Teriyaki", color: "#d5f5e3", emoji: "🍱" },
  { name: "Bowl de Bulgogi", color: "#d6eaf8", emoji: "🥢" },
  { name: "Filete Chimichurri", color: "#d5f5e3", emoji: "🥩" },
  { name: "Camarones al Ajo", color: "#f9e4b7", emoji: "🦐" },
  { name: "Wrap César de Pollo", color: "#fef9e7", emoji: "🥙" },
  { name: "Carnitas Bajo en Carbos", color: "#fde8d8", emoji: "🥑" },
];

const faqItems = [
  {
    q: "¿Hay un descuento para primera compra?",
    a: "Sí, tenemos una oferta especial para compradores por primera vez que se aplica automáticamente al momento de tu registro.",
  },
  {
    q: "¿Cómo se calientan las comidas?",
    a: "Las comidas ya están cocinadas. Solo despega un borde del envase y calienta en microondas de 60 a 90 segundos hasta tu temperatura preferida.",
  },
  {
    q: "¿Cómo se envían las comidas?",
    a: "Todos los pedidos se envían vía FedEx/UPS directamente a tu puerta, en una caja aislada con paquetes de gel para mantenerlas frescas.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Puedes modificar, pausar o cancelar tu suscripción en cualquier momento antes del plazo del miércoles a las 7:00 p.m. CST.",
  },
];

export default function PlaceFirstOrderPage() {
  const [selectedPlan, setSelectedPlan] = useState(10);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      {/* Announcement Bar */}
      <div
        className="text-center py-2.5 px-4 text-sm font-medium text-white"
        style={{ backgroundColor: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
      >
        <span className="tracking-wide">
          PEDIDOS ABIERTOS PARA ENVÍO EL LUNES 13 DE ABRIL
        </span>
      </div>

      <MealsNav />

      {/* Hero */}
      <section className="py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
          >
            PRIMER PEDIDO
          </p>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            CREA TU PRIMERA CAJA CON CLINICARENOVA NUTRICIÓN
          </h1>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Descubre más de 75 comidas semanales rotativas, ligeras, deliciosas y ricas en
            macronutrientes. Modifica, pausa o cancela cuando quieras, sin complicaciones.
          </p>
        </div>
      </section>

      {/* Order Builder */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">

          {/* Step 1 — Program */}
          <div
            className="bg-white rounded-2xl p-8 mb-6"
            style={{ border: "1px solid #e8e5e0" }}
          >
            <h3
              className="text-xs font-black tracking-widest uppercase mb-5"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              1. SELECCIONA TU PROGRAMA
            </h3>
            <div
              className="p-5 rounded-xl border-2 cursor-pointer"
              style={{ borderColor: "#2e936f", backgroundColor: "#f0faf6" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: "#2e936f" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#2e936f" }} />
                </div>
                <div>
                  <p
                    className="font-bold text-base"
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

          {/* Step 2 — Plan */}
          <div
            className="bg-white rounded-2xl p-8 mb-6"
            style={{ border: "1px solid #e8e5e0" }}
          >
            <h3
              className="text-xs font-black tracking-widest uppercase mb-2"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              2. SELECCIONA TU PLAN
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Comidas por semana:
            </p>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {planOptions.map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className="py-4 rounded-xl text-lg font-bold transition-all"
                  style={{
                    backgroundColor: selectedPlan === plan ? "#2e936f" : "#faf9f7",
                    color: selectedPlan === plan ? "#fff" : "#242220",
                    border: `2px solid ${selectedPlan === plan ? "#2e936f" : "#e8e5e0"}`,
                    fontFamily: "'Red Hat Display', sans-serif",
                  }}
                >
                  {plan}
                </button>
              ))}
            </div>

            {/* Price display */}
            <div
              className="p-5 rounded-xl text-center"
              style={{ backgroundColor: "#f0faf6", border: "1px solid #c3e8d8" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-1"
                style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
              >
                {selectedPlan} COMIDAS / SEMANA
              </p>
              <p
                className="text-3xl font-black"
                style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                {priceMap[selectedPlan].weekly}
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                {priceMap[selectedPlan].perMeal}
              </p>
              <p
                className="text-xs mt-2"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                Cobro semanal · Envío gratuito · Cancela cuando quieras
              </p>
            </div>
          </div>

          {/* Step 3 — Delivery ZIP */}
          <div
            className="bg-white rounded-2xl p-8 mb-8"
            style={{ border: "1px solid #e8e5e0" }}
          >
            <h3
              className="text-xs font-black tracking-widest uppercase mb-5"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              3. VERIFICA TU CÓDIGO POSTAL
            </h3>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Código postal"
                className="flex-1 px-5 py-3 rounded-xl border-2 text-sm outline-none focus:border-green-500"
                style={{
                  borderColor: "#e8e5e0",
                  color: "#242220",
                  fontFamily: "'Red Hat Text', sans-serif",
                }}
              />
              <button
                className="px-6 py-3 rounded-xl text-sm font-bold text-white whitespace-nowrap"
                style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Verificar
              </button>
            </div>
            <p
              className="text-xs mt-3"
              style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Entregamos en todo el país. Ingresa tu código postal para confirmar disponibilidad.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/meals/register"
            className="block text-center py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Continuar → Crear Mi Cuenta
          </Link>

          <p
            className="text-center text-sm mt-4"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/meals/login"
              className="font-semibold underline"
              style={{ color: "#2e936f" }}
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-xl font-black tracking-widest text-center mb-8"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            EXPLORA EL MENÚ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {sampleMeals.map((meal) => (
              <div
                key={meal.name}
                className="rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center gap-2 p-4"
                style={{ backgroundColor: meal.color }}
              >
                <span className="text-3xl">{meal.emoji}</span>
                <span
                  className="text-sm font-bold text-center leading-snug"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {meal.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/meals/menu"
              className="inline-block px-8 py-3 rounded-pill text-sm font-bold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#242220",
                color: "#ffffff",
                fontFamily: "'Red Hat Display', sans-serif",
              }}
            >
              Ver Menú Completo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-xl font-black tracking-widest text-center mb-10"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            PREGUNTAS FRECUENTES
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border overflow-hidden"
                style={{ borderColor: "#e8e5e0" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span
                    className="font-semibold text-sm"
                    style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="text-xl ml-4 flex-shrink-0 transition-transform"
                    style={{
                      color: "#2e936f",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed border-t"
                    style={{
                      color: "#6b7280",
                      borderColor: "#f3f0eb",
                      fontFamily: "'Red Hat Text', sans-serif",
                    }}
                  >
                    <p className="pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-10 px-6" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <span
              className="text-3xl font-black text-black"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              M
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "MENÚ SEMANAL", href: "/meals/menu" },
                { label: "PROGRAMAS", href: "/meals/programs" },
                { label: "CÓMO FUNCIONA", href: "/meals/how-it-works" },
                { label: "PREGUNTAS FRECUENTES", href: "/meals/faq" },
                { label: "CONTACTO", href: "/meals/contact" },
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
            Copyright © 2026 ClínicaRenova Nutrición. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
