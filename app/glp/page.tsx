import Image from "next/image";
import Link from "next/link";

function GlpNav() {
  const links = [
    { label: "Nuestros Productos", href: "#products" },
    { label: "Resultados Reales", href: "#results" },
    { label: "Los Números", href: "#the-numbers" },
    { label: "Qué Esperar", href: "#journey" },
    { label: "Soporte 24/7", href: "#support" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Política de Reembolso", href: "#refund" },
    { label: "Nuestros Médicos", href: "#doctors" },
  ];

  return (
    <nav style={{ backgroundColor: "#242220" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/glp">
          <Image
            src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
            alt="ClínicaRenova"
            width={90}
            height={28}
            unoptimized
            className="brightness-0 invert"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link
          href="/glp/intake"
          className="px-5 py-2.5 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90 whitespace-nowrap"
          style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
        >
          VERIFICAR ELEGIBILIDAD
        </Link>
      </div>
    </nav>
  );
}

const products = [
  {
    popular: true,
    name: "Inyecciones GLP-1",
    price: "Desde $179",
    description: "Una sencilla inyección por semana.",
    cta: "COMENZAR",
  },
  {
    popular: false,
    name: "Tabletas GLP-1",
    price: "Desde $249",
    description: "Una tableta disoluble al día.",
    cta: "COMENZAR",
  },
  {
    popular: false,
    name: "Wegovy® en Pastilla",
    price: "$99 Membresía + Costo del Medicamento",
    description: "Una pastilla al día.",
    cta: "COMENZAR",
  },
  {
    popular: false,
    name: "Wegovy® Inyectable",
    price: "$99 Membresía + Costo del Medicamento",
    description: "Disponibilidad sujeta a cambios.",
    cta: "COMENZAR",
  },
  {
    popular: false,
    name: "Zepbound® Inyectable",
    price: "$99 Membresía + Costo del Medicamento",
    description: "Disponibilidad sujeta a cambios.",
    cta: "COMENZAR",
  },
];

const journeySteps = [
  "Completa una evaluación rápida en línea para determinar si el medicamento GLP-1 es adecuado para ti.",
  "Una vez aprobado, recibirás atención personalizada y una receta médica.",
  "Tu medicamento será enviado directamente a tu domicilio para mayor comodidad.",
  "ClínicaRenova te brinda acceso las 24 horas del día, los 7 días de la semana, a un equipo dedicado de especialistas que te acompañarán en cada paso.",
];

export default function GlpPage() {
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen">
      <GlpNav />

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            ¿Por fin decidido a perder peso?{" "}
            <span
              className="italic"
              style={{ color: "#2e936f" }}
            >
              Nosotros también.
            </span>
          </h1>

          <p
            className="text-xl mb-8"
            style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Pérdida de grasa simplificada con atención personalizada y medicación GLP-1
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#f0faf6", color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
            >
              <span>✦</span> Más de 500.000 pacientes
            </div>
          </div>

          <p
            className="text-base font-medium mb-8"
            style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            ¡Sin membresía ni costos ocultos! Comienza desde solo{" "}
            <span className="font-bold" style={{ color: "#2e936f" }}>$179</span>
          </p>

          <Link
            href="/glp/intake"
            className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white mb-12 transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            ¿CALIFICO?
          </Link>

          {/* Media logos */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6 text-gray-400"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Con presencia en los principales medios
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["Forbes", "CNN", "ABC", "NBC", "USA Today"].map((media) => (
                <span
                  key={media}
                  className="text-gray-300 font-bold text-lg tracking-wide"
                  style={{ fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {media}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Respaldado por expertos, accesible para ti.
            </h2>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Encuentra el medicamento GLP-1 adecuado con la tranquilidad de saber que
              está aprobado por médicos y cabe en tu presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {products.map((product) => (
              <div
                key={product.name}
                className="relative bg-white rounded-2xl p-6 flex flex-col"
                style={{
                  border: product.popular ? "2px solid #2e936f" : "1px solid #e8e5e0",
                  boxShadow: product.popular ? "0 8px 30px rgba(46,147,111,0.12)" : "none",
                }}
              >
                {product.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-pill text-xs font-bold text-white"
                    style={{ backgroundColor: "#2e936f", fontFamily: "'Onest', sans-serif" }}
                  >
                    ⭐ Popular
                  </div>
                )}

                <h3
                  className="font-bold text-base mb-2 mt-2"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {product.name}
                </h3>

                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {product.price}
                </p>

                <p
                  className="text-sm flex-1 mb-6"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {product.description}
                </p>

                <Link
                  href="/glp/intake"
                  className="block text-center py-2.5 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {product.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science / The Numbers */}
      <section id="the-numbers" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                ¿Quieres alcanzar tu{" "}
                <span style={{ color: "#2e936f" }}>peso ideal</span>
                {" "}rápidamente?
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                No es magia, es ciencia metabólica. El GLP-1 es una hormona natural que regula
                el apetito y el azúcar en sangre, mejora tu metabolismo y elimina los antojos.
              </p>

              <div className="flex gap-10">
                <div>
                  <p
                    className="text-4xl font-black mb-1"
                    style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    93%
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    mantuvo el peso perdido de forma definitiva
                  </p>
                </div>
                <div>
                  <p
                    className="text-4xl font-black mb-1"
                    style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    500K+
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    pacientes
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: "#f0faf6" }}
            >
              <p
                className="text-lg font-semibold mb-2"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                En promedio, los pacientes del programa ClínicaRenova pierden
              </p>
              <p
                className="text-6xl font-black"
                style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                15–20%
              </p>
              <p
                className="text-base mt-2"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                de su peso corporal
              </p>
            </div>
          </div>

          {/* Change section */}
          <div
            className="rounded-3xl p-12 text-center mb-16"
            style={{ backgroundColor: "#242220" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              El cambio que todos esperábamos.
            </h2>
            <p
              className="text-white/60 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Únete a más de 500.000 pacientes de ClínicaRenova y te ayudaremos a obtener resultados
              reales y duraderos.
            </p>
          </div>

          {/* Metabolism section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Vamos a reactivar tu metabolismo.
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Las dietas tradicionales no funcionan porque cerca del 70% del peso está determinado
              genéticamente. Con medicación, trabajarás con tu cuerpo en lugar de contra él.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works / Journey */}
      <section id="journey" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
            >
              TU PROCESO
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Cómo Funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {journeySteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 flex gap-5"
                style={{ border: "1px solid #e8e5e0" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                  style={{ backgroundColor: "#2e936f", fontFamily: "'Onest', sans-serif" }}
                >
                  {i + 1}
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Comienza tu camino hacia el peso ideal con ClínicaRenova.
          </h2>
          <Link
            href="/glp/intake"
            className="inline-block px-12 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Verificar Elegibilidad
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#242220" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Image
              src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
              alt="ClínicaRenova"
              width={90}
              height={28}
              unoptimized
              className="brightness-0 invert"
            />
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Términos y Condiciones", href: "/terms-and-conditions" },
                { label: "Política de Privacidad", href: "/privacy-policy" },
                { label: "Política de Reembolso", href: "/cancellation-and-refund-policy" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p
            className="text-center text-sm text-white/30"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            © 2026 ClínicaRenova. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
