import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LinkedInTestimonials from "@/components/LinkedInTestimonials";
import AppPreview from "@/components/AppPreview";
import InteractiveDemo from "@/components/InteractiveDemo";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollWipe from "@/components/ScrollWipe";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ScrollWipe />
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal>
        <LinkedInTestimonials />
      </ScrollReveal>
      <ScrollReveal>
        <AppPreview />
      </ScrollReveal>
      <ScrollReveal>
        <InteractiveDemo />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Index;
