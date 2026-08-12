"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

function isLinkActive(href: string, pathname: string, activeSection: string) {
  if (pathname !== "/") {
    return href === pathname || (href !== "/" && pathname.startsWith(href));
  }
  if (href === "/") return activeSection === "home";
  if (href === "/#about") return activeSection === "about";
  if (href === "/blog") return activeSection === "journal";
  if (href === "/#programs") return activeSection === "programs";
  return false;
}

export function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = ["about", "programs", "journal"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-footer-border bg-navbar backdrop-blur-[6px]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="font-heading text-2xl font-black leading-8 tracking-[-0.05em] text-light-green"
            >
              Grow10X
            </Link>
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) =>
                link.hasMegaMenu ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "font-heading text-sm uppercase tracking-[0.1em] cursor-pointer transition-all duration-200",
                        isLinkActive(link.href, pathname, activeSection)
                          ? "border-b-2 border-accent-green pb-1 font-bold text-accent-green"
                          : "font-normal text-muted-green",
                      )}
                    >
                      {link.label}
                    </button>
                    {megaOpen && (
                      <div className="absolute left-0 top-full z-50 w-[600px] rounded-lg border border-border bg-card p-6 shadow-card">
                        <div className="grid grid-cols-2 gap-4">
                          <Link
                             href="/#programs"
                             className="rounded border border-black bg-black p-4"
                          >
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-green-10">
                              <span className="text-green">⚡</span>
                            </div>
                            <h3 className="font-heading text-lg font-bold text-white">
                              AI in Hands
                            </h3>
                            <p className="mt-1 text-sm text-muted">
                              Master practical AI development.
                            </p>
                          </Link>
                          <Link
                             href="/#programs"
                             className="rounded border border-black bg-black p-4"
                          >
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-yellow-20">
                              <span className="text-yellow">🚀</span>
                            </div>
                            <h3 className="font-heading text-lg font-bold text-white">
                              Be a Founder
                            </h3>
                            <p className="mt-1 text-sm text-muted">
                              Build and scale AI products.
                            </p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "font-heading text-sm uppercase tracking-[0.1em] transition-all duration-200",
                      isLinkActive(link.href, pathname, activeSection)
                        ? "border-b-2 border-accent-green pb-1 font-bold text-accent-green"
                        : "font-normal text-muted-green",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden font-heading text-sm uppercase tracking-[0.1em] text-muted-green sm:block"
            >
              LOGIN
            </Link>
            <Link
              href="/#programs"
              className="rounded bg-green px-6 py-2 font-heading text-base font-bold text-black"
            >
              Join Course
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
