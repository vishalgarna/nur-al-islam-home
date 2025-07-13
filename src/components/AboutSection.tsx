import { Heart, Book, Users, Star } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Book,
      title: "Authentic Knowledge",
      description: "Carefully curated Islamic resources from trusted scholars and sources"
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Tools and guidance to strengthen your connection with Allah"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow Muslims on their journey of faith"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Committed to providing the highest quality Islamic content"
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
                We aim to provide authentic Islamic resources, articles, and community 
                connections to help you grow in faith. Our platform serves as a bridge 
                between traditional Islamic knowledge and the modern world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece of content is carefully reviewed to ensure it aligns with 
                authentic Islamic teachings, helping you deepen your understanding and 
                strengthen your relationship with Allah.
              </p>
            </div>

            {/* Islamic Quote */}
            <div className="bg-card p-6 rounded-xl border-l-4 border-gold shadow-soft">
              <p className="text-primary font-medium italic">
                "And whoever relies upon Allah - then He is sufficient for him. 
                Indeed, Allah will accomplish His purpose."
              </p>
              <p className="text-muted-foreground text-sm mt-2">— Quran 65:3</p>
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