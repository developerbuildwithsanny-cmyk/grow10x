import { Container, SectionHeading } from "@/components/ui";
import { painPoints } from "@/lib/data";

export function WhyNeverLaunch() {
  return (
    <section className="bg-black py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading className="text-center">
          Why Most People Never Launch{" "}
          <span className="text-green">AI Products</span>
        </SectionHeading>
        <div className="grid gap-8 lg:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-border bg-card px-8 pb-14 pt-8"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-coral">
                <span className="text-lg text-white">!</span>
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold leading-7 text-white">
                {point.title}
              </h3>
              <p className="text-base leading-6 text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
