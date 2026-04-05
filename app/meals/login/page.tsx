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
            href="/meals/register"
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

export default function MealsLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <MealsNav />

      <div className="flex min-h-[calc(100vh-73px)]">
        {/* Left — Brand Panel */}
        <div
          className="hidden lg:flex flex-col justify-center px-16 w-[480px] flex-shrink-0"
          style={{ backgroundColor: "#242220" }}
        >
          <span
            className="text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            M
          </span>
          <h2
            className="text-3xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Comidas saludables y deliciosas a tu puerta.
          </h2>
          <p
            className="text-white/60 text-base leading-relaxed"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Inicia sesión para gestionar tus pedidos, modificar tus comidas o actualizar
            tu plan semanal con ClínicaRenova Nutrición.
          </p>

          <div className="mt-8 p-5 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
            <p
              className="text-xs tracking-widest uppercase mb-2"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
            >
              CLINICARENOVA NUTRICIÓN
            </p>
            <p
              className="text-white text-sm leading-relaxed"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              "Comidas frescas entregadas en todo el país cada semana. Más proteína, menos estrés."
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-14">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1
                className="text-3xl font-black mb-2"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Iniciar Sesión
              </h1>
              <p
                className="text-sm"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                Comidas saludables entregadas directo a tu puerta
              </p>
            </div>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                  style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                  style={{
                    borderColor: "#e8e5e0",
                    color: "#242220",
                    fontFamily: "'Red Hat Text', sans-serif",
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                  >
                    Contraseña
                  </label>
                  <Link
                    href="/meals/forgot-password"
                    className="text-xs font-medium underline"
                    style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Tu contraseña"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500 pr-12"
                    style={{
                      borderColor: "#e8e5e0",
                      color: "#242220",
                      fontFamily: "'Red Hat Text', sans-serif",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
                  >
                    {showPassword ? "Ocultar" : "Ver"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 mt-2"
                style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Iniciar sesión
              </button>
            </form>

            {/* Register link */}
            <p
              className="text-center text-sm mt-6"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              ¿No tienes cuenta?{" "}
              <Link
                href="/meals/register"
                className="font-semibold underline"
                style={{ color: "#2e936f" }}
              >
                Créala aquí
              </Link>
            </p>

            {/* Terms */}
            <p
              className="text-center text-xs mt-4"
              style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Al iniciar sesión, aceptas nuestros{" "}
              <a href="#" className="underline">
                Términos y Condiciones
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-6" style={{ borderColor: "#e8e5e0" }}>
        <p
          className="text-center text-sm"
          style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
        >
          Copyright © 2026 ClínicaRenova Nutrición. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
