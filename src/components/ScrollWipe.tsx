import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollWipe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2.5, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.6, 0.3, 0]);

  return (
    <div ref={ref} className="relative h-[40vh] -my-10 pointer-events-none z-20 overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="w-[300px] h-[300px] rounded-full"
          // Using inline style for radial gradient with theme color
        >
          <div className="w-full h-full rounded-full bg-primary/30 blur-[80px]" />
        </motion.div>
        {/* Ring effect */}
        <motion.div
          style={{
            scale,
            opacity,
          }}
          className="absolute w-[300px] h-[300px] rounded-full border border-primary/20 blur-[2px]"
        />
      </div>
    </div>
  );
};

export default ScrollWipe;
