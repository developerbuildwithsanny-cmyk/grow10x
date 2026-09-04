import { Eyebrow } from "@/components/home/landing/atoms/Eyebrow";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { audienceColumns } from "@/components/home/landing/content";
import { AudienceCard } from "@/components/home/landing/molecules/AudienceCard";

export function AudienceSection() {
  return (
    <SectionShell
      id="audience"
      className="border-b border-landing-border bg-landing-cream py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #FFF1EA 0%, #FFF8F5 55%, #FFF5F1 100%)",
      }}
    >
      <Eyebrow label="Built For You" />
      <h2 className="mt-4 pb-10 font-heading text-[36px] font-medium leading-none tracking-tight text-landing-ink sm:text-[48px] lg:text-[60px] lg:leading-[60px]">
        Designed for where
        <br className="hidden sm:block" /> you&apos;re starting from
      </h2>

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-landing-border bg-landing-border shadow-sm lg:grid-cols-2">
        {audienceColumns.map((column) => (
          <AudienceCard key={column.title} {...column} />
        ))}
      </div>
    </SectionShell>
  );
}
