import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import experienceBg from '@/assets/experience-bg.jpg';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company: "M&F LLC | Startup",
      location: "Whitehouse Station, NJ",
      period: "Jun 2024 – Present",
      description: "Developing mobile-optimized applications with focus on scalable cloud infrastructure and CI/CD automation. Building secure and scalable AWS solutions for real-time data processing.",
      technologies: ["Flutter", "AWS Lambda", "AWS DynamoDB", "AWS CodePipeline", "AWS API Gateway", "CI/CD"],
      achievements: [
        "Developed a mobile-optimized storefront using Flutter, delivering a responsive and intuitive shopping experience",
        "Implemented CI/CD automation using AWS CodePipeline, significantly reducing deployment time and manual errors",
        "Built a secure and scalable AWS Lambda function to fetch product data from DynamoDB, optimizing for low latency and high availability",
        "Integrated AWS API Gateway with Lambda and DynamoDB to expose RESTful endpoints for real-time product retrieval"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Fintech Ecosystem Development Corp | Startup",
      location: "Collegeville, PA",
      period: "Jun 2022 – Feb 2023",
      description: "Contributed to blockchain application development and explored real-world use cases of distributed ledger technology.",
      technologies: ["Java", "API Development", "Python", "Testing"],
      achievements: [
        "Contributed to the development of a proof-of-concept blockchain application, showcasing foundational knowledge of smart contract design and deployment",
        "Explored real-world use cases, advantages, and limitations of blockchain technology through hands-on project work"
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