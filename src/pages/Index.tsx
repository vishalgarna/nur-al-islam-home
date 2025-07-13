
import { SocialHeader } from "@/components/SocialHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SocialHeader />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <ResourcesSection />
      <ServicesSection />
      <CustomerReviewsSection />
      <CommunitySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
