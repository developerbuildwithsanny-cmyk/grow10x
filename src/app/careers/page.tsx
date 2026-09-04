import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Careers from "@/components/careers";

export const metadata = {
  title: "Careers & Programs | 10xAISchool",
  description:
    "Industry-focused programs designed with real projects, expert mentorship, and 100% placement support.",
};

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen text-black font-body">
      <Navbar />

      <main>
        <Careers />
      </main>

      <Footer />
    </div>
  );
}