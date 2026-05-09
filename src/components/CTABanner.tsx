import { motion } from 'motion/react';
import { ArrowRight, Trophy, Zap } from 'lucide-react';
import { useDemo } from '../lib/DemoContext';

export default function CTABanner() {
  const { openDemo } = useDemo();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-7xl mx-auto relative z-10 p-12 lg:p-20 bg-gradient-to-br from-electric-green to-dark-teal rounded-[32px] lg:rounded-[48px] flex flex-col items-center text-center overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
           <Trophy className="w-48 h-48 lg:w-64 lg:h-64 text-navy rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-10 pointer-events-none">
           <Zap className="w-48 h-48 lg:w-64 lg:h-64 text-navy -rotate-12" />
        </div>

        <h2 className="text-5xl lg:text-7xl font-display font-black text-navy leading-[0.9] tracking-tighter mb-8 max-w-4xl">
          Ready to Move <br /> Smarter?
        </h2>
        
        <p className="text-navy/70 text-lg lg:text-xl font-bold mb-10 lg:mb-12 max-w-2xl">
          Whether you're managing a global sports league or a 500-person company, Travelomate has the engine to drive your travel further.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full sm:w-auto relative z-20">
           <button 
             onClick={openDemo}
             className="px-8 lg:px-10 py-4 lg:py-5 bg-navy text-white rounded-2xl font-black text-lg lg:text-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl"
           >
              Start Free Trial <ArrowRight className="w-6 h-6" />
           </button>
           <button 
             onClick={openDemo}
             className="px-8 lg:px-10 py-4 lg:py-5 border-2 border-navy/20 text-navy rounded-2xl font-black text-lg lg:text-xl hover:bg-navy hover:text-white transition-all"
           >
              Talk to Sales
           </button>
        </div>
      </motion.div>
    </section>
  );
}
