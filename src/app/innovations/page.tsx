import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { InnovationsPageContent } from "@/components/InnovationsPageContent";
import { Footer } from "@/components/Footer";
import { HomeNavbar } from "@/components/home/HomeNavbar";

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
      <Footer />
    </>
  );
}
