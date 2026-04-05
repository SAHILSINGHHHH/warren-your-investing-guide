import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, PieChart, MessageCircle, ArrowUp, ArrowDown, DollarSign } from "lucide-react";

const StockAnimation = () => (
  <div className="relative w-full h-20 mt-4 overflow-hidden rounded-lg bg-white/5 px-3 py-2">
    {[
      { name: "AAPL", up: true, delay: 0 },
      { name: "TSLA", up: false, delay: 0.5 },
      { name: "NVDA", up: true, delay: 1 },
    ].map((stock) => (
      <motion.div
        key={stock.name}
        className="flex items-center justify-between text-[10px] py-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, delay: stock.delay, repeat: Infinity, repeatDelay: 1 }}
      >
        <span className="text-white/70 font-medium">{stock.name}</span>
        <span className={`flex items-center gap-0.5 ${stock.up ? "text-emerald-400" : "text-red-400"}`}>
          {stock.up ? <ArrowUp className="w-2 h-2" /> : <ArrowDown className="w-2 h-2" />}
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {stock.up ? "+2.4%" : "-1.1%"}
          </motion.span>
        </span>
      </motion.div>
    ))}
    {/* Floating trend line */}
    <svg className="absolute bottom-1 left-2 right-2 h-6 opacity-20" viewBox="0 0 100 20">
      <motion.path
        d="M0,15 Q15,12 25,10 T50,5 T75,8 T100,3"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
      />
    </svg>
  </div>
);

const PortfolioAnimation = () => (
  <div className="relative w-full h-20 mt-4 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center gap-3 px-3">
    {/* Flowing money particles */}
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{ x: -20, y: 40, opacity: 0 }}
        animate={{
          x: [- 20, 60 + i * 30, 120 + i * 20],
          y: [40, 10 + i * 5, 40],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, repeatDelay: 0.5 }}
      >
        <DollarSign className="w-3 h-3 text-emerald-400/60" />
      </motion.div>
    ))}
    {/* Pie segments */}
    <svg className="w-12 h-12" viewBox="0 0 32 32">
      {[
        { d: "M16,16 L16,2 A14,14 0 0,1 28.1,22Z", color: "hsl(var(--primary))", delay: 0 },
        { d: "M16,16 L28.1,22 A14,14 0 0,1 3.9,22Z", color: "#10b981", delay: 0.3 },
        { d: "M16,16 L3.9,22 A14,14 0 0,1 16,2Z", color: "#f59e0b", delay: 0.6 },
      ].map((seg, i) => (
        <motion.path
          key={i}
          d={seg.d}
          fill={seg.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1, 0.95, 1], opacity: 1 }}
          transition={{ duration: 1.5, delay: seg.delay, repeat: Infinity, repeatDelay: 3 }}
          style={{ transformOrigin: "16px 16px" }}
        />
      ))}
    </svg>
    <div className="flex flex-col gap-1 z-10">
      {["Tech 40%", "Stable 35%", "Growth 25%"].map((label, i) => (
        <motion.span
          key={label}
          className="text-[8px] text-white/50"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + i * 0.2, repeat: Infinity, repeatDelay: 4, duration: 1 }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  </div>
);

const ChatAnimation = () => {
  const messages = [
    { text: "Why this stock?", isUser: true },
    { text: "Strong earnings growth & low P/E ratio make it undervalued.", isUser: false },
  ];
  return (
    <div className="relative w-full h-20 mt-4 overflow-hidden rounded-lg bg-white/5 px-3 py-2 flex flex-col justify-center gap-1.5">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -5] }}
          transition={{ duration: 4, delay: i * 1.2, repeat: Infinity, repeatDelay: 2 }}
        >
          <div
            className={`text-[9px] px-2 py-1 rounded-lg max-w-[75%] ${
              msg.isUser
                ? "bg-primary text-primary-foreground rounded-br-sm"
                : "bg-white/10 text-white/70 rounded-bl-sm"
            }`}
          >
            {msg.text}
          </div>
        </motion.div>
      ))}
      {/* Typing dots */}
      <motion.div
        className="flex gap-0.5 ml-1"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 4 }}
      >
        {[0, 1, 2].map((d) => (
          <motion.span
            key={d}
            className="w-1 h-1 bg-white/30 rounded-full"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 0.5, delay: d * 0.15, repeat: Infinity }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const animations = [StockAnimation, PortfolioAnimation, ChatAnimation];

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
  const Animation = animations[index];

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
      <Animation />
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
