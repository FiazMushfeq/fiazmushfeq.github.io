import { Heart, Book, Film, Zap, Dumbbell, Cat, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PortfolioSection from '../PortfolioSection';
import hobbiesBg from '@/assets/hobbies-bg.jpg';

const HobbiesSection = () => {
  const hobbies = [
    {
      icon: Book,
      title: "Reading",
      description: "Currently reading The Midnight Library by Matt Haig! Click to check out my Goodreads profile!",
      color: "text-blue-400",
      url: "https://www.goodreads.com/user/show/147823084-fiaz"
    },
    {
      icon: Film,
      title: "Watching Movies",
      description: "Enjoying classic films and exploring cinematic masterpieces from different eras. Click to check out my Letterboxd profile!",
      color: "text-orange-400",
      url: "https://letterboxd.com/fiazm/films/"
    },
    {
      icon: Zap,
      title: "Running",
      description: "Former Cross Country and T&F athlete, now I enjoy running and exploring the outdoors!",
      color: "text-green-400"
    },
    {
      icon: Dumbbell,
      title: "Working Out",
      description: "Going for a body recomposition after a long hiatus due to an injury!",
      color: "text-red-400"
    },
    {
      icon: Cat,
      title: "Playing with My Cat",
      description: "I love my cat, Moja, and he's my best friend!",
      color: "text-purple-400"
    },
    {
      icon: Plane,
      title: "Travelling",
      description: "Exploring new places, cultures, and experiences around the world.",
      color: "text-cyan-400"
    }
  ];

  return (
    <PortfolioSection id="hobbies" backgroundImage={hobbiesBg}>
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Heart className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Hobbies & Interests</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <Card 
                key={index} 
                className={`bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group text-center ${
                  hobby.url ? 'cursor-pointer' : ''
                }`}
                onClick={hobby.url ? () => window.open(hobby.url, '_blank') : undefined}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors">
                      <IconComponent className={`h-8 w-8 ${hobby.color} group-hover:scale-110 transition-transform`} />
                    </div>
                  </div>
                  <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                    {hobby.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-card/90 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">Life Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            "It's not what you look at that matters, it's what you see" ~ Henry David Thoreau
          </p>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default HobbiesSection;