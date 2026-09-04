import Image from "next/image";
import Link from "next/link";

const aiTools = [
  { name: "ChatGPT", icon: "/images/tools/chatgpt.svg" },
  { name: "Claude", icon: "/images/tools/claude.svg" },
  { name: "Cursor", icon: "/images/tools/cursor.svg" },
  { name: "Perplexity", icon: "/images/tools/perplexity.svg" },
  { name: "Midjourney", icon: "/images/tools/midjourney.svg" },
  { name: "n8n", icon: "/images/tools/n8n.svg" },
  { name: "Make", icon: "/images/tools/make.svg" },
  { name: "Bolt", icon: "/images/tools/bolt.svg" },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[620px] lg:h-[calc(100vh-68px)] items-center overflow-hidden py-12 lg:py-0">
      <Image
        src="/home_page_images/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center text-center px-5 py-6 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[860px] flex-col items-center justify-center text-center gap-6 sm:gap-7">
          <div className="inline-flex w-fit mx-auto rounded-full border border-white/27 bg-white/13 px-4 py-1.5">
            <p className="font-outfit text-sm font-bold uppercase text-white">
              🇮🇳 EMPOWERING INDIA&apos;S NEXT 1000 TECH LEADERS
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <h1 className="font-outfit text-4xl font-black leading-[1.15] bg-gradient-to-r from-[#e84975] to-[#ff8541] bg-clip-text text-transparent text-center sm:text-5xl lg:text-[56px]">
              Build Your Future with AI &amp; Coding
            </h1>
            <p className="mx-auto max-w-[720px] font-figtree text-lg leading-[1.5] text-white/85 text-center sm:text-xl">
              India&apos;s premium live-cohort coding bootcamp. Master
              industry-grade Full-Stack, AI integration, and core computational
              thinking alongside 1000 aspiring software engineers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
            <Link
              href="/requestcallback?source=Hero - Start Learning Free"
              className="rounded-[30px] bg-gradient-to-r from-[#e84975] to-[#ff8541] px-8 py-3.5 font-outfit text-base font-bold text-white transition-opacity hover:opacity-90 shadow-lg"
            >
              Start Learning
            </Link>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 font-outfit text-base font-bold text-white transition-opacity hover:opacity-80"
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

          {/* AI Tools Icon Set Section */}
          <div className="mt-2 sm:mt-4 flex flex-col items-center justify-center text-center gap-3.5 mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex size-11 sm:size-13 items-center justify-center rounded-xl sm:rounded-2xl bg-white/95 p-2 shadow-md backdrop-blur transition-all group-hover:bg-white group-hover:shadow-lg">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={30}
                      height={30}
                      className="size-6 sm:size-7 object-contain"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-tight text-white/90">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-outfit text-lg sm:text-xl font-extrabold tracking-wide text-white text-center">
              Build the brand, Land the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
