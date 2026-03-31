import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import appScreen from "@/assets/warren-app.png";

const AppPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            {/* Phone frame */}
            <div className="rounded-[3rem] border-[6px] border-muted bg-background p-2 glow-md">
              <div className="rounded-[2.4rem] overflow-hidden">
                <img src={appScreen} alt="Warren app interface" className="w-full" />
              </div>
            </div>
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
