import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import WarrenLogo from "@/components/WarrenLogo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
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
        <WarrenLogo size={280} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary mt-8 text-center"
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

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.15)" }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-lg transition-all"
      >
        Get Started
      </motion.button>

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
