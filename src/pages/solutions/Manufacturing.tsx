import { motion } from 'motion/react';
import { Factory, Globe, Wrench, Clock, ArrowRight, ShieldAlert, Truck, CheckCircle2, MapPin } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';

export default function Manufacturing() {
  const { openDemo } = useDemo();

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-brand" />,
      title: "24/7 Uninterrupted Support",
      description: "When production halts and a technician needs to be dispatched immediately, our agents are available 24/7/365 to book last-minute complex itineraries."
    },
    {
      icon: <Globe className="w-6 h-6 text-brand" />,
      title: "Global Reach, Local Support",
      description: "Seamlessly connect your executive headquarters with international manufacturing plants and supplier hubs across any continent."
    },
    {
      icon: <Wrench className="w-6 h-6 text-brand" />,
      title: "Specialized Accommodations",
      description: "Source extended-stay lodging and secure accommodations near remote facilities, industrial zones, and rural project sites."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand" />,
      title: "Comprehensive Risk Management",
      description: "Ensure the safety of your supply chain auditors, quality inspectors, and engineers with real-time risk alerts and active traveler tracking."
    }
  ];

  const benefits = [
    "Manage travel costs by facility or strategic business unit",
    "Streamline multi-leg journeys for technical strike teams",
    "Consolidate billing to remove friction for field workers",
    "VIP executive service for global procurement leaders",
    "Real-time visibility into global travel footprint",
    "Automated approvals for urgent, out-of-policy bookings"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/10 text-navy dark:bg-black/10 dark:text-white text-sm font-bold mb-6">
                <Factory className="w-4 h-4" />
                <span>For Manufacturing</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                Keep your <span className="text-brand">supply chain</span> moving.
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Reliable travel management built to handle the rigorous demands of plant managers, auditors, and rapid-response technicians globally.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-brand text-white hover:bg-brand/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Optimize Travel <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full relative"
            >
              <div className="bg-white dark:bg-foreground/5 border border-foreground/10 rounded-2xl shadow-2xl p-6 relative z-10">
                 <div className="flex items-center justify-between mb-6 border-b border-foreground/10 pb-4">
                   <h3 className="font-bold text-foreground">Urgent Dispatch Log</h3>
                   <span className="text-brand font-bold text-xs bg-brand/10 px-2 py-1 rounded-full uppercase tracking-wider">High Priority</span>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="p-4 rounded-xl border border-electric-green/30 bg-electric-green/5">
                     <div className="flex justify-between items-start mb-2">
                       <div>
                         <p className="text-sm font-bold text-foreground">Facility 04 - Equipment Failure</p>
                         <p className="text-xs text-foreground/60">Dispatching Lead Engineer (J. Smith)</p>
                       </div>
                       <span className="text-xs font-bold text-electric-green bg-electric-green/10 px-2 py-1 rounded">Approved</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs text-foreground/80 mt-3 pt-3 border-t border-foreground/5">
                       <MapPin className="w-3 h-3 text-foreground/50" />
                       <span>HQ (ORD)</span>
                       <ArrowRight className="w-3 h-3 text-foreground/30 mx-1" />
                       <span>Plant 04 (MUC)</span>
                     </div>
                   </div>

                   <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/5 opacity-70">
                     <div className="flex justify-between items-start mb-2">
                       <div>
                         <p className="text-sm font-bold text-foreground">Q3 Supplier Audit</p>
                         <p className="text-xs text-foreground/60">Procurement Team (3 Pax)</p>
                       </div>
                       <span className="text-xs font-bold text-foreground/50 bg-foreground/10 px-2 py-1 rounded">Completed</span>
                     </div>
                   </div>
                 </div>

                 <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-between items-center text-sm">
                   <span className="text-foreground/50">Travelers currently in field:</span>
                   <span className="text-foreground font-bold flex items-center gap-2"><Globe className="w-4 h-4 text-brand" /> 12 Active Sites</span>
                 </div>
              </div>
              {/* Decorative elements behind the card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-navy/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Value Proposition Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6 text-foreground">Built for the demands of industry.</h2>
            <p className="text-lg text-foreground/70">
              When hardware goes down, you can't wait for business hours. We provide the tools and support to get your people where they need to be, instantly and safely.
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
                <div className="w-12 h-12 bg-navy/10 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                <h2 className="text-4xl font-black mb-6 text-foreground">From the boardroom to the factory floor.</h2>
                <p className="text-lg text-foreground/70">
                  Manage the diverse travel needs of your entire organization from a single platform. Create VIP policies for executives and robust, functional policies for site crews.
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
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy/20 to-brand/20 border border-foreground/10 overflow-hidden flex items-center justify-center">
                 <Truck className="w-32 h-32 text-navy opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
