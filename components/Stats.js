const Stats = () => {
  return (
    <section className="w-full bg-[url('/stats-bg.png')] bg-cover bg-no-repeat bg-top text-black font-noto-sans py-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Card 1 */}
        <div className="bg-white shadow-[5px_9px_0px_#E3E8E3AA] rounded-3xl p-10 w-full md:w-1/2 transform transition duration-300 hover:-translate-y-1 hover:shadow-[5px_12px_12px_#E3E8E3AA]">
          <div className="text-5xl font-bold leading-[48px] mb-2">40+</div>
          <h3 className="text-xl font-medium text-darkslategray mb-2">
            Years Experience
          </h3>
          <p className="text-sm text-darkslategray leading-5">
            Providing compassionate and effective Individual and Couples Therapy
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-[5px_9px_0px_#E3E8E3AA] rounded-3xl p-10 w-full md:w-1/2 transform transition duration-300 hover:-translate-y-1 hover:shadow-[5px_12px_12px_#E3E8E3AA]">
          <div className="text-5xl font-bold leading-[48px] mb-2">300+</div>
          <h3 className="text-xl font-medium text-darkslategray mb-2">
            Individual Client Sessions
          </h3>
          <p className="text-sm text-darkslategray leading-5">
            Helping individuals and couples heal, grow, and find purpose
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;

