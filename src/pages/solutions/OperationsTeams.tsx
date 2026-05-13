import { motion } from 'motion/react';
import { Settings, MapPin, HardHat, Briefcase, ArrowRight, Activity, Users, FileSignature, CheckCircle2, RotateCcw } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';

export default function OperationsTeams() {
  const { openDemo } = useDemo();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-15 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-background to-electric-green/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/10 dark:bg-gray/10 text-navy dark:text-white text-sm font-bold mb-6">
                <Settings className="w-4 h-4" />
                <span>For Operations Teams</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                Flawless logistics for <span className="text-brand">distributed</span> workforces.
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Deploy field teams, manage contractors, handle crew rotations, and align travel directly to project codes with zero operational downtime.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-navy text-white hover:bg-navy/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-xl shadow-navy/20"
                >
                  Streamline Operations <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full"
            >
              {/* Custom Operations UI Mockup */}
              <div className="bg-white dark:bg-foreground/5 border border-foreground/10 rounded-2xl shadow-xl p-6 relative z-10 w-full max-w-md mx-auto lg:ml-auto">
                 <div className="flex items-center justify-between mb-6 border-b border-foreground/10 pb-4">
                   <div className="flex items-center gap-2">
                     <Activity className="w-5 h-5 text-brand" />
                     <h3 className="font-bold text-foreground">Active Deployments</h3>
                   </div>
                   <span className="text-xs text-foreground/50 font-medium">Live</span>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="flex items-center justify-between p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer border border-transparent hover:border-foreground/10">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-electric-green/20 flex items-center justify-center shrink-0">
                         <HardHat className="w-5 h-5 text-electric-green" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-foreground">Project Alpha - Site A</p>
                         <p className="text-xs text-foreground/60">12 Crew Members • Job #8492</p>
                       </div>
                     </div>
                     <span className="text-[10px] font-bold px-2 py-1 bg-electric-green/10 text-electric-green rounded-full uppercase">On Site</span>
                   </div>

                   <div className="flex items-center justify-between p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer border border-transparent hover:border-foreground/10">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                         <MapPin className="w-5 h-5 text-brand" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-foreground">Offshore Rig Delta</p>
                         <p className="text-xs text-foreground/60">4 Contractors • Job #9921</p>
                       </div>
                     </div>
                     <span className="text-[10px] font-bold px-2 py-1 bg-brand/10 text-brand rounded-full uppercase">In Transit</span>
                   </div>

                   <div className="flex items-center justify-between p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer border border-transparent hover:border-foreground/10">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-navy/20 flex items-center justify-center shrink-0">
                         <Briefcase className="w-5 h-5 text-navy" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-foreground">VIP Client Audit</p>
                         <p className="text-xs text-foreground/60">2 Executives • Cost Center B</p>
                       </div>
                     </div>
                     <span className="text-[10px] font-bold px-2 py-1 bg-navy/10 text-navy rounded-full uppercase">Arriving</span>
                   </div>
                 </div>

                 <button className="w-full mt-6 py-3 rounded-xl border border-dashed border-foreground/20 text-sm font-bold text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2">
                   <RotateCcw className="w-4 h-4" /> View Shift Rotations
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternating Feature Blocks for Ops */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center">
                <FileSignature className="w-7 h-7 text-brand" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground">
                Job Codes & Client Bill-Backs
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Connect travel spend directly to operational outputs. Enforce mandatory custom fields for PO numbers, job codes, and cost centers before booking. Effortlessly export data to rebill clients with zero leakage.
              </p>
              <ul className="space-y-3 pt-4">
                {['Mandatory job code enforcement', 'Automated client rebilling reports', 'Cost center allocation logic'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-electric-green shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-foreground/5 rounded-3xl aspect-square lg:aspect-video flex items-center justify-center p-8 border border-foreground/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 to-transparent"></div>
              <FileSignature className="w-32 h-32 text-brand opacity-80 relative z-10" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="w-14 h-14 bg-electric-green/10 rounded-2xl flex items-center justify-center">
                <Users className="w-7 h-7 text-electric-green" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground">
                Contractor & Guest Travel
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Managing non-employee travel shouldn't require creating new HR profiles. Send temporary, policy-controlled booking links to contractors, job candidates, or guest speakers and let them book themselves.
              </p>
              <ul className="space-y-3 pt-4">
                {['No profile creation necessary', 'Strict policy guardrails applied automatically', 'Centralized payment (no reimbursements)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-electric-green shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-foreground/5 rounded-3xl aspect-square lg:aspect-video flex items-center justify-center p-8 border border-foreground/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-green/10 to-transparent"></div>
              <Users className="w-32 h-32 text-electric-green opacity-80 relative z-10" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="w-14 h-14 bg-navy/10 dark:bg-white/10 rounded-2xl flex items-center justify-center">
                <HardHat className="w-7 h-7 text-navy dark:text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground">
                Crew Rotations & Group Logistics
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Whether deploying 5 or 50 people to a site, handle bulk ticketing, room blocks, and complex logistics in a single interface. When project timelines shift, instantly align travel changes across the entire crew.
              </p>
              <ul className="space-y-3 pt-4">
                {['Bulk flight and room block reservations', 'Mass itinerary management', 'Instant disruption handling via 24/7 agents'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-electric-green shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-foreground/5 rounded-3xl aspect-square lg:aspect-video flex items-center justify-center p-8 border border-foreground/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy/10 dark:from-white/10 to-transparent"></div>
              <HardHat className="w-32 h-32 text-navy dark:text-white opacity-80 relative z-10" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
