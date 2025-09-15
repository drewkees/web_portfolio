import { ExternalLink, Github, Code, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Automation Platform",
      description: "A comprehensive automation platform that uses AI to streamline business workflows and processes. Features include intelligent task scheduling, natural language processing, and seamless API integrations.",
      tech: ["React", "Node.js", "OpenAI API", "PostgreSQL", "Docker"],
      category: "AI Automation",
      icon: <Zap className="h-6 w-6" />,
      liveUrl: "https://automation-platform.example.com",
      githubUrl: "https://github.com/andrewbaldonado/ai-automation",
      featured: true,
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce businesses with advanced reporting, customer insights, and sales forecasting capabilities.",
      tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      liveUrl: "https://ecommerce-dashboard.example.com",
      githubUrl: "https://github.com/andrewbaldonado/ecommerce-dashboard",
      featured: true,
    },
    {
      title: "Smart Home IoT Controller",
      description: "Mobile-responsive web application for controlling IoT devices in smart homes. Features include device management, scheduling, and energy monitoring.",
      tech: ["React", "Python", "IoT", "WebSocket", "MongoDB"],
      category: "IoT Development",
      icon: <Code className="h-6 w-6" />,
      liveUrl: "https://smart-home.example.com",
      githubUrl: "https://github.com/andrewbaldonado/smart-home",
      featured: false,
    },
    {
      title: "Machine Learning Model Deployment",
      description: "Scalable ML model deployment platform with automated testing, monitoring, and version control for data science teams.",
      tech: ["Python", "FastAPI", "Docker", "AWS", "TensorFlow"],
      category: "Machine Learning",
      icon: <Zap className="h-6 w-6" />,
      liveUrl: "https://ml-deploy.example.com",
      githubUrl: "https://github.com/andrewbaldonado/ml-deploy",
      featured: false,
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Team collaboration platform with real-time messaging, file sharing, video calls, and project management features.",
      tech: ["React", "Socket.io", "Node.js", "WebRTC", "Redis"],
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      liveUrl: "https://collab-tool.example.com",
      githubUrl: "https://github.com/andrewbaldonado/collab-tool",
      featured: false,
    },
    {
      title: "Cryptocurrency Trading Bot",
      description: "Automated trading bot with advanced algorithms, risk management, and portfolio optimization for cryptocurrency markets.",
      tech: ["Python", "Pandas", "API Integration", "Machine Learning"],
      category: "Fintech",
      icon: <Code className="h-6 w-6" />,
      liveUrl: "https://crypto-bot.example.com",
      githubUrl: "https://github.com/andrewbaldonado/crypto-bot",
      featured: false,
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
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:border-primary"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
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
