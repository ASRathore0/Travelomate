import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plane, Hotel, ShieldCheck, Zap, ArrowRight, CheckCircle2, 
  Sparkles, TrendingUp, Users, Building2, Check, 
  Laptop, ChevronDown, Send, MessageCircle, Clock, FileSpreadsheet
} from 'lucide-react';

// Brand & Client Assets
import rmzLogo from '../assets/images/artifacts/rmz.png';
import bullsLogo from '../assets/images/artifacts/Bulls.png';
import pvlLogo from '../assets/images/artifacts/prime volleyball-Photoroom.png';
import hilLogo from '../assets/images/artifacts/hil_logo_2.webp';
import hdfcLogo from '../assets/images/artifacts/hdfc_logo.jpg';
import thriveHeroBg from '../assets/images/thrive-hero-bg.jpg';

export default function ThriveCampaign() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 550);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    monthlySpend: '₹10L - ₹25L'
  });

  const formspreeEndpoint = 'https://formspree.io/f/xykvkopd';

  const getWhatsAppUrl = () => {
    const companyText = formData.company ? ` from ${formData.company}` : '';
    const nameText = formData.name ? `I'm ${formData.name}` : `I'd like`;
    const text = `Hi Travelomate, ${nameText}${companyText}. I would like to schedule a demo of Thrive Corporate SBT.`;
    return `https://wa.me/919891749739?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    // Automatically trigger WhatsApp in new tab
    const waUrl = getWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('company', formData.company);
      data.append('phone', formData.phone);
      data.append('monthlySpend', formData.monthlySpend);
      data.append('source', 'Google Ads Campaign - Thrive One-Pager');

      await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  const faqs = [
    {
      q: "How fast can our company be onboarded onto Thrive SBT?",
      a: "Our rapid enterprise onboarding gets your company fully operational within 48 hours. We upload your employee master list, configure your multi-tier approval matrix, and set up state-wise GSTIN billing profiles with zero IT disruption."
    },
    {
      q: "How does Thrive ensure 100% GSTR-2B Input Tax Credit (ITC)?",
      a: "Thrive automatically maps your corporate state GSTINs directly to every airline PNR and hotel invoice at the moment of booking. Automated weekly invoice reconciliation guarantees zero lost tax credits."
    },
    {
      q: "What inventory and airlines are supported on the platform?",
      a: "Thrive connects directly via NDC to IndiGo (6E Corporate), Air India, Vistara, Akasa Air, and 100+ international carriers with wholesale corporate perks (free meals, seat selection, nil reschedule fees) plus 500,000+ corporate hotels."
    },
    {
      q: "What happens if a flight is delayed or an employee needs emergency assistance?",
      a: "In addition to automated 45-second self-booking, every enterprise account is backed by Travelomate's 24/7 corporate travel desk for immediate flight amendments, VIP rerouting, and guaranteed emergency SLAs."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Thrive Corporate Self-Booking Tool (SBT)",
            "operatingSystem": "Web-based SaaS",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "description": "Thrive by Travelomate is a high-speed corporate self-booking tool and travel management platform for business flights, hotels, and cabs with automated policy enforcement and GST recovery."
          })
        }}
      />

      {/* 1. HERO SECTION: Minimalist 2-Column Split with Embedded Instant Form */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 overflow-hidden border-b border-foreground/10 bg-[#030712] text-white">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={thriveHeroBg}
            alt="Corporate Travel Intelligence"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/75 to-[#030712]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(225,29,72,0.2),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Value Hook, Highlights & Social Proof */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Pill Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/20 border border-brand/40 text-rose-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                  Corporate Self-Booking Tool
                </div>
              </div>

              {/* Punchy Executive Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-[1.25] sm:leading-[1.15] text-white">
                The Corporate Self-Booking Tool <br className="hidden sm:inline" />
                Loved by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-400 to-brand">
                  CEOs, CFOs, Travel Heads
                </span>{' '}
                & Finance Teams.
              </h1>

              {/* Core Feature Checklist */}
              <div className="space-y-3.5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 pt-2">
                {[
                  "Direct wholesale NDC airline fares (nil cancellation fees)",
                  "1-click manager approvals via WhatsApp",
                  "100% state-wise GSTIN stamping for GSTR-2B recovery",
                  "Duty-of-care live tracking backed by 24/7 corporate desk"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 mt-6 sm:mt-8 border-t border-white/15 max-w-xl">
                <div className="p-3.5 sm:p-3 rounded-2xl bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-display font-black text-brand">45s</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-white/60 uppercase tracking-wider mt-1">Booking Time</p>
                </div>
                <div className="p-3.5 sm:p-3 rounded-2xl bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-display font-black text-white">30%</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-white/60 uppercase tracking-wider mt-1">Avg Savings</p>
                </div>
                <div className="p-3.5 sm:p-3 rounded-2xl bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-display font-black text-emerald-400">99.8%</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-white/60 uppercase tracking-wider mt-1">Compliance</p>
                </div>
                <div className="p-3.5 sm:p-3 rounded-2xl bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-display font-black text-white">48 Hrs</p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-white/60 uppercase tracking-wider mt-1">Deployment</p>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Embedded Form */}
            <div className="lg:col-span-5" id="campaign-form">
              <div className="bg-card-bg text-foreground border border-foreground/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                {formSubmitted ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-black text-foreground">
                      Demo Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/60 max-w-xs mx-auto leading-relaxed">
                      Thank you! Our Corporate Solutions Director has been notified. For priority onboarding or instant 1-on-1 assistance, connect directly on WhatsApp:
                    </p>

                    <div className="pt-2">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        Chat on WhatsApp (+91 98917 49739)
                      </a>
                    </div>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-brand hover:underline mt-2 inline-block cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <div className="inline-block px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-1">
                        Free Corporate Trial
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-black text-foreground tracking-tight">
                        Schedule Demo
                      </h3>
                      <p className="text-[11px] sm:text-xs text-foreground/60">
                        Zero commitment. Configured to your company policies.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-foreground/70">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-xs sm:text-sm focus:outline-hidden focus:border-brand transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-foreground/70">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-xs sm:text-sm focus:outline-hidden focus:border-brand transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-foreground/70">Company Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Inc"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-xs sm:text-sm focus:outline-hidden focus:border-brand transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-foreground/70">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-xs sm:text-sm focus:outline-hidden focus:border-brand transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-foreground/70">Estimated Monthly Travel Spend</label>
                      <select
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-xs sm:text-sm focus:outline-hidden focus:border-brand transition-colors"
                      >
                        <option>Under ₹5 Lakhs</option>
                        <option>₹5L - ₹15L</option>
                        <option>₹15L - ₹50L</option>
                        <option>₹50L - ₹1 Crore+</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formLoading}
                        id="campaign-submit-btn"
                        className="w-full py-3 sm:py-3.5 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-brand/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {formLoading ? (
                          <>Dispatching Request...</>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Book Personalized Demo & Pilot
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-foreground/45 text-center mt-2">
                        Instant WhatsApp & email confirmation. 100% confidential.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGOS RIBBON */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-200/80 overflow-hidden shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4 sm:mb-5">
            Powering Travel for India & Global Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-12 md:gap-16">
            <img src={rmzLogo} alt="RMZ Corp" className="h-9 sm:h-12 object-contain opacity-95 hover:opacity-100 transition-all hover:scale-105" />
            <img src={bullsLogo} alt="Bengaluru Bulls" className="h-6 sm:h-9 object-contain opacity-90 hover:opacity-100 transition-all hover:scale-105" />
            <img src={pvlLogo} alt="Prime Volleyball League" className="h-5 sm:h-8 object-contain opacity-90 hover:opacity-100 transition-all hover:scale-105" />
            <img src={hilLogo} alt="Hockey India League" className="h-6 sm:h-9 object-contain opacity-90 hover:opacity-100 transition-all hover:scale-105" />
            <img src={hdfcLogo} alt="HDFC Bank" className="h-4.5 sm:h-6 object-contain rounded-xs opacity-95 hover:opacity-100 transition-all hover:scale-105 shadow-xs" />
          </div>
        </div>
      </section>

      {/* 3. CORE VALUE PILLARS (Clean 4-Card Minimalist Grid) */}
      <section className="py-10 lg:py-16 bg-foreground/[0.02] border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-[11px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-2">
              Why Forward-Thinking Corporates Choose Thrive
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight text-foreground">
              Everything Your Travel Desk Needs, Automated.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {/* Pillar 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-card-bg border border-foreground/10 hover:border-brand/30 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base font-display font-bold text-foreground">
                Automated Policy Guardrails
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Enforce domestic & international caps, hotel star ratings, and advance booking rules automatically before tickets are issued.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-card-bg border border-foreground/10 hover:border-brand/30 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-corporate/10 text-corporate flex items-center justify-center">
                <Plane className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base font-display font-bold text-foreground">
                Wholesale NDC Air & Hotels
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Direct integration with IndiGo, Air India, Vistara, and 500,000+ corporate hotels with nil cancellation fees and free meals.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-card-bg border border-foreground/10 hover:border-brand/30 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileSpreadsheet className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base font-display font-bold text-foreground">
                100% GSTR-2B ITC Recovery
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Automated multi-state GSTIN mapping directly on invoices eliminates human billing errors and recovers up to 18% in lost tax credits.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-card-bg border border-foreground/10 hover:border-brand/30 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-base font-display font-bold text-foreground">
                45s Bookings & 24/7 Desk
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                1-click approvals via WhatsApp or email, backed by a dedicated human corporate travel manager for urgent off-hours changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONCISE COMPARISON: Traditional Agency vs Thrive SBT */}
      <section className="py-10 lg:py-16 bg-background border-b border-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-[11px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-2">
              Performance Comparison
            </span>
            <h2 className="text-xl sm:text-3xl font-display font-black tracking-tight text-foreground">
              Traditional Travel Desks vs. Thrive SBT
            </h2>
          </div>

          {/* Desktop & Tablet Table (>= sm) */}
          <div className="hidden sm:block bg-card-bg border border-foreground/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-12 bg-navy text-white text-xs font-bold uppercase tracking-wider p-4 border-b border-white/10">
              <div className="col-span-4 text-white/70">Feature / Metric</div>
              <div className="col-span-4 text-rose-300">Traditional Agency</div>
              <div className="col-span-4 text-emerald-300 font-black">Thrive SBT</div>
            </div>

            <div className="divide-y divide-foreground/5 text-xs sm:text-sm">
              {[
                { feature: "Booking Speed", trad: "4 to 24 hrs (email quotes)", thrive: "45 seconds self-service" },
                { feature: "Pricing Transparency", trad: "Opaque markup commissions", thrive: "Direct wholesale rates" },
                { feature: "Policy Enforcement", trad: "Manual post-trip audits", thrive: "100% pre-booking guardrails" },
                { feature: "GST Credit Filing", trad: "Manual receipts, lost ITC", thrive: "Automated GSTR-2B stamping" },
                { feature: "Approvals", trad: "Endless email chains", thrive: "1-Click WhatsApp approvals" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-foreground/[0.02]">
                  <div className="col-span-4 font-bold text-foreground">{row.feature}</div>
                  <div className="col-span-4 text-foreground/60 text-xs">
                    <span className="text-rose-500 font-bold mr-1">✕</span> {row.trad}
                  </div>
                  <div className="col-span-4 font-semibold text-foreground text-xs sm:text-sm">
                    <span className="text-emerald-500 font-black mr-1">✓</span> {row.thrive}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile-Optimized Comparison Cards (< sm) */}
          <div className="block sm:hidden space-y-2.5">
            {[
              { feature: "Booking Speed", trad: "4 to 24 hrs (email quotes)", thrive: "45 seconds self-service" },
              { feature: "Pricing Transparency", trad: "Opaque markup commissions", thrive: "Direct wholesale rates" },
              { feature: "Policy Enforcement", trad: "Manual post-trip audits", thrive: "100% pre-booking guardrails" },
              { feature: "GST Credit Filing", trad: "Manual receipts, lost ITC", thrive: "Automated GSTR-2B stamping" },
              { feature: "Approvals", trad: "Endless email chains", thrive: "1-Click WhatsApp approvals" }
            ].map((row, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-card-bg border border-foreground/10 space-y-2 shadow-xs">
                <div className="font-bold text-xs text-foreground flex items-center justify-between">
                  <span>{row.feature}</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                    Thrive Advantage
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-foreground/5">
                  <div className="p-2 rounded-lg bg-rose-500/5 border border-rose-500/10">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-rose-500 mb-0.5">Traditional</p>
                    <p className="text-foreground/70 text-[11px] leading-tight">{row.trad}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-0.5">Thrive SBT</p>
                    <p className="font-semibold text-foreground text-[11px] leading-tight">{row.thrive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCUREMENT FAQ ACCORDION (4 Essential Questions) */}
      <section className="py-10 lg:py-16 bg-foreground/[0.02] border-b border-foreground/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-display font-black tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-foreground/60 mt-1">
              Key answers for CFOs, Procurement, and Travel Managers
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-foreground/10 rounded-xl bg-card-bg overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-foreground hover:text-brand transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-brand' : 'text-foreground/40'
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 text-xs sm:text-sm text-foreground/70 leading-relaxed border-t border-foreground/5 pt-2.5 sm:pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONVERSION CTA BANNER */}
      <section className="py-10 sm:py-14 bg-gradient-to-br from-navy via-navy-light to-navy text-white text-center pb-24 md:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3.5">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight">
            Transform Your Corporate Travel in 48 Hours.
          </h2>
          <p className="text-white/70 text-xs sm:text-sm max-w-xl mx-auto">
            Book a 15-minute walkthrough to see how Thrive cuts travel spend, eliminates manual travel desk delays, and automates 100% of GST tax credits.
          </p>
          <div className="pt-2">
            <a
              href="#campaign-form"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold text-xs sm:text-sm shadow-xl shadow-brand/30 hover:scale-105 active:scale-95 transition-all"
            >
              Get Started with Thrive SBT
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. MOBILE FLOATING STICKY ACTION BAR (Appears only after scrolling past the form) */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-3 md:hidden shadow-2xl"
          >
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white truncate">Thrive SBT</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold truncate">Save 24%-30% on spend</span>
            </div>
            <a
              href="#campaign-form"
              className="px-4 py-2 bg-brand hover:bg-brand-dark text-white text-xs font-bold rounded-xl shadow-md shadow-brand/25 flex items-center gap-1.5 flex-shrink-0 active:scale-95 transition-all"
            >
              Book Live Demo <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
