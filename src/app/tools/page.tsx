import type { Metadata } from "next";
import { ToolsPageContent } from "@/components/ToolsPageContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeNavbar } from "@/components/home/HomeNavbar";

export const metadata: Metadata = {
  title: "AI Tools Directory — 10xAISchool",
  description:
    "Curated AI tools every builder needs. Search and filter by Build, Design, Research, Productivity, and No-Code.",
};

export default function ToolsPage() {
  return (
    <>
         <HomeNavbar />
 
      <main>
        <ToolsPageContent />
      </main>
      <Footer />
    </>
  );
}
