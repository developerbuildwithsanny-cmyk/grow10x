"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { homeNavLinks } from "@/components/home/homeContent";
import { open_sans } from "@/shared/styles/font";

export function HomeNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[68px] border-b border-nav-border bg-white">
      <div className="relative mx-auto grid h-[68px] w-full max-w-[1440px] grid-cols-3 items-center px-5 sm:px-8 md:flex md:justify-between lg:px-20">
        <button
          type="button"
          className="col-start-1 row-start-1 inline-flex h-11 w-11 shrink-0 items-center justify-center justify-self-start text-black md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={28} strokeWidth={2.25} /> : <Menu size={28} strokeWidth={2.25} />}
        </button>

        <Link
          href="/"
          className="col-start-2 row-start-1 flex w-[clamp(150px,38vw,220px)] shrink-0 items-center justify-self-center md:col-auto md:row-auto md:justify-self-auto"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/home_page_images/brand-logo/brand-logo-header.png"
            alt="10x AI School"
            width={280}
            height={90}
            className="h-auto max-h-[44px] sm:max-h-[48px] md:max-h-[50px] w-full object-contain"
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
            className={`flex items-center justify-center gap-[10px] bold border font-bold bg-Vivid_Tangelo text-white md:rounded-md md:p-1 lg:rounded-lg lg:p-2 ${open_sans.className}`}
          >
            <span>Join Community</span>
            <div className="flex items-center justify-center md:size-[11px] lg:size-[16px] xl:size-[17.97px]">
              <ArrowRight className="h-full w-full" />
            </div>
          </Link>
        </div>

        <Link
          href="/requestcallback?source=Navbar - Apply Now"
          className={`col-start-3 row-start-1 grid h-[36.13px] w-[85.26px] shrink-0 place-items-center justify-self-end rounded-[10.19px] bg-Vivid_Tangelo text-[16px] font-bold opacity-90 backdrop-blur transition-all duration-300 hover:text-Vivid_Tangelo sm:h-[38.16px] sm:w-[98.31px] sm:rounded-[10.73px] sm:text-[17.37px] md:hidden ${open_sans.className}`}
        >
          <span>Join Now</span>
        </Link>
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
          {/* <a
            href={homeContact.phoneHref}
            className="mt-4 block font-figtree text-sm font-bold text-black"
          >
            {homeContact.phoneLabel}
          </a> */}
          <Link
            href="/requestcallback?source=Navbar - Join Community"
            className={`mt-3 flex items-center justify-center gap-[8.17px] border bg-Vivid_Tangelo text-white rounded-lg p-2 ${open_sans.className}`}
            onClick={() => setOpen(false)}
          >
            <span>Join Community</span>
            <div className="flex items-center justify-center size-[16px]">
              <ArrowRight className="h-full w-full" />
            </div>
          </Link>
        </div>
      ) : null}
      </header>
      <div aria-hidden="true" className="h-[68px]" />
    </>
  );
}
