import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import warrenLogo from "@/assets/warren-logo-full.png";
import appStoreBadge from "@/assets/app-store-badge.png";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-muted/10 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={warrenLogo} alt="Warren" className="w-[300px] md:w-[360px] h-auto" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-heading text-3xl md:text-5xl font-bold text-primary mt-8 mb-4"
        >
          Join Warren and Simplify<br />Your Investing Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-lg mb-8 max-w-md"
        >
          Start building your perfect portfolio today. No experience required.
        </motion.p>

        <motion.a
          href="https://apps.apple.com/gb/app/warren-simplify-investing/id6504190197"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <img src={appStoreBadge} alt="Download on the App Store" className="h-[52px] w-auto" />
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
