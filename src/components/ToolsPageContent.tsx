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
    badge: "bg-[#e8672e]/10 text-[#e8672e]",
    text: "BUILD",
  },
  Design: {
    badge: "bg-[#6e6252]/10 text-[#6e6252]",
    text: "DESIGN",
  },
  Research: {
    badge: "bg-[#6e6252]/10 text-[#6e6252]",
    text: "RESEARCH",
  },
  Productivity: {
    badge: "bg-[#6e6252]/10 text-[#6e6252]",
    text: "PRODUCTIVITY",
  },
  "No-Code": {
    badge: "bg-[#e8672e]/15 text-[#e8672e]",
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
      className="h-5 w-5 object-contain"
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
    <div className="bg-[#fbf5ea]">
      {/* ── SECTION 1: 100vh Desktop Viewport Section (Navbar + Header + All Cards, NO SCROLL) ── */}
      <section className="px-6 pt-16 pb-8 min-h-screen lg:min-h-[calc(100vh-80px)] lg:flex lg:flex-col lg:justify-start">
        <Container className="flex max-w-6xl flex-col items-center gap-3 text-center lg:gap-2">
          <span className="rounded-full bg-[#e8672e] px-3.5 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.05em] text-white shadow-sm">
            AI Tools Directory
          </span>
          <h1 className="font-heading text-[32px] font-extrabold leading-tight tracking-[-0.025em] text-[#1b1812] sm:text-[40px] lg:text-[34px] lg:leading-none">
            The <span className="text-[#e8672e]">Tools</span> Every <span className="text-[#e8672e]">AI Builder</span> Needs
          </h1>
          <p className="max-w-xl text-sm text-[#6e6252] lg:text-sm">
            Curated, tested, and organized by real builders. Start building faster with the right stack.
          </p>

          {/* Search Bar & Category Filter Pills */}
          <div className="mt-2 flex w-full flex-col items-center justify-between gap-3 lg:mt-1.5 lg:flex-row">
            <div className="relative w-full max-w-[400px] lg:max-w-[260px]">
              <svg
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6e6252]"
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
                className="w-full rounded-xl border border-[#e5dcd0] bg-white py-1.5 pl-9 pr-3 text-xs text-[#1b1812] placeholder:text-[#6e6252] focus:border-[#e8672e] focus:outline-none shadow-sm"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {toolCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full border px-3 py-1 font-heading text-xs font-semibold transition-colors",
                    activeCategory === category
                      ? "border-[#e8672e] bg-[#e8672e] text-white shadow-sm"
                      : "border-[#e5dcd0] bg-white text-[#6e6252] hover:text-[#1b1812] hover:border-[#e8672e]",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>

        {/* All Cards Grid - Fits cleanly in desktop 100vh with NO SCROLLBAR */}
        <Container className="mt-4 lg:mt-3 flex-1">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTools.map((tool) => {
              const styles = categoryStyles[tool.category];
              return (
                <article
                  key={tool.name}
                  className="flex flex-col justify-between rounded-xl border border-[#e5dcd0] bg-white p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition-shadow"
                >
                  <div>
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fbf5ea] border border-[#e5dcd0] p-1.5">
                        <ToolIcon name={tool.name} />
                      </div>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-wide",
                          styles.badge,
                        )}
                      >
                        {styles.text}
                      </span>
                    </div>
                    <h3 className="mb-1 font-heading text-sm font-bold text-[#1b1812]">
                      {tool.name}
                    </h3>
                    <p className="text-[11px] leading-4 text-[#6e6252] line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-heading text-xs font-semibold text-[#e8672e] hover:text-[#d1541f] transition-colors mt-2"
                  >
                    Visit Tool
                    <ArrowRightIcon className="h-3 w-3" />
                  </a>
                </article>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <p className="py-12 text-center text-[#6e6252] text-sm">
              No tools match your search. Try a different filter or keyword.
            </p>
          )}
        </Container>
      </section>

      {/* ── SECTION 2: Below 100vh CTA Section ("Want to Learn How to Use These Tools Together?") ── */}
      <section className="border-t border-[#e5dcd0] bg-[#f2e6d0] px-6 py-16">
        <Container className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl font-heading text-2xl font-extrabold leading-tight text-[#1b1812] sm:text-3xl">
            Want to Learn How to Use These Tools Together?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#6e6252]">
            Our AI in Hands program walks you through the full stack, step by step.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {/* <Link
              href="/#programs"
              className="inline-flex items-center gap-2 rounded-full bg-[#e8672e] px-8 py-3.5 font-heading text-base font-bold text-white hover:bg-[#d1541f] transition-colors shadow-sm"
            >
              Explore Programs
              <ArrowRightIcon />
            </Link> */}
            <Link
              href="/requestcallback?source=Tools Page - Join Free Community"
              className="rounded-full border-2 border-[#e8672e] px-8 py-3 font-heading text-sm font-bold text-[#e8672e] hover:bg-[#e8672e]/10 transition-colors shadow-sm"
            >
              Join Free Community
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}



