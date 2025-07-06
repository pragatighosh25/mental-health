'use client';
import Image from 'next/image';

const About = () => {
  return (
    <section
      className="w-full h-[1390px] relative overflow-hidden font-noto-sans text-sm text-[#523c00]"
      style={{
        background: 'linear-gradient(180deg, #dfe9df 6.73%, #ffffff 62.02%, #ffffff)',
      }}
    >
      {/* Top Image and Intro */}
      <div className="absolute top-7 left-[50%] -translate-x-1/2 w-[90%] max-w-[1104px] flex flex-col items-center gap-12">
        <Image
          src="/about.png"
          alt="Dr. Lauren Harris"
          width={928}
          height={384}
          className="rounded-3xl object-cover w-full max-w-[928px] h-96"
        />

        <div className="w-full max-w-[576px] flex flex-col items-center gap-6">
          <div className="rounded-full px-4 h-6 flex items-center justify-center text-[#523c00]" style={{ backgroundColor: '#ffcd93' }}>
            About Me
          </div>
          <h2 className="text-[54px] leading-[100%] text-[#213650]">
            <p className="m-0">Welcome!</p>
            <p className="m-0">I’m Dr. Lauren Harris</p>
          </h2>
        </div>
      </div>

      {/* About Description */}
      <div className="absolute top-[712px] left-[50%] -translate-x-1/2 w-[90%] max-w-[928px] flex flex-col gap-6 text-left text-[#213650]">
        {/* Section 1 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[38px] leading-[120%] font-semibold">My career so far</h3>
          <p className="text-base leading-[180%]">
            I began my journey in mental health over four decades ago, inspired by a deep desire to help people find clarity and peace in their lives.
            Over the years, I’ve worked in hospitals, private practice, and community organizations, gaining valuable experience across a wide range of
            mental health concerns. My work has always centered around compassion, trust, and the belief that every person’s story matters.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-4 font-ibm-plex-serif">
          <h3 className="text-[38px] leading-[120%] font-semibold">Why I Chose Therapy</h3>
          <p className="text-base leading-[180%] font-noto-sans">
            From a young age, I found myself deeply attuned to people’s emotions and inner struggles. That natural empathy grew into a passion for
            supporting others through life’s challenges. I chose therapy because I believe healing happens in safe, trusting relationships — and I feel
            honored to walk alongside my clients as they discover strength, insight, and hope.
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[38px] leading-[120%] font-semibold">Path to Becoming a Psychotherapist</h3>
          <p className="text-base leading-[180%]">
            After earning my degree in psychology, I completed advanced training in counseling and psychotherapy. My path was shaped by hands-on work
            with diverse populations, from adolescents to older adults, each teaching me the power of empathy and resilience. I am licensed and
            continuously pursue professional development to stay informed on best practices in the field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
