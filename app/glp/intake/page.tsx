"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GlpIntakePage() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");

  const isValid = feet !== "" && weight !== "";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      {/* Header */}
      <header className="bg-white border-b" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-2">
          <Link href="/glp">
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
            <span
              className="text-sm font-medium"
              style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Excelente 4.7
            </span>
            <span
              className="text-xs text-gray-400"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              | TrustPilot
            </span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
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

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left: Hero Image */}
          <div
            className="rounded-2xl overflow-hidden relative min-h-[500px] flex items-end"
            style={{ backgroundColor: "#1a1a2e" }}
          >
            {/* Background gradient representing a woman athlete */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span
                className="text-8xl font-black tracking-widest text-white"
                style={{ fontFamily: "'Red Hat Display', sans-serif" }}
              >
                CR
              </span>
            </div>
            <div
              className="relative z-10 w-full p-8"
              style={{ background: "linear-gradient(to top, rgba(15,52,96,0.95) 0%, transparent 100%)" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold italic leading-tight mb-2"
                style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Alcanza tu peso ideal sin dietas restrictivas ni ejercicio extenuante.
              </h2>
              <p
                className="text-white/60 text-sm"
                style={{ fontFamily: "'Red Hat Text', sans-serif" }}
              >
                Medicación GLP-1 — prescrita por médicos certificados
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex flex-col justify-center">
            <p
              className="text-xs tracking-widest uppercase mb-2 font-semibold"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
            >
              PASO 1 DE 3
            </p>
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              ¿Cuál es tu altura y peso?
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Responde las siguientes preguntas para que podamos evaluar tu elegibilidad
              para el programa de pérdida de peso médica.
            </p>

            <div className="space-y-6">
              {/* Height */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  Altura
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="0"
                        min="0"
                        max="8"
                        value={feet}
                        onChange={(e) => setFeet(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors"
                        style={{
                          borderColor: feet ? "#2e936f" : "#e8e5e0",
                          backgroundColor: "#fff",
                          color: "#242220",
                          fontFamily: "'Red Hat Text', sans-serif",
                        }}
                      />
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
                        style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                      >
                        ft
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="0"
                        min="0"
                        max="11"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors"
                        style={{
                          borderColor: inches ? "#2e936f" : "#e8e5e0",
                          backgroundColor: "#fff",
                          color: "#242220",
                          fontFamily: "'Red Hat Text', sans-serif",
                        }}
                      />
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
                        style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                      >
                        in
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weight */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  Peso
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0"
                    min="50"
                    max="600"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-colors"
                    style={{
                      borderColor: weight ? "#2e936f" : "#e8e5e0",
                      backgroundColor: "#fff",
                      color: "#242220",
                      fontFamily: "'Red Hat Text', sans-serif",
                    }}
                  />
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
                    style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    lbs
                  </span>
                </div>
              </div>
            </div>

            <button
              disabled={!isValid}
              className="w-full mt-8 py-4 rounded-pill text-base font-bold text-white transition-all"
              style={{
                backgroundColor: isValid ? "#2e936f" : "#d1d5db",
                cursor: isValid ? "pointer" : "not-allowed",
                fontFamily: "'Red Hat Display', sans-serif",
              }}
            >
              Siguiente →
            </button>

            <p
              className="text-center text-xs mt-4"
              style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Tu información es segura y confidencial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
