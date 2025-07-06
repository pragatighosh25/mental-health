'use client';
import Image from 'next/image';

const testimonials = [
  {
    title: 'Healed from Anxiety',
    content: 'I finally learned how to calm my mind and take back control of my life.',
    author: '– Aarav, 29',
  },
  {
    title: 'Overcame Depression',
    content: 'Therapy gave me a safe space to be heard and slowly start healing.',
    author: '– Megha, 35',
  },
  {
    title: 'Found Inner Strength',
    content: 'With support, I discovered resilience I never knew I had.',
    author: '– Ritika, 41',
  },
  {
    title: 'Rebuilt Confidence',
    content: 'Therapy helped me rediscover myself and rebuild confidence.',
    author: '– Raj, 33',
  },
  {
    title: 'Transformed Life',
    content: 'A life-changing experience that helped me find peace.',
    author: '– Sneha, 27',
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[url('/testimonials.png')] bg-cover bg-no-repeat bg-top py-12 px-4 text-[#523c00] font-noto-sans overflow-hidden">
      <div className="max-w-[1162px] mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Avatars and Image */}
        <div className="flex gap-6 shrink-0">
          <div className="flex flex-col gap-5">
            {[1, 2, 3, 4].map((num) => (
              <Image
                key={num}
                src={`/Small Avatar Item${num}.png`}
                alt={`Avatar ${num}`}
                width={96}
                height={96}
                className="rounded-full w-24 h-24 object-cover"
              />
            ))}
          </div>
          <Image
            src="/About Card Image.png"
            alt="Featured Client"
            width={264}
            height={454}
            className="rounded-3xl w-[264px] h-[454px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6 w-full">
          <div className="bg-[#ffcd93] rounded-full px-4 h-6 flex items-center justify-center text-center">
            <span className="text-sm font-medium">Testimonials</span>
          </div>

          <h2 className="text-[32px] sm:text-[38px] leading-[120%] text-[#213650]">
            Meet our happy clients
          </h2>

          {/* Horizontal Scroll Cards */}
          <div className="w-full overflow-x-auto scroll-smooth scrollbar-hide">
            <div className="flex gap-6 min-w-full py-2 px-1">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="min-w-[256px] sm:min-w-[288px] shadow-[5px_9px_0px_#e3e8e3aa] rounded-3xl bg-white h-56 p-6 flex flex-col justify-center"
                >
                  <h3 className="text-[18px] font-medium text-[#213650] mb-2">{t.title}</h3>
                  <p className="text-sm text-[#152b47] leading-[150%]">
                    {t.content}
                    <br />
                    <i>{t.author}</i>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
