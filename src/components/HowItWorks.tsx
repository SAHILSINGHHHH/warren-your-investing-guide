import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, PieChart, MessageCircle } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Curated Stock Picks",
    description: "Warren analyses the market and delivers stock picks tailored to your goals and risk appetite.",
  },
  {
    icon: PieChart,
    title: "Personalised Portfolios",
    description: "Describe your investing style and Warren builds a diversified portfolio using smart algorithms.",
  },
  {
    icon: MessageCircle,
    title: "Ask Warren Anything",
    description: "\"Why this stock?\" \"What's wrong with my portfolio?\" Get answers in plain English, not jargon.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border glow-sm"
    >
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5">
        <feature.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-primary mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">How Warren Works</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Three steps to smarter investing. No experience needed.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
