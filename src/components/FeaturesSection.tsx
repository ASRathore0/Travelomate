import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShieldCheck, Wallet, ChevronRight, Zap, Target, BarChart3, Users, Building2, Trophy } from 'lucide-react';

const content = {
  sports: {
    title: "Championship Logistics",
    subtitle: "Built for teams that move together.",
    features: [
      {
        icon: Search,
        title: "Smart Group Booking",
        desc: "Bulk book flights and entire hotel wings for your squad with one click. AI suggests routes based on your season schedule.",
        tag: "High Volume"
      },
      {
        icon: Target,
        title: "Per Diem Automation",
        desc: "Automated allowance payouts for athletes and staff. Multi-currency support for international tournaments.",
        tag: "Compliance"
      },
      {
        icon: Users,
        title: "Roster Sync",
        desc: "Sync with your league roster system. Instant updates when players get traded or staff changes occurs.",
        tag: "Dynamic"
      }
    ]
  },
  corporate: {
    title: "Executive Efficiency",
    subtitle: "Built for smarter business travel.",
    features: [
      {
        icon: Search,
        title: "Policy-Led Booking",
        desc: "Automated search results that already filtered by your company's travel policy. No more manual approval loops.",
        tag: "efficiency"
      },
      {
        icon: BarChart3,
        title: "Real-time Dashboards",
        desc: "Monitor travel spend across departments in real-time. Forecast next quarter's travel budget with 95% accuracy.",
        tag: "Analytics"
      },
      {
        icon: Building2,
        title: "ERP Integration",
        desc: "Seamlessly push expense data into SAP, Oracle, Zoho, or Tally. 100% paperless reimbursement cycle.",
        tag: "Seamless"
      }
    ]
  }
};

