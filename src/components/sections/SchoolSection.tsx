import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import schoolBg from '@/assets/school-bg.jpg';

const SchoolSection = () => {
  return (
    <PortfolioSection id="school" backgroundImage={schoolBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Education</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/90 backdrop-blur-sm border-border shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
                University of Texas at Austin
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Expected November 2025</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-card-foreground">Postgraduate Certificate in Cybersecurity</h4>
                <p className="text-muted-foreground">Online Program</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-card-foreground">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {['Containerization', 'Virtualization', 'Windows Server', 'Database Management', 'Cloud Computing'].map((course) => (
                    <Badge key={course} variant="secondary">{course}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border-border shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
                Rutgers University
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Graduated January 2024</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-card-foreground">Bachelor of Science in Computer Science</h4>
                <p className="text-muted-foreground">New Brunswick, NJ</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Strong Foundation</h4>
                    <p className="text-muted-foreground">Comprehensive computer science curriculum</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Academic Excellence</h4>
                    <p className="text-muted-foreground">Focus on software engineering and cybersecurity</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default SchoolSection;