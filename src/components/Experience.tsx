import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Bounty Plus Inc.",
      location: "BGC Taguig City, NCR",
      period: "2023 - Present",
      type: "Full-time",
      description: [
        "Created and deployed multiple business systems that significantly improved company operations.",
        "Developed and implemented automation scripts to streamline production and inventory processes.",
        "Designed and maintained macros to enhance operational efficiency.",
        "Supported system development for financial, procurement, and sales functions.",
        "Collaborated with teams to identify, test, and deploy software solutions."
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Vue","VB.net","PHP", "Javascript"]
    },

    {
      title: "IT Intern",
      company: "Phosclay Chemical Manufacturing",
      location: "Dasmarinas, Cavite",
      period: "2023",
      type: "Internship",
      description: [
        "Assisted in development of internal tools and applications",
        "Gained hands-on experience with version control and agile methodologies",
        "Participated in daily standups and sprint planning meetings",
        "Contributed to documentation and testing procedures",
      ],
      technologies: ["Java", "MongoDB", "MySQL", "Vb.net",]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional growth in software development, 
              AI automation, and innovative technology solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-auto md:right-auto w-4 h-4 bg-primary rounded-full border-4 border-background md:top-6 top-2 md:transform md:translate-x-2 z-10" 
                     style={{
                       left: index % 2 === 0 ? 'auto' : '8px',
                       right: index % 2 === 0 ? '-8px' : 'auto'
                     }} 
                />

                {/* Content Card */}
                <Card className="ml-8 md:ml-0 bg-card-gradient shadow-card hover:shadow-hover smooth-transition border-border/50">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary"
                        >
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="text-muted-foreground text-sm flex items-start"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/20 hover:border-primary/40"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;