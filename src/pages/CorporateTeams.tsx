import { motion } from 'motion/react';
import { Briefcase, Target, Shield, BarChart, ArrowRight, Zap } from 'lucide-react';
import { useDemo } from '../lib/DemoContext';

export default function CorporateTeams() {
  const { openDemo } = useDemo();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vivid-orange/10 border border-vivid-orange/20 text-[10px] lg:text-xs font-bold text-vivid-orange uppercase tracking-widest mb-6">
            <Briefcase className="w-3 h-3" /> Enterprise Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 text-foreground">
            Travel for the <br /><span className="text-vivid-orange italic">Modern Enterprise.</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Scalable travel management designed for efficiency, policy compliance, and employee well-being.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Shield,
              title: "Policy Engine",
              desc: "Automate compliance with dynamic budget limits and preferred vendor routing."
            },
            {
              icon: BarChart,
              title: "Real-time Analytics",
              desc: "Complete visibility into your travel spend and carbon footprint, powered by AI."
            },
            {
              icon: Target,
              title: "Rapid Support",
              desc: "24/7 dedicated agents to handle disruptions, so your team doesn't miss a beat."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-foreground/[0.03] border border-foreground/5 rounded-[32px] hover:border-vivid-orange/30 transition-all group"
            >
              <div className="w-12 h-12 bg-vivid-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-vivid-orange transition-colors">
                <feature.icon className="w-6 h-6 text-vivid-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-foreground/[0.02] rounded-[48px] p-8 lg:p-16 border border-foreground/5">
          <div className="order-2 lg:order-1">
             <div className="aspect-video bg-navy-light rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl group/preview">
                {/* Dashboard UI Mockup */}
                <div className="absolute inset-0 flex flex-col p-4 bg-[#0a0a0b]">
                   {/* Sidebar / Topbar Simulation */}
                   <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-vivid-orange/20 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-vivid-orange" />
                         </div>
                         <div className="h-4 w-32 bg-white/10 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-white/5" />
                         <div className="w-6 h-6 rounded-full bg-white/5" />
                         <div className="w-20 h-6 rounded-lg bg-vivid-orange/20 border border-vivid-orange/30" />
                      </div>
                   </div>

                   <div className="grid grid-cols-12 gap-4 flex-grow">
                      {/* Left: Stats & Charts */}
                      <div className="col-span-8 flex flex-col gap-4">
                         <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map(i => (
                               <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-3">
                                  <div className="h-2 w-12 bg-white/10 rounded-full mb-2" />
                                  <div className="h-4 w-16 bg-vivid-orange/40 rounded-full" />
                               </div>
                            ))}
                         </div>
                         <div className="flex-grow bg-white/[0.03] border border-white/5 rounded-xl p-4 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                               <div className="h-3 w-32 bg-white/10 rounded-full" />
                               <div className="h-3 w-16 bg-white/5 rounded-full" />
                            </div>
                            {/* Fake Chart Lines */}
                            <svg className="absolute bottom-0 left-0 w-full h-32 text-vivid-orange/20" viewBox="0 0 400 100">
                               <path d="M0,80 Q50,40 100,60 T200,30 T300,50 T400,20 L400,100 L0,100 Z" fill="currentColor" />
                               <path d="M0,80 Q50,40 100,60 T200,30 T300,50 T400,20" fill="none" stroke="currentColor" strokeWidth="2" className="text-vivid-orange/60" />
                            </svg>
                         </div>
                      </div>

                      {/* Right: List */}
                      <div className="col-span-4 bg-white/[0.03] border border-white/5 rounded-xl p-4">
                         <div className="h-3 w-20 bg-white/10 rounded-full mb-4" />
                         <div className="space-y-3">
                            {[1, 2, 3, 4].map(i => (
                               <div key={i} className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-white/10" />
                                  <div className="flex-grow">
                                     <div className="h-2 w-full bg-white/5 rounded-full mb-1" />
                                     <div className="h-1.5 w-1/2 bg-white/[0.02] rounded-full" />
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Overlay Label for extra professional feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/80 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500">
                   <div className="text-white">
                      <p className="text-vivid-orange font-bold text-sm mb-1 uppercase tracking-widest">Live View</p>
                      <h4 className="text-2xl font-display font-bold">Real-time Policy Compliance</h4>
                   </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
              Corporate Travel <br />Simplified.
            </h2>
            <div className="space-y-6 text-foreground/80">
              {[
                "Global NDC airline inventory access",
                "Centralized invoicing and VAT recovery",
                "Automated expense reconciliation",
                "Employee duty of care monitoring",
                "Carbon offset reporting & integration"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-vivid-orange/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 text-vivid-orange" />
                  </div>
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={openDemo}
              className="mt-12 px-8 py-4 bg-vivid-orange text-white rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-vivid-orange/20"
            >
              Request Demo <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Enterprise Controls</h2>
            <p className="text-foreground/60">Balance employee flexibility with absolute corporate control.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Policy Guardrails",
                description: "Set intelligent budget caps based on employee level, destination, and booking lead time. Flag non-compliant bookings before they happen.",
                visual: (
                  <div className="space-y-4">
                     <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <div className="flex justify-between items-center mb-3">
                           <span className="text-xs font-bold text-white/60 uppercase">San Francisco • Hotel</span>
                           <span className="text-xs font-black text-vivid-orange bg-vivid-orange/10 px-2 py-0.5 rounded">Action Required</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
                        <div className="flex justify-between items-end">
                           <div>
                              <p className="text-xl font-bold font-display text-white">$450 <span className="text-xs opacity-40 font-sans">/ night</span></p>
                              <p className="text-[10px] text-white/40">Policy limit: $400</p>
                           </div>
                           <div className="flex gap-2">
                              <div className="px-3 py-1 bg-white/10 text-white text-[10px] rounded-lg">Deny</div>
                              <div className="px-3 py-1 bg-vivid-orange text-white text-[10px] rounded-lg font-bold">Approve</div>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 bg-white/5 border border-white/10 rounded-xl opacity-50">
                        <div className="h-2 w-32 bg-white/10 rounded-full mb-2" />
                        <div className="h-2 w-16 bg-white/5 rounded-full" />
                     </div>
                  </div>
                )
              },
              {
                title: "Spend Intelligence",
                description: "Predictive analytics identify areas for savings by analyzing historical trends and real-time market data.",
                visual: (
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
                       <div>
                          <p className="text-[10px] uppercase opacity-40 mb-1">Potential Savings</p>
                          <p className="text-2xl font-bold text-vivid-orange">$14,200</p>
                       </div>
                       <motion.div 
                         animate={{ scale: [1, 1.1, 1] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-10 h-10 rounded-full bg-vivid-orange/20 flex items-center justify-center"
                       >
                          <BarChart className="w-5 h-5 text-vivid-orange" />
                       </motion.div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold text-white/40">
                          <span>OPTIMIZED VENDORS</span>
                          <span>IMPACT</span>
                       </div>
                       {[
                         { name: "Global Airlines", impact: "75%" },
                         { name: "Preferred Hotels", impact: "40%" }
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <div className="h-1.5 flex-grow bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: v.impact }}
                                 className="h-full bg-vivid-orange" 
                               />
                            </div>
                            <span className="text-[10px] font-bold text-white/60 w-12">{v.impact}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                )
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 lg:p-10 bg-navy-light rounded-[40px] border border-white/5 flex flex-col"
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/60 mb-10 text-sm leading-relaxed">{feature.description}</p>
                <div className="flex-grow bg-[#050506] rounded-2xl p-6 border border-white/5">
                  {feature.visual}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
