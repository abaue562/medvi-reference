import Image from "next/image";

const CDN = "https://framerusercontent.com/images";

const IMG = {
  logo:          `${CDN}/1BRDkIzVV7TxG8fJDyUWdUDDE.png`,
  // Hero thumbnails
  heroThumbWL:   `${CDN}/M9XaNbbDAjo8pUf3JffgMRQ44.png`,
  heroThumbPep:  `${CDN}/eNSyOYR4nWN2eC2kBvfFakC0Jc.png`,
  heroThumbMen:  `${CDN}/6NG7JMcShVQy0ZvhiVszVR6REZg.jpg`,
  heroThumbWom:  `${CDN}/vyhgfyTZdnvKgcOFSsKadXmcI.png`,
  // Weight loss
  wlProduct:     `${CDN}/Qzg7hOnOYm2PR1xuvL1xDf7C4M.png`,
  wlPhone:       `${CDN}/MoQjUaFVDcKosmLtidv94kjQ3Zk.png`,
  wlSupport:     `${CDN}/M9XaNbbDAjo8pUf3JffgMRQ44.png`,
  // Women's health
  womens1:       `${CDN}/TDqwwuuERJIkMwN3ZjsZgCTOFoU.png`,
  womens2:       `${CDN}/vyhgfyTZdnvKgcOFSsKadXmcI.png`,
  // Meals
  meals:         `${CDN}/mz3nMVX8VGPBcqgjBYUldp4jw.png`,
  meals2:        `${CDN}/3b210go7xrqsX3cBCZkQjPg7lc.png`,
  // Supplements (3 containers)
  supp:          `${CDN}/snLhnFxV1S915H070FVXdFseVw.png`,
  suppCard:      `${CDN}/DledV5XhgNZMvvKuNPweP2g.png`,
  // Men's health
  mens1:         `${CDN}/nrGxwSsRFp57MwVq6ihfcnRm8bA.png`,
  mens2:         `${CDN}/9WyYelkv3EfaJFi50PZydNSt2ws.png`,
  // Peptides
  peptides1:     `${CDN}/h93zMm4ey20O082JGj8IZMrl3I.png`,
  peptides2:     `${CDN}/ntqVQOpXgrrjXKAUz9BTmnE2u0I.png`,
  // Hair
  hair1:         `${CDN}/paOnEoR3Gqf2LWRZGYBJ2Uokw.png`,
  hair2:         `${CDN}/vC7EYvFVXWs3QWn7JLdi51Vvd7s.png`,
  // Skincare
  skin1:         `${CDN}/ZlJbchQEeboQ3J4HC0w7Lj2SRvQ.png`,
  skin2:         `${CDN}/L7wxKZ4YKHUKiODGYQrRlQYvTKo.png`,
  // Why ClínicaRenova
  whyMain:       `${CDN}/VlXVSTuHKTz4XzjZzNLWYchfHMQ.png`,
  whyBadge:      `${CDN}/keDlEK59Fa69dFZn1FAHPjD1j8.png`,
  whyCard1:      `${CDN}/h93zMm4ey20O082JGj8IZMrl3I.png`,
  whyCard2:      `${CDN}/ntqVQOpXgrrjXKAUz9BTmnE2u0I.png`,
  whyCard3:      `${CDN}/eNSyOYR4nWN2eC2kBvfFakC0Jc.png`,
  whyCard4:      `${CDN}/Mxnbv5mgfdNQdzlTMMRKrfJZJE.png`,
  // Doctors
  doctorAna:     `${CDN}/6DlpR3ftJ6MctTZwyeuvp0hxAY.jpg`,
  doctorKelly:   `${CDN}/iZZOz7kuB4YLvdGWAg8yO3avoLQ.jpg`,
  // Reviews
  reviewHero:    `${CDN}/A1lwE6WKdaWtTNHV4R3xFZ1ljVo.jpg`,
  // Trust bar icons
  badgeMoney:    `${CDN}/QZxfRAhxllYfpGxMEuk6kFVLhU.svg`,
  badgeShip:     `${CDN}/uBsU5ZsqLrzBSK23aKqkDZSVGIo.svg`,
  badgeDoctor:   `${CDN}/YNzdkrl3B55n6jdaG6fo6LYESZA.svg`,
  badgeFee:      `${CDN}/QG8WHNxXqMMGSvYoe11QogyAaQ.svg`,
  // Footer
  iconEmail:     `${CDN}/mOouvtzIDHOerqUQ0hDOpizA.svg`,
  iconPhone:     `${CDN}/E2HTcWzFVYj8RkAxT3IGYNuY.svg`,
  iconAddr:      `${CDN}/Ly2H9feVHgGgo55QqMcUBXLE5uo.svg`,
  legitScript:   `${CDN}/q2uWrYWiZmMyus58IGeMLSbGI.png`,
};

