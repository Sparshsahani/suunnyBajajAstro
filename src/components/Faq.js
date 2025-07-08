"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const faq = [
    {
      name: "How does an astrology works?",
      description:
        "In a consultation, we analyze your birth chart, discuss planetary influences, and provide insights tailored to your questions and concerns.",
    },
    {
      name: "What details do I need to provide for a reading?",
      description:
        "You'll need to provide your date, time, and place of birth for an accurate reading.",
    },
    {
      name: "Can I ask specific question during the session?",
      description:
        "Absolutely! You can ask about career, relationships, health, or any other area where you seek guidance.",
    },
    {
      name: "How long does a consultation last?",
      description:
        "A typical session lasts on average 60 minutes, depending on the package you choose.",
    },
    {
      name: "Is my information kept confidential?",
      description:
        "Yes, all consultations are completely private and confidential.",
    },
    {
      name: "What if I missed my scheduled consultation?",
      description:
        "If you miss your scheduled consultation, it will be automatically rescheduled to the next working day. Please respect our time by being punctual.",
    },
    {
      name: "How will the consultation be conducted?",
      description: "Consultations are conducted via call or Whatsapp Call.",
    },
    {
      name: "How can I provide feedback about the session",
      description:
        "We value your feedback! Please feel free to share your experience via email or through our Instagram or Whatsapp to help us continue improving our services.",
    },
  ];

  const toggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <>
      <section
        id="frequentlyAskedQuestion"
        className="lg:my-20 max-sm:mx-5 mx-30 min-md:mt-90"
      >
        <div className="text-center max-sm:pb-10">
          <h1 className="text-yellow text-5xl font-semibold font-syne-sans">
            Frequently Asked Question
          </h1>
        </div>

        {faq.map((items, id) => {
          return (
            <div key={id} className="max-w-4xl mx-auto mt-10">
              <div className="border border-gray-300 rounded-lg">
                <button
                  onClick={() => toggle(id)}
                  className="w-full flex justify-between items-center p-4 font-medium text-lg text-left"
                >
                  {items?.name}
                  <span className="ml-4 text-yellow">
                    {openIndex === id ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {openIndex === id && (
                  <div className="p-4 ">{items?.description}</div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
