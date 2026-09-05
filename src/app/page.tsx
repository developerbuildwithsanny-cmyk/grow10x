import HomePage from "@/components/newHomepage/page";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { HomeFooter } from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <div className="min-h-full bg-white">
      <HomeNavbar />
      <main>
        <HomePage />
      </main>
      {/* <HomeFooter /> */}
    </div>
  );
}
