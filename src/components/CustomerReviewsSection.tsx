
import { useState, useEffect } from "react";
import { Star, User, Quote } from "lucide-react";

export function CustomerReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const customerReviews = [
    {
      name: "Priya Sharma",
      location: "Delhi, India",
      rating: 5,
      service: "Love Problem Solution",
      review: "I was facing serious problems in my relationship. After consulting with the astrologer, I got amazing results within 15 days. My boyfriend came back and now we are happily married. Highly recommended!",
      date: "2 months ago"
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai, India", 
      rating: 5,
      service: "Husband Wife Dispute Solution",
      review: "My marriage was on the verge of divorce. The astrologer's guidance and remedies saved my relationship. My wife and I are now living peacefully. Thank you so much for your help!",
      date: "1 month ago"
    },
    {
      name: "Anjali Patel",
      location: "Gujarat, India",
      rating: 5,
      service: "Family Problem Solution",
      review: "Family disputes were destroying our peace. The astrologer provided effective solutions and mantras. Now our family is united and happy. Excellent service and genuine results!",
      date: "3 weeks ago"
    },
    {
      name: "Mohammed Ali",
      location: "Bangalore, India",
      rating: 5,
      service: "Black Magic Removal",
      review: "I was suffering from black magic effects for years. After consulting here, I got immediate relief. The astrologer is very knowledgeable and provided 100% effective solutions.",
      date: "1 month ago"
    },
    {
      name: "Sunita Devi",
      location: "Jaipur, India",
      rating: 5,
      service: "Inter Caste Marriage Solution",
      review: "My parents were against my inter-caste marriage. The astrologer helped convince them with his powerful remedies. Now I'm happily married with family's blessings!",
      date: "2 months ago"
    },
    {
      name: "Vikram Singh",
      location: "Kolkata, India",
      rating: 5,
      service: "Get Lost Love Back",
      review: "I lost my girlfriend due to family pressure. The astrologer's mantras and guidance brought her back in just 21 days. Amazing results! I'm very grateful for this service.",
      date: "3 months ago"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [customerReviews.length]);

  const currentReview = customerReviews[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-gold fill-gold' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="section-islamic bg-gradient-to-br from-primary-light/30 to-sage-light/20 geometric-pattern-light">
      <div className="container-islamic">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real testimonials from satisfied clients who found solutions to their problems through our astrology services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Review Display */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] border border-border/50 mb-8">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-gold/60" />
            </div>

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {renderStars(currentReview.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{currentReview.review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary">{currentReview.name}</h4>
                  <p className="text-sm text-muted-foreground">{currentReview.location}</p>
                </div>
              </div>

              {/* Service & Date */}
              <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {currentReview.service}
                </span>
                <span>{currentReview.date}</span>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {customerReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-card rounded-xl p-4 shadow-[var(--shadow-soft)]">
              <div className="text-2xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-[var(--shadow-soft)]">
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-[var(--shadow-soft)]">
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-[var(--shadow-soft)]">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
