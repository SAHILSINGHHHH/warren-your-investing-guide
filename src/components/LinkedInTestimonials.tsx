import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    title: "An app I didn't know I needed",
    author: "Charniceeee",
    date: "04/12/2025",
    rating: 5,
    content: "Warren is super straight forward to use and has made investing less intimidating. I'm able to gain strong insight into my current portfolio and get tailored recommendations to suit my needs!",
  },
  {
    title: "My favourite investment app",
    author: "SunnyPadda",
    date: "04/12/2025",
    rating: 5,
    content: "I was able to import my trading212 portfolio and managed to get great insights. Warren helped me diversify and make sure my portfolio was meeting my risk appetite. Great to see an app promoting sensible investment decisions.",
  },
  {
    title: "Lifesaver! It knows what I need",
    author: "SakshiHere",
    date: "02/12/2025",
    rating: 5,
    content: "Normally im a skeptic with ai apps but this is really helpful. For me investing was a myth but with Warren its much easier. Im really looking to when they can look my ibkr investments!",
  },
  {
    title: "Download it",
    author: "Neimi1151",
    date: "10 Feb",
    rating: 5,
    content: "Excellent UI. Investing made easy.",
  },
  {
    title: "Money manager",
    author: "Stonkssssssssss",
    date: "17 Mar",
    rating: 5,
    content: "Helped me offset alot of risk in my portfolio",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const LinkedInTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return cards;
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor" className="text-muted-foreground"/>
            </svg>
            <span className="text-muted-foreground font-semibold text-lg">App Store Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from Warren users on the App Store
          </p>
        </motion.div>

        <div className="relative h-[300px] flex items-center justify-center" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {getVisibleCards().map((review, index) => (
              <motion.div
                key={`${review.author}-${currentIndex}-${index}`}
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
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-foreground font-semibold text-sm">{review.title}</h4>
                      <StarRating />
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground text-xs">{review.date}</p>
                      <p className="text-muted-foreground text-xs">{review.author}</p>
                    </div>
                  </div>
                  <p className="text-secondary-foreground text-sm leading-relaxed mt-4">
                    {review.content}
                  </p>
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
