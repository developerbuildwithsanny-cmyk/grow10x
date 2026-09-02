import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden lg:h-[700px]">
      <Image
        src="/home_page_images/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20">
        <div className="flex max-w-[760px] flex-col gap-8">
          <div className="inline-flex w-fit rounded-full border border-white/27 bg-white/13 px-4 py-1.5">
            <p className="font-outfit text-sm font-bold uppercase text-white">
              🇮🇳 EMPOWERING INDIA&apos;S NEXT 10,000 TECH LEADERS
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-outfit text-4xl font-black leading-[1.15] text-white sm:text-5xl lg:text-[56px]">
              Build Your Future with AI &amp; Coding
            </h1>
            <p className="max-w-[720px] font-figtree text-lg leading-[1.5] text-white/85 sm:text-xl">
              India&apos;s premium live-cohort coding bootcamp. Master
              industry-grade Full-Stack, AI integration, and core computational
              thinking alongside 10,000 aspiring software engineers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/requestcallback?source=Hero - Start Learning Free"
              className="rounded-[30px] bg-brand px-8 py-4 font-outfit text-base font-bold text-white transition-opacity hover:opacity-90"
            >
              Start Learning Free
            </Link>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 font-outfit text-base font-bold text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4.39011 3.33193C4.24323 3.58574 4.16593 3.87381 4.16602 4.16705V15.8329C4.16593 16.1262 4.24323 16.4143 4.39011 16.6681C4.537 16.9219 4.74826 17.1325 5.00258 17.2785C5.25689 17.4246 5.54525 17.501 5.83855 17.5C6.13184 17.499 6.41967 17.4206 6.67299 17.2729L16.6742 11.4399C16.9263 11.2931 17.1354 11.0827 17.2807 10.8297C17.4259 10.5768 17.5023 10.2901 17.502 9.99845C17.5018 9.70677 17.4249 9.42026 17.2792 9.16756C17.1335 8.91486 16.9241 8.70482 16.6717 8.55843L6.67299 2.72715C6.41967 2.57935 6.13184 2.50101 5.83855 2.50001C5.54525 2.49901 5.25689 2.57541 5.00258 2.72148C4.74826 2.86754 4.537 3.07812 4.39011 3.33193Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Watch Program Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
