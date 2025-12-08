import { Cpu, GitBranch, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "AI Powered Interview Automation",
    icon: Cpu,
    description:
      "An AI-powered platform designed for automated candidate assessments and interview processes. Built with scalability in mind and deployed on AWS cloud infrastructure for high availability and performance.",
    technologies: ["AWS", "AI/ML", "Python", "Cloud Infrastructure"],
  },
  {
    title: "End-to-End Social Media Analytics Platform",
    icon: GitBranch,
    description:
      "Designed and implemented an end-to-end Social Media Analytics Platform with automated data ingestion, ETL processing, containerized microservices, CI/CD pipelines using GitHub & Jenkins, infrastructure provisioning via Terraform, AWS-based scalable architecture, monitoring dashboards in Grafana, and fully automated deployment using Docker and DevOps best practices.",
    technologies: ["AWS", "Terraform", "Docker", "Jenkins", "Grafana"],
  },
  {
    title: "Cloud-Enabled Smart Door Lock System Using RFID",
    icon: Lock,
    description:
      "Developed a secure, cloud-enabled smart door lock system leveraging RFID-based user authentication, multi-factor verification (RFID + OTP), real-time activity logging, and remote administrative control through AWS IoT Core, while designing the architecture to be scalable and reliable by integrating ESP32 hardware with cloud services for seamless authentication, monitoring, and remote access management.",
    technologies: ["AWS IoT Core", "ESP32", "RFID", "Cloud Infrastructure"],
  },
];

const Projects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when element enters viewport
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;

      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "This is what i have builded";
  const visibleChars = Math.floor(text.length * scrollProgress);

  return (
    <section id="projects" className="py-20" ref={containerRef}>
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-black leading-tight min-h-[1.2em]">
            {text.split("").map((char, index) => {
              // "This is what i have " is 20 chars. "builded" starts at 20.
              const isHighlight = index >= 20;

              return (
                <span
                  key={index}
                  className={`transition-opacity duration-75 ${index < visibleChars ? "opacity-100" : "opacity-10"
                    } ${isHighlight ? "text-c1" : ""}`}
                >
                  {char}
                </span>
              );
            })}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col space-y-4 border-l-2 border-black/10 pl-6 hover:border-c1 transition-colors"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-black flex items-center gap-3 font-serif">
                  {project.title}
                  <project.icon className="h-5 w-5 text-black/40 group-hover:text-c1 transition-colors" />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-black/60 font-sans"
                    >
                      {tech}{i < project.technologies.length - 1 ? " • " : ""}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-black/70 leading-relaxed max-w-2xl font-sans">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
