import Link from "next/link";
import { landingFooterLinks } from "@/components/home/landing/content";

export function LandingFooter() {
  return (
    <footer className="bg-landing-paper py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm font-semibold tracking-tight text-landing-ink">
          The Career
          <span className="mx-1.5 text-landing-accent">•</span>
          Ecosystem
        </p>
        <p className="text-xs leading-4 text-landing-muted">
          © 2026 The Career Ecosystem. All rights reserved. Built for
          placement-ready skills and business execution.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {landingFooterLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-landing-muted transition-colors hover:text-landing-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
