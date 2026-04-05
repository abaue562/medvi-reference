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

type FAQItem = {
  q: string;
  a: string;
};

const orderingFAQ: FAQItem[] = [
  {
    q: "¿Cómo puedo pausar mis pedidos?",
    a: "Puedes pausar tus pedidos iniciando sesión en tu cuenta y suspendiendo tu programa. Las pausas deben enviarse antes del plazo semanal de pedidos del miércoles a las 7:00 p.m. CST.",
  },
  {
    q: "¿Cuál es el plazo para hacer pedidos?",
    a: "Todos los pedidos nuevos deben recibirse antes del miércoles a las 11:59 p.m. CST para ser incluidos en el envío de esa semana.",
  },
  {
    q: "¿Puedo cambiar mis comidas?",
    a: "Puedes realizar cambios en tu programa cada semana, siempre que los hagas antes del plazo de cambios del miércoles a las 7:00 p.m. CST.",
  },
  {
    q: "¿Cuál es la política de cancelación?",
    a: "Los clientes pueden cancelar su programa en cualquier momento, siempre que sea antes del plazo de cancelación del miércoles a las 7:00 p.m. CST.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos tarjetas Visa, MasterCard, AMEX y Discover al momento del pago.",
  },
  {
    q: "¿Cómo se envían las comidas?",
    a: "Todos los pedidos se renuevan automáticamente. Los pedidos se envían cada semana de forma recurrente. Los envíos salen de lunes a miércoles según tu zona de entrega. Recibirás un número de seguimiento por correo electrónico una vez procesado tu pedido.",
  },
  {
    q: "¿Cómo se empaquetan las comidas?",
    a: "Llegarán en una caja de cartón corrugado sellada y totalmente reciclable. La caja estará revestida con 1.5\" de aislamiento también reciclable. Dentro encontrarás tus comidas empacadas en envases sellados aptos para microondas, junto con suficientes paquetes de hielo para mantenerlas frescas durante el tránsito.",
  },
  {
    q: "¿Cómo caliento las comidas?",
    a: "Las comidas ya están cocinadas y convenientemente empacadas en envases aptos para microondas, solo tienes que calentar y comer. Para calentar en microondas, despega un borde o haz unas marcas en la parte superior y calienta de 60 a 90 segundos. Deja reposar 1 minuto antes de comer. El tiempo de calentamiento puede variar según la potencia del microondas.",
  },
];

const mealFAQ: FAQItem[] = [
  {
    q: "¿Se pueden personalizar las comidas?",
    a: "No ofrecemos personalización de las comidas listadas en nuestros menús. Si eres alérgico a algún ingrediente o no te gusta alguno en particular, asegúrate de revisar la lista de ingredientes de cada comida antes de hacer tu selección.",
  },
];

function AccordionSection({
  title,
  items,
  idPrefix,
}: {
  title: string;
  items: FAQItem[];
  idPrefix: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h3
        className="text-lg font-black tracking-widest uppercase mb-6"
        style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
      >
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={`${idPrefix}-${i}`}
            className="bg-white rounded-xl border overflow-hidden"
            style={{ borderColor: "#e8e5e0" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between px-6 py-5 text-left gap-4"
            >
              <span
                className="font-semibold text-sm leading-snug"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                {item.q}
              </span>
              <span
                className="text-xl flex-shrink-0 leading-none transition-transform mt-0.5"
                style={{
                  color: "#2e936f",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  display: "inline-block",
                }}
              >
                +
              </span>
            </button>
            {open === i && (
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
  );
}

export default function MealsFAQPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <MealsNav />

      {/* Page Header */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black tracking-wide"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            PREGUNTAS FRECUENTES
          </h2>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AccordionSection
            title="PREGUNTAS SOBRE PEDIDOS"
            items={orderingFAQ}
            idPrefix="ordering"
          />
          <AccordionSection
            title="PREGUNTAS SOBRE LAS COMIDAS"
            items={mealFAQ}
            idPrefix="meal"
          />

          {/* CTA */}
          <div
            className="rounded-2xl p-10 text-center mt-8"
            style={{ backgroundColor: "#f0faf6", border: "1px solid #c3e8d8" }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              ¿Tienes más preguntas?
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Nuestro equipo está feliz de ayudarte. Escríbenos y te responderemos pronto.
            </p>
            <Link
              href="/meals/contact"
              className="inline-block px-8 py-3 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Contáctanos
            </Link>
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
