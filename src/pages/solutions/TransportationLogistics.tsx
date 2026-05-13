import { motion } from 'motion/react';
import { Ship, Plane, Clock, ArrowRight, AlertTriangle, Bed, CheckCircle2, Navigation, Map } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';
 

export default function TransportationLogistics() {
  const { openDemo } = useDemo();

  const features = [
    {
      icon: <Navigation className="w-6 h-6 text-brand" />,
      title: "Crew Rotations & Relays",
      description: "Manage complex shift changes seamlessly. Align flights and ground transport precisely with fleet movements, port arrivals, or flight schedules."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand" />,
      title: "Live Disruption Handling",
      description: "Weather delays and mechanical issues happen. Our 24/7 proactive agents instantly rebook and reroute crews to keep your logistics network flowing."
    },
    {
      icon: <Bed className="w-6 h-6 text-brand" />,
      title: "Strategic Layovers",
      description: "Source specialized accommodations near major cargo ports, rail hubs, and airports tailored specifically for commercial crew rest requirements."
    },
    {
      icon: <Map className="w-6 h-6 text-brand" />,
      title: "Multi-Leg Routing",
      description: "Easily book multi-destination trips for fleet managers and inspectors moving across various geographic nodes without creating separate itineraries."
    }
  ];

  const benefits = [
    "Access to specialized marine and aviation negotiated fares",
    "Integrations with leading crew scheduling software",
    "Instant booking modifications for delayed fleet arrivals",
    "Centralized billing—no corporate cards needed for transient crews",
    "Real-time geographical tracking for stringent duty of care",
    "Unified reporting across air, sea, and ground divisions"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-navy/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                <Ship className="w-4 h-4" />
                <span>For Transportation & Logistics</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                Travel management that moves at <span className="text-brand">fleet speed.</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Dynamic crew scheduling, specialized marine/aviation fares, and rapid disruption handling built specifically for global logistics networks.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-brand text-white hover:bg-brand/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Accelerate Logistics <ArrowRight className="w-4 h-4" />
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
                   <h3 className="font-bold text-foreground flex items-center gap-2"><Clock className="w-4 h-4 text-electric-green" /> Live Layover Management</h3>
                   <span className="text-electric-green font-bold text-xs bg-electric-green/10 px-2 py-1 rounded-full uppercase tracking-wider">Sync Active</span>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="p-4 rounded-xl border border-brand/30 bg-brand/5 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-2 opacity-10"><Ship className="w-16 h-16" /></div>
                     <div className="relative z-10">
                       <div className="flex justify-between items-start mb-2">
                         <div>
                           <p className="text-sm font-bold text-foreground">Vessel V-194 Delayed</p>
                           <p className="text-xs text-foreground/60">Rotterdam Port (RTM)</p>
                         </div>
                         <span className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-1 rounded">Action Required</span>
                       </div>
                       <p className="text-xs text-foreground/80 mt-3 font-medium">Relief Crew Incoming: 6 Pax</p>
                       <div className="mt-2 flex gap-2">
                         <button className="px-3 py-1.5 bg-brand text-white text-[10px] font-bold rounded hover:bg-brand/90">Extend Hotel by 1 Night</button>
                       </div>
                     </div>
                   </div>

                   <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/5 opacity-80">
                     <div className="flex justify-between items-start mb-2">
                       <div>
                         <p className="text-sm font-bold text-foreground">Pilot Shift Exchange</p>
                         <p className="text-xs text-foreground/60">Hub: DFW Terminal 2</p>
                       </div>
                       <span className="text-[10px] font-bold text-foreground/50 bg-foreground/10 px-2 py-1 rounded">On Schedule</span>
                     </div>
                   </div>
                 </div>

                 <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-between items-center text-sm">
                   <span className="text-foreground/50">Monitored routes:</span>
                   <span className="text-foreground font-bold flex items-center gap-2"><Navigation className="w-4 h-4 text-navy" /> 34 Active Relays</span>
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
            <h2 className="text-4xl font-black mb-6 text-foreground">Synchronize your people with your cargo.</h2>
            <p className="text-lg text-foreground/70">
              Stop letting travel bottlenecks disrupt your logistics chain. Get the proactive tools necessary to coordinate vast human networks seamlessly.
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
                <h2 className="text-4xl font-black mb-6 text-foreground">Specialized support for complex routing.</h2>
                <p className="text-lg text-foreground/70">
                  Aviation and marine travel require an entirely different playbook. Leverage negotiated specialized fares and 24/7 logistics agents who understand the nuances of fleet operations.
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
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand/20 to-navy/20 border border-foreground/10 overflow-hidden flex items-center justify-center relative">
                 <Plane className="w-32 h-32 text-navy opacity-50 absolute -top-8 -right-8 mix-blend-multiply dark:mix-blend-screen" />
                 <Ship className="w-32 h-32 text-brand opacity-60 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
