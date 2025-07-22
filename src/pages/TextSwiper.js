"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function TextSwiper() {
  const slides = [
    {
      name: "Poonam Sharma",
      description:
        "He is a very nice numerologist & consultant..in numerology his statement is accurate....",
      review: "Consultation Review",
    },
    {
      name: "Simran",
      description:
        "I personally Recommend beast numerologist in Lucknow. Helped me with my lucky numbers and shared remedies which was very helpful. Polite in nature with best knowledge.of numbers. Thank you Mr Suunny bajaj for helping me.",
      review: "Consultation Review",
    },
    {
      name: "Mukesh Pandey",
      description:
        "Thank you so much for helping and being on my side. I am so happy to met you. Keep up the good work",
      review: "Consultation Review",
    },
    {
      name: "Sri Vas",
      description:
        "A Very Good Predictions through Date of birth with Wonderfull Remedies. Life Changing Conversation",
      review: "Consultation Review",
    },
    {
      name: "Kanak More",
      description:
        "Great experiences with Mr. Sunny Bajaj, He is good numerologiest and consultant, he solves my problems in my diffcult time, after that i felt my life is much better",
      review: "Consultation Review",
    },
    {
      name: "Monika Tiwari",
      description:
        "Thank you so much dir for your guidence. It's just keep me motivated and I'm now able to concentrate on my studies.",
      review: "Consultation Review",
    },
    {
      name: "Vikash Goel",
      description:
        "Thank you so much for your time and guidence which you gave me in such a short period of time. It indeed helped me and motivated me during this hard time. The predictions were accurate and the managable. I really can't express my Gratitude in words......Thank you",
      review: "Consultation Review",
    },
    {
      name: "Pooja Mendiratta",
      description:
        "I will surely recommend Mr Suunny Bajaj. His calculation is up to the mark. His unbeatable numerological remedies helped us to overcome the negative effect ruling on us.",
      review: "Consultation Review",
    },
    {
      name: "Saurabh Srivastava",
      description:
        "Profound and Knowledgeable person. Wasn't aware that numbers can play that much important role in life. Good predictions and simple remedies. It was nice talking with you sir and we will be in touch",
      review: "Consultation Review",
    },
    {
      name: "Meghna Garg",
      description:
        "Thanku so much for your guidence and support, your predictions were accurate and remedies are too simple, manageable and also very effective. Thanku once again...",
      review: "Consultation Review",
    },
    {
      name: "Neha Srivastava",
      description:
        "Thank you for your guidence. It helps a lot. Your remedies are very easy to follow and are very effective as well. the bracelets given by you are also good. They are showing therir effects too. Thank u once again for your support in my hard days",
      review: "Consultation Review",
    },
    {
      name: "Monika Tiwari",
      description:
        "Thank you so much sir for your guidence. It's helping me a lot in making decisions. It's just keep me motivated and I'm now able to concentrate on my studies.",
         review: "Consultation Review",
    },
    {
      name: "Sidharth Bikram Shah",
      description:
        "Thank you so much sir for your guidence. Your prediction were accurate. And remedies are really very simple to day to day life. Keep giving us ideas and tips on Vastu also. Thanks again.",
         review: "Consultation Review",
    },
  ];

  return (
    // <div className="w-full h-50 mx-auto py-8 px-4">
    //   <Swiper
    //     // navigation={true}
    //     navigation={{
    //       nextEl: ".custom-next",
    //       prevEl: ".custom-prev",
    //     }}
    //     modules={[Navigation, Pagination, Autoplay]}
    //     pagination={{ clickable: true }}
    //     spaceBetween={20}
    //     slidesPerView={1}
    //     className="rounded-xl"
    //     autoplay={{
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     }}
    //     loop={true}
    //     speed={800}
    //   >
    //     {slides.map((text, index) => (
    //       <SwiperSlide key={index}>
    //         <div className="grid grid-col-2  max-sm:grid-col-1 border md:mx-40 max-sm:mt-8 rounded-xl max-sm:min-h-[400px] min-md:h-[90%] lg:h-50">
    //           <div className="w-full h-full max-sm:space-x-9 space-y-8 mt-8">
    //             <p className="font-light max-sm:mx-5 md:mx-2 lg:mx-40">
    //               {text.description}
    //             </p>
    //             <div className="font-syne-sans font-bold pb-8">
    //               <h3 className="text-2xl font-semibold">{text.name}</h3>
    //               <h5 className="text-xl text-yellow">{text.review}</h5>
    //             </div>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}

    //     <div className="custom-prev absolute top-1/2 left-2 z-10 cursor-pointer text-black">
    //       ←
    //     </div>
    //     <div className="custom-next absolute top-1/2 right-2 z-10 cursor-pointer text-black">
    //       →
    //     </div>
    //   </Swiper>
    // </div>
    <>
      <div className="w-full relative">
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation, Autoplay]}
          
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          className="rounded-xl"
        >
          {slides.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-4xl mx-auto border rounded-xl p-6 min-h-[200px] flex flex-col justify-center">
                <p className="md:text-sm  2xl:text-lg ">{text.description}</p>
                <div className="pt-4 font-syne-sans font-bold">
                  <h3 className="text-2xl text-yellow">{text.name}</h3>
                  {/* <h5 className="text-xl text-yellow">{text.review}</h5> */}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Arrows */}
          <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 text-5xl text-yellow cursor-pointer hover:scale-110 transition">
            <IoIosArrowDropleftCircle />
          </div>
          <div className="custom-next absolute top-1/2 -translate-y-1/2 right-4 z-10 text-5xl text-yellow cursor-pointer hover:scale-110 transition">
            <IoIosArrowDroprightCircle />
          </div>
        </Swiper>
      </div>
    </>
  );
}
