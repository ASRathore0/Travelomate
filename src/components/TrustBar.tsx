import { motion } from 'motion/react';
import bullsLogo from '../assets/images/artifacts/Bulls.png';
import pvlLogo from '../assets/images/artifacts/prime volleyball-Photoroom.png';
import hilLogo from '../assets/images/artifacts/hil_logo_2.webp';
import burmanLogo from '../assets/images/artifacts/burman_sports_logo.jpg';
import fourDLogo from '../assets/images/artifacts/4D-logo-1024x1024.png';
import stellarLogo from '../assets/images/artifacts/stellar-logo.png';
import mangulLogo from '../assets/images/artifacts/logo.png';
import sssLogo from '../assets/images/artifacts/sss-logo.jpg';
import VV from '../assets/images/artifacts/VV-Photoroom.png';
import Media from '../assets/images/artifacts/MediaNews4U.png';


const partners = [
  { name: "Bengaluru Bulls", logo: bullsLogo },
  { name: "Premier Volleyball League", logo: pvlLogo },
  { name: "Hockey India League", logo: hilLogo },
  { name: "Burman Sports", logo: burmanLogo },
  { name: "Narne NETWORK" },
  { name: "4D Entertainers", logo: fourDLogo },
  { name: "VV", logo: VV },
  { name: "Kosmik Asset Creator" },
  { name: "Stellar", logo: stellarLogo },
  { name: "Golden Shelters Pvt Ltd" },
  { name: "Mangul", logo: mangulLogo },
  { name: "The Right Shot" },
  { name: "SSS", logo: sssLogo },
  { name: "Media", logo: Media  },
];

export default function TrustBar() {
  return (
    <section className="py-8 lg:py-12 relative overflow-hidden bg-card-bg/30 border-y border-border-subtle/50 dark:bg-background">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-foreground/[0.03] via-transparent to-transparent pointer-events-none dark:from-foreground/[0.01]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-8 flex flex-col items-center text-center gap-4">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 dark:text-red-500"
        >
          Our Valued Customers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-foreground"
        >
          Trusted by fortune 500 companies
        </motion.h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12 py-4">
          {/* List of all partners */}
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex-shrink-0 flex items-center justify-center"
            >
              {partner.logo ? (
                <div className="relative group/logo w-32 md:w-40 h-16 md:h-20 flex items-center justify-center p-2 transition-colors duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full w-auto object-contain transition-all duration-300 opacity-80 dark:opacity-90 group-hover/logo:opacity-100 group-hover/logo:scale-105 drop-shadow-xs dark:drop-shadow-none mix-blend-multiply dark:mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="relative group/text w-32 md:w-40 h-16 md:h-20 flex items-center justify-center p-2 transition-colors duration-300">
                  <span className="text-sm font-display font-bold text-foreground/50 dark:text-foreground/60 tracking-tight text-center leading-tight cursor-default select-none transition-all duration-300 group-hover/text:text-brand group-hover/text:scale-105">
                    {partner.name}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
