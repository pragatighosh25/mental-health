'use client';
import Image from 'next/image';

const Featured = () => {
  return (
    <section className="w-full bg-[#dee9de] py-10 px-4 text-center font-noto-sans">
      <div className="max-w-[1152px] mx-auto flex flex-col items-center gap-8">
        <h2 className="text-[42px] sm:text-[54px] leading-[120%] text-[#213650]">
          Featured In
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center gap-6">
          {[1, 2, 3, 4].map((num) => (
            <Image
              key={num}
              src={`/Specialities Cards${num}.png`}
              alt={`Featured ${num}`}
              width={256}
              height={103}
              className="rounded-3xl w-64 h-[103px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
