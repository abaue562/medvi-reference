"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const goals = [
  { id: "stamina", icon: "🟢", label: "Mejorar la resistencia y la energía" },
  { id: "erection", icon: "🔵", label: "Aumentar la firmeza de la erección" },
  { id: "drive", icon: "🩷", label: "Incrementar el deseo sexual" },
  { id: "recovery", icon: "🟠", label: "Recuperación más rápida" },
  { id: "confidence", icon: "🟣", label: "Aumentar la confianza" },
];

export default function QuadIntakePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-white border-b"
        style={{ borderColor: "#e8e5e0" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/quad">
            <Image
              src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
              alt="ClínicaRenova"
              width={90}
              height={28}
              unoptimized
            />
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-green-500 text-sm">★</span>
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}>
              Excelente 4.5
            </span>
            <span className="text-xs text-gray-400" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
              | TrustPilot
            </span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-2">
            {[
              { label: "Inicio", active: true },
              { label: "Detalles", active: false },
              { label: "Elegibilidad", active: false },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: step.active ? "#2e936f" : "#e8e5e0",
                      color: step.active ? "#fff" : "#9ca3af",
                      fontFamily: "'Onest', sans-serif",
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: step.active ? "#242220" : "#9ca3af",
                      fontFamily: "'Red Hat Text', sans-serif",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className="w-12 h-px mx-2" style={{ backgroundColor: "#e8e5e0" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Hero Image */}
          <div
            className="rounded-2xl overflow-hidden aspect-[3/4] flex items-end relative"
          >
            <Image
              src="https://framerusercontent.com/images/6ysW5nd4tzXcofaTriOcTvKB7yw.jpg"
              alt="QUAD intake"
              fill
              unoptimized
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(6,13,31,0.9) 0%, transparent 60%)" }}
            />
            <div
              className="relative z-10 w-full p-8"
            >
              <p
                className="text-xs tracking-widest uppercase mb-2 font-semibold"
                style={{ color: "#3b82f6", fontFamily: "'Onest', sans-serif" }}
              >
                QUAD by ClínicaRenova
              </p>
              <h2
                className="text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Mereces una vida sexual más plena.
              </h2>
              <p className="text-white/60 text-sm mt-2" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
                Deseo y rendimiento. En minutos.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Descubre si QUAD by ClínicaRenova es para ti.
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Selecciona tu objetivo principal:
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelected(goal.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 text-left transition-all"
                  style={{
                    borderColor: selected === goal.id ? "#2e936f" : "#e8e5e0",
                    backgroundColor: selected === goal.id ? "#f0faf6" : "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-xl flex-shrink-0">{goal.icon}</span>
                  <span
                    className="text-base font-medium"
                    style={{
                      color: selected === goal.id ? "#2e936f" : "#242220",
                      fontFamily: "'Red Hat Text', sans-serif",
                    }}
                  >
                    {goal.label}
                  </span>
                  <div
                    className="ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: selected === goal.id ? "#2e936f" : "#d1d5db",
                      backgroundColor: selected === goal.id ? "#2e936f" : "transparent",
                    }}
                  >
                    {selected === goal.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <Link
              href={selected ? "/quad/approval" : "#"}
              className="block w-full py-4 rounded-pill text-base font-bold text-white text-center transition-all"
              style={{
                backgroundColor: selected ? "#2e936f" : "#d1d5db",
                cursor: selected ? "pointer" : "not-allowed",
                fontFamily: "'Red Hat Display', sans-serif",
                pointerEvents: selected ? "auto" : "none",
              }}
            >
              Siguiente →
            </Link>

            <p
              className="text-center text-xs mt-4"
              style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              El medicamento QUAD está indicado únicamente para hombres
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
