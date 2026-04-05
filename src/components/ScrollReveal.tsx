import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.75"],
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rawY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
