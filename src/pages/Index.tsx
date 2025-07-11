import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SchoolSection from '@/components/sections/SchoolSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import GoalsSection from '@/components/sections/GoalsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SchoolSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <HobbiesSection />
      <GoalsSection />
    </div>
  );
};

export default Index;
