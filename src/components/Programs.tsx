import {
  CheckIcon,
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui";
import { programs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Programs() {
  return (
    <section id="programs" className="bg-black py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>WHAT WE OFFER</SectionLabel>
          <SectionHeading>
            Choose Your <span className="text-green">Path</span> to AI Mastery
          </SectionHeading>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className={cn(
                "flex flex-col rounded-2xl border border-border bg-card p-8",
                program.borderColor,
              )}
            >
              <span
                className={cn(
                  "mb-6 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold",
                  program.badgeBg,
                  program.badgeColor,
                )}
              >
                {program.badge}
              </span>
              <h3 className="mb-4 font-heading text-2xl font-bold leading-8 text-white">
                {program.title}
              </h3>
              <p className="mb-8 text-base leading-6 text-muted">
                {program.description}
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon className={program.checkColor} />
                    <span className="text-base leading-6 text-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={cn(
                  "mt-auto block rounded-lg py-3 text-center text-base font-bold",
                  program.buttonStyle === "primary" &&
                    "bg-green text-black",
                  program.buttonStyle === "outline-yellow" &&
                    "border-2 border-yellow text-yellow",
                  program.buttonStyle === "outline" &&
                    "border border-border text-white",
                )}
              >
                {program.buttonText}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
