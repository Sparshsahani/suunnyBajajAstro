"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";

export default function Vedic() {
  const services = [
    {
      title: "Career",
      para: "Many students get confused and want to know what to do after exams, about jobs, and the future. Talk to astrologer Suunny Bajaj ji who can assist you in making the right career choices by analyzing your birth chart and planetary influences. He will offer insights into your strengths, weaknesses, & potential career paths.",
      icons: <FaGraduationCap />,
    },
    {
      title: "Health",
      para: "Vedic astrology predictions, can forecast health issues or injuries before they appear in your body. This foresight arises from your kundli's impact on various life aspects, guided by celestial houses. When unfavorable planets affect these areas in your Kundli by date of birth and time of birth, seeking early call consultation by talking to the astrologer.",
      icons: <FaUserDoctor />,
    },
    {
      title: "Love & Relationship",
      para: "Looking for the best love horoscope compatibility with your partner? While relationship issues may arise, accurate horoscope matching & predictions can provide insights for a successful, prosperous bond. One counseling call with our astrologer can reveal the potential of your relationship.",
      icons: <IoMdHeart />,
    },
    {
      title: "Business",
      para: "When you're starting a business or facing big choices, it's like being on a see-saw, balancing between success and failure. To boost your chances of business success, getting accurate insights from astrology is important. Consulting an astrologer can help you address and overcome your business problems.",
      icons: <FaBusinessTime />,
    },
    {
      title: "Marriage",
      para: "For centuries in India, the practice of Kundli Milan for marriage is very important. Talk to Astrologer Suunny Bajaj ji for horoscope matching of couples. Get Gun Milan, Mangal Dosha, & compatibility analysis. This thorough process aids in identifying the most suitable life partner through couple Kundli Milan",
      icons: <FaHandshakeAngle />,
    },
    {
      title: "Child",
      para: "The ancient Indian Vedic astrology Suunny Bajaj ji examines the horoscopes of both partners, especially for those interested in knowing about having children and even predicting the child's name. By studying the 12 houses in a person's chart, Astro Suunny Bajaj offers accurate solutions for issues related to childbirth.",
      icons: <FaChild />,
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-7.5 mt-15 xl:mx-30">
        {services.map((items, id) => {
          return (
            <div
              key={id}
              className="border border-border  rounded-md lg:px-12.5 px-6 py-2 bg-blue hover:scale-98 hover:duration-200 hover:border-yellow hover:shadow-yellow hover:shadow-lg duration-200"
            >
              <h3 className="flex justify-center pb-3 text-yellow text-5xl">
                {items?.icons}
              </h3>
              <h4 className="pb-6 text-3xl font-syne-sans font-semibold tracking-wider">
                {items?.title}
              </h4>
              <p className="pb-3 xl:text-base font-extralight">{items?.para}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
