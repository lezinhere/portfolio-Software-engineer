import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;

      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "This is how my background looks like";
  const visibleChars = Math.floor(text.length * scrollProgress);

  const experiences = [
    {
      title: "Technical Intern (Cloud & Devops)",
      company: "CloudifyOps",
      location: "Bangalore, India",
      period: "Present",
      description: [
        "Focusing on Cloud infrastructure and DevOps methodologies.",
        "Contributing to cloud-native solution development and deployment."
      ]
    },
    {
      title: "Cloud & Devops Trainee",
      company: "Computron Skillspark",
      location: "Kochi, India",
      period: "Jun 2025 - Dec 2025",
      description: [
        "Completed intensive training in DevOps tools and practices.",
        "Gained hands-on experience with CI/CD pipelines and infrastructure automation."
      ]
    },
    {
      title: "DevOps IG Intern",
      company: "GTECH MULEARN",
      location: "Remote", // Assuming remote or unspecified, keeping structure consistent
      period: "2024 - 2025",
      description: [
        "Learning and implementing modern DevOps tools and practices.",
        "Guiding and mentoring student communities in DevOps concepts.",
        "Collaborating on infrastructure automation projects."
      ]
    }
  ];

  return (
    <section className="py-20" ref={containerRef}>
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black leading-tight min-h-[1.2em]">
          {text.split("").map((char, index) => {
            const isBackground = index >= 15 && index < 25;

            return (
              <span
                key={index}
                className={`transition-opacity duration-75 ${index < visibleChars ? "opacity-100" : "opacity-10"
                  } ${isBackground ? "text-c1" : ""}`}
              >
                {char}
              </span>
            );
          })}
        </h2>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto px-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group border-l-2 border-black/10 pl-8 hover:border-c1 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-serif font-medium text-black group-hover:text-c1 transition-colors">
                {exp.title}
              </h3>
              <span className="text-black/60 font-mono text-sm mt-1 md:mt-0">
                {exp.period}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <div className="text-lg text-black/80 font-medium">
                {exp.company}
              </div>
              {exp.location && (
                <>
                  <span className="hidden sm:inline text-black/40">•</span>
                  <div className="text-base text-black/60 italic">
                    {exp.location}
                  </div>
                </>
              )}
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-black/60 leading-relaxed text-base">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
