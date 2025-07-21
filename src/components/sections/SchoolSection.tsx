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
        </div>

        <div className="flex justify-center">
          <Card className="bg-card/90 backdrop-blur-sm border-border shadow-elevated max-w-2xl w-full">
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