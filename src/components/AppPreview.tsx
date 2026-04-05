import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, TrendingDown, MessageSquare, PieChart, BarChart3, Star } from "lucide-react";

const screens = [
  {
    id: "home",
    title: "Home",
    render: () => (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="text-white/60 text-xs">Home</span>
          <span className="text-white/40 text-xs">🔔</span>
        </div>
        <div className="px-4 py-2">
          <div className="bg-white/5 rounded-xl px-3 py-2 text-white/30 text-xs">Ask Warren anything...</div>
        </div>
        <div className="px-4 pt-2">
          <p className="text-white/50 text-[10px] mb-2">For You</p>
          <div className="flex gap-2 mb-3">
            <span className="bg-primary/20 text-primary text-[10px] px-3 py-1 rounded-full">Stocks</span>
            <span className="bg-white/5 text-white/40 text-[10px] px-3 py-1 rounded-full">ETFs</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "AAPL", change: "+2.4%", up: true },
              { name: "GOOGL", change: "+1.1%", up: true },
              { name: "TSLA", change: "-0.8%", up: false },
              { name: "MSFT", change: "+1.6%", up: true },
              { name: "AMZN", change: "-0.3%", up: false },
              { name: "NVDA", change: "+3.2%", up: true },
            ].map((s) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.random() * 0.3 }}
                className="bg-white/5 rounded-lg p-2 text-center"
              >
                <p className="text-white text-[10px] font-medium">{s.name}</p>
                <p className={`text-[9px] flex items-center justify-center gap-0.5 ${s.up ? "text-emerald-400" : "text-red-400"}`}>
                  {s.up ? <TrendingUp className="w-2 h-2" /> : <TrendingDown className="w-2 h-2" />}
                  {s.change}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "portfolio",
    title: "Portfolio",
    render: () => (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="text-white/60 text-xs">Portfolio</span>
          <PieChart className="w-3 h-3 text-white/40" />
        </div>
        <div className="px-4 py-3">
          <p className="text-white/40 text-[10px]">Total Value</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-xl font-bold"
          >
            £12,450
          </motion.p>
          <p className="text-emerald-400 text-[10px] flex items-center gap-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +8.3% all time
          </p>
        </div>
        <div className="px-4 space-y-2">
          <p className="text-white/50 text-[10px] mb-1">Warren's Portfolio</p>
          {[
            { name: "Tech Growth", alloc: "40%", value: "£4,980", color: "bg-blue-500" },
            { name: "Stable Income", alloc: "35%", value: "£4,357", color: "bg-emerald-500" },
            { name: "Emerging Markets", alloc: "25%", value: "£3,113", color: "bg-amber-500" },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center justify-between bg-white/5 rounded-lg p-2"
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <div>
                  <p className="text-white text-[10px] font-medium">{item.name}</p>
                  <p className="text-white/40 text-[8px]">{item.alloc}</p>
                </div>
              </div>
              <p className="text-white text-[10px]">{item.value}</p>
            </motion.div>
          ))}
        </div>
        <div className="px-4 mt-3">
          <p className="text-white/30 text-[8px] italic">Portfolio optimised for low risk appetite with stable, large companies.</p>
        </div>
      </div>
    ),
  },
  {
    id: "chat",
    title: "Chat",
    render: () => (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="text-white/60 text-xs">Ask Warren</span>
          <MessageSquare className="w-3 h-3 text-white/40" />
        </div>
        <div className="px-4 py-2 space-y-3 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-end"
          >
            <div className="bg-primary text-primary-foreground text-[10px] px-3 py-2 rounded-xl rounded-br-sm max-w-[75%]">
              Should I invest in index funds?
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 text-white/80 text-[10px] px-3 py-2 rounded-xl rounded-bl-sm max-w-[80%]">
              Index funds are great for long-term growth. An S&P 500 fund historically returns ~10% annually with minimal fees. I'd recommend starting with 60% of your portfolio here.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-end"
          >
            <div className="bg-primary text-primary-foreground text-[10px] px-3 py-2 rounded-xl rounded-br-sm max-w-[75%]">
              What about my risk level?
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 text-white/80 text-[10px] px-3 py-2 rounded-xl rounded-bl-sm max-w-[80%]">
              Based on your profile, you're a moderate investor. I've balanced your picks accordingly. 📊
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: "picks",
    title: "Stock Picks",
    render: () => (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="text-white/60 text-xs">Curated Picks</span>
          <Star className="w-3 h-3 text-amber-400" />
        </div>
        <div className="px-4 py-2">
          <p className="text-white/40 text-[10px] mb-1">Based on your style</p>
          <p className="text-white text-[11px] font-medium mb-3">Growth-Oriented • Moderate Risk</p>
        </div>
        <div className="px-4 space-y-2">
          {[
            { name: "NVDA", full: "NVIDIA Corp", match: "95%", change: "+3.2%", reason: "Strong AI growth" },
            { name: "MSFT", full: "Microsoft", match: "91%", change: "+1.6%", reason: "Stable cloud revenue" },
            { name: "V", full: "Visa Inc", match: "87%", change: "+0.9%", reason: "Consumer spending up" },
            { name: "JNJ", full: "Johnson & Johnson", match: "84%", change: "+0.4%", reason: "Defensive play" },
          ].map((stock, i) => (
            <motion.div
              key={stock.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 rounded-lg p-2.5"
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <span className="text-white text-[10px] font-bold">{stock.name}</span>
                  <span className="text-white/30 text-[8px] ml-1">{stock.full}</span>
                </div>
                <span className="text-emerald-400 text-[9px]">{stock.change}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-[8px]">{stock.reason}</span>
                <span className="text-primary text-[8px] font-medium">{stock.match} match</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

const AppPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Phone mockup */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-[280px] md:w-[300px] mx-auto">
            <div className="rounded-[3rem] border-[6px] border-muted bg-[#0a0a0a] p-2 glow-md overflow-hidden">
              <div className="rounded-[2.4rem] overflow-hidden h-[520px] md:h-[560px] bg-[#0a0a0a]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={screens[currentScreen].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    {screens[currentScreen].render()}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Bottom nav bar */}
              <div className="flex items-center justify-around py-2 border-t border-white/5">
                {["Home", "Stocks", "Portfolio", "Account"].map((tab, i) => (
                  <div
                    key={tab}
                    className={`flex flex-col items-center gap-0.5 ${
                      i === (currentScreen === 0 ? 0 : currentScreen === 3 ? 1 : currentScreen === 1 ? 2 : 3)
                        ? "text-primary"
                        : "text-white/30"
                    }`}
                  >
                    <BarChart3 className="w-3 h-3" />
                    <span className="text-[7px]">{tab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Screen indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {screens.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === currentScreen ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              Get Answers,<br />Not Jargon
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Warren explains every pick, every move, and every concept in plain language. Invest with full understanding.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-2">
              Invest in Personalised Portfolios
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Tell Warren your goals and risk appetite. Watch as it builds a portfolio that fits you perfectly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPreview;
