import { motion, useInView, useSpring, useTransform, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      if (isNaN(numericValue)) return;

      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          const suffix = displayValue.replace(/[0-9.]/g, '');
          const prefix = displayValue.startsWith('₹') ? '₹' : '';
          const cleanedSuffix = suffix.replace('₹', '');
          setDisplayValue(`${prefix}${Math.round(value)}${cleanedSuffix}`);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

const stats = [
  { value: "500+", label: "Organizations Trust Us" },
  { value: "50+", label: "Sports Leagues Managed" },
  { value: "₹120 Cr+", label: "Annual Travel Spend" },
  { value: "98%", label: "Satisfaction Score" }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl sm:text-4xl lg:text-6xl font-display font-black text-foreground mb-4 group-hover:scale-110 transition-transform group-hover:text-brand duration-500">
                <Counter value={stat.value} />
              </div>
              <div className="w-12 h-1 bg-brand mx-auto mb-4 opacity-50 group-hover:w-20 transition-all duration-500" />
              <p className="text-foreground/40 uppercase tracking-widest text-[10px] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
