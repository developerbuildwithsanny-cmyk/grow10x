import { Container, SectionHeading } from "@/components/ui";
import { personas } from "@/lib/data";
import { cn } from "@/lib/utils";

export function WhoAreYouBecoming() {
  return (
    <section id="about" className="bg-white py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading dark className="text-center">
          Who Are You <span className="text-green">Becoming?</span>
        </SectionHeading>
        <div className="grid gap-8 lg:grid-cols-2">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className={cn(
                "flex h-[266px] flex-col justify-between rounded-xl bg-white p-9",
                persona.gradientBorder,
              )}
            >
              <div>
                <h3 className="mb-4 font-heading text-2xl font-bold leading-8 text-black">
                  {persona.title}
                </h3>
                <p className="text-base leading-6 text-gray">
                  {persona.description}
                </p>
              </div>
              <a
                href="#programs"
                className={cn(
                  "inline-flex w-fit rounded-lg px-6 py-3 text-base font-bold",
                  persona.buttonBg,
                  persona.buttonTextColor,
                )}
              >
                {persona.buttonText}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
