import { ReactNode } from 'react';

interface PortfolioSectionProps {
  id: string;
  backgroundImage: string;
  children: ReactNode;
  className?: string;
}

const PortfolioSection = ({ id, backgroundImage, children, className = '' }: PortfolioSectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen relative flex items-center justify-center bg-cover bg-center bg-fixed ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-section"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default PortfolioSection;