"use client";

import Link from "next/link";
import { useState } from "react";

function MealsNav() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/meals">
          <span
            className="text-3xl font-black text-black"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            M
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "WEEKLY MENU", href: "/meals#menu" },
            { label: "PROGRAMS OFFERED", href: "/meals/programs" },
            { label: "HOW IT WORKS", href: "/meals/how-it-works" },
            { label: "FAQ", href: "/meals/faq" },
            { label: "CONTACT", href: "#contact" },
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
          <button
            className="px-4 py-2 rounded-pill text-sm font-semibold border transition-colors hover:bg-gray-50"
            style={{
              borderColor: "#d1d5db",
              color: "#242220",
              fontFamily: "'Red Hat Text', sans-serif",
            }}
          >
            LOGIN
          </button>
          <Link
            href="/meals/programs"
            className="px-5 py-2 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

const planOptions = [6, 10, 14, 18];

const priceMap: Record<number, string> = {
  6: "$79.99/week",
  10: "$119.99/week",
  14: "$154.99/week",
  18: "$189.99/week",
};

const meals = [
  { name: "Asian Pork Bowl", color: "#f9e4b7" },
  { name: "BBQ Brisket", color: "#fcd5b5" },
  { name: "Chicken Teriyaki", color: "#d5f5e3" },
  { name: "Turkey Meatballs", color: "#fde8d8" },
  { name: "Salmon Filet", color: "#d6eaf8" },
  { name: "Veggie Stir Fry", color: "#d5f5e3" },
  { name: "Greek Chicken", color: "#fce4d6" },
  { name: "Beef Tacos", color: "#fef9e7" },
];

const faqItems = [
  {
    q: "How do I pause my orders?",
    a: "You may pause your orders by logging into your account and suspending your program. Pauses must be submitted before the weekly order deadline.",
  },
  {
    q: "What is the order deadline?",
    a: "All new orders must be received by Wednesday at 11:59pm CST to be included in that week's shipment.",
  },
  {
    q: "Can I change my meals?",
    a: "You are more than welcome to make any changes to your program each and every week as long as you make those changes prior to the Order Change Deadline of Wednesday by 7:00pm CST.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Clients are more than welcome to cancel their program anytime, as long as it is prior to the Order Cancellation Deadline of Wednesday by 7:00pm CST.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, MasterCard, AMEX, and Discover cards at checkout.",
  },
];

function FAQAccordion({ items }: { items: typeof faqItems }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border overflow-hidden"
          style={{ borderColor: "#e8e5e0" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span
              className="font-semibold text-sm"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              {item.q}
            </span>
            <span
              className="text-xl ml-4 flex-shrink-0 transition-transform"
              style={{
                color: "#2e936f",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div
              className="px-6 pb-5 text-sm leading-relaxed border-t"
              style={{
                color: "#6b7280",
                borderColor: "#f3f0eb",
                fontFamily: "'Red Hat Text', sans-serif",
              }}
            >
              <p className="pt-4">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function MealsProgramsPage() {
  const [selectedPlan, setSelectedPlan] = useState(10);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <MealsNav />

      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Create Your First Box With MEDVi Meals
          </h1>
          <h3
            className="text-base leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Discover 75+ weekly rotating meals filled with lean, delicious, and
            macro-friendly options. Modify, pause, or cancel anything— completely
            hassle-free.
          </h3>
        </div>
      </section>

      {/* Builder */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          {/* Step 1 */}
          <div
            className="bg-white rounded-2xl p-8 mb-6"
            style={{ border: "1px solid #e8e5e0" }}
          >
            <h3
              className="text-xs font-black tracking-widest uppercase mb-5"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              1. SELECT YOUR PROGRAM
            </h3>
            <div
              className="p-5 rounded-xl border-2 cursor-pointer"
              style={{ borderColor: "#2e936f", backgroundColor: "#f0faf6" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: "#2e936f" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#2e936f" }} />
                </div>
                <div>
                  <p
                    className="font-bold text-base"
                    style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    Classic
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    Traditional meal prep options with standard portion sizes!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="bg-white rounded-2xl p-8 mb-6"
            style={{ border: "1px solid #e8e5e0" }}
          >
            <h3
              className="text-xs font-black tracking-widest uppercase mb-2"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              2. SELECT YOUR PLAN
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Meals per week:
            </p>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {planOptions.map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className="py-4 rounded-xl text-lg font-bold transition-all"
                  style={{
                    backgroundColor: selectedPlan === plan ? "#2e936f" : "#faf9f7",
                    color: selectedPlan === plan ? "#fff" : "#242220",
                    border: `2px solid ${selectedPlan === plan ? "#2e936f" : "#e8e5e0"}`,
                    fontFamily: "'Red Hat Display', sans-serif",
                  }}
                >
                  {plan}
                </button>
              ))}
            </div>

            {/* Price display */}
            <div
              className="p-5 rounded-xl text-center"
              style={{ backgroundColor: "#f0faf6", border: "1px solid #c3e8d8" }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-1"
                style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
              >
                {selectedPlan} MEALS / WEEK
              </p>
              <p
                className="text-3xl font-black"
                style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                {priceMap[selectedPlan]}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                Billed weekly · Free shipping · Cancel anytime
              </p>
            </div>
          </div>

          <button
            className="w-full py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-xl font-black tracking-widest text-center mb-8"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            EXPLORE THE MENU
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {meals.map((meal) => (
              <div
                key={meal.name}
                className="rounded-2xl overflow-hidden aspect-square flex items-end p-4"
                style={{ backgroundColor: meal.color }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {meal.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-xl font-black tracking-widest text-center mb-10"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            COMMON QUESTIONS
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-10 px-6" style={{ borderColor: "#e8e5e0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <span
              className="text-3xl font-black text-black"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              M
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "WEEKLY MENU", href: "/meals#menu" },
                { label: "PROGRAMS", href: "/meals/programs" },
                { label: "HOW IT WORKS", href: "/meals/how-it-works" },
                { label: "FAQ", href: "/meals/faq" },
                { label: "CONTACT", href: "#contact" },
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
            Copyright © 2026 MEDVi Meals. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
