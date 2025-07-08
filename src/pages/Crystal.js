import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
export default function Crystal() {
  const benefites = [
    {
      icons: <GoDotFill />,
      title: "Emotional healing",
    },
    {
      icons: <GoDotFill />,
      title: "Protection from evil eye",
    },
    {
      icons: <GoDotFill />,
      title: "Spritual growth",
    },
    {
      icons: <GoDotFill />,
      title: "Physical health",
    },
    {
      icons: <GoDotFill />,
      title: "Mental clarity",
    },
    {
      icons: <GoDotFill />,
      title: "Confidence",
    },
    {
      icons: <GoDotFill />,
      title: "Boosting energy",
    },
    {
      icons: <GoDotFill />,
      title: "Encouraging self love",
    },
  ];
  const bracelet = [
    {
      image: "/images/braceletImg/citrine_Bracelet.png",
      name: "Citrine Bracelet",
      description: "Attracts wealth, success, and personal power.",
    },
    {
      image: "/images/braceletImg/clear_Quartz_Bracelet.png",
      name: "Clear Quartz Bracelet",
      description: "Amplifies energy and promotes clarity of mind.",
    },
    {
      image: "/images/braceletImg/amethyst_bracelets.png",
      name: "Amethyst Bracelet",
      description: "Brings peace, calmness, and spiritual protection.",
    },
    {
      image: "/images/braceletImg/tiger_Eye_Bracelet.png",
      name: "Tiger Eye Bracelet",
      description: "Boosts confidence, courage, and inner strength.",
    },
    {
      image: "/images/braceletImg/green_Aventurine_bracelet.png",
      name: "Green Aventurine Bracelet",
      description: "Enhances luck, prosperity, and emotional healing.",
    },
    {
      image: "/images/braceletImg/pyrite_Bracelet.png",
      name: "Pyrite Bracelet",
      description: "Protects from negativity and attracts abundance.",
    },
    {
      image: "/images/braceletImg/red_Jasper_Bracelet.png",
      name: "Red Jasper Bracelet",
      description: "Grounds energy and builds physical and emotional strength.",
    },
    {
      image: "/images/braceletImg/dhan_yog_Bracelet.png",
      name: "Dhan Yog Bracelet",
      description: "Aligns planetary energy to activate financial growth.",
    },
    {
      image: "/images/braceletImg/cat_Eye_Bracelet.png",
      name: "Cat's Eye Bracelet",
      description: "Guards against evil and strengthens intuition.",
    },
  ];

  return (
    <>
      <section className="max-sm:my-20 max-lg:my-50 max-sm:mx-5 mx-30">
        <h2 className="text-yellow max-sm:text-3xl text-center font-syne-sans font-semibold text-4xl mb-0">
          Crystals and Gemstones Aligned with your Energy, Purpose, and Destiny.
        </h2>
        <div className="text-center">
          <h1 className="text-4xl my-10 text-yellow font-syne-sans font-semibold max-sm:text-3xl">
            Natural Crystal
          </h1>
          <p className="leading-9 text-xl font-extralight">
            Crystal bracelets aren’t just stylish—they’re like tiny miracle
            workers for your mind, body, and spirit. Slip one on, and you’ll
            instantly feel the magic of the crystal bracelet benefits. For your
            mind, amethyst and clear quartz act like mental espresso shots,
            boosting clarity and focus.
          </p>
          <p className="leading-9 text-xl font-extralight">
            Meanwhile, for your body, citrine and carnelian provide energy and
            vitality. Additionally, spiritually, rose quartz and selenite offer
            love and inner peace. By embracing these crystal bracelet benefits,
            you’ll feel more balanced, harmonious, and connected to yourself.
          </p>
        </div>
        <div className="text-center my-10">
          <h1 className="text-4xl my-10 text-yellow font-syne-sans font-semibold max-sm:text-3xl">
            Healing Crystal
          </h1>
          <p className="leading-9 text-xl font-extralight">
            Healing crystals are made into bracelets that are suitable for daily
            use. The benefits of healing crystals are well attained only when
            they are placed close to our body. It is believed that the
            human&apos;s pulse beat has the capacity to amplify the properties
            of the healing crystals when worn as a bracelet on a person&apos;s
            wrist. Crystal bracelets are handcrafted based on the needs of the
            user. If a person is looking for new opportunities and good luck in
            their life then a green aventurine bracelet would be the stone for
            them. If someone is looking for strong protection from evil eyes
            then a black Tourmaline bracelet would be the choice for them. In
            case if the aim is to build a spiritual path and indulge in
            meditation then an amethyst bracelet would be the best healing
            bracelet ever. If expanding consciousness is the motive of the
            wearer then clear quartz healing crystal bracelets would work
            wonders. Stones are also combined together in a crystal healing
            bracelet to achieve added benefits. For example, citrine and
            amethyst crystals are combined together and crafted into a bracelet
            to release stress and anxiety. <br />
            Similarly, all the seven chakra stones are tied together as a
            bracelet in order to balance the entire body chakras. At &apos;Talk
            to crystals,&apos; we have all kinds of best healing bracelets
            handcrafted with utmost precision waiting for you!
          </p>
        </div>
        <h2 className="text-yellow max-sm:text-3xl text-center font-syne-sans font-semibold text-4xl mt-20">
          Astrologically Powered Bracelets for Wealth, Health, and Harmony.
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 justify-center gap-8 my-10 lg:mx-20 ">
          {bracelet.map((items, key) => {
            return (
              <div
                key={key}
                className="border rounded-xl md:h-[300px] lg:h-auto justify-center flex flex-col p-8 gap-4 hover:shadow-md hover:shadow-yellow hover:scale-102 hover:duration-200 duration-200 hover:border-yellow"
              >
                <Image
                  src={items?.image}
                  alt="stone_img"
                  width={100}
                  height={100}
                  className="mx-auto aspect-auto lg:auto md:py-8"
                />

                <h3 className="text-2xl text-yellow font-syne-sans">
                  {items?.name}
                </h3>
                <p className="text-xl font-extralight">{items?.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center max-sm:space-y-20 space-y-10 max-lg:mt-30">
          <h2 className="text-yellow max-sm:text-3xl text-4xl">
            Bracelets That Heal, Protect, and Empower.
          </h2>
          <button
            className="
                    relative text-black font-bold text-lg bg-yellow-400 rounded shadow-lg
                    hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
                    px-4 py-2"
          >
            All Crystals Bracelets are available
          </button>
        </div>
      </section>
    </>
  );
}
