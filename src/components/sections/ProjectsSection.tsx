import { Code, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import projectsBg from '@/assets/projects-bg.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI for Offensive and Defensive Operations",
      description: "Implemented machine learning models for intrusion detection and attack simulations in cybersecurity",
      technologies: ["Python", "Machine Learning", "Cybersecurity", "AI"],
      githubUrl: "https://github.com/FiazMushfeq",
      liveUrl: "#"
    },
    {
      title: "SSL Certificate Analysis Tool",
      description: "Analyzed certificate chains and subject alternative names for comprehensive HTTPS security evaluation",
      technologies: ["Python", "SSL/TLS", "Security Analysis", "Cryptography"],
      githubUrl: "https://github.com/FiazMushfeq",
      liveUrl: "#"
    },
    {
      title: "Cross-Platform E-Commerce Store",
      description: "Developed a Flutter-based e-commerce application with real-time inventory management using AWS DynamoDB",
      technologies: ["Flutter", "Dart", "AWS DynamoDB", "Real-time Sync"],
      githubUrl: "https://github.com/FiazMushfeq",
      liveUrl: "#"
    },
    {
      title: "Windows Firewall Logs Analyzer",
      description: "Built a comprehensive tool to parse and visualize firewall logs for detecting suspicious network activity",
      technologies: ["Python", "Data Visualization", "Network Security", "Log Analysis"],
      githubUrl: "https://github.com/FiazMushfeq",
      liveUrl: "#"
    },
    {
      title: "Cryptography with CyberChef",
      description: "Applied advanced cryptographic transformations for secure communications and data integrity verification",
      technologies: ["Cryptography", "Security", "Data Integrity", "CyberChef"],
      githubUrl: "https://github.com/FiazMushfeq",
      liveUrl: "#"
    }
  ];

  return (
    <PortfolioSection id="projects" backgroundImage={projectsBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Code className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my technical skills through real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="bg-card/50 backdrop-blur-sm">
            View All Projects
          </Button>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default ProjectsSection;