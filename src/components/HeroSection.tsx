import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80"></div>
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-islamic text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Arabic Basmala */}
          <div className="text-gold font-arabic text-2xl md:text-3xl mb-6 opacity-90">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>

          {/* Main Heading */}
          <h1 className="heading-islamic text-balance">
            Bringing Islamic Knowledge to All
          </h1>

          {/* Subheading */}
          <p className="subheading-islamic max-w-2xl mx-auto text-balance">
            Connect with your faith through authentic Islamic resources, spiritual guidance, 
            and a community dedicated to growing closer to Allah.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button className="btn-islamic">
              Explore Resources
            </Button>
            <Button variant="outline" className="btn-islamic-outline">
              Join Community
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}