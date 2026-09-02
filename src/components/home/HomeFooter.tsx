import Image from "next/image";
import Link from "next/link";
import {
  homeFooterColumns,
  homeFooterLegal,
  homeFooterSocials,
} from "@/components/home/homeContent";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

const Github = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
  </svg>
);

const Twitter = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Youtube = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socialIcons = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  YouTube: Youtube,
  GitHub: Github,
} as const;

export function HomeFooter() {
  return (
    <footer className="bg-[#0F172A]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-5 pb-10 pt-20 sm:px-8 lg:px-20">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-8">
          <div className="flex w-full max-w-[360px] flex-col gap-6">
            <Link
              href="/"
              className="inline-flex h-12 w-[143px] items-center justify-center rounded-[10px] bg-white"
            >
              <Image
                src="/home_page_images/logo-10x-ai-school.png"
                alt="10x AI School"
                width={116}
                height={35}
                className="h-[35px] w-auto"
              />
            </Link>
            <p className="font-figtree text-sm leading-[1.5] text-white/65">
              India&apos;s premium coding platform empowering computational
              thinkers, software architects, and AI developers. Proudly
              engineered for the tech future of Bharat.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 lg:gap-16">
            {homeFooterColumns.map((column) => (
              <div key={column.title} className="flex w-[120px] flex-col gap-4">
                <p className="font-outfit text-base font-bold text-white">
                  {column.title}
                </p>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-figtree text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="flex w-full max-w-[240px] flex-col gap-4">
            <p className="font-outfit text-base font-bold text-white">
              National HQ
            </p>
            <p className="font-figtree text-sm leading-[1.4] text-white/50">
              Academy, Madhapur Tech Hub, Hyderabad, Telangana, 500081, India
            </p>
            <div className="flex gap-3 pt-2">
              {homeFooterSocials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
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
