import Link from "next/link";
import { Container } from "@/components/ui";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-footer-border bg-black">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-heading text-xl font-black leading-7 tracking-[-0.05em] text-light-green"
            >
              Grow10X
            </Link>
            <p className="text-sm leading-5 text-muted">
              © 2024 Grow10X. Accelerating human intelligence through AI.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-base font-bold text-white">
              Programs
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.programs.map((link) => (
                <li key={link}>
                  <Link href="/#programs" className="text-sm text-muted hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-base font-bold text-white">
              Resources
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.resources.map((link) => {
                const href =
                  link === "AI Tools Directory"
                    ? "/tools"
                    : link === "Mission"
                      ? "/mission"
                      : "/#programs";
                return (
                  <li key={link}>
                    <Link href={href} className="text-sm text-muted hover:text-white">
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-base font-bold text-white">
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
