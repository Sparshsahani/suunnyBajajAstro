"use client";
import Image from "next/image";
import React from "react";
import Person from "../../public/images/personCrop.png";
import MoonSpinOne from "../../public/images/moon-spine-2.png";
import MoonSpinTwo from "../../public/images/moon-sign-3.png";
import Moon from "../../public/images/moon-inverse1.png";

// import { HiArrowRight } from "react-icons/hi";

export default function About() {
  return (
    <>
      <section
        id="aboutUs"
        className="relative overflow-hidden md:mt-0 lg:mt-0 xl:px-19"
      >
        <div className="max-width-lg px-[24px] md:px-30 lg:px-20 xl:px-10 w-full mt-8">
          <section className="mt-[100px]">
            <div className="flex lg:flex-row flex-col gap-25 items-center gap-y-0">
              <div className="order-2 max-sm:order-1 lg:w-[58%] w-full flex-shrink flex-grow-0 basis-auto m-10">
                <div className="about-content-part relative z-2 rmb-55">
                  <div className="max-lg:mb-35 xl:mb-2">
                    <span className="block font-medium mb-8 text-2xl text-white ">
                      About Me
                    </span>
                    <h2 className="md:text-[45px] leading-10 text-4xl font-syne-sans">
                      Guiding lives through the
                      <span className="text-yellow"> wisdom </span>
                      of the stars and ancient
                      <span className="text-yellow"> Vedic astrology.</span>
                    </h2>
                    <p className="mt-[25px] md:text-sm  2xl:text-lg  leading-8 text-white/70 font-light">
                      Hello! I’m
                      <span className="text-yellow"> Suunny Bajaj </span>, a
                      passionate astrologer with more than 6 years of experience
                      in Vedic astrology and numerology. What started as a
                      personal fascination has grown into a fulfilling journey
                      of guiding others toward clarity, purpose, and success
                      through the wisdom of the stars. In addition to my deep
                      knowledge of astrology, I’m committed to helping
                      individuals align with their true path.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 max-sm:order-2 lg:w-[40%] w-full flex-shrink flex-grow-0 basis-auto">
                <div className="about-image-part relative ">
                  <Image src={Moon} alt="person" className=" w-110" />
                  <Image src={MoonSpinOne} alt="person" className=" absolute top-0 w-110 animate-[spin_80s_linear_infinite]" />
                  <Image src={MoonSpinTwo} alt="person" className=" absolute top-0 w-110 animate-[spin_80s_linear_infinite_reverse]" />

                  <div className="relative w-[15px] h-[15px] rounded-full bg-blue ml-3 ">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75">
                      <span className="relative inline-flex size-3 rounded-full bg-blue"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
