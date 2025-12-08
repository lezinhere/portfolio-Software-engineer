import { useState, useEffect } from "react";

const Typewriter = ({ texts, delay = 100, deleteDelay = 50, pauseDelay = 2000 }: { texts: string[]; delay?: number; deleteDelay?: number; pauseDelay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentFullText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);

        if (currentIndex === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        // Deleting
        setCurrentText(currentFullText.substring(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);

        if (currentIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteDelay : delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, texts, textIndex, delay, deleteDelay, pauseDelay]);

  return <span>{currentText}</span>;
};

const Hero = () => {
  const skills = [
    "Automation Scripting",
    "Cloud Services",
    "Infrastructure as Code",
    "Configuration Management",
    "Networking",
    "DevOps Automation",
    "CI/CD Pipelines",
    "Monitoring"
  ];

  return (
    <section id="profile-hero" className="layout-wrapper flex-nowrap lg:pt-20 2xl:pt-0 font-serif flex flex-col-reverse lg:flex-row justify-between mb-20 mt-10">
      <div className="text-center lg:text-left flex flex-col justify-center lg:w-3/5 xl:w-2/3 2xl:w-3/5 relative z-10">
        <h1 className="text-xl lg:text-3xl xl:text-4xl font-medium">
          My name is <span className="text-c1">Lezin VM</span>,<br />
        </h1>
        <h2 className="m-0 text-base lg:text-3xl xl:text-4xl text-black opacity-50 mb-3 lg:mb-6 font-medium">
          and I might know a bit about
        </h2>
        <h2 className="text-2xl min-[470px]:text-4xl lg:text-6xl xl:text-7xl text-black font-bold mb-6 lg:mb-8 leading-none min-h-[1.2em]">
          <span className="bg-black/10 inline-block leading-none px-2 whitespace-nowrap">
            <Typewriter texts={skills} />
          </span>
        </h2>
        <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
          <a
            className="p-0 leading-[40px] sm:leading-[60px] w-[200px] sm:w-[280px] text-md sm:text-xl relative group text-center cursor-pointer font-sans block"
            href="#contact"
          >
            <div className="absolute inset-0 border-2 border-black"></div>
            <div className="w-2 group-hover:w-full bg-c1 absolute left-0 top-0 bottom-0 transition-all duration-500 ease-in-out overflow-hidden">
              <div className="w-[200px] sm:w-[280px] h-full text-white flex items-center justify-center">
                Wanna Talk?
              </div>
            </div>
            <span className="relative z-10 group-hover:text-transparent transition-colors duration-500">
              Wanna Talk?
            </span>
          </a>
        </div>
      </div>
      <div className="flex w-full lg:w-2/5 xl:w-1/3 2xl:w-2/5 lg:flex-shrink-0">
        <img
          src="/img/computer.webp"
          className="mx-auto mt-14 my-4 max-h-[400px] h-full w-auto lg:max-w-none"
          alt="Computer"
        />
      </div>
    </section>
  );
};

export default Hero;