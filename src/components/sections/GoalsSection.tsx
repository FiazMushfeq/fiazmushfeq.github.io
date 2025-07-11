import { Target, Rocket, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PortfolioSection from '../PortfolioSection';
import goalsBg from '@/assets/goals-bg.jpg';

const GoalsSection = () => {
  const shortTermGoals = [
    {
      icon: Target,
      title: "Advanced Cybersecurity Certification",
      description: "Complete postgraduate certificate at UT Austin and pursue advanced security certifications",
      timeline: "2025"
    },
    {
      icon: TrendingUp,
      title: "Cloud Architecture Mastery",
      description: "Deepen expertise in AWS services and cloud security architecture patterns",
      timeline: "Next 12 months"
    }
  ];

  const longTermGoals = [
    {
      icon: Rocket,
      title: "Cybersecurity Leadership Role",
      description: "Lead security architecture and DevSecOps initiatives in enterprise environments",
      timeline: "3-5 years"
    },
    {
      icon: Users,
      title: "Industry Thought Leadership",
      description: "Contribute to cybersecurity community through speaking, writing, and mentoring",
      timeline: "5+ years"
    }
  ];

  return (
    <PortfolioSection id="goals" backgroundImage={goalsBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Target className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Goals & Vision</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by ambition and a clear vision for making a meaningful impact in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Short-term Goals */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Short-term Goals</h3>
            <div className="space-y-6">
              {shortTermGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                            {goal.title}
                          </CardTitle>
                          <div className="text-sm text-accent font-medium">{goal.timeline}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Long-term Goals */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Long-term Vision</h3>
            <div className="space-y-6">
              {longTermGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-card-foreground group-hover:text-accent transition-colors">
                            {goal.title}
                          </CardTitle>
                          <div className="text-sm text-primary font-medium">{goal.timeline}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-hero rounded-lg p-8 text-center max-w-4xl mx-auto border border-border shadow-elevated">
          <h3 className="text-3xl font-bold text-foreground mb-6">My Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            "To bridge the gap between innovative software development and robust cybersecurity practices. 
            I aim to create secure, scalable solutions that protect digital assets while enabling technological 
            advancement. My goal is to be a security-minded engineer who combines technical excellence with 
            strategic thinking, contributing to a safer digital world while mentoring the next generation 
            of security-conscious developers."
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            Let's Build Something Amazing Together
          </Button>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default GoalsSection;