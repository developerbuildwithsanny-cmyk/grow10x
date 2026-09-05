import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GitBranch, GraduationCap } from "lucide-react";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { open_sans } from "@/shared/styles/font";

const journeyHighlights = [
  {
    value: "4 + 1",
    label: "Months training + internship",
    icon: GraduationCap,
  },
  {
    value: "6+",
    label: "Real projects to build your portfolio",
    icon: BriefcaseBusiness,
  },
  {
    value: "2",
    label: "Career paths to choose from",
    icon: GitBranch,
  },
];

export function FinalCtaSection() {
  return (
    <SectionShell
      id="apply"
      className="relative overflow-hidden border-b border-white/10 bg-[#171513] py-14 text-white sm:py-16 lg:py-20"
      innerClassName="relative flex flex-col items-center gap-5 text-center lg:px-48"
      style={{
        background:
          "radial-gradient(circle at 12% 50%, rgba(243,111,33,.10), transparent 26%), radial-gradient(circle at 88% 50%, rgba(243,111,33,.08), transparent 28%), #171513",
      }}
    >
      <p className="max-w-full text-center font-figtree text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f36f21] sm:text-xs sm:tracking-[0.22em]">
        Join India&apos;s AI builders community
      </p>
      <h2 className="w-full max-w-[340px] text-center font-heading text-[32px] font-semibold leading-[1.08] tracking-tight text-white sm:max-w-4xl sm:text-5xl sm:leading-[1.05] lg:text-6xl">
        Don&apos;t just learn AI. Build your future.
      </h2>
      <p className="w-full max-w-[340px] text-center text-[15px] leading-6 text-white/65 sm:max-w-2xl sm:text-lg sm:leading-7">
        Build your brand, become job-ready, and learn with people who are
        turning practical skills into real projects and career opportunities.
      </p>

      <div className="grid w-full max-w-[340px] grid-cols-1 gap-4 pt-3 sm:max-w-2xl sm:grid-cols-3 sm:gap-6 sm:pt-4">
        {journeyHighlights.map(({ value, label, icon: Icon }) => (
          <div key={value} className="flex items-center justify-start gap-4 text-left sm:flex-col sm:justify-center sm:gap-2 sm:text-center">
            <Icon className="size-7 shrink-0 text-[#f36f21]" strokeWidth={1.7} />
            <div>
              <p className="font-outfit text-xl font-bold leading-none text-[#f36f21]">{value}</p>
              <p className="mt-1 max-w-[250px] font-figtree text-xs leading-5 text-white/60">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full pt-3 sm:w-auto">
        <Link
          href="/requestcallback?source=Landing - Apply Now"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-lg bg-Vivid_Tangelo px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#d95717] sm:w-auto ${open_sans.className}`}
        >
          <span>Start Your Journey</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </SectionShell>
  );
}
