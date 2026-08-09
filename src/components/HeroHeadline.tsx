"use client";

import { useEffect, useState } from "react";

const lines = [
  "Build and monetize AI Products.",
  "Learn AI.",
  "Launch Fast.",
  "Earn Faster."
];

export function HeroHeadline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % lines.length);
    }, 2800);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <h1 className="font-heading text-[40px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[72px] lg:leading-[1.1]">
      <span className="grid grid-cols-1 grid-rows-1 overflow-hidden py-1">
        {lines.map((line, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === prevIndex;

          return (
            <span
              key={line}
              className={`col-start-1 row-start-1 ${
                isActive
                  ? "translate-y-0 opacity-100 transition-all duration-800 ease-out"
                  : isPrev
                  ? "-translate-y-full opacity-0 transition-all duration-800 ease-out pointer-events-none"
                  : "translate-y-full opacity-0 pointer-events-none"
              }`}
              style={{
                transitionProperty: isActive || isPrev ? "transform, opacity" : "none",
                gridArea: "1 / 1 / 2 / 2",
              }}
            >
              {line}
            </span>
          );
        })}
      </span>
    </h1>
  );
}


