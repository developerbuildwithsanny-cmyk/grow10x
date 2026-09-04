import { TagChip } from "@/components/home/landing/atoms/TagChip";

type TrackCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
};

export function TrackCard({ title, description, tags }: TrackCardProps) {
  return (
    <article className="flex h-full min-h-[200px] flex-col justify-between bg-landing-paper p-7">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-medium leading-7 tracking-tight text-landing-ink">
            {title}
          </h3>
          <span className="shrink-0 rounded bg-landing-blush px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-landing-accent">
            Part-time
          </span>
        </div>
        <p className="mt-2 text-sm leading-[1.625] text-landing-muted">
          {description}
        </p>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <TagChip label={tag} variant="light" />
          </li>
        ))}
      </ul>
    </article>
  );
}
