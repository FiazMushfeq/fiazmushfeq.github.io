import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PortfolioSection from './PortfolioSection';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToNext = () => {
    const schoolSection = document.getElementById('school');
    if (schoolSection) {
      schoolSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PortfolioSection id="hero" backgroundImage={heroBg}>
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Fiaz Mushfeq
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium">
            Full-Stack Software Engineer
          </p>
          <div className="text-lg text-muted-foreground space-y-2">
            <p className="max-w-2xl mx-auto leading-relaxed">
              Full-Stack Software Engineer with expertise in cloud technologies, machine learning applications, 
              and scalable system architecture. Currently working at M&F LLC developing cross-platform e-commerce solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm">
              <span>📧 fiazmushfeq01@gmail.com</span>
              <span>📍 Dayton, NJ</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-secondary/80 hover:bg-secondary text-secondary-foreground"
            onClick={() => window.open('https://github.com/FiazMushfeq', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-secondary/80 hover:bg-secondary text-secondary-foreground"
            onClick={() => window.open('https://linkedin.com/in/fiazmushfeq', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>

        <div className="pt-12">
          <Button 
            variant="ghost" 
            size="lg"
            onClick={scrollToNext}
            className="animate-bounce text-muted-foreground hover:text-foreground"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default HeroSection;