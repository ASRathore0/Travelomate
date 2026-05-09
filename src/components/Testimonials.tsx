import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Moving a squad of 150 athletes and support staff across India is a logistical nightmare. Travelomate turned it into a seamless machine. Their intelligence and precision are unmatched.",
    author: "Vivek Kohli",
    role: "League Operations Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    company: "Pro Sports League"
  },
  {
    quote: "The self-booking tool combined with 24/7 human support has saved our firm 30% in travel spend while keeping our consultants happy. It's the partner we've been looking for.",
    author: "Neha Sharma",
    role: "Head of Procurement",
    avatar: "https://images.unsplash.com/photo-1494433223254-340cfed26a97?auto=format&fit=crop&q=80&w=150",
    company: "Global Tech Solutions"
  },
  {
    quote: "Travelomate doesn't just book tickets; they engineer solutions. Their response to travel disruptions at 3 AM is consistently under 15 minutes. Pure operational mastery.",
    author: "Arjun Mehta",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    company: "BlueChip Innovations"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeThreshold = 50;
  const onDragEnd = (_e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -swipeThreshold) {
      next();
    } else if (swipe > swipeThreshold) {
      prev();
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-background overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-4">
            Voice of Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Trusted by the best in the arena.</h2>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[450px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={onDragEnd}
              onMouseDown={() => setIsAutoPlaying(false)}
              onTouchStart={() => setIsAutoPlaying(false)}
              className="absolute w-full px-4 cursor-grab active:cursor-grabbing"
            >
              <div className="bg-card-bg/50 backdrop-blur-xl border border-border-subtle p-8 md:p-16 rounded-[48px] shadow-2xl relative group select-none">
                <Quote className="absolute top-8 right-12 w-16 h-16 text-brand/10 group-hover:text-brand/20 transition-colors pointer-events-none" />
                
                <div className="flex gap-1 mb-8 pointer-events-none">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-brand fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg sm:text-2xl md:text-3xl font-display font-medium leading-[1.3] text-foreground mb-12 italic tracking-tight pointer-events-none">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-6 pointer-events-none">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand rounded-full blur-lg opacity-20" />
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-background relative z-10"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{testimonials[currentIndex].author}</p>
                    <p className="text-xs font-black uppercase tracking-widest text-brand">
                      {testimonials[currentIndex].role} — {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8 lg:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-12 bg-brand' : 'w-4 bg-foreground/10'}`}
            />
          ))}
        </div>
        
        <p className="text-center mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 italic">
          Swipe to explore
        </p>
      </div>
    </section>
  );
}
