import { motion } from 'motion/react';
import { Award, Zap, Users, Globe, ChevronRight } from 'lucide-react';

const milestones = [
  {
    year: "2010",
    title: "The Vision",
    desc: "Travelomate was founded in New Delhi with a simple goal: humanize corporate travel management.",
    icon: Zap
  },
  {
    year: "2014",
    title: "Sports Pivot",
    desc: "Secured our first major sports league contract, revolutionizing how team logistics are handled at scale.",
    icon: Award
  },
  {
    year: "2018",
    title: "Tech Revolution",
    desc: "Launched our proprietary AI-driven self-booking platform, blending tech with human expertise.",
    icon: Globe
  },
  {
    year: "2024",
    title: "Global Standards",
    desc: "Recognized as the gold standard for sports and corporate travel intelligence in the region.",
    icon: Users
  }
];

import anuragImg from '../assets/images/regenerated_image_1778242077975.png';

export default function Journey() {
  return (
    <div className="pt-32 pb-20 bg-background text-foreground overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-24 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] -mr-64 -mt-32 rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-black text-brand uppercase tracking-[0.2em] mb-8">
            Our Journey
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-8 italic">
            15 Years of <br />
            <span className="text-brand not-italic">Infrastructure Mastery.</span>
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl">
            From a boutique agency to the region's leading travel intelligence engine, our journey has been defined by one thing: absolute obsession with our clients' success.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-6 relative">
        {/* Central Line */}
        <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-brand to-transparent" />
        
        <div className="space-y-24">
          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative flex items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
               {/* Icon Node */}
               <div className="absolute left-[34px] md:left-1/2 -ml-5 w-10 h-10 rounded-full bg-brand flex items-center justify-center z-10 shadow-lg shadow-brand/40">
                  <m.icon className="w-5 h-5 text-white" />
               </div>

               {/* Content */}
               <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <span className="text-6xl font-display font-black text-brand/10 mb-2 block">{m.year}</span>
                  <h3 className="text-3xl font-bold mb-4">{m.title}</h3>
                  <p className="text-foreground/50 leading-relaxed max-w-sm ml-auto mr-0 md:mr-0 md:ml-auto">
                    {m.desc}
                  </p>
               </div>
               
               {/* Spacer for reverse layout */}
               <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden border border-border-subtle bg-foreground/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
              <img 
                src={anuragImg} 
                alt="Anurag Chandna" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                  <p className="text-white font-black text-2xl mb-1">Anurag Chandna</p>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Founder, Travelomate</p>
                </div>
              </div>
            </div>
            {/* Diploma badges */}
            <div className="absolute -top-6 -right-6 flex flex-col gap-3">
              {['Bcom', 'MBA', 'LLB'].map((degree) => (
                <div key={degree} className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white font-black text-xs border-4 border-background shadow-xl">
                  {degree}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-[10px] font-black text-brand uppercase tracking-[0.2em]">
              The Founder's Mission
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
              Fixing <span className="italic">Broken</span> Travel Systems.
            </h2>
            <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
              <p>
                Anurag Chandna founded Travelomate in 2010 with a legal and business background (MBA, LLB) and a singular focus: to modernize the archaic infrastructure of sports and corporate travel logistics.
              </p>
              <p>
                After seeing the friction points in moving large-scale professional sports teams across continents, he realized that tech alone wasn't the answer. The real solution required <span className="text-brand font-bold">Travel Intelligence</span> with a human-centric approach.
              </p>
              <p className="text-2xl font-display italic text-foreground border-l-4 border-brand pl-6">
                "Travel intelligence, Human at the core. That's the principle we built this company on, and it's what still guides every flight we book and every team we move today."
              </p>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-foreground/10">
              <div>
                <p className="text-3xl font-display font-black text-brand">15+</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-foreground/10" />
              <div>
                <p className="text-3xl font-display font-black text-brand">30k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Industry Connections</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="relative p-12 lg:p-24 bg-card-bg border border-border-subtle rounded-[64px] overflow-hidden group">
           <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-8">"We didn't just grow. We evolved."</h2>
              <p className="text-xl text-foreground/60 leading-relaxed mb-12">
                Every challenge sparked a new technology. Every team move refined our operations. Today, Travelomate is the accumulation of 15 years of learning, solving, and delivering.
              </p>
              <div className="w-20 h-1 bg-brand mx-auto mb-8" />
              <p className="text-xs uppercase font-black tracking-widest text-foreground/40">The Travelomate Legacy</p>
           </div>
        </div>
      </section>
    </div>
  );
}
