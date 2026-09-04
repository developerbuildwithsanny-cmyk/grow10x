type AudienceCardProps = {
  title: string;
  items: readonly string[];
  variant?: "light" | "dark";
};

export function AudienceCard({
  title,
  items,
  variant = "light",
}: AudienceCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={`flex h-full flex-col p-8 sm:p-14 ${
        isDark ? "bg-landing-charcoal" : "bg-landing-students"
      }`}
    >
      <h3
        className={`font-heading text-[28px] font-medium leading-9 tracking-tight sm:text-[30px] ${
          isDark ? "text-white" : "text-landing-ink"
        }`}
      >
        {title}
      </h3>
      <ul className="mt-8 flex flex-col gap-5">
        {items.map((item) => (
          <li key={item} className="flex gap-3.5">
            <span
              aria-hidden
              className="mt-0.5 text-lg leading-[22px] text-landing-accent"
            >
              •
            </span>
            <p
              className={`text-base leading-6 ${
                isDark ? "text-zinc-300" : "text-landing-ink/90"
              }`}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
