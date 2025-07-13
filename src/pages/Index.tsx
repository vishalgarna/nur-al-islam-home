import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <ResourcesSection />
      <CommunitySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
