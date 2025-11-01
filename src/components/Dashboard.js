"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Person from "../../public/images/personCrop.jpg";
import LogoCircle from "../../public/images/logoCircle.png";
import QR from "../../public/images/qr.jpg"; // your QR image

export default function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Section Content */}
      <section
        id="home"
        className="relative flex items-center justify-between pt-20 pb-10 md:pt-24 lg:pt-32 xl:pt-40"
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
            {/* Left Side Text */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-baseline gap-2 mt-6">
                <h5 className="font-semibold text-lg sm:text-2xl font-syne-sans hidden xl:block">
                  Hi, I am
                </h5>
                <span className="sm:text-4xl text-3xl text-yellow hidden xl:block">
                  Suunny Bajaj
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-syne-sans leading-tight mt-4">
                Your Trusted Vedic Astrology <br /> & Numerology Consultant
              </h2>

              <p className="text-slate-500 dark:text-white/60 font-light md:text-sm  2xl:text-lg  sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0">
                Providing tailored readings and profound insights to help you
                gain clarity, find direction, and achieve success. Discover your
                true potential and move through life with confidence and
                purpose.
              </p>

              <button
                className="mt-8 text-white font-bold text-lg bg-yellow rounded px-6 py-3 shadow-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setShowPopup(true)}
              >
                Connect Now <br />
                <span className="text-sm">&#40;Energy Exchange&#41;</span>
              </button>
            </div>

            {/* Right Side Image */}
            <div className="relative flex max-sm:justify-center md:justify-center lg:justify-end">
              {/* Spinning Logo */}
              <Image
                src={LogoCircle}
                alt="logo"
                className="absolute w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] md:top-[-50px]  left-1/2 -translate-x-1/2 min-2xl:left-[25%] min-lg:left-[-10%] lg:translate-x-0 z-0 animate-[spin_60s_linear_infinite]"
              />

              {/* Person Image */}
              <div className="relative z-10 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] max-sm:top-[70]">
                <Image
                  src={Person}
                  alt="person"
                  className="w-full object-cover rounded-lg rotate-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 bg-opacity-60 z-50 flex justify-center items-center max-xl:overflow-scroll xl:overflow-scroll"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-blue w-[90%] max-w-6xl rounded-lg shadow-xl pt-8 px-5 flex flex-col md:flex-row gap-8 relative max-lg:mt-200 lg:mt-130 xl:mt-50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500 duration-200"
              >
                &times;
              </button>

              {/* ✅ Left Side Info */}
              <div className="flex-1 space-y-4 text-white ">
                {/* 🔶 Top Heading */}
                <div className="mb-4">
                  <div className="text-xl md:text-3xl font-extrabold tracking-wider text-yellow leading-snug uppercase text-center font-syne-sans xl:text-base 2xl:text-3xl">
                    <h1 className="text-white font-bricolage_grotesque-sans font-extrabold text-4xl lg:text-3xl">
                      Book your <span className="text-4xl">appointment</span>{" "}
                    </h1>
                    <h1 className="font-bricolage_grotesque-sans font-extrabold text-4xl">
                      with
                    </h1>
                    <h1 className="font-bricolage_grotesque-sans font-extrabold text-4xl xl:whitespace-nowrap">
                      {" "}
                      Astrologer Suunny Bajaj
                    </h1>
                  </div>
                  <div className="flex justify-center items-center my-2 text-xl md:text-2xl  ">
                    <h2 className="bg-yellow rounded-xl p-2 font-extrabold text-2xl text-white uppercase xl:text-base 2xl:text-5xl">
                      Charges <strong>₹1100</strong>
                      <h3 className="lowercase font-semibold text-xl text-center whitespace-nowrap">
                        {" "}
                        (per person)
                      </h3>
                    </h2>
                  </div>
                  <div className="mt-4 border border-yellow rounded-lg p-4 bg-white/10 backdrop-blur-md">
                    <p className="text-lg md:text-xl mt-2 leading-relaxed xl:text-base 2xl:text-xl">
                      One-hour consultation of your life based on your{" "}
                      <span className="font-semibold text-yellow">
                        Vedic Kundli
                      </span>{" "}
                      &{" "}
                      <span className="font-semibold text-yellow">
                        Birth Chart
                      </span>{" "}
                      with 10 years of predictions, all remedies,{" "}
                      <span className="font-semibold text-yellow">
                        Name Correction
                      </span>
                      , and a{" "}
                      <span className="font-semibold text-yellow">
                        72-page detailed PDF report
                      </span>
                      .
                    </p>
                  </div>
                </div>
                {/* 🔷 Bank Details Section */}
                <div className="mt-4 border border-yellow rounded-lg p-4 bg-white/10 backdrop-blur-md ">
                  <h3 className="text-xl font-semibold text-yellow mb-3 underline ">
                    Bank Details
                  </h3>

                  <div className="space-y-2 text-lg xl:text-base 2xl:text-xl">
                    <p>
                      <span className="font-semibold text-yellow">Name:</span>{" "}
                      Sunny Bajaj
                    </p>
                    <p>
                      <span className="font-semibold text-yellow">
                        Bank Name:
                      </span>{" "}
                      Union Bank of India
                    </p>
                    <p>
                      <span className="font-semibold text-yellow">
                        Account No:
                      </span>{" "}
                      302202010710488
                    </p>
                    <p>
                      <span className="font-semibold text-yellow">
                        IFSC Code:
                      </span>{" "}
                      UBIN0530221
                    </p>
                  </div>
                </div>

                <p className="text-lg mt-4 ">
                  <span className="font-semibold">Note:</span> After payment,
                  send the screenshot with your{" "}
                  <span className="text-yellow font-semibold">Name</span>,{" "}
                  <span className="text-yellow font-semibold">
                    Date of Birth
                  </span>
                  ,{" "}
                  <span className="text-yellow font-semibold">
                    Time of Birth
                  </span>
                  , <span className="text-yellow font-semibold">City</span>,{" "}
                  <span className="text-yellow font-semibold">Country</span> &{" "}
                  <span className="text-yellow font-semibold">
                    WhatsApp Number
                  </span>{" "}
                  to{" "}
                  <span className="text-yellow font-semibold">
                    +91 9616464666
                  </span>
                  .
                </p>
              </div>

              {/* ✅ Right Side QR Code */}
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src={QR}
                  alt="QR Code"
                  width={300}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
