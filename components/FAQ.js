"use client";
import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "Do you accept insurance?",
    answer:
      "I do not accept insurance directly, but I can provide a superbill that you may submit to your insurance provider for potential reimbursement. Please check with your provider for eligibility.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, all sessions are conducted virtually using Zoom, providing you with convenient access to therapy from the comfort of your own space.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "A minimum of 24-hour notice is required for cancellations or rescheduling. Late cancellations may be subject to a cancellation fee.",
  },
];



const Faqsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start py-16 px-6 md:px-12 lg:px-36 gap-14 text-center text-[36px] md:text-[48px] lg:text-[54px] text-[#213650] font-noto-sans">
      {/* Heading */}
      <div className="w-full max-w-[1104px] flex flex-col items-center justify-center gap-6">
        <h2 className="leading-[100%]">FAQs</h2>
        <p className="text-xl leading-[150%] w-full max-w-[512px]">
          Here you find dedicated solutions to help you improve your mental and emotional well-being.
        </p>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-[672px] flex flex-col items-start justify-start gap-6 text-left text-lg">
        {faqData.map((faq, index) => (
          <div key={index} className="w-full flex flex-col gap-4">
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex flex-row items-center justify-between focus:outline-none"
            >
              <span className="font-semibold leading-[120%] text-left">{faq.question}</span>
              <Image
                src="/PlusCircle.svg"
                alt={openIndex === index ? "Collapse" : "Expand"}
                width={32}
                height={32}
                className={`transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[300px] opacity-100 pt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-base leading-[150%] text-[#425f80]">{faq.answer}</p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-[#e0e0e0]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqsection;