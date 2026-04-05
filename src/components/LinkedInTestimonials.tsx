import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

const floatingEmojis = ["👍", "💡", "🔥", "📈", "⭐"];

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Portfolio Manager at Goldman Sachs",
    avatar: "PS",
    content: "Warren has completely transformed how I approach personal investments. The AI-curated stock picks are surprisingly accurate, and the personalized portfolios align perfectly with my risk tolerance. Highly recommend! 🚀",
    likes: 247,
    comments: 34,
    timeAgo: "2d",
  },
  {
    name: "Alex Chen",
    title: "Software Engineer at Google",
    avatar: "AC",
    content: "As someone who knew nothing about investing, Warren made it feel approachable and even exciting. I described my goals, and within minutes I had a portfolio tailored just for me. This is the future of fintech. 💡",
    likes: 189,
    comments: 21,
    timeAgo: "5d",
  },
  {
    name: "Sarah Mitchell",
    title: "Startup Founder & Angel Investor",
    avatar: "SM",
    content: "I've tried dozens of investment apps, but Warren stands out. The conversational AI understands nuance — it doesn't just throw generic advice. It actually listens to your financial personality. Game changer. 🔥",
    likes: 312,
    comments: 45,
    timeAgo: "1w",
  },
  {
    name: "Raj Patel",
    title: "Financial Analyst at JP Morgan",
    avatar: "RP",
    content: "The stock screening algorithm is incredibly smart. Warren narrows down picks that match my investment style better than most professional tools I've used. And it's accessible to everyone — not just Wall Street.",
    likes: 156,
    comments: 18,
    timeAgo: "3d",
  },
  {
    name: "Emma Williams",
    title: "Marketing Director | Retail Investor",
    avatar: "EW",
    content: "Finally an investing app that doesn't make me feel overwhelmed. Warren's UI is beautiful, and the AI assistant feels like talking to a knowledgeable friend. My portfolio is up 12% since I started using it! 📈",
    likes: 278,
    comments: 38,
    timeAgo: "4d",
  },
];

const LinkedInTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return cards;
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Floating reaction emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingEmojis.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-lg opacity-0"
            style={{ left: `${15 + i * 18}%`, bottom: "10%" }}
            animate={{
              y: [0, -300, -500],
              opacity: [0, 0.6, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * 30],
            }}
            transition={{
              duration: 5 + i,
              delay: i * 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut",
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#0A66C2]">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-[#0A66C2] font-semibold text-lg">LinkedIn</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What People Are Saying
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from investors and professionals on LinkedIn
          </p>
        </motion.div>

        <div className="relative h-[340px] flex items-center justify-center" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {getVisibleCards().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}-${index}`}
                initial={{ scale: 0.8, opacity: 0, x: 100, rotateY: 5 }}
                animate={{
                  scale: 1 - index * 0.05,
                  opacity: 1 - index * 0.25,
                  x: index * 20,
                  y: index * 8,
                  zIndex: 3 - index,
                  rotateY: index * -2,
                }}
                exit={{ scale: 0.8, opacity: 0, x: -200, rotateY: -10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full max-w-xl"
                style={{ zIndex: 3 - index }}
                whileHover={index === 0 ? { scale: 1.02, rotateY: 2, rotateX: -1 } : undefined}
              >
                <div className="bg-card border border-border/50 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] font-bold text-sm shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-foreground font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-xs">{testimonial.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{testimonial.timeAgo} • 🌐</p>
                    </div>
                  </div>
                  <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-xs">👍💡</span>
                    <span className="text-muted-foreground text-xs">{testimonial.likes}</span>
                    <span className="text-muted-foreground text-xs ml-auto">{testimonial.comments} comments</span>
                  </div>
                  <div className="border-t border-border/50 pt-3 flex items-center justify-around">
                    <button className="flex items-center gap-1.5 text-muted-foreground text-xs hover:text-foreground transition-colors">
                      <ThumbsUp className="w-4 h-4" /> Like
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground text-xs hover:text-foreground transition-colors">
                      <MessageCircle className="w-4 h-4" /> Comment
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground text-xs hover:text-foreground transition-colors">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LinkedInTestimonials;
