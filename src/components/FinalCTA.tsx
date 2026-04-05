import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import warrenLogo from "@/assets/warren-logo-full.png";

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
          <img src={warrenLogo} alt="Warren" className="w-[200px] h-auto" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-lg"
          >
            Download for iOS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full border border-border text-primary font-heading font-semibold text-lg hover:bg-secondary transition-colors"
          >
            Download for Android
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
