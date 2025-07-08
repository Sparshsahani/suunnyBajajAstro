"use client";
import React from "react";
import Vedic from "@/pages/Vedic";
import Numerology from "@/pages/Numerology";
import Gemstones from "@/pages/Gemstones";
import Rudraksha from "@/pages/Rudraksha";
import Crystal from "@/pages/Crystal";

export default function Services() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/919616464666", "_blank");
    }
  };
  return (
    <>
      <section id="serviceOffered" className="relative overflow-hidden md:pt-20 lg:pt-16 pt-16 xl:py-8">
        <div className="max-width-lg max-lg:px-[24px] w-full mt-8 ">
          <section className="mt-[140px] mb-7.5">
            <div>
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div className="section-title text-center font-syne-sans">
                    <h2 className="max-sm:text-4xl text-5xl">
                      Services Offered
                    </h2>
                    <h2 className="max-sm:text-2xl text-4xl tracking-widest text-yellow font-bold pt-3">
                      Vedic Kundali Reading
                    </h2>
                    <br />
                  </div>
                </div>
              </div>
              <Vedic />

              <div className="text-center py-2">
              <button
              onClick={handleClick}
                className="
                    relative text-black mt-8 font-bold text-lg bg-yellow-400 rounded shadow-lg
                    hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
                    px-4 py-2"
              >
                Connect With Us
              </button>
            </div>
            </div>
          </section>
        </div>
      <Numerology/>
      </section>
      <Gemstones/>
      <Rudraksha/>
      <Crystal/>
    </>
  );
}
