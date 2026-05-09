import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import p1 from '../assets/images/regenerated_image_1778243349332.png';
import p2 from '../assets/images/regenerated_image_1778243350629.png';
import p3 from '../assets/images/regenerated_image_1778243342183.png';
import p4 from '../assets/images/regenerated_image_1778243347320.png';

const partners = [
  { name: " ", logo: p1 },
  { name: " ", logo: p2 },
  { name: " ", logo: p3 },
  { name: " ", logo: p4 }
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
      className="py-12 lg:py-16 border-y border-border-subtle bg-background relative overflow-hidden transition-colors duration-500"
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

      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col items-center text-center gap-2 relative z-10">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
          Our Association Partners
        </p>
        <div className="w-12 h-0.5 bg-brand/30 rounded-full mt-2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 py-4">
            {partners.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ 
                  scale: 1.05
                }}
                className="flex items-center justify-center h-16 md:h-20 w-28 md:w-36 bg-transparent transition-all group cursor-pointer opacity-80 hover:opacity-100"
              >
               <img 
                 src={p.logo} 
                 alt={p.name || 'Partner'} 
                 className="max-h-12 md:max-h-14 w-auto object-contain transition-all duration-300 drop-shadow-xs dark:drop-shadow-none dark:contrast-[1.15]" 
                 referrerPolicy="no-referrer"
               />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
