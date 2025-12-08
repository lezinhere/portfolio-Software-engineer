import Typewriter from "./Typewriter";

const Footer = () => {
  return (
    <footer id="contact" className="pt-28 pb-10">
      <div className="layout-wrapper">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black">
            This is how you can <span className="text-c1">reach</span> out to me
          </h2>
        </div>
        <a
          href="mailto:lezinhere@gmail.com"
          className="text-center mx-auto block text-2xl sm:text-4xl md:text-5xl font-serif hover:text-c1 transition-colors min-h-[1.5em]"
        >
          <Typewriter texts={["lezinhere@gmail.com"]} delay={100} deleteDelay={50} pauseDelay={5000} />
        </a>
        <ul className="flex flex-wrap sm:gap-10 w-full justify-center font-sans mt-7">
          <li className="text-center w-full sm:w-auto leading-10">
            <a
              href="https://github.com/lezinhere"
              rel="noopener noreferrer"
              target="_blank"
              className="text-xl sm:text-2xl opacity-50 hover:opacity-100 transition-opacity duration-200"
            >
              GitHub
            </a>
          </li>
          <li className="text-center w-full sm:w-auto leading-10">
            <a
              href="https://linkedin.com/in/lezin-vm"
              rel="noopener noreferrer"
              target="_blank"
              className="text-xl sm:text-2xl opacity-50 hover:opacity-100 transition-opacity duration-200"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
