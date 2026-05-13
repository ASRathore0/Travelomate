import { motion } from 'motion/react';
import { Briefcase, SlidersHorizontal, PieChart, Globe, ArrowRight, ShieldCheck, CheckCircle2, Ticket, Users } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';

export default function TravelManagers() {
  const { openDemo } = useDemo();

  const features = [
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-brand" />,
      title: "Dynamic Policy Engine",
      description: "Build incredibly granular travel policies. Set dynamic rules based on role, department, geography, or even specific trip parameters to prevent leakage."
    },
    {
      icon: <PieChart className="w-6 h-6 text-brand" />,
      title: "Deep Program Analytics",
      description: "Instantly access comprehensive reporting on vendor spend, out-of-policy bookings, carbon emissions, and unused ticket inventories."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand" />,
      title: "Unrivaled Global Inventory",
      description: "Give travelers access to everything. Combine global GDS content, NDC fares, low-cost carriers, and your own negotiated corporate rates in one view."
    },
    {
      icon: <Ticket className="w-6 h-6 text-brand" />,
      title: "Unused Ticket Management",
      description: "Never lose money on a canceled flight again. Automatically track, manage, and apply unused tickets to future traveler bookings."
    }
  ];

  const benefits = [
    "Reduce leakage with 98% average platform adoption",
    "Automate dynamic, multi-tier approval workflows",
    "Leverage clean data to negotiate better supplier contracts",
    "Monitor global traveler safety with real-time risk dashboards",
    "Provide 24/7 proactive human support for all edge cases",
    "Integrate seamlessly with your expense and HR platforms"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                <Briefcase className="w-4 h-4" />
                <span>For Travel Managers</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                The ultimate <span className="text-brand">command center</span> for corporate travel.
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Consolidate your entire travel program. Automate policy compliance, optimize vendor negotiations, and provide exceptional traveler support from a single dashboard.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-brand text-white hover:bg-brand/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Take Control <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full relative"
            >
              <div className="bg-white dark:bg-foreground/5 border border-foreground/10 rounded-2xl shadow-2xl p-6 relative z-10 w-full max-w-md mx-auto lg:ml-auto">
                 <div className="flex items-center justify-between mb-6 border-b border-foreground/10 pb-4">
                   <h3 className="font-bold text-foreground flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand" /> Program Health</h3>
                   <span className="text-electric-green font-bold text-xs bg-electric-green/10 px-2 py-1 rounded-full uppercase tracking-wider">Optimal</span>
                 </div>

                 <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                     <p className="text-xs text-foreground/60 mb-1 font-medium">Platform Adoption</p>
                     <p className="text-3xl font-black text-foreground">98.2<span className="text-lg">%</span></p>
                   </div>
                   <div className="p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                     <p className="text-xs text-foreground/60 mb-1 font-medium">In-Policy Spend</p>
                     <p className="text-3xl font-black text-electric-green">94.5<span className="text-lg">%</span></p>
                   </div>
                 </div>

                 <div className="space-y-3">
                   <p className="text-sm font-bold text-foreground">Recent Policy Approvals</p>
                   <div className="p-3 rounded-xl border border-brand/30 bg-brand/5 flex justify-between items-center transition-colors hover:bg-brand/10 cursor-pointer">
                     <div>
                       <p className="text-sm font-bold text-foreground">Cabin Class Exception</p>
                       <p className="text-xs text-foreground/60">London (LHR) - Sales Dept</p>
                     </div>
                     <button className="text-xs font-bold bg-foreground text-background px-3 py-1.5 rounded-lg hover:scale-105 transition-transform">Review</button>
                   </div>
                 </div>
              </div>
              {/* Decorative elements behind the card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-electric-green/20 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6 text-foreground">Build a modern travel program.</h2>
            <p className="text-lg text-foreground/70">
              Provide your travelers with the inventory they crave while giving yourself the oversight and reporting power you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-foreground/5 border border-foreground/10 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Feature */}
      <section className="py-24 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6 text-foreground">Transform travel from a cost center to a strategic advantage.</h2>
                <p className="text-lg text-foreground/70">
                  Stop wrestling with fragmented data and angry travelers. Leverage our modern TMC infrastructure to deliver an elite program that saves money and boosts employee satisfaction.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-electric-green shrink-0" />
                    <span className="text-foreground/80 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand/20 to-navy/20 border border-foreground/10 overflow-hidden flex items-center justify-center">
                 <SlidersHorizontal className="w-32 h-32 text-navy opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
