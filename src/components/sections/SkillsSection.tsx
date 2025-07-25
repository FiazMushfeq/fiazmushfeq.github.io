import { Code2, Database, Cloud, Wrench, GitBranch, Monitor, Terminal, Laptop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import skillsBg from '@/assets/samurai.jpg'; // Using samurai background for skills

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Back End Development",
      skills: ["Python", "Java", "Dart", "C++", "NodeJS", "Go"],
      proficiency: {
        "Proficient": ["Python", "Java", "Dart"],
        "Familiar": ["C++", "NodeJS", "Go"]
      },
      color: "text-blue-400"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "API Gateway", "CodePipeline", "S3", "Route53", "CloudFormation", "IAM", "GitHub Actions", "GitLab CI/CD", "AWS CodeDeploy"],
      color: "text-orange-400"
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MySQL", "PostgreSQL", "Amazon Aurora", "Amazon DynamoDB"],
      color: "text-green-400"
    },
    {
      icon: Wrench,
      title: "Front End Development",
      skills: ["Flutter", "JavaScript", "TypeScript", "HTML", "CSS"],
      color: "text-purple-400"
    },
    {
      icon: GitBranch,
      title: "Version Control Systems",
      skills: ["GitHub", "GitLab", "Bitbucket"],
      color: "text-cyan-400"
    },
    {
      icon: Monitor,
      title: "Virtualization Tools",
      skills: ["AWS EC2", "Docker", "VirtualBox"],
      color: "text-red-400"
    }
  ];

  const operatingSystems = ["macOS", "Windows", "Linux"];

  return (
    <PortfolioSection id="skills" backgroundImage={skillsBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Code2 className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technical Skills</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors">
                  <Terminal className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                  IDEs & Editors
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["VS Code", "Android Studio", "Xcode", "IntelliJ IDEA", "PyCharm", "Cursor"].map((ide) => (
                  <Badge 
                    key={ide} 
                    variant="secondary" 
                    className="text-xs"
                  >
                    {ide}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors">
                  <Laptop className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                  Operating Systems
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {operatingSystems.map((os) => (
                  <Badge 
                    key={os} 
                    variant="secondary" 
                    className="text-xs"
                  >
                    {os}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default SkillsSection;