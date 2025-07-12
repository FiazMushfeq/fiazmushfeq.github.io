import { Code2, Brain, Cloud, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import skillsBg from '@/assets/hero-bg.jpg'; // Reusing hero background for skills

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "Java", "Dart"],
      color: "text-blue-400"
    },
    {
      icon: Brain,
      title: "AI & Productivity Tools",
      skills: ["ChatGPT", "GitHub Copilot", "DeepSeek", "Claude", "Lovable"],
      color: "text-purple-400"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "CodePipeline", "CloudFront", "AWS Amplify", "Docker"],
      color: "text-orange-400"
    },
    {
      icon: Wrench,
      title: "Frameworks & Development Tools",
      skills: ["Flutter", "Flask", "gRPC", "PostgreSQL", "MySQL", "DynamoDB", "Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Figma", "n8n"],
      color: "text-green-400"
    }
  ];

  const operatingSystems = ["MacOS", "Windows", "Linux"];

  return (
    <PortfolioSection id="skills" backgroundImage={skillsBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Code2 className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technical Skills</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning cybersecurity, cloud technologies, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors">
                      <IconComponent className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* IDEs & Operating Systems */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4">IDEs & Editors</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["VS Code", "Android Studio", "Xcode", "Cursor"].map((ide) => (
                <Badge key={ide} variant="outline" className="text-sm px-4 py-2">
                  {ide}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-center bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Operating Systems</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {operatingSystems.map((os) => (
                <Badge key={os} variant="outline" className="text-sm px-4 py-2">
                  {os}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default SkillsSection;