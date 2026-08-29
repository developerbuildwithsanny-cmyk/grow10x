import Link from "next/link";
import { Container, ArrowRightIcon, CheckIcon } from "@/components/ui";
import { curriculumWeeks } from "@/lib/data";

export function LearningPageContent() {
  const learningOutcomes = [
    "Master GenAI, LLMs, RAG & Agentic AI",
    "Build real-world AI applications",
    "Learn prompt engineering, APIs & deployment",
    "Production-ready capstone project",
    "Mock interviews & placement support",
    "Become job-ready in 12 weeks",
  ];

  return (
    <div className="bg-page-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-footer-border bg-gradient-to-b from-navbar to-page-dark pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,230,118,0.07),transparent_50%)]" />
        <Container className="relative flex max-w-4xl flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-green/10 border border-green/30 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.05em] text-green">
            Admissions Open · 2026 Cohort
          </span>
          <h1 className="font-heading text-[44px] font-extrabold leading-tight tracking-[-0.025em] sm:text-[56px] sm:leading-[1.1] lg:text-[68px] lg:leading-[70px]">
            Gen AI & Agentic AI
            <br />
            <span className="bg-gradient-to-r from-accent-green to-green bg-clip-text text-transparent">Program</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-muted">
            Master GenAI, LLMs, RAG & Agentic AI with industry-focused training,
            real-world projects, and placement support.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/requestcallback?source=Learning Page - Hero Enroll"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-8 py-3 font-heading text-base font-bold text-black hover:bg-accent-green transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              href="/requestcallback?source=Learning Page - Download Curriculum"
              className="rounded-lg border border-border-dark bg-card-dark px-8 py-3 font-heading text-base font-bold text-white hover:border-zinc-700 transition-colors"
            >
              Download Curriculum
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border-dark bg-card/10">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "3", label: "MONTHS" },
              { value: "12", label: "WEEKS" },
              { value: "9+", label: "REAL PROJECTS" },
              { value: "1000+", label: "LEARNERS" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded-xl border border-border-dark bg-card-dark/50 py-6 text-center"
              >
                <span className="font-heading text-3xl font-extrabold text-green sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-[10px] font-bold tracking-[0.1em] text-zinc-muted sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What You Will Learn */}
      <section className="py-20 border-b border-border-dark">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              What You Will Learn
            </h2>
            <p className="mt-4 text-zinc-muted text-base max-w-xl mx-auto">
              A comprehensive curriculum designed to take you from a developer to an advanced AI engineer.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-xl border border-border-dark bg-card-dark p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-green/10 text-green">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold text-white leading-tight">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Curriculum Weeks Section */}
      <section id="curriculum" className="py-20 bg-black/40">
        <Container>
          <div className="text-center mb-16">
            <span className="rounded-full bg-green/10 border border-green/30 px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.05em] text-green">
              Step-by-Step Learning
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              12-Week Curriculum
            </h2>
            <p className="mt-4 text-zinc-muted text-base max-w-xl mx-auto">
              Dive deep into each module from foundation to multi-agent production systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {curriculumWeeks.map((module) => (
              <div
                key={module.week}
                className="relative flex flex-col justify-between rounded-2xl border border-border-dark bg-card-dark p-6 hover:border-green/30 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-green">
                      {module.week}
                    </span>
                    <span className="text-2xl">{module.icon}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-green transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-zinc-muted leading-relaxed mb-6">
                    {module.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border-dark">
                    {module.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded bg-black/40 border border-border-dark px-2.5 py-1 font-mono text-[10px] text-zinc-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trainer Bio */}
      <section className="py-20 border-t border-border-dark">
        <Container className="max-w-4xl">
          <div className="rounded-2xl border border-border-dark bg-card-dark p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-green/30 bg-black">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-20 to-green-10 text-3xl font-extrabold text-green">
                GA
              </div>
            </div>
            <div>
              <span className="rounded bg-green/10 border border-green/30 px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.05em] text-green">
                Meet Your Trainer
              </span>
              <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                Ganesh Adabala
              </h3>
              <p className="font-mono text-xs text-muted-green mt-1">
                Ex-Microsoft & Amazon · AI Trainer
              </p>
              <p className="mt-4 text-zinc-muted text-base leading-relaxed">
                Industry expert with experience in building and deploying real-world AI systems 
                across global companies. Learn the strategies, best practices, and problem-solving 
                approaches that top-tier professionals use in production.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-footer-border bg-cta-band px-6 py-20 text-center">
        <Container className="flex flex-col items-center">
          <h2 className="max-w-3xl font-heading text-[28px] font-extrabold leading-10 text-white sm:text-4xl">
            Start Your AI Career Today
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-muted">
            Limited seats available. Enroll now and build real AI products under expert guidance.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/requestcallback?source=Learning Page - Footer Enroll"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-8 py-3 font-heading text-base font-bold text-black hover:bg-accent-green transition-colors"
            >
              Enroll in Program
              <ArrowRightIcon className="text-black" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
