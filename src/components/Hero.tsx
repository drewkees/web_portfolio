import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePlaceholder}
                alt="Andrew C. Baldonado"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-glow border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-20" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Andrew C. Baldonado
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Building Smart, Scalable, and Automated Solutions
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Computer Engineering graduate specializing in Software Development, 
            Web Solutions, and AI Automation. Passionate about creating innovative 
            technology that makes a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={handleScrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover smooth-transition text-lg px-8 py-3"
            >
              Get In Touch
            </Button>
            <Button
              onClick={handleScrollToAbout}
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8 py-3 smooth-transition"
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/andrewbaldonado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary smooth-transition"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/andrew-baldonado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary smooth-transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:andrew@example.com"
              className="text-muted-foreground hover:text-primary smooth-transition"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;