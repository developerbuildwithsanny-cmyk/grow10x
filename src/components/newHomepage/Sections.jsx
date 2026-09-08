import {
  founderSteps,
  includedItems,
  jobReadyMilestones,
  socials,
  supportItems,
} from "./homeData";

const wrap = "mx-auto w-full max-w-[1120px] px-6 md:px-8";
const muted = "text-[#6e6252]";

export function HeroSection() {
  return (
    <section className="px-0 pb-[72px] pt-14">
      <div className={wrap}>
        <p className="mb-[13px] inline-block rounded-full bg-[#e8672e] px-3 md:px-5 py-[4px] md:py-[9px] text-[14.5px] font-extrabold text-white">
          Not an institute. A bridge, built for the AI era
        </p>
        <h1 className="mb-[13px] max-w-[920px] text-[clamp(38px,6vw,68px)] font-extrabold leading-[1.06] tracking-[-0.025em]">
          Build Your Brand.{" "}
          <em className="not-italic text-[#e8672e]">Land Your Job.</em>
        </h1>
        <p className={`${muted} mb-10 max-w-[560px] text-[19px]`}>
          10xAISchool is a 4.5-month, real-industry system that connects
          where college leaves off to where the industry actually begins - no
          prior experience or coding background required.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/requestcallback?source=Homepage - Join Community"
            // target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#e8672e] px-[30px] py-[15px] text-base font-bold text-white transition hover:bg-[#d1541f]"
          >
            Join our ecosystem
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full border border-[#e4d6bb] px-[30px] py-[15px] text-base font-bold transition hover:border-[#1b1812] hover:bg-white"
          >
            Watch why I built this <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-16 flex flex-wrap gap-9 border-t border-[#e4d6bb] pt-10 md:gap-16">
          {[
            ["4.5 months", "of hands-on, industry-style training"],
            ["+1 month", "real internship, not a certificate exercise"],
            ["2 paths", "job-ready or founder - you choose"],
            ["No", "prior experience or knowledge required"],
          ].map(([value, label]) => (
            <div key={value} className="flex flex-col">
              <strong className="text-[32px] leading-tight tracking-[-0.02em]">
                {value}
              </strong>
              <span className={`${muted} max-w-40 text-sm`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteBand({ children }) {
  return (
    <section className="bg-[#fbe3d0] px-0 py-10 text-center">
      <div className={wrap}>
        <blockquote className="mx-auto max-w-[850px] text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.35] tracking-[-0.015em]">
          {children}
          <cite
            className={`mt-[22px] block text-[15px] font-medium not-italic ${muted}`}
          >
            - 10xAISchool
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

export function PathsDiagram() {
  return (
    <div
      className="mx-auto mb-[52px] max-w-[820px]"
      role="img"
      aria-label="Shared foundation splitting into the Job-Ready and Founder Track paths"
    >
      <svg
        viewBox="0 0 900 320"
        aria-hidden="true"
        className="block h-auto w-full overflow-visible"
      >
        <path
          d="M450 26 L450 108"
          fill="none"
          stroke="#1b1812"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-[draw_1.2s_ease_both]"
        />
        <path
          d="M450 108 C450 174 198 148 198 276"
          fill="none"
          stroke="#e8672e"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-[draw_1.2s_ease_both]"
        />
        <path
          d="M450 108 C450 174 702 148 702 276"
          fill="none"
          stroke="#e8672e"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-[draw_1.2s_ease_both]"
        />
        <circle cx="450" cy="26" r="7" fill="#1b1812" />
        <text
          x="450"
          y="14"
          textAnchor="middle"
          fill="#6e6252"
          fontFamily="Manrope, sans-serif"
          fontSize="26.5"
          fontWeight="600"
        >
          Shared foundation
        </text>
        <circle cx="198" cy="276" r="9" fill="#e8672e" />
        <circle cx="702" cy="276" r="9" fill="#e8672e" />
        <text
          x="198"
          y="310"
          textAnchor="middle"
          fill="#1b1812"
          fontFamily="Manrope, sans-serif"
          fontSize="22.5"
          fontWeight="800"
        >
          Job-Ready
        </text>
        <text
          x="702"
          y="310"
          textAnchor="middle"
          fill="#1b1812"
          fontFamily="Manrope, sans-serif"
          fontSize="22.5"
          fontWeight="800"
        >
          Founder Track
        </text>
      </svg>
    </div>
  );
}

export function JobReadySection() {
  return (
    <div className="mb-0">
      <center><div className="mb-9 flex flex-col gap-2">
        <h1 className="m-0 whitespace-nowrap text-[26px] md:text-[48px] font-extrabold leading-tight">
          Path One - <span className="bg-[#e8672e] text-white px-2 py-1 rounded">Job-Ready</span>
        </h1>
        <span className={`block text-[15px] leading-6 ${muted}`}>
          For the student who wants to walk into a company already knowing how
          one runs
        </span>
      </div>
      </center>
      <div className="ml-2 border-l-2 border-[#e4d6bb]">
        {jobReadyMilestones.map(([title, body]) => (
          <div
            key={title}
            className="relative pb-[34px] pl-8 last:pb-0 before:absolute before:-left-[7px] before:top-1 before:h-3 before:w-3 before:rounded-full before:border-2 before:border-[#e8672e] before:bg-[#fbf5ea] before:content-['']"
          >
            <h4 className="mb-1.5 text-[17px] font-bold">{title}</h4>
            <p className={`m-0 max-w-[560px] text-[15.5px] ${muted}`}>{body}</p>
          </div>
        ))}
        <div className="relative pl-8 before:absolute before:-left-[7px] before:top-1 before:h-3 before:w-3 before:rounded-full before:border-2 before:border-[#e8672e] before:bg-[#fbf5ea] before:content-['']">
          <h4 className="mb-1.5 text-[17px] font-bold">
            Domain specialization - pick your depth
          </h4>
          <p className={`m-0 max-w-[560px] text-[15.5px] ${muted}`}>
            Two directions, both built for where hiring is actually heading:
          </p>
          <div className="mt-3 grid gap-5 md:grid-cols-2">
            {[
              [
                "AI / ML track",
                "Machine Learning → Computer Vision → Deep Learning → Generative AI → Agentic AI → MLOps",
              ],
              [
                "Full-stack track",
                "Python full-stack → Generative AI → Agentic AI → Microservices → Security layer",
              ],
            ].map(([name, path]) => (
              <div
                key={name}
                className="rounded-2xl border border-[#e4d6bb] bg-white px-5 py-[18px]"
              >
                <b className="text-[12.5px] text-[#e8672e]">{name}</b>
                <p className="mt-2 text-[14.5px] text-[#1b1812]">{path}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={`mb-1 mt-14 text-sm font-bold ${muted}`}>
        The support layer, running the whole way through
      </p>
      <div className="grid overflow-hidden rounded-[20px] border border-[#e4d6bb] bg-[#e4d6bb] sm:grid-cols-2 lg:grid-cols-4">
        {supportItems.map(([title, body]) => (
          <div key={title} className="bg-[#fbf5ea] px-6 py-[26px]">
            <h4 className="mb-1.5 text-[15.5px] font-bold">{title}</h4>
            <p className={`m-0 text-[13.5px] leading-[1.5] ${muted}`}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FounderSection() {
  return (
    <div className="flex flex-col">
      {founderSteps.map(([tag, title, body]) => (
        <div
          key={tag}
          className="grid grid-cols-[100px_1fr] gap-6 border-t border-[#e4d6bb] py-4 first:border-t md:grid-cols-[140px_1fr] last:border-b"
        >
          <span className="pt-0.5 text-[13.5px] font-bold text-[#e8672e]">
            {tag}
          </span>
          <div>
            <h3 className="mb-1 text-[17px] font-bold">{title}</h3>
            <p className={`m-0 text-[15.5px] ${muted}`}>{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function IncludedSection() {
  return (
    <div className="border-t border-[#e4d6bb] pt-10">
      <div className="mx-auto grid max-w-[680px] gap-x-12 gap-y-3.5 md:grid-cols-2">
        {includedItems.map((item) => (
          <div
            key={item}
            className="relative pl-[22px] text-[15.5px] before:absolute before:left-0 before:top-[9px] before:h-2 before:w-2 before:rounded-full before:bg-[#e8672e] before:content-['']"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialSection() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col gap-3.5 rounded-[20px] border border-[#e4d6bb] bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#e8672e]"
        >
          <span className="text-[26px] font-extrabold text-[#e8672e]">
            {social.icon}
          </span>
          <h3 className="m-0 text-base font-bold">{social.name}</h3>
          <p className={`m-0 text-sm ${muted}`}>{social.text}</p>
        </a>
      ))}
    </div>
  );
}
