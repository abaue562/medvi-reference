import Image from "next/image";

const CDN = "https://framerusercontent.com/images";

const LEGAL_LINKS = [
  ["Términos y Condiciones", "/terms-and-conditions"],
  ["Política de Privacidad", "/privacy-policy"],
  ["Prácticas de Privacidad", "/notice-of-privacy-practices"],
  ["Política de Reembolso", "/cancellation-and-refund-policy"],
  ["Consentimiento Médico", "/medical-consent"],
  ["Para Residentes de California", "/privacy-statement-california"],
  ["Carta de Derechos", "/bill-of-rights"],
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 lg:px-16 pt-16 pb-8 border-t" style={{ borderColor: "#e8e5e0" }}>
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top: logo + contact */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <Image
            src={`${CDN}/1BRDkIzVV7TxG8fJDyUWdUDDE.png`}
            alt="ClínicaRenova"
            width={110}
            height={24}
            className="h-6 w-auto"
            unoptimized
          />
          <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm" style={{ color: "#24222099" }}>
            <span className="flex items-center gap-2">
              <Image src={`${CDN}/mOouvtzIDHOerqUQ0hDOpizA.svg`} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
              hola@clinicarenova.org
            </span>
            <span className="flex items-center gap-2">
              <Image src={`${CDN}/E2HTcWzFVYj8RkAxT3IGYNuY.svg`} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
              (323) 690-1564
            </span>
            <span className="flex items-center gap-2">
              <Image src={`${CDN}/Ly2H9feVHgGgo55QqMcUBXLE5uo.svg`} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
              131 Continental Dr. Ste 305, Newark, DE 19713
            </span>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs" style={{ color: "#24222066" }}>
          {LEGAL_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-[#242220] transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Copyright + LegitScript */}
        <div
          className="flex justify-between items-center pt-6 border-t"
          style={{ borderColor: "#e8e5e0" }}
        >
          <p className="text-xs" style={{ color: "#24222044" }}>
            © 2026 ClínicaRenova. Todos los derechos reservados
          </p>
          <a
            href="https://www.legitscript.com/websites/?checker_keywords=clinicarenova.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${CDN}/q2uWrYWiZmMyus58IGeMLSbGI.png`}
              alt="Verificar aprobación para www.clinicarenova.org"
              width={80}
              height={80}
              className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs leading-relaxed max-w-5xl" style={{ color: "#24222044" }}>
          *La evaluación disponible en el sitio web de ClínicaRenova no establece una relación médico-paciente. La Red de Médicos Certificados, una red de médicos con licencia en EE. UU., ha establecido criterios de exclusión para determinar si un individuo no califica para los GLP-1.
          Las recetas se emiten únicamente tras una consulta en línea con un proveedor independiente con licencia. Los medicamentos compuestos son dispensados por farmacias autorizadas por el estado, pero no están aprobados por la FDA. Los GLP-1 compuestos se producen en instalaciones reguladas por la FDA. La decisión de usar medicamentos compuestos está guiada por el criterio médico del proveedor con licencia. Ciertos materiales en este sitio web pueden ser generados o mejorados con tecnologías de inteligencia artificial.
        </p>
      </div>
    </footer>
  );
}
