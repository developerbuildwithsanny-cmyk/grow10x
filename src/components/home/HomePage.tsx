import { HomeCommunity } from "@/components/home/HomeCommunity";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { HomeStatsBar } from "@/components/home/HomeStatsBar";

export function HomePage() {
  return (
    <div className="min-h-full bg-white">
      <HomeNavbar />
      <main>
        <HomeHero />
        <HomeStatsBar />
        <HomeCommunity />
      </main>
      <HomeFooter />
    </div>
  );
}