const TICKER_ITEMS = [
  { label: "PROVEEDORES MÉDICOS CERTIFICADOS" },
  { label: "100% EN LÍNEA" },
  { label: "PRECIOS TRANSPARENTES" },
  { label: "ENVÍO A TU DOMICILIO" },
];

const REVIEWS = [
  { name: "Billy",      photo: `${CDN}/OGDQI8XA7V2CREgeUjtv3qMehk.jpg`, quote: "La Dra. González fue excelente. Escuchó mis necesidades y me explicó los medicamentos y los posibles efectos." },
  { name: "Terika",     photo: `${CDN}/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg`, quote: "La proveedora fue muy conocedora y útil. Respondió todas mis preguntas y me hizo sentir como si nos conociéramos de antes." },
  { name: "Jamie",      photo: `${CDN}/naCtfcJucSb08iZrMiFEu70fwNw.jpg`, quote: "Las preguntas son directas y fáciles de entender. Puedo expresar mis inquietudes y hacer preguntas. Responden muy rápido." },
  { name: "Jacqueline", photo: `${CDN}/u8K8rbgmRaS81RzFu2M7Wl00qI.jpg`, quote: "Mi experiencia es muy positiva. Poco a poco alcanzando mis metas con la ayuda de ClínicaRenova. Han sido muy atentos." },
  { name: "Diana",      photo: `${CDN}/cYEX3QqVD69lMmw1NIEAUOSMB8.jpg`, quote: "El equipo ha sido muy amable y atento. ¡No lo esperaba! Si llamo, recibo respuesta inmediata de una persona real." },
  { name: "Donna",      photo: `${CDN}/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg`, quote: "La médica era muy conocedora y estaba lista para responder todas mis preguntas. Incluso me habló de los seguimientos futuros en mi proceso." },
  { name: "Terri",      photo: `${CDN}/yTHZiTQnD4nN9DjRINV2s2nJf6c.jpg`, quote: "Perder peso sin dietas locas, sin cardio... se sintió como magia. Era adicta al picoteo, pero ya no." },
  { name: "Greg",       photo: `${CDN}/c7UYcEZ9pL7emhQ8SH0e0iV0d8.jpg`, quote: "Estaba a punto de rendirme. Increíble. Pagaría 10 veces más si tuviera que hacerlo. Los días de dieta quedaron atrás. Gracias a ClínicaRenova, un cambio total." },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "'Red Hat Text', sans-serif", backgroundColor: "#faf9f7", color: "#242220" }}>

      {/* ── Navbar ─────────────────────────────────────────────────── */}
      <nav style={{ backgroundColor: "#242220", position: "sticky", top: 0, zIndex: 50 }}
        className="px-6 lg:px-16 py-4 flex items-center justify-between">
        <a href="/">
          <Image src={IMG.logo} alt="ClínicaRenova" width={110} height={24} className="h-6 w-auto" unoptimized />
        </a>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          {[["Pérdida de Peso","#weight-loss"],["Péptidos y Longevidad","#peptides"],["Salud Masculina","#mens-health"],["Salud Femenina","#womens-health"]].map(([l,h])=>(
            <a key={l} href={h} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <a href="/glp"
          className="text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2e936f" }}>
          COMENZAR
        </a>
      </nav>

      {/* ── Hero — deep forest green ────────────────────────────────── */}
      <section style={{ backgroundColor: "#172B1F", position: "relative", overflow: "hidden" }}
        className="px-6 lg:px-16 pt-20 pb-0 text-center">

        {/* Large watermark background text */}
        <div style={{
          position: "absolute", bottom: 120, right: -40,
          fontSize: "22vw", fontWeight: 900, color: "rgba(255,255,255,0.04)",
          fontFamily: "'Red Hat Display', sans-serif", lineHeight: 1, userSelect: "none", pointerEvents: "none",
        }}>CR</div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-wide"
          style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)" }}>
          Únete a{" "}<strong style={{ color: "#fff" }}>más de 500.000</strong>{" "}pacientes de ClínicaRenova
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, lineHeight: 1.05, color: "#ffffff" }}
          className="text-5xl md:text-6xl lg:text-7xl mb-6">
          Salud,<br />
          <em style={{ color: "#6aaa84", fontStyle: "italic" }}>redefinida</em>{" "}para la vida real.
        </h1>

        {/* Subtext */}
        <p className="text-base max-w-md mx-auto mb-12" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
          Ofrecemos atención médica en línea: simple, directa y a cargo de proveedores certificados.
          Sin salas de espera. Sin pasos innecesarios. Solo atención que funciona.
        </p>

        {/* Category thumbnail cards */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden grid grid-cols-5 mb-0"
          style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {[
            { label: "Pérdida de Peso",       img: IMG.heroThumbWL,  href: "#weight-loss" },
            { label: "Nutrición",             img: IMG.meals,        href: "/meals" },
            { label: "Salud Masculina",       img: IMG.heroThumbMen, href: "#mens-health" },
            { label: "Salud Femenina",        img: IMG.heroThumbWom, href: "#womens-health" },
            { label: "Péptidos",              img: IMG.heroThumbPep, href: "#peptides" },
          ].map(({ label, img, href }) => (
            <a key={label} href={href}
              className="flex flex-col items-center gap-3 p-5 hover:bg-white/5 transition-colors border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="w-full h-24 rounded-xl overflow-hidden">
                <Image src={img} alt={label} width={200} height={200} className="w-full h-full object-cover" unoptimized />
              </div>
              <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "rgba(255,255,255,0.8)" }}>
                {label} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Badge strip (ticker) ────────────────────────────────────── */}
      <div className="bg-white border-b overflow-x-auto" style={{ borderColor: "#e8e5e0" }}>
        <div className="flex items-center divide-x divide-[#e8e5e0] min-w-max mx-auto">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map(({ label }, i) => (
            <div key={i} className="flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}>
              <span className="w-4 h-4 rounded-full inline-block" style={{ backgroundColor: "#2e936f", opacity: 0.3 }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Weight Loss ─────────────────────────────────────────────── */}
      <section id="weight-loss" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* Top row: eyebrow + H2 */}
          <div className="space-y-3">
            <Eyebrow>ATENCIÓN GLP-1 GUIADA POR MÉDICOS</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.1 }}>
              Pérdida de peso <em style={{ color: "#2e936f", fontStyle: "normal" }}>simplificada</em><br />
              con atención personalizada
            </h2>
          </div>

          {/* Two-column: image | bullets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden">
              <Image src={IMG.wlProduct} alt="Medicación GLP-1" width={752} height={670} className="w-full h-auto object-cover" unoptimized />
            </div>
            <div className="space-y-5">
              <h4 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                Todo lo que necesitas, incluido:
              </h4>
              <Bullets items={[
                "Receta para GLP-1 rápido y efectivo",
                "Orientación médica personalizada",
                "Soporte 24/7",
                "Garantía de pérdida de peso",
                "Envío rápido y discreto",
              ]} />
            </div>
          </div>

          {/* Subheading + copy + CTA */}
          <div className="max-w-2xl space-y-4">
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.6rem" }}>
              Un enfoque más inteligente para la pérdida de peso, diseñado para ti
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Encuentra el medicamento GLP-1 adecuado con la tranquilidad de saber que está aprobado por médicos y cabe en tu presupuesto.
            </p>
            <CTAButton href="/glp">COMENZAR</CTAButton>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 flex gap-5 items-start" style={{ backgroundColor: "#f7f9f5" }}>
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image src={IMG.wlPhone} alt="" width={295} height={321} className="w-full h-full object-cover" unoptimized />
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                  Todo,{" "}<em style={{ color: "#2e936f", fontStyle: "normal" }}>en un solo lugar</em>
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#24222099" }}>
                  Monitorea tu progreso, comunícate con tu médico y gestiona tu atención desde tu portal de paciente todo en uno.
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-6 flex gap-5 items-start" style={{ backgroundColor: "#f7f9f5" }}>
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image src={IMG.wlSupport} alt="" width={500} height={398} className="w-full h-full object-cover" unoptimized />
              </div>
              <div className="space-y-1">
                <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                  Soporte{" "}<em style={{ color: "#2e936f", fontStyle: "normal" }}>24/7 ilimitado</em>
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#24222099" }}>
                  El apoyo médico continúa durante toda tu atención, siempre que lo necesites.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs" style={{ color: "#24222055" }}>
            Las recetas se emiten únicamente tras una consulta en línea con un proveedor independiente con licencia. Los medicamentos compuestos son dispensados por farmacias autorizadas por el estado, pero no están aprobados por la FDA.
          </p>
        </div>
      </section>

      {/* ── Women's Health ──────────────────────────────────────────── */}
      <section id="womens-health" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos */}
          <div className="flex gap-4 pointer-events-none">
            <Image src={IMG.womens1} alt="" width={619} height={823} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.womens2} alt="" width={800} height={966} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>ATENCIÓN DISEÑADA PARA LA SALUD FEMENINA</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Atención integral para su equilibrio, vitalidad y confianza
            </h2>
            <Bullets items={["Equilibrio hormonal","Control saludable del peso","Fortaleza y crecimiento del cabello","Salud y luminosidad de la piel","Envío rápido y discreto"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Apoyo que evoluciona con tu cuerpo
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Atención guiada por médicos para el peso, las hormonas, el cabello y la piel, con planes de tratamiento personalizados diseñados para acompañarte en cada etapa de tu vida.
            </p>
            <ComingSoon />
          </div>
        </div>
      </section>

      {/* ── Metabolic Nutrition ─────────────────────────────────────── */}
      <section id="nutrition" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <div className="space-y-6">
            <Eyebrow>NUTRICIÓN METABÓLICA</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Alimenta tu transformación,<br />protege tu progreso
            </h2>
            <Bullets items={["Preparación de comidas simplificada","Elaboradas por chefs, perfectamente porcionadas","Menú semanal rotativo","Nutricionalmente balanceadas","Opciones ricas en macros","Sin complicaciones"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Olvídate de planificar y preparar tus comidas
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              ClínicaRenova Nutrición es el complemento ideal para tu tratamiento GLP-1: te entrega nutrición preparada por chefs y alineada médicamente, diseñada para ayudarte a perder grasa mientras preservas la masa muscular.
            </p>
            <CTAButton href="/meals">COMENZAR</CTAButton>
          </div>
          {/* Food photo */}
          <div className="flex gap-4 pointer-events-none">
            <Image src={IMG.meals} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.meals2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Supplements ─────────────────────────────────────────────── */}
      <section id="supplements" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product images */}
          <div>
            <Image src={IMG.supp} alt="Suplementos ClínicaRenova" width={1352} height={658} className="w-full rounded-2xl object-contain" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>SUPLEMENTACIÓN CON PROPÓSITO</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Suplementos con el poder de potenciar tus resultados
            </h2>
            <Bullets items={["Ingredientes limpios y transparentes","Diseñados para apoyar la salud diaria","Dosificación basada en evidencia","Fórmulas elaboradas por médicos","Fuentes de alta calidad"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Apoyo que te ayuda a sentirte mejor con el tiempo
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Fórmulas diseñadas por médicos con ingredientes de calidad y dosificación basada en evidencia para apoyar tu cuerpo día a día.
            </p>
            <ComingSoon />
            {/* Doctor formulated card */}
            <div className="rounded-2xl p-5" style={{ backgroundColor: "#f0f4ec" }}>
              <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                Fórmulas elaboradas por médicos, diseñadas para apoyar cómo tu cuerpo funciona mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Men's Health ────────────────────────────────────────────── */}
      <section id="mens-health" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>ATENCIÓN PARA ENERGÍA, HORMONAS Y RENDIMIENTO</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Salud masculina, diseñada para hombres que esperan más
            </h2>
            <Bullets items={["Rendimiento físico","Equilibrio hormonal","Niveles de energía","Enfoque mental","Envío rápido y discreto"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Atención diseñada para ayudarte a sentirte más fuerte, más enfocado y con mayor control
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Atención guiada por médicos para hormonas, energía y rendimiento, con planes de tratamiento personalizados según tus metas y ajustados conforme responde tu cuerpo.
            </p>
            <CTAButton href="/quad">COMENZAR</CTAButton>
          </div>
          {/* Photos */}
          <div className="flex gap-4 pointer-events-none">
            <Image src={IMG.mens1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.mens2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Peptides ────────────────────────────────────────────────── */}
      <section id="peptides" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos */}
          <div className="flex gap-4 pointer-events-none">
            <Image src={IMG.peptides1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.peptides2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>APOYO AVANZADO CON PÉPTIDOS</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Apoyo dirigido para recuperación, rendimiento y longevidad
            </h2>
            <Bullets items={["Recuperación (BPC-157, TB-500)","Rendimiento (CJC-1295, Ipamorelin)","Ciclos de recuperación (Sermorelin, MK-677)","Fuerza (Tesamorelin)","Y más, todo para apoyar tus metas"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Apoyo que trabaja por debajo de la superficie
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              La terapia con péptidos está diseñada para apoyar cómo tu cuerpo se recupera, rinde y repara con el tiempo, con opciones específicas para recuperación, fuerza, sueño y optimización general.
            </p>
            <ComingSoon />
          </div>
        </div>
      </section>

      {/* ── Hair ────────────────────────────────────────────────────── */}
      <section id="hair" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>RESTAURACIÓN CAPILAR DIRIGIDA</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Tratamiento probado para el cabello fino y la regeneración capilar
            </h2>
            <Bullets items={["Ingredientes de recrecimiento con respaldo clínico","Apoyo específico para el cuero cabelludo y los folículos","Enfoque a largo plazo para mayor densidad capilar","Envío rápido"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Atención avanzada para la regeneración capilar que te ayuda a verte y sentirte mejor
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Revitaliza tus raíces y restaura un cabello de aspecto más lleno con nuestro potente suero de regeneración capilar, formulado para nutrir el cuero cabelludo y promover hebras visiblemente más gruesas y saludables.
            </p>
            <ComingSoon />
          </div>
          {/* Photos */}
          <div className="flex gap-4 pointer-events-none">
            <Image src={IMG.hair1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.hair2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
        </div>
      </section>

      {/* ── Skincare ────────────────────────────────────────────────── */}
      <section id="skincare" className="px-6 lg:px-16 py-20" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos */}
          <div className="flex gap-4 pointer-events-none">
            <Image src={IMG.skin1} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover" unoptimized />
            <Image src={IMG.skin2} alt="" width={604} height={892} className="w-1/2 rounded-3xl object-cover mt-10" unoptimized />
          </div>
          {/* Text */}
          <div className="space-y-6">
            <Eyebrow>ATENCIÓN PERSONALIZADA PARA UNA PIEL MÁS SANA Y LUMINOSA.</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.15 }}>
              Cuidado de la piel que va más allá de la superficie
            </h2>
            <Bullets items={["Atención personalizada guiada por médicos","Opciones de fuerza con receta","Rutinas diarias sencillas","Resultados visibles en la piel","Planes de tratamiento personalizados"]} />
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}>
              Cuidado de la piel diseñado para tratar la causa raíz, no solo cubrirla.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Desde el acné y el envejecimiento hasta la sensibilidad y la textura, cada plan está diseñado para lograr mejoras reales y visibles.
            </p>
            <ComingSoon />
          </div>
        </div>
      </section>

      {/* ── Why ClínicaRenova — LIGHT background ────────────────────────────── */}
      <section className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Headline */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="space-y-3 max-w-xl">
              <Eyebrow>LO MEJOR ES POSIBLE—Y LO CONSTRUIMOS PARA TI.</Eyebrow>
              <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3.2rem)", lineHeight: 1.1 }}>
                Atención médica moderna,{" "}<em style={{ color: "#2e936f", fontStyle: "normal" }}>diseñada para ti</em>
              </h2>
              <p style={{ color: "#24222066", fontSize: "0.9rem" }}>
                Estamos creando una mejor experiencia de salud y los detalles importan.<br />
                <strong style={{ color: "#2e936f" }}>Estamos aquí para esos detalles</strong>
              </p>
            </div>
            <div className="shrink-0">
              <Image src={IMG.whyBadge} alt="" width={120} height={120} className="w-28 h-28 object-contain" unoptimized />
            </div>
          </div>

          {/* H3: care coaching */}
          <div className="max-w-2xl space-y-3">
            <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.4rem" }}>
              Coaching de atención y apoyo nutricional
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
              Nuestro equipo de coaching de atención, liderado por asistentes médicos certificados y dietistas registrados, ayuda a responder preguntas sobre tu medicamento, programa y cambios cotidianos, para que tengas la orientación necesaria para mantenerte en camino y ver resultados.
            </p>
          </div>

          {/* 4 photo cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[IMG.whyCard1, IMG.whyCard2, IMG.whyCard3, IMG.whyCard4].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src={src} alt="" width={600} height={770} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>

          {/* 4 feature text cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Certificado y regulado",        body: "La atención es prestada por clínicos con licencia y dispensada por farmacias reguladas por la FDA." },
              { title: "Atención médica 100% en línea",      body: "Las citas, seguimientos y tratamientos se realizan completamente en línea." },
              { title: "Envío rápido y discreto", body: "Los pedidos llegan rápidamente y en embalaje sin marca para proteger tu privacidad." },
              { title: "Soporte 24/7 ilimitado",        body: "El apoyo médico continúa durante toda tu atención, siempre que lo necesites." },
            ].map((card) => (
              <div key={card.title} className="space-y-2">
                <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#24222099" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctors ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#faf9f7" }} className="px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <Eyebrow centered>NUESTROS INCREÍBLES MÉDICOS</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Atención médica de manos de los mejores expertos en salud
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "#24222099", lineHeight: 1.7 }}>
              Los médicos con quienes nos hemos asociado están aquí para guiarte en cada paso, aportando tanto su experiencia como su genuina dedicación para que te sientas acompañado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Dra. Ana Lisa Carr",  creds: "St. George's University, School of Medicine",      photo: IMG.doctorAna,   w: 604, h: 892 },
              { name: "Dra. Kelly Tenbrink", creds: "American Board of Emergency Medicine",             photo: IMG.doctorKelly, w: 604, h: 892 },
            ].map((doc) => (
              <div key={doc.name} className="rounded-3xl overflow-hidden bg-white shadow-sm relative">
                <Image src={doc.photo} alt={doc.name} width={doc.w} height={doc.h} className="w-full h-80 object-cover object-top" unoptimized />
                {/* Name badge overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-md">
                  <p style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "0.875rem" }}>{doc.name}</p>
                  <p style={{ fontSize: "0.7rem", color: "#24222066" }}>{doc.creds}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <Eyebrow centered>QUIENES ELIGIERON CLINICARENOVA</Eyebrow>
            <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
              Hay una razón por la que la gente{" "}
              <em style={{ color: "#2e936f" }}>nos recomienda.</em>
            </h2>
            <p className="text-sm" style={{ color: "#24222099" }}>
              Únete a las miles de personas que han confiado en ClínicaRenova para cambiar su vida,<br />
              logrando una pérdida de peso significativa y duradera.
            </p>
          </div>

          {/* Horizontal scrolling reviewer strip */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl p-5 space-y-4 shrink-0 w-72 snap-start" style={{ backgroundColor: "#faf9f7" }}>
                <div className="flex items-center gap-3">
                  <Image src={r.photo} alt={r.name} width={48} height={48} className="w-11 h-11 rounded-full object-cover" unoptimized />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>{r.name}</p>
                    <span style={{ color: "#c6a673", fontSize: "0.75rem" }}>★★★★★</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#24222099" }}>&ldquo;{r.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar — DARK background ─────────────────────────────── */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="px-6 lg:px-16 py-10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
          {[
            { img: IMG.badgeMoney,  label: "Garantía ClínicaRenova" },
            { img: IMG.badgeShip,   label: "Entrega gratuita y expedita" },
            { img: IMG.badgeDoctor, label: "Planes y coaching dirigidos por médicos" },
            { img: IMG.badgeFee,    label: "Sin costos ocultos" },
          ].map(({ img, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                <Image src={img} alt="" width={20} height={20} className="w-5 h-5 invert" unoptimized />
              </div>
              <span className="text-sm font-semibold text-white">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer — WHITE background ────────────────────────────────── */}
      <footer className="bg-white px-6 lg:px-16 pt-16 pb-8 border-t" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Top row: logo + contact */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <Image src={IMG.logo} alt="ClínicaRenova" width={110} height={24} className="h-6 w-auto" unoptimized />
            <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm" style={{ color: "#24222099" }}>
              <span className="flex items-center gap-2">
                <Image src={IMG.iconEmail} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
                hola@clinicarenova.org
              </span>
              <span className="flex items-center gap-2">
                <Image src={IMG.iconPhone} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
                (323) 690-1564
              </span>
              <span className="flex items-center gap-2">
                <Image src={IMG.iconAddr} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
                131 Continental Dr. Ste 305, Newark, DE 19713
              </span>
            </div>
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs" style={{ color: "#24222066" }}>
            {[
              ["Términos y Condiciones", "/terms-and-conditions"],
              ["Política de Privacidad", "/privacy-policy"],
              ["Prácticas de Privacidad", "/notice-of-privacy-practices"],
              ["Política de Reembolso", "/cancellation-and-refund-policy"],
              ["Consentimiento Médico", "/medical-consent"],
              ["Para Residentes de California", "/privacy-statement-california"],
              ["Carta de Derechos", "/bill-of-rights"],
            ].map(([l, href])=>(
              <a key={l} href={href}
                className="hover:text-current transition-colors">{l}</a>
            ))}
          </div>

          {/* Bottom: copyright + legitscript */}
          <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: "#e8e5e0" }}>
            <p className="text-xs" style={{ color: "#24222044" }}>© 2026 ClínicaRenova. Todos los derechos reservados</p>
            <a href="https://www.legitscript.com/websites/?checker_keywords=clinicarenova.org" target="_blank" rel="noopener noreferrer">
              <Image src={IMG.legitScript} alt="Verificar aprobación para www.clinicarenova.org" width={80} height={80} className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" unoptimized />
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs leading-relaxed max-w-5xl" style={{ color: "#24222044" }}>
            *La evaluación disponible en el sitio web de ClínicaRenova no establece una relación médico-paciente. La Red de Médicos Certificados, una red de médicos con licencia en EE. UU., ha establecido criterios de exclusión para determinar si un individuo no califica para los GLP-1. Las recetas se emiten únicamente tras una consulta en línea con un proveedor independiente con licencia. Los medicamentos compuestos son dispensados por farmacias autorizadas por el estado, pero no están aprobados por la FDA. Los GLP-1 compuestos se producen en instalaciones reguladas por la FDA. La decisión de usar medicamentos compuestos está guiada por el criterio médico del proveedor con licencia.
          </p>
        </div>
      </footer>

    </main>
  );
}

// ── Shared sub-components ───────────────────────────────────────────────────

function Eyebrow({ children, centered }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <p className={centered ? "text-center" : ""}
      style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500, fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#2e936f" }}>
      {children}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#242220" }}>
          <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
            style={{ backgroundColor: "rgba(46,147,111,0.12)", color: "#2e936f" }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href}
      className="inline-block text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
      style={{ backgroundColor: "#2e936f" }}>
      {children}
    </a>
  );
}

function ComingSoon() {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full"
      style={{ backgroundColor: "#2e936f", color: "#ffffff" }}>
      PRÓXIMAMENTE
    </span>
  );
}
