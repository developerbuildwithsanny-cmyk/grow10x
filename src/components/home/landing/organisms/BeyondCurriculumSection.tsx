import { SectionHeader } from "@/components/home/landing/atoms/SectionHeader";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { placementSupports } from "@/components/home/landing/content";
import { SupportCard } from "@/components/home/landing/molecules/SupportCard";

export function BeyondCurriculumSection() {
  return (
    <SectionShell
      id="placement"
      className="border-b border-landing-border bg-landing-cream py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #FFF1EA 0%, #FFF8F5 55%, #FFF5F1 100%)",
      }}
    >
      <SectionHeader
        eyebrow="Beyond the Curriculum"
        heading={
          <>
            Placement assistance
            <br className="hidden sm:block" /> &amp; CRT training
          </>
        }
        description="Skill alone doesn’t get the offer letter — structured support closes the loop."
      />

      <ul className="grid grid-cols-1 gap-px overflow-hidden border border-landing-border bg-landing-border sm:grid-cols-2 lg:grid-cols-3">
        {placementSupports.map((item) => (
          <li key={item.title}>
            <SupportCard {...item} />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
