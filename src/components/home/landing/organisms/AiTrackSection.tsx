import { SectionHeader } from "@/components/home/landing/atoms/SectionHeader";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { aiTrackModules, aiTrackTicker } from "@/components/home/landing/content";
import { TrackModuleCard } from "@/components/home/landing/molecules/TrackModuleCard";

export function AiTrackSection() {
  return (
    <SectionShell
      id="ai-track"
      className="border-b border-[#292524] bg-landing-ink py-20 lg:py-24"
    >
      <SectionHeader
        tone="dark"
        eyebrow="Inside the AI Track"
        heading={
          <>
            GenAI &amp; Agentic AI
            <br className="hidden sm:block" /> Engineering
          </>
        }
        description="The exact tools and concepts students build with — not just theory."
      />

      <div className="grid grid-cols-1 gap-10 py-4 sm:grid-cols-2 lg:gap-12 lg:py-6">
        {aiTrackModules.map((module) => (
          <TrackModuleCard key={module.number} {...module} />
        ))}
      </div>

      <div className="mt-10 border-t border-zinc-800/80 pt-8">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center text-base font-medium tracking-wide text-landing-accent">
          {aiTrackTicker.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden>·</span> : null}
              {item}
            </span>
          ))}
        </p>
      </div>
    </SectionShell>
  );
}
