import type { Metadata } from "next";
import { BlogPageContent } from "@/components/BlogPageContent";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { HomeFooter } from "@/components/home/HomeFooter";

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
      <HomeFooter />
    </>
  );
}
