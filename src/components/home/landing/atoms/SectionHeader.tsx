import type { ReactNode } from "react";
import { Eyebrow } from "@/components/home/landing/atoms/Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  heading: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  headingAs?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  heading,
  description,
  tone = "light",
  headingAs = "h2",
}: SectionHeaderProps) {
  const HeadingTag = headingAs;
  const headingColor = tone === "dark" ? "text-white" : "text-landing-ink";
  const descriptionColor =
    tone === "dark" ? "text-zinc-400" : "text-landing-muted";
  const ruleColor = tone === "dark" ? "border-zinc-800" : "border-landing-border";

  return (
    <header className="flex flex-col gap-4">
      {eyebrow ? <Eyebrow label={eyebrow} tone={tone} /> : null}

      <div className="grid grid-cols-1 gap-6 pb-10 lg:grid-cols-12 lg:gap-8 lg:pb-12">
        <HeadingTag
          className={`font-heading text-[36px] font-medium leading-[1] tracking-tight sm:text-[48px] lg:col-span-8 lg:text-[60px] lg:leading-[60px] ${headingColor}`}
        >
          {heading}
        </HeadingTag>

        {description ? (
          <p
            className={`font-normal text-lg leading-7 lg:col-span-4 lg:self-end lg:border-l lg:pl-6 ${descriptionColor} ${ruleColor}`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
