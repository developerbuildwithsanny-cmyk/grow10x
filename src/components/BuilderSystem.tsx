import { CheckIcon, Container, SectionHeading } from "@/components/ui";
import { builderSteps, unlockItems } from "@/lib/data";

export function BuilderSystem() {
  return (
    <section className="bg-black py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading className="text-center">
          Your Step-by-Step{" "}
          <span className="text-green">AI Builder System</span>
        </SectionHeading>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:gap-12">
          <div className="relative flex flex-1 flex-col gap-8">
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-border" />
            {builderSteps.map((item) => (
              <div key={item.step} className="relative flex gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-black bg-green">
                  <span className="font-heading text-base font-bold text-black">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1 rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-2 font-heading text-xl font-bold leading-7 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-5 text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex-1 rounded-xl border border-border bg-card p-8 shadow-card">
            <h3 className="mb-6 font-heading text-2xl font-bold leading-8 text-white">
              What You&apos;ll Unlock
            </h3>
            <ul className="mb-8 flex flex-col gap-4">
              {unlockItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon className="text-green" />
                  <span className="text-base leading-6 text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#programs"
              className="block rounded bg-green px-6 py-4 text-center font-heading text-lg font-bold text-black"
            >
              Start Building Now
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
