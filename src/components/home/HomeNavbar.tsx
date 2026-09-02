"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { homeContact, homeNavLinks } from "@/components/home/homeContent";

export function HomeNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-white">
      <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-20">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/home_page_images/logo-10x-ai-school.png"
            alt="10x AI School"
            width={116}
            height={35}
            className="h-[35px] w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {homeNavLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-figtree text-[15px] font-semibold ${
                index === 0 ? "text-black" : "text-nav-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={homeContact.phoneHref}
            className="font-figtree text-sm font-bold text-black"
          >
            {homeContact.phoneLabel}
          </a>
          <Link
            href="/requestcallback?source=Navbar - Apply Now"
            className="rounded-[30px] bg-brand px-8 py-4 font-outfit text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-black lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-nav-border bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {homeNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-figtree text-[15px] font-semibold text-black"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={homeContact.phoneHref}
            className="mt-5 block font-figtree text-sm font-bold text-black"
          >
            {homeContact.phoneLabel}
          </a>
          <Link
            href="/requestcallback?source=Navbar - Apply Now"
            className="mt-4 inline-flex rounded-[30px] bg-brand px-8 py-4 font-outfit text-base font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      ) : null}
    </header>
  );
}
