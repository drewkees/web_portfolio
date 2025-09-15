import { Code, Cpu, Zap, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Computer Engineering",
      description: "Strong foundation in hardware-software integration and system design"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "End-to-end web solutions using modern frameworks and technologies"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI Automation",
      description: "Leveraging artificial intelligence to streamline processes and workflows"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Mindset",
      description: "Always exploring cutting-edge technologies and best practices"
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Computer Engineering graduate with a passion for technology, 
                I specialize in creating innovative software solutions that bridge 
                the gap between complex technical requirements and user-friendly experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across full-stack web development, artificial 
                intelligence automation, and scalable system architecture. I thrive 
                on solving challenging problems and turning ideas into reality through 
                clean, efficient code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, 
                contributing to open-source projects, or mentoring aspiring developers 
                in the community.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg bg-card-gradient shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card-gradient shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card-gradient shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card-gradient shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-card-gradient shadow-card hover:shadow-hover smooth-transition border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">{highlight.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;