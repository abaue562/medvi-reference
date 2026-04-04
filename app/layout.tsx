import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEDVi - Personalized Telehealth Care",
  description:
    "Personalized telehealth care from MEDVi. Clinician-guided solutions for weight loss, skincare, hair loss, men's health, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
