import Contact from "@/pages/Contact";
import React from "react";

export default function Energy() {
  return (
    <>
      <section
        id="energyExchange"
        className="max-sm:my-10 my-10 max-sm:mx-5 mx-30"
      >
        <div className="text-center ">
          <h1 className="text-yellow text-5xl font-syne-sans">
            Energy Exchange
          </h1>

          <div>
            <p className="text-xl font-extralight mt-10">
              Get Your Kundli Based{" "}
              <span className="text-yellow">Gemstone</span>,{" "}
              <span className="text-yellow">Rudhraksha</span> and{" "}
              <span className="text-yellow">Crystals</span> For Better Luck and
              Success
            </p>
            <p className=" text-xl font-extralight">
              Get Accurate Planetary Degree, 10-year prediction, with all remedies and name correction.
              Including a 270-pages detailed All In One PDF Report. 
            </p>
          </div>
           <div>
          <button
            className="relative text-black  mt-8 font-bold text-lg bg-yellow-400 rounded shadow-lg
              hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
              px-4 py-2"
          >
            Consult Now  <span className="line-through "> &#8377;2000</span> / &#8377;1500
          </button>
        </div>
        </div>
      </section>
      <Contact/>
    </>
  );
}
