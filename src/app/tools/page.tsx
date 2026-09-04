import type { Metadata } from "next";
import { ToolsPageContent } from "@/components/ToolsPageContent";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { HomeFooter } from "@/components/home/HomeFooter";

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
      <HomeFooter />
    </>
  );
}
