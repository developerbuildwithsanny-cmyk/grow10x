import { ChevronDownIcon, Container, SectionHeading } from "@/components/ui";
import { faqItems } from "@/lib/data";

export function FAQ() {
  return (
    <section className="bg-dark px-6 py-24 lg:px-64">
      <Container className="flex flex-col gap-16">
        <SectionHeading className="text-center">
          Still Thinking? <span className="text-green">Let&apos;s Clear It.</span>
        </SectionHeading>
        <div className="flex flex-col gap-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-border bg-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 [&::-webkit-details-marker]:hidden">
                <span className="font-heading text-lg font-bold text-white">
                  {item.question}
                </span>
                <ChevronDownIcon className="text-white transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-border px-6 pb-6 pt-4">
                <p className="text-sm leading-6 text-muted">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
