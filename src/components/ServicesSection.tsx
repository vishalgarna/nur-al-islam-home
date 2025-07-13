
import { Heart, Home, Shield, Sparkles, Users, Star } from "lucide-react";

export function ServicesSection() {
  const loveServices = [
    "Love Problem Solution",
    "Get Lost Love Back", 
    "Inter Caste Love Marriage Solution",
    "Love Marriage Specialist",
    "Relationship Problem Solution",
    "Break Up Problem Solution",
    "One-Sided Love Solution",
    "Girlfriend-Boyfriend Problem Solution",
    "Convince Parents for Love Marriage",
    "Best Muslim Astrologer for Love Back"
  ];

  const familyServices = [
    "Husband Wife Dispute Solution",
    "Divorce Problem Solution", 
    "Second Marriage Problems Solution",
    "Childless Problem Solution",
    "Mother-in-Law Problems Solution",
    "Extra Marital Affair Solution",
    "Family Problem Solution Astrologer",
    "Black Magic Removal",
    "Kala Jadu Specialist",
    "Evil Eye Protection"
  ];

  const locationServices = [
    "Best Muslim Astrologer in India",
    "Muslim Astrologer in Delhi",
    "Muslim Astrologer in Mumbai", 
    "Muslim Astrologer in Kolkata",
    "Best Muslim Astrologer in Gujarat",
    "Muslim Astrologer in Bangalore",
    "Muslim Astrologer in Ahmedabad",
    "Best Muslim Astrologer in Rajasthan",
    "Best Muslim Astrologer in Jaipur",
    "Best Muslim Astrologer in Jodhpur"
  ];

  const ServiceCard = ({ title, services, icon: Icon, gradient }: {
    title: string;
    services: string[];
    icon: any;
    gradient: string;
  }) => (
    <div className={`bg-card rounded-2xl p-6 shadow-[var(--shadow-elegant)] border border-border/50 hover:scale-[1.02] transition-all duration-300 ${gradient}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
      
      <div className="grid gap-2">
        {services.map((service, index) => (
          <a
            key={index}
            href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-muted-foreground hover:text-primary transition-colors text-sm py-1 px-2 rounded hover:bg-primary/5 block"
          >
            • {service}
          </a>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border/50">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-medium text-sm"
        >
          Get Consultation <Star className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <section className="section-islamic bg-gradient-to-br from-background to-primary-light/10">
      <div className="container-islamic">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Astrology Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive astrological solutions for all your life problems. Get expert guidance from experienced Muslim astrologers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Love & Relationship"
            services={loveServices}
            icon={Heart}
            gradient="hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50"
          />
          
          <ServiceCard
            title="Family & Marriage"
            services={familyServices}
            icon={Home}
            gradient="hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
          />
          
          <ServiceCard
            title="Location Services"
            services={locationServices}
            icon={Users}
            gradient="hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-primary-foreground shadow-[var(--shadow-elegant)]">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
            <p className="mb-6 opacity-90">
              Get instant consultation with our expert astrologers. Available 24/7 for urgent problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                WhatsApp Now
              </a>
              <a
                href="tel:+919876543210"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
