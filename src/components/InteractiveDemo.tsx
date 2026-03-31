import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send } from "lucide-react";

const chatMessages = [
  { role: "user" as const, text: "What's wrong with my portfolio?" },
  {
    role: "assistant" as const,
    text: "Your portfolio is heavily weighted in tech stocks (78%). I'd recommend diversifying into healthcare and consumer staples to reduce volatility. Here are 3 picks that fit your risk profile…",
  },
];

const InteractiveDemo = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setVisibleMessages(1), 600);
    const t2 = setTimeout(() => setVisibleMessages(2), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  return (
    <section className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">Ask Warren Anything</h2>
          <p className="text-muted-foreground text-lg">Get instant, clear answers about your investments.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-6 glow-sm"
        >
          {/* Chat area */}
          <div className="space-y-4 min-h-[200px]">
            {chatMessages.slice(0, visibleMessages).map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input bar */}
          <div className="mt-4 flex items-center gap-2 bg-secondary rounded-full px-4 py-2.5">
            <span className="text-muted-foreground text-sm flex-1">Ask Warren anything...</span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Send className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
