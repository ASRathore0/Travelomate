import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  MapPin, 
  PieChart, 
  ArrowRight,
  HardHat,
  Truck,
  CalendarDays,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustBar from '../../components/TrustBar';
import CTABanner from '../../components/CTABanner';

export default function Construction() {
  const features = [
    {
      icon: Users,
      title: "Crew & Group Bookings",
      description: "Easily book multiple rooms for large field crews simultaneously, accommodating different shift schedules and rotations."
    },
    {
      icon: Building2,
      title: "Extended Stay Mastery",
      description: "Access specialized inventory for long-term projects, including corporate housing and aparthotels with kitchenette facilities." /* Lines 10-25 omitted */
    },
    {
      icon: PieChart,
      title: "Project-Based Billing",
      description: "Tag every booking to specific job sites or project codes, automating the reconciliation process for accounting teams."
    },
    {
      icon: MapPin,
      title: "Proximity Search",
      description: "Find lodging precisely mapped to remote job sites, minimizing daily commute times and transportation costs for crews."
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium mb-6">
              <HardHat className="w-4 h-4" />
              <span>For Construction & Engineering</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
              Built for the <span className="text-brand">Field.</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Streamline crew lodging, track project-specific travel budgets, and manage extended stays effortlessly with a platform engineered for the demands of the construction industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/demo" 
                className="bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand/90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Book Jobsite Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent blur-3xl -z-10 rounded-full" />
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs font-medium text-muted-foreground mr-8">Project Hub: Site Alpha</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-bold">Project: Northside Development</h3>
                    <p className="text-sm text-muted-foreground">Code: PRJ-2024-88A</p>
                  </div>
                  <div className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold font-mono">
                    ACTIVE
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Active Crew on Site</div>
                    <div className="text-2xl font-black">24<span className="text-sm font-normal text-muted-foreground ml-1">Personnel</span></div>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Total Lodging (MTD)</div>
                    <div className="text-2xl font-black">$18.4k</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-bold text-foreground">Current Lodging Roster</div>
                  {[
                    { name: "Foreman Team A", hotel: "Extended Stay America - North", status: "Checked In" },
                    { name: "Electricians Sub", hotel: "Residence Inn by Marriott", status: "Check-in Tomorrow", alert: true }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-border bg-background">
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-brand" />
                        <div>
                          <div className="text-sm font-medium">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.hotel}</div>
                        </div>
                      </div>
                      {item.alert ? (
                         <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black mb-4">Foundation-Level Visibility</h2>
          <p className="text-lg text-muted-foreground">
            Eliminate the chaos of manual spreadsheets and disparate hotel folios. Centralize your sprawling project travel.
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
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-muted py-24">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Built for constant change.</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Flexible Modifications",
                    desc: "Weather delays? Project extensions? Modify extended stays for entire crews with just a few clicks.",
                    icon: CalendarDays
                  },
                  {
                    title: "No More Receipt Chasing",
                    desc: "Centralized billing means your crews don't need corporate cards or personal cash for lodging. We handle the direct billing with the properties.",
                    icon: Truck
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full translate-x-10 -translate-y-10" />
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-brand" />
                    Extended Stay Request
                </h3>
                
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Site Location</label>
                        <div className="w-full bg-muted border border-border rounded-lg p-3 text-sm flex items-center justify-between">
                            <span>Omaha Data Center Project</span>
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Duration</label>
                            <div className="w-full bg-muted border border-border rounded-lg p-3 text-sm">
                                45 Nights
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Room Type</label>
                            <div className="w-full bg-muted border border-border rounded-lg p-3 text-sm">
                                Twin (Kitchenette)
                            </div>
                        </div>
                    </div>
                     <button className="w-full bg-brand text-white font-bold py-3 rounded-lg mt-2">
                        Submit Sourcing Request
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
