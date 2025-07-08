import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function Rudraksha() {
  const benefites = [
    {
      icons: <GoDotFill />,
      title: "100% Pure & Natural Gemstones",
    },
    {
      icons: <GoDotFill />,
      title: "It protects your from negative energies.",
    },
    {
      icons: <GoDotFill />,
      title:
        "It can heal your physical ailments as well as balance your emotions..",
    },
    {
      icons: <GoDotFill />,
      title:
        "Wearing rudraksha can balance your karmic cycle and save you from the malefic effects of planets like Saturn and Rahu.",
    },
    {
      icons: <GoDotFill />,
      title: "It protects you from accidents and unfortunate incidents.",
    },
    {
      icons: <GoDotFill />,
      title:
        " Wearing rudraksha gives you courage, strength, willpower, determination and vitality.",
    },
    {
      icons: <GoDotFill />,
      title:
        "Rudraksha balances the chakras in the human body, aligning the individual with the greater powers.",
    },
    {
      icons: <GoDotFill />,
      title:
        " You can attract abundance, success and prosperity by adorning the precious beads.",
    },
    {
      icons: <GoDotFill />,
      title:
        "Spiritual awakening and connecting with the inner self becomes much easier when you are wearing an activated rudraksha that suits you the best.",
    },
    {
      icons: <GoDotFill />,
      title:
        "Rudraksha enhances mental clarity and improves concentration, making it ideal for students and professionals.",
    },
  ];
  const rudraImg = [
    {
      mukhi: "1 Mukhi",
      description:
        "Enhances focus, spiritual growth, and connects directly to Lord Shiva.",
      image: "/images/rudraImg/1mukhi.png",
    },
    {
      mukhi: "2 Mukhi",
      description: "Promotes harmony in relationships and balances dualities.",
      image: "/images/rudraImg/2mukhi.png",
    },
    {
      mukhi: "3 Mukhi",
      description: "Burns past karmas and boosts confidence and energy.",
      image: "/images/rudraImg/3mukhi.png",
    },
    {
      mukhi: "4 Mukhi",
      description: "Increases intellect, creativity, and communication skills.",
      image: "/images/rudraImg/4mukhi.png",
    },
    {
      mukhi: "5 Mukhi",
      description: "Provides peace, health, and spiritual upliftment.",
      image: "/images/rudraImg/5mukhi.png",
    },
    {
      mukhi: "6 Mukhi",
      description: "Enhances willpower, charm, and emotional stability.",
      image: "/images/rudraImg/6mukhi.png",
    },
    {
      mukhi: "7 Mukhi",
      description: "Brings wealth, prosperity, and success in business.",
      image: "/images/rudraImg/7mukhi.png",
    },
    {
      mukhi: "8 Mukhi",
      description: "Removes obstacles and grants strength and success.",
      image: "/images/rudraImg/8mukhi.png",
    },
    {
      mukhi: "9 Mukhi",
      description: "Empowers with fearlessness and protects from negativity.",
      image: "/images/rudraImg/9mukhi.png",
    },
    {
      mukhi: "10 Mukhi",
      description: "Shields from evil forces and brings inner peace.",
      image: "/images/rudraImg/10mukhi.png",
    },
    {
      mukhi: "11 Mukhi",
      description: "Blesses with courage, wisdom, and divine protection.",
      image: "/images/rudraImg/11mukhi.png",
    },
    {
      mukhi: "12 Mukhi",
      description: "Boosts leadership, confidence, and radiance.",
      image: "/images/rudraImg/12mukhi.png",
    },
    {
      mukhi: "13 Mukhi",
      description: "Enhances charm, attraction, and fulfills desires.",
      image: "/images/rudraImg/13mukhi.png",
    },
    {
      mukhi: "14 Mukhi",
      description: "Opens third eye, enhances intuition, and grants stability.",
      image: "/images/rudraImg/14mukhi.png",
    },
    {
      mukhi: "Rudraksha Mala",
      description:
        "A sacred mala made of divine Rudraksha beads, offering protection, peace, and spiritual growth.",
      image: "/images/rudraImg/rudra_Mala.png",
    },
  ];

  return (
    <>
      <section className="max-sm:my-20 my-20 max-sm:mx-5 mx-30">
        <div className="text-center ">
          <h1 className="max-sm:text-3xl my-8 text-yellow font-syne-sans font-semibold text-4xl">
            Natural Rudraksha
          </h1>
          <div className="font-extralight text-xl leading-9 ">
            <p>
              Interestingly, the name &quot;Rudraksha&quot; comes from Sanskrit,
              meaning &quot;tears of Lord Shiva.&quot; Imagine the divine
              connection in something so simple yet powerful.
            </p>
            <p>
              Each Rudraksha has natural grooves on its surface, known as
              “Mukhi.” These Mukhi lines decide the kind of energy the bead
              carries and which planet’s force it aligns with. Whether you’re
              dealing with constant stress, financial hurdles, or relationship
              ups and downs, there’s a specific Mukhi to support you.{" "}
            </p>
            <p>
              You’ll often see people wearing Rudraksha as malas, bracelets, or
              even keeping them in pooja rooms. Many believe and swear by the
              positive shifts they’ve felt, whether it’s peace of mind, career
              breakthroughs, or simply better energy around them.
            </p>
          </div>
        </div>
        <h2 className="text-yellow max-sm:text-3xl text-center font-syne-sans font-semibold text-4xl mt-20">
          Balance Your Mind, Body & Soul – Naturally with Rudraksha.
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 justify-center gap-8 my-10 lg:mx-20 ">
          {rudraImg.map((items, key) => {
            return (
              <div
                key={key}
                className="border rounded-xl md:h-[300px] lg:h-auto justify-center flex flex-col px-8 py-5 gap-4 hover:shadow-md hover:shadow-yellow hover:scale-102 hover:duration-200 duration-200 hover:border-yellow"
              >
                <div className="mx-auto max-w-20 min-h-[100px] flex flex-col items-center justify-center">
                  <Image
                    src={items?.image}
                    alt="stone_img"
                    width={200}
                    height={200}
                    className="w-40 h-40 object-cover overflow-visible"
                  />
                </div>
                <h3 className="text-2xl text-yellow font-inter-sans">
                  {items?.mukhi}
                </h3>
                <p className="text-lg font-light">{items?.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="max-sm:text-3xl my-8 text-yellow font-syne-sans text-center font-semibold text-4xl">
            Benefits Of Rudraksha
          </h1>
          <div className="grid max-sm:grid-cols-1 max-sm:gap-0 grid-cols-2 grid-rows-2 max-lg:gap-2">
            {benefites.map((items, id) => {
              return (
                <div key={id} className="flex flex-row gap-2 max-lg:mt-20 mt-3">
                  <span className="text-yellow text-2xl max-sm:mr-0 md:mr-5">
                    {items?.icons}
                  </span>
                  <h1 className="text-xl max-sm:text-xl max-sm:mx-auto font-extralight mr-8">
                    {items?.title}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="text-center max-sm:space-y-20 space-y-10 mt-10">
            <h2 className="text-yellow max-sm:text-3xl text-4xl">
              Unlock the Power of 14 Rudrakshas as Guided by Your Kundali
            </h2>
            <button
              className="
                    relative text-black font-bold text-lg bg-yellow-400 rounded shadow-lg
                    hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
                    px-4 py-2"
            >
              All Rudraksha are available
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
