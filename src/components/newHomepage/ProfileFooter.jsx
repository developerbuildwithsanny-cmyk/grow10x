import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { profileFooterProfiles } from "./profileFooterData";

const socialIcons = {
  Instagram: SiInstagram,
  YouTube: SiYoutube,
  LinkedIn: CiLinkedin,
};

function ProfileCard({ profile, accent }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#211e1b] p-3 shadow-[0_12px_36px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-white/20 sm:p-4">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#f36f21]/[0.07] blur-2xl" aria-hidden="true" />
      <div className="relative flex items-center gap-3">
        <div className={`relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br ${accent} sm:h-16 sm:w-16`}>
          {profile.image ? (
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            <span className="font-outfit text-xl font-black text-white/90">
              {profile.initials}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-outfit text-base font-bold tracking-tight text-white sm:text-lg">
            {profile.name}
          </h3>
          <p className="mt-0.5 line-clamp-2 font-figtree text-[11px] leading-tight text-[#ff9a62] sm:text-xs">
            {profile.title}
          </p>
        </div>
      </div>

      <blockquote className="relative mt-3 font-outfit text-sm font-medium leading-snug text-white/90 sm:text-base">
        “{profile.quote}”
      </blockquote>

      <div className="relative mt-2 flex items-center gap-1.5">
        {Object.entries(profile.socials).map(([name, href]) => {
          const Icon = socialIcons[name];
          const isAvailable = Boolean(href);
          const content = <Icon size={18} strokeWidth={1.8} />;

          if (!isAvailable) {
            return (
              <span key={name} aria-label={`${name} link unavailable`} className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-white/30">
                {content}
              </span>
            );
          }

          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${profile.name} on ${name}`}
              className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#f36f21] hover:bg-[#f36f21] hover:text-white"
            >
              {content}
            </a>
          );
        })}
      </div>
    </article>
  );
}

export function ProfileFooter() {
  return (
    <footer className="bg-[#171513] px-0 py-3 text-white sm:py-4">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 md:px-8">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <p className="font-figtree text-[10px] font-bold uppercase tracking-[0.16em] text-[#f36f21] sm:text-xs">
            BUILDING THE FUTURE
          </p>
          <p className="hidden font-outfit text-sm font-semibold text-white/70 sm:block">
            Learn from the builders turning ideas into intelligent systems, real products, and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <ProfileCard profile={profileFooterProfiles[0]} accent="from-[#264b5c] to-[#141d27]" />
          <ProfileCard profile={profileFooterProfiles[1]} accent="from-[#7b3e27] to-[#271a17]" />
        </div>

        <div className="mt-3 border-t border-white/10 pt-2">
          <p className="m-0 font-figtree text-[10px] text-white/45 sm:text-xs">
            © 2026 10xAISchool. Built as a bridge, not an institute.
          </p>
        </div>
      </div>
    </footer>
  );
}
