import { SectionHeader } from "@/components/home/landing/atoms/SectionHeader";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { partTimeTracks } from "@/components/home/landing/content";
import { TrackCard } from "@/components/home/landing/molecules/TrackCard";

export function PartTimeTracksSection() {
  return (
    <SectionShell
      id="part-time"
      className="border-b border-landing-border bg-landing-cream py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, #FFF1EA 0%, #FFF8F5 55%, #FFF5F1 100%)",
      }}
    >
      <SectionHeader
        heading={
          <>
            Part-time
            <br className="hidden sm:block" /> specialization tracks
          </>
        }
        description="Bundled into the same 4-month program — short, self-paced series you learn alongside the core curriculum."
      />

      <ul className="grid grid-cols-1 gap-px overflow-hidden border border-landing-border bg-landing-border sm:grid-cols-2 xl:grid-cols-4">
        {partTimeTracks.map((track) => (
          <li key={track.title}>
            <TrackCard {...track} />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
