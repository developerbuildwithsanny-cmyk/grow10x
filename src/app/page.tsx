import { BuilderSystem } from "@/components/BuilderSystem";
import { DomainCourses } from "@/components/DomainCourses";
import { FAQ } from "@/components/FAQ";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journal } from "@/components/Journal";
import { Navbar } from "@/components/Navbar";
import { Programs } from "@/components/Programs";
import { Roadmap } from "@/components/Roadmap";
import { StatsBar } from "@/components/StatsBar";
import { Testimonials } from "@/components/Testimonials";
import { WhoAreYouBecoming } from "@/components/WhoAreYouBecoming";
import { WhyNeverLaunch } from "@/components/WhyNeverLaunch";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <WhoAreYouBecoming />
        <DomainCourses />
        <WhyNeverLaunch />
        <BuilderSystem />
        <Roadmap />
        <FeaturedVideo />
        <Testimonials />
        <Journal />
        <StatsBar />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
