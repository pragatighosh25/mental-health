import Image from "next/image";

const contactDetails = [
  {
    icon: "MapPinLine.svg",
    title: "Location",
    description:
      "A calm and confidential space to begin your journey toward healing.",
    detail: "27 Harmony Lane, Suite 24, Willowfield, NY →",
  },
  {
    icon: "Phone.svg",
    title: "Phone",
    description:
      "Have questions or need guidance? We're just a call away.",
    detail: "+123-456-7890 →",
  },
  {
    icon: "EnvelopeSimple.svg",
    title: "Mail",
    description:
      "Reach out anytime — every message is treated with care and confidentiality.",
    detail: "support@mindcure.com →",
  },
];

const inputClass =
  "w-full rounded-t rounded-b-none bg-[#c8dacd] border-b-2 border-[#008186] p-4 leading-[180%] focus:outline-none focus:ring-2 focus:ring-[#008186]";

const ContactDetailsSection = () => {
  return (
    <div className="w-full bg-[linear-gradient(-0.23deg,_#dee9de,_#eff4ef_82.49%,_#ffffff_82.73%,_#ffffff)] overflow-hidden flex flex-col items-center py-12 px-4 text-sm text-[#152b47] font-noto-sans">
      <div className="w-full max-w-[1152px] flex flex-col items-center gap-12">
        {/* Top Info Cards */}
        <div className="w-full flex flex-wrap gap-6 justify-center">
          {contactDetails.map(({ icon, title, description, detail }) => (
            <div
              key={title}
              className="flex-1 min-w-[280px] max-w-[370px] bg-white shadow-[5px_9px_0px_rgba(227,_232,_227,_0.67)] rounded-3xl p-6 py-12 flex flex-col gap-3"
            >
              <Image
                src={icon}
                width={32}
                height={32}
                alt={title}
                className="w-8 h-8"
              />
              <div className="text-[22px] font-medium leading-[120%] text-[#213650]">
                {title}
              </div>
              <p className="leading-[150%] text-[#425f80]">{description}</p>
              <p className="leading-[150%] text-[#008186]">{detail}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[768px] flex flex-col items-center gap-12 text-center text-[#213650]">
          <div className="w-full flex flex-col items-center gap-3 px-4">
            <h2 className="text-[32px] md:text-[38px] font-semibold leading-[120%]">
              Get in Touch
            </h2>
            <p className="text-xl leading-[150%]">
              We're here to listen. Reach out to start your healing journey — you’re not alone.
            </p>
          </div>

          <form className="w-full flex flex-col gap-4 text-base px-4" method="POST" action="#">
            {/* Name & Contact */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={inputClass}
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className={inputClass}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className={`${inputClass} h-[138px] resize-none`}
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 rounded-md border-2 border-[#009da3] text-[#008186] font-medium flex items-center justify-center py-4 px-6 hover:bg-[#009da3] hover:text-white transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSection;