
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const astrologicalQuotes = [
    {
      text: "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
      source: "Carl Sagan",
      type: "wisdom"
    },
    {
      text: "As above, so below, as within, so without, as the universe, so the soul.",
      source: "Hermes Trismegistus",
      type: "ancient"
    },
    {
      text: "The stars impel, they do not compel. What we make of their influence is up to us.",
      source: "Ancient Wisdom",
      type: "wisdom"
    },
    {
      text: "We are born at a given moment, in a given place, and like vintage years of wine, we have the qualities of the year and season in which we are born.",
      source: "Carl Jung",
      type: "ancient"
    }
  ];

  const testimonials = [
    {
      text: "My daily horoscope was incredibly accurate and helped me navigate a difficult decision at work!",
      author: "Sarah M.",
      location: "New York, USA",
      type: "testimonial"
    },
    {
      text: "The birth chart reading was so insightful - it explained so much about my personality and relationships.",
      author: "Michael R.",
      location: "London, UK",
      type: "testimonial"
    },
    {
      text: "I love the daily insights and cosmic guidance. It's become part of my morning routine!",
      author: "Luna P.",
      location: "Los Angeles, USA",
      type: "testimonial"
    }
  ];

  const allContent = [...astrologicalQuotes, ...testimonials];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allContent.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [allContent.length]);

  const currentContent = allContent[currentIndex];

  return (
    <section className="section-islamic bg-gradient-to-br from-sage-light/40 to-primary-light/20 geometric-pattern-light">
      <div className="container-islamic">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-gold" />
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="transition-all duration-500 ease-in-out">
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-primary leading-relaxed italic mb-6">
                "{currentContent.text}"
              </blockquote>
              
              <div className="text-muted-foreground">
                <p className="font-medium text-lg">
                  — {'source' in currentContent ? currentContent.source : currentContent.author}
                </p>
                {currentContent.type === 'testimonial' && 'location' in currentContent && (
                  <p className="text-sm mt-1">{currentContent.location}</p>
                )}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {allContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Content Type Indicator */}
          <div className="mt-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              currentContent.type === 'wisdom' 
                ? 'bg-primary/10 text-primary' 
                : currentContent.type === 'ancient'
                ? 'bg-sage/20 text-sage'
                : 'bg-gold/20 text-gold'
            }`}>
              {currentContent.type === 'wisdom' && '✨ Cosmic Wisdom'}
              {currentContent.type === 'ancient' && '🔮 Ancient Knowledge'}
              {currentContent.type === 'testimonial' && '⭐ Community Voice'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
