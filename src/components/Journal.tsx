import {
  ArrowRightIcon,
  Container,
  SectionHeading,
  SectionLabel,
} from "@/components/ui";
import { journalPosts } from "@/lib/data";

export function Journal() {
  return (
    <section id="journal" className="bg-black py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>THE JOURNAL</SectionLabel>
          <SectionHeading>
            From Our <span className="text-green">Journal</span>
          </SectionHeading>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {journalPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="flex h-[180px] items-center justify-center bg-card-alt">
                <span className="text-4xl text-border">📄</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`rounded bg-border px-2 py-1 font-mono text-xs ${post.categoryColor}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">{post.date}</span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold leading-7 text-white">
                  {post.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-5 text-muted">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white"
                >
                  Read More
                  <ArrowRightIcon className="h-2.5 w-2.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
