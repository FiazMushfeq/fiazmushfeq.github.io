import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SchoolSection from '@/components/sections/SchoolSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import HobbiesSection from '@/components/sections/HobbiesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CertificationsSection />
      <SchoolSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <HobbiesSection />
    </div>
  );
};

export default Index;
