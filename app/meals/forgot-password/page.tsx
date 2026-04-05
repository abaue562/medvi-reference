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

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <MealsNav />

      <div className="flex items-center justify-center min-h-[calc(100vh-73px)] px-6 py-14">
        <div className="w-full max-w-md">

          {/* Card */}
          <div
            className="bg-white rounded-3xl p-10"
            style={{ border: "1px solid #e8e5e0" }}
          >
            {sent ? (
              /* Success State */
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                  style={{ backgroundColor: "#f0faf6" }}
                >
                  ✉️
                </div>
                <h1
                  className="text-2xl font-black mb-3"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  ¡Revisa tu correo!
                </h1>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  Hemos enviado un enlace para restablecer tu contraseña a{" "}
                  <strong style={{ color: "#242220" }}>{email}</strong>. El enlace expirará
                  en 30 minutos.
                </p>
                <p
                  className="text-xs mb-8"
                  style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  ¿No recibiste el correo? Revisa tu carpeta de spam o{" "}
                  <button
                    onClick={() => setSent(false)}
                    className="underline font-medium"
                    style={{ color: "#2e936f" }}
                  >
                    intenta de nuevo
                  </button>
                  .
                </p>
                <Link
                  href="/meals/login"
                  className="block py-3 rounded-pill text-sm font-bold text-white text-center transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  Volver al inicio de sesión
                </Link>
              </div>
            ) : (
              /* Form State */
              <>
                <div className="text-center mb-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl"
                    style={{ backgroundColor: "#f3f0eb" }}
                  >
                    🔑
                  </div>
                  <h1
                    className="text-2xl font-black mb-2"
                    style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    ¿Olvidaste tu contraseña?
                  </h1>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    Restablece tu contraseña para recuperar el acceso a tu cuenta.
                    Te enviaremos un enlace para crear una nueva contraseña.
                  </p>
                </div>

                <p
                  className="text-xs text-center mb-6 px-4 py-3 rounded-xl"
                  style={{
                    color: "#6b7280",
                    backgroundColor: "#f3f0eb",
                    fontFamily: "'Red Hat Text', sans-serif",
                  }}
                >
                  Para continuar necesitas verificar tu identidad.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
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
                      required
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                      style={{
                        borderColor: "#e8e5e0",
                        color: "#242220",
                        fontFamily: "'Red Hat Text', sans-serif",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    Enviar enlace
                  </button>
                </form>

                <div className="text-center mt-6">
                  <Link
                    href="/meals/login"
                    className="text-sm font-semibold underline"
                    style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    ← Volver al inicio de sesión
                  </Link>
                </div>
              </>
            )}
          </div>

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
              Crear cuenta
            </Link>
          </p>
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
