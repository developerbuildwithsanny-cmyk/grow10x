"use client";

import { useState, useMemo } from "react";
import { Container, ArrowRightIcon } from "@/components/ui";
import { journalPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

type BlogCategory = "All" | "Engineering" | "Case Study" | "Business";

export function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: BlogCategory[] = ["All", "Engineering", "Case Study", "Business"];

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return journalPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-page-dark min-h-screen">
      {/* Header Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[500px] opacity-40 blur-[100px]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(34, 197, 94, 0.12) 0%, transparent 70%)",
          }}
        />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-green/10 border border-green/20 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.05em] text-green">
            The Journal
          </span>
          <h1 className="font-heading text-[40px] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[52px] sm:leading-[1.1] lg:text-[60px] lg:leading-[60px]">
            Latest Guides, Case Studies
            <br />
            &amp; <span className="text-green">Insights</span>
          </h1>
          <p className="max-w-xl text-lg text-zinc-muted">
            Learn how to build, launch, and monetize AI products from real builders.
          </p>

          {/* Search Input */}
          <div className="relative w-full max-w-[500px] pt-4">
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
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border-dark bg-card-dark py-4 pl-12 pr-4 text-base text-white placeholder:text-zinc-muted focus:border-green focus:outline-none transition-colors"
            />
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <Container className="pb-32">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-5 py-2 font-heading text-sm font-semibold transition-colors cursor-pointer",
                activeCategory === category
                  ? "border-green bg-green text-black"
                  : "border-border-dark bg-transparent text-zinc-muted hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border-dark bg-card-dark transition-all duration-300 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="relative h-[200px] w-full overflow-hidden bg-card-alt">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded bg-white/5 border border-white/10 px-2.5 py-1 font-mono text-xs font-semibold text-green">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-muted">{post.date}</span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold leading-7 text-white hover:text-green transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-muted">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-green transition-colors"
                >
                  Read Article
                  <ArrowRightIcon className="h-2.5 w-2.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-zinc-muted py-12">
            No articles found matching your criteria.
          </p>
        )}
      </Container>
    </div>
  );
}
