
import { Star, Calendar, Heart, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Calendar,
      title: "Daily Horoscopes",
      description: "Get free personalized daily readings tailored to your zodiac sign"
    },
    {
      icon: Star,
      title: "Birth Charts",
      description: "Understand your true astrological self with detailed birth chart analysis"
    },
    {
      icon: Heart,
      title: "Compatibility Reports",
      description: "See how your signs align with others in love and friendship"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Insightful advice from experienced astrologers and cosmic wisdom"
    }
  ];

  return (
    <section className="section-islamic bg-sage-light/30 geometric-pattern-light">
      <div className="container-islamic">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We aim to make Astrology accessible and insightful for everyone. 
                Our platform provides daily horoscopes, birth chart analysis, and 
                personalized guidance to help you navigate life's journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece of astrological insight is carefully crafted to provide 
                meaningful guidance, helping you understand the cosmic influences 
                that shape your daily life and long-term destiny.
              </p>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-card p-6 rounded-xl border-l-4 border-gold shadow-soft">
              <p className="text-primary font-medium italic">
                "The stars are the blueprint of your soul, written in the language 
                of light across the infinite cosmos."
              </p>
              <p className="text-muted-foreground text-sm mt-2">— Ancient Wisdom</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-islamic p-6 text-center group">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
