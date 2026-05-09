import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, Smartphone, ShieldCheck, Zap, ArrowRight, LayoutGrid, Plane, Hotel, Car, MapPin, Navigation } from 'lucide-react';

export default function TraveloIntro() {
  const [activeTab, setActiveTab] = useState<'flight' | 'hotel' | 'cab'>('flight');

  const benefits = [
    {
      icon: MousePointer2,
      title: "Intuitive Interface",
      description: "Designed for travelers, with a zero-learning-curve UX that makes booking a breeze."
    },
    {
      icon: Smartphone,
      title: "Book Anywhere",
      description: "Seamlessly transition from desktop to mobile without losing your progress."
    },
    {
      icon: ShieldCheck,
      title: "Policy Compliant",
      description: "Built-in guardrails ensure every booking stays within your company's travel policy."
    },
    {
      icon: Zap,
      title: "Instant Confirmations",
      description: "Direct integrations with top-tier providers for real-time booking and confirmation."
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-brand/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative w-full"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] min-h-[400px] md:min-h-[520px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-card-bg border border-foreground/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-colors duration-500">
              {/* Refined Mock UI Background */}
              <div className="absolute inset-0 bg-linear-to-br from-brand/[0.05] via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex flex-col">
                {/* Clean Dashboard Header */}
                <div className="px-4 md:px-8 py-3 md:py-5 border-b border-foreground/10 flex items-center justify-between bg-card-bg/80 backdrop-blur-xl">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
                      <LayoutGrid className="text-white w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <span className="font-display font-black text-lg md:text-xl tracking-tighter block leading-none text-foreground">Travelo</span>
                      <span className="text-[8px] md:text-[10px] font-bold text-foreground/50 uppercase tracking-widest">Enterprise v2.4</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/10 border border-foreground/5">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-tight text-foreground/60">System Online</span>
                    </div>
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center overflow-hidden">
                       <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-brand/30" />
                    </div>
                  </div>
                </div>

                {/* Vertical Tabs & Content Layout */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Sidebar Navigation */}
                  <div className="w-16 md:w-20 border-r border-foreground/10 flex flex-col items-center py-4 md:py-6 gap-4 md:gap-6 bg-foreground/[0.03]">
                    {[
                      { id: 'flight', icon: Plane },
                      { id: 'hotel', icon: Hotel },
                      { id: 'cab', icon: Car }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          activeTab === tab.id 
                            ? 'bg-brand text-white shadow-xl shadow-brand/30 scale-110' 
                            : 'text-foreground/40 hover:text-foreground/70 hover:bg-foreground/10'
                        }`}
                      >
                        <tab.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    ))}
                    <div className="mt-auto pb-4">
                       <Zap className="w-4 h-4 md:w-5 md:h-5 text-brand/30" />
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode="wait">
                      {activeTab === 'flight' && (
                        <motion.div
                          key="flight"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4 md:space-y-6"
                        >
                          <div className="space-y-1 md:space-y-2">
                             <h4 className="text-xl md:text-2xl font-display font-black tracking-tight text-foreground">Search Flights</h4>
                             <p className="text-xs md:text-sm text-foreground/60 font-medium tracking-tight">Smart routing with AI savings enabled</p>
                          </div>

                          <div className="grid grid-cols-2 gap-3 md:gap-4">
                             <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-foreground/[0.04] border border-foreground/10 space-y-1">
                                <span className="text-[8px] md:text-[10px] font-bold text-foreground/50 uppercase">From</span>
                                <p className="text-sm md:text-base font-bold text-foreground">New Delhi (DEL)</p>
                             </div>
                             <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-foreground/[0.04] border border-foreground/10 space-y-1">
                                <span className="text-[8px] md:text-[10px] font-bold text-foreground/50 uppercase">To</span>
                                <p className="text-sm md:text-base font-bold text-foreground">London (LHR)</p>
                             </div>
                          </div>

                          <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-linear-to-br from-brand to-brand-dark text-white shadow-2xl shadow-brand/20 relative overflow-hidden group cursor-pointer">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                              <div className="flex justify-between items-center mb-4 md:mb-6">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                     <span className="text-xl md:text-2xl font-display font-black">DEL</span>
                                     <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-50" />
                                     <span className="text-xl md:text-2xl font-display font-black">LHR</span>
                                  </div>
                                  <p className="text-[10px] md:text-xs font-medium opacity-80">14 May • Non-stop • 9h 15m</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-2xl md:text-3xl font-display font-black">₹42.5k</p>
                                  <span className="text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 uppercase">Best AI Value</span>
                                </div>
                              </div>
                              <div className="flex gap-2 md:gap-3">
                                 <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl bg-white/10 text-[8px] md:text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">Verified Policy</div>
                                 <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl bg-white/10 text-[8px] md:text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">Business Class</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'hotel' && (
                        <motion.div
                          key="hotel"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4 md:space-y-6"
                        >
                          <div className="space-y-1 md:space-y-2">
                             <h4 className="text-xl md:text-2xl font-display font-black tracking-tight text-foreground">Premium Stays</h4>
                             <p className="text-xs md:text-sm text-foreground/60 font-medium tracking-tight">Negotiated rates for Travelomate clients</p>
                          </div>

                          <div className="space-y-3 md:space-y-4">
                            {[1, 2].map((i) => (
                              <div key={i} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-card-bg border border-foreground/15 shadow-sm hover:shadow-xl transition-all flex gap-3 md:gap-4 group">
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-brand/${i === 1 ? '10' : '5'} flex items-center justify-center transition-colors group-hover:bg-brand/20`}>
                                  <Hotel className="text-brand w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div className="flex-1 flex justify-between items-center text-foreground">
                                  <div>
                                    <h5 className="font-bold text-sm md:text-base">{i === 1 ? 'Hilton London' : 'The Savoy London'}</h5>
                                    <div className="flex items-center gap-1 opacity-60">
                                      <MapPin className="w-2 h-2 md:w-3 md:h-3" />
                                      <span className="text-[8px] md:text-[10px] font-medium uppercase tracking-tight">Kensington, UK</span>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-display font-black text-base md:text-lg text-brand">₹{i === 1 ? '14,500' : '22,800'}</p>
                                    <p className="text-[8px] md:text-[10px] font-bold opacity-40 uppercase line-through">₹{i === 1 ? '18k' : '28k'}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'cab' && (
                        <motion.div
                          key="cab"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4 md:space-y-6"
                        >
                          <div className="space-y-1 md:space-y-2">
                             <h4 className="text-xl md:text-2xl font-display font-black tracking-tight text-foreground">Ground Transit</h4>
                             <p className="text-xs md:text-sm text-foreground/60 font-medium tracking-tight">Real-time tracking & seamless pickups</p>
                          </div>

                          <div className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-foreground/[0.04] border border-foreground/15 transition-colors relative overflow-hidden">
                             <div className="absolute inset-0 opacity-[0.05] pointer-events-none text-foreground" 
                                  style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                             
                             <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3 md:gap-4">
                                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
                                        <Car className="text-white w-5 h-5 md:w-6 md:h-6" />
                                     </div>
                                     <div>
                                        <p className="text-[8px] md:text-xs font-bold text-foreground/50 uppercase tracking-widest leading-none">Driver On Signal</p>
                                        <p className="text-base md:text-lg font-display font-black text-foreground">DL 2C 1234 • Tesla S</p>
                                     </div>
                                  </div>
                                  <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-brand/20 border border-brand/30">
                                     <Navigation className="w-3 h-3 text-brand animate-pulse" />
                                     <span className="text-[8px] md:text-[10px] font-black text-brand uppercase tracking-tighter">Live GPS</span>
                                  </div>
                                </div>

                                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-card-bg/90 backdrop-blur-md border border-foreground/15 space-y-3 md:space-y-4 transition-colors">
                                   <div className="flex items-center gap-3 md:gap-4">
                                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(var(--brand-rgb),0.5)]" />
                                      <div className="flex-1 h-px bg-foreground/20 relative">
                                        <motion.div 
                                          className="absolute top-1/2 left-0 w-2 h-2 md:w-3 md:h-3 bg-brand rounded-full -translate-y-1/2 shadow-lg"
                                          animate={{ left: '70%' }}
                                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        />
                                      </div>
                                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-foreground/20" />
                                   </div>
                                   <div className="flex justify-between text-[8px] md:text-[10px] font-bold text-foreground/50 uppercase tracking-widest">
                                      <span>Pickup</span>
                                      <span>Drop-off</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:-right-6 lg:-right-8 bg-card-bg p-4 md:p-6 rounded-2xl shadow-xl border border-foreground/10 z-20"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <ShieldCheck className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Compliance Rate</p>
                  <p className="text-xl md:text-2xl font-display font-black text-foreground">99.8%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="px-4 py-2 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-6 inline-block">
                  Next-Gen Self Booking
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight leading-tight">
                  Meet <span className="text-brand">Travelo.</span><br />
                  Empower Your Team to Fly Solo.
                </h2>
                <p className="mt-6 text-lg lg:text-xl text-foreground/60 leading-relaxed font-medium">
                  Travelo is the ultimate self-booking tool designed to give your employees independence while keeping your finance team in total control. No more email chains—just seamless booking within policy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-brand">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-foreground/50 leading-snug">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <button className="px-8 py-4 bg-brand text-white rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand/20 flex items-center gap-3">
                  Experience Travelo Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
