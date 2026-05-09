import { motion } from 'motion/react';
import { Award, Shield, DollarSign, Luggage, UserRound } from 'lucide-react';

const roles = [
  { icon: Award, title: "Team Managers", desc: "Coordinate group travel with ease. Focus on the game, not the gate." },
  { icon: Shield, title: "Travel Admins", desc: "Set granular policies, manage bulk approvals, and ensure safety." },
  { icon: DollarSign, title: "Finance Teams", desc: "Track, reconcile, and report spend automatically with ERP sync." },
  { icon: Luggage, title: "Travelers", desc: "Book on the go, earn loyalty points, and focus on the mission." },
  { icon: UserRound, title: "Athletes & Staff", desc: "Experience seamless logistics so you can peak at the right time." }
];

export default function RoleSection() {
  return (
    <section id="about" className="py-4 lg:py-6 bg-background text-foreground diagonal-clip transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-4">
            Built for Every <span className="text-brand">Role.</span>
          </h2>
          <p className="text-lg lg:text-xl opacity-60 font-medium">Empowering the journey for every member of your organization.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-foreground/[0.03] border border-foreground/5 p-6 lg:p-8 rounded-3xl hover:bg-background hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-foreground/5 group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                <role.icon className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">{role.title}</h4>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {role.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
