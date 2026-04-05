"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function MealsNav() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/meals">
          <Image
            src="https://framerusercontent.com/images/snLhnFxV1S915H070FVXdFseVw.png"
            alt="ClínicaRenova Nutrición"
            width={40}
            height={40}
            unoptimized
          />
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
        </div>
      </div>
    </nav>
  );
}

export default function MealsRegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <MealsNav />

      <div className="flex min-h-[calc(100vh-73px)]">
        {/* Left — Image Panel */}
        <div className="hidden lg:block relative w-[480px] flex-shrink-0">
          <Image
            src="https://framerusercontent.com/images/naCtfcJucSb08iZrMiFEu70fwNw.jpg"
            alt="Comidas saludables"
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)" }} />
          <div className="absolute inset-0 flex flex-col justify-end px-12 pb-14 z-10">
            <Image
              src="https://framerusercontent.com/images/snLhnFxV1S915H070FVXdFseVw.png"
              alt="Meals logo"
              width={56}
              height={56}
              unoptimized
              className="mb-5"
            />
            <h2
              className="text-3xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Comidas saludables listas para comer.
            </h2>
            <p
              className="text-white/70 text-sm leading-relaxed"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Crea tu cuenta de ClínicaRenova Nutrición para finalizar tu pedido y empezar
              a recibir comidas frescas cada semana.
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
                Registrarse
              </h1>
              <p
                className="text-sm"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                ¡Crea tu cuenta de ClínicaRenova Nutrición para finalizar tu pedido!
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = "/meals/place-first-order"; }}>
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                    style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Juan"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                    style={{
                      borderColor: "#e8e5e0",
                      color: "#242220",
                      fontFamily: "'Red Hat Text', sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                    style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="García"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                    style={{
                      borderColor: "#e8e5e0",
                      color: "#242220",
                      fontFamily: "'Red Hat Text', sans-serif",
                    }}
                  />
                </div>
              </div>

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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                  style={{
                    borderColor: "#e8e5e0",
                    color: "#242220",
                    fontFamily: "'Red Hat Text', sans-serif",
                  }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                  style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                >
                  Número de Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                  style={{
                    borderColor: "#e8e5e0",
                    color: "#242220",
                    fontFamily: "'Red Hat Text', sans-serif",
                  }}
                />
              </div>

              {/* Delivery ZIP Code */}
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                  style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                >
                  Código Postal de Entrega
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  placeholder="Código postal"
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
                <label
                  className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                  style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                  style={{
                    borderColor: "#e8e5e0",
                    color: "#242220",
                    fontFamily: "'Red Hat Text', sans-serif",
                  }}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                  style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                >
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repite tu contraseña"
                  className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                  style={{
                    borderColor: "#e8e5e0",
                    color: "#242220",
                    fontFamily: "'Red Hat Text', sans-serif",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 mt-2"
                style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Crear cuenta
              </button>
            </form>

            {/* Login link */}
            <p
              className="text-center text-sm mt-6"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              ¿Ya tienes cuenta?{" "}
              <Link
                href="/meals/login"
                className="font-semibold underline"
                style={{ color: "#2e936f" }}
              >
                Inicia sesión
              </Link>
            </p>

            {/* Terms */}
            <p
              className="text-center text-xs mt-4"
              style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Al crear una cuenta, aceptas nuestros{" "}
              <a href="/terms-and-conditions" className="underline">
                Términos y Condiciones
              </a>{" "}
              y nuestra{" "}
              <a href="/privacy-policy" className="underline">
                Política de Privacidad
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
