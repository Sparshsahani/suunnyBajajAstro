"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import LogoShree from "../../public/images/logoShree.png";
import LogoWhatsApp from "../../public/images/whatsapp.png";
import LogoCircle from "../../public/images/logoCircle.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setShowNavbar(false); // Scrolling down
    } else {
      setShowNavbar(true); // Scrolling up
    }
  });

  const handlerMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/919616464666", "_blank");
    }
  };

  const feature = [
    { link: "Home", routes: "#home" },
    { link: "About", routes: "#aboutUs" },
    { link: "Services Offered", routes: "#serviceOffered" },
    { link: "Software Generated Kundli", routes: "#energyExchange" },
    { link: "Testimonials", routes: "#testimonials" },
    { link: "FAQ", routes: "#frequentlyAskedQuestion" },
  ];

  return (
    <>
      <div className="fixed max-sm:right-6 max-sm:bottom-6 right-15 bottom-15 z-999">
        <Link href={"https://wa.me/919616464666"}>
          <Image
            src={LogoWhatsApp}
            alt="whatsapp_logo"
            className="max-sm:w-[50px]  w-[70px] "
          />
        </Link>
      </div>
      <motion.header
        className={`w-full z-30 fixed top-0 left-0  ${
          showNavbar ? "bg-blue" : "bg-yellow"
        } `}
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between max-lg:ml-3 2xl:mx-20">
            {/* Logo */}
            <div className="py-1 flex item-center justify-between rounded-full 2xl:ml-10">
              <Link href="/">
                <h2 className="space-x-2 text-4xl font-imperial_script-sans">
                  <span className="text-white font-semibold">Astro</span>
                  <span className="text-yellow font-semibold">Sunny</span>
                </h2>
                <h2 className="max-lg:text-[10px] capitalize italic">
                  one who brings light through astrology
                </h2>
              </Link>
            </div>
            <div className="lg:hidden">
              <Link href="/">
                <Image alt="Logo" src={LogoShree} className="w-30 mx-auto" />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="lg:static absolute bg-black lg:bg-inherit w-full lg:w-auto top-full transition-all duration-500 ease-in-out h-0 opacity-0 invisible lg:h-auto lg:opacity-100 lg:visible overflow-hidden">
              <ul className="flex lg:flex-row flex-col lg:items-center">
                {feature.map((items, id) => (
                  <li
                    key={id}
                    className="lg:py-11 py-4 px-5 border-b border-border lg:border-b-0"
                  >
                    <Link
                      className="opacity-100 block text-[13px] font-semibold relative uppercase transition-all duration-500 ease-linear cursor-pointer hover:text-yellow"
                      href={items.routes}
                    >
                      {items.link}
                    </Link>
                  </li>
                ))}
                <button
                  onClick={handleClick}
                  className="relative text-black font-bold text-lg bg-yellow rounded shadow-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white hover duration-100 ease-in-out whitespace-nowrap px-4 py-2 "
                >
                  Connect With Us
                </button>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className=" cursor-pointer lg:hidden mr-10">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-transform duration-300 ease-in-out transform ${
                  isOpen ? "scale-110 text-yellow" : "scale-100"
                }`}
              >
                {isOpen ? (
                  <RxCross1
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6"
                  />
                ) : (
                  <RxHamburgerMenu
                    onClick={() => setIsOpen(true)}
                    className="h-6 w-6"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden px-4 pb-4 space-y-2 bg-black shadow-md">
            {feature.map((items, id) => (
              <Link
                key={id}
                href={items.routes}
                onClick={handlerMenuToggle}
                className="block text-white border-b-1 py-3 normal-case hover:text-yellow"
              >
                {items.link}
              </Link>
            ))}
            <div className="text-center py-2">
              <button
                onClick={handleClick}
                className="bg-yellow mx-auto font-semibold px-5 py-1 rounded flex gap-x-2 justify-center items-center"
              >
                Connect With Us
                <Image
                  src={LogoWhatsApp}
                  alt="whatsapp_logo"
                  className="w-[5vh] "
                />
              </button>
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
}
