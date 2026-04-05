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

const contactMethods = [
  {
    icon: "✉️",
    title: "Correo Electrónico",
    detail: "hola@clinicarenova.org",
    desc: "Respuesta en menos de 24 horas",
    action: "mailto:hola@clinicarenova.org",
    cta: "Enviar correo",
  },
  {
    icon: "📞",
    title: "Teléfono",
    detail: "(323) 690-1564",
    desc: "Lunes a viernes, 9 am – 5 pm CST",
    action: "tel:+13236901564",
    cta: "Llamar ahora",
  },
  {
    icon: "❓",
    title: "Preguntas Frecuentes",
    detail: "Encuentra respuestas rápidas",
    desc: "Consulta nuestra sección de FAQ antes de contactarnos",
    action: "/meals/faq",
    cta: "Ver FAQ",
  },
  {
    icon: "💼",
    title: "Colaboraciones",
    detail: "hola@clinicarenova.org",
    desc: "Para oportunidades de negocio y partnerships",
    action: "mailto:hola@clinicarenova.org",
    cta: "Contáctanos",
  },
];

export default function MealsContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: "300px" }}>
        <Image
          src="https://framerusercontent.com/images/naCtfcJucSb08iZrMiFEu70fwNw.jpg"
          alt="Contáctanos"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.60)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6" style={{ minHeight: "300px" }}>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/70"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            SOPORTE AL CLIENTE
          </p>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Ponte en Contacto con Nosotros
          </h1>
          <h3
            className="text-base max-w-xl mx-auto text-white/80"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Nuestro equipo de atención al cliente de ClínicaRenova Nutrición está aquí
            y listo para ayudarte con lo que necesites.
          </h3>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div
              className="bg-white rounded-2xl p-8"
              style={{ border: "1px solid #e8e5e0" }}
            >
              <h2
                className="text-xl font-black mb-6"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Envíanos un mensaje
              </h2>

              {sent ? (
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{ backgroundColor: "#f0faf6", border: "1px solid #c3e8d8" }}
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    Gracias por contactarnos. Te responderemos en menos de 24 horas a{" "}
                    <strong>{form.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                      style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                      style={{
                        borderColor: "#e8e5e0",
                        color: "#242220",
                        fontFamily: "'Red Hat Text', sans-serif",
                      }}
                    />
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

                  {/* Subject */}
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                      style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                    >
                      Asunto
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500"
                      style={{
                        borderColor: "#e8e5e0",
                        color: form.subject ? "#242220" : "#9ca3af",
                        fontFamily: "'Red Hat Text', sans-serif",
                        backgroundColor: "#fff",
                      }}
                    >
                      <option value="" disabled>Selecciona un asunto</option>
                      <option value="pedido">Pregunta sobre mi pedido</option>
                      <option value="cuenta">Problema con mi cuenta</option>
                      <option value="envio">Información de envío</option>
                      <option value="facturacion">Facturación y pagos</option>
                      <option value="menu">Preguntas sobre el menú</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                      style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-green-500 resize-none"
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
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2
                className="text-xl font-black mb-4"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                ATENCIÓN AL CLIENTE
              </h2>
              <p
                className="text-sm mb-6 leading-relaxed"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                Nuestro equipo de ClínicaRenova Nutrición está aquí para ayudarte con cualquier
                cosa que necesites. Encuentra a continuación las distintas formas de ponerte en contacto con nosotros.
              </p>
              <Link
                href="/meals/faq"
                className="inline-block px-6 py-3 rounded-pill text-sm font-bold text-white mb-6 transition-all hover:opacity-90"
                style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Ir a Preguntas Frecuentes
              </Link>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.title}
                    className="bg-white rounded-2xl p-6"
                    style={{ border: "1px solid #e8e5e0" }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{method.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-bold text-sm mb-0.5"
                          style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                        >
                          {method.title}
                        </p>
                        <p
                          className="text-sm font-semibold mb-1"
                          style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}
                        >
                          {method.detail}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
                        >
                          {method.desc}
                        </p>
                      </div>
                      <a
                        href={method.action}
                        className="px-4 py-2 rounded-pill text-xs font-bold text-white flex-shrink-0 transition-all hover:opacity-90"
                        style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                      >
                        {method.cta}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Other support */}
              <div
                className="mt-8 rounded-2xl p-6"
                style={{ backgroundColor: "#f3f0eb", border: "1px solid #e8e5e0" }}
              >
                <h2
                  className="text-sm font-black tracking-widest uppercase mb-3"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  OTRAS OPCIONES DE SOPORTE
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  Antes de contactarnos, te recomendamos revisar nuestras{" "}
                  <Link
                    href="/meals/faq"
                    className="font-semibold underline"
                    style={{ color: "#2e936f" }}
                  >
                    Preguntas Frecuentes
                  </Link>
                  . Es posible que ya tengamos la respuesta que buscas.
                </p>
              </div>
            </div>
          </div>
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
