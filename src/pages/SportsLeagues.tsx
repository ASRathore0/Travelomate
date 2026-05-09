import { motion } from 'motion/react';
import { Trophy, Zap, Globe, Users, ArrowRight } from 'lucide-react';
import { useDemo } from '../lib/DemoContext';

export default function SportsLeagues() {
  const { openDemo } = useDemo();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-green/10 border border-electric-green/20 text-[10px] lg:text-xs font-bold text-electric-green uppercase tracking-widest mb-6">
            <Trophy className="w-3 h-3" /> Professional Sports Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 text-foreground">
            Travel That Powers <br /><span className="text-electric-green italic">Performance.</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            From youth academies to global pro leagues, Travelomate handles the logistics so you can focus on the scoreboard.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Globe,
              title: "Global Logistics",
              desc: "Manage international tours, multi-city tournaments, and cross-border transport with ease."
            },
            {
              icon: Users,
              title: "Squad Management",
              desc: "Coordinate room blocks for 50+ people, dietary requirements, and equipment transport in one click."
            },
            {
              icon: Zap,
              title: "Instant Booking",
              desc: "Charter flights and ground transport tailored for team dimensions and specialized equipment."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-foreground/[0.03] border border-foreground/5 rounded-[32px] hover:border-electric-green/30 transition-all group"
            >
              <div className="w-12 h-12 bg-electric-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-green transition-colors">
                <feature.icon className="w-6 h-6 text-electric-green group-hover:text-navy transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-foreground/[0.02] rounded-[48px] p-8 lg:p-16 border border-foreground/5">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
              The Engine Behind <br />The Champions.
            </h2>
            <div className="space-y-6">
              {[
                "Bulk airline contract negotiations",
                "Dedicated 24/7 sports travel desk",
                "Automated per-diem distribution",
                "Advanced equipment logistics",
                "Real-time team tracking"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-electric-green/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 text-electric-green" />
                  </div>
                  <span className="font-bold text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={openDemo}
              className="mt-12 px-8 py-4 bg-electric-green text-navy rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-electric-green/20"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="aspect-video bg-navy-light rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl group/preview">
             {/* Dashboard UI Mockup */}
             <div className="absolute inset-0 flex flex-col p-4 bg-[#0a0a0b]">
                {/* Sidebar / Topbar Simulation */}
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-electric-green/20 flex items-center justify-center">
                         <Trophy className="w-4 h-4 text-electric-green" />
                      </div>
                      <div className="h-4 w-32 bg-white/10 rounded-full" />
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/5" />
                      <div className="w-20 h-6 rounded-lg bg-electric-green/20 border border-electric-green/30 px-2 flex items-center gap-1">
                         <div className="w-2 h-2 rounded-full bg-electric-green animate-pulse" />
                         <div className="h-1.5 w-12 bg-electric-green/40 rounded-full" />
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-12 gap-4 flex-grow">
                   {/* Left side: Itinerary/Map concept */}
                   <div className="col-span-12 bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                         <div className="flex items-center gap-2">
                            <div className="h-3 w-40 bg-white/10 rounded-full" />
                            <div className="h-3 w-12 bg-electric-green/20 rounded-full" />
                         </div>
                         <div className="h-3 w-20 bg-white/5 rounded-full" />
                      </div>
                      
                      <div className="flex-grow flex gap-4">
                         {[1, 2, 3].map(i => (
                            <div key={i} className="flex-grow bg-white/[0.02] border border-white/5 rounded-lg p-3 flex flex-col justify-between">
                               <div>
                                  <div className="h-2 w-16 bg-white/10 rounded-full mb-2" />
                                  <div className="h-4 w-24 bg-white/5 rounded-full" />
                               </div>
                               <div className="h-1.5 w-full bg-electric-green/10 rounded-full overflow-hidden text-[8px] flex items-center">
                                  <div className="h-full bg-electric-green w-2/3" />
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>

             {/* Overlay Label */}
             <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/80 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500">
                <div className="text-white">
                   <p className="text-electric-green font-bold text-sm mb-1 uppercase tracking-widest">Team Command</p>
                   <h4 className="text-2xl font-display font-bold">Synchronized Squad Logistics</h4>
                </div>
             </div>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">The Platform in Action</h2>
            <p className="text-foreground/60">Take a closer look at how we manage the world's most complex sport movements.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dynamic Rooming Lists",
                description: "Auto-generate hotel allocations based on squad hierarchy, staff pairings, and medical needs. Real-time updates sync directly to hotel PMS.",
                visual: (
                  <div className="space-y-3">
                    {[
                      { name: "John Smith (CB)", room: "402", status: "Checked In" },
                      { name: "Mike Ross (GK)", room: "405", status: "Pending" },
                      { name: "Technical Staff", room: "408", status: "Checked In" }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-electric-green/20 flex items-center justify-center font-bold text-electric-green">S</div>
                          <span className="font-bold text-sm">{row.name}</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span className="text-xs opacity-40">Room {row.room}</span>
                          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${row.status === 'Checked In' ? 'bg-electric-green/10 text-electric-green' : 'bg-white/10 text-white/40'}`}>
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              },
              {
                title: "Charter Intelligence",
                description: "Proprietary algorithm optimizes flight charters for equipment weight, departure flexibility, and team recovery windows.",
                visual: (
                  <div className="h-full flex flex-col justify-center">
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden mb-8">
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 2 }}
                        className="absolute h-full bg-electric-green" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-[10px] uppercase opacity-40 mb-1">Payload Efficiency</p>
                        <p className="text-2xl font-bold text-electric-green">94.2%</p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-[10px] uppercase opacity-40 mb-1">Fuel Savings</p>
                        <p className="text-2xl font-bold text-electric-green">12.5%</p>
                      </div>
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
