import TextSwiper from "@/pages/TextSwiper";
import React from "react"; 

export default function Testemonials() {
  return (
    <>
      <section
        id="testimonials"
        className="max-sm:my-20 my-10 max-sm:mx-5 mx-30"
      >
        <section className="max-sm:my-20 my-10 max-sm:mx-5 mx-30">
          <div className="text-center ">
            <h1 className="text-yellow text-5xl font-semibold font-syne-sans">
              Testimonials
            </h1>
          </div>
          <div className="my-10">
            <div className="bg-yellow mx-auto max-sm:h-[500px] max-sm:w-[300px] md:w-full lg:h-[150px] rounded-[50px] lg:w-[60%] ">
              <div className="text-black font-semibold flex flex-row justify-center max-sm:gap-y-20 md:gap-x-10 lg:gap-x-30 items-center w-full h-full max-sm:flex-col ">
                <div>
                  <h3 className="text-center max-sm:text-4xl md:text-3xl lg:text-5xl pb-2">
                    2k+
                  </h3>
                  <h4 className="max-sm:text-xl">Consultations</h4>
                </div>
                <div>
                  <h3 className="text-center max-sm:text-4xl md:text-3xl lg:text-5xl pb-2">
                    4k+
                  </h3>
                  <h4 className="max-sm:text-xl">Live Transformed</h4>
                </div>
                <div>
                  <h3 className="text-center max-sm:text-4xl md:text-3xl lg:text-5xl pb-2">
                    10+
                  </h3>
                  <h4 className="max-sm:text-xl">Clients from Countries</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center space-y-20">
            <h1 className="text-yellow max-sm:text-3xl text-5xl font-semibold font-syne-sans">
              What Amazing peoples Says About me
            </h1>
            <div>
              <TextSwiper />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
