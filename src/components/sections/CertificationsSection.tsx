import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PortfolioSection from '../PortfolioSection';
import certificationsBg from '@/assets/certifications-bg.jpg';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Postgraduate Certificate in Cybersecurity",
      issuer: "University of Texas – Austin",
      date: "Jun 2025 – Present",
      credentialId: "In Progress",
      skills: ["Network Security", "Firewall Essentials", "GRC", "Cloud Security", "Pen Testing", "Wireshark", "Palo Alto Networks"],
      verified: false,
      credentialUrl: "#"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "December 2024",
      credentialId: "View on CertMetrics",
      skills: ["AWS/Amazon Web Services", "Cloud Computing", "Cloud Architecture", "Security"],
      verified: true,
      credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/9f9ada469eca4dfda7478acb7e8cc6af"
    },
    {
      title: "Scaled Agile Certified SAFe® 6 DevOps Practitioner",
      issuer: "Scaled Agile",
      date: "October 2024",
      credentialId: "View on Credly",
      skills: ["CI/CD", "DevOps", "Scaled Agile Framework"],
      verified: true,
      credentialUrl: "https://www.credly.com/badges/d9338c01-8e55-4c78-aa58-c036f7f7378d"
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

                {cert.credentialUrl !== "#" ? (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Credential
                  </Button>
                ) : (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full" 
                    disabled
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    In Progress
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
};

export default CertificationsSection;