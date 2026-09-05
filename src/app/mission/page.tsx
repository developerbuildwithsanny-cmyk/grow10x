import type { Metadata } from "next";
import { MissionPageContent } from "@/components/MissionPageContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeNavbar } from "@/components/home/HomeNavbar";

export const metadata: Metadata = {
  title: "Mission — 10xAISchool",
  description:
    "We exist to make AI building accessible to every Indian. Train 1 million builders to launch AI products by 2027.",
};

export default function MissionPage() {
  return (
    <>
      <HomeNavbar />
      <main>
        <MissionPageContent />
      </main>
      {/* <HomeFooter /> */}
    </>
  );
}
