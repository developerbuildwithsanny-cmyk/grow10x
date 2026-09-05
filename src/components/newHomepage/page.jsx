"use client";

import { useState } from "react";
import { joinUrl, reelUrl } from "./homeData";
import {
  FounderSection,
  HeroSection,
  IncludedSection,
  JobReadySection,
  PathsDiagram,
  QuoteBand,
} from "./Sections";
import { LinkedInShowcase } from "./LinkedInShowcase";
import { ProfileFooter } from "./ProfileFooter";

import {
  BeyondCurriculumSection,
  AudienceSection,
  FinalCtaSection,
} from "@/components/home/landing";

const wrap = "mx-auto w-full max-w-[1120px] px-6 md:px-8";

function SectionIntro({ title, children, centered = false }) {
  return (
    <div
      className={`mb-10 max-w-[640px] ${centered ? "mx-auto text-center" : ""}`}
    >
      <h2 className="mb-[18px] text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.15] tracking-[-0.02em]">
        {title}
      </h2>
      <p className="m-0 text-[18px] text-[#6e6252]">{children}</p>
    </div>
  );
}

function FounderNote() {
  return (
    <div className="grid gap-12 md:grid-cols-[.9fr_1.1fr] md:gap-16">
      <div>
        <h2 className="mb-5 text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em]">
          Why this exists
        </h2>
        <p className="mb-5 text-[17px] text-[#6e6252]">
          This didn&apos;t start as a business plan. It started as a pattern I
          kept seeing - talented students, held back not by ability, but by cost
          and access.
        </p>
        <p className="font-bold">
          Chaitanya
          <span className="mt-0.5 block text-sm font-medium text-[#6e6252]">
            AI Engineering and Agentic AI Trainer · Co-Founder, 10xAISchool
          </span>
        </p>
      </div>
      <div>
        <p className="mb-5 text-[17px]">
          College gives you a degree. Industry expects skills.
          But most students graduate without knowing what to learn, which roles to apply for, 
          or how to build a career. <b>We are building the bridge</b>. Our goal is simple: help 
          students understand the industry, build the right skills, and become career-ready before they graduate.


        </p>
        <p className="mb-5 text-[17px]">
         <i>From degree to direction. From learning to building.
        <br/>This is why 10xAISchool exists.
         </i>
        </p>
        <p className="mb-5 text-[17px] text-[#6e6252]">
         For Full explaination, Watch 👇 this reel.     
        </p>
      </div>
    </div>
  );
}

function JoinSection() {
  const [revealed, setRevealed] = useState(false);
  return (
    <section id="join" className="bg-[#f2e6d0] px-0 py-[100px] text-center">
      <div className={wrap}>
        <SectionIntro title="Ready to join?" centered>
          Job-ready or founder track, mentorship, mocks, the internship -
          everything above, for one flat price.
        </SectionIntro>
        <button
          type="button"
          onClick={() => setRevealed((value) => !value)}
          aria-label="Tap to reveal the price"
          className="mb-9 inline-flex flex-col items-center border-0 bg-transparent p-2 text-[#1b1812]"
        >
          <span className="mb-4 text-sm font-semibold text-[#6e6252]">
            Tap to reveal the price
          </span>
          <strong
            className={`text-[clamp(48px,8vw,84px)] leading-none tracking-[-0.03em] transition-[filter] duration-500 ${revealed ? "blur-0" : "blur-[18px]"}`}
          >
            <sup className="text-[.32em] text-[#6e6252]">
                
                </sup> 
          </strong>
        </button>
        <a
          href={joinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-[#e8672e] px-[30px] py-[15px] text-base font-bold text-white transition hover:bg-[#d1541f]"
        >
          Join our ecosystem
        </a>
      </div>
    </section>
  );
}

function ReelCard() {
  return (
    <a
      id="story"
      href={reelUrl}
      target="_blank"
      rel="noreferrer"
      className="mx-auto mt-10 flex max-w-[580px] items-center gap-4 rounded-[22px] bg-[#1b1812] px-[22px] py-6 text-[#fbf5ea] transition hover:-translate-y-0.5 hover:bg-[#2b241c] md:mt-[52px] md:gap-[22px] md:px-8 md:py-7"
    >
      <span className="grid h-[50px] w-[50px] flex-none place-items-center rounded-full bg-[#e8672e] md:h-[60px] md:w-[60px]">
        ▶
      </span>
      <span>
        <strong className="block text-xl">Watch the reel</strong>
        <small className="block text-[14.5px] text-[#cbc0ac]">
          Why 10xAISchool exists - on Instagram
        </small>
      </span>
    </a>
  );
}

export default function HomePage() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#fbf5ea] font-sans leading-[1.6] text-[#1b1812] [font-family:Manrope,sans-serif] [&_*]:box-border"
    >
      <main>
        <HeroSection />
        <QuoteBand>
          Your degree ends at graduation. What you build never does.
        </QuoteBand>
        <section id="job-tracks" className="px-0 py-[70px]">
          <div className={wrap}>
            <SectionIntro title="Everyone starts the same way. Then you choose your path.">
              Every student begins with one shared foundation. From there, the
              system splits into two directions - become genuinely
              industry-ready, or start building something of your own,
              part-time, alongside it.
            </SectionIntro>
            <PathsDiagram />
            <JobReadySection />
          </div>
        </section>
        <QuoteBand>
          You don&apos;t need permission to start a company. You need one real
          problem, and the will to solve it.
        </QuoteBand>
        <section id="founder-track" className="bg-[#f2e6d0] px-0 py-[70px]">
          <div className={wrap}>
            <SectionIntro title="Path two - Build your own thing">
              Run this part-time, alongside everything else. It&apos;s a plain
              framework for turning a real problem into a product people
              actually pay for - no funding, no team, and no computer-science
              degree required to start.
            </SectionIntro>
            <FounderSection />
          </div>
        </section>
        <QuoteBand>
          AI didn&apos;t remove the need for skill. It removed the excuse for
          not having it.
        </QuoteBand>
        <section id="included" className="px-0 py-[80px]">
          <div className={wrap}>
            <SectionIntro title="Everyone gets everything. No tiers, no add-ons.">
              No prior experience preferred. If you&apos;re willing to show up,
              this is built for you.
            </SectionIntro>
            <IncludedSection />
          </div>
        </section>
        <section id="about" className="bg-[#f2e6d0] px-0 py-[100px]">
          <div className={wrap}>
            <FounderNote />
            <ReelCard />
          </div>
        </section>
       
      


        <BeyondCurriculumSection />
        <AudienceSection />
        <LinkedInShowcase />


         
        <FinalCtaSection />
      </main>
      <ProfileFooter />
    </div>
  );
}
