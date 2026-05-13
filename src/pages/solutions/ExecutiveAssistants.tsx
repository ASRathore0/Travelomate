import { motion } from 'motion/react';
import { Star, UserCheck, CalendarRange, Crown, ArrowRight, CheckCircle2, UserCircle, SwitchCamera } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';

export default function ExecutiveAssistants() {
  const { openDemo } = useDemo();

  const features = [
    {
      icon: <SwitchCamera className="w-6 h-6 text-brand" />,
      title: "Seamless Delegate Booking",
      description: "Easily toggle between executive profiles to book, modify, and manage trips on their behalf without ever logging in and out."
    },
    {
      icon: <Crown className="w-6 h-6 text-brand" />,
      title: "VIP Concierge Support",
      description: "Bypass standard queues. Get your executives white-glove, 24/7 dedicated human support for immediate, last-minute changes."
    },
    {
      icon: <Star className="w-6 h-6 text-brand" />,
      title: "Rich Traveler Profiles",
      description: "Securely store Known Traveler Numbers, passports, dietary restrictions, seating preferences, and loyalty program details in one place."
    },
    {
      icon: <CalendarRange className="w-6 h-6 text-brand" />,
      title: "Smart Itinerary Sync",
      description: "Stop manually typing out flight times. Automatically push flawless, real-time updated itineraries directly to Outlook or Google Calendars."
    }
  ];

  const benefits = [
    "Manage unlimited executive profiles from a single dashboard",
    "Never miss a loyalty point or status upgrade",
    "VIP priority phone lines for immediate emergency rebooking",
    "No more chasing receipts—expenses are automated",
    "Save 10+ hours per month on itinerary formatting and emails",
    "Easily coordinate complex multi-city, multi-passenger trips"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-35 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-navy/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                <UserCheck className="w-4 h-4" />
                <span>For Executive Assistants</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                Make executive travel <span className="text-brand">effortless.</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Manage complex itineraries, apply loyalty perks automatically, and handle last-minute changes with a tool built for elite delegate booking.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-brand text-white hover:bg-brand/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Simplify Your Workflow <ArrowRight className="w-4 h-4" />
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
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs">SC</div>
                     <div>
                       <p className="text-sm font-bold text-foreground">Sarah Connor</p>
                       <p className="text-xs text-brand font-medium flex items-center gap-1">Booking as Delegate <SwitchCamera className="w-3 h-3" /></p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="p-4 rounded-xl border border-electric-green/30 bg-electric-green/5">
                     <p className="text-xs font-bold text-electric-green uppercase tracking-wider mb-2 flex items-center gap-1"><Star className="w-3 h-3" /> Preferences Auto-Applied</p>
                     <div className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-foreground/70">Frequent Flyer</span>
                         <span className="text-foreground font-bold">Delta Diamond</span>
                       </div>
                       <div className="flex justify-between text-sm">
                         <span className="text-foreground/70">Seating</span>
                         <span className="text-foreground font-bold">Window (Target 2A)</span>
                       </div>
                       <div className="flex justify-between text-sm">
                         <span className="text-foreground/70">TSA PreCheck</span>
                         <span className="text-foreground font-bold">Applied ending '882'</span>
                       </div>
                     </div>
                   </div>

                   <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/5 opacity-90">
                     <div className="flex justify-between items-start">
                       <div>
                         <p className="text-sm font-bold text-foreground">JFK ✈️ LHR (First Class)</p>
                         <p className="text-xs text-foreground/60">Departs in 48 hours</p>
                       </div>
                       <button className="text-[10px] font-bold text-background bg-foreground px-2 py-1 rounded">Modify</button>
                     </div>
                   </div>
                 </div>

                 <div className="mt-6 pt-4 border-t border-foreground/10 flex justify-between items-center text-sm">
                   <span className="text-foreground/50">Calendar Sync:</span>
                   <span className="text-foreground font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-electric-green" /> Automatically Updated</span>
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
            <h2 className="text-4xl font-black mb-6 text-foreground">Gain back hours of your day.</h2>
            <p className="text-lg text-foreground/70">
              No more copying and pasting flight numbers into emails or manually tracking down receipts for expense reports. We handle the busywork so you can focus on the VIPs.
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
                <h2 className="text-4xl font-black mb-6 text-foreground">Flawless execution, every time.</h2>
                <p className="text-lg text-foreground/70">
                  When executives travel, the margin for error is zero. Give them an elevated experience powered by smart automation and elite human concierge teams.
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
                 <Crown className="w-32 h-32 text-navy opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
