import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Briefcase, ChevronRight, Users, Building2, MapPin, XCircle, Plane, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react';

export default function AudienceSection() {
  const navigate = useNavigate();

  return (
    <section id="solutions" className="py-10 lg:py-16 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Tailored Solutions</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight"
          >
            Built for scale, <span className="text-foreground/40">designed for your workflow.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative p-8 lg:p-12 bg-card-bg rounded-[32px] border border-border-subtle overflow-hidden transition-all hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/5"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 blur-[100px] -mr-48 -mt-48 rounded-full group-hover:bg-brand/10 transition-all duration-700 pointer-events-none" />
            
            <div className="relative z-10 text-foreground">
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 border border-brand/20 shadow-inner">
                <Trophy className="w-7 h-7 text-brand" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6 group-hover:text-brand transition-colors duration-300">
                Sports Leagues <br />& Teams
              </h3>
              
              <p className="text-foreground/60 text-base lg:text-lg mb-10 leading-relaxed font-medium">
                Coordinate travel for entire squads, coaching staff, and officials. Handle group bookings, charter flights, hotel blocks, and per diem — all in one unified workspace designed for performance.
              </p>

              {/* Pain Points Visualization - The Problem */}
              <div className="mb-12 space-y-3">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-border-subtle/50" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">The old way</span>
                  <div className="h-px flex-1 bg-border-subtle/50" />
                </div>
                {[
                  { text: 'Fragmented manual rosters in messy spreadsheets', sub: 'High risk of human error & sync issues' },
                  { text: 'Booking 50+ flights & rooms across 10 websites', sub: 'Opaque pricing & zero audit trail' },
                  { text: 'Nightmare logistics for last-minute venue changes', sub: 'Inflexible systems that block agility' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-border-subtle/50 transition-all cursor-default group/item hover:bg-foreground/[0.04]"
                  >
                    <XCircle className="w-4 h-4 text-foreground/30 shrink-0 mt-0.5 group-hover/item:text-rose-400 transition-colors" />
                    <div>
                      <p className="text-sm font-semibold text-foreground tracking-tight leading-none mb-1.5">{item.text}</p>
                      <p className="text-[12px] text-foreground/50 font-medium leading-tight">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* The Solution */}
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px flex-1 bg-brand/10" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">The Travelo Advantage</span>
                 <div className="h-px flex-1 bg-brand/10" />
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: Users, text: 'Mass Roster Sync' },
                  { icon: Plane, text: 'Charter & Bulk' },
                  { icon: MapPin, text: 'Venue Proximity' },
                  { icon: Trophy, text: 'Uniform Per Diems' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand/[0.02] border border-brand/10 hover:border-brand/30 transition-colors">
                    <item.icon className="w-4 h-4 text-brand" />
                    <span className="text-[11px] font-bold text-foreground/80 uppercase tracking-tight">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Mock Dashboard Slice for Sports */}
              <div className="mb-10 p-2 bg-foreground/[0.02] border border-foreground/5 rounded-[24px] relative overflow-hidden group/demo-sports backdrop-blur-sm">
                 <div className="bg-card-bg border border-border-subtle rounded-[18px] p-5 shadow-sm">
                   <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1.5 opacity-60">
                         <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="px-2.5 py-1 bg-brand/10 rounded-md text-[9px] font-bold text-brand uppercase tracking-widest">Team Portal</div>
                   </div>
                   <div className="space-y-3">
                      <div className="p-3 bg-foreground/[0.02] rounded-xl border border-border-subtle/50 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Users className="w-4 h-4 text-foreground/50 hidden sm:block" />
                            <div className="space-y-1.5">
                               <div className="w-20 h-2 bg-foreground/30 rounded-full" />
                               <div className="w-12 h-1.5 bg-foreground/10 rounded-full" />
                            </div>
                         </div>
                         <span className="text-[10px] px-2 py-1 bg-brand/10 rounded-lg text-brand font-bold">42 Active</span>
                      </div>
                      <div className="p-3 bg-brand/[0.04] rounded-xl border border-brand/10 flex items-center gap-4">
                         <Trophy className="w-4 h-4 text-brand hidden sm:block" />
                         <div className="flex-1">
                            <div className="w-full h-1.5 bg-brand/10 rounded-full overflow-hidden">
                               <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-brand rounded-full" />
                            </div>
                         </div>
                      </div>
                   </div>
                 </div>
                 <div className="absolute inset-0 bg-linear-to-t from-card-bg via-transparent to-transparent opacity-0 group-hover/demo-sports:opacity-40 transition-opacity duration-500" />
              </div>
              
              <button 
                onClick={() => navigate('/sports-leagues')}
                className="group/btn flex items-center justify-between w-full p-4 rounded-2xl bg-brand font-bold text-white hover:bg-brand/90 transition-all text-sm"
              >
                <span>Explore Sports Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Corporate Card */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative p-8 lg:p-12 bg-card-bg rounded-[32px] border border-border-subtle overflow-hidden transition-all hover:border-corporate/40 hover:shadow-2xl hover:shadow-corporate/5"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-corporate/5 blur-[100px] -mr-48 -mt-48 rounded-full group-hover:bg-corporate/10 transition-all duration-700 pointer-events-none" />
            
            <div className="relative z-10 text-foreground">
              <div className="w-14 h-14 bg-corporate/10 rounded-2xl flex items-center justify-center mb-8 border border-corporate/20 shadow-inner">
                <Briefcase className="w-7 h-7 text-corporate" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6 group-hover:text-corporate transition-colors duration-300">
                Corporate <br />Organizations
              </h3>
              
              <p className="text-foreground/60 text-base lg:text-lg mb-10 leading-relaxed font-medium">
                Streamline business travel for your employees. Set intelligent spending policies, automate expense reconciliation, and gain real-time visibility into your global travel footprint.
              </p>

              {/* Pain Points Visualization - The Problem */}
              <div className="mb-12 space-y-3">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-border-subtle/50" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">The old way</span>
                  <div className="h-px flex-1 bg-border-subtle/50" />
                </div>
                {[
                  { text: 'Uncontrolled "Shadow Travel" outside of policy', sub: 'Invisible spend that drains company budgets' },
                  { text: 'Soul-crushing manual expense reports & receipts', sub: 'Low employee productivity & satisfaction' },
                  { text: 'Zero visibility on employee safety during transit', sub: 'Critical failure in duty-of-care obligations' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-border-subtle/50 transition-all cursor-default group/item hover:bg-foreground/[0.04]"
                  >
                    <XCircle className="w-4 h-4 text-foreground/30 shrink-0 mt-0.5 group-hover/item:text-rose-400 transition-colors" />
                    <div>
                      <p className="text-sm font-semibold text-foreground tracking-tight leading-none mb-1.5">{item.text}</p>
                      <p className="text-[12px] text-foreground/50 font-medium leading-tight">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* The Solution */}
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px flex-1 bg-corporate/10" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-corporate">The Travelo Advantage</span>
                 <div className="h-px flex-1 bg-corporate/10" />
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {[
                  { icon: ShieldCheck, text: 'Policy Multi-Layer' },
                  { icon: BarChart3, text: 'VAT & Tax Auto' },
                  { icon: Users, text: 'SSO & HRMS Sync' },
                  { icon: Building2, text: 'Pref. Corp Rates' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-corporate/[0.02] border border-corporate/10 hover:border-corporate/30 transition-colors">
                    <item.icon className="w-4 h-4 text-corporate" />
                    <span className="text-[11px] font-bold text-foreground/80 uppercase tracking-tight">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Mock Dashboard Slice for Corporate */}
              <div className="mb-10 p-2 bg-foreground/[0.02] border border-foreground/5 rounded-[24px] relative overflow-hidden group/demo-corp backdrop-blur-sm">
                 <div className="bg-card-bg border border-border-subtle rounded-[18px] p-5 shadow-sm">
                   <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1.5 opacity-60">
                         <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="px-2.5 py-1 bg-corporate/10 rounded-md text-[9px] font-bold text-corporate uppercase tracking-widest">Live Preview</div>
                   </div>
                   <div className="space-y-3">
                      <div className="h-11 bg-foreground/[0.02] rounded-xl border border-border-subtle/50 flex items-center justify-between px-4">
                         <div className="flex items-center gap-3">
                            <Plane className="w-4 h-4 text-foreground/50 hidden sm:block" />
                            <div className="w-24 h-2 bg-foreground/30 rounded-full" />
                         </div>
                         <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="h-16 bg-foreground/[0.02] rounded-xl border border-border-subtle/50 p-3.5 flex flex-col justify-between">
                            <div className="w-8 h-1.5 bg-foreground/20 rounded-full" />
                            <div className="w-16 h-2 bg-foreground/40 rounded-full" />
                         </div>
                         <div className="h-16 bg-corporate/[0.04] rounded-xl border border-corporate/10 p-3.5 flex flex-col justify-between">
                            <div className="w-8 h-1.5 bg-corporate/40 rounded-full" />
                            <div className="w-full h-2 bg-corporate/60 rounded-full" />
                         </div>
                      </div>
                   </div>
                 </div>
                 <div className="absolute inset-0 bg-linear-to-t from-card-bg via-transparent to-transparent opacity-0 group-hover/demo-corp:opacity-40 transition-opacity duration-500" />
              </div>
              
              <button 
                onClick={() => navigate('/corporate-teams')}
                className="group/btn flex items-center justify-between w-full p-4 rounded-2xl bg-corporate font-bold text-white hover:bg-corporate/90 transition-all text-sm"
              >
                <span>Explore Corporate Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
