import Image from "next/image";

const CDN = "https://framerusercontent.com/images";

const LEGAL_LINKS = [
  ["Terms & Conditions", "/terms-and-conditions"],
  ["Privacy Policy", "/privacy-policy"],
  ["Privacy Practices", "/notice-of-privacy-practices"],
  ["Refund Policy", "/cancellation-and-refund-policy"],
  ["Medical Consent", "/medical-consent"],
  ["For California Residents", "/privacy-statement-california"],
  ["Bill of Rights", "/bill-of-rights"],
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 lg:px-16 pt-16 pb-8 border-t" style={{ borderColor: "#e8e5e0" }}>
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top: logo + contact */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <Image
            src={`${CDN}/1BRDkIzVV7TxG8fJDyUWdUDDE.png`}
            alt="MEDVi"
            width={110}
            height={24}
            className="h-6 w-auto"
            unoptimized
          />
          <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm" style={{ color: "#24222099" }}>
            <span className="flex items-center gap-2">
              <Image src={`${CDN}/mOouvtzIDHOerqUQ0hDOpizA.svg`} alt="" width={16} height={16} className="w-4 h-4 opacity-50" unoptimized />
              help@medvi.org
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
            © 2026 MEDVi. All rights reserved
          </p>
          <a
            href="https://www.legitscript.com/websites/?checker_keywords=medvi.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${CDN}/q2uWrYWiZmMyus58IGeMLSbGI.png`}
              alt="Verify Approval for www.medvi.org"
              width={80}
              height={80}
              className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs leading-relaxed max-w-5xl" style={{ color: "#24222044" }}>
          *The assessment made available on the MEDVi website does not create a doctor-patient
          relationship. OpenLoop Health, a network of US-licensed doctors, has established
          exclusionary criteria to determine if an individual does not qualify for GLP-1s.
          Prescriptions are issued only after an online consultation with an independent licensed
          provider. Compound medications are dispensed by state-licensed pharmacies but are not FDA
          approved. Compounded GLP-1s are produced in FDA-regulated facilities. The decision to use
          compounded drugs is guided by the licensed provider&apos;s medical judgment. Certain
          materials on this website may be generated or enhanced using artificial intelligence
          technologies.
        </p>
      </div>
    </footer>
  );
}
