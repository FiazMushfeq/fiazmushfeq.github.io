import { Heart, Book, Camera, Music, Gamepad2, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PortfolioSection from '../PortfolioSection';
import hobbiesBg from '@/assets/hobbies-bg.jpg';

const HobbiesSection = () => {
  const hobbies = [
    {
      icon: Book,
      title: "Reading",
      description: "Love diving into sci-fi novels and tech blogs to stay curious and inspired.",
      color: "text-blue-400"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring the world through different perspectives.",
      color: "text-purple-400"
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Creating electronic music and experimenting with sound design in my free time.",
      color: "text-green-400"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategic and puzzle games that challenge problem-solving skills.",
      color: "text-red-400"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new cultures and gaining fresh perspectives from different places.",
      color: "text-orange-400"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond coding, I'm passionate about creative pursuits and experiences that inspire innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-border shadow-elevated hover:shadow-glow transition-all duration-300 group text-center">
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
          <p className="text-lg text-muted-foreground leading-relaxed">
            "I believe that the best innovations come from diverse experiences and perspectives. 
            My hobbies not only provide balance in my life but also fuel my creativity and 
            problem-solving approach in software development. Whether I'm composing music, 
            capturing a perfect shot, or getting lost in a good book, each experience contributes 
            to my growth as both a developer and a person."
          </p>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default HobbiesSection;