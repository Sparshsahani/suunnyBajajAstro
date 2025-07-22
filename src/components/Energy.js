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
            Software Generated Kundli
          </h1>

          <div>
            <p className="text-xl font-extralight mt-10">
              Get your <span className="text-yellow">Premium</span>,{" "}Kundli Based{" "}
              <span className="text-yellow">Gemstone</span>,{" "}
              <span className="text-yellow">Rudhraksha</span> and{" "}
              <span className="text-yellow">Crystals</span> recommandation For Better Luck and
              Success
            </p>
            <p className=" text-xl font-extralight">
              Get Accurate Planetary Degree, 10-year prediction, Including a 270-pages detailed All In One PDF Report. 
            </p>
          </div>
        </div>
      </section>
      <Contact/>
    </>
  );
}
