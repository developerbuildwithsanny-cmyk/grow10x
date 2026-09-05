import type { Metadata } from "next";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { InnovationsPageContent } from "@/components/InnovationsPageContent";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "Student Innovations — 10xAISchool",
  description:
    "Explore real-world projects and AI tools built by 10xAISchool students—from design to deployment.",
};

export default function InnovationsPage() {
  return (
    <>
      <HomeNavbar />
      <main>
        <InnovationsPageContent />
      </main>
      {/* <HomeFooter /> */}
    </>
  );
}
