import Link from "next/link";
import { Container } from "@/components/ui";
import { founderNote, missionPillars } from "@/lib/data";

export function MissionPageContent() {
  return (
    <div className="bg-page-dark">
      <section className="relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[538px] opacity-50 blur-[32px]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
          }}
        />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-accent-emerald/30 px-4 py-1.5 font-heading text-sm font-semibold uppercase tracking-[0.05em] text-accent-emerald">
            🌱 Why We Exist
          </span>
          <h1 className="max-w-4xl font-heading text-[40px] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[56px] sm:leading-[1.1] lg:text-[72px] lg:leading-[72px]">
            We Exist to Make AI
            <br />
            Building Accessible to
            <br />
            Every Indian.
          </h1>
          <p className="max-w-2xl text-xl font-medium leading-8 text-zinc-muted">
            Not just the elite coders. Not just the startup founders. Everyone.
          </p>
        </Container>
      </section>

      <Container className="pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-border-dark bg-card-dark p-8 md:p-12 lg:mx-auto lg:max-w-5xl">
          <div className="absolute bottom-0 left-0 top-0 w-2 bg-accent-emerald" />
          <blockquote className="mb-8 pl-4 font-heading text-[28px] font-bold italic leading-10 text-white md:text-4xl md:leading-10">
            &ldquo;Our mission is to train 1 million Indians to build and launch
            AI products by 2027 — creating a generation of builders who
            don&apos;t just consume technology, but create it.&rdquo;
          </blockquote>
          <p className="border-l-4 border-transparent pl-8 text-lg leading-[29px] text-zinc-muted">
            The AI revolution shouldn&apos;t be limited to Silicon Valley. By
            equipping ambitious minds across India with the right tools,
            knowledge, and community, we are democratizing innovation and paving
            the way for a self-reliant digital economy.
          </p>
        </div>
      </Container>

      <section className="py-24 pt-8">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="font-heading text-[40px] font-extrabold leading-[48px] text-white md:text-5xl">
              The Three Pillars We Stand On
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-zinc-muted">
              The foundational principles that guide every program, tool, and
              resource we create.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="relative overflow-hidden rounded-2xl border border-border-dark bg-card-dark p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-accent-emerald" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-border-dark text-3xl">
                  {pillar.emoji}
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-base leading-7 text-zinc-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-4xl">
          <h2 className="mb-10 text-center font-heading text-[30px] font-extrabold leading-9 text-white">
            A Note from Our Founder
          </h2>
          <div className="rounded-2xl border border-border-dark bg-card-dark p-8 shadow-[0_0_40px_rgba(34,197,94,0.05)] md:p-12">
            <div className="mb-8 flex items-center gap-6 border-b border-border-dark pb-8">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-accent-emerald/30 bg-accent-emerald/10 font-heading text-xl font-bold text-accent-emerald">
                SR
              </div>
              <div>
                <p className="text-xl font-bold text-white">{founderNote.name}</p>
                <p className="font-heading text-base text-accent-emerald">
                  {founderNote.role}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {founderNote.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-lg leading-[29px] text-zinc-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border-dark py-24">
        <Container className="flex flex-col items-center text-center">
          <h2 className="font-heading text-[40px] font-extrabold leading-[48px] text-white md:text-5xl">
            Ready to Be Part of the Mission?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-muted">
            Join 12,000+ builders who are already shaping India&apos;s AI future.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#programs"
              className="rounded-full bg-accent-emerald px-8 py-4 font-heading text-base font-bold text-page-dark"
            >
              Join the Cohort
            </Link>
            <Link
              href="/#programs"
              className="rounded-full border-2 border-border-dark px-8 py-4 font-heading text-base font-bold text-white"
            >
              Browse Free Resources
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
