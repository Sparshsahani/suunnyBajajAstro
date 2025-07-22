"use clinet";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Numerology() {
  const arrows = [
    { icons: <FaArrowRightLong />, para: "Loshu Grid & Birth Chart Analysis" },
    { icons: <FaArrowRightLong />, para: "Remedies for Missing Numbers" },
    { icons: <FaArrowRightLong />, para: "Name Analysis" },
    { icons: <FaArrowRightLong />, para: "Name Change Suggestions" },
    { icons: <FaArrowRightLong />, para: "Signature Evaluation" },
    { icons: <FaArrowRightLong />, para: "Mobile & House Number Insights" },
    { icons: <FaArrowRightLong />, para: "Lucky Numbers, Days & Colours" },
    { icons: <FaArrowRightLong />, para: "Current Personal Year Forecast" },
    { icons: <FaArrowRightLong />, para: "Compatibility Analysis with Partner’s Numbers" },
  ];
  return (
    <>
      <section className="relative overflow-hidden md:pt-20 lg:pt-0 pt-16 xl:py-">
        <div className="max-width-lg max-lg:px-[24px] w-full mt-8 ">
          <section className=" mb-7.5">
            <div>
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div className="section-title text-center">
                    <h2 className="max-sm:text-2xl text-4xl font-syne-sans tracking-widest text-yellow font-bold pt-3">
                      Numerology And Name Correction
                    </h2>
                    <br />
                    <p className="md:text-base  2xl:text-lg  font-extralight">
                      Decode Your Destiny with our All - Inclusive Personalized
                      Numerology Report. <br />
                      Step into clarity and confidence with our All-in-One
                      Numerology Service – a deep dive into the numbers that
                      shape your life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 justify-center gap-3 mt-9 xl:mx-30">
                {arrows.map((items, id) => {
                  return (
                    <div key={id} className="flex items-start font-syne-sans font-extralight">
                      <h3 className="text-yellow text-3xl mr-8">
                        {items?.icons}
                      </h3>
                      <h3 className="text-xl font-inter-sans">{items?.para}</h3>
                    </div>
                  );
                })}
              </div>
              <div className="text-center md:text-base  2xl:text-lg  xl:mx-30 space-y-8 mt-10">
                <p className="font-extralight">
                  Let your numbers guide you to balance, success, alignment and
                  overall well-being. <br /> Everything you need in one powerful
                  report!
                </p>
              </div>
              <div className="text-center xl:mx-30 space-y-8 max-sm:mt-10 xl:mt-10 xl:mb-10">
                <h4 className="text-4xl font-semibold text-yellow font-syne-sans">
                  Advice
                </h4>
                <p className="md:text-base  2xl:text-lg  font-extralight">
                  A balanced name with powerful vibrations can bring growth,
                  wealth, opportunities, peace, and fame in your life. However,
                  self-medication is harmful like wise you should not change
                  your name yourself.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
