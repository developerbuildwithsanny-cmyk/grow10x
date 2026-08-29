"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    line: "Build and monetize AI Products.",
    sub: null,
  },
  {
    line: "Learn AI.",
    sub: "From LLMs to autonomous agents — master the skills the world is paying top dollar for. No CS degree needed. Just the will to build.",
  },
  {
    line: "Launch Fast.",
    sub: "Go from idea to live product in weeks. No gatekeepers. No waiting. Just ship. Real deadlines. Real deployments. Real results.",
  },
  {
    line: "Earn Faster.",
    sub: "Your AI skills are an income machine. Freelance, SaaS, consulting — the opportunities are limitless. 1000+ members already placed. You're next.",
  },
];

export function HeroHeadline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 2800);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    /* The grid reserves height for the tallest slide.
       Each slide is headline + optional subtitle stacked together,
       so the subtitle fills the empty area below short headlines. */
    <div
      className="grid grid-cols-1 grid-rows-1 overflow-hidden"
      aria-live="polite"
    >
      {slides.map(({ line, sub }, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === prevIndex;

        return (
          <div
            key={line}
            className={`col-start-1 row-start-1 flex flex-col gap-3 ${
              isActive
                ? "translate-y-0 opacity-100 transition-all duration-700 ease-out"
                : isPrev
                ? "-translate-y-full opacity-0 transition-all duration-700 ease-out pointer-events-none"
                : "translate-y-full opacity-0 pointer-events-none"
            }`}
            style={{
              transitionProperty:
                isActive || isPrev ? "transform, opacity" : "none",
              gridArea: "1 / 1 / 2 / 2",
            }}
          >
            {/* Headline */}
            <h1 className="font-heading text-[40px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[72px] lg:leading-[1.1]">
              {line}
            </h1>

            {/* Subtitle — only for non-"Build and monetize" slides */}
            {sub && (
              <p className="max-w-md font-sans text-base font-normal leading-relaxed text-white/75 sm:text-lg">
                {sub}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
