import { useState, useEffect } from "react";

const phrases = [
  "I build for production, not demos.",
  "I take uptime personally.",
  "If it breaks, I want to know before anyone else does.",
  "If I do it twice, I automate it.",
  "Deployments should be boring.",
  "Boring means it worked.",
  "I trust logs more than assumptions.",
  "I’m comfortable where things can go wrong.",
  "Reliability isn’t a feature — it’s the baseline.",
  "I build things that stay alive under pressure.",
  "If there’s no monitoring, it doesn’t exist."
];

const PhilosophyLoop = () => {
  const [index, setIndex] = useState(0);
  // Start with the element visible and in position
  const [animationClass, setAnimationClass] = useState("opacity-100 translate-y-0");

  useEffect(() => {
    const loop = setInterval(() => {
      // 1. Fade out and slide up
      setAnimationClass("opacity-0 -translate-y-4 transition-all duration-500 ease-in");
      
      setTimeout(() => {
        // 2. Change text and instantly slide down (invisible)
        setIndex((prev) => (prev + 1) % phrases.length);
        setAnimationClass("opacity-0 translate-y-4 transition-none");
        
        // 3. Fade in and slide to center
        setTimeout(() => {
          setAnimationClass("opacity-100 translate-y-0 transition-all duration-500 ease-out");
        }, 50); // slight delay so the browser registers the transition-none state

      }, 500); // wait for exit animation to complete
      
    }, 3000); // 2.5s visible + 0.5s transition = 3s total loop

    return () => clearInterval(loop);
  }, []);

  return (
    <section className="py-6 md:py-10 w-full flex justify-center items-center px-4">
      {/* Fixed height container to prevent layout shifts as text changes */}
      <div className="h-10 md:h-12 flex items-center justify-center overflow-hidden">
        <p className={`text-lg md:text-2xl font-sans font-medium text-black/80 text-center tracking-wide ${animationClass}`}>
          "{phrases[index]}"
        </p>
      </div>
    </section>
  );
};

export default PhilosophyLoop;