export default function FeaturesSection() {
  const [mode, setMode] = useState<'sports' | 'corporate'>('sports');

  return (
    <section id="features" className="py-6 lg:py-10 bg-background relative overflow-hidden transition-colors duration-500 text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-6">
              Everything You Need.<br /> <span className="opacity-40 italic">One Unified Platform.</span>
            </h2>
            
            {/* Mode Toggle */}
            <div className="inline-flex p-1 bg-foreground/5 border border-foreground/10 rounded-2xl">
              <button
                onClick={() => setMode('sports')}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition-all text-sm ${mode === 'sports' ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-foreground/60 hover:text-foreground'}`}
              >
                <Zap className="w-4 h-4" /> Sports Mode
              </button>
              <button
                onClick={() => setMode('corporate')}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition-all text-sm ${mode === 'corporate' ? 'bg-corporate text-white shadow-lg shadow-corporate/20' : 'text-foreground/60 hover:text-foreground'}`}
              >
                <Target className="w-4 h-4" /> Corporate Mode
              </button>
            </div>
          </div>
          
          <div className="text-foreground/40 text-lg lg:text-xl border-l-2 border-foreground/10 pl-8 lg:max-w-xs italic font-medium">
            "{content[mode].subtitle}"
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence mode="wait">
              {content[mode].features.map((feature, i) => (
                <motion.div
                  key={`${mode}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 lg:p-8 bg-card-bg border border-border-subtle hover:border-foreground/20 rounded-3xl transition-all cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-foreground/5 rounded-xl">
                      <feature.icon className={`w-6 h-6 ${mode === 'sports' ? 'text-brand' : 'text-corporate'}`} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-30 group-hover:opacity-100 transition-opacity text-foreground">
                      {feature.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h4>
                  <p className="text-foreground/50 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <div className={`w-0 h-1 transition-all duration-500 group-hover:w-full ${mode === 'sports' ? 'bg-brand' : 'bg-corporate'}`} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7 sticky top-32">
             <motion.div
               key={mode}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative glass rounded-[40px] p-6 lg:p-10 min-h-[500px] flex flex-col overflow-hidden group shadow-2xl bg-card-bg border border-border-subtle"
             >
                <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity ${mode === 'sports' ? 'bg-brand' : 'bg-corporate'}`} />
                
                {/* Mock UI Header/Bar */}
                <div className="relative z-10 flex items-center justify-between mb-8 border-b border-foreground/5 pb-6">
                   <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === 'sports' ? 'bg-brand/20 text-brand' : 'bg-corporate/20 text-corporate'}`}>
                         {mode === 'sports' ? <Trophy className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                      </div>
                      <div>
                         <p className="text-sm font-bold text-foreground">{mode === 'sports' ? 'Squad Logistics' : 'Executive Travel'}</p>
                         <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest">Global Dashboard</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-foreground/5 border border-foreground/5 flex items-center justify-center">
                         <Search className="w-4 h-4 text-foreground/40" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-foreground/10 border border-foreground/10" />
                   </div>
                </div>

                {/* Mock UI Grid Content */}
                <div className="relative z-10 grid grid-cols-12 gap-6 flex-1">
                   {/* Left Column - Active Itinerary */}
                   <div className="col-span-12 lg:col-span-8 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                         <h5 className="text-xs font-black text-foreground uppercase tracking-widest opacity-40">Active Movements</h5>
                         <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-electric-green animate-pulse" />
                            <span className="text-[10px] font-bold text-electric-green uppercase tracking-widest">Live Sync</span>
                         </div>
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        {[
                          { label: mode === 'sports' ? 'DEL → LHR (Squad 1)' : 'SFO → JFK (Exec Board)', color: mode === 'sports' ? 'bg-brand' : 'bg-corporate', time: '14:20', task: 'Flight Confirm' },
                          { label: mode === 'sports' ? 'Hilton Kensington (Block 32)' : 'Park Hyatt NYC (Suite 405)', color: mode === 'sports' ? 'bg-brand' : 'bg-corporate', time: '16:45', task: 'Check-in Sync' },
                          { label: mode === 'sports' ? 'Equipment Coach #4' : 'Limo Ops - JFK Pickup', color: mode === 'sports' ? 'bg-brand' : 'bg-corporate', time: '18:10', task: 'Terminal 5' }
                        ].map((item, i) => (
                          <div key={i} className="p-4 bg-foreground/[0.04] border border-foreground/[0.04] rounded-2xl flex items-center justify-between hover:bg-foreground/[0.06] transition-colors group/row">
                             <div className="flex items-center gap-4">
                                <div className="text-right w-10">
                                   <p className="text-[10px] font-bold text-foreground/40">{item.time}</p>
                                </div>
                                <div className="w-[2px] h-6 bg-foreground/10 rounded-full" />
                                <div>
                                   <p className="text-sm font-bold text-foreground">{item.label}</p>
                                   <p className="text-[10px] text-foreground/30 font-medium">{item.task}</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-3">
                                <div className="hidden sm:block">
                                   <ShieldCheck className="w-3.5 h-3.5 text-electric-green" />
                                </div>
                                <div className={`w-8 h-1 bg-foreground/10 rounded-full overflow-hidden group-hover/row:w-16 transition-all duration-500`}>
                                   <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className={`h-full ${item.color}`} />
                                </div>
                             </div>
                          </div>
                        ))}
                      </div>

                      {/* AI Extraction Demo Area */}
                      <div className="mt-6 p-4 bg-foreground/[0.02] border border-dashed border-foreground/10 rounded-2xl">
                         <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-3 h-3 text-brand" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand">AI Processing Itinerary</span>
                         </div>
                         <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 rounded bg-foreground/5 flex items-center justify-center text-[10px] text-foreground/40 font-bold">PDF</div>
                            <div className="flex-1 space-y-1.5">
                               <div className="h-1.5 w-1/3 bg-foreground/10 rounded-full" />
                               <div className="h-1.5 w-1/2 bg-foreground/5 rounded-full" />
                            </div>
                            <div className="text-xs font-bold text-foreground/60">Extracted</div>
                         </div>
                      </div>
                   </div>

                   {/* Right Column - Controls & Pulse */}
                   <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                      <div className={`p-5 rounded-3xl border border-foreground/5 relative overflow-hidden flex flex-col justify-between flex-1 ${mode === 'sports' ? 'bg-brand/5' : 'bg-corporate/5'}`}>
                         <div className="flex justify-between items-start">
                            <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50">Savings Index</p>
                            <BarChart3 className={`w-5 h-5 opacity-40 ${mode === 'sports' ? 'text-brand' : 'text-corporate'}`} />
                         </div>
                         <div>
                            <p className="text-3xl font-display font-bold text-foreground">{mode === 'sports' ? '₹8.4L' : '₹24.2L'}</p>
                            <div className="flex items-center gap-1.5 mt-1">
                               <div className="w-1.5 h-1.5 rounded-full bg-electric-green" />
                               <span className="text-[10px] font-black tracking-widest uppercase text-electric-green">+12.5%</span>
                            </div>
                         </div>
                      </div>

                      <div className="p-5 bg-card-bg/50 border border-foreground/5 rounded-3xl space-y-4">
                         <div className="flex justify-between items-center">
                            <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50">Policy Shield</p>
                            <ShieldCheck className="w-4 h-4 text-electric-green" />
                         </div>
                         <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                               <span className="text-xs font-bold text-foreground/60">Organization Health</span>
                               <span className="text-xs font-black text-foreground">{mode === 'sports' ? '92' : '100'}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: mode === 'sports' ? '92%' : '100%' }}
                                 className={`h-full ${mode === 'sports' ? 'bg-brand' : 'bg-corporate'}`} 
                               />
                            </div>
                         </div>
                      </div>

                      {/* Quick Actions List */}
                      <div className="p-5 bg-foreground/5 border border-foreground/10 rounded-3xl relative group/actions">
                         <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-3">Quick Actions</p>
                         <div className="grid grid-cols-2 gap-2">
                            {['Modify', 'Refund', 'Track', 'Report'].map(btn => (
                               <div key={btn} className="px-3 py-2 bg-card-bg border border-foreground/5 rounded-xl text-[10px] font-bold text-foreground/60 flex items-center justify-center hover:bg-foreground hover:text-background transition-all cursor-pointer">
                                  {btn}
                               </div>
                            ))}
                         </div>
                         
                         {/* Floating Tooltip Mock */}
                         <motion.div 
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: 2, duration: 0.5 }}
                           className="absolute -right-4 -top-8 bg-foreground text-background text-[8px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-xl z-20 pointer-events-none"
                         >
                            AI Optimized
                         </motion.div>
                      </div>
                   </div>
                </div>

                {/* Footer Link Overlay */}
                <div className="mt-auto pt-8 flex justify-between items-center border-t border-foreground/5 relative z-10 w-full">
                   <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full border border-background bg-foreground/10" />)}
                   </div>
                   <button className="text-xs font-black uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors flex items-center gap-2 group/btn">
                      Explore Full Dashboard <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
