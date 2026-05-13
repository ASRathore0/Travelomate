import { motion } from 'motion/react';
import { Users, ShieldAlert, HeartHandshake, Map, ArrowRight, UserPlus, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';

export default function HumanResources() {
  const { openDemo } = useDemo();

  const features = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand" />,
      title: "Active Duty of Care",
      description: "Keep your people safe. Track global travel risks and instantly locate or contact employees during emergencies with our live traveler dashboard."
    },
    {
      icon: <UserPlus className="w-6 h-6 text-brand" />,
      title: "Seamless Onboarding",
      description: "Automate travel profile creation by integrating with your HRIS. Make candidate and new-hire travel booking completely frictionless."
    },
    {
      icon: <Map className="w-6 h-6 text-brand" />,
      title: "Team Offsites & Retreats",
      description: "Coordinate complex group travel easily. Bring distributed and remote teams together without the logistical nightmare of manual flight routing."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand" />,
      title: "Employee Satisfaction",
      description: "Give your team a consumer-grade booking tool they actually want to use, backed by 24/7 proactive human support for total peace of mind."
    }
  ];

  const benefits = [
    "Real-time traveler tracking and global risk alerts",
    "99% employee booking satisfaction rate",
    "Automated profile creation via HRIS integration",
    "Unified billing for interview candidates and new hires",
    "24/7 proactive human support for every traveler",
    "Company culture boosts through streamlined offsites"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                <Users className="w-4 h-4" />
                <span>For Human Resources</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                Empower and <span className="text-brand">protect</span> your traveling teams.
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Simplify employee onboarding, relocation, and team offsite travel while making duty of care your top priority.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-brand text-white hover:bg-brand/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
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
                   <h3 className="font-bold text-foreground">Traveler Safety Dashboard</h3>
                   <span className="text-electric-green font-bold text-sm bg-electric-green/10 px-2 py-1 rounded-full">System Normal</span>
                 </div>
                 <div className="space-y-4">
                   {[
                     { label: 'Active Travelers', value: '100%', amount: '42', color: 'bg-brand' },
                     { label: 'Risk Alerts', value: '0%', amount: '0', color: 'bg-navy' },
                     { label: 'Upcoming Trips', value: '100%', amount: '18', color: 'bg-electric-green' },
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-foreground/70 font-medium">{item.label}</span>
                         <span className="text-foreground font-bold">{item.amount}</span>
                       </div>
                       <div className="w-full bg-foreground/5 rounded-full h-2 overflow-hidden">
                         <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }} />
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="mt-8 pt-4 border-t border-foreground/10 flex justify-between items-center text-sm">
                   <span className="text-foreground/50">Last synced: <strong className="text-foreground">Just now</strong></span>
                   <span className="text-brand font-bold flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Duty of Care Active</span>
                 </div>
              </div>
              {/* Decorative elements behind the card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-green/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
 

      {/* Value Proposition */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6 text-foreground">Travel experiences people love.</h2>
            <p className="text-lg text-foreground/70">
              Eliminate travel friction. Happy employees mean better retention, and automated policies mean less administrative burden for your HR team.
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
                <h2 className="text-4xl font-black mb-6 text-foreground">Built for safety and culture.</h2>
                <p className="text-lg text-foreground/70">
                  Whether moving executives across the globe or flying in candidates for an interview panel, provide an amazing end-to-end experience.
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
                 <Users className="w-32 h-32 text-navy opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
