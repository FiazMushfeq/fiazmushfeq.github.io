import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import experienceBg from '@/assets/experience-bg.jpg';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "Summer 2024",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior engineers on feature implementation and code reviews.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "Startup Ventures",
      location: "Remote",
      period: "Part-time, 2023-2024",
      description: "Built responsive user interfaces and improved website performance. Worked closely with designers to implement pixel-perfect designs.",
      technologies: ["Vue.js", "Tailwind CSS", "JavaScript", "Git"]
    },
    {
      title: "Teaching Assistant",
      company: "University CS Department",
      location: "Campus",
      period: "Fall 2023",
      description: "Assisted students with programming assignments and conducted lab sessions for Introduction to Programming course.",
      technologies: ["Python", "Java", "Teaching", "Mentoring"]
    }
  ];

  return (
    <PortfolioSection id="experience" backgroundImage={experienceBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Briefcase className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Growing through hands-on experience and collaborative projects in the tech industry
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-card-foreground text-xl">
                      {experience.title}
                    </CardTitle>
                    <div className="text-primary font-semibold text-lg">
                      {experience.company}
                    </div>
                  </div>
                  <div className="text-muted-foreground space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
};

export default ExperienceSection;