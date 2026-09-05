import type { Metadata } from "next";
import { BlogPageContent } from "@/components/BlogPageContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeNavbar } from "@/components/home/HomeNavbar";

export const metadata: Metadata = {
  title: "Blog & Journal — 10xAISchool",
  description:
    "Explore guides, tutorials, and case studies about building, launching, and scaling AI products from real developers.",
};

export default function BlogPage() {
  return (
    <>
      <HomeNavbar />
      <main>
        <BlogPageContent />
      </main>
      <Footer />
    </>
  );
}
