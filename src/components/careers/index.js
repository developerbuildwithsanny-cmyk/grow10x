import { CareersHero } from "@/components/careers/CareersHero";
import { ProgramSection } from "@/components/careers/ProgramSection";
import { WhyChooseUs } from "@/components/careers/WhyChooseUs";
import { ExpertCTA } from "@/components/careers/ExpertCTA";
import programsData from "@/data/programs.json";

export default function Careers() {
  return (
    <>
      <CareersHero />
      <ProgramSection programs={programsData} />
      <WhyChooseUs />
      <ExpertCTA />
    </>
  );
}