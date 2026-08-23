import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { LearningPageContent } from "@/components/LearningPageContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI School Curriculum — 10xAISchool",
  description:
    "Master GenAI, LLMs, RAG & Agentic AI with industry-focused training, real-world projects, and placement support.",
};

export default function LearningPage() {
  return (
    <>
      <Navbar />
      <main>
        <LearningPageContent />
      </main>
      <Footer />
    </>
  );
}
