import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Users, BookOpen, MessageSquare } from "lucide-react";
import communityBg from "@/assets/community-bg.jpg";
import { useState } from "react";

export function CommunitySection() {
  const [email, setEmail] = useState("");

  const events = [
    {
      icon: Calendar,
      title: "Weekly Halaqas",
      description: "Join our weekly study circles every Friday",
      time: "Fridays 7:00 PM"
    },
    {
      icon: BookOpen,
      title: "Quran Study",
      description: "Interactive Quran study sessions",
      time: "Tuesdays 8:00 PM"
    },
    {
      icon: MessageSquare,
      title: "Discussion Forum",
      description: "Engage with fellow Muslims online",
      time: "Always Active"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="section-islamic relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${communityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>

      <div className="container-islamic relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Community Events */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Join Our Community
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Connect with fellow Muslims, participate in study circles, and grow 
              together in faith. Our community welcomes learners at every stage 
              of their spiritual journey.
            </p>

            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-sage-light/30 transition-colors">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <event.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{event.description}</p>
                    <p className="text-primary text-xs font-medium">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="btn-islamic">
                <Users className="w-4 h-4 mr-2" />
                Join Community
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card p-8 rounded-2xl shadow-elegant border border-gold/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Stay Connected
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for weekly Islamic insights, 
                prayer reminders, and community updates.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 text-center border-sage/30 focus:border-primary"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-islamic-gold w-full">
                Subscribe to Newsletter
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                <span>Weekly Islamic insights and reflections</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                <span>Prayer time reminders and Islamic calendar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                <span>Exclusive community event invitations</span>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}