import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const islamicQuotes = [
    {
      text: "And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth.",
      source: "Quran 6:73",
      type: "verse"
    },
    {
      text: "The best of people are those who benefit others.",
      source: "Prophet Muhammad (PBUH)",
      type: "hadith"
    },
    {
      text: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
      source: "Quran 65:3",
      type: "verse"
    },
    {
      text: "A believer is not one who eats his fill while his neighbor goes hungry.",
      source: "Prophet Muhammad (PBUH)",
      type: "hadith"
    },
    {
      text: "And give good tidings to the patient, Who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.'",
      source: "Quran 2:155-156",
      type: "verse"
    }
  ];

  const testimonials = [
    {
      text: "This platform has truly transformed my understanding of Islam. The articles are beautifully written and deeply meaningful.",
      author: "Sister Aisha",
      location: "London, UK",
      type: "testimonial"
    },
    {
      text: "The community here is so welcoming and supportive. I've learned so much from the weekly study circles.",
      author: "Brother Omar",
      location: "Toronto, Canada",
      type: "testimonial"
    },
    {
      text: "As a new Muslim, I found exactly what I was looking for - authentic, accessible Islamic knowledge presented with love.",
      author: "Sister Maria",
      location: "Barcelona, Spain",
      type: "testimonial"
    }
  ];

  const allContent = [...islamicQuotes, ...testimonials];

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
              currentContent.type === 'verse' 
                ? 'bg-primary/10 text-primary' 
                : currentContent.type === 'hadith'
                ? 'bg-sage/20 text-sage'
                : 'bg-gold/20 text-gold'
            }`}>
              {currentContent.type === 'verse' && '📖 Quranic Verse'}
              {currentContent.type === 'hadith' && '💎 Prophetic Wisdom'}
              {currentContent.type === 'testimonial' && '💙 Community Voice'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}