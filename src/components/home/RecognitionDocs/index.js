import { league_spartan } from "@/shared/styles/font";
import {
  IndianEmblemIcon,
  StartUpIndiaText,
} from "@/shared/svgIcons/recognition_docs";
import React from "react";

const RecognitionDocs = () => {
  return (
    <section className="mx-auto flex py-4 my-0 w-full max-w-[1000px] px-5 flex-col gap-4 lg:gap-6">
      <div className="flex w-full flex-col gap-2 text-center">
        <p
          className={`mx-auto text-[22px] leading-tight text-black sm:text-[30px] lg:text-[36px] xl:text-[40px] ${league_spartan.className} font-bold`}
        >
          Recognized for
          <span className="text-[#ff8041]"> Excellence </span> and
          <span className="text-[#ff8041]"> Innovation </span>
        </p>
        <p className="mx-auto text-[13px] font-semibold leading-normal text-gray-500 sm:text-[16px] lg:text-[18px] whitespace-nowrap">
          Highlighting our commitment to excellence and industry leadership
        </p>
      </div>

      <div className="mx-auto flex w-[273.54px] justify-between sm:w-[454.18px] sm:gap-[23.63px] md:h-[73.86px] md:w-[650.06px] lg:h-[81.34px] lg:w-[720.8px] lg:justify-between xl:h-[95.41px] xl:w-[853.01px]">
        <div className="relative w-[142.29px] h-[31.4px] flex-shrink-0 sm:h-[52.21px] sm:w-[226.55px] md:h-[73.86px] md:w-[334.68px] lg:h-full lg:w-[334.66px] xl:w-[432.32px]">
          <StartUpIndiaText />
        </div>

        <div className="flex w-[116.47px] flex-shrink-0 h-[29.81px] sm:w-[204px] sm:h-[52.21px] justify-between gap-1 md:h-full md:w-[204px] lg:h-full lg:w-[301.71px] xl:w-[353.89px]">
          <IndianEmblemIcon />
        </div>
      </div>
    </section>
  );
};

export { RecognitionDocs };
export default RecognitionDocs;
