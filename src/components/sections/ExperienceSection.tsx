import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import experienceBg from '@/assets/experience-bg.jpg';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company: "M&F LLC | eLearning Startup",
      location: "Whitehouse Station, NJ",
      period: "June 2024 – Present",
      description: "Leading full-stack development of cross-platform applications with focus on scalable cloud infrastructure. Developed Flutter-based e-commerce solutions with real-time data synchronization and implemented CI/CD pipelines for automated deployment.",
      technologies: ["Flutter", "Dart", "AWS DynamoDB", "AWS CodePipeline", "AWS Amplify", "CI/CD"],
      achievements: [
        "Built cross-platform e-commerce store ensuring seamless iOS and Android experience",
        "Implemented real-time product and inventory updates using DynamoDB",
        "Designed scalable backend infrastructure for efficient data retrieval and storage",
        "Utilized AWS CodePipeline for CI/CD automation, reducing manual deployment errors",
        "Integrated AWS Amplify for comprehensive monitoring, testing, and analytics"
      ]
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
                
                {experience.achievements && (
                  <div className="space-y-2">
                    <h5 className="font-medium text-card-foreground">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
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