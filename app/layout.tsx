import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClínicaRenova - Atención Médica Personalizada en Línea",
  description:
    "Atención médica personalizada en línea con ClínicaRenova. Soluciones guiadas por médicos para pérdida de peso, cuidado de la piel, caída del cabello, salud masculina y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
