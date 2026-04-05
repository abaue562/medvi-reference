"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CDN = "https://framerusercontent.com/images";

const NAV_LINKS = [
  { label: "Pérdida de Peso", href: "/#weight-loss" },
  { label: "Nutrición", href: "/meals" },
  { label: "Salud Masculina", href: "/#mens-health" },
  { label: "Salud Femenina", href: "/#womens-health" },
  { label: "Péptidos y Longevidad", href: "/#peptides" },
  { label: "Suplementos", href: "/#supplements" },
  { label: "Restauración Capilar", href: "/#hair" },
  { label: "Cuidado de la Piel", href: "/#skincare" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        style={{ backgroundColor: "#242220", position: "sticky", top: 0, zIndex: 50 }}
        className="px-6 lg:px-16 py-4 flex items-center justify-between"
      >
        {/* Logo */}
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

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/glp"
            className="hidden sm:inline-block text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2e936f" }}
          >
            COMENZAR
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1 focus:outline-none"
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Dropdown */}
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-[57px] right-0 w-72 shadow-2xl"
            style={{ backgroundColor: "#242220" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col py-4">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="px-8 py-3.5 text-sm font-semibold tracking-wide border-b hover:bg-white/5 transition-colors"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    borderColor: "rgba(255,255,255,0.08)",
                    fontFamily: "'Red Hat Text', sans-serif",
                  }}
                >
                  {label}
                </Link>
              ))}
              <div className="px-8 pt-5 pb-2">
                <a
                  href="/glp"
                  onClick={() => setOpen(false)}
                  className="block text-center text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#2e936f" }}
                >
                  COMENZAR
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
