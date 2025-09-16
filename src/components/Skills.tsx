import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Python", level: 95 },
        { name: "Laravel", level: 80 },
        { name: "VB.NET Macros", level: 95 },
        { name: "Express.js", level: 75 },
        { name: "PostgreSQL", level: 50 },
        { name: "MongoDB", level: 55 },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "OpenAI API", level: 80 },
        { name: "Machine Learning", level: 95 },
        { name: "Process Automation", level: 85 },
        { name: "API Integration", level: 95 },
        { name: "Workflow Optimization", level: 90 },
        { name: "Data Analysis", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Supabase", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 90 },
        { name: "VS Code", level: 95 },
      ],
    },
  ];

  const certifications = [
    "Python Developer Certification",
    "React Developer Certification",
    "Agile Project Management",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks 
              to build exceptional digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card-gradient shadow-card hover:shadow-hover smooth-transition border-border/50"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-accent-gradient h-2 rounded-full smooth-transition"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="bg-card-gradient shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center">
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;