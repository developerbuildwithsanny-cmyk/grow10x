import type { ReactNode } from "react";
import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
}: CtaButtonProps) {
  const padding = size === "sm" ? "px-6 py-2.5 text-sm" : "px-8 py-3.5 text-base";
  const styles =
    variant === "primary"
      ? "border-transparent bg-landing-accent text-white shadow-sm hover:opacity-90"
      : "border-landing-border bg-transparent text-landing-ink hover:bg-landing-paper";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[4px] border font-inter font-medium transition-opacity ${padding} ${styles}`}
    >
      {children}
    </Link>
  );
}
