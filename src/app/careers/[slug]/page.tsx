import { notFound } from "next/navigation";
import { Metadata } from "next";
import programsData from "@/data/programs.json";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/careers/ProgramHero";
import { ToolsTechnologies } from "@/components/careers/ToolsTechnologies";
import { RoadmapSection } from "@/components/careers/RoadmapSection";
import { ProjectsSection } from "@/components/careers/ProjectsSection";
import { JobInsights } from "@/components/careers/JobInsights";
import { CompaniesHiring } from "@/components/careers/CompaniesHiring";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: "Program Not Found | 10xAISchool",
    };
  }

  return {
    title: `${program.title} ${program.programTitle} | 10xAISchool`,
    description: program.description,
  };
}

export async function generateStaticParams() {
  return programsData.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen text-black font-body">
      <div className="bg-black text-white">
        <Navbar />
      </div>

      <main>
        {/* Hero Section — first section of the program detail page */}
        <ProgramHero program={program} />

        {/* Tools & Technologies marquee — common for all programs */}
        <ToolsTechnologies />

        {/* Roadmap / Learning Path */}
        <RoadmapSection slug={program.slug} />

        {/* Projects / Portfolio Build */}
        <ProjectsSection slug={program.slug} />

        {/* Job Insights */}
        <JobInsights slug={program.slug} />

        {/* Companies Hiring */}
        <CompaniesHiring slug={program.slug} />

        {/* Future sections will be added here one by one */}
      </main>

      <div className="bg-black text-white">
        <Footer />
      </div>
    </div>
  );
}
