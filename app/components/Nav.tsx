import Image from "next/image";

const CDN = "https://framerusercontent.com/images";

export default function Nav() {
  return (
    <nav
      style={{ backgroundColor: "#242220", position: "sticky", top: 0, zIndex: 50 }}
      className="px-6 lg:px-16 py-4 flex items-center justify-between"
    >
      <a href="/">
        <Image
          src={`${CDN}/1BRDkIzVV7TxG8fJDyUWdUDDE.png`}
          alt="MEDVi"
          width={110}
          height={24}
          className="h-6 w-auto"
          unoptimized
        />
      </a>
      <div className="hidden md:flex gap-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
        {[
          ["Weight Loss", "/#weight-loss"],
          ["Peptides & Longevity", "/#peptides"],
          ["Men's Health", "/#mens-health"],
          ["Women's Health", "/#womens-health"],
        ].map(([label, href]) => (
          <a key={label} href={href} className="hover:text-white transition-colors">
            {label}
          </a>
        ))}
      </div>
      <a
        href="https://glp.medvi.org"
        className="text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#2e936f" }}
      >
        GET STARTED
      </a>
    </nav>
  );
}
