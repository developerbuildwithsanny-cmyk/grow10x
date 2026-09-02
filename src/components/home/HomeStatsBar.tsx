import { homeStats } from "@/components/home/homeContent";

export function HomeStatsBar() {
  return (
    <section className="bg-[linear-gradient(90deg,#ff4141_0%,#ff8041_100%)]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-8 px-5 py-8 sm:px-8 lg:grid-cols-4 lg:px-20 lg:py-8">
        {homeStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <p className="font-outfit text-3xl font-black text-white lg:text-4xl">
              {stat.value}
            </p>
            <p className="font-figtree text-xs font-bold uppercase tracking-wide text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
