import Nav from "./Nav";
import Footer from "./Footer";

interface Section {
  heading?: string;
  level?: 1 | 2 | 3;
  body: string[];
}

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  sections: Section[];
}

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <main style={{ fontFamily: "'Red Hat Text', sans-serif", backgroundColor: "#faf9f7", color: "#242220" }}>
      <Nav />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-2 pb-8 border-b" style={{ borderColor: "#e8e5e0" }}>
          <h1
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 700,
              fontSize: "2.25rem",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-sm" style={{ color: "#24222066" }}>
              Last updated: {lastUpdated}
            </p>
          )}
        </div>

        {sections.map((section, i) => (
          <div key={i} className="space-y-3">
            {section.heading && (
              <>
                {section.level === 1 && (
                  <h1 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: "1.75rem" }}>
                    {section.heading}
                  </h1>
                )}
                {section.level === 2 && (
                  <h2 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1.25rem" }}>
                    {section.heading}
                  </h2>
                )}
                {(section.level === 3 || !section.level) && (
                  <h3 style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                    {section.heading}
                  </h3>
                )}
              </>
            )}
            {section.body.map((para, j) => (
              <p key={j} className="text-sm leading-relaxed" style={{ color: "#24222099" }}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
