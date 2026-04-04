import Link from "next/link";

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

const steps = [
  {
    number: "01",
    title: "BYOD (BUILD YOUR OWN DIET)",
    body: "Choose your favorite meals from our innovative, chef-curated menu which changes weekly.",
    align: "left",
    emoji: "🥗",
  },
  {
    number: "02",
    title: "CHEF PREPARED",
    body: "Our chefs craft fresh, macro-friendly meals that are as nutritious as they are delicious, saving you hours in the kitchen. Made from premium ingredients, we deliver quality, flavor, and convenience, making healthy eating easy. With new meals every week, you'll always look forward to your next MEDVi Meals delivery.",
    align: "right",
    emoji: "👨‍🍳",
  },
  {
    number: "03",
    title: "DELICIOUSNESS DELIVERED TO YOUR DOOR",
    body: "Enjoy fresh, never-frozen meals delivered right to your door! With reliable shipping and real-time tracking, you'll know exactly when your chef-prepared meals arrive. With a flexible schedule – we're ready when you are!",
    align: "left",
    emoji: "📦",
  },
  {
    number: "04",
    title: "MEALTIME MADE EFFORTLESS",
    body: "When hunger strikes, MEDVi Meals has you covered—just heat and eat! Our meals are perfectly portioned, microwave-safe and ready in minutes. No cooking, no cleaning and no hassle—just delicious, convenient meals every time.",
    align: "right",
    emoji: "⚡",
  },
];

export default function MealsHowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <MealsNav />

      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        {/* Dark overlay with food suggestion */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(135deg, #2e936f22 0%, #00000000 50%, #2e936f22 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="text-xs tracking-widest uppercase mb-4 font-semibold"
            style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
          >
            THE PROCESS
          </p>
          <h1
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Meal Prep Made Simple: Here's How
          </h1>
          <h3
            className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Tired of endless meal prep? MEDVi Meals delivers chef-crafted goodness
            straight to your door. You're a few clicks away from fresh, never-frozen
            meals designed to fuel your day the easy way.
          </h3>
          <Link
            href="/meals/programs"
            className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical dotted line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #2e936f 0, #2e936f 8px, transparent 8px, transparent 16px)",
              }}
            />

            <div className="space-y-20">
              {steps.map((step, i) => {
                const isLeft = step.align === "left";
                return (
                  <div
                    key={step.number}
                    className={`relative grid md:grid-cols-2 gap-12 items-center`}
                  >
                    {/* Left column */}
                    <div className={isLeft ? "md:text-right order-1" : "order-2"}>
                      {isLeft ? (
                        <div>
                          <p
                            className="text-6xl font-black mb-4"
                            style={{
                              color: "#f0faf6",
                              fontFamily: "'Red Hat Display', sans-serif",
                              WebkitTextStroke: "2px #2e936f",
                            }}
                          >
                            {step.number}
                          </p>
                          <h3
                            className="font-black tracking-wider text-lg mb-4"
                            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                          >
                            {step.body}
                          </p>
                        </div>
                      ) : (
                        <div
                          className="rounded-2xl aspect-square flex items-center justify-center text-8xl"
                          style={{ backgroundColor: "#f3f0eb" }}
                        >
                          {step.emoji}
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 bg-white hidden md:block z-10"
                      style={{ borderColor: "#2e936f" }}
                    />

                    {/* Right column */}
                    <div className={isLeft ? "order-2" : "order-1 md:text-right"}>
                      {isLeft ? (
                        <div
                          className="rounded-2xl aspect-square flex items-center justify-center text-8xl"
                          style={{ backgroundColor: "#f3f0eb" }}
                        >
                          {step.emoji}
                        </div>
                      ) : (
                        <div>
                          <p
                            className="text-6xl font-black mb-4"
                            style={{
                              color: "#f0faf6",
                              fontFamily: "'Red Hat Display', sans-serif",
                              WebkitTextStroke: "2px #2e936f",
                            }}
                          >
                            {step.number}
                          </p>
                          <h3
                            className="font-black tracking-wider text-lg mb-4"
                            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-base leading-relaxed"
                            style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                          >
                            {step.body}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              href="/meals/programs"
              className="inline-block px-12 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Sign Up Now
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
