import Image from "next/image";
import Link from "next/link";

export function HomeCommunity() {
  return (
    <section
      id="community"
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden lg:h-[500px]"
    >
      <Image
        src="/home_page_images/community-background.png"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center gap-6 px-5 py-16 text-center sm:px-8">
        <h2 className="font-outfit text-3xl font-black text-white sm:text-4xl lg:text-[44px] lg:leading-tight">
          Join India&apos;s Fastest Growing Coding Community
        </h2>
        <p className="font-figtree text-lg leading-[1.5] text-white/80">
          Our vibrant tech forums, active discord servers, and hackathons
          connect you directly with tech leads and fellow learners instantly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <Link
            href="#programs"
            className="rounded-[30px] bg-brand px-8 py-4 font-outfit text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Explore Forums
          </Link>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-[30px] border-2 border-brand px-8 py-4 font-outfit text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}
