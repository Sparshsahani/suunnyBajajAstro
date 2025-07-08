"use client";
import Image from "next/image";
import React from "react";
import Person from "../../public/images/personCrop.png";
import LogoCircle from "../../public/images/logoCircle.png";

export default function Dashboard() {
  return (
    <>
      <section
        id="home"
        className="relative max-lg:overflow-hidden flex-center mx-4 sm:mx-8 md:px-0 pt-20 pb-10 md:pt-20 lg:pt-50 md:h-screen xl:pt-40 "
      >
        <div className="relative mx-auto px-6 md:px-20 xl:px-32">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 ">
            <div className="text-center md:text-start z-10">
              <div className="flex items-baseline gap-2 md:mt-13">
                <h5 className="font-semibold text-lg sm:text-2xl max-xl:hidden font-syne-sans">
                  Hi, I am
                </h5>
                <span className="sm:text-4xl text-3xl text-yellow max-xl:hidden">
                  Suunny Bajaj
                </span>
              </div>
              <div>
                <h5 className="text-4xl md:text-5xl font-syne-sans font-bold leading-tight md:leading-normal mt-2">
                  Your Trusted Vedic Astrology <br /> & Numerology Consultant
                </h5>
              </div>

              <p className="text-slate-400 dark:text-white/60 font-light text-base sm:text-lg max-w-xl mt-3">
                Providing tailored readings and profound insights to help you
                gain clarity, find direction, and achieve success. Discover your
                true potential and move through life with confidence and
                purpose.
              </p>
              <button
                className="
                    relative text-black mt-8 font-bold text-lg bg-yellow-400 rounded shadow-lg
                    hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
                    px-4 py-2"
              >
                Consult Now <br /> <span className="text-sm">&#40;Energy Exchange&#41;</span>
              </button>
            </div>
            <div className="relative flex justify-center md:justify-center">
              <div className="relative max-sm:top-10 md:top-0 lg:ms-1 before:content-[''] before:absolute before:start-1/2 xl:before:start-[70%] before:-translate-x-1/2 rtl:before:translate-x-1/2 before:bottom-1/2 before:translate-y-1/2 before:w-[85vw] sm:before:w-[65vw] md:before:w-[20rem] lg:before:w-[48rem] before:h-[40vw] sm:before:h-[30vw] md:before:h-[20rem] before:rounded-[18rem] before:rotate-[135deg] before:bg-[#e8c83e] dark:before:bg-[#e8c83e] before:z-0">
                <Image
                  src={LogoCircle}
                  alt="whatsapp_logo"
                  className="max-sm:w-[16rem] z-[-999] absolute top-[-50] left-[-60] animate-[spin_60s_linear_infinite]"
                />
                <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <Image
                    className="w-full object-cover rounded-lg max-sm:h-[250px] md:h-[400px] lg:h-[600px] lg:-mt-16 xl:mt-[-10] xl:ml-[120]"
                    src={Person}
                    alt="person"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
