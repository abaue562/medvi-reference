import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const CDN = "https://framerusercontent.com/images";

const NAV_ITEMS = [
  "Nuestros Productos",
  "Resultados Reales",
  "Los Números",
  "Qué Esperar",
  "Soporte 24/7",
  "Testimonios",
];

interface PricingCard {
  name: string;
  price: string;
  badge?: string;
  description: string;
  note?: string;
}

const PRICING_CARDS: PricingCard[] = [
  {
    name: "Inyecciones GLP-1",
    price: "Desde $179",
    badge: "Popular",
    description: "Una sencilla inyección por semana",
  },
  {
    name: "Tabletas GLP-1",
    price: "Desde $249",
    description: "Una tableta disoluble al día",
  },
  {
    name: "Wegovy® en Pastilla",
    price: "$99 Membresía + Costo del Medicamento",
    description: "Una pastilla al día",
  },
  {
    name: "Wegovy® Inyectable",
    price: "$99 Membresía + Costo del Medicamento",
    description: "Disponibilidad sujeta a cambios",
  },
  {
    name: "Zepbound® Inyectable",
    price: "$99 Membresía + Costo del Medicamento",
    description: "Disponibilidad sujeta a cambios",
  },
];

export default function WeightLoss() {
  return (
    <main
      style={{ fontFamily: "'Red Hat Text', sans-serif", backgroundColor: "#faf9f7", color: "#242220" }}
    >
      {/* Top nav for weight-loss subdomain */}
      <nav
        style={{ backgroundColor: "#172B1F", position: "sticky", top: 0, zIndex: 50 }}
        className="px-6 lg:px-16 py-4 flex items-center justify-between"
      >
        <a href="/">
          <Image
            src={`${CDN}/1BRDkIzVV7TxG8fJDyUWdUDDE.png`}
            alt="ClínicaRenova"
            width={110}
            height={24}
            className="h-6 w-auto"
            unoptimized
          />
        </a>
        <div className="hidden lg:flex gap-8 text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://clinicarenova.org/glp"
          className="text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2e936f" }}
        >
          COMENZAR
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{ backgroundColor: "#172B1F" }}
        className="px-6 lg:px-16 pt-20 pb-24 flex flex-col items-center text-center"
        id="our-products"
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-widest uppercase"
          style={{
            backgroundColor: "rgba(46,147,111,0.2)",
            color: "#6eddb8",
            fontFamily: "'Onest', sans-serif",
            border: "1px solid rgba(46,147,111,0.35)",
          }}
        >
          Más de 500.000 pacientes
        </div>

        <h1
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: "780px",
          }}
          className="mb-5"
        >
          ¿Por fin decidido a perder peso?{" "}
          <span style={{ color: "#6eddb8" }}>Nosotros también.</span>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "1.125rem",
            maxWidth: "520px",
            lineHeight: 1.6,
          }}
          className="mb-10"
        >
          Pérdida de grasa simplificada con atención personalizada y medicación GLP-1
        </p>

        <a
          href="https://clinicarenova.org/glp"
          className="text-white font-bold tracking-widest uppercase px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2e936f" }}
        >
          ¿CALIFICO?
        </a>
      </section>

      {/* Pricing section */}
      <section className="px-6 lg:px-16 py-20" id="real-results">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-4 text-center"
            style={{ fontFamily: "'Onest', sans-serif", color: "#2e936f" }}
          >
            Elige Tu Plan
          </div>
          <h2
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              textAlign: "center",
              color: "#242220",
            }}
            className="mb-12"
          >
            Programas GLP-1 personalizados para cada estilo de vida
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_CARDS.map((card) => (
              <div
                key={card.name}
                style={{
                  border: card.badge ? "2px solid #2e936f" : "1px solid #e8e5e0",
                  borderRadius: "1rem",
                  backgroundColor: card.badge ? "#f0faf6" : "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="p-7 flex flex-col gap-4"
              >
                {card.badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "#2e936f",
                      color: "#ffffff",
                      fontFamily: "'Onest', sans-serif",
                    }}
                  >
                    {card.badge}
                  </span>
                )}

                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'Onest', sans-serif", color: "#2e936f" }}
                  >
                    Medicamento
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      color: "#242220",
                    }}
                  >
                    {card.name}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#242220",
                  }}
                >
                  {card.price}
                </p>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "#24222099" }}>
                  {card.description}
                </p>

                <a
                  href="https://clinicarenova.org/glp"
                  className="mt-2 text-center text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: card.badge ? "#2e936f" : "#242220",
                    color: "#ffffff",
                  }}
                >
                  COMENZAR
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section
        style={{ backgroundColor: "#172B1F" }}
        className="px-6 lg:px-16 py-20"
        id="the-numbers"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <div>
            <p
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "#6eddb8",
                lineHeight: 1,
              }}
            >
              500.000+
            </p>
            <p className="mt-3 text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
              pacientes en la plataforma ClínicaRenova
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "#6eddb8",
                lineHeight: 1,
              }}
            >
              93%
            </p>
            <p className="mt-3 text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
              mantuvo el peso perdido de forma definitiva
            </p>
          </div>
        </div>
      </section>

      {/* Science section */}
      <section className="px-6 lg:px-16 py-20" id="what-to-expect">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Onest', sans-serif", color: "#2e936f" }}
          >
            La Ciencia
          </div>
          <h2
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#242220",
              lineHeight: 1.2,
            }}
            className="mb-6"
          >
            ¿Quieres alcanzar tu peso ideal rápidamente?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#24222099", fontSize: "1.0625rem" }}>
            No es magia&mdash;es ciencia metabólica. El GLP-1 es una hormona natural que
            regula el apetito y el azúcar en sangre, mejora tu metabolismo y elimina los antojos.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section
        style={{ backgroundColor: "#f5f2ed" }}
        className="px-6 lg:px-16 py-20"
        id="24-7-support"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Onest', sans-serif", color: "#2e936f" }}
            >
              Cómo Funciona
            </div>
            <h2
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "#242220",
                lineHeight: 1.2,
              }}
              className="mb-5"
            >
              Vamos a reactivar tu metabolismo.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#24222099" }}>
              Las dietas tradicionales no funcionan porque cerca del 70% del peso está determinado genéticamente.
              Con medicación, trabajarás con tu cuerpo en lugar de contra él.
            </p>
            <a
              href="https://clinicarenova.org/glp"
              className="inline-block mt-8 text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2e936f", color: "#ffffff" }}
            >
              COMENZAR
            </a>
          </div>

          <div className="space-y-5">
            {[
              {
                step: "01",
                title: "Completa tu evaluación",
                body: "Responde unas preguntas médicas para que un proveedor con licencia pueda revisar tu elegibilidad.",
              },
              {
                step: "02",
                title: "Conoce a tu médico",
                body: "Un clínico certificado revisa tu formulario y crea tu plan personalizado.",
              },
              {
                step: "03",
                title: "Recibe tu medicamento",
                body: "Tu medicación GLP-1 se envía directamente a tu domicilio con entrega urgente gratuita.",
              },
              {
                step: "04",
                title: "Monitorea tu progreso",
                body: "Tu equipo médico te hace seguimiento regular para ajustar la dosis y mantenerte en camino.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(46,147,111,0.12)",
                    color: "#2e936f",
                    fontFamily: "'Onest', sans-serif",
                  }}
                >
                  {step}
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, color: "#242220" }}
                    className="text-sm mb-1"
                  >
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials CTA */}
      <section className="px-6 lg:px-16 py-20 text-center" id="testimonials">
        <div className="max-w-2xl mx-auto">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Onest', sans-serif", color: "#2e936f" }}
          >
            Resultados Reales
          </div>
          <h2
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#242220",
              lineHeight: 1.2,
            }}
            className="mb-6"
          >
            Únete a más de 500.000 pacientes que por fin encontraron lo que funciona.
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#24222099" }}>
            Nuestros miembros pierden un promedio de 1&ndash;2 libras por semana. Planes guiados por médicos, entrega urgente gratuita,
            sin costos ocultos y soporte 24/7.
          </p>
          <a
            href="https://clinicarenova.org/glp"
            className="inline-block text-white font-bold tracking-widest uppercase px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2e936f" }}
          >
            ¿CALIFICO?
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
