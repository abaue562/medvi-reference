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

type FAQItem = {
  q: string;
  a: string;
};

const orderingFAQ: FAQItem[] = [
  {
    q: "How do I pause my orders?",
    a: "You may pause your orders by logging into your account and suspending your program. Pauses must be submitted before the weekly order deadline of Wednesday at 7:00pm CST.",
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
  {
    q: "How are meals shipped?",
    a: "All orders will continue with our Auto Renewal Policy. Orders ship every week on a recurring basis. Shipments go out Monday through Wednesday depending on your delivery zone. You will receive a tracking number via email once your order has been processed.",
  },
  {
    q: "How are meals packaged?",
    a: "They will arrive in a sealed corrugated and fully recyclable box. The box will be lined with 1.5\" insulation that is also recyclable. Inside the box you will find your meals packaged in sealed microwave-safe containers, along with enough ice packs to keep your meals fresh during transit.",
  },
  {
    q: "How do I heat the meals?",
    a: "Meals are already cooked and conveniently packaged in microwave-safe containers, all you need to do is heat and eat. To heat meals in a microwave, peel back one edge or make a few puncture marks across the top and heat for 60 – 90 seconds. Let stand for 1 minute before eating. Heating times may vary depending on microwave wattage.",
  },
];

const mealFAQ: FAQItem[] = [
  {
    q: "Can meals be customized?",
    a: "We do not provide any customization to the meals listed on our menus. If you are allergic to something and/or do not like a specific ingredient, please be sure to look through the ingredient list for each meal prior to making your selections.",
  },
];

function AccordionSection({
  title,
  items,
  idPrefix,
}: {
  title: string;
  items: FAQItem[];
  idPrefix: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h3
        className="text-lg font-black tracking-widest uppercase mb-6"
        style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
      >
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={`${idPrefix}-${i}`}
            className="bg-white rounded-xl border overflow-hidden"
            style={{ borderColor: "#e8e5e0" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between px-6 py-5 text-left gap-4"
            >
              <span
                className="font-semibold text-sm leading-snug"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                {item.q}
              </span>
              <span
                className="text-xl flex-shrink-0 leading-none transition-transform mt-0.5"
                style={{
                  color: "#2e936f",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  display: "inline-block",
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
    </div>
  );
}

export default function MealsFAQPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <MealsNav />

      {/* Page Header */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black tracking-wide"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AccordionSection
            title="ORDERING FAQ"
            items={orderingFAQ}
            idPrefix="ordering"
          />
          <AccordionSection
            title="MEAL FAQ"
            items={mealFAQ}
            idPrefix="meal"
          />

          {/* CTA */}
          <div
            className="rounded-2xl p-10 text-center mt-8"
            style={{ backgroundColor: "#f0faf6", border: "1px solid #c3e8d8" }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Still have questions?
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Our team is happy to help. Reach out and we'll get back to you quickly.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
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
