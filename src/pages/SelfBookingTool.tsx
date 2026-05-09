import { motion } from 'motion/react';
import { Plane, Hotel, Car, Search, ShieldCheck, Zap, ArrowRight, Star, Clock } from 'lucide-react';
import { useState } from 'react';
import { useDemo } from '../lib/DemoContext';

export default function SelfBookingTool() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels'>('flights');
  const { openDemo } = useDemo();

  return (
    <div className="pt-32 pb-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Launch Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-green/10 border border-electric-green/20 text-xs font-black text-electric-green uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-green"></span>
            </span>
            New Launch: V2.0 
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8 italic">
            Book In <span className="text-electric-green">Seconds.</span> <br />
            Manage In <span className="opacity-40">One.</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-12">
            The world's fastest self-booking tool for high-performance teams. Fully integrated with your corporate policy, powered by AI, and designed for human speed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <button 
               onClick={openDemo}
               className="px-10 py-5 bg-electric-green text-navy rounded-2xl font-black text-lg lg:text-xl hover:scale-105 transition-all shadow-2xl shadow-electric-green/20 flex items-center gap-3"
             >
                Request Access <ArrowRight className="w-5 h-5" />
             </button>
             <div className="flex items-center gap-4 text-sm font-bold opacity-60">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-foreground/10" />)}
                </div>
                Trusted by 500+ Teams
             </div>
          </div>
        </motion.div>

        {/* The Demo Preview */}
        <div className="relative mb-32 group">
          <div className="absolute -inset-4 bg-linear-to-r from-electric-green/20 to-vivid-orange/20 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
          
          <div className="relative bg-card-bg border border-foreground/10 rounded-[48px] overflow-hidden shadow-2xl transition-colors duration-500">
            {/* Tool Header */}
            <div className="px-8 py-6 bg-foreground/[0.03] border-b border-foreground/5 flex items-center justify-between">
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-foreground/[0.05] rounded-xl text-foreground font-bold text-sm">
                     <Search className="w-4 h-4 text-electric-green" />
                     Project "Championship"
                  </div>
                  <div className="flex gap-4">
                     <button className={`text-sm font-bold transition-all ${activeTab === 'flights' ? 'text-electric-green' : 'text-foreground/50'}`} onClick={() => setActiveTab('flights')}>Flights</button>
                     <button className={`text-sm font-bold transition-all ${activeTab === 'hotels' ? 'text-electric-green' : 'text-foreground/50'}`} onClick={() => setActiveTab('hotels')}>Hotels</button>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="text-right">
                     <p className="text-[10px] text-foreground/50 uppercase font-bold">Policy Limit</p>
                     <p className="text-sm font-bold text-foreground">$1,250</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-foreground/10" />
               </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 grid lg:grid-cols-12 gap-12">
               {/* Search Panel */}
                <div className="lg:col-span-4 space-y-8">
                  <div>
                     <h3 className="text-2xl font-display font-bold text-foreground mb-6">Quick Search</h3>
                     <div className="space-y-4">
                        <div className="p-4 bg-foreground/[0.03] border border-foreground/10 rounded-2xl flex flex-col gap-1">
                           <span className="text-[10px] uppercase text-foreground/50 font-bold">From</span>
                           <span className="text-foreground font-bold">NYC - John F. Kennedy</span>
                        </div>
                        <div className="p-4 bg-foreground/[0.03] border border-foreground/10 rounded-2xl flex flex-col gap-1">
                           <span className="text-[10px] uppercase text-foreground/50 font-bold">To</span>
                           <span className="text-foreground font-bold">LON - Heathrow</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="p-4 bg-foreground/[0.03] border border-foreground/10 rounded-2xl">
                              <span className="text-[10px] uppercase text-foreground/50 font-bold">Date</span>
                              <span className="block text-foreground font-bold text-sm">June 12</span>
                           </div>
                           <div className="p-4 bg-foreground/[0.03] border border-foreground/10 rounded-2xl">
                              <span className="text-[10px] uppercase text-foreground/50 font-bold">Travelers</span>
                              <span className="block text-foreground font-bold text-sm">1 Adult</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="p-6 bg-electric-green/10 border border-electric-green/20 rounded-3xl">
                     <div className="flex items-center gap-2 text-electric-green font-bold text-sm mb-2">
                        <ShieldCheck className="w-4 h-4" /> Policy Active
                     </div>
                     <p className="text-xs text-foreground/60">Your current selection is 100% compliant with the "Executive Elite" travel policy.</p>
                  </div>
               </div>

                {/* Results Panel */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                     <h4 className="text-foreground font-bold opacity-80">Highest Rated Results</h4>
                     <div className="flex gap-2">
                        <div className="px-3 py-1 bg-foreground/[0.05] text-[10px] text-foreground rounded-lg font-bold">Cheapest</div>
                        <div className="px-3 py-1 bg-electric-green text-[10px] text-navy rounded-lg font-black italic">Recommended</div>
                     </div>
                  </div>

                  {[
                     { airline: "SkyLink Elite", time: "08:45 AM - 08:30 PM", price: "$840", type: "Non-stop", status: "Compliant" },
                     { airline: "Global Airways", time: "11:20 AM - 10:15 PM", price: "$1,120", type: "1 Stop", status: "Compliant" },
                  ].map((flight, i) => (
                     <div key={i} className="group/item p-6 bg-foreground/[0.03] border border-foreground/10 rounded-3xl hover:bg-foreground/[0.06] transition-all cursor-pointer">
                        <div className="flex justify-between items-center">
                           <div className="flex gap-4 items-center">
                              <div className="w-12 h-12 bg-foreground/10 rounded-xl flex items-center justify-center font-bold text-foreground">S</div>
                              <div>
                                 <p className="text-foreground font-bold text-lg">{flight.airline}</p>
                                 <div className="flex items-center gap-2 text-xs text-foreground/50">
                                    <Clock className="w-3 h-3" /> {flight.time}
                                    <span className="inline-block w-1 h-1 bg-foreground/20 rounded-full" />
                                    {flight.type}
                                 </div>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-2xl font-display font-black text-foreground">{flight.price}</p>
                              <div className="flex items-center gap-1 text-[10px] text-electric-green font-bold">
                                 <ShieldCheck className="w-3 h-3" /> {flight.status}
                              </div>
                           </div>
                        </div>
                        <div className="mt-6 flex justify-end opacity-0 group-hover/item:opacity-100 transition-opacity">
                           <button className="px-6 py-2 bg-foreground text-background font-bold rounded-xl text-sm">Select Flight</button>
                        </div>
                     </div>
                  ))}

                  <div className="mt-4 p-8 bg-gradient-to-r from-vivid-orange/5 to-transparent border border-foreground/5 rounded-3xl flex items-center justify-between">
                     <div>
                        <h5 className="text-foreground font-bold italic mb-1 text-xl">Self-Sustainability Mode</h5>
                        <p className="text-sm text-foreground/40">Offset 100% of this trip's carbon footprint for $12.</p>
                     </div>
                     <div className="w-12 h-6 bg-vivid-orange/20 border border-vivid-orange/40 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-vivid-orange rounded-full" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
           {[
              {
                 icon: Zap,
                 title: "Zero-Training UI",
                 desc: "So intuitive that your team won't need a single minute of training. Book flights in under 45 seconds."
              },
              {
                 icon: ShieldCheck,
                 title: "Unified Compliance",
                 desc: "Policies aren't just checked—they're enforced. Real-time budget blocks prevent out-of-policy spend."
              },
              {
                 icon: Star,
                 title: "VIP Inventory",
                 desc: "Access exclusive NDC fares and hotel rates usually reserved only for massive global corporations."
              }
           ].map((f, i) => (
              <div key={i} className="p-8 bg-foreground/[0.03] border border-foreground/5 rounded-[32px] hover:border-electric-green/30 transition-all">
                 <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mb-6">
                    <f.icon className="w-6 h-6 text-electric-green" />
                 </div>
                 <h3 className="text-2xl font-display font-bold mb-4">{f.title}</h3>
                 <p className="text-foreground/60 leading-relaxed text-sm">{f.desc}</p>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}
