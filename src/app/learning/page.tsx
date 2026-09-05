import type { Metadata } from "next";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { LearningPageContent } from "@/components/LearningPageContent";
import { Footer } from "@/components/Footer";
import { HomeNavbar } from "@/components/home/HomeNavbar";

export const metadata: Metadata = {
  title: "AI School Curriculum — 10xAISchool",
  description:
    "Master GenAI, LLMs, RAG & Agentic AI with industry-focused training, real-world projects, and placement support.",
};

export default function LearningPage() {
  return (
    <>
      {/* <Navbar /> */}
            <HomeNavbar />
      

      <main>
        <LearningPageContent />
      </main>
      <HomeFooter />
    </>
  );
}
