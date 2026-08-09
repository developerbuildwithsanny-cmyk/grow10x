import { Container } from "@/components/ui";
import { statsBar } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-black py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statsBar.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 px-4 ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <p className="text-center font-heading text-[36px] font-bold leading-10 text-white lg:text-left">
                {stat.value}
              </p>
              <p className="text-center font-mono text-sm uppercase tracking-[0.1em] text-muted lg:text-left">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
