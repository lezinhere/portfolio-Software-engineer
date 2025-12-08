import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 md:px-20">
      <div className="max-w-4xl space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Wanna Talk?
        </h2>

        <div className="space-y-8">
          <a
            href="mailto:mailtolezinvm@gmail.com"
            className="block text-2xl md:text-4xl text-muted-foreground hover:text-primary transition-colors"
          >
            mailtolezinvm@gmail.com
          </a>

          <div className="flex flex-col space-y-4 pt-8">
            <a
              href="https://github.com/lezinhere"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/lezin-vm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              <Instagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
