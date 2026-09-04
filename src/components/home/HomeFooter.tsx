import Image from "next/image";
import Link from "next/link";
import {
  homeFooterColumns,
  homeFooterLegal,
  homeFooterSocials,
} from "@/components/home/homeContent";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

const Instagram = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Linkedin = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
  </svg>
);

const Gmail = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const Youtube = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socialIcons = {
  LinkedIn: Linkedin,
  Gmail: Gmail,
  YouTube: Youtube,
  Instagram: Instagram,
} as const;

export function HomeFooter() {
  return (
    <footer className="bg-[#0F172A]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:px-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link
              href="/"
              className="inline-block shrink-0 overflow-hidden"
            >
              <Image
                src="/home_page_images/brand-logo/brand-logo-footer.jpg"
                alt="10x AI School"
                width={280}
                height={90}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain mix-blend-screen scale-[2.2] sm:scale-[2.5] md:scale-[2.8] origin-left"
              />
            </Link>
            <p className="font-figtree text-sm leading-relaxed text-white/65 max-w-[340px]">
              India&apos;s premium coding platform empowering computational
              thinkers, software architects, and AI developers. Proudly
              engineered for the tech future of Bharat.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:col-span-5 lg:gap-6">
            {homeFooterColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3 min-w-0">
                <p className="font-outfit text-base font-bold text-white whitespace-nowrap">
                  {column.title}
                </p>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-figtree text-sm text-white/60 transition-colors hover:text-white whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* National HQ & Social Icons */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <p className="font-outfit text-base font-bold text-white whitespace-nowrap">
              National HQ
            </p>
            <p className="font-figtree text-sm leading-relaxed text-white/60 max-w-[280px]">
              Academy, Madhapur Tech Hub, Hyderabad, Telangana, 500081, India
            </p>
            <div className="flex gap-3 pt-1">
              {homeFooterSocials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="flex flex-col gap-4 pt-2">
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="font-figtree text-[13px] text-white/50">
              © 2026 10xAISchool Technology Private Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {homeFooterLegal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-figtree text-[13px] text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
