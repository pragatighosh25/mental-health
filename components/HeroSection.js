'use client';
import { useCallback } from 'react';

const HeroSection = () => {
  const onGetStartedClick = useCallback(() => {
    window.open("https://main.d1hiqvipguwtuq.amplifyapp.com/book", "_blank");
  }, []);

  return (
    <section
      className="w-full h-[775px] bg-[url('/background.png')] bg-cover bg-no-repeat bg-top flex items-center justify-center text-darkslategray-200 text-center font-noto-sans px-4 md:px-36"
    >
      <div className="max-w-5xl flex flex-col items-center gap-4">
        <p className="text-sm leading-5">
          Supporting Your Path to Healing and Growth
        </p>

        <h1 className="text-3xl md:text-[54px] leading-tight text-darkslategray-300">
          Personalized Therapy for Emotional Wellness and Life Clarity
        </h1>

        <div className="text-base md:text-xl text-darkslategray-100 font-medium leading-7">
          <p>Begin your journey toward inner peace, stronger relationships,</p>
          <p>a more purposeful life.</p>
        </div>
        <button
          onClick={onGetStartedClick}
          className="mt-4 bg-darkcyan text-white text-lg font-medium rounded-xl px-8 py-3 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
