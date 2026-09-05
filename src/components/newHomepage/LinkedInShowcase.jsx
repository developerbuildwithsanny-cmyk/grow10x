import { linkedinPosts, linkedinShowcaseThemes } from "./linkedinPosts";

const frameClass =
  "h-[520px] w-full border-0 bg-white sm:h-[560px] lg:h-[610px]";

function LinkedInPost({ url, index, featured = false }) {
  return (
    <article
      className={`overflow-hidden rounded-[20px] border border-white/10 bg-[#24211e] shadow-[0_20px_60px_rgba(0,0,0,0.22)] ${
        featured ? "lg:row-span-2" : ""
      }`}
    >
      <iframe
        src={url}
        title={`LinkedIn community post ${index + 1}`}
        className={featured ? frameClass : "h-[480px] w-full border-0 bg-white"}
        loading={index === 0 ? "eager" : "lazy"}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </article>
  );
}

function ShowcaseTheme({ label, title, description, tone }) {
  const toneClasses = {
    blue: "bg-blue-500/15 text-blue-400",
    green: "bg-emerald-500/15 text-emerald-400",
    orange: "bg-[#f36f21]/15 text-[#ff7135]",
  };

  return (
    <article className="flex min-h-[132px] flex-col justify-between rounded-[14px] border border-white/[0.06] bg-[#1d1b19] px-5 py-5 sm:min-h-[148px] sm:px-6 sm:py-6">
      <span
        className={`w-fit rounded-full px-2.5 py-1 font-figtree text-[11px] font-bold tracking-[0.08em] ${toneClasses[tone]}`}
      >
        {label}
      </span>
      <div className="mt-6">
        <h3 className="font-outfit text-base font-semibold leading-tight text-white sm:text-lg">
          {title}
        </h3>
        <p className="mt-2 font-figtree text-xs leading-relaxed text-white/45 sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}

export function LinkedInShowcase() {
  const showcasePosts = linkedinPosts;

  return (
    <section className="relative overflow-hidden bg-[#fbe3d0] px-0 py-10 text-white sm:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute -left-40 top-5 h-80 w-80 rounded-full border border-[#f36f21]/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-48 bottom-0 h-[28rem] w-[28rem] rounded-full border border-[#f36f21]/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <header className="mb-12 max-w-[720px] sm:mb-16">
          <p className="mb-4 font-figtree text-xs font-bold uppercase tracking-[0.22em] text-[#ff7135]">
            The community, in public
          </p>
          <h2 className="font-outfit text-4xl font-[] leading-[1.02] tracking-tight text-[#1B1812] sm:text-5xl lg:text-6xl">
            Real People. Real Builders. Real Progress.
          </h2>
          <p className="mt-5 max-w-[600px] font-figtree text-base leading-relaxed text-[#1B1812] sm:text-lg">
            See what happens when ambitious learners come together to learn,
            build, and grow.
          </p>
        </header>

        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {showcasePosts.slice(0, 6).map((url, index) => (
            <LinkedInPost key={url} url={url} index={index} />
          ))}
        </div>

        <div className="my-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {linkedinShowcaseThemes.map((theme) => (
            <ShowcaseTheme key={theme.label} {...theme} />
          ))}
        </div>

        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {showcasePosts.slice(6, 12).map((url, index) => (
            <LinkedInPost key={url} url={url} index={index + 6} />
          ))}
        </div>

        <div className="my-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {linkedinShowcaseThemes.map((theme) => (
            <ShowcaseTheme key={theme.label} {...theme} />
          ))}
        </div>

         <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {showcasePosts.slice(12).map((url, index) => (
            <LinkedInPost key={url} url={url} index={index + 6} />
          ))}
        </div>
      </div>
    </section>
  );
}
