"use client";

import Link from "next/link";
import { useState } from "react";

function MealsNav() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/meals">
          <span
            className="text-3xl font-black text-black"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            M
          </span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "WEEKLY MENU", href: "#menu" },
            { label: "PROGRAMS OFFERED", href: "/meals/programs" },
            { label: "HOW IT WORKS", href: "#how-it-works" },
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

        {/* Right buttons */}
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

const planOptions = [6, 10, 14, 18];

export default function MealsPage() {
  const [selectedPlan, setSelectedPlan] = useState(10);

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div
        className="text-center py-2.5 px-4 text-sm font-medium text-white"
        style={{ backgroundColor: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
      >
        <span className="tracking-wide">
          NOW ORDERING FOR SHIPMENT ON MONDAY, APRIL 13
        </span>
        <span className="ml-4 text-white/50">|</span>
        <span className="ml-4 text-white/70 text-xs">
          [Countdown Timer]
        </span>
      </div>

      <MealsNav />

      {/* Hero */}
      <section className="py-16 px-6" style={{ backgroundColor: "#faf9f7" }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Food collage placeholder */}
          <div className="grid grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
            {[
              { emoji: "🍜", bg: "#fff3cd" },
              { emoji: "🥩", bg: "#fce4d6" },
              { emoji: "🍣", bg: "#d6eaf8" },
              { emoji: "🥗", bg: "#d5f5e3" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl flex items-center justify-center text-4xl"
                style={{ backgroundColor: item.bg }}
              >
                {item.emoji}
              </div>
            ))}
          </div>

          <h1
            className="text-7xl md:text-8xl font-black tracking-tight mb-4"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            MEDVi
          </h1>
          <p
            className="text-2xl font-semibold mb-2"
            style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            GLP-1 Meals. More Protein. Less Stress.
          </p>
          <p
            className="text-base font-medium mb-6"
            style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Fresh Meals Delivered Nationwide Every Week!
          </p>
          <p
            className="text-base max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Skip the hassle of meal planning and prepping— MEDVi Meals has you covered!
            We craft each meal to be lean, clean, and perfectly balanced, delivering
            top-tier nutrition and unbeatable flavor with every bite.
          </p>
          <Link
            href="/meals/programs"
            className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-2xl md:text-3xl font-black tracking-widest"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              FROM OUR KITCHEN TO YOUR DOOR: HOW MEDVI MEALS WORKS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🍽️",
                title: "SELECT YOUR READY-TO-EAT MEALS",
                body: "Choose from over 75 chef-crafted, ready-to-eat meals curated for you every week.",
              },
              {
                icon: "👨‍🍳",
                title: "CHEF-PREPARED, DELIVERED FRESH TO YOU",
                body: "We prep, you relax, and it's ready for pickup right at your doorstep.",
              },
              {
                icon: "⚡",
                title: "HEAT, SERVE & ENJOY",
                body: "No fuss, no mess - simply heat up your meal and dig in within minutes.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-8 text-center"
                style={{ border: "1px solid #e8e5e0" }}
              >
                <div className="text-4xl mb-5">{step.icon}</div>
                <h3
                  className="font-black tracking-wider text-sm mb-4"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-2xl md:text-3xl font-black tracking-wider mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              EXPLORE A MENU OF FRESH, LEAN, AND GOAL-FOCUSED MEALS
            </h2>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              With over 300 chef-curated meals packed with next-level flavor...
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
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

          <p
            className="text-center text-sm"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Discover 75+ weekly rotating meals...
          </p>
        </div>
      </section>

      {/* Order Box Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-black tracking-wide text-center mb-10"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            CREATE YOUR FIRST BOX WITH MEDVI MEALS
          </h2>

          {/* Program selection */}
          <div className="mb-10">
            <h3
              className="text-sm font-black tracking-widest uppercase mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              1. SELECT YOUR PROGRAM
            </h3>
            <div
              className="p-5 rounded-2xl border-2 bg-white cursor-pointer"
              style={{ borderColor: "#2e936f" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#2e936f" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#2e936f" }} />
                </div>
                <div>
                  <p
                    className="font-bold"
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

          {/* Plan selection */}
          <div className="mb-10">
            <h2
              className="text-sm font-black tracking-widest uppercase mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              2. SELECT YOUR PLAN
            </h2>
            <p
              className="text-sm mb-4"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Meals per week:
            </p>
            <div className="grid grid-cols-4 gap-3">
              {planOptions.map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className="py-4 rounded-xl text-lg font-bold transition-all"
                  style={{
                    backgroundColor: selectedPlan === plan ? "#2e936f" : "#fff",
                    color: selectedPlan === plan ? "#fff" : "#242220",
                    border: `2px solid ${selectedPlan === plan ? "#2e936f" : "#e8e5e0"}`,
                    fontFamily: "'Red Hat Display', sans-serif",
                  }}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/meals/programs"
            className="block text-center py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p
            className="text-base mb-6 leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Subscribe to our newsletter and be the first to know about offers, new
            products, and expert advice for a healthier lifestyle.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-pill border-2 text-sm outline-none"
              style={{
                borderColor: "#e8e5e0",
                color: "#242220",
                fontFamily: "'Red Hat Text', sans-serif",
              }}
            />
            <button
              className="px-6 py-3 rounded-pill text-sm font-bold text-white whitespace-nowrap"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Subscribe
            </button>
          </div>
          <p
            className="text-xs mt-3"
            style={{ color: "#9ca3af", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            You can unsubscribe at any time.
          </p>
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
                { label: "WEEKLY MENU", href: "#menu" },
                { label: "PROGRAMS", href: "/meals/programs" },
                { label: "HOW IT WORKS", href: "#how-it-works" },
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
