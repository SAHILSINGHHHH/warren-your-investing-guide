import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import warrenLogo from "@/assets/warren-logo-full.png";
import appStoreBadge from "@/assets/app-store-badge.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero px-6">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-muted/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <img src={warrenLogo} alt="Warren" className="w-[240px] md:w-[300px] h-auto" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mt-4 text-center"
      >
        Simplify Investing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-muted-foreground text-lg md:text-xl max-w-md text-center mt-4 font-body"
      >
        Warren — your personal investing assistant that makes the market simple.
      </motion.p>

      <motion.a
        href="https://apps.apple.com/gb/app/warren-simplify-investing/id6504190197"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8"
      >
        <img src={appStoreBadge} alt="Download on the App Store" className="h-[52px] w-auto" />
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce-chevron" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
