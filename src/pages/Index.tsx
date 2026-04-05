import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LinkedInTestimonials from "@/components/LinkedInTestimonials";
import AppPreview from "@/components/AppPreview";
import InteractiveDemo from "@/components/InteractiveDemo";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <LinkedInTestimonials />
      <AppPreview />
      <InteractiveDemo />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
