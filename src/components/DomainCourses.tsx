import { ArrowRightIcon, Container } from "@/components/ui";
import { domains } from "@/lib/data";

export function DomainCourses() {
  return (
    <section className="bg-dark py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.1em] text-yellow">
            LEARN BY DOMAIN
          </p>
          <h2 className="font-heading text-[48px] font-extrabold leading-[48px] text-white">
            AI Courses for <span className="text-green">Every Field</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {domains.map((domain) => (
            <a
              key={domain}
              href="#"
              className="group flex h-[90px] items-center justify-between rounded-xl border border-border bg-card px-6 py-6 transition-colors hover:border-green"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-10">
                  <span className="text-sm text-green">●</span>
                </div>
                <span className="text-base font-bold text-white">
                  {domain}
                </span>
              </div>
              <ArrowRightIcon className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
