import { ExternalLink, Github, Code, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import fus from "@/assets/fus.png";
import library from "@/assets/library.png";

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A web-based system for managing the library of Sta. Cruz National High School. Features include book catalog management, student and staff accounts, borrowing and return tracking, and real-time availability monitoring.",
      tech: ["Next.js", "TypeScript","React Js","Mysql"],
      category: "Web Development",
      icon: <Zap className="h-6 w-6" />,
      liveUrl: "https://scnhs-learniverse.vercel.app/",
      githubUrl: "https://github.com/andrewbaldonado/ai-automation",
      featured: true,
      image: library,
    },
    {
      title: "Fund Utilization System",
      description: "A real-time analytics dashboard for monitoring and managing the Fund Utilization of the Municipality of Samar. Provides insights into budget allocation, expenditure tracking, and financial reporting for transparent governance.",
      tech: ["Next.js", "TypeScript","React Js"],
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      liveUrl: "https://fus-github-io.vercel.app/",
      githubUrl: "https://github.com/andrewbaldonado/ecommerce-dashboard",
      featured: true,
      image: fus,
    },
    
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work in software development, AI automation, 
              and innovative web solutions.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card-gradient shadow-card hover:shadow-hover smooth-transition border-border/50 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary">{project.icon}</div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    )}
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/20 hover:border-primary/40"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
   
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Other <span className="text-primary">Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient shadow-card hover:shadow-hover smooth-transition border-border/50 group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-primary">{project.icon}</div>
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary smooth-transition"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary smooth-transition"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary smooth-transition">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-primary/20"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
