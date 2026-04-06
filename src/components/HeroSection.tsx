import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import warrenLogo from "@/assets/warren-logo-full.png";
import appStoreBadge from "@/assets/app-store-badge.png";

const particles = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 3,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 4,
}));

const HeroSection = () => {
  const words = "Simplify Investing".split(" ");

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero px-6">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-muted/5 blur-[150px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <img src={warrenLogo} alt="Warren" className="w-[240px] md:w-[300px] h-auto" />
      </motion.div>

      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mt-4 text-center flex gap-3">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.2, ease: "easeOut" }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-muted-foreground text-base md:text-lg max-w-md text-center mt-3 font-body"
      >
        Warren — your personal investing assistant that makes the market simple.
      </motion.p>

      <motion.a
        href="https://apps.apple.com/gb/app/warren-simplify-investing/id6504190197"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-5 relative overflow-hidden rounded-lg group"
      >
        <img src={appStoreBadge} alt="Download on the App Store" className="h-[52px] w-auto relative z-10" />
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.15) 45%, hsl(var(--primary) / 0.3) 50%, hsl(var(--primary) / 0.15) 55%, transparent 60%)",
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
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
