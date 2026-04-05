import Image from "next/image";
import Link from "next/link";

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

const steps = [
  {
    number: "01",
    title: "ARMA TU PROPIA DIETA",
    body: "Elige tus comidas favoritas de nuestro innovador menú curado por chefs, que cambia cada semana.",
    align: "left",
    emoji: "🥗",
  },
  {
    number: "02",
    title: "PREPARADO POR CHEFS",
    body: "Nuestros chefs elaboran comidas frescas, ricas en macronutrientes y tan nutritivas como deliciosas, ahorrándote horas en la cocina. Elaboradas con ingredientes premium, ofrecemos calidad, sabor y comodidad, haciendo que comer sano sea fácil. Con nuevas comidas cada semana, siempre tendrás algo que esperar con tu próxima entrega de ClínicaRenova Nutrición.",
    align: "right",
    emoji: "👨‍🍳",
  },
  {
    number: "03",
    title: "FRESCURA ENTREGADA EN TU PUERTA",
    body: "¡Disfruta comidas frescas, nunca congeladas, directamente en tu puerta! Con envíos confiables y seguimiento en tiempo real, sabrás exactamente cuándo llegarán tus comidas preparadas por chefs. Con horarios flexibles, ¡estamos listos cuando tú lo estés!",
    align: "left",
    emoji: "📦",
  },
  {
    number: "04",
    title: "COMER BIEN SIN COMPLICACIONES",
    body: "Cuando el hambre llama, ClínicaRenova Nutrición ya tiene todo listo: ¡solo calienta y come! Nuestras comidas están perfectamente porcionadas, son aptas para microondas y están listas en minutos. Sin cocinar, sin limpiar y sin estrés: solo comidas deliciosas y convenientes en todo momento.",
    align: "right",
    emoji: "⚡",
  },
];

export default function MealsHowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <MealsNav />

      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <Image
          src="https://framerusercontent.com/images/naCtfcJucSb08iZrMiFEu70fwNw.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover opacity-40"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "linear-gradient(135deg, #00000099 0%, #00000066 50%, #00000099 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4 font-semibold"
            style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
          >
            EL PROCESO
          </p>
          <h1
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Preparación de Comidas Simplificada: Así Funciona
          </h1>
          <h3
            className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            ¿Cansado de la interminable preparación de comidas? ClínicaRenova Nutrición te entrega
            delicias preparadas por chefs directamente a tu puerta. Estás a unos pocos clics de
            disfrutar comidas frescas, nunca congeladas, diseñadas para darte energía de la manera más fácil.
          </h3>
          <Link
            href="/meals/programs"
            className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Suscribirme
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical dotted line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #2e936f 0, #2e936f 8px, transparent 8px, transparent 16px)",
              }}
            />

            <div className="space-y-20">
              {steps.map((step, i) => {
                const isLeft = step.align === "left";
                return (
                  <div
                    key={step.number}
                    className={`relative grid md:grid-cols-2 gap-12 items-center`}
                  >
                    {/* Left column */}
                    <div className={isLeft ? "md:text-right order-1" : "order-2"}>
                      {isLeft ? (
                        <div>
                          <p
                            className="text-6xl font-black mb-4"
                            style={{
                              color: "#f0faf6",
                              fontFamily: "'Red Hat Display', sans-serif",
                              WebkitTextStroke: "2px #2e936f",
                            }}
                          >
                            {step.number}
                          </p>
                          <h3
                            className="font-black tracking-wider text-lg mb-4"
                            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                          >
                            {step.body}
                          </p>
                        </div>
                      ) : (
                        <div
                          className="rounded-2xl aspect-square flex items-center justify-center text-8xl"
                          style={{ backgroundColor: "#f3f0eb" }}
                        >
                          {step.emoji}
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 bg-white hidden md:block z-10"
                      style={{ borderColor: "#2e936f" }}
                    />

                    {/* Right column */}
                    <div className={isLeft ? "order-2" : "order-1 md:text-right"}>
                      {isLeft ? (
                        <div
                          className="rounded-2xl aspect-square flex items-center justify-center text-8xl"
                          style={{ backgroundColor: "#f3f0eb" }}
                        >
                          {step.emoji}
                        </div>
                      ) : (
                        <div>
                          <p
                            className="text-6xl font-black mb-4"
                            style={{
                              color: "#f0faf6",
                              fontFamily: "'Red Hat Display', sans-serif",
                              WebkitTextStroke: "2px #2e936f",
                            }}
                          >
                            {step.number}
                          </p>
                          <h3
                            className="font-black tracking-wider text-lg mb-4"
                            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                          >
                            {step.body}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              href="/meals/programs"
              className="inline-block px-12 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Suscribirme
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
