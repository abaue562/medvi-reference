import Image from "next/image";
import Link from "next/link";

function GlpNav() {
  const links = [
    { label: "Our Products", href: "#products" },
    { label: "Real Results", href: "#results" },
    { label: "The Numbers", href: "#the-numbers" },
    { label: "What To Expect", href: "#journey" },
    { label: "24/7 Support", href: "#support" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Refund Policy", href: "#refund" },
    { label: "Our Doctors", href: "#doctors" },
  ];

  return (
    <nav style={{ backgroundColor: "#242220" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/glp">
          <Image
            src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
            alt="MEDVi"
            width={90}
            height={28}
            unoptimized
            className="brightness-0 invert"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link
          href="/glp/intake"
          className="px-5 py-2.5 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90 whitespace-nowrap"
          style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
        >
          GET APPROVED
        </Link>
      </div>
    </nav>
  );
}

const products = [
  {
    popular: true,
    name: "GLP-1 Injections",
    price: "Starting at $179",
    description: "One simple injection per week.",
    cta: "GET STARTED",
  },
  {
    popular: false,
    name: "GLP-1 Tablets",
    price: "Starting at $249",
    description: "One dissolvable tablet per day.",
    cta: "GET STARTED",
  },
  {
    popular: false,
    name: "Wegovy® Pill",
    price: "$99 Membership + Medication Cost",
    description: "One pill per day.",
    cta: "GET STARTED",
  },
  {
    popular: false,
    name: "Wegovy® Injection",
    price: "$99 Membership + Medication Cost",
    description: "Availability is subject to change.",
    cta: "GET STARTED",
  },
  {
    popular: false,
    name: "Zepbound® Injection",
    price: "$99 Membership + Medication Cost",
    description: "Availability is subject to change.",
    cta: "GET STARTED",
  },
];

const journeySteps = [
  "Complete a quick online evaluation to determine if GLP-1 medication is right for you.",
  "Once approved, you'll receive personalized care and a prescription.",
  "Your medication will be shipped directly to your door for maximum convenience.",
  "MEDVi provides 24/7 access to a dedicated team of specialists, ensuring you have the support you need around the clock.",
];

export default function GlpPage() {
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen">
      <GlpNav />

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Finally serious about weight loss?{" "}
            <span
              className="italic"
              style={{ color: "#2e936f" }}
            >
              So are we.
            </span>
          </h1>

          <p
            className="text-xl mb-8"
            style={{ color: "#555", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            Fat loss made easy with personalized care and GLP-1 medication
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#f0faf6", color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
            >
              <span>✦</span> 500,000+ patients
            </div>
          </div>

          <p
            className="text-base font-medium mb-8"
            style={{ color: "#242220", fontFamily: "'Red Hat Text', sans-serif" }}
          >
            No membership or hidden fees! Start for just{" "}
            <span className="font-bold" style={{ color: "#2e936f" }}>$179</span>
          </p>

          <Link
            href="/glp/intake"
            className="inline-block px-10 py-4 rounded-pill text-base font-bold text-white mb-12 transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            AM I QUALIFIED?
          </Link>

          {/* Media logos */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6 text-gray-400"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Proud to be featured and advertised in
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["Forbes", "CNN", "ABC", "NBC", "USA Today"].map((media) => (
                <span
                  key={media}
                  className="text-gray-300 font-bold text-lg tracking-wide"
                  style={{ fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {media}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              Trusted by experts, priced for you.
            </h2>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Find the right GLP-1 medication with the confidence that comes from knowing
              it is doctor-approved and budget-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {products.map((product) => (
              <div
                key={product.name}
                className="relative bg-white rounded-2xl p-6 flex flex-col"
                style={{
                  border: product.popular ? "2px solid #2e936f" : "1px solid #e8e5e0",
                  boxShadow: product.popular ? "0 8px 30px rgba(46,147,111,0.12)" : "none",
                }}
              >
                {product.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-pill text-xs font-bold text-white"
                    style={{ backgroundColor: "#2e936f", fontFamily: "'Onest', sans-serif" }}
                  >
                    ⭐ Popular
                  </div>
                )}

                <h3
                  className="font-bold text-base mb-2 mt-2"
                  style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {product.name}
                </h3>

                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#2e936f", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {product.price}
                </p>

                <p
                  className="text-sm flex-1 mb-6"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {product.description}
                </p>

                <Link
                  href="/glp/intake"
                  className="block text-center py-2.5 rounded-pill text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                >
                  {product.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science / The Numbers */}
      <section id="the-numbers" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                Want to{" "}
                <span style={{ color: "#2e936f" }}>reach your goal</span>
                {" "}weight fast?
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                It's not magic—it's metabolic science. GLP-1 is a naturally occurring
                hormone that regulates appetite and blood sugar, improving your metabolism
                and knocking out cravings.
              </p>

              <div className="flex gap-10">
                <div>
                  <p
                    className="text-4xl font-black mb-1"
                    style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    93%
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    kept the weight off for good
                  </p>
                </div>
                <div>
                  <p
                    className="text-4xl font-black mb-1"
                    style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
                  >
                    500K+
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                  >
                    patients
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: "#f0faf6" }}
            >
              <p
                className="text-lg font-semibold mb-2"
                style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                On average, patients in the MEDVi program lose
              </p>
              <p
                className="text-6xl font-black"
                style={{ color: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
              >
                15–20%
              </p>
              <p
                className="text-base mt-2"
                style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
              >
                of their body weight
              </p>
            </div>
          </div>

          {/* Change section */}
          <div
            className="rounded-3xl p-12 text-center mb-16"
            style={{ backgroundColor: "#242220" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Red Hat Display', sans-serif" }}
            >
              The change we've all been waiting for.
            </h2>
            <p
              className="text-white/60 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Join the over 500,000 MEDVi patients and we'll help you finally get real,
              lasting results.
            </p>
          </div>

          {/* Metabolism section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              We will fix your broken metabolism.
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
            >
              Traditional diets don't work because nearly 70% of weight is genetically
              determined. With medication, you will work with your body rather than
              against it.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works / Journey */}
      <section id="journey" className="py-20 px-6" style={{ backgroundColor: "#f3f0eb" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#2e936f", fontFamily: "'Onest', sans-serif" }}
            >
              YOUR JOURNEY
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
            >
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {journeySteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 flex gap-5"
                style={{ border: "1px solid #e8e5e0" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                  style={{ backgroundColor: "#2e936f", fontFamily: "'Onest', sans-serif" }}
                >
                  {i + 1}
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: "#242220", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Begin your weight loss journey with MEDVi.
          </h2>
          <Link
            href="/glp/intake"
            className="inline-block px-12 py-4 rounded-pill text-base font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#2e936f", fontFamily: "'Red Hat Display', sans-serif" }}
          >
            Get Approved
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#242220" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Image
              src="https://framerusercontent.com/images/1BRDkIzVV7TxG8fJDyUWdUDDE.png"
              alt="MEDVi"
              width={90}
              height={28}
              unoptimized
              className="brightness-0 invert"
            />
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Refund Policy", href: "/cancellation-and-refund-policy" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  style={{ fontFamily: "'Red Hat Text', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p
            className="text-center text-sm text-white/30"
            style={{ fontFamily: "'Red Hat Text', sans-serif" }}
          >
            © 2026 MEDVi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
