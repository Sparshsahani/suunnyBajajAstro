"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaCity,
  FaGlobe,
  FaLanguage,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Contact() {
  const [message, setMessage] = useState("");
  const maxWords = 50;

  const handleMessageChange = (e) => {
    const words = e.target.value.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="text-white px-6 py-18">
      {/* <div className="font-syne-sans my-8">
        <h1 className="text-5xl max-sm:text-3xl">
          Having troubles in booking Or looking to{" "}
          <span className="text-yellow">Collaborate?</span>
        </h1>
        <p className="text-xl font-extralight font-inter-sans py-8">
          For ages, it’s been believed that the stars hold the power to guide
          us, offering insight into life and what lies ahead.
        </p>
      </div> */}

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-8 font-inter-sans"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="w-full bg-white text-black placeholder-gray-400 p-3 pr-10 rounded border-none focus:outline-none"
              />
              <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-semibold">Gender</label>
            <select
              name="gender"
              required
              className="w-full bg-white text-black p-3 rounded"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not Defined">Not Defined</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-semibold">Date of Birth</label>
            <div className="relative">
              <input
                type="date"
                name="dob"
                required
                className="w-full bg-white text-black p-3 rounded"
              />
              <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Time of Birth */}
          <div>
            <label className="block mb-1 font-semibold">Time of Birth</label>
            <div className="flex gap-3">
              {/* Hour */}
              <select
                name="hour"
                required
                className="w-1/3 bg-white text-black p-3 rounded"
              >
                <option value="">HH</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {String(i + 1).padStart(2, "0")}
                  </option>
                ))}
              </select>

              {/* Minute */}
              <select
                name="minute"
                required
                className="w-1/3 bg-white text-black p-3 rounded"
              >
                <option value="">MM</option>
                {["00", "15", "30", "45"].map((min) => (
                  <option key={min} value={min}>
                    {min}
                  </option>
                ))}
              </select>

              {/* AM/PM */}
              <select
                name="ampm"
                required
                className="w-1/3 bg-white text-black p-3 rounded"
              >
                <option value="">AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* Place of Birth - City */}
          <div>
            <label className="block mb-1 font-semibold">City of Birth</label>
            <div className="relative">
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="w-full bg-white text-black p-3 rounded"
              />
              <FaCity className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Place of Birth - State */}
          <div>
            <label className="block mb-1 font-semibold">State of Birth</label>
            <div className="relative">
              <input
                type="text"
                name="state"
                placeholder="State"
                required
                className="w-full bg-white text-black p-3 rounded"
              />
              <FaMapMarkerAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Place of Birth - Country */}
          <div>
            <label className="block mb-1 font-semibold">Country of Birth</label>
            <div className="relative">
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                className="w-full bg-white text-black p-3 rounded"
              />
              <FaGlobe className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Kundali Language */}
          <div>
            <label className="block mb-1 font-semibold">Kundali Language</label>
            <div className="relative">
              <input
                type="text"
                name="kundaliLanguage"
                placeholder="e.g., Hindi, English"
                required
                className="w-full bg-white text-black p-3 rounded"
              />
              <FaLanguage className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block mb-1 font-semibold">WhatsApp Number</label>
            <div className="relative">
              <input
                type="number"
                name="whatsapp"
                placeholder="WhatsApp Number"
                required
                className="w-full bg-white text-black p-3 rounded"
              />
              <FaWhatsapp className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write Your message"
            value={message}
            onChange={handleMessageChange}
            className="w-full bg-white text-black placeholder-gray-400 p-3 rounded resize-none"
          />
          <p className="text-sm text-gray-300 mt-1">
            {message.trim().split(/\s+/).filter(Boolean).length} / {maxWords}{" "}
            words
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="relative text-black  mt-8 font-bold text-lg bg-yellow-400 rounded shadow-lg
              hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
              px-4 py-2"
          >
            Create My Kundli Now <span className="line-through "> &#8377;699</span> / &#8377;399
          </button>
        </div>
      </form>
    </div>
  );
}
