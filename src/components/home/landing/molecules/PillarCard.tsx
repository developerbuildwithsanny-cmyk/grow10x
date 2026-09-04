import { TagChip } from "@/components/home/landing/atoms/TagChip";

type PillarCardProps = {
  title: string;
  description: string;
  tags?: readonly string[];
  variant?: "default" | "featured" | "accent";
  className?: string;
};

export function PillarCard({
  title,
  description,
  tags,
  variant = "default",
  className = "",
}: PillarCardProps) {
  if (variant === "featured") {
    return (
      <article
        className={`flex h-full flex-col justify-between bg-landing-charcoal p-8 lg:p-10 ${className}`}
      >
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-[28px] font-medium leading-tight tracking-tight text-white sm:text-4xl sm:leading-10">
            {title}
          </h3>
          <p className="max-w-xl text-base leading-[1.625] text-zinc-300">
            {description}
          </p>
        </div>
        {tags?.length ? (
          <ul className="mt-10 flex flex-wrap gap-2 border-t border-zinc-800 pt-6">
            {tags.map((tag) => (
              <li key={tag}>
                <TagChip label={tag} variant="dark" />
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    );
  }

  if (variant === "accent") {
    return (
      <article className={`flex h-full flex-col bg-landing-accent p-8 ${className}`}>
        <h3 className="font-heading text-2xl font-medium leading-[1.375] tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-[1.625] text-white/90">
          {description}
        </p>
      </article>
    );
  }

  return (
    <article
      className={`flex h-full flex-col justify-between bg-landing-paper p-8 ${className}`}
    >
      <div>
        <h3 className="font-heading text-xl font-medium leading-7 tracking-tight text-landing-ink sm:text-2xl sm:leading-8">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-[1.625] text-landing-muted">
          {description}
        </p>
      </div>
      {tags?.length ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <TagChip label={tag} variant="light" />
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
