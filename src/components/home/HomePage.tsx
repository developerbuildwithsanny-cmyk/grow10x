import { HomeCommunity } from "@/components/home/HomeCommunity";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { HomePrograms } from "@/components/home/HomePrograms";
import { HomeStatsBar } from "@/components/home/HomeStatsBar";
import { HomeWhyChooseUs } from "@/components/home/HomeWhyChooseUs";
import { EcosystemSlide } from "@/components/home/EcosystemSlide";
import { SuccessStories } from "@/components/home/SuccessStories";
import { HiringPartners } from "@/components/home/HiringPartners";
import { RecognitionDocs } from "@/components/home/RecognitionDocs";
import {
  AiTrackSection,
  AudienceSection,
  BeyondCurriculumSection,
  EightPillarsSection,
  FinalCtaSection,
  PartTimeTracksSection,
  Path01Section,
} from "@/components/home/landing";

export function HomePage() {
  return (
    <div className="min-h-full bg-white">
      <HomeNavbar />
      <main>
        <HomeHero />
        <RecognitionDocs />
        <HomeStatsBar />
        {/* <EcosystemSlide /> */}
        <SuccessStories />
        {/* <HomePrograms /> */}
        <Path01Section />
        <EightPillarsSection />
        <AiTrackSection />
        <PartTimeTracksSection />
        <BeyondCurriculumSection />
        <AudienceSection />
        <HomeWhyChooseUs />
        <HomeCommunity />
        <HiringPartners />
        <FinalCtaSection />
      </main>
      <HomeFooter />
    </div>
  );
}
