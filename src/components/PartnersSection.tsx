import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import p1 from '../assets/images/regenerated_image_1778243349332.png';
import p2 from '../assets/images/regenerated_image_1778243350629.png';
import p3 from '../assets/images/regenerated_image_1778243342183.png';
import p4 from '../assets/images/regenerated_image_1778243347320.png';
import p5 from '../assets/images/regenerated_image_1778243348774.png';
import p6 from '../assets/images/regenerated_image_1778243349891.png';
import p7 from '../assets/images/regenerated_image_1778243343945.png';
import p8 from '../assets/images/regenerated_image_1778243345831.png';
import p9 from '../assets/images/regenerated_image_1778243351381.png';

const partners = [
  { name: " ", logo: "https://atoai.org/wp-content/uploads/2021/04/ATOAI-Logo.png" },
  { name: " ", logo: p1 },
  { name: " ", logo: p2 },
  { name: " ", logo: p3 },
  { name: " ", logo: p4 },
  { name: " ", logo: p5 },
  { name: " ", logo: p6 },
  { name: " ", logo: p7 },
  { name: " ", logo: p8 },
  { name: " ", logo: p9 }
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 border-y border-border-subtle bg-background relative overflow-hidden transition-colors duration-500"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center justify-center gap-6 relative z-10">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-brand/20" />
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40 text-center px-6 py-2 border border-border-subtle rounded-full bg-background/50 backdrop-blur-sm shadow-sm whitespace-nowrap">
          Our Association Partners
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-brand/20" />
      </div>

      <div className="relative group overflow-hidden z-10">
        <div className="flex animate-scroll items-center gap-8 md:gap-16 w-max py-4">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(var(--foreground-rgb), 0.05)",
                  borderColor: "rgba(var(--brand-rgb), 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex-shrink-0 flex items-center gap-4 md:gap-6 px-6 py-3 md:px-8 md:py-4 bg-foreground/[0.02] rounded-2xl border border-transparent transition-all group cursor-pointer"
              >
               <img 
                 src={p.logo} 
                 alt={p.name} 
                 className="h-10 md:h-12 lg:h-16 w-auto object-contain transition-all duration-500" 
                 referrerPolicy="no-referrer"
               />
               <span className="text-base md:text-lg lg:text-xl font-display font-black text-foreground/80 tracking-tighter group-hover:text-brand transition-colors whitespace-nowrap">
                 {p.name}
               </span>
              </motion.div>
            ))}
        </div>
        
        {/* Masking */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
