import Link from "next/link";
import { Container } from "@/components/ui";
import { footerLinks } from "@/lib/data";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-footer-border bg-black">
      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[300px] opacity-30 blur-[80px]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Top CTA Strip */}
      <div className="relative border-b border-white/5 py-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-emerald/10 border border-accent-emerald/30">
                <span className="text-accent-emerald text-lg">🚀</span>
              </div>
              <div>
                <p className="font-heading text-base font-bold text-white">
                  Ready to build your first AI product?
                </p>
                <p className="text-sm text-muted">Join 12,000+ builders across India</p>
              </div>
            </div>
            <Link
              href="/#programs"
              className="flex items-center gap-2 rounded-full bg-accent-emerald px-6 py-2.5 font-heading text-sm font-bold text-black hover:bg-accent-emerald/90 transition-all shrink-0"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Footer Grid */}
      <div className="pt-14 pb-8">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">

            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Link
                href="/"
                className="font-heading text-2xl font-black leading-7 tracking-[-0.05em] text-light-green w-fit"
              >
                10xAISchool
              </Link>
              <p className="max-w-xs text-sm leading-6 text-muted">
                Accelerating human intelligence through practical AI application development, startup incubation, and expert mentorship.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@10xaischool.in"
                  className="flex items-center gap-3 text-sm text-muted hover:text-accent-emerald transition-colors group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:border-accent-emerald/40 group-hover:bg-accent-emerald/5 transition-all">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  hello@10xaischool.in
                </a>
                <a
                  href="tel:+918000000000"
                  className="flex items-center gap-3 text-sm text-muted hover:text-accent-emerald transition-colors group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:border-accent-emerald/40 group-hover:bg-accent-emerald/5 transition-all">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  +91 80000 00000
                </a>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  India (Online &amp; Offline)
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:border-accent-emerald hover:text-accent-emerald transition-all"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:border-accent-emerald hover:text-accent-emerald transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:border-accent-emerald hover:text-accent-emerald transition-all"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@Buildwithsannyai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:border-accent-emerald hover:text-accent-emerald transition-all"
                  aria-label="YouTube"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Programs Column */}
            <div className="lg:col-span-2">
              <h4 className="mb-5 font-heading text-xs font-bold uppercase tracking-widest text-accent-emerald">
                Programs
              </h4>
              <ul className="flex flex-col gap-3.5">
                {footerLinks.programs.map((link) => (
                  <li key={link}>
                    <Link
                      href="/#programs"
                      className="text-sm text-muted hover:text-accent-emerald transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="lg:col-span-2">
              <h4 className="mb-5 font-heading text-xs font-bold uppercase tracking-widest text-accent-emerald">
                Resources
              </h4>
              <ul className="flex flex-col gap-3.5">
                {footerLinks.resources.map((link) => {
                  const href =
                    link === "AI Tools Directory"
                      ? "/tools"
                      : link === "Mission"
                        ? "/mission"
                        : "/#programs";
                  return (
                    <li key={link}>
                      <Link
                        href={href}
                        className="text-sm text-muted hover:text-accent-emerald transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="mb-5 font-heading text-xs font-bold uppercase tracking-widest text-accent-emerald">
                Company
              </h4>
              <ul className="flex flex-col gap-3.5">
                {[
                  { label: "About Us", href: "/#about" },
                  { label: "Blog", href: "/blog" },
                  { label: "Mission", href: "/mission" },
                  { label: "Community", href: "/#programs" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted hover:text-accent-emerald transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-accent-emerald">
                Newsletter
              </h4>
              <p className="text-sm leading-5 text-muted">
                Get weekly AI building guides, templates, and builder spotlights.
              </p>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-border-dark bg-card-dark py-3 pl-4 pr-11 text-sm text-white placeholder:text-muted focus:border-accent-emerald focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-emerald text-black hover:bg-accent-emerald/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-muted">
                  12k+ Builders
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-muted">
                  450+ Apps
                </span>
              </div>
            </div>
          </div>

          {/* Divider with tagline */}
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-xs text-muted/60 font-heading tracking-widest uppercase">
              Building India&apos;s AI Future
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          {/* Footer Bottom */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-muted">
              © 2026 10xAISchool. All rights reserved. Accelerating human intelligence through AI.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-muted hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
