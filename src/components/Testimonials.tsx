import {
  Container,
  LinkedInIcon,
  SectionHeading,
  SectionLabel,
  StarIcon,
} from "@/components/ui";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="bg-dark py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>MEMBER STORIES</SectionLabel>
          <SectionHeading>
            What Our <span className="text-green">Members</span> Say
          </SectionHeading>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col gap-4 rounded-xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full font-heading text-xl font-bold",
                    item.avatarBg,
                    item.avatarColor,
                  )}
                >
                  {item.initials}
                </div>
                <div className="flex-1">
                  <h4 className="font-heading text-base font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
                <LinkedInIcon className="text-[#0077B5]" />
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="text-yellow" />
                ))}
              </div>
              <p className="text-base leading-6 text-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <span className="inline-block rounded bg-border px-2 py-1 font-mono text-xs text-white">
                  {item.program}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
