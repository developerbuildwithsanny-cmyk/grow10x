"use client";

import { Code2, User, X } from "lucide-react";
import { PathCard } from "@/components/home/PathCard";
import { useEffect } from "react";

interface WhoAreYouBecomingModalProps {
  onClose: () => void;
}

export function WhoAreYouBecomingModal({ onClose }: WhoAreYouBecomingModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="becoming-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-background px-4 py-8 shadow-xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-foreground/60 hover:bg-black/10 transition-colors"
        >
          <X className="size-5" />
        </button>

        {/* --- Exact content from provided page.tsx --- */}
        <section
          aria-labelledby="becoming-heading"
          className="flex w-full flex-col items-center"
        >
          <h2
            id="becoming-heading"
            className="text-2xl font-bold text-balance text-foreground text-center"
          >
            Who Are You Becoming?
          </h2>

          <div
            role="list"
            className="mt-6 flex w-full flex-col gap-4 sm:flex-row sm:items-stretch"
          >
            <PathCard
              icon={Code2}
              title="Know Basic Coding"
              description="Learn to read and write real code, understand how apps work, and build a foundation you can grow from."
              ctaLabel="Continue Coding"
              href="/requestcallback?source=Modal - Continue Coding"
            />
            <PathCard
              icon={User}
              title="I'm Non-Tech"
              description="No coding required — use no-code tools and AI to design, launch, and ship products your own way."
              ctaLabel="Join Non-Tech"
              href="/requestcallback?source=Modal - Join Non-Tech"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
