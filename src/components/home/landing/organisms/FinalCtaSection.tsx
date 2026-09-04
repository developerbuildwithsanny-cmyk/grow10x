import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/home/landing/atoms/CtaButton";
import { SectionShell } from "@/components/home/landing/atoms/SectionShell";
import { open_sans } from "@/shared/styles/font";

export function FinalCtaSection() {
  return (
    <SectionShell
      id="apply"
      className="border-b border-landing-border bg-landing-cream py-20 lg:py-24"
      innerClassName="flex flex-col items-center gap-6 text-center lg:px-48"
      style={{
        background:
          "linear-gradient(180deg, #FFF1EA 0%, #FFF8F5 55%, #FFF5F1 100%)",
      }}
    >
      <h2 className="max-w-3xl font-heading text-[32px] font-medium leading-none tracking-tight text-landing-ink sm:text-5xl sm:leading-none">
        Ready to turn skills into real outcomes?
      </h2>
      <p className="max-w-2xl text-lg leading-7 text-landing-muted">
        Join our next cohort and acquire interview-tested skills, AI frameworks,
        and client-generating workflows in 4 months.
      </p>
      <div className="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/requestcallback?source=Landing - Apply Now"
          className={`flex items-center justify-center gap-[8.17px] border bg-Vivid_Tangelo text-white rounded-md md:rounded-md p-2 lg:rounded-lg lg:p-2.5 px-6 font-bold ${open_sans.className}`}
        >
          <span>Apply Now</span>
          <div className="flex items-center justify-center size-[16px] xl:size-[17.97px]">
            <ArrowRight className="h-full w-full" />
          </div>
        </Link>
        <CtaButton href="#pillars" variant="secondary">
          Explore Curriculum
        </CtaButton>
      </div>
    </SectionShell>
  );
}
