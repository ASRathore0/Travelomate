import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Target, Heart } from 'lucide-react';

const positions = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Delhi / Noida / Remote",
    type: "Full-time",
    salary: "Competitive"
  },
  {
    title: "Lead Operations Manager",
    department: "Sports Logistics",
    location: "Mumbai",
    type: "Full-time",
    salary: "Competitive"
  },
  {
    title: "Customer Success Intelligence",
    department: "Client Services",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "Competitive"
  },
  {
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Delhi / Noida",
    type: "Full-time",
    salary: "Competitive"
  }
];

const values = [
  {
    icon: Zap,
    title: "Velocity",
    desc: "We move fast, solve hard problems, and iterate until it's perfect."
  },
  {
    icon: Target,
    title: "Precision",
    desc: "In travel, details are everything. We obsess over the small things."
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "We build for humans. We support each other and our clients 24/7."
  }
];

export default function Careers() {
  return (
    <div className="pt-20 pb-20 bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[120px] -mr-64 -mt-32 rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-black text-brand uppercase tracking-[0.2em] mb-8">
            Join the Revolution
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8 italic">
            Building the <br />
            <span className="text-brand not-italic">Future of Travel.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/60 leading-relaxed max-w-2xl">
            We're looking for extraordinary people to help us build the world's most intelligent travel infrastructure. 
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-foreground/5 py-24 mb-32 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center text-white">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">Open Positions</h2>
            <p className="text-foreground/50">Current opportunities to join our team of travel intelligence experts.</p>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-brand bg-brand/5 px-4 py-2 rounded-full border border-brand/10">
            {positions.length} Positions Available
          </div>
        </div>

        <div className="grid gap-6">
          {positions.map((pos, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-card-bg border border-border-subtle rounded-[32px] flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-brand/30 transition-all hover:shadow-xl hover:shadow-brand/5 cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold group-hover:text-brand transition-colors">{pos.title}</h3>
                  <span className="px-3 py-1 bg-foreground/5 text-[10px] font-black uppercase tracking-widest rounded-full text-foreground/40">
                    {pos.department}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/40 font-medium">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {pos.location}</span>
                  <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {pos.type}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {pos.salary}</span>
                </div>
              </div>
              <div className="w-full md:w-auto h-14 px-8 rounded-2xl bg-brand text-white font-black flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all">
                Apply Now <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-10 sm:p-20 bg-navy text-white rounded-[60px] text-center relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand blur-[120px] opacity-20 -mr-32 -mt-32 rounded-full" />
           <h2 className="text-4xl sm:text-6xl font-display font-bold mb-8 relative z-10 leading-tight">
             Don't see the perfect role? <br />
             <span className="italic opacity-50">Pitch yourself.</span>
           </h2>
           <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto relative z-10">
             We're always looking for geniuses, disruptors, and travel enthusiasts. Tell us how you can change the game.
           </p>
           <button className="px-12 py-5 bg-brand text-white font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all relative z-10">
             Contact Recruitment
           </button>
        </div>
      </section>
    </div>
  );
}
