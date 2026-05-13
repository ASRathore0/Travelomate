import { motion } from 'motion/react';
import { LineChart, Receipt, ShieldCheck, ArrowRight, PieChart, Wallet, CreditCard, Lock, CheckCircle2 } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';

export default function FinanceTeams() {
  const { openDemo } = useDemo();

  const features = [
    {
      icon: <LineChart className="w-6 h-6 text-brand" />,
      title: "Real-time Spend Visibility",
      description: "Track travel spend as it happens. Consolidate all corporate travel expenses into a single, intuitive dashboard for instant insights."
    },
    {
      icon: <Receipt className="w-6 h-6 text-brand" />,
      title: "Automated Reconciliation",
      description: "Eliminate manual data entry. Receipts and booking data sync directly with your accounting software to automate the reconciliation process."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      title: "Dynamic Policy Controls",
      description: "Build flexible travel policies that adapt to different roles and departments. Prevent out-of-policy spending before the booking happens."
    },
    {
      icon: <PieChart className="w-6 h-6 text-brand" />,
      title: "Advanced Reporting & Analytics",
      description: "Generate custom reports in seconds. Analyze spending trends, identify savings opportunities, and optimize your travel program."
    }
  ];

  const benefits = [
    "Up to 30% reduction in total travel spend",
    "Save 15+ hours per month on expense reconciliation",
    "100% compliance with built-in policy guardrails",
    "Instant VAT and tax receipts collection",
    "Seamless integration with NetSuite, Xero, and QuickBooks",
    "Consolidated invoicing and customized billing cycles"
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                <Wallet className="w-4 h-4" />
                <span>For Finance Teams</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                Take complete <span className="text-brand">control</span> of travel spend.
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Automate expenses, enforce policy compliance, and gain real-time visibility into your corporate travel budget—all on one platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-brand text-white hover:bg-brand/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full relative"
            >
              <div className="bg-white dark:bg-foreground/5 border border-foreground/10 rounded-2xl shadow-2xl p-6 relative z-10">
                 <div className="flex items-center justify-between mb-8 border-b border-foreground/10 pb-4">
                   <h3 className="font-bold text-foreground">Quarterly Travel Spend</h3>
                   <span className="text-brand font-bold text-xl">$124,500.00</span>
                 </div>
                 <div className="space-y-4">
                   {[
                     { label: 'Flights', value: '45%', amount: '$56,025', color: 'bg-brand' },
                     { label: 'Hotels', value: '35%', amount: '$43,575', color: 'bg-electric-green' },
                     { label: 'Ground', value: '20%', amount: '$24,900', color: 'bg-navy' },
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-foreground/70 font-medium">{item.label}</span>
                         <span className="text-foreground font-bold">{item.amount}</span>
                       </div>
                       <div className="w-full bg-foreground/5 rounded-full h-2 overflow-hidden">
                         <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }} />
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="mt-8 pt-4 border-t border-foreground/10 flex justify-between items-center text-sm">
                   <span className="text-foreground/50">Next invoice due: <strong className="text-foreground">Oct 15, 2026</strong></span>
                   <span className="text-electric-green font-bold flex items-center gap-1"><Lock className="w-3 h-3" /> Secure</span>
                 </div>
              </div>
              {/* Decorative elements behind the card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-green/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Value Proposition */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6 text-foreground">End the month-end madness.</h2>
            <p className="text-lg text-foreground/70">
              Stop chasing down receipts and parsing through spreadsheets. Travelomate modernizes your financial operations with powerful automation.
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
                <h2 className="text-4xl font-black mb-6 text-foreground">Built for visibility and savings.</h2>
                <p className="text-lg text-foreground/70">
                  Uncover hidden optimization opportunities. Our financial tools give you the macro-view of organizational spend alongside micro-level transaction details.
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
                 <CreditCard className="w-32 h-32 text-navy opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

       
    </div>
  );
}
