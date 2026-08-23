"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container, ArrowRightIcon } from "@/components/ui";
import { innovationsProjects, type StudentProject } from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryStyles: Record<
  StudentProject["category"],
  { badge: string; text: string }
> = {
  "AI Agents": {
    badge: "bg-accent-green/10 text-accent-green border border-accent-green/20",
    text: "AI Agent",
  },
  "RAG & LLMs": {
    badge: "bg-green-10 text-green border border-green/20",
    text: "RAG & LLM",
  },
  "No-Code AI": {
    badge: "bg-yellow-20 text-yellow border border-yellow/20",
    text: "No-Code AI",
  },
  "Full Stack": {
    badge: "bg-coral-20 text-coral border border-coral/20",
    text: "Full Stack",
  },
};

export function InnovationsPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "AI Agents", "RAG & LLMs", "No-Code AI", "Full Stack"];

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return innovationsProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.students.some((s) => s.toLowerCase().includes(query)) ||
        project.techStack.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-page-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-footer-border bg-gradient-to-b from-navbar to-page-dark pb-16 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,230,118,0.08),transparent_50%)]" />
        <Container className="relative flex max-w-4xl flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-green/10 border border-green/30 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.05em] text-green">
            Innovation Lab Showcase
          </span>
          <h1 className="font-heading text-[40px] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[52px] sm:leading-[1.1] lg:text-[60px] lg:leading-[60px]">
            Real AI Products.
            <br />
            Built by <span className="bg-gradient-to-r from-accent-green to-green bg-clip-text text-transparent">Real Builders</span>.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-muted">
            Explore real-world projects built by 10xAISchool students—from design to deployment. 
            See how job-ready skills come to life in our Innovation Lab.
          </p>
          <div className="relative w-full max-w-[600px] pt-4">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-muted"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M8.5 3a5.5 5.5 0 103.874 9.374l3.127 3.127a1 1 0 001.414-1.414l-3.127-3.127A5.5 5.5 0 008.5 3zm-4 5.5a4 4 0 118 0 4 4 0 01-8 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="search"
              placeholder="Search projects by name, tech stack, or student..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border-dark bg-card-dark py-[18px] pl-12 pr-4 text-base text-white placeholder:text-zinc-muted focus:border-green focus:outline-none transition-colors"
            />
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border-dark bg-card/10">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "500+", label: "PROJECTS BUILT" },
              { value: "70%", label: "INTERVIEW RATE" },
              { value: "120+", label: "STUDENTS HIRED" },
              { value: "50+", label: "INDUSTRY PARTNERS" },
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

      {/* Filtering & Grid Section */}
      <section className="py-16">
        <Container>
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-5 py-2 font-heading text-sm font-semibold transition-all duration-200 cursor-pointer",
                  activeCategory === category
                    ? "border-green bg-green text-black shadow-[0_0_15px_rgba(0,230,118,0.25)]"
                    : "border-border-dark bg-card-dark text-zinc-muted hover:text-white hover:border-zinc-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              const style = categoryStyles[project.category];
              return (
                <article
                  key={project.name}
                  className="flex flex-col rounded-2xl border border-border-dark bg-card-dark p-6 hover:border-green/40 hover:shadow-card transition-all duration-300 justify-between group"
                >
                  <div>
                    {/* Top Row: Category Badge */}
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider",
                          style.badge
                        )}
                      >
                        {style.text}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-1 font-heading text-xl font-bold text-white group-hover:text-green transition-colors">
                      {project.name}
                    </h3>

                    {/* Student Names */}
                    <p className="mb-4 font-mono text-xs text-muted-green">
                      By {project.students.join(" & ")}
                    </p>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-zinc-muted">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-black/40 border border-border-dark px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center gap-4 border-t border-border-dark pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-green hover:underline"
                      >
                        Live Demo
                        <ArrowRightIcon className="h-3 w-3" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-zinc-400 hover:text-white"
                      >
                        Code
                        <svg
                          className="h-3.5 w-3.5 fill-current"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-muted text-lg">
                No student innovations match your search parameters. Try clearing your filters or entering a different query.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-footer-border bg-cta-band px-6 py-20">
        <Container className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl font-heading text-[28px] font-extrabold leading-10 text-white sm:text-4xl">
            Want to Build Your Own AI Product and See It Here?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-muted">
            Join the 10xAISchool builder ecosystem and learn how to launch SaaS tools and AI agents from scratch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-8 py-3 font-heading text-base font-bold text-black hover:bg-accent-green transition-colors"
            >
              Explore Programs
              <ArrowRightIcon className="text-black" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
