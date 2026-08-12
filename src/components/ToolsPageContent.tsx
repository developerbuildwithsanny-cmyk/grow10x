"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRightIcon, Container } from "@/components/ui";
import {
  aiTools,
  toolCategories,
  type ToolCategory,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryStyles: Record<
  Exclude<ToolCategory, "All">,
  { badge: string; text: string }
> = {
  Build: {
    badge: "bg-accent-emerald/20 text-accent-emerald",
    text: "BUILD",
  },
  Design: {
    badge: "bg-zinc-muted/20 text-zinc-muted",
    text: "DESIGN",
  },
  Research: {
    badge: "bg-zinc-muted/20 text-zinc-muted",
    text: "RESEARCH",
  },
  Productivity: {
    badge: "bg-zinc-muted/20 text-zinc-muted",
    text: "PRODUCTIVITY",
  },
  "No-Code": {
    badge: "bg-badge-yellow/20 text-badge-yellow",
    text: "NO-CODE",
  },
};

function ToolIcon({ name }: { name: string }) {
  const slugMap: Record<string, string> = {
    "ChatGPT": "chatgpt",
    "Claude": "claude",
    "Cursor": "cursor",
    "Bolt.new": "bolt",
    "Lovable": "lovable",
    "Make": "make",
    "Perplexity": "perplexity",
    "Midjourney": "midjourney",
    "n8n": "n8n",
    "Notion AI": "notion",
    "Framer": "framer",
    "ElevenLabs": "elevenlabs",
  };

  const slug = slugMap[name] || "chatgpt";
  return (
    <img
      src={`/images/tools/${slug}.svg`}
      alt={`${name} logo`}
      className="h-6 w-6 object-contain"
    />
  );
}

export function ToolsPageContent() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return aiTools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;
      const matchesSearch =
        !query ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-page-dark">
      <section className="px-6 pb-8 pt-32">
        <Container className="flex max-w-4xl flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-badge-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.05em] text-page-dark">
            AI Tools Directory
          </span>
          <h1 className="font-heading text-[40px] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[52px] sm:leading-[1.1] lg:text-[60px] lg:leading-[60px]">
            The <span className="text-accent-emerald">Tools</span> Every <span className="text-accent-emerald">AI Builder</span>
            <br />
            Needs
          </h1>
          <p className="max-w-xl text-lg text-zinc-muted">
            Curated, tested, and organized by real builders. Start building
            faster with the right stack.
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
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-xl border border-border-dark bg-card-dark py-[18px] pl-12 pr-4 text-base text-white placeholder:text-zinc-muted focus:border-accent-emerald focus:outline-none"
            />
          </div>
        </Container>
      </section>

      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3 pb-8">
          {toolCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-5 py-2 font-heading text-base font-semibold transition-colors",
                activeCategory === category
                  ? "border-accent-emerald bg-accent-emerald text-page-dark"
                  : "border-border-dark bg-transparent text-zinc-muted hover:text-white",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTools.map((tool) => {
            const styles = categoryStyles[tool.category];
            return (
              <article
                key={tool.name}
                className="flex flex-col rounded-2xl border border-border-dark bg-card-dark p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 border border-border-dark p-2"
                  >
                    <ToolIcon name={tool.name} />
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wide",
                      styles.badge,
                    )}
                  >
                    {styles.text}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-white">
                  {tool.name}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-5 text-zinc-muted">
                  {tool.description}
                </p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent-emerald"
                >
                  Visit Tool
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <p className="pb-24 text-center text-zinc-muted">
            No tools match your search. Try a different filter or keyword.
          </p>
        )}
      </Container>

      <section className="border-t border-accent-emerald bg-cta-band px-6 py-20">
        <Container className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl font-heading text-[28px] font-extrabold leading-10 text-white sm:text-4xl">
            Want to Learn How to Use These Tools Together?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-muted">
            Our AI in Hands program walks you through the full stack, step by
            step.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-emerald px-8 py-3 font-heading text-base font-bold text-page-dark"
            >
              Explore Programs
              <ArrowRightIcon />
            </Link>
            <Link
              href="/#programs"
              className="rounded-lg border-2 border-accent-emerald px-8 py-3 font-heading text-base font-bold text-accent-emerald"
            >
              Join Free Community
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
