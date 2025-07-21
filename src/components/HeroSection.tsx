import { ArrowDown, Github, Linkedin, Mail, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PortfolioSection from './PortfolioSection';
import heroBg from '@/assets/ocean-night.jpg';

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

        </div>
        
        <div className="flex justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            onClick={() => window.open('mailto:fiazmushfeq01@gmail.com', '_self')}
          >
            fiazmushfeq01@gmail.com
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
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-secondary/80 hover:bg-secondary text-secondary-foreground"
            onClick={() => window.open('https://www.credly.com/users/fiaz-mushfeq', '_blank')}
          >
            <Award className="mr-2 h-5 w-5" />
            Credly
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