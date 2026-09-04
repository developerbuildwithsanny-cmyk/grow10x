import { TagChip } from "@/components/home/landing/atoms/TagChip";

type TrackModuleCardProps = {
  number: string;
  title: string;
  tags: readonly string[];
};

export function TrackModuleCard({ number, title, tags }: TrackModuleCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-heading text-[26px] font-medium leading-9 tracking-tight text-white sm:text-[30px]">
          {title}
        </h3>
        <p className="shrink-0 font-mono text-sm font-semibold text-zinc-500">
          {number}
        </p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <TagChip label={tag} variant="dark" />
          </li>
        ))}
      </ul>
    </article>
  );
}
