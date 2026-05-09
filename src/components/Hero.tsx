import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, ShieldCheck, Zap, BarChart3, Plane, Hotel, Car, Trophy, Briefcase, MapPin, Users, Heart, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDemo } from '../lib/DemoContext';

const CORE_VALUES = [
  {
    id: '01',
    title: 'Customer Obsession',
    desc: "We don't manage travel. We manage outcomes. Every decision is filtered through one question: does this make our client's journey better?",
    icon: Heart,
  },
  {
    id: '02',
    title: 'Precision Delivery',
    desc: "Corporate travel has zero tolerance for error. We have built 16 years of operational muscle around getting it right — the first time, every time.",
    icon: Target,
  },
  {
    id: '03',
    title: 'Human Intelligence',
    desc: "Our technology is sharp. Our people are sharper. A 24/7 concierge layer led by account managers who understand your DNA.",
    icon: Zap,
  },
  {
    id: '04',
    title: 'Cost Command',
    desc: "We don't just cut costs. We give you complete visibility and control over every rupee of travel spend — before it leaves your organization.",
    icon: BarChart3,
  }
];

export default function Hero() {
  const { openDemo } = useDemo();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CORE_VALUES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-4 lg:pt-8 pb-20 lg:pb-24 overflow-hidden bg-background">
      {/* Professional Visual Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern for technical/SaaS feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Soft, blurred glowing orbs for depth */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-corporate/5 rounded-full blur-[150px] opacity-50" />
        
        {/* Subtle top light gradient */}
        <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-brand/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] lg:text-xs font-bold text-electric-green uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3 fill-current" /> AI powered Travel Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[0.95] tracking-tight mb-8 text-foreground">
              Travel Built for <span className="text-brand">Champions.</span> <br />
              <span className="opacity-80 italic">Boardrooms & Beyond.</span>
            </h1>

            <p className="text-lg lg:text-xl text-foreground/60 max-w-xl mb-10 leading-relaxed">
              Travelomate is the all-in-one travel management platform for sports leagues, corporate teams, and everyone in between. Book smarter. Move faster. Spend less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openDemo}
                className="px-8 py-3 rounded-xl bg-brand text-white font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand/30 flex items-center justify-center gap-2"
              >
                Get Started for Free <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollTo('features')}
                className="px-8 py-3 rounded-xl border-2 border-foreground/10 hover:bg-foreground/5 font-bold text-lg transition-all flex items-center justify-center gap-2 text-foreground"
              >
                <Play className="w-5 h-5 fill-current" /> See How It Works
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-foreground/10 pt-8">
              <div className="space-y-1">
                <p className="text-xl font-bold font-display text-foreground">500+</p>
                <p className="text-[10px] text-foreground/50 uppercase tracking-widest">Global Clients</p>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-foreground/10" />
              <div className="space-y-1">
                <p className="text-xl font-bold font-display text-foreground">98%</p>
                <p className="text-[10px] text-foreground/50 uppercase tracking-widest">Client Satisfaction</p>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-foreground/10" />
              <div className="space-y-1 font-display">
                <p className="text-xl font-bold font-display text-foreground">120 Cr+</p>
                <p className="text-[10px] text-foreground/50 uppercase tracking-widest">Managed Spend</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Visual Representation of the Platform */}
            <div 
              className="relative z-10 h-[480px] w-full flex items-center justify-center"
            >
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeIndex}
                   initial={{ opacity: 0, x: 50, scale: 0.9 }}
                   animate={{ opacity: 1, x: 0, scale: 1 }}
                   exit={{ opacity: 0, x: -50, scale: 0.9 }}
                   transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                   className="w-full max-w-sm bg-background border border-foreground/5 rounded-[32px] p-8 shadow-xl relative"
                 >
                   <div className="text-brand/20 font-display font-black text-5xl mb-6">
                     {CORE_VALUES[activeIndex].id}
                   </div>
                   <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8">
                     {(() => {
                       const Icon = CORE_VALUES[activeIndex].icon;
                       return <Icon className="w-8 h-8 text-brand" />;
                     })()}
                   </div>
                   <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                     {CORE_VALUES[activeIndex].title}
                   </h3>
                   <p className="text-foreground/60 text-base leading-relaxed">
                     {CORE_VALUES[activeIndex].desc}
                   </p>
                   
                   {/* Dots indicator */}
                   <div className="flex gap-2 mt-8">
                     {CORE_VALUES.map((_, idx) => (
                       <div 
                         key={idx} 
                         className={`h-1.5 rounded-full transition-all duration-300 ${
                           idx === activeIndex ? 'w-6 bg-brand' : 'w-2 bg-foreground/10'
                         }`}
                       />
                     ))}
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-10 -right-10 glass p-4 rounded-2xl border-electric-green/20 z-20"
            >
              <div className="flex items-center gap-3">
                 <ShieldCheck className="text-electric-green w-5 h-5" />
                 <span className="text-sm font-bold text-foreground">Policy Compliant</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl border-brand/20 z-20"
            >
              <div className="flex items-center gap-3">
                 <Zap className="text-brand w-5 h-5" />
                 <span className="text-sm font-bold text-foreground">AI Optimized Routes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
