"use client";
import { useState } from "react";
import Image from "next/image";

const faqData = [
  
  {
    question: "What do I need for virtual therapy?",
    answer:
      "To get started with virtual therapy, you’ll need a stable internet connection, a quiet and private space where you feel safe, and a device such as a smartphone, tablet, or computer with a working camera and microphone. Headphones are also recommended for better audio and privacy.",
  },
  {
    question: "Is virtual therapy confidential?",
    answer:
      "Absolutely. Virtual therapy sessions are conducted using secure, HIPAA-compliant platforms to ensure your privacy. Therapists are bound by the same ethical and legal standards as in-person sessions, so everything you share remains confidential unless there is a risk of harm to yourself or others.",
  },
  {
    question: "Can I use insurance for virtual therapy?",
    answer:
      "Yes, many insurance providers now offer coverage for virtual therapy, especially after the increased demand post-pandemic. It’s always best to contact your insurance company to confirm your benefits, coverage limits, and whether your therapist is in-network or accepts your plan.",
  },
  {
    question: "Is virtual therapy as effective as in-person therapy?",
    answer:
      "Yes, research shows that for many concerns like anxiety, depression, stress management, and relationship issues, virtual therapy can be just as effective as in-person sessions. The key is finding a therapist you connect with and creating a comfortable environment for open communication.",
  },
  {
    question: "When should one seek psychotherapy?",
    answer:
      "You should consider psychotherapy when you're feeling overwhelmed, emotionally distressed, facing difficult life transitions, or struggling with mental health conditions. Therapy offers a safe, non-judgmental space to explore your thoughts, gain insight, and develop healthier coping mechanisms.",
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