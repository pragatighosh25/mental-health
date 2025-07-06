"use client";
import { useCallback } from "react";
import Link from "next/link";

const Consult = () => {
  return (
    <section
      className="w-full py-12 flex justify-center items-start font-noto-sans"
      style={{ backgroundColor: "#dee9de", color: "#213650" }}
    >
      <div className="w-full max-w-[1152px] px-6 flex flex-col items-center text-center">
        <div
          className="rounded-full px-4 py-1 text-sm font-ibm-plex-sans mb-6"
          style={{ backgroundColor: "#ffcd93", color: "#523c00" }}
        >
          Schedule a <span className="font-noto-sans">consultation</span> call
        </div>

        <h2 className="text-[38px] leading-[120%] font-semibold mb-4">
          <p className="m-0">Taking the first</p>
          <p className="m-0">step can be overwhelming</p>
        </h2>

        <p className="text-xl leading-[150%] max-w-[528px] mb-6">
          So, let's make it easy. Schedule a 15 minute consultation so we get to
          know each other.
        </p>
        <Link
          href="/contact"
          className="text-base font-semibold rounded-md px-6 py-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-md"
          style={{
            backgroundColor: "#009da3",
            border: "2px solid #009da3",
            color: "#fff",
          }}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Consult;
