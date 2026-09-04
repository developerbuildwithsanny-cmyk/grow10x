import { inter, league_spartan, open_sans } from '@/shared/styles/font';
import {
  CompanyBuildingSvg,
  DevRabbit,
  KuroGamingSvg,
  MckinleySvg,
  MedExpertsSvg,
  OnPassiveSvg,
  PackageSvg,
  SticSoftSvg,
  StudentImage1,
  StudentImage2,
  StudentImage3,
  StudentImage4,
  StudentImage5,
  StudentImage6,
  UserGraduateSvg,
} from '@/shared/svgIcons/successStoriesSvg';

export const AchievementsCard = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2 sm:px-3.5 sm:py-2 shadow-xs">
      <div className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <p className={`text-sm sm:text-base font-bold leading-tight text-foreground ${league_spartan.className}`}>
          {title}
        </p>
        <p className={`text-[11px] sm:text-xs text-gray-600 ${open_sans.className}`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export const SuccessStoryCard = ({ data }) => {
  const { profile, company, name, bg_color, profile_bg_color, description } = data;
  return (
    <div
      className={`flex h-[250px] w-full flex-col justify-between rounded-2xl p-5 shadow-xs transition-transform hover:-translate-y-1 ${inter.className}`}
      style={{ backgroundColor: bg_color }}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div
            style={{ background: profile_bg_color }}
            className="relative flex size-14 items-center justify-center overflow-hidden rounded-full border border-white/60 shadow-xs">
            <div className="flex h-full w-full items-center justify-center">
              {profile}
            </div>
          </div>
          <div className="flex items-center justify-end">
            {company}
          </div>
        </div>

        <p className={`text-xs sm:text-sm leading-relaxed text-gray-800 line-clamp-4 ${open_sans.className}`}>
          {description}
        </p>
      </div>

      <p className="text-xs sm:text-sm font-bold text-gray-900 pt-3 border-t border-black/10 capitalize">
        {name}
      </p>
    </div>
  );
};

export const AchivementsData = [
  {
    title: '500+ Companies',
    text: 'Hiring from 10XAISchool',
    icon: <CompanyBuildingSvg />,
  },
  {
    title: '1000+ Students',
    text: 'Placed Successfully',
    icon: <UserGraduateSvg />,
  },
  {
    title: '4.2 LPA',
    text: 'Avg. salary Package',
    icon: <PackageSvg />,
  },
];

export const SuccessStoriesData = [
  {
    name: 'Sai Krishna',
    description:
      '“Struggling with other institutes, I found hope with 10XAISchool. Their training shifted my career from mechanical to web development.”',
    company: <MckinleySvg />,
    profile: <StudentImage1 />,
    bg_color: '#F4EBFF',
    profile_bg_color: 'radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #C6A1F7 100%)',
  },
  {
    name: 'Vijay kumar',
    description:
      "“10XAISchool doesn't just teach front-end web development; they mold you into a professional ready for the software industry.”",
    company: <MedExpertsSvg />,
    profile: <StudentImage2 />,
    bg_color: '#FFF9EB',
    profile_bg_color: 'radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #FFDA90 100%)',
  },
  {
    name: 'srikanth manthri',
    description:
      '“From BSC to IT, I rewrote the narrative with the help of 10XAISchool, proving that determination and learning overcome boundaries.”',
    company: <KuroGamingSvg />,
    profile: <StudentImage3 />,
    bg_color: '#FFEBFF',
    profile_bg_color: 'radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #FF90B8 100%)',
  },
  {
    name: 'Balaji Prabhu',
    description:
      '“At 10XAISchool, practical learning surpassed college experiences, making it easier to crack interviews”',
    company: <SticSoftSvg />,
    profile: <StudentImage4 />,
    bg_color: '#EBFFEE',
    profile_bg_color: 'radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #B3FF90 100%)',
  },
  {
    name: 'Shirisha',
    description:
      '“Before 10XAISchool, I was stuck in a tough spot with no job prospects and lacking essential skills. But the decision to learn changed everything.”',
    company: <DevRabbit />,
    profile: <StudentImage5 />,
    bg_color: '#FFF0EB',
    profile_bg_color: 'radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #FFB190 100%)',
  },
  {
    name: 'Arun kumar',
    bg_color: '#EBF8FF',
    description:
      '“From project delays to project completions, 10XAISchool taught me not only coding but also the discipline and determination.”',
    company: <OnPassiveSvg />,
    profile: <StudentImage6 />,
    profile_bg_color: 'radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #A1DDF7 100%)',
  },
];
