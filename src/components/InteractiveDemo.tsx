import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const questions = [
  { q: "What's wrong with my portfolio?", a: "Your portfolio is heavily weighted in tech stocks (78%). I'd recommend diversifying into healthcare and consumer staples to reduce volatility." },
  { q: "Should I invest in index funds?", a: "Index funds are great for long-term, low-cost growth. An S&P 500 fund historically returns ~10% annually with minimal fees." },
  { q: "How much should I save monthly?", a: "Aim for 20% of your income. At your salary, that's around $1,200/month — enough to build a solid emergency fund in 6 months." },
  { q: "Is now a good time to buy gold?", a: "Gold is a solid hedge against inflation. With current market uncertainty, allocating 5-10% of your portfolio to gold could reduce overall risk." },
  { q: "What are dividend stocks?", a: "Dividend stocks pay you regular income from company profits. They're ideal for passive income — think Coca-Cola, Johnson & Johnson, or Procter & Gamble." },
];

const InteractiveDemo = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [inView]);

  const current = questions[currentIndex];

  return (
    <section className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">You Can Ask Warren Anything</h2>
          <p className="text-muted-foreground text-lg">Get instant, clear answers about your investments.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-6 glow-sm"
        >
          <div className="space-y-4 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex justify-end">
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-br-md text-sm leading-relaxed bg-primary text-primary-foreground">
                    {current.q}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-md text-sm leading-relaxed bg-secondary text-secondary-foreground">
                    {current.a}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
