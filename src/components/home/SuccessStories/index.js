import React from 'react';
import { AchievementsCard, AchivementsData, SuccessStoriesData, SuccessStoryCard } from './SuccessStoriesData';
import styles from './SuccessStories.module.css';
import { inter, league_spartan } from '@/shared/styles/font';
import ButtonComponent from '../ButtonComponent';

const SuccessStories = () => {
  return (
    <section className={`w-full pt-4 pb-4 sm:pt-6 sm:pb-6 bg-white overflow-hidden ${inter.className}`}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20 flex flex-col gap-4 sm:gap-5">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
            Success Stories
          </p>
          <h2 className={`mx-auto mt-2 max-w-2xl text-balance text-center text-xl sm:text-2xl md:text-[30px] font-extrabold leading-[1.25] tracking-tight text-[#111111] ${league_spartan.className}`}>
            Building software careers for thousands,<br className="hidden sm:inline" /> one success story at a time.
          </h2>

          {/* Stats Bar Below Heading in One Line */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {AchivementsData.map(({ icon, title, text }, idx) => (
              <AchievementsCard key={idx} icon={icon} title={title} text={text} />
            ))}
          </div>
        </div>

        {/* Full-width Stories Marquee */}
        <div className={`relative w-full overflow-hidden py-2 sm:py-3 ${styles.bg_image}`}>
          <div className={`flex w-max gap-5 ${styles.animateX}`}>
            {SuccessStoriesData.concat(SuccessStoriesData).map((item, idx) => (
              <div key={idx} className="w-[280px] sm:w-[320px] shrink-0">
                <SuccessStoryCard data={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-0">
          <ButtonComponent text="Request Callback" propStyles="mx-auto" />
        </div>

      </div>
    </section>
  );
};

export { SuccessStories };
export default SuccessStories;
