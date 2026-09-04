import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  Coffee,
  FolderKanban,
  Infinity as InfinityIcon,
  Layers,
  Signal,
  type LucideIcon,
} from "lucide-react";

type Program = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

const programs: Program[] = [
  {
    title: "Data Science",
    description:
      "Work with real datasets, build ML models, and solve business case studies with Python and Scikit-Learn.",
    icon: BarChart3,
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Python Full Stack with AI Integration",
    description:
      "Develop web apps, backend systems, and automation workflows with Python and AI tools.",
    icon: Code2,
    tags: ["Python", "Django", "FastAPI", "Flask", "React"],
  },
  {
    title: "Java Full Stack with AI Integration",
    description:
      "Build enterprise Java apps with Spring Boot, React, and AI-powered features integrated into real-world products.",
    icon: Coffee,
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Java"],
  },
  {
    title: "MERN Stack with AI Integration",
    description:
      "Become a future-ready developer - build full stack apps with AI tools, real projects, and placement support.",
    icon: Layers,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
  {
    title: "Agentic AI",
    description:
      "Build autonomous AI agents that plan, execute tasks, and integrate with APIs and real-world workflows.",
    icon: Bot,
    tags: ["LangGraph", "LangChain", "CrewAI", "AutoGen", "OpenAI"],
  },
  {
    title: "DevOps with AI Integration",
    description:
      "Master DevOps with tools like Docker, Jenkins, Kubernetes, and AWS. Gain hands-on experience in CI/CD pipeline automation.",
    icon: InfinityIcon,
    tags: ["Linux", "GitHub", "Docker", "Kubernetes", "Jenkins"],
  },
];

const programStats = [
  { icon: CalendarDays, label: "6 Months" },
  { icon: FolderKanban, label: "6+ Projects" },
  { icon: Signal, label: "Beginner to Advanced" },
] as const;

const paginationPages = [1, 2, 3] as const;

export function HomePrograms() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="scroll-mt-24 bg-[linear-gradient(180deg,#FDF2E9_0%,#FEF9F4_38%,#FFFFFF_100%)] px-4 pt-4 pb-2 sm:pt-6 sm:pb-4"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
          Our Programs
        </p>
        <h2
          id="programs-heading"
          className="mx-auto mt-2 max-w-3xl text-balance text-center font-outfit text-2xl font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-3xl md:text-[38px]"
        >
          Choose your path to a <span className="border-b-[3px] border-brand pb-0.5 text-brand">tech career</span>
        </h2>
        <p className="mx-auto mt-3 text-center font-figtree text-[13.5px] sm:text-[15px] leading-relaxed text-[#6B7280] sm:whitespace-nowrap">
          Industry-aligned programs with real projects, mentor support, and placement assistance.
        </p>

        {/* Grid */}
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12"
        >
          {programs.map((program) => {
            const Icon = program.icon;
            const callbackSource = `Programs - Explore ${program.title}`;

            return (
              <li key={program.title} role="listitem">
                <article className="group flex h-full flex-col rounded-xl border border-t-[3px] border-[#E8E0D8] border-t-brand bg-white p-5 shadow-[0_12px_32px_-12px_rgba(234,119,30,0.20),0_2px_8px_rgba(17,17,17,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_-12px_rgba(234,119,30,0.30),0_4px_12px_rgba(17,17,17,0.06)]">
                  {/* Card header */}
                  <div className="flex items-start gap-4">
                    <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                      <Icon className="size-8 text-brand" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-outfit text-[17px] font-bold leading-snug text-[#111111]">
                        {program.title}
                      </h3>
                      <p className="mt-1 font-figtree text-[13.5px] leading-[1.5] text-[#666666]">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <ul
                    aria-label="Technologies covered"
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {program.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-[#F5F5F5] px-3 py-1 font-figtree text-xs font-medium text-[#555555]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <hr className="mt-4 border-t border-[#EFEFEF]" />

                  {/* Stats */}
                  <ul
                    aria-label="Program details"
                    className="mt-3 flex flex-wrap gap-x-6 gap-y-2"
                  >
                    {programStats.map((stat) => {
                      const StatIcon = stat.icon;
                      return (
                        <li
                          key={stat.label}
                          className="flex items-center gap-2 font-figtree text-[13px] font-medium text-[#374151]"
                        >
                          <StatIcon
                            className="size-4 text-brand"
                            aria-hidden="true"
                          />
                          {stat.label}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Actions */}
                  <div className="mt-auto flex gap-3 pt-5">
                    <Link
                      href="/requestcallback?source=Programs - View Details"
                      className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md border border-brand px-3 py-2.5 font-outfit text-[13px] font-semibold text-brand transition-colors hover:bg-brand/5"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/requestcallback?source=${encodeURIComponent(callbackSource)}`}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-gradient-to-r from-[#e84975] to-[#ff8541] px-3 py-2.5 font-outfit text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Explore Program
                      <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Pagination */}
        <nav
          aria-label="Programs pagination"
          className="mt-8 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            aria-label="Previous page"
            className="inline-flex size-8 items-center justify-center rounded-md bg-[#F5F5F5] text-[#9CA3AF] transition-colors hover:text-[#374151]"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          {paginationPages.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`Page ${page}`}
              aria-current={page === 1 ? "page" : undefined}
              className={`inline-flex size-8 items-center justify-center rounded-md font-outfit text-[13px] font-semibold text-brand transition-colors ${
                page === 1 ? "bg-brand/10" : "hover:bg-brand/5"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            className="inline-flex size-8 items-center justify-center rounded-md bg-[#F5F5F5] text-[#9CA3AF] transition-colors hover:text-[#374151]"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </section>
  );
}
