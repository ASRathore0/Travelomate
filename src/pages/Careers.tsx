import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Target, Heart } from 'lucide-react';

const positions = [
  {
    title: "Accountant",
    department: "Finance",
    location: "Greater Noida",
    type: "Full-time",
    salary: "Competitive",
    summary: "Own financial accuracy and reporting that keeps the travel engine running smoothly.",
    responsibilities: [
      "Maintain ledgers, reconciliations, and monthly close timelines.",
      "Prepare management reports for leadership reviews.",
      "Partner with operations to track costs and improve margins."
    ],
    requirements: [
      "2+ years in accounting or finance operations.",
      "Strong knowledge of GST, compliance, and audit readiness.",
      "Comfortable with Excel, ERPs, and deadline-driven work."
    ]
  },
  {
    title: "Sales",
    department: "Sales",
    location: "Greater Noida",
    type: "Full-time",
    salary: "Competitive",
    summary: "Drive new business and expand travel programs for fast-growing clients.",
    responsibilities: [
      "Own the full sales cycle from prospecting to close.",
      "Build strong C-level relationships and long-term accounts.",
      "Collaborate with product to shape enterprise offerings."
    ],
    requirements: [
      "2+ years of B2B sales or account growth experience.",
      "Strong negotiation skills and pipeline discipline.",
      "Experience selling travel, SaaS, or services is a plus."
    ]
  },
  {
    title: "Account Manager",
    department: "Client Services",
    location: "Greater Noida",
    type: "Full-time",
    salary: "Competitive",
    summary: "Elevate client experience and retention across corporate travel programs.",
    responsibilities: [
      "Own client success metrics and satisfaction outcomes.",
      "Coordinate with ops to deliver seamless travel support.",
      "Identify upsell opportunities and grow account value."
    ],
    requirements: [
      "2+ years in client services or account management.",
      "Excellent communication and stakeholder management.",
      "Experience in travel or hospitality is a plus."
    ]
  },
  {
    title: "Travel Operation",
    department: "Operations",
    location: "Greater Noida",
    type: "Full-time",
    salary: "Competitive",
    summary: "Run day-to-day travel operations with precision and speed.",
    responsibilities: [
      "Manage bookings, changes, and escalations with accuracy.",
      "Coordinate with airlines, hotels, and vendors.",
      "Maintain SLAs and ensure 24/7 travel support quality."
    ],
    requirements: [
      "1-3 years in travel operations or ticketing.",
      "Strong problem-solving under time pressure.",
      "Knowledge of GDS tools and travel policies."
    ]
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedRole = useMemo(() => positions[selectedIndex], [selectedIndex]);

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

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="grid gap-6">
            {positions.map((pos, i) => (
              <motion.button
                key={i}
                type="button"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedIndex(i)}
                className={`group p-7 sm:p-8 bg-card-bg border rounded-[28px] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:shadow-lg hover:shadow-brand/5 text-left ${
                  selectedIndex === i
                    ? 'border-brand/50 shadow-lg shadow-brand/10'
                    : 'border-border-subtle hover:border-brand/30'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-2xl font-bold transition-colors ${selectedIndex === i ? 'text-brand' : 'group-hover:text-brand'}`}>
                      {pos.title}
                    </h3>
                    <span className="px-3 py-1 bg-foreground/5 text-[10px] font-black uppercase tracking-widest rounded-full text-foreground/40">
                      {pos.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/50 font-medium">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {pos.location}</span>
                    <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {pos.type}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {pos.salary}</span>
                  </div>
                </div>
                <div className={`w-full md:w-auto h-11 px-6 rounded-xl font-black text-sm flex items-center justify-center gap-3 transition-all ${
                  selectedIndex === i
                    ? 'bg-brand text-white'
                    : 'bg-transparent text-brand border border-brand/30 group-hover:border-brand/50'
                }`}>
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            ))}
          </div>

          {selectedRole && (
            <motion.div
              key={selectedRole.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24 p-9 sm:p-10 bg-card-bg border border-border-subtle rounded-[32px] shadow-xl shadow-black/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">Role Details</p>
                  <h3 className="text-3xl font-display font-bold">{selectedRole.title}</h3>
                </div>
              </div>

              <div className="grid gap-3 text-sm text-foreground/60 font-medium mb-6">
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> {selectedRole.location}</div>
                <div className="flex items-center gap-3"><Briefcase className="w-4 h-4" /> {selectedRole.department} · {selectedRole.type}</div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4" /> {selectedRole.salary}</div>
              </div>

              <p className="text-sm text-foreground/60 mb-8">{selectedRole.summary}</p>

              <div className="space-y-8 text-foreground/70">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Responsibilities</h4>
                  <ul className="space-y-2 text-sm list-disc list-inside text-foreground/65">
                    {selectedRole.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-foreground/10">
                  <h4 className="text-lg font-bold text-foreground mb-3">Requirements</h4>
                  <ul className="space-y-2 text-sm list-disc list-inside text-foreground/65">
                    {selectedRole.requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={`mailto:hr@travelomate.in?subject=Application%20for%20${encodeURIComponent(selectedRole.title)}`}
                className="mt-10 w-full h-12 rounded-2xl bg-brand text-white font-black text-base flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all"
              >
                Get Hired
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          )}
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
           <a
             href="mailto:hr@travelomate.in?subject=Career%20Inquiry%20-%20Travelomate"
             className="px-12 py-5 bg-brand text-white font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all relative z-10 inline-flex items-center justify-center"
           >
             Get Hired
           </a>
        </div>
      </section>
    </div>
  );
}
