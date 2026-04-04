import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf9f7",
        foreground: "#242220",
        dark: "#242220",
        "dark-alt": "#1a1a1a",
        green: {
          DEFAULT: "#2e936f",
          50: "#f0faf6",
        },
        purple: "#956bad",
        gold: "#c6a673",
        salmon: "#eb8771",
        pink: "#d690b3",
        teal: "#8cb0b2",
        brown: "#a58979",
        sage: "#f1f5e9",
      },
      fontFamily: {
        sans: ["Red Hat Text", "sans-serif"],
        display: ["Red Hat Display", "sans-serif"],
        eyebrow: ["Onest", "sans-serif"],
        accent: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
