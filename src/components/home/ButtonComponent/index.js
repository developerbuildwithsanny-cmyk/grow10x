"use client";
import React, { useEffect, useState } from "react";
import styles from "./ButtonComponent.module.css";
import { MdCall } from "react-icons/md";
import { inter } from "@/shared/styles/font";
import { WhoAreYouBecomingModal } from "@/components/home/WhoAreYouBecomingModal";

const ButtonComponent = ({ text, propStyles }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex w-fit items-center gap-[13px] rounded-lg px-[16.16px] py-[8.98px] text-white transition-all duration-200 ease-linear active:scale-95 sm:px-[21.46px] sm:py-[11.92px] md:gap-[15.5px] md:rounded-[9.54px] md:px-[21.46px] md:py-[11.92px] lg:gap-[15.5px] lg:rounded-[9.54px] lg:px-[21.46px] lg:py-[11.92px] xl:px-[21.46px] xl:py-[11.92px] ${styles.background_color} ${propStyles} mx-auto cursor-pointer`}
      >
        <MdCall className="flex-shrink-0 text-[16px] sm:text-[19.07px] md:text-[19.07px] lg:text-[19.07px]" />
        <p
          className={`${inter.className} text-nowrap text-left text-[15px] font-semibold leading-[18.15px] sm:text-left sm:text-[17.88px] sm:leading-[21.64px] md:text-[17.88px] md:leading-[21.64px] xl:text-[17.88px]`}
        >
          {text}
        </p>
      </button>

      {modalOpen && (
        <WhoAreYouBecomingModal onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default ButtonComponent;
