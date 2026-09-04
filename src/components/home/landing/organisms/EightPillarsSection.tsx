import { SectionHeader } from "@/components/home/landing/atoms/SectionHeader";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { pillarCards } from "@/components/home/landing/content";
import { PillarCard } from "@/components/home/landing/molecules/PillarCard";

const [
  featured,
  language,
  dsa,
  sql,
  communication,
  microservices,
  testing,
  lowcode,
  internship,
] = pillarCards;

export function EightPillarsSection() {
  return (
    <SectionShell
      id="pillars"
      className="border-b border-landing-border bg-landing-cream py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #FFF1EA 0%, #FFF8F5 55%, #FFF5F1 100%)",
      }}
    >
      <SectionHeader
        heading={
          <>
            Eight pillars of
            <br className="hidden sm:block" /> placement-ready skill
          </>
        }
        description="Everything recruiters test for, built into one curriculum."
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-landing-border bg-landing-border md:grid-cols-2 xl:grid-cols-4">
        <PillarCard
          {...featured}
          className="min-h-[280px] md:col-span-2 xl:row-span-2 xl:min-h-full"
        />
        <PillarCard {...language} />
        <PillarCard {...dsa} />
        <PillarCard {...sql} />
        <PillarCard {...communication} />
        <PillarCard {...microservices} />
        <PillarCard {...testing} />
        <PillarCard {...lowcode} />
        <PillarCard {...internship} />
      </div>
    </SectionShell>
  );
}
