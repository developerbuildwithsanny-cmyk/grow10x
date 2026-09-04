type SupportCardProps = {
  title: string;
  description: string;
};

export function SupportCard({ title, description }: SupportCardProps) {
  return (
    <article className="flex h-full min-h-[140px] flex-col bg-landing-paper p-8">
      <h3 className="text-base font-semibold leading-6 text-landing-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-[1.625] text-landing-muted">
        {description}
      </p>
    </article>
  );
}
