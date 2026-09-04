import Image from "next/image";
import Link from "next/link";

interface ProgramHeroProps {
  program: {
    slug: string;
    title: string;
    heroImage: string;
    programTitle: string;
  };
}

export function ProgramHero({ program }: ProgramHeroProps) {
  return (
    <section className="bg-white overflow-hidden" style={{ paddingTop: "12px", paddingBottom: "14px" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col lg:flex-row lg:items-start"
          style={{ gap: "18px" }}
        >

          {/* ── LEFT: Text content (~38% width) ── */}
          <div className="w-full lg:w-[44%] lg:shrink-0 flex flex-col pt-6 lg:pt-[110px]">
            {/* Main title */}
            <h1
              className="font-heading font-extrabold text-black"
              style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", lineHeight: 1.06, letterSpacing: "-0.01em" }}
            >
              {program.title}
            </h1>

            {/* Program subtitle in orange — immediately below, no gap */}
            <p
              className="font-heading font-extrabold"
              style={{
                fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
                color: "#f26a21",
                marginTop: "0px",
              }}
            >
              {program.programTitle}
            </p>

            {/* Common description */}
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontSize: "0.75rem", marginTop: "6px", maxWidth: "390px" }}
            >
              Work with real datasets, build ML models, and solve business case studies
              with Python and Scikit-Learn.
            </p>

            {/* Feature badges — single row, small gaps */}
            <div
              className="flex flex-wrap items-center"
                style={{ marginTop: "8px", gap: "6px 8px" }}
            >
              <span className="flex items-center text-gray-600" style={{ gap: "5px", fontSize: "12px", fontWeight: 500 }}>
                <svg className="shrink-0" style={{ width: "14px", height: "14px", color: "#f26a21" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                6 Months Program
              </span>
              <span className="flex items-center text-gray-600" style={{ gap: "5px", fontSize: "12px", fontWeight: 500 }}>
                <svg className="shrink-0" style={{ width: "14px", height: "14px", color: "#f26a21" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                Live Classes + Projects
              </span>
              <span className="flex items-center text-gray-600" style={{ gap: "5px", fontSize: "12px", fontWeight: 500 }}>
                <svg className="shrink-0" style={{ width: "14px", height: "14px", color: "#f26a21" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                AI Tools Integrated
              </span>
              <span className="flex items-center text-gray-600" style={{ gap: "5px", fontSize: "12px", fontWeight: 500 }}>
                <svg className="shrink-0" style={{ width: "14px", height: "14px", color: "#f26a21" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Mentor Support
              </span>
            </div>

            {/* CTA Buttons — side by side, tight gap */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center"
              style={{ marginTop: "10px", gap: "6px" }}
            >
              <Link
                href="/requestcallback?source=Program Hero Apply"
                className="inline-flex items-center text-white font-bold whitespace-nowrap rounded-md transition-colors"
                style={{
                  backgroundColor: "#f26a21",
                  fontSize: "13px",
                  gap: "6px",
                  padding: "9px 16px",
                }}
              >
                Apply Now – Limited Seats
                <svg style={{ width: "14px", height: "14px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href={`/careers/${program.slug}/syllabus`}
                className="inline-flex items-center font-bold whitespace-nowrap rounded-md border transition-colors"
                style={{
                  color: "#374151",
                  borderColor: "#d1d5db",
                  backgroundColor: "#ffffff",
                  fontSize: "13px",
                  gap: "6px",
                  padding: "9px 16px",
                }}
              >
                <svg style={{ width: "14px", height: "14px", color: "#6b7280" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Syllabus
              </Link>
            </div>

            {/* Social proof — tight below buttons */}
            <div
              className="flex items-center"
              style={{ marginTop: "8px", gap: "12px" }}
            >
              {/* Google rating */}
              <div className="flex items-center" style={{ gap: "6px" }}>
                <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", flexShrink: 0 }} fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#000", lineHeight: 1 }}>Google</p>
                  <div className="flex items-center" style={{ gap: "2px", marginTop: "2px" }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} style={{ width: "11px", height: "11px" }} viewBox="0 0 20 20" fill={i <= 4 ? "#FBBF24" : "none"} stroke="#FBBF24">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#000", marginLeft: "2px" }}>4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Student avatars + count */}
              <div className="flex items-center" style={{ gap: "8px" }}>
                <div className="flex" style={{ marginLeft: "0" }}>
                  {["#f97316", "#60a5fa", "#4ade80", "#c084fc"].map((color, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center rounded-full text-white font-bold"
                      style={{
                        width: "26px",
                        height: "26px",
                        backgroundColor: color,
                        border: "2px solid white",
                        marginLeft: i === 0 ? "0" : "-8px",
                        fontSize: "10px",
                        zIndex: 4 - i,
                        position: "relative",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: "10px", fontWeight: 500, color: "#6b7280", lineHeight: 1 }}>Trusted by</p>
                  <p style={{ fontSize: "12px", fontWeight: 800, color: "#000", lineHeight: 1, marginTop: "2px" }}>10,000+</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Hero image (~62% width) ── */}
          <div className="w-full lg:w-[54%] lg:shrink-0">
            <div className="relative w-full overflow-hidden aspect-[4/3] lg:aspect-[1.5/1]" style={{ borderRadius: "16px" }}>
              <Image
                src={program.heroImage}
                alt={`${program.title} ${program.programTitle}`}
                fill
                className="object-contain object-top"
                priority
                sizes="(max-width: 768px) 100vw, 62vw"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
