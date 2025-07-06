import Image from "next/image";

const books = [
  {
    title: "Heart of Man",
    image: "/Book1.png",
    link: "https://amazon.in",
  },
  {
    title: "The Two Towers",
    image: "/Book2.png",
    link: "https://amazon.in",
  },
  {
    title: "Goal Planner",
    image: "/Book3.png",
    link: "https://amazon.in",
  },
];

const BookSection = () => {
  return (
    <section className="w-full bg-[#dee9de] py-16 px-6 md:px-12 lg:px-36 flex flex-col items-center gap-10 font-noto-sans text-[#523c00]">
      {/* Badge */}
      <div className="rounded-full bg-[#ffcd93] h-6 px-4 flex items-center justify-center text-sm font-medium">
        Authored by Dr Serena Blake
      </div>

      {/* Title */}
      <h2 className="text-[32px] sm:text-[40px] lg:text-[54px] text-[#213650] text-center leading-tight">
       Blake Writes
      </h2>

      {/* Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6 max-w-[1128px]">
        {books.map((book, index) => (
          <div
            key={index}
            className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#f5f9f5] w-full sm:w-[360px] bg-white rounded-[20px] shadow-md overflow-hidden flex flex-col"
          >
            {/* Book Image */}
            <Image
              src={book.image}
              alt={book.title}
              width={360}
              height={242}
              className="w-full h-[242px] object-cover"
            />

            {/* Book Info */}
            <div className="flex flex-col gap-2.5 py-5 px-6 text-[#213650]">
              <h3 className="text-[22px] font-semibold">{book.title}</h3>
              <p className="text-[#78858f] text-[15px]">Available on Amazon</p>
              <p className="text-[#78858f] text-[15px]">
                Format: Kindle and Paperback
              </p>
            </div>

            {/* CTA Button */}
            <div className="py-5 px-6">
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#009da3] hover:bg-[#007f81] transition-colors duration-300 text-white font-semibold text-sm px-6 py-3 rounded-md border-2 border-[#009da3] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009da3] flex items-center justify-center"
              >
                View on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookSection;
