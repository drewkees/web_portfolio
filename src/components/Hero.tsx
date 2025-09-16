import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import profilePlaceholder from "@/assets/profile.png";
import profilePlaceholderLight from "@/assets/profile-light.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);


  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden bg-white dark:bg-background">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
              Hi, I'm{" "}
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                Andrew C. Baldonado
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Building Smart, Scalable, and Automated Solutions
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-12">
              Computer Engineering graduate specializing in Software Development, 
              Web Solutions, and AI Automation. Passionate about creating innovative 
              technology that makes a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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
            <div className="flex justify-center lg:justify-start space-x-6">
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
          </div>

          {/* Right Side - Interactive Profile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer" onClick={handleScrollToAbout}>
              <div className="relative overflow-hidden rounded-full">
                <img
                  src={isDark ? profilePlaceholder : profilePlaceholderLight}
                  alt="Andrew C. Baldonado"
                  className={`w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full object-contain transition-transform duration-300 group-hover:scale-105 ${isDark ? "bg-black" : "bg-transparent"}`}

                />
                <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 rounded-full p-4 backdrop-blur-sm">
                    <ArrowDown className="h-8 w-8 text-primary-foreground transform rotate-90" />
                  </div>
                </div>
              </div>
              
              {/* Interactive Hint */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to learn more
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;