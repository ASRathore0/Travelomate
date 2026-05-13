import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Globe, Award, Zap, Heart, Clock, BarChart3, ChevronRight } from 'lucide-react';
import { useDemo } from '../lib/DemoContext';

export default function AboutUs() {
  const { openDemo } = useDemo();

  return (
    <div className="pt-20 pb-20 bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] -mr-64 -mt-32 rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-black text-brand uppercase tracking-[0.2em] mb-8">
            Est. 2010 • 15 Years of Precision
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8">
            Travel managed. <br />
            <span className="text-brand italic">People remembered.</span>
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-2xl">
            Sixteen years ago, Travelomate was built on a belief that corporate travel had become transactional, cold, and indifferent. We set out to build a travel intelligence team, not just a booking engine.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Banner */}
      <section className="bg-navy text-white py-24 mb-32 relative group overflow-hidden">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-8">
                "The only travel management company that treats <span className="text-brand italic">your business</span> like its own."
              </h2>
              <p className="text-xl text-white/60 mb-8 font-light italic">
                — Travelomate core philosophy
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                  <p className="text-5xl font-black text-brand mb-2">16</p>
                  <p className="text-xs uppercase font-black tracking-widest text-white/40">Years in Operation</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                  <p className="text-5xl font-black text-brand mb-2">15m</p>
                  <p className="text-xs uppercase font-black tracking-widest text-white/40">Emergency Response</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Four truths that never move</h2>
          <p className="text-foreground/60">Our foundation for building high-performance travel cultures.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
              {
                 step: "01",
                 title: "Customer Obsession",
                 desc: "We don't manage travel. We manage outcomes. Every decision is filtered through one question: does this make our client's journey better?",
                 icon: Heart
              },
              {
                 step: "02",
                 title: "Precision Delivery",
                 desc: "Corporate travel has zero tolerance for error. We have built 16 years of operational muscle around getting it right — the first time, every time.",
                 icon: Target
              },
              {
                 step: "03",
                 title: "Human Intelligence",
                 desc: "Our technology is sharp. Our people are sharper. A 24/7 concierge layer led by account managers who understand your DNA.",
                 icon: Zap
              },
              {
                 step: "04",
                 title: "Cost Command",
                 desc: "We don't just cut costs. We give you complete visibility and control over every rupee of travel spend — before it leaves your organization.",
                 icon: BarChart3
              }
           ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-card-bg border border-border-subtle rounded-[32px] hover:border-brand/30 transition-all shadow-sm flex flex-col"
              >
                 <span className="text-4xl font-display font-black text-brand/10 mb-6">{pillar.step}</span>
                 <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                    <pillar.icon className="w-6 h-6 text-brand" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                 <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                    {pillar.desc}
                 </p>
              </motion.div>
           ))}
        </div>
      </section>

      {/* The Differentiator (Comparison) */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="p-12 lg:p-16 bg-navy text-white rounded-[48px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand blur-[120px] opacity-10 -mr-32 -mt-32 rounded-full" />
          
          <h2 className="text-4xl font-display font-bold mb-16">The Honest Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 uppercase text-[10px] font-black tracking-widest text-white/40">
                  <th className="pb-6 pr-8">Capability</th>
                  <th className="pb-6 px-8">Global TMCs</th>
                  <th className="pb-6 px-8">Generic OTAs</th>
                  <th className="pb-6 pl-8 text-brand">Travelomate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { cap: "Sports Expertise", tmc: "Minimal", ota: "None", tm: "Core DNA" },
                  { cap: "Dedicated Account Mgr", tmc: "Rotates frequently", ota: "No", tm: "Permanent contact" },
                  { cap: "24/7 Human Support", tmc: "Ticket queue", ota: "Chatbot only", tm: "15-min response" },
                  { cap: "Group Squad Booking", tmc: "Cumbersome", ota: "Not built for it", tm: "Native capability" },
                  { cap: "India-first Expertise", tmc: "Western-first", ota: "India focus", tm: "16 yrs India ops" }
                ].map((row, i) => (
                  <tr key={i} className="group">
                    <td className="py-6 pr-8 font-bold text-white/80">{row.cap}</td>
                    <td className="py-6 px-8 text-white/40 text-sm italic">~ {row.tmc}</td>
                    <td className="py-6 px-8 text-white/40 text-sm italic">✗ {row.ota}</td>
                    <td className="py-6 pl-8 text-brand font-black italic flex items-center gap-2">
                       <Zap className="w-3 h-3 fill-current" /> {row.tm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DNA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-5xl font-display font-bold mb-8 leading-tight">
             "We don't just book travel. We <span className="text-brand">engineer the conditions</span> for your team to perform."
           </h2>
           <p className="text-xl text-foreground/60 leading-relaxed mb-8">
             Whether it's moving a squad of 300 athletes across 8 cities with zero margin for error, or managing a CEO's window seat preference — we understand that every trip deserves precision and a partner who actually knows you.
           </p>
           <div className="flex gap-4">
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-foreground/10" />)}
              </div>
              <div>
                 <p className="font-bold">The Collective Mind</p>
                 <p className="text-xs text-foreground/40 uppercase font-black tracking-widest">Our Operations Engine</p>
              </div>
           </div>
        </div>
        <div className="relative">
           <div className="absolute inset-0 bg-brand/10 blur-3xl opacity-50 rounded-full" />
           <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "India Focus", value: "100%", sub: "Native Operations" },
                { label: "Crisis Resovled", value: "2am", sub: "Human Readiness" },
                { label: "Leagues Managed", value: "4+", sub: "Major Championships" },
                { label: "Client Retention", value: "98%", sub: "Relationship Based" }
              ].map((box, i) => (
                <div key={i} className="p-8 bg-card-bg border border-border-subtle rounded-3xl group hover:border-brand transition-colors">
                   <p className="text-3xl font-display font-black text-brand mb-2">{box.value}</p>
                   <p className="text-sm font-bold mb-1">{box.label}</p>
                   <p className="text-[10px] text-foreground/30 uppercase font-black tracking-widest">{box.sub}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="p-12 lg:p-24 bg-brand text-white rounded-[64px] text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '60px 60px' }} />
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="relative z-10"
           >
              <h2 className="text-5xl lg:text-7xl font-display font-black mb-8 leading-[0.9]">
                Ready to travel <br />
                <span className="italic opacity-60">like a champion?</span>
              </h2>
              <p className="text-xl opacity-80 mb-12 max-w-xl mx-auto">
                Let's build your travel programme — together. One discovery call is all it takes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button 
                   onClick={openDemo}
                   className="px-10 py-5 bg-navy text-white rounded-2xl font-black text-lg hover:bg-navy/90 transition-all flex items-center justify-center gap-3 shadow-2xl"
                 >
                    Book Discovery Call <ChevronRight className="w-5 h-5" />
                 </button>
                 <a href="/#footer" className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl font-black text-lg transition-all">
                    Contact Us
                 </a>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
