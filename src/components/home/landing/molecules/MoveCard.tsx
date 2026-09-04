type MoveCardProps = {
  number: string;
  title: string;
  description: string;
};

export function MoveCard({ number, title, description }: MoveCardProps) {
  return (
    <article className="flex h-full flex-col bg-landing-cream p-6 sm:p-8">
      <p className="font-mono text-sm font-semibold text-landing-accent">
        {number}
      </p>
      <h3 className="mt-2.5 font-heading text-2xl font-medium leading-8 tracking-tight text-landing-ink">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-[1.625] text-landing-muted">
        {description}
      </p>
    </article>
  );
}
