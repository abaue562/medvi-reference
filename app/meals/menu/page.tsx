"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function MealsNav() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/meals">
          <Image
            src="https://framerusercontent.com/images/snLhnFxV1S915H070FVXdFseVw.png"
            alt="ClínicaRenova Nutrición"
            width={40}
            height={40}
            unoptimized
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "MENÚ SEMANAL", href: "/meals/menu" },
            { label: "PROGRAMAS", href: "/meals/programs" },
            { label: "CÓMO FUNCIONA", href: "/meals/how-it-works" },
            { label: "PREGUNTAS FRECUENTES", href: "/meals/faq" },
            { label: "CONTACTO", href: "/meals/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-gray-700 hover:text-black transition-colors"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/meals/login"
            className="px-4 py-2 rounded-pill text-sm font-semibold border transition-colors hover:bg-gray-50"
            style={{
              borderColor: "#d1d5db",
              color: "#242220",
              fontFamily: "'Red Hat Text', sans-serif",
            }}
          >
            INGRESAR
          </Link>
          <Link
            href="/meals/register"
            className="px-5 py-2 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Suscribirme
          </Link>
        </div>
      </div>
    </nav>
  );
}

type Meal = {
  name: string;
  desc: string;
  cal: number;
  protein: number;
  carbs: number;
  fat: number;
  color: string;
  emoji: string;
};

const weekMenus: Record<number, Meal[]> = {
  110: [
    { name: "Bowl de Pollo BBQ", desc: "Pollo a la parrilla con salsa BBQ ahumada, arroz integral y maíz asado.", cal: 420, protein: 38, carbs: 45, fat: 8, color: "#fcd5b5", emoji: "🍗" },
    { name: "Pasta Bolognese de Res", desc: "Carne molida de res en salsa marinara sobre pasta penne al dente.", cal: 510, protein: 34, carbs: 52, fat: 14, color: "#fce4d6", emoji: "🍝" },
    { name: "Bowl de Res Fajita", desc: "Tiras de res marinada con pimientos, cebolla y arroz con cilantro.", cal: 480, protein: 36, carbs: 48, fat: 12, color: "#f9e4b7", emoji: "🌮" },
    { name: "Revoltillo Tocino Cheeseburger", desc: "Huevos con tocino, carne molida, queso cheddar y papas caseras.", cal: 390, protein: 32, carbs: 18, fat: 22, color: "#fde8d8", emoji: "🍳" },
    { name: "Bowl de Bulgogi de Res", desc: "Res marinada al estilo coreano con arroz, kimchi y cebollín.", cal: 445, protein: 35, carbs: 46, fat: 10, color: "#d6eaf8", emoji: "🥢" },
    { name: "Mac & Cheese de Pollo Buffalo", desc: "Pollo picante estilo buffalo con macarrones cremosos y queso.", cal: 530, protein: 40, carbs: 50, fat: 16, color: "#fce4d6", emoji: "🧀" },
    { name: "Filete Chimichurri", desc: "Filete de res con salsa chimichurri de hierbas frescas y arroz.", cal: 470, protein: 42, carbs: 32, fat: 18, color: "#d5f5e3", emoji: "🥩" },
    { name: "Pechuga de Pollo a la Griega", desc: "Pollo a la griega con pepino, tomate, aceitunas y queso feta.", cal: 380, protein: 40, carbs: 22, fat: 12, color: "#fef9e7", emoji: "🫒" },
  ],
  111: [
    { name: "Pollo Teriyaki con Arroz", desc: "Muslos de pollo glaseados en salsa teriyaki con arroz jazmín y brócoli.", cal: 430, protein: 37, carbs: 50, fat: 9, color: "#d5f5e3", emoji: "🍱" },
    { name: "Carnitas Bajo en Carbohidratos", desc: "Carnitas de cerdo desmenuzado con coliflor, pico de gallo y guacamole.", cal: 360, protein: 38, carbs: 12, fat: 20, color: "#fcd5b5", emoji: "🥑" },
    { name: "Bowl de Camarones al Ajo", desc: "Camarones salteados con ajo y mantequilla sobre arroz con limón.", cal: 350, protein: 30, carbs: 38, fat: 9, color: "#d6eaf8", emoji: "🦐" },
    { name: "Pasta de Pollo Alfredo", desc: "Penne cremoso con pechuga de pollo, salsa alfredo y parmesano.", cal: 540, protein: 38, carbs: 52, fat: 18, color: "#fce4d6", emoji: "🍝" },
    { name: "Estofado de Pollo y Lentejas", desc: "Pollo tierno con lentejas, zanahoria y especias cálidas.", cal: 400, protein: 34, carbs: 42, fat: 8, color: "#f9e4b7", emoji: "🍲" },
    { name: "Pastel de Pollo en Bowl", desc: "Relleno cremoso de pollo con vegetales, cubierto con puré de papa.", cal: 460, protein: 32, carbs: 48, fat: 14, color: "#fde8d8", emoji: "🥧" },
    { name: "Pollo Parmesano Signature", desc: "Pechuga de pollo empanizada con marinara, mozzarella y pasta.", cal: 520, protein: 42, carbs: 48, fat: 16, color: "#fce4d6", emoji: "🍅" },
    { name: "Bowl de Pavo Coreano BBQ", desc: "Pavo molido al estilo coreano con vegetales encurtidos y arroz.", cal: 410, protein: 36, carbs: 44, fat: 10, color: "#d5f5e3", emoji: "🥗" },
  ],
  112: [
    { name: "Wrap de Pollo César", desc: "Pollo a la parrilla con lechuga romana, parmesano y aderezo césar.", cal: 370, protein: 34, carbs: 30, fat: 12, color: "#fef9e7", emoji: "🥙" },
    { name: "Bowl de Pavo con Lima y Cilantro", desc: "Pavo molido con arroz de cilantro y lima, frijoles negros y pico.", cal: 400, protein: 36, carbs: 42, fat: 9, color: "#d5f5e3", emoji: "🌿" },
    { name: "Fish & Chips", desc: "Filete de pescado empanizado crujiente con papas horneadas y ensalada.", cal: 430, protein: 28, carbs: 46, fat: 14, color: "#d6eaf8", emoji: "🐟" },
    { name: "Pollo Cajún con Pasta", desc: "Pollo picante cajún con pasta cremosa y pimientos tricolor.", cal: 490, protein: 38, carbs: 48, fat: 14, color: "#fcd5b5", emoji: "🌶️" },
    { name: "Bowl del Carnicero con Rancho", desc: "Mezcla de proteínas con salsa ranch de hierbas, queso y vegetales.", cal: 450, protein: 42, carbs: 20, fat: 22, color: "#fce4d6", emoji: "🥩" },
    { name: "Pollo con Ajo y Fideos", desc: "Pechuga de pollo con fideos al ajo, mantequilla y perejil.", cal: 420, protein: 36, carbs: 44, fat: 10, color: "#f9e4b7", emoji: "🍜" },
    { name: "Revoltillo de Chorizo y Huevo", desc: "Chorizo de cerdo con huevos, pimientos, cebollas y papas.", cal: 410, protein: 28, carbs: 22, fat: 26, color: "#fde8d8", emoji: "🍳" },
    { name: "Bowl de Miel Mostaza con Pollo", desc: "Pollo a la parrilla glaseado con miel mostaza, brócoli y arroz.", cal: 390, protein: 38, carbs: 38, fat: 8, color: "#fef9e7", emoji: "🍯" },
  ],
  113: [
    { name: "Camarones con Ajo en Bowl", desc: "Camarones jumbo con ajo asado, espinacas y quinoa.", cal: 340, protein: 32, carbs: 30, fat: 8, color: "#d6eaf8", emoji: "🦐" },
    { name: "Albóndigas de Pavo", desc: "Albóndigas jugosas de pavo con marinara sobre espagueti integral.", cal: 460, protein: 36, carbs: 46, fat: 12, color: "#fde8d8", emoji: "🍝" },
    { name: "Pollo a la Parrilla Bajo en Carbos", desc: "Pechuga con brócoli asado, coliflor y salsa de pesto ligero.", cal: 320, protein: 42, carbs: 14, fat: 10, color: "#d5f5e3", emoji: "🥦" },
    { name: "Bowl de Salmón con Arroz", desc: "Filete de salmón con arroz de jazmín, edamame y salsa de soya.", cal: 480, protein: 40, carbs: 44, fat: 16, color: "#d6eaf8", emoji: "🐟" },
    { name: "Bowl Italiano de Salchicha", desc: "Salchicha italiana picante con pimientos, cebolla y arroz.", cal: 500, protein: 34, carbs: 46, fat: 18, color: "#fce4d6", emoji: "🌶️" },
    { name: "Estofado de Lentejas", desc: "Lentejas verdes con tomate, zanahoria y especias mediterráneas.", cal: 360, protein: 22, carbs: 52, fat: 6, color: "#f9e4b7", emoji: "🫘" },
    { name: "Pechuga Rellena de Espinacas", desc: "Pechuga de pollo rellena de espinacas y queso de cabra con quinoa.", cal: 430, protein: 44, carbs: 26, fat: 14, color: "#fef9e7", emoji: "🥬" },
    { name: "Muffins de Arándano y Huevos", desc: "Muffins de arándano sin gluten con huevos revueltos y fruta fresca.", cal: 280, protein: 18, carbs: 32, fat: 8, color: "#fcd5b5", emoji: "🫐" },
  ],
  114: [
    { name: "Postickers de Pollo Signature", desc: "Dumplings de pollo dorados con salsa de soya y jengibre.", cal: 350, protein: 28, carbs: 36, fat: 10, color: "#fce4d6", emoji: "🥟" },
    { name: "Whitefish Cajún Bajo en Carbos", desc: "Filete de pescado blanco al cajún con ensalada de col y aguacate.", cal: 310, protein: 34, carbs: 10, fat: 14, color: "#d6eaf8", emoji: "🐠" },
    { name: "Revoltillo de Pavo Molido", desc: "Pavo molido con pimientos, cebolla morada, espinacas y papas.", cal: 380, protein: 34, carbs: 26, fat: 12, color: "#fde8d8", emoji: "🍳" },
    { name: "Bowl de Pavo con Lima y Crema", desc: "Pavo molido con crema de cilantro y lima, arroz y frijoles.", cal: 420, protein: 36, carbs: 44, fat: 10, color: "#d5f5e3", emoji: "🌿" },
    { name: "Filete de Salmón con Hierbas", desc: "Salmón al horno con costra de hierbas, espárragos y puré de papa.", cal: 460, protein: 42, carbs: 28, fat: 18, color: "#d6eaf8", emoji: "🐟" },
    { name: "Bowl de Casa Bulgogi", desc: "Mezcla de res y pavo al estilo bulgogi con arroz y vegetales.", cal: 440, protein: 38, carbs: 46, fat: 11, color: "#f9e4b7", emoji: "🥢" },
    { name: "Ensalada Cesar de Pavo", desc: "Pavo a la parrilla sobre lechuga romana con crutones y parmesano.", cal: 320, protein: 36, carbs: 18, fat: 12, color: "#fef9e7", emoji: "🥗" },
    { name: "Camarones con Fideos al Ajo", desc: "Camarones salteados con ajo, limón y fideos de arroz crujientes.", cal: 370, protein: 30, carbs: 38, fat: 9, color: "#d5f5e3", emoji: "🍜" },
  ],
};

