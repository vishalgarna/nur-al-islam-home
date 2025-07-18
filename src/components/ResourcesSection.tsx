
import { Star, Calculator, Calendar, Heart, Moon, BookOpen } from "lucide-react";

export function ResourcesSection() {
  const categories = [
    {
      icon: Star,
      title: "Zodiac Signs",
      description: "Explore all 12 zodiac signs and their unique characteristics",
      color: "primary"
    },
    {
      icon: Calculator,
      title: "Birth Chart Calculator",
      description: "Generate your personalized natal chart and cosmic blueprint",
      color: "sage"
    },
    {
      icon: Calendar,
      title: "Daily Horoscopes",
      description: "Get your personalized daily readings and cosmic guidance",
      color: "gold"
    },
    {
      icon: Heart,
      title: "Compatibility Reports",
      description: "Discover your romantic and friendship compatibility matches",
      color: "primary"
    },
    {
      icon: Moon,
      title: "Moon Phases",
      description: "Understand lunar cycles and their influence on your life",
      color: "sage"
    },
    {
      icon: BookOpen,
      title: "Astrology 101",
      description: "Learn the fundamentals of astrology and cosmic wisdom",
      color: "gold"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40 hover:bg-primary/5';
      case 'sage':
        return 'border-sage/30 hover:border-sage/50 hover:bg-sage/5';
      case 'gold':
        return 'border-gold/30 hover:border-gold/50 hover:bg-gold/5';
      default:
        return 'border-primary/20 hover:border-primary/40 hover:bg-primary/5';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'sage':
        return 'text-sage';
      case 'gold':
        return 'text-gold';
      default:
        return 'text-primary';
    }
  };

  return (
    <section className="section-islamic bg-background">
      <div className="container-islamic">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Astrology Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive collection of astrological tools and knowledge 
            organized into categories for easy access and cosmic discovery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`card-islamic p-8 text-center cursor-pointer group transition-all duration-300 ${getColorClasses(category.color)}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className={`w-8 h-8 ${getIconColor(category.color)}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary font-medium text-sm">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary-light to-sage-light p-8 rounded-2xl">
            <p className="text-primary font-medium text-lg italic mb-2">
              "As above, so below; as within, so without"
            </p>
            <p className="text-muted-foreground text-sm">— Hermetic Principle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
