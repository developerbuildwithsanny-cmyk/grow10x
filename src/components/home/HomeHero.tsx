import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  UsersRound,
} from "lucide-react";

const proofPoints = [
  { value: "10K+", label: "Learners & Growing", icon: Users },
  { value: "Real Skills", label: "Industry Relevant", icon: GraduationCap },
  { value: "Career Support", label: "From Learning to Earning", icon: BriefcaseBusiness },
  { value: "Like-Minded Community", label: "Learn. Build. Grow Together.", icon: UsersRound },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden py-16 sm:min-h-[650px] lg:min-h-[calc(100vh-68px)] lg:py-0">
      <Image
        src="/home_page_images/hero-background.png"
        alt="AI engineers collaborating in a modern workspace"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,8,.94)_0%,rgba(4,7,8,.82)_38%,rgba(4,7,8,.35)_100%)]" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-[1440px] items-center px-5 py-8 sm:px-8 lg:px-20">
        <div className="max-w-[690px]">
          <div className="mb-5 inline-flex rounded-full border border-[#f36f21]/70 bg-black/25 px-4 py-2">
            <p className="font-figtree text-sm font-semibold text-white sm:text-base">
              🚀 India&apos;s AI Builders Community
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-outfit text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Build Real AI Skills.
              <br />
              Get Job-Ready.
              <br />
              <span className="text-[#ff7135]">Grow Your Career.</span>
            </h1>
            <p className="max-w-[620px] font-figtree text-base leading-relaxed text-white/80 sm:text-lg">
              Learn with real engineers, build real projects, master job-hunting
              skills, and grow your personal brand with a community of ambitious
              builders.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/requestcallback?source=Hero - Start Learning Free"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ed305d] to-[#ff8541] px-7 py-3.5 font-outfit text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Explore Programs <ArrowRight size={18} />
            </Link>
            <Link
              href="/requestcallback?source=Hero - Join Community"
              className="inline-flex items-center rounded-full border border-[#ff7135] px-7 py-3.5 font-outfit text-base font-bold text-white transition-colors hover:bg-[#ff7135]/15"
            >
              Join the Community
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-white/20 pt-6 sm:grid-cols-4 sm:gap-6">
            {proofPoints.map(({ value, label, icon: Icon }) => (
              <div key={value} className="flex items-start gap-2 text-white">
                <Icon className="mt-0.5 shrink-0 text-[#ff7135]" size={25} />
                <div>
                  <p className="font-outfit text-sm font-bold sm:text-base">{value}</p>
                  <p className="font-figtree text-xs leading-tight text-white/65">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
