"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import QR from "../../public/images/qr.jpg";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="text-center">
        <button
          onClick={() => setShowPopup(true)}
          className="relative text-black  mt-8 font-bold text-lg bg-yellow rounded shadow-lg
              hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
              px-4 py-2"
        >
          Create My Kundli Now{" "}
          <span className="line-through decoration-red-500 decoration-[2px]">
            {" "}
            &#8377;699
          </span>{" "}
          / &#8377;399
        </button>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 bg-opacity-60 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-blue w-[90%] max-w-3xl rounded-lg shadow-xl p-8 flex flex-col md:flex-row gap-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500 duration-200"
              >
                &times;
              </button>

              {/* Left Side Info */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold ">
                  Discover Your Destiny – Pay{" "}
                  <span className="text-yellow underline">₹399</span> for Your
                  Kundli
                </h2>

                <div className="mt-4 border border-yellow rounded-lg p-4 bg-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-semibold text-yellow mb-3 underline">
                    Bank Details
                  </h3>

                  <div className="space-y-2 text-base">
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

                <p className="text-sm  mt-4 tracking-wide">
                  <span className="font-semibold">Note:</span> After payment,
                  please send the payment screenshot along with your
                  <strong className="text-yellow"> Full Name</strong>,
                  <strong className="text-yellow"> Gender</strong>,
                  <strong className="text-yellow"> Date of Birth</strong>,
                  <strong className="text-yellow"> Time of Birth</strong>,
                  <strong className="text-yellow"> City</strong>,
                  <strong className="text-yellow"> State</strong>,
                  <strong className="text-yellow"> Country</strong> and your
                  <strong className="text-yellow"> WhatsApp number</strong> to
                  <strong className="text-yellow"> +91 9616464666</strong>.
                </p>
              </div>

              {/* Right Side QR */}
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src={QR}
                  alt="QR Code"
                  width={300}
                  height={300}
                  className="rounded shadow"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
