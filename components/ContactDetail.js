import Image from "next/image";
import Link from "next/link";

const contactDetails = [
  {
    icon: "MapPinLine.svg",
    title: "Location",
    description:
      "A calm and confidential space to begin your journey toward healing.",
    detail: "1287 Maplewood Drive, Los Angles , CA 9026 →",
    href: "https://www.google.com/maps?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026",
  },
  {
    icon: "Phone.svg",
    title: "Phone",
    description: "Have questions or need guidance? We&apos;re just a call away.",
    detail: "+(323) 555-0192 →",
    href: "tel:+13235550192",
  },
  {
    icon: "EnvelopeSimple.svg",
    title: "Mail",
    description:
      "Reach out anytime — every message is treated with care and confidentiality.",
    detail: "serena@mindcure.com →",
    href: "mailto:serena@mindcure.com",
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
          {contactDetails.map(({ icon, title, description, detail, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[280px] max-w-[370px] bg-white shadow-[5px_9px_0px_rgba(227,_232,_227,_0.67)] rounded-3xl p-6 py-12 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
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
              <p className="leading-[150%] text-[#008186]">{detail}</p>{" "}
              {/* underline removed */}
            </a>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[768px] flex flex-col items-center gap-12 text-center text-[#213650]">
          <div className="w-full flex flex-col items-center gap-3 px-4">
            <h2 className="text-[32px] md:text-[38px] font-semibold leading-[120%]">
              Get in Touch
            </h2>
            <p className="text-xl leading-[150%]">
              We&apos;re here to listen. Reach out to start your healing journey —
              you&apos;re not alone.
            </p>
          </div>

          {/* Get Started Button (desktop) */}
          <Link href="/contact">
            <button className="hidden md:block bg-darkcyan text-white text-sm font-medium rounded-xl border-2 border-darkcyan px-6 py-2 font-ibm-plex-sans transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSection;
