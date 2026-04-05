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
            alt="Meals logo"
            width={40}
            height={40}
            unoptimized
          />
        </Link>

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
        </div>
      </div>
    </nav>
  );
}

type SelectedMeal = {
  name: string;
  qty: number;
  cal: number;
  color: string;
  emoji: string;
};

const orderMealImages = [
  "https://framerusercontent.com/images/ihBupsd47mUBkztGVAMt31VNRN4.png",
  "https://framerusercontent.com/images/keDlEK59Fa69dFZn1FAHPjD1j8.png",
  "https://framerusercontent.com/images/Qzg7hOnOYm2PR1xuvL1xDf7C4M.png",
  "https://framerusercontent.com/images/TDqwwuuERJIkMwN3ZjsZgCTOFoU.png",
  "https://framerusercontent.com/images/ZlJbchQEeboQ3J4HC0w7Lj2SRvQ.png",
];

const orderMeals: SelectedMeal[] = [
  { name: "Bowl de Pollo BBQ", qty: 2, cal: 420, color: "#fcd5b5", emoji: "🍗" },
  { name: "Pollo Teriyaki con Arroz", qty: 2, cal: 430, color: "#d5f5e3", emoji: "🍱" },
  { name: "Filete Chimichurri", qty: 2, cal: 470, color: "#d5f5e3", emoji: "🥩" },
  { name: "Bowl de Bulgogi de Res", qty: 2, cal: 445, color: "#d6eaf8", emoji: "🥢" },
  { name: "Carnitas Bajo en Carbohidratos", qty: 2, cal: 360, color: "#fcd5b5", emoji: "🥑" },
];

const planDetails = {
  name: "Clásico — 10 comidas/semana",
  price: 119.99,
  shipping: 0,
  discount: 20,
};

export default function MealsOrderPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [meals, setMeals] = useState<SelectedMeal[]>(orderMeals);

  const updateQty = (name: string, delta: number) => {
    setMeals((prev) =>
      prev.map((m) => m.name === name ? { ...m, qty: Math.max(0, m.qty + delta) } : m)
        .filter((m) => m.qty > 0)
    );
  };

  const subtotal = planDetails.price;
  const discountAmount = planDetails.discount;
  const total = subtotal - discountAmount + planDetails.shipping;

  if (confirmed) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
        <MealsNav />
        <div className="flex items-center justify-center py-24 px-6">
          <div
            className="max-w-lg w-full text-center bg-white rounded-3xl p-12"
            style={{ border: "1px solid #e8e5e0" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
              style={{ backgroundColor: "#f0faf6" }}
            >
              ✅
            </div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
            >
              PEDIDO CONFIRMADO
            </p>
            <h1
              className="text-3xl font-black mb-3"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              ¡Tu pedido está en camino!
            </h1>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Hemos recibido tu pedido correctamente. Recibirás una confirmación por correo
              electrónico con el número de seguimiento cuando tu caja sea enviada.
            </p>

            <div
              className="rounded-2xl p-6 mb-8 text-left space-y-3"
              style={{ backgroundColor: "#f3f0eb" }}
            >
              <div className="flex justify-between text-sm">
                <span style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>Plan:</span>
                <span className="font-semibold" style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                  Clásico — 10 comidas/semana
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>Entrega estimada:</span>
                <span className="font-semibold" style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                  Lunes, 13 de abril
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>Total cobrado:</span>
                <span className="font-bold text-base" style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              href="/meals"
              className="block py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <MealsNav />

      {/* Header */}
      <section className="py-12 px-6 text-center" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
          >
            RESUMEN DE PEDIDO
          </p>
          <h1
            className="text-4xl font-black tracking-tight"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Confirma Tu Pedido
          </h1>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Meal List */}
            <div className="lg:col-span-2">
              <div
                className="bg-white rounded-2xl p-6 mb-6"
                style={{ border: "1px solid #e8e5e0" }}
              >
                <h2
                  className="text-sm font-black tracking-widest uppercase mb-5"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  TUS COMIDAS SELECCIONADAS
                </h2>

                <div className="space-y-3">
                  {meals.map((meal, idx) => (
                    <div
                      key={meal.name}
                      className="flex items-center gap-4 p-3 rounded-xl"
                      style={{ backgroundColor: "#faf9f7" }}
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={orderMealImages[idx % orderMealImages.length]}
                          alt={meal.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-semibold text-sm"
                          style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                        >
                          {meal.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
                        >
                          {meal.cal} kcal
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(meal.name, -1)}
                          className="w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold transition-colors hover:bg-gray-50"
                          style={{ borderColor: "#e8e5e0", color: "#242220" }}
                        >
                          −
                        </button>
                        <span
                          className="w-6 text-center text-sm font-bold"
                          style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                        >
                          {meal.qty}
                        </span>
                        <button
                          onClick={() => updateQty(meal.name, 1)}
                          className="w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold transition-colors hover:bg-gray-50"
                          style={{ borderColor: "#e8e5e0", color: "#2e936f" }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {meals.length === 0 && (
                  <div className="text-center py-8">
                    <p
                      className="text-sm"
                      style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
                    >
                      No hay comidas seleccionadas.
                    </p>
                    <Link
                      href="/meals/menu"
                      className="inline-block mt-4 px-6 py-2 rounded-pill text-sm font-bold text-white"
                      style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                    >
                      Explorar menú
                    </Link>
                  </div>
                )}
              </div>

              {/* Delivery info */}
              <div
                className="bg-white rounded-2xl p-6"
                style={{ border: "1px solid #e8e5e0" }}
              >
                <h2
                  className="text-sm font-black tracking-widest uppercase mb-4"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  INFORMACIÓN DE ENTREGA
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                      style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                    >
                      Dirección de entrega
                    </label>
                    <input
                      type="text"
                      placeholder="123 Calle Principal"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none"
                      style={{ borderColor: "#e8e5e0", color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 tracking-wider uppercase"
                      style={{ color: "#242220", fontFamily: "'Onest', sans-serif" }}
                    >
                      Ciudad
                    </label>
                    <input
                      type="text"
                      placeholder="Los Ángeles"
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none"
                      style={{ borderColor: "#e8e5e0", color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="bg-white rounded-2xl p-6 sticky top-24"
                style={{ border: "1px solid #e8e5e0" }}
              >
                <h2
                  className="text-sm font-black tracking-widest uppercase mb-5"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  RESUMEN
                </h2>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                      Plan seleccionado
                    </span>
                    <span className="font-semibold" style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                      Clásico — 10/sem
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                      Subtotal
                    </span>
                    <span style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}>
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                      Descuento primer pedido
                    </span>
                    <span style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>
                      −${discountAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}>
                      Envío
                    </span>
                    <span style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}>
                      Gratis
                    </span>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center py-4 border-t border-b mb-5"
                  style={{ borderColor: "#f3f0eb" }}
                >
                  <span
                    className="font-black text-base"
                    style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    TOTAL
                  </span>
                  <span
                    className="font-black text-2xl"
                    style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => setConfirmed(true)}
                  className="w-full py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  Confirmar pedido
                </button>

                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  Cobro semanal. Cancela cuando quieras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-6 mt-8" style={{ borderColor: "#e8e5e0" }}>
        <p
          className="text-center text-sm"
          style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
        >
          Copyright © 2026 ClínicaRenova Nutrición. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
