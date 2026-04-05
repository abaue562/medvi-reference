"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function QuadNav() {
  return (
    <nav
      style={{ backgroundColor: "#060d1f", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/quad">
          <Image
            src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
            alt="ClínicaRenova"
            width={100}
            height={32}
            unoptimized
            className="brightness-0 invert"
          />
        </Link>

        <Link
          href="/quad/intake"
          className="px-5 py-2.5 rounded-pill text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#3b82f6", fontFamily: "'Red Hat Text', sans-serif" }}
        >
          COMENZAR →
        </Link>
      </div>
    </nav>
  );
}

const nextSteps = [
  {
    number: "01",
    title: "Completa Tu Compra",
    desc: "Finaliza tu pedido de forma segura. Aceptamos tarjetas Visa, Mastercard, AMEX y Discover.",
  },
  {
    number: "02",
    title: "Revisión Médica",
    desc: "Un médico con licencia en EE. UU. revisará tu caso en menos de 24 horas y emitirá tu receta si eres apto.",
  },
  {
    number: "03",
    title: "Entrega Rápida y Discreta",
    desc: "Tu tratamiento llegará en un paquete discreto. Envío urgente gratuito incluido.",
  },
];

const qualifications = [
  { icon: "⚡", label: "Acción rápida en 10-15 minutos" },
  { icon: "🕐", label: "Efecto prolongado hasta 36 horas" },
  { icon: "🧬", label: "Fórmula 4 en 1 exclusiva" },
  { icon: "👨‍⚕️", label: "Prescrita por médicos certificados" },
  { icon: "📦", label: "Entrega discreta y gratuita" },
  { icon: "🔄", label: "Renovación mensual sin complicaciones" },
];

export default function QuadApprovalPage() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div style={{ backgroundColor: "#060d1f", color: "#ffffff" }} className="min-h-screen">
      <QuadNav />

      {/* Hero — Approval Banner */}
      <section className="pt-16 pb-12 px-6 text-center relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-pill mb-8 text-sm font-bold tracking-widest uppercase"
            style={{
              backgroundColor: "rgba(34,197,94,0.15)",
              color: "#22c55e",
              border: "1px solid rgba(34,197,94,0.3)",
              fontFamily: "'Onest', sans-serif",
            }}
          >
            ✓ &nbsp; APROBADO — CANDIDATO ELEGIBLE
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            ¡Felicidades!{" "}
            <span style={{ color: "#3b82f6" }}>Eres candidato</span>
            <br />
            para QUAD.
          </h1>

          <p
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Según tus respuestas, cumples con los requisitos para recibir{" "}
            <span className="text-white font-semibold">QUAD by ClínicaRenova</span>.
            Un médico revisará tu expediente y, si todo está en orden, tu receta será
            emitida en menos de 24 horas.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { value: "10-15", unit: "MIN", label: "Tiempo de acción" },
              { value: "36", unit: "HRS", label: "Duración del efecto" },
              { value: "4 en 1", unit: "", label: "Ingredientes activos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl text-center"
                style={{
                  backgroundColor: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <p
                  className="text-3xl font-black mb-0.5"
                  style={{ color: "#3b82f6", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {stat.value}
                  {stat.unit && (
                    <span className="text-sm ml-1" style={{ color: "#3b82f6" }}>{stat.unit}</span>
                  )}
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Onest', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => setAccepted(true)}
            className="inline-block px-12 py-5 rounded-pill text-lg font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#3b82f6", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            {accepted ? "✓ ¡Listo! Procesando..." : "Completar Mi Compra →"}
          </button>

          <p
            className="text-sm text-white/40 mt-4"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Pago 100% seguro · Sin compromisos a largo plazo
          </p>
        </div>
      </section>

      {/* What You Qualified For */}
      <section className="py-16 px-6" style={{ backgroundColor: "#080f24" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-widest uppercase text-white/40 mb-3"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              LO QUE INCLUYE TU TRATAMIENTO
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Tu plan{" "}
              <span style={{ color: "#3b82f6" }}>QUAD by ClínicaRenova</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {qualifications.map((q) => (
              <div
                key={q.label}
                className="p-5 rounded-2xl flex items-center gap-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}
              >
                <span className="text-2xl flex-shrink-0">{q.icon}</span>
                <p
                  className="text-sm font-medium text-white/80"
                  style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {q.label}
                </p>
              </div>
            ))}
          </div>

          {/* Ingredients */}
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "rgba(59,130,246,0.06)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <p
              className="text-xs tracking-widest uppercase text-white/40 mb-4"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              FÓRMULA 4 EN 1 — INGREDIENTES ACTIVOS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Apomorfina", role: "Activa el deseo" },
                { name: "Sildenafil", role: "Flujo sanguíneo" },
                { name: "Oxitocina", role: "Conexión emocional" },
                { name: "PT-141", role: "Impulso sexual" },
              ].map((ing, i) => (
                <div key={ing.name} className="text-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold"
                    style={{ backgroundColor: "#3b82f6" }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    {ing.name}
                  </p>
                  <p
                    className="text-xs text-white/50 mt-0.5"
                    style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    {ing.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-widest uppercase text-white/40 mb-3"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              PROCESO SENCILLO
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Próximos{" "}
              <span style={{ color: "#3b82f6" }}>pasos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {nextSteps.map((step) => (
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
                  style={{
                    color: "rgba(59,130,246,0.25)",
                    fontFamily: "'Red Hat Display', sans-serif",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/60 leading-relaxed text-sm"
                  style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Doctor Review Note */}
          <div
            className="rounded-2xl p-6 flex gap-5 items-start"
            style={{
              backgroundColor: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <span className="text-3xl flex-shrink-0">👨‍⚕️</span>
            <div>
              <p
                className="text-sm font-bold text-white mb-1"
                style={{ fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Nota sobre la revisión médica
              </p>
              <p
                className="text-sm text-white/60 leading-relaxed"
                style={{ fontFamily: "'Red Hat Text', sans-serif" }}
              >
                Un médico con licencia en EE. UU. revisará tu información de salud de forma
                individual. La aprobación final está sujeta a la evaluación médica. En caso
                de que no seas apto, recibirás un reembolso completo sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: "#080f24" }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase text-white/40 mb-4"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            QUAD BY CLINICARENOVA
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Listo para empezar
          </h2>
          <p
            className="text-white/60 mb-8 text-base leading-relaxed"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            No dejes pasar esta oportunidad. Tu tratamiento QUAD está a un paso.
            Completa tu compra ahora y recíbelo en tu puerta en días.
          </p>
          <button
            onClick={() => setAccepted(true)}
            className="inline-block px-12 py-5 rounded-pill text-lg font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#3b82f6", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            {accepted ? "✓ ¡Procesando tu pedido!" : "Completar Mi Compra →"}
          </button>
          <p
            className="text-xs text-white/30 mt-4"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Garantía de reembolso completo si no eres aprobado médicamente
          </p>
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
            alt="ClínicaRenova"
            width={80}
            height={26}
            unoptimized
            className="brightness-0 invert opacity-60"
          />
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            © 2026 ClínicaRenova. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidad", "Términos", "Contacto"].map((link) => (
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
