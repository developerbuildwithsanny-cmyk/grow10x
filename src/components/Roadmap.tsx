import { Container, SectionHeading } from "@/components/ui";
import { roadmapWeeks } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap = {
  green: {
    badge: "bg-green text-black",
    border: "border-green",
  },
  coral: {
    badge: "bg-coral text-white",
    border: "border-coral",
  },
  yellow: {
    badge: "bg-yellow text-black",
    border: "border-yellow",
  },
};

export function Roadmap() {
  return (
    <section className="border-t border-border bg-black py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading className="text-center">
          Your 30-Day <span className="text-yellow">AI</span> Launch Roadmap
        </SectionHeading>
        <div className="relative">
          <div className="absolute left-12 right-12 top-7 hidden h-1 bg-border lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roadmapWeeks.map((week) => {
              const accent = accentMap[week.accent as keyof typeof accentMap];
              return (
                <div
                  key={week.week}
                  className={cn(
                    "relative rounded-xl border bg-card p-6 text-center",
                    accent.border,
                  )}
                >
                  <div className="mb-4 flex justify-center">
                    <span
                      className={cn(
                        "rounded-full px-4 py-1 font-mono text-base font-bold",
                        accent.badge,
                      )}
                    >
                      {week.week}
                    </span>
                  </div>
                  <p className="mb-3 font-heading text-lg font-bold leading-7 text-white">
                    {week.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {week.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
