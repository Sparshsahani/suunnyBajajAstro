"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import qrImage from "../../public/images/qr.jpg"; // Make sure you have a QR image here

export default function TheTradingPopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* CONNECT NOW BUTTON */}
      <div className="mt-10">
        <button
          className="bg-quant-blue text-white px-6 py-3 rounded-md tracking-wide"
          onClick={() => setShowPopup(true)}
        >
          CONNECT NOW
        </button>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-[90%] max-w-3xl rounded-lg shadow-xl p-8 flex flex-col md:flex-row gap-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-red-500"
              >
                &times;
              </button>

              {/* LEFT SIDE */}
              <div className="flex-1 space-y-4">
                
                <h2 className="text-2xl font-semibold text-gray-800">
                  Please pay ₹1050 for consultant
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <span className="font-semibold">Name:</span> Sparsh Sahani
                  </p>
                  <p>
                    <span className="font-semibold">Bank Name:</span> HDFC Bank
                  </p>
                  <p>
                    <span className="font-semibold">Account No:</span>{" "}
                    123456789012
                  </p>
                  <p>
                    <span className="font-semibold">IFSC Code:</span>{" "}
                    HDFC0001234
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE - QR CODE */}
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src={qrImage}
                  alt="QR Code"
                  width={200}
                  height={200}
                  className="rounded-md shadow"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
