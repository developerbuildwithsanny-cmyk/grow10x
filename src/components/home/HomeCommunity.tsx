import Image from "next/image";
import Link from "next/link";

export function HomeCommunity() {
  return (
    <section
      id="community"
      className="relative flex min-h-[280px] items-center justify-center overflow-hidden py-10 sm:py-12 lg:h-[340px]"
    >
      <Image
        src="/home_page_images/community-background.png"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center gap-4 px-5 py-6 text-center sm:gap-5 sm:px-8">
        <h2 className="font-outfit text-2xl font-black text-white sm:text-3xl lg:text-[38px] lg:leading-tight">
          Join India&apos;s Fastest Growing Coding Community
        </h2>
        <p className="font-figtree text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
          Our vibrant tech forums, active discord servers, and hackathons
          connect you directly with tech leads and fellow learners instantly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:gap-4 sm:pt-3">
          <Link
            href="#programs"
            className="rounded-[30px] bg-gradient-to-r from-[#e84975] to-[#ff8541] px-6 py-2.5 sm:px-8 sm:py-3 font-outfit text-sm sm:text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Explore Programs
          </Link>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-[30px] border-2 border-brand px-6 py-2.5 sm:px-8 sm:py-3 font-outfit text-sm sm:text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Join EcoSystem
          </a>
        </div>
      </div>
    </section>
  );
}
