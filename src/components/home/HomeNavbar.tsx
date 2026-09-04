"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { homeContact, homeNavLinks } from "@/components/home/homeContent";
import { open_sans } from "@/shared/styles/font";

export function HomeNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-white overflow-hidden">
      <div className="relative mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-20">
        <Link href="/" className="shrink-0 flex items-center -ml-6 sm:-ml-10 md:-ml-14 lg:-ml-16" onClick={() => setOpen(false)}>
          <Image
            src="/home_page_images/brand-logo/brand-logo-header.jpg"
            alt="10x AI School"
            width={280}
            height={90}
            className="h-14 sm:h-16 md:h-20 w-auto object-contain scale-[2.2] sm:scale-[2.5] md:scale-[2.8] origin-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {homeNavLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-figtree text-[14px] font-semibold ${index === 0 ? "text-black" : "text-nav-muted"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop View Apply Now button */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/requestcallback?source=Navbar - Apply Now"
            className={`flex items-center justify-center gap-[8.17px] border bg-Vivid_Tangelo text-white md:rounded-md md:p-1 lg:rounded-lg lg:p-2 ${open_sans.className}`}
          >
            <span>Join EcoSystem</span>
            <div className="flex items-center justify-center md:size-[11px] lg:size-[16px] xl:size-[17.97px]">
              <ArrowRight className="h-full w-full" />
            </div>
          </Link>
        </div>

        {/* Mobile View Apply Now button (< md) */}
        <Link
          href="/requestcallback?source=Navbar - Apply Now"
          className={`absolute right-14 top-2.5 grid h-[32.13px] w-[65.26px] place-items-center rounded-[24.19px] hover:text-Vivid_Tangelo sm:rounded-[34.73px] bg-white bg-opacity-60 text-[12.1px] font-bold opacity-90 backdrop-blur transition-all duration-300 sm:h-[47.16px] sm:w-[94.31px] sm:text-[17.37px] lg:text-[23.69px] md:hidden ${open_sans.className}`}
        >
          <p>Join EcoSystem</p>
        </Link>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center text-black md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-nav-border bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {homeNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-figtree text-[14px] font-semibold text-black"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={homeContact.phoneHref}
            className="mt-4 block font-figtree text-sm font-bold text-black"
          >
            {homeContact.phoneLabel}
          </a>
          <Link
            href="/requestcallback?source=Navbar - Apply Now"
            className={`mt-3 flex items-center justify-center gap-[8.17px] border bg-Vivid_Tangelo text-white rounded-lg p-2 ${open_sans.className}`}
            onClick={() => setOpen(false)}
          >
            <span>Join EcoSystem</span>
            <div className="flex items-center justify-center size-[16px]">
              <ArrowRight className="h-full w-full" />
            </div>
          </Link>
        </div>
      ) : null}
    </header>
  );
}
