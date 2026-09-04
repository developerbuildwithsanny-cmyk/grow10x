import styles from './HiringPartners.module.css';
import Image from 'next/image';
import homeScreenData from '@/shared/staticData/homeScreen.json';
import {inter, league_spartan, open_sans, poppins} from '@/shared/styles/font';
import ButtonComponent from '../ButtonComponent';

const { HiringPartnersData } = homeScreenData;

const HiringPartners = () => {
  return (
    <section
      id="hiringPartners"
      className="w-full bg-white py-6 sm:py-8 lg:py-10 overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center text-center gap-4 px-5 sm:px-8 lg:px-20">
        
        {/* Header Part */}
        <p
          className={`text-2xl sm:text-3xl md:text-4xl ${league_spartan.className} font-bold text-[#111111]`}>
          Our <span className="text-brand">500+ </span> Hiring Partners
        </p>

        <p className={`text-xs sm:text-sm md:text-base font-medium text-[#555555] ${open_sans.className}`}>
          Connecting our graduates with top industry leaders for exceptional tech careers.
        </p>

        {/* Company Marquee Rows (Between Header and Request Callback) */}
        <div className="w-full overflow-hidden flex flex-col gap-y-1 my-3 sm:my-4">
          <div className="flex w-full overflow-hidden">
            <div className={`${styles.scroll2} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.primary.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
            <div className={`${styles.scroll2} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.primary.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full overflow-hidden">
            <div className={`${styles.scroll3} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.secondary.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
            <div className={`${styles.scroll3} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.secondary.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full overflow-hidden">
            <div className={`${styles.scroll2} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.teritory.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
            <div className={`${styles.scroll2} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.teritory.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full overflow-hidden">
            <div className={`${styles.scroll3} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.quadra.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
            <div className={`${styles.scroll3} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.quadra.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full overflow-hidden">
            <div className={`${styles.scroll2} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.penta.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
            <div className={`${styles.scroll2} flex gap-x-3 sm:gap-x-4 md:gap-x-5`}>
              {HiringPartnersData.penta.map((img, idx) => (
                <div
                  key={idx}
                  className="relative size-[65px] sm:size-[80px] md:size-[90px] lg:size-[100px] flex-shrink-0 bg-white rounded-lg p-1">
                  <Image quality={100} fill={true} src={img} alt="" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Request Callback Button Below Marquee */}
        <div className="mt-1">
          <ButtonComponent text="Request Callback" propStyles="" />
        </div>

      </div>
    </section>
  );
};
export { HiringPartners };
export default HiringPartners;
