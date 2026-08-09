import Image from "next/image";
import { CountdownTimer } from "@/components/CountdownTimer";
import { HeroHeadline } from "@/components/HeroHeadline";
import {
  ActivityIcon,
  ArrowRightIcon,
  Container,
} from "@/components/ui";
import { heroStats, liveActivities } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-[linear-gradient(147deg,var(--color-hero-green-start)_0%,var(--color-hero-green-end)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <Container className="relative">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
          <div className="flex flex-1 flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red" />
              <p className="font-mono text-sm font-bold text-white">
                <CountdownTimer />
              </p>
            </div>
            <HeroHeadline />
            <div className="grid max-w-md grid-cols-2 gap-4 py-2">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <p className="font-heading text-2xl font-bold leading-8 text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium leading-5 text-white/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#programs"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-8 py-4"
            >
              <span className="font-heading text-lg font-bold text-[#006E26]">
                Choose Your Path
              </span>
              <ArrowRightIcon className="text-[#006E26]" />
            </a>
          </div>

          <div className="relative w-full max-w-[592px] flex-1">
            <div className="relative rounded-xl border border-border bg-black p-6 shadow-card">
              <div className="absolute -right-3 -top-3 rounded-full bg-coral px-3 py-1">
                <span className="text-xs font-bold text-white">LIVE</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <ActivityIcon className="text-green" />
                <h3 className="font-heading text-xl font-bold text-white">
                  Live Activity
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {liveActivities.map((activity, i) => (
                  <div
                    key={activity.name}
                    className={`flex items-center gap-3 ${
                      i < liveActivities.length - 1
                        ? "border-b border-border pb-3"
                        : ""
                    }`}
                  >
                    <Image
                      src={activity.avatar}
                      alt={activity.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border border-border object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-white">
                        {activity.name}{" "}
                        <span className="font-normal">
                          {activity.action}
                        </span>
                      </p>
                      <p className="text-xs text-muted">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
