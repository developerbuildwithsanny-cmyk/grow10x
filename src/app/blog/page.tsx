import type { Metadata } from "next";
import { BlogPageContent } from "@/components/BlogPageContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog & Journal — Grow10X",
  description:
    "Explore guides, tutorials, and case studies about building, launching, and scaling AI products from real developers.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogPageContent />
      </main>
      <Footer />
    </>
  );
}