const weeks = [110, 111, 112, 113, 114];

const mealImages = [
  "https://framerusercontent.com/images/ihBupsd47mUBkztGVAMt31VNRN4.png",
  "https://framerusercontent.com/images/keDlEK59Fa69dFZn1FAHPjD1j8.png",
  "https://framerusercontent.com/images/Qzg7hOnOYm2PR1xuvL1xDf7C4M.png",
  "https://framerusercontent.com/images/TDqwwuuERJIkMwN3ZjsZgCTOFoU.png",
  "https://framerusercontent.com/images/ZlJbchQEeboQ3J4HC0w7Lj2SRvQ.png",
  "https://framerusercontent.com/images/zmJZrAHLgexbSUaBuE8JSFohl8.png",
  "https://framerusercontent.com/images/3YQLMZEk5tHlkmMh4CjpAifaEc.jpg",
  "https://framerusercontent.com/images/u8K8rbgmRaS81RzFu2M7Wl00qI.jpg",
];

function MealCard({ meal, index }: { meal: Meal; index: number }) {
  const imgSrc = mealImages[index % mealImages.length];
  return (
    <div
      className="rounded-2xl overflow-hidden bg-white border"
      style={{ borderColor: "#e8e5e0" }}
    >
      {/* Meal photo */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={imgSrc}
          alt={meal.name}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="font-bold text-sm mb-1 leading-snug"
          style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
        >
          {meal.name}
        </h3>
        <p
          className="text-xs leading-relaxed mb-3"
          style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
        >
          {meal.desc}
        </p>

        {/* Macros */}
        <div
          className="grid grid-cols-4 gap-1 pt-3 border-t"
          style={{ borderColor: "#f3f0eb" }}
        >
          {[
            { label: "Cal", value: meal.cal },
            { label: "Prot", value: `${meal.protein}g` },
            { label: "Carbs", value: `${meal.carbs}g` },
            { label: "Grasa", value: `${meal.fat}g` },
          ].map((macro) => (
            <div key={macro.label} className="text-center">
              <p
                className="text-xs font-bold"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                {macro.value}
              </p>
              <p
                className="text-[10px]"
                style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                {macro.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MealsMenuPage() {
  const [selectedWeek, setSelectedWeek] = useState(114);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      {/* Announcement Bar */}
      <div
        className="text-center py-2.5 px-4 text-sm font-medium text-white"
        style={{ backgroundColor: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
      >
        <span className="tracking-wide">
          PEDIDOS ABIERTOS PARA ENVÍO EL LUNES 13 DE ABRIL
        </span>
      </div>

      <MealsNav />

      {/* Hero Banner */}
      <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        <Image
          src="https://framerusercontent.com/images/naCtfcJucSb08iZrMiFEu70fwNw.jpg"
          alt="Menú semanal"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6" style={{ minHeight: "320px" }}>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/70"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            MENÚ SEMANAL
          </p>
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            SELECCIONES DEL MENÚ SEMANAL
          </h1>
          <p
            className="text-base max-w-xl mx-auto text-white/80"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Más de 75 comidas rotativas curadas por chefs, preparadas frescas cada semana.
            Cada plato está optimizado para tus metas con macros balanceados.
          </p>
        </div>
      </section>

      {/* Week Selector */}
      <section className="px-6 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <p
              className="text-xs font-black tracking-widest uppercase mr-2"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              SEMANA:
            </p>
            {weeks.map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className="px-5 py-2 rounded-pill text-sm font-bold transition-all"
                style={{
                  backgroundColor: selectedWeek === week ? "#2e936f" : "#ffffff",
                  color: selectedWeek === week ? "#ffffff" : "#242220",
                  border: `2px solid ${selectedWeek === week ? "#2e936f" : "#e8e5e0"}`,
                  fontFamily: "'Red Hat Display', sans-serif",
                }}
              >
                Semana {week}
              </button>
            ))}
          </div>

          {/* Meal Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
            {weekMenus[selectedWeek].map((meal, idx) => (
              <MealCard key={meal.name} meal={meal} index={idx} />
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-10 text-center mb-16"
            style={{ backgroundColor: "#f0faf6", border: "1px solid #c3e8d8" }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              ¿Listo para empezar?
            </h3>
            <p
              className="text-sm mb-6 max-w-md mx-auto"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Elige tu plan y empieza a recibir comidas frescas y nutritivas directamente en tu puerta.
            </p>
            <Link
              href="/meals/programs"
              className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Ver Planes y Precios
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-10 px-6" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <Image
              src="https://framerusercontent.com/images/snLhnFxV1S915H070FVXdFseVw.png"
              alt="ClínicaRenova Nutrición"
              width={40}
              height={40}
              unoptimized
            />
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "MENÚ SEMANAL", href: "/meals/menu" },
                { label: "PROGRAMAS", href: "/meals/programs" },
                { label: "CÓMO FUNCIONA", href: "/meals/how-it-works" },
                { label: "PREGUNTAS FRECUENTES", href: "/meals/faq" },
                { label: "CONTACTO", href: "/meals/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold tracking-widest text-gray-500 hover:text-black transition-colors"
                  style={{ fontFamily: "'Onest', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p
            className="text-center text-sm"
            style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Copyright © 2026 ClínicaRenova Nutrición. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
