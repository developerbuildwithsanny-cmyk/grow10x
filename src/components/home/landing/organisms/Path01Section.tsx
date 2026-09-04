import { SectionHeader } from "@/components/home/landing/atoms/SectionHeader";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { path01Moves } from "@/components/home/landing/content";
import { MoveCard } from "@/components/home/landing/molecules/MoveCard";

export function Path01Section() {
  return (
    <SectionShell
      id="path-01"
      className="border-b border-landing-border bg-landing-cream py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #FFF1EA 0%, #FFF8F5 55%, #FFF5F1 100%)",
      }}
    >
      <SectionHeader
        headingAs="h1"
        eyebrow="Path 01"
        heading={
          <>
            From idea to income,
            <br className="hidden sm:block" /> in four moves
          </>
        }
        description="Turning an idea into a business students and professionals can actually run — taught in order."
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-landing-border bg-landing-border sm:grid-cols-2 lg:grid-cols-4">
        {path01Moves.map((move) => (
          <MoveCard key={move.number} {...move} />
        ))}
      </div>
    </SectionShell>
  );
}
