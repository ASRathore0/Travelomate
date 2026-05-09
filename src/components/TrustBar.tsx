import { motion } from 'motion/react';

const partners = [
  { name: "Bengaluru Bulls", logo: "/src/assets/images/artifacts/Bulls.png " },
  { name: "Premier Volleyball League", logo: "/src/assets/images/artifacts/pvl-logo.png" },
  { name: "Hockey India League", logo: "/src/assets/images/artifacts/hil_logo_2.webp" },
  { name: "Burman Sports", logo: "/src/assets/images/artifacts/burman_sports_logo.jpg " },
  { name: "Narne NETWORK" },
  { name: "4D Entertainers", logo: "/src/assets/images/artifacts/4D-logo-1024x1024.png" },
  { name: "Kosmik Asset Creator" },
  { name: "Stellar", logo: "/src/assets/images/artifacts/stellar-logo.png" },
  { name: "Golden Shelters Pvt Ltd" },
  { name: "Mangul", logo: "/src/assets/images/artifacts/logo.png" },
  { name: "The Right Shot" },
  { name: "SSS", logo: "/src/assets/images/artifacts/sss-logo.jpg" },
];

export default function TrustBar() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-card-bg/30 border-y border-border-subtle/50 dark:bg-background">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-foreground/[0.03] via-transparent to-transparent pointer-events-none dark:from-foreground/[0.01]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 flex flex-col items-center text-center gap-4">
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
                <div className="relative group/logo w-28 md:w-36 lg:w-44 flex justify-center p-4 rounded-2xl hover:bg-foreground/[0.03] dark:hover:bg-foreground/[0.05] transition-colors duration-300">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 md:h-12 lg:h-14 w-auto max-w-full object-contain transition-all duration-300 opacity-80 dark:opacity-90 group-hover/logo:opacity-100 group-hover/logo:scale-105 drop-shadow-xs dark:drop-shadow-none dark:contrast-[1.15]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <span className="text-lg md:text-xl font-display font-bold text-foreground/40 dark:text-foreground/50 tracking-tight text-center cursor-default select-none transition-all duration-300 hover:text-brand px-4 py-2">
                  {partner.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
