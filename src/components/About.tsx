const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="layout-wrapper relative min-h-[600px] flex items-center justify-center">
        {/* Layer 1: Background Text "Meet" */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 z-0 select-none">
          <span className="text-[12rem] md:text-[16rem] font-bold text-black/5 leading-none font-sans">
            Meet
          </span>
        </div>

        {/* Layer 2: Image */}
        <div className="relative z-10 mt-20">
          <img
            src="/img/computer.webp"
            alt="The Captain"
            className="w-full max-w-md mx-auto object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Layer 3: Middle Text "The" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 select-none pointer-events-none">
          <span className="text-6xl md:text-8xl font-bold text-transparent stroke-text font-serif opacity-50">
            The
          </span>
        </div>

        {/* Layer 4: Foreground Text "Captain" */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 select-none w-full text-center">
          <span className="text-[6rem] md:text-[10rem] font-bold text-c1 leading-none font-sans tracking-tighter mix-blend-multiply">
            Captain
          </span>
        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default About;
