import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, ShieldCheck, Zap, BarChart3, Plane, Hotel, Car, Trophy, Briefcase, MapPin, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDemo } from '../lib/DemoContext';

const SCENARIOS = [
  {
    id: 'sports',
    title: 'Sports League Tour',
    items: [
      { id: 1, type: 'flight', label: 'Squad Flight to London', status: 'Confirmed', icon: Plane, primary: 'DEL → LHR', context: 'Team Squad + Staff' },
      { id: 2, type: 'hotel', label: 'Hilton Kensington', status: 'Booked', icon: Hotel, primary: '32 Rooms', context: 'Training Camp' },
      { id: 3, type: 'transit', label: 'Team Coach Bus', status: 'Dispatched', icon: Users, primary: 'DEL Transit', context: 'Arrival Pickup' }
    ],
    accent: 'text-brand',
    bgBadge: 'bg-brand/10',
    themeIcon: Trophy
  },
  {
    id: 'corporate',
    title: 'Global Sales Summit',
    items: [
      { id: 1, type: 'flight', label: 'Executive Flight to NYC', status: 'Confirmed', icon: Plane, primary: 'LHR → JFK', context: 'Board Members' },
      { id: 2, type: 'hotel', label: 'Grand Hyatt NYC', status: 'Booked', icon: Hotel, primary: '450 Rooms', context: 'Annual Review' },
      { id: 3, type: 'transit', label: 'Tesla S Pickup', status: 'On Signal', icon: Car, primary: 'Limo Service', context: 'VIP Transit' }
    ],
    accent: 'text-corporate',
    bgBadge: 'bg-corporate/10',
    themeIcon: Briefcase
  }
];

export default function Hero() {
  const { openDemo } = useDemo();
  const [activeScenario, setActiveScenario] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % SCENARIOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = SCENARIOS[activeScenario];

  return (
    <div className="relative pt-12 lg:pt-20 pb-20 lg:pb-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative">
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
              className="relative z-10 h-[480px] p-8 glass rounded-[32px] overflow-hidden bg-card-bg/90 backdrop-blur-xl border border-foreground/10 shadow-2xl transition-all duration-500"
            >
               <div className="absolute top-0 right-0 p-6">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={current.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className={`w-12 h-12 rounded-2xl ${current.bgBadge} flex items-center justify-center shadow-lg`}
                    >
                      <current.themeIcon className={`${current.accent} w-6 h-6`} />
                    </motion.div>
                  </AnimatePresence>
               </div>
               
               <div className="space-y-6 text-foreground h-full flex flex-col">
                 <div className="flex items-center gap-4 border-b border-foreground/10 pb-6">
                   <div className="w-12 h-12 bg-foreground/10 rounded-2xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-brand" />
                   </div>
                   <div>
                     <AnimatePresence mode="wait">
                       <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                       >
                         <h3 className="font-display font-bold text-lg leading-tight">{current.title}</h3>
                         <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Active Itinerary</p>
                       </motion.div>
                     </AnimatePresence>
                   </div>
                 </div>
  
                 {/* Simulated Itinerary Content */}
                 <div className="flex-1 space-y-4">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={current.id}
                        className="space-y-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: { transition: { staggerChildren: 0.1 } }
                        }}
                      >
                        {current.items.map((item) => (
                          <motion.div 
                            key={item.id}
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0 }
                            }}
                            className="p-4 bg-foreground/5 border border-foreground/5 rounded-2xl flex items-center justify-between group hover:bg-foreground/10 transition-colors"
                          >
                            <div className="flex items-center gap-4 text-foreground">
                               <div className={`w-10 h-10 rounded-xl ${current.bgBadge} flex items-center justify-center`}>
                                  <item.icon className={`w-5 h-5 ${current.accent}`} />
                               </div>
                               <div>
                                  <p className="text-sm font-bold">{item.label}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[10px] text-foreground/50 uppercase font-black tracking-widest leading-none">{item.status}</span>
                                    <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                                    <span className="text-[10px] text-foreground/40 font-medium">{item.context}</span>
                                  </div>
                               </div>
                            </div>
                            <div className="text-right">
                               <p className={`text-sm font-black ${current.accent}`}>{item.primary}</p>
                               <div className="flex items-center justify-end gap-1 mt-1">
                                  <ShieldCheck className="w-3 h-3 text-electric-green" />
                                  <span className="text-[8px] text-foreground/30 font-bold uppercase">Policy OK</span>
                               </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                 </div>
  
                 <div className="pt-4 mt-auto">
                   <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: activeScenario === 0 ? '85%' : '60%' }}
                        transition={{ duration: 1.5 }}
                        className={`h-full ${activeScenario === 0 ? 'bg-brand' : 'bg-corporate'}`} 
                      />
                   </div>
                   <div className="flex justify-between mt-2 text-[10px] uppercase font-black tracking-widest text-foreground/40">
                      <span>Roster Compliance</span>
                      <span>{activeScenario === 0 ? '85%' : '60%'}</span>
                   </div>
                 </div>
               </div>
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
