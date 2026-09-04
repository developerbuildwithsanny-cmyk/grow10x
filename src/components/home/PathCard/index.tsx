import type { LucideIcon } from 'lucide-react'

interface PathCardProps {
  icon: LucideIcon
  title: string
  description: string
  ctaLabel: string
  href: string
}

export function PathCard({
  icon: Icon,
  title,
  description,
  ctaLabel,
  href,
}: PathCardProps) {
  return (
    <article
      role="listitem"
      className="group flex flex-1 flex-col items-center rounded-2xl bg-linear-[135deg] from-card-gradient-from to-card-gradient-to p-5 text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(232,122,106,0.35)]"
    >
      <span
        aria-hidden="true"
        className="mb-3 flex size-11 items-center justify-center text-foreground transition-transform duration-200 ease-out group-hover:scale-110"
      >
        <Icon strokeWidth={1.75} className="size-7" />
      </span>

      <h3 className="text-base font-semibold text-foreground">{title}</h3>

      <p className="mt-1.5 text-xs leading-relaxed text-foreground/70">
        {description}
      </p>

      <a
        href={href}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e84975] to-[#ff8541] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity duration-200 ease-out hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {ctaLabel}
      </a>
    </article>
  )
}
