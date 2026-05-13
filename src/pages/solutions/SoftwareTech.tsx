import { motion } from 'motion/react';
import { Terminal, Zap, MessageSquare, Shield, Rocket, ArrowRight, CheckCircle2, Cloud, Smartphone, Fingerprint } from 'lucide-react';
import { useDemo } from '@/src/lib/DemoContext';

export default function SoftwareTech() {
  const { openDemo } = useDemo();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-green/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-green/10 text-electric-green text-sm font-bold mb-6">
                <Terminal className="w-4 h-4" />
                <span>For Software & Tech</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 text-foreground tracking-tight leading-tight">
                Corporate travel that doesn't feel like <span className="text-electric-green">legacy software.</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0">
                Move fast without breaking the travel budget. Beautiful UX, seamless Slack integrations, automated SSO provisioning, and tools built for remote-first teams.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={openDemo}
                  className="px-8 py-4 rounded-full font-bold bg-foreground text-background hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-xl shadow-foreground/10"
                >
                  See It In Action <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="relative max-w-md mx-auto lg:ml-auto">
                {/* Decorative background blurs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-green/20 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/10 blur-3xl rounded-full pointer-events-none" />
                
                {/* Mockup 1: Slack/Teams Style Approval */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white dark:bg-foreground/5 border border-foreground/10 rounded-2xl shadow-xl p-5 relative z-10 mb-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded bg-brand/20 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Travelomate Bot <span className="text-[10px] bg-foreground/10 px-1.5 py-0.5 rounded text-foreground/60 ml-1">APP</span></p>
                      <p className="text-xs text-foreground/50">12:43 PM</p>
                    </div>
                  </div>
                  <div className="pl-11">
                    <p className="text-sm text-foreground/80 mb-3">
                      <strong>Alex Developer</strong> requested a flight to <strong>San Francisco</strong> for ReactConf 2026.
                    </p>
                    <div className="bg-foreground/5 rounded-lg p-3 mb-3 border border-foreground/5">
                      <p className="text-sm font-medium text-foreground">SFO ✈️ JFK • Oct 12 - Oct 15</p>
                      <p className="text-xs text-foreground/60 mt-1">Price: $450 (Within Engineering Policy)</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-1.5 bg-electric-green text-navy text-xs font-bold rounded-lg hover:brightness-110 transition-all">Approve</button>
                      <button className="px-4 py-1.5 bg-foreground/10 text-foreground text-xs font-bold rounded-lg hover:bg-foreground/20 transition-all">Deny</button>
                    </div>
                  </div>
                </motion.div>

                {/* Mockup 2: Automated Provisioning */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white dark:bg-foreground/5 border border-foreground/10 rounded-2xl shadow-xl p-5 relative z-10 sm:-ml-12 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Fingerprint className="w-5 h-5 text-electric-green" />
                      <div>
                        <p className="text-sm font-bold text-foreground">Okta / SCIM Sync</p>
                        <p className="text-xs text-foreground/60">New hire profile automagically created.</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-electric-green" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Bento Grid Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6 text-foreground">Plays nice with your tech stack.</h2>
            <p className="text-lg text-foreground/70">
              Tech teams expect tools that work seamlessly together. We built our platform API-first to plug right into the software you already use every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Large Card 1 */}
            <div className="md:col-span-2 bg-foreground/5 border border-foreground/10 rounded-3xl p-8 relative overflow-hidden group hover:border-electric-green/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Cloud className="w-32 h-32 text-electric-green" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end max-w-md">
                <div className="w-12 h-12 bg-white dark:bg-black rounded-xl flex items-center justify-center mb-4 shadow-sm border border-foreground/10">
                  <Zap className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Deep Integrations</h3>
                <p className="text-foreground/70">
                  Connect natively with Slack, Microsoft Teams, Okta, BambooHR, Expensify, and more. Set it up in minutes, not months.
                </p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand/30 transition-colors">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield className="w-40 h-40 text-brand" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-foreground">SSO & SCIM</h3>
                <p className="text-sm text-foreground/70">
                  Automate user provisioning. When an employee leaves, their travel access is instantly revoked.
                </p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8 relative overflow-hidden group hover:border-navy/30 transition-colors">
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-foreground">Dev-Friendly APIs</h3>
                <p className="text-sm text-foreground/70">
                  Pull your travel data into your own BI tools and data warehouses directly via our robust GraphQL endpoints.
                </p>
              </div>
            </div>

            {/* Large Card 2 */}
            <div className="md:col-span-2 bg-foreground/5 border border-foreground/10 rounded-3xl p-8 relative overflow-hidden group hover:border-electric-green/30 transition-colors">
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-24 h-24 text-foreground text-brand" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end max-w-md">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Consumer-Grade UX</h3>
                <p className="text-foreground/70">
                  Stop forcing your engineers and designers to use clunky booking tools from 2005. Give them a sleek mobile and web app they'll actually enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus: Remote Teams */}
      <section className="py-24 px-6 bg-foreground/5 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6 text-foreground">The operating system for remote-first teams.</h2>
                <p className="text-lg text-foreground/70">
                  As tech teams stay distributed, bringing people together in real life is more important than ever. We make company offsites and team retreats effortless.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Self-serve group booking links for retreating teams",
                  "Automated budget caps (e.g. '$500 flight allowance')",
                  "Consolidated centralized billing—no employee out-of-pocket",
                  "24/7 Slack support when flights get delayed"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-electric-green shrink-0" />
                    <span className="text-foreground/80 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="w-full max-w-md aspect-square bg-white dark:bg-black rounded-full border border-foreground/10 shadow-2xl flex items-center justify-center relative">
                <div className="absolute inset-4 rounded-full border border-dashed border-foreground/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-dashed border-foreground/10 animate-[spin_40s_linear_infinite_reverse]" />
                <Rocket className="w-24 h-24 text-electric-green" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
