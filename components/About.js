"use client";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="w-full relative overflow-hidden font-noto-sans text-sm text-[#523c00]"
      style={{
        background:
          "linear-gradient(180deg, #dfe9df 6.73%, #ffffff 62.02%, #ffffff)",
      }}
    >
      {/* Top Image and Intro */}
      <div className="pt-7 w-full flex flex-col items-center gap-12 px-4 md:px-0 max-w-[1104px] mx-auto">
        <Image
          src="/about-temp.png"
          alt="Dr Serena Blake"
          width={928}
          height={384}
          className="rounded-3xl object-contain w-full max-w-[928px] h-96"
        />

        <div className="w-full max-w-[576px] flex flex-col items-center justify-center text-center gap-6">
          <div
            className="rounded-full px-4 h-6 flex items-center justify-center text-[#523c00]"
            style={{ backgroundColor: "#ffcd93" }}
          >
            About Me
          </div>
          <h2 className="text-[54px] leading-[100%] text-[#213650]">
            <p className="m-0">Welcome!</p>
            <p className="m-0">I&apos;m Dr. Serena Blake</p>
          </h2>
        </div>
      </div>

      {/* About Description */}
      <div className="mt-20 px-4 md:px-0 w-full flex flex-col gap-6 text-left text-[#213650] max-w-[928px] mx-auto">
        <p className="text-base leading-[180%]">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
          Los Angeles, CA, with eight years of experience and over 500 client
          sessions. She blends evidence-based approaches—like
          cognitive-behavioral therapy and mindfulness—with compassionate,
          personalized care to help you overcome anxiety, strengthen
          relationships, and heal from trauma. Whether you meet in her
          Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
          committed to creating a safe, supportive space for you to thrive.
        </p>
      </div>

      {/* Info Grid */}
      <div className="mt-16 mb-20 px-4 md:px-0 w-full max-w-[928px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center text-[#213650]">
          {/* Office Hours */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#ffcd93] text-[#523c00] rounded-full px-4 h-6 flex items-center justify-center">
              Office Hours
            </div>
            <div className="text-base leading-[180%] flex flex-col gap-2">
              <p>
                <strong>In-person:</strong> Tue & Thu, 10 AM to 6 PM
              </p>
              <p>
                <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM to 5 PM
              </p>
            </div>
          </div>

          {/* Session Fees */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#ffcd93] text-[#523c00] rounded-full px-4 h-6 flex items-center justify-center">
              Session Fees
            </div>
            <div className="text-base leading-[180%] flex flex-col gap-2">
              <p>
                <strong>$200</strong> / individual session
              </p>
              <p>
                <strong>$240</strong> / couples session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;