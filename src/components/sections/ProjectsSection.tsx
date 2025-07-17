import { Code, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import cityBg from '@/assets/city.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Site",
      description: "A modern, responsive portfolio website showcasing my professional experience, skills, and projects",
      technologies: ["TypeScript", "HTML", "CSS"],
      githubUrl: "https://github.com/FiazMushfeq/fiazmushfeq.github.io",
      liveUrl: "https://fiazmushfeq.github.io/"
    },
    {
      title: "Expense Tracker",
      description: "A full-stack expense tracking application built with Flutter frontend and Python gRPC backend, using PostgreSQL for data persistence",
      technologies: ["Dart", "C++", "Python", "Swift", "CMake", "Shell"],
      githubUrl: "https://github.com/FiazMushfeq/Expense-Tracker",
      liveUrl: "https://fiazmushfeq.github.io/Expense-Tracker/"
    }
  ];

  return (
    <PortfolioSection id="projects" backgroundImage={cityBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Code className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group w-full max-w-sm">
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
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-card/50 backdrop-blur-sm"
            onClick={() => window.open('https://github.com/FiazMushfeq', '_blank')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default ProjectsSection;