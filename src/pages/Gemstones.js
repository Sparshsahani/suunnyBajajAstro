"use clinet";
import Image from "next/image";
import React from "react";
import LogoWhatsApp from "../../public/images/whatsapp.png";
import LogoOne from "../../public/images/certifyLogo1.png";
import LogoTwo from "../../public/images/certifyLogo2.png";
import LogoThree from "../../public/images/certifyLogo3.png";
import { GoDotFill } from "react-icons/go";

export default function Gemstones() {
  const gemstone = [
    {
      imgs: "/images/stoneImg/ruby.png",
      name: "Ruby",
      discription: "Ignites passion, power, and courage in the wearer.",
    },
    {
      imgs: "/images/stoneImg/emerald.png",
      name: "Emerald",
      discription: "Enhances intellect, prosperity, and emotional balance.",
    },
    {
      imgs: "/images/stoneImg/sapphire.png",
      name: "Sapphire",
      discription: "Symbol of truth, wisdom, and royal authority.",
    },
    {
      imgs: "/images/stoneImg/diamond.png",
      name: "Diamond",
      discription: "Represents purity, strength, and eternal love.",
    },
    {
      imgs: "/images/stoneImg/yellowSapphire_Pukhraj.png",
      name: "Yellow Sapphire (Pukhraj)",
      discription: " Attracts wealth, wisdom, and good fortune.",
    },
    {
      imgs: "/images/stoneImg/blueSapphire_Neelam.png",
      name: "Blue Sapphire (Neelam)",
      discription: "Brings protection, focus, and fast-acting results.",
    },
    {
      imgs: "/images/stoneImg/coral_Moonga.png",
      name: "Coral (Moonga)",
      discription: "Boosts confidence, strength, and energy.",
    },
    {
      imgs: "/images/stoneImg/hessonite_Gomed.png",
      name: "Hessonite (Gomed)",
      discription: "Dispels fear and confusion, attracting success.",
    },
    {
      imgs: "/images/stoneImg/catEye.png",
      name: "Cat’s Eye (Lehsunia)",
      discription: "Shields against evil forces and sharpens intuition.",
    },
    {
      imgs: "/images/stoneImg/pearl_Moti.png",
      name: "Pearl (Moti)",
      discription: "Calms the mind and nurtures inner peace.",
    },
    {
      imgs: "/images/stoneImg/amethyst.png",
      name: "Amethyst",
      discription: " A spiritual healer promoting clarity and calmness.",
    },
    {
      imgs: "/images/stoneImg/citrine.png",
      name: "Citrine",
      discription: "Draws success, abundance, and personal power.",
    },
    {
      imgs: "/images/stoneImg/aquamarine.png",
      name: "Aquamarine",
      discription: "A stone of tranquility, clarity, and safe travels.",
    },
    {
      imgs: "/images/stoneImg/garnet.png",
      name: "Garnet",
      discription: " Stimulates vitality, love, and emotional strength.",
    },
    {
      imgs: "/images/stoneImg/turquoise.png",
      name: "Turquoise",
      discription: " Offers protection and encourages honest expression.",
    },
    {
      imgs: "/images/stoneImg/lapisLazu.png",
      name: "Lapis Lazuli",
      discription: "Awakens wisdom, truth, and inner vision.",
    },
    {
      imgs: "/images/stoneImg/topaz.png",
      name: "Topaz",
      discription: "Promotes truth, forgiveness, and inner peace.",
    },
    {
      imgs: "/images/stoneImg/peridot.png",
      name: "Peridot",
      discription: "A stone of renewal, prosperity, and positive energy.",
    },
    {
      imgs: "/images/stoneImg/moonstone.png",
      name: "Moonstone",
      discription: "Enhances intuition and supports emotional cycles.",
    },
    {
      imgs: "/images/stoneImg/zircon.png",
      name: "Zircon",
      discription: "Boosts confidence, charm, and mental clarity.",
    },
  ];
  const certification = [
    {
      icons: <GoDotFill />,
      title: "100% Pure & Natural Gemstones",
    },
    {
      icons: <GoDotFill />,
      title: "Lab Certified for Authenticity",
    },
    {
      icons: <GoDotFill />,
      title: "Energized & Activated for Results",
    },
    {
      icons: <GoDotFill />,
      title: "Worldwide Shipping",
    },
    {
      icons: <GoDotFill />,
      title: "PAN India Delivery",
    },
    {
      icons: <GoDotFill />,
      title: "Customized Jewellery made for You",
    },
  ];
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/919616464666", "_blank");
    }
  };
  return (
    <>
      <section className="my-8 max-sm:mx-5 md:mx-10 lg:mx-30">
        <div className="text-center">
          <h1 className="text-yellow font-semibold max-sm:text-3xl md:text-4xl font-syne-sans my-8">
            Natural Gemstones
          </h1>
          <p className="font-extralight md:text-sm  2xl:text-lg ">
            Gemstones are beautiful natural treasures known for their beauty and
            spiritual properties. From radiant rubies to soothing aquamarines,
            these precious stones hold cultural significance. In addition to
            enhancing style, they promote emotional healing and balance. Explore
            our collection, each offering unique astrological and spiritual
            benefits to enrich your well-being.
          </p>
        </div>
        <div className="text-center lg:my-10">
          <h1 className="text-yellow font-semibold max-sm:text-3xl max-sm:mt-20 md:text-4xl font-syne-sans my-8">
            Gemstones & You
          </h1>
          <p className="font-extralight md:text-sm  2xl:text-lg ">
            Through Vedic astrological wisdom, we understand that the universe’s
            vibrations link our everyday lives to the planets.
          </p>
          <p className="font-extralight md:text-sm  2xl:text-lg ">
            These planets include the seven visible ones—Sun, Moon, Mars,
            Mercury, Jupiter, Venus, and Saturn—and two invisible forces, Rahu
            and Ketu.
          </p>
          <p className="font-extralight md:text-sm  2xl:text-lg ">
            Gemstones, formed over millennia, share vibrational energies with
            these planets. Acting as conduits for cosmic forces, gemstones hold
            the power to balance planetary influences in your life.
          </p>
        </div>
        <h2 className="text-yellow max-sm:text-3xl text-center mt-15 font-syne-sans font-semibold max-sm:mt-20 text-4xl">
          EXPERIENCE THE POWER & BENEFITS OF GEMSTONES
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-5 justify-center items-center gap-8 my-10 lg:mx-20 ">
          {gemstone.map((items, key) => {
            return (
              <div
                key={key}
                className="border rounded-xl md:h-[300px] lg:h-[300px] flex flex-col items-start justify-start px-5 gap-4 hover:shadow-md hover:shadow-yellow hover:scale-102 hover:duration-200 duration-200 hover:border-yellow"
              >
                <div className="mx-auto">
                  <Image
                    src={items?.imgs}
                    alt="stone_img"
                    width={100}
                    height={100}
                    className="aspect-auto"
                  />
                </div>

                <h3 className="text-2xl text-yellow font-syne-sans">
                  {items?.name}
                </h3>
                <p className="text-lg font-inter-sans font-extralight">
                  {items?.discription}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center max-sm:space-y-20 space-y-10">
          <h2 className="text-yellow max-sm:text-3xl text-4xl">
            Unlock the Power of Astrology with the Right Gemstone
          </h2>

          <button
            className="
                    relative text-yellow mx-auto font-bold text-lg 
                    px-4 py-2 block"
          >
            All Gemstones are Available For More Inquiry
          </button>

          <button
            onClick={handleClick}
            className="
                    relative text-black font-bold text-lg bg-yellow rounded shadow-lg
                    hover:scale-105 hover:shadow-lg hover:shadow-white hover:duration-100 duration-100
                    px-4 py-2 flex items-center mx-auto gap-x-2"
          >
            Connect With Us
            <Image
              src={LogoWhatsApp}
              alt="whatsapp_logo"
              className="w-[5vh] "
            />
          </button>
        </div>

        {/* Certification Logo */}

        <div className="text-center my-10">
          <h2 className="text-yellow font-syne-sans font-semibold text-4xl">
            Authentic by Origin, Divine by Nature
          </h2>
          <div className="flex flex-row justify-center gap-8 my-10 flex-wrap gap-x-20">
            <Image src={LogoOne} alt="" className="w-30 bg-white rounded p-2" />
            <Image src={LogoTwo} alt="" className="w-30 bg-white rounded p-2" />
            <Image
              src={LogoThree}
              alt=""
              className="w-30 bg-white rounded p-2"
            />
          </div>

          {/* certification benefits */}

          <div className="max-sm:mt-20 md:mx-40 md:mt-10">
            <div className="grid max-sm:grid-cols-1 max-sm:gap-0 grid-cols-3 grid-rows-2 gap-2">
              {certification.map((items, id) => {
                return (
                  <div
                    key={id}
                    className="flex flex-row justify-start  items-center gap-2 mt-5"
                  >
                    <span className="text-yellow max-sm:mr-0 md:mr-5">
                      {items?.icons}
                    </span>
                    <h1 className="text-xl max-sm:mx-auto font-extralight">
                      {items?.title}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
