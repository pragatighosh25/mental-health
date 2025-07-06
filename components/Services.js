import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Personalized strategies to help you manage stress, reduce anxiety, and regain a sense of calm and control in your life.",
    image: "/Services Card Illustration.svg",
    link: "/services/anxiety-stress-management",
  },
  {
    title: "Relationship Counseling",
    description:
      "Supportive sessions to help individuals or couples improve communication, rebuild trust, and strengthen emotional connections.",
    image: "/Services Card Illustration2.svg",
    link: "/services/relationship-counseling",
  },
  {
    title: "Trauma Recovery",
    description:
      "Compassionate care designed to help you heal from past trauma, rebuild resilience, and move forward with confidence.",
    image: "/Services Card Illustration3.svg",
    link: "/services/trauma-recovery",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-white py-16 px-4 text-center text-darkslategray-100 font-noto-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[54px] font-semibold leading-[100%] text-darkslategray">Services</h2>
          <p className="text-xl leading-[150%] max-w-xl text-darkslategray">
            Here you find dedicated solutions to help you improve your mental and emotional well-being.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-3xl shadow-[5px_9px_0px_#E3E8E3AA] hover:shadow-[8px_12px_20px_#E3E8E3AA] transition-transform hover:-translate-y-1 duration-300 p-8 flex flex-col items-center gap-5 text-darkslategray"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={160}
                height={120}
                className="object-contain"
              />
              <h3 className="text-[22px] font-medium text-darkslategray">{service.title}</h3>
              <div className="w-[266px] border-t border-lightsteelblue" />
              <p className="text-base leading-[180%] text-darkslategray-100 text-center text-darkslategray">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="mt-auto text-sm text-teal font-medium border-2 border-darkcyan rounded px-4 py-2 hover:bg-darkcyan hover:text-white transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
