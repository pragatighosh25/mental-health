import Image from "next/image";

const ContactHeaderContent = () => {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-start justify-start gap-12 px-6 md:px-20 lg:px-36 py-12 text-sm text-[#213650] font-noto-sans">
      {/* Left Content */}
      <div className="w-full md:w-[448px] flex flex-col items-start justify-center gap-6">
        <div className="rounded-[99px] bg-[#ffcd93] h-6 flex items-center justify-center px-4 text-center text-[#523c00]">
          <div className="leading-[150%]">Get in touch</div>
        </div>
        <h1 className="text-[36px] md:text-[48px] lg:text-[54px] font-semibold leading-[100%]">
          Talk with me or schedule a session.
        </h1>
        <div className="w-full rounded-3xl bg-[#f9faf9] p-6 md:p-12 text-base leading-[180%]">
          If you&apos;re feeling overwhelmed or stuck, you&apos;re not alone. I offer a
          safe, supportive space for individuals, couples, and families to heal
          and grow.
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-auto">
  <Image
    src="/about-temp.png"
    width={845}
    height={450}
    alt="Contact Header"
    className="rounded-3xl object-cover"
    style={{ width: "845px", height: "450px" }} 
    loading="lazy"
  />
</div>

    </div>
  );
};

export default ContactHeaderContent;