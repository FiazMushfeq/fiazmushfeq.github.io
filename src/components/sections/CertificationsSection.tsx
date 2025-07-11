import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import certificationsBg from '@/assets/certifications-bg.jpg';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2024",
      credentialId: "ABC123456",
      skills: ["Cloud Computing", "AWS Services", "Architecture"],
      verified: true
    },
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google",
      date: "January 2024",
      credentialId: "GGL789012",
      skills: ["IT Support", "Troubleshooting", "Network Fundamentals"],
      verified: true
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "December 2023",
      credentialId: "META345678",
      skills: ["React", "JavaScript", "UI/UX Design"],
      verified: true
    },
    {
      title: "CompTIA A+ Certification",
      issuer: "CompTIA",
      date: "November 2023",
      credentialId: "COMP901234",
      skills: ["Hardware", "Operating Systems", "Security"],
      verified: true
    }
  ];

  return (
    <PortfolioSection id="certifications" backgroundImage={certificationsBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Award className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Certifications</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuously expanding knowledge through industry-recognized certifications and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <div className="text-primary font-semibold">
                      {cert.issuer}
                    </div>
                  </div>
                  {cert.verified && (
                    <Badge className="bg-accent text-accent-foreground">
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Issued {cert.date}</span>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <strong>Credential ID:</strong> {cert.credentialId}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-card-foreground">Skills Demonstrated:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Credential
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
};

export default CertificationsSection;