import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plane, Hotel, Car, ShieldCheck, Zap, ArrowRight, CheckCircle2, 
  Sparkles, TrendingUp, Users, DollarSign, Clock, Building2, 
  FileText, Check, ChevronRight, PhoneCall, HelpCircle, 
  Sliders, Star, Award, Laptop, ChevronDown, Send, Lock,
  RefreshCw, FileSpreadsheet, AlertCircle, Headphones, MapPin, 
  Navigation, Calendar, Filter, ArrowUpRight, Layers, Globe, Server, Cpu, Trophy, MessageCircle
} from 'lucide-react';
import { useDemo } from '../lib/DemoContext';
import thriveLogoLight from '../assets/images/artifacts/thrive black (2).png';
import thriveLogoDark from '../assets/images/artifacts/Thrive white.png';
import thriveHeroBg from '../assets/images/thrive-hero-bg.jpg';

// Partner / Client Logos
import rmzLogo from '../assets/images/artifacts/rmz.png';
import bullsLogo from '../assets/images/artifacts/Bulls.png';
import pvlLogo from '../assets/images/artifacts/prime volleyball-Photoroom.png';
import hilLogo from '../assets/images/artifacts/hil_logo_2.webp';
import stellarLogo from '../assets/images/artifacts/stellar-logo.png';

export default function Thrive() {
  const { openDemo } = useDemo();

  // Interactive Simulator State
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'cabs'>('flights');
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('roundtrip');
  const [policyStrictness, setPolicyStrictness] = useState<'standard' | 'strict'>('standard');
  const [selectedFlight, setSelectedFlight] = useState<number | null>(0);
  const [showApprovalNotice, setShowApprovalNotice] = useState(false);

  // ROI Calculator State
  const [employeeCount, setEmployeeCount] = useState<number>(120);
  const [monthlySpend, setMonthlySpend] = useState<number>(15); // in Lakhs INR

  // Stakeholder Tabs
  const [activePersona, setActivePersona] = useState<'finance' | 'travelAdmin' | 'traveler'>('finance');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Embedded Lead Capture Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '50-200 employees',
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

    // Automatically open WhatsApp with pre-filled lead details in new tab
    const waUrl = getWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('company', formData.company);
      data.append('phone', formData.phone);
      data.append('teamSize', formData.teamSize);
      data.append('monthlySpend', formData.monthlySpend);
      data.append('source', 'Google Campaign - Thrive SBT Landing Page');

      await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      setFormSubmitted(true);
    } catch (err) {
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  // Calculated ROI values
  const annualSavingsINR = Math.round(monthlySpend * 12 * 0.24); // 24% typical savings
  const adminHoursSaved = Math.round(employeeCount * 3.5); // 3.5 hours per traveler/month
  const gstInputRecovered = Math.round(monthlySpend * 12 * 0.18 * 0.85); // 18% GST input credit recovered

  const flightOptions = [
    {
      airline: "IndiGo 6E-2044",
      departure: "06:15 DEL",
      arrival: "08:30 BOM",
      duration: "2h 15m",
      stops: "Non-stop",
      price: "₹5,420",
      corporatePerks: "Corporate Fare • Free Seat & Meal • Zero Rescheduling Fee",
      compliant: true,
      tag: "Best In-Policy Match"
    },
    {
      airline: "Air India AI-805",
      departure: "08:00 DEL",
      arrival: "10:15 BOM",
      duration: "2h 15m",
      stops: "Non-stop",
      price: "₹6,180",
      corporatePerks: "Free Checked 25kg • Refundable • Terminal 3 Lounge",
      compliant: true,
      tag: "Preferred Airline"
    },
    {
      airline: "Vistara UK-995",
      departure: "18:45 DEL",
      arrival: "21:00 BOM",
      duration: "2h 15m",
      stops: "Non-stop",
      price: "₹9,850",
      corporatePerks: "Premium Economy • Requires L2 Exception Approval",
      compliant: false,
      tag: "Out of Policy (Above ₹7,500 Cap)"
    }
  ];

  const hotelOptions = [
    {
      name: "Taj Lands End, Mumbai",
      location: "Bandra West (3.2 km to BKC)",
      rating: "5.0 ★★★★★",
      negotiatedRate: "₹11,500",
      publicRate: "₹16,800",
      savings: "31% Corporate Discount",
      amenities: "Free High-Speed Wi-Fi • Buffet Breakfast • 4PM Late Checkout",
      compliant: true
    },
    {
      name: "Trident Hotel, Bandra Kurla",
      location: "BKC Financial District",
      rating: "4.8 ★★★★★",
      negotiatedRate: "₹9,200",
      publicRate: "₹13,500",
      savings: "32% Corporate Discount",
      amenities: "Complimentary Airport Drop • Express Laundry • In-Policy",
      compliant: true
    }
  ];

  const cabOptions = [
    {
      type: "Executive Sedan (Honda City / Ciaz)",
      idealFor: "Client Meetings & Airport Pickups",
      fare: "₹1,450 Flat",
      tracking: "Live GPS + Driver Verified",
      invoice: "Instant GST E-Invoice"
    },
    {
      type: "Electric SUV (MG ZS EV / Nexon)",
      idealFor: "Eco-Conscious Corporate ESG Travel",
      fare: "₹1,600 Flat",
      tracking: "Zero Emission • Priority Dispatch",
      invoice: "Carbon Offset Certified"
    }
  ];

  const comparisonData = [
    {
      feature: "Booking Turnaround Time",
      traditional: "4 to 24 hours (Endless emails back-and-forth)",
      thrive: "Under 45 seconds (Consumer-grade speed, instant booking)"
    },
    {
      feature: "Policy Compliance",
      traditional: "Manual post-travel audits (Leads to leaked spend)",
      thrive: "Automated pre-trip guardrails (100% compliant at checkout)"
    },
    {
      feature: "Corporate Rates & NDC",
      traditional: "Agent markups & opaque service fees",
      thrive: "Direct wholesale NDC fares with zero hidden markups"
    },
    {
      feature: "GST Input Tax Credit",
      traditional: "Lost receipts, wrong state GSTINs, rejected ITC",
      thrive: "Automated centralized invoicing with 100% valid state GSTIN"
    },
    {
      feature: "Approval Hierarchy",
      traditional: "Stuck in manager inboxes, missed cheap fares",
      thrive: "1-Click WhatsApp/Email approval with auto-rules"
    },
    {
      feature: "Emergency & Flight Delays",
      traditional: "Call queues, unanswered phone lines on weekends",
      thrive: "24/7 dedicated travel concierge backed by 16 yrs expertise"
    }
  ];

  const faqs = [
    {
      q: "How fast can our company go live with Thrive SBT?",
      a: "Most corporate teams are fully onboarded in under 48 hours. Our enterprise implementation team sets up your company profile, imports employee rosters via CSV/HRMS, configures your custom travel policy & approval hierarchy, and conducts a 20-minute team walkthrough."
    },
    {
      q: "Can we use our existing corporate credit cards or obtain credit billing?",
      a: "Yes. Thrive supports multiple corporate payment modes: Centralized Company Credit Cards (Lodge Cards), Individual Corporate Cards, Direct Credit Lines with flexible payment terms (15/30 days subject to approval), and UPI/Netbanking."
    },
    {
      q: "How does Thrive automate GST compliance across Indian states?",
      a: "Thrive's intelligent GST engine automatically applies your company's state-specific GSTIN based on the origin, destination, and hotel location. You receive a unified, tax-compliant GSTR-2B-ready monthly statement, preventing leakage of valuable Input Tax Credit (ITC)."
    },
    {
      q: "What happens when an employee tries to book an out-of-policy flight or hotel?",
      a: "Thrive lets you customize enforcement: either completely block out-of-policy options, or allow booking with mandatory justification that triggers an automatic approval workflow to the designated L1/L2 manager. In-policy bookings can be auto-approved instantly."
    },
    {
      q: "Does Thrive offer 24/7 human support during travel emergencies?",
      a: "Absolutely. While the software provides instantaneous self-booking, Travelomate's 16-year veteran operations team operates 24/7/365. If a flight is cancelled, weather strikes, or an emergency arises, human specialists proactively rebook travelers and handle logistics."
    },
    {
      q: "Can Thrive integrate with our HRMS and Expense software (SAP, Zoho, Darwinbox)?",
      a: "Yes. Thrive integrates seamlessly with leading HRMS and ERP platforms including SAP Concur, Darwinbox, Workday, Zoho People & Books, Tally Prime, and Oracle NetSuite for automated user sync and one-click expense reconciliation."
    },
    {
      q: "What is the difference between a traditional Travel Management Company (TMC) and Thrive SBT?",
      a: "Traditional TMCs rely on manual travel desks, email ping-pong (taking 4 to 24 hours per ticket), opaque markup commissions, and delayed invoicing. Thrive SBT is a next-generation Self-Booking Tool where employees book flights, hotels, and cabs in 45 seconds directly from live wholesale inventory with automated policy enforcement, instant WhatsApp approvals, and 24/7 human emergency support."
    },
    {
      q: "How does Thrive maximize GSTR-2B Input Tax Credit (ITC) for business travel in India?",
      a: "Business travel expenses in India carry up to 18% GST. When employees book on consumer travel apps, personal GSTINs or mismatched state tax codes are used, causing 100% loss of ITC. Thrive automatically applies your registered company GSTIN mapped to the originating airport or hotel state, generating government-compliant e-invoices directly reconcilable with GSTR-2B."
    },
    {
      q: "Can Thrive manage complex multi-city trips and international travel?",
      a: "Yes. Thrive supports domestic and international multi-city flight bookings, corporate visa facilitation, international hotel reservations via global GDS/bedbanks, and forex assistance—all unified under your enterprise travel policy with automatic currency conversion."
    },
    {
      q: "Is employee training required to start using Thrive SBT?",
      a: "Zero training is required. Thrive was intentionally designed with a consumer-grade UX that feels as simple as booking on a consumer flight app, but with enterprise guardrails running quietly in the background."
    }
  ];

  // JSON-LD Structured Data Schemas for Google & AI Answer Engines (GEO/AEO)
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Thrive Corporate Self-Booking Tool (SBT)",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "url": "https://travelomate.co.in/thrive",
    "description": "Thrive by Travelomate is an enterprise Corporate Self-Booking Tool (SBT) and business travel management software that empowers corporate employees to independently search, compare, and book domestic and international flights, corporate hotels, and ground transportation in under 45 seconds with 100% automated travel policy enforcement, 1-click WhatsApp approvals, and full GST Input Tax Credit (ITC) recovery.",
    "publisher": {
      "@type": "Organization",
      "name": "Travelomate",
      "url": "https://travelomate.co.in",
      "logo": "https://travelomate.co.in/favicon.png"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "520",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "name": "Corporate 30-Day Free Pilot",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "45-Second Corporate Self-Booking for Flights, Hotels, and Cabs",
      "Automated Pre-Trip Travel Policy Enforcement with Dynamic Budget Caps",
      "1-Click Multi-Tier Manager Approval Workflows via WhatsApp and Email",
      "Consolidated Monthly Invoicing with 100% GSTR-2B Input Tax Credit Compliance",
      "Direct Wholesale NDC Airline Fares & Negotiated Corporate Hotel Rates",
      "24/7 Proactive Human Concierge and Emergency Traveler Tracking",
      "Seamless ERP & HRMS Integrations (SAP Concur, Darwinbox, Zoho, Workday, Tally Prime)"
    ],
    "keywords": [
      "Corporate Travel Desk",
      "Corporate Travel Management Services",
      "Corporate Self Booking Tool",
      "Corporate Travel Booking Software",
      "Travel Management Company in India",
      "Corporate Travel Solutions",
      "Business Travel Management",
      "Outsourced Corporate Travel Desk",
      "Corporate Travel Portal",
      "Corporate Flight Booking",
      "Corporate Hotel Booking",
      "Employee Travel Management",
      "Sports Travel Management",
      "Sports Team Travel Management",
      "Best Corporate Travel Management Company",
      "Corporate Travel Management Services for Companies",
      "Corporate Travel Management Outsourcing",
      "Corporate Travel Desk for Companies",
      "Corporate Travel Booking Solutions for Enterprises",
      "Corporate Travel Management Vendor",
      "Corporate Travel Partner for Businesses",
      "Corporate Travel Management Software for Companies",
      "Corporate Self Booking Platform for Employees",
      "Corporate Travel Management Company for SMEs",
      "Corporate Travel Solutions for Large Enterprises",
      "Corporate Travel Management Tender",
      "Corporate Travel Agency",
      "Corporate Travel Services",
      "Business Travel Agency",
      "Corporate Travel Management Company in Delhi NCR",
      "Enterprise Travel Management",
      "Corporate Travel Planning",
      "Managed Business Travel",
      "Corporate Travel Outsourcing",
      "Corporate Travel Desk Services",
      "Outsourced Travel Desk",
      "Corporate Travel Desk Management",
      "Dedicated Corporate Travel Desk",
      "Corporate Travel Support",
      "Corporate Travel Booking Desk",
      "Corporate Travel Helpdesk",
      "Business Travel Desk",
      "Corporate Travel Operations",
      "Corporate Flight Booking Services",
      "Corporate Hotel Booking Services",
      "Corporate Travel Coordination",
      "Corporate Travel Desk Solutions",
      "Corporate Travel Booking Tool",
      "Business Travel Booking Platform",
      "Online Corporate Travel Booking",
      "Corporate Flight Booking Software",
      "Corporate Hotel Booking Software",
      "Employee Self Booking Tool",
      "Corporate Travel Technology",
      "Business Travel Management Platform",
      "Corporate Travel Automation",
      "Corporate Travel SaaS",
      "Online Business Travel Platform",
      "Corporate Travel Booking System",
      "Self Booking Tool for Corporate Travel",
      "Corporate Travel Expense Management Software",
      "Corporate Travel Approval Software",
      "Corporate Travel Policy Management Software"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Travel Management Services & Self-Booking Platform",
    "serviceType": "Corporate Travel Management Company in India",
    "provider": {
      "@type": "Organization",
      "name": "Travelomate",
      "url": "https://travelomate.co.in"
    },
    "areaServed": ["India", "Delhi NCR", "Global"],
    "description": "Comprehensive corporate travel management services, dedicated outsourced travel desk, self-booking tool for corporate travel, corporate flight booking, and corporate hotel booking solutions for companies.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Corporate Travel Management Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Self Booking Tool (SBT)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dedicated & Outsourced Corporate Travel Desk"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Travel Management for SMEs and Large Enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sports Team Travel Management"
          }
        }
      ]
    }
  };

  return (
    <div className="w-full bg-background text-foreground selection:bg-brand selection:text-white">
      {/* Search Engine & AI Crawler JSON-LD Schema Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section with Cinematic Brand Background */}
      <section className="relative min-h-[72vh] lg:min-h-[80vh] flex flex-col justify-center pt-10 pb-12 lg:pt-14 lg:pb-14 overflow-hidden border-b border-foreground/10 bg-[#030712]">
        {/* Background Media Layer (Premium Image) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={thriveHeroBg}
            alt="Executive Corporate Travel Lounge"
            className="w-full h-full object-cover opacity-60"
          />

          {/* Layered Luxury Brand Overlays (Crisp dark contrast, no milky fade or bottom blue fog) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/55 to-[#030712]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(225,29,72,0.22),transparent_70%)]" />
          
          {/* Subtle Futuristic Grid Lines Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-10">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand/20 border border-brand/40 text-rose-200 text-xs font-black uppercase tracking-[0.18em] mb-4 shadow-xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              Corporate Self-Booking Tool (SBT)
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] mb-5 text-white drop-shadow-xl"
            >
              The Self-Booking Tool That Is{' '}
              <span className="text-brand inline-block drop-shadow-[0_0_35px_rgba(225,29,72,0.6)]">Loved By CEOs, CFOs, Travel Heads</span>{' '}
              & <span className="underline decoration-brand/50 underline-offset-8">Finance Team.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-6 font-medium drop-shadow-sm"
            >
              Empower corporate travelers to book flights, hotels, and cabs in under <strong className="text-white font-bold">45 seconds</strong>. Eliminate email ping-pong, enforce budget guardrails in real time, and reclaim 100% of GST input tax credits.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <button
                onClick={openDemo}
                id="hero-demo-cta"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand/40 flex items-center justify-center gap-3 group"
              >
                Schedule Corporate Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#interactive-sbt"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <Laptop className="w-5 h-5 text-brand" />
                Try Live SBT Simulator
              </a>
            </motion.div>

            {/* Trust Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5 bg-black/45 border border-white/15 rounded-3xl shadow-2xl max-w-4xl mx-auto text-white"
            >
              <div className="text-center p-2">
                <p className="text-2xl sm:text-3xl font-display font-black text-brand drop-shadow-sm">45s</p>
                <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Avg Booking Time</p>
              </div>
              <div className="text-center p-2 border-l border-white/15">
                <p className="text-2xl sm:text-3xl font-display font-black text-white">99.8%</p>
                <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Policy Compliance</p>
              </div>
              <div className="text-center p-2 border-l border-white/15">
                <p className="text-2xl sm:text-3xl font-display font-black text-emerald-400">24-30%</p>
                <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Lower Travel Spend</p>
              </div>
              <div className="text-center p-2 border-l border-white/15">
                <p className="text-2xl sm:text-3xl font-display font-black text-white">16+ Yrs</p>
                <p className="text-xs font-bold text-white/70 uppercase tracking-wider mt-1">Travelomate Heritage</p>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Ribbon */}
          <div className="pt-2 pb-0 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
              Powering Travel for India & Global Industry Leaders
            </p>
            <div className="bg-black/35 border border-white/10 rounded-2xl py-3 px-6 inline-flex flex-wrap items-center justify-center gap-8 sm:gap-14 shadow-lg">
              <img src={rmzLogo} alt="RMZ Corp" className="h-10 sm:h-14 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <img src={bullsLogo} alt="Bengaluru Bulls" className="h-7 sm:h-9 object-contain opacity-85 hover:opacity-100 transition-opacity" />
              <img src={pvlLogo} alt="Prime Volleyball League" className="h-6 sm:h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <img src={hilLogo} alt="Hockey India League" className="h-7 sm:h-9 object-contain opacity-85 hover:opacity-100 transition-opacity" />
              <img src={stellarLogo} alt="Stellar Group" className="h-7 sm:h-9 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* AEO / Answer Engine Optimization Knowledge & Executive Summary Block */}
      <section className="py-8 lg:py-10 bg-card-bg border-b border-foreground/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/10 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <article className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Entity Definition • AEO Knowledge Graph
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground tracking-tight">
                  What is Thrive Corporate Self-Booking Tool (SBT)?
                </h2>
                <p className="text-foreground/80 text-base sm:text-lg leading-relaxed font-normal">
                  <strong>Thrive by Travelomate</strong> is an enterprise AI-powered <em>Corporate Self-Booking Tool (SBT)</em> and corporate travel management software. It allows corporate employees to independently search, compare, and book domestic and international flights, corporate hotels, and ground transportation in under <strong>45 seconds</strong>. Thrive enforces real-time corporate travel policies, triggers 1-click WhatsApp and email approval workflows, and automatically matches state-wise GSTINs for 100% <strong>GSTR-2B Input Tax Credit (ITC)</strong> recovery—cutting corporate travel spend by <strong>24% to 30%</strong>.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Corporate Self Booking Tool (SBT)",
                    "Business Travel Platform India",
                    "GSTR-2B ITC Matching",
                    "Direct NDC Airline Fares",
                    "Automated Policy Enforcement",
                    "WhatsApp Travel Approvals",
                    "Zero Booking Fee TMC"
                  ].map((kw, kIdx) => (
                    <span key={kIdx} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/70 border border-foreground/10">
                      #{kw}
                    </span>
                  ))}
                </div>
              </article>

              {/* Quick AI Benchmark Table */}
              <aside className="w-full lg:w-80 p-6 rounded-2xl bg-card-bg border border-foreground/15 shadow-md flex-shrink-0 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-brand flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Thrive Performance Metrics
                </h3>
                <dl className="divide-y divide-foreground/10 text-xs space-y-2">
                  <div className="flex justify-between pt-2">
                    <dt className="text-foreground/60 font-medium">Booking Speed</dt>
                    <dd className="font-bold text-foreground">Under 45 seconds</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-foreground/60 font-medium">Policy Compliance</dt>
                    <dd className="font-bold text-emerald-600 dark:text-emerald-400">99.8% Automated</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-foreground/60 font-medium">Average Savings</dt>
                    <dd className="font-bold text-brand">24% to 30%</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-foreground/60 font-medium">GST Compliance</dt>
                    <dd className="font-bold text-foreground">100% State-Wise ITC</dd>
                  </div>
                  <div className="flex justify-between pt-2">
                    <dt className="text-foreground/60 font-medium">Onboarding Window</dt>
                    <dd className="font-bold text-foreground">Under 48 Hours</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive SBT Product Simulator */}
      <section id="interactive-sbt" className="py-10 lg:py-14 bg-foreground/[0.02] border-b border-foreground/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-corporate/10 text-corporate text-xs font-bold uppercase tracking-widest inline-block mb-2">
              Interactive Product Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-foreground">
              Experience the Thrive Self-Booking Flow.
            </h2>
            <p className="mt-2 text-foreground/70 text-base sm:text-lg">
              Click through our live corporate simulator below to see how flights, hotels, and policy limits are effortlessly handled in real time.
            </p>
          </div>

          {/* Simulator Shell */}
          <div className="bg-card-bg border border-foreground/15 rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden transition-all">
            {/* Top Bar of the Mock App */}
            <div className="bg-navy p-4 sm:p-6 text-white flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <img
                    src={thriveLogoDark}
                    alt="Thrive SBT"
                    className="h-7 sm:h-8 w-auto"
                  />
                </div>
                <div className="hidden md:flex items-center gap-2 pl-4 border-l border-white/10 text-xs text-white/60">
                  <Building2 className="w-4 h-4 text-brand" />
                  <span>Acme Technologies India Pvt Ltd</span>
                </div>
              </div>

              {/* Policy Indicator & Profile */}
              <div className="flex items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline text-white/80">Active Policy:</span>
                  <span className="font-bold text-white">Tier 2 Manager (Domestic)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-bold text-xs text-white">
                    AR
                  </div>
                  <div className="hidden sm:block text-left text-xs">
                    <p className="font-bold leading-tight">Ananya Roy</p>
                    <p className="text-white/50 text-[10px]">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Nav Tabs (Flights, Hotels, Cabs) */}
            <div className="bg-foreground/[0.03] border-b border-foreground/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                {[
                  { id: 'flights', label: 'Flights', icon: Plane },
                  { id: 'hotels', label: 'Hotels', icon: Hotel },
                  { id: 'cabs', label: 'Corporate Cabs', icon: Car }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      activeTab === tab.id
                        ? 'bg-brand text-white shadow-md shadow-brand/20'
                        : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Policy cap status */}
              <div className="flex items-center gap-3 text-xs">
                <span className="text-foreground/60">Flight Budget Cap:</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  Up to ₹7,500 / sector (Auto-Approved)
                </span>
              </div>
            </div>

            {/* Main Interactive Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {activeTab === 'flights' && (
                  <motion.div
                    key="flights"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Simulated Flight Search Strip */}
                    <div className="p-4 sm:p-6 bg-foreground/[0.02] border border-foreground/10 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">From</label>
                        <p className="font-bold text-base text-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand" /> New Delhi (DEL)
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">To</label>
                        <p className="font-bold text-base text-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-corporate" /> Mumbai (BOM)
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">Departure Date</label>
                        <p className="font-bold text-sm text-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-foreground/50" /> Next Monday • Morning
                        </p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-foreground/5 border border-foreground/10">
                          1 Traveler (Direct Billing)
                        </span>
                      </div>
                    </div>

                    {/* Flight Results */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold text-foreground/60 px-1">
                        <span>Available Corporate Flights (3 Options)</span>
                        <span className="text-brand">⚡ Showing Real Corporate Negotiated Fares</span>
                      </div>

                      {flightOptions.map((f, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setSelectedFlight(i);
                            if (!f.compliant) {
                              setShowApprovalNotice(true);
                            } else {
                              setShowApprovalNotice(false);
                            }
                          }}
                          className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer relative ${
                            selectedFlight === i
                              ? 'border-brand bg-brand/[0.03] shadow-lg ring-1 ring-brand/50'
                              : 'border-foreground/10 bg-card-bg hover:border-foreground/30'
                          }`}
                        >
                          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center font-bold text-brand">
                                <Plane className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-bold text-lg text-foreground">{f.airline}</h4>
                                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                                    f.compliant 
                                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                                  }`}>
                                    {f.compliant ? '✓ 100% In Policy' : '⚠ Out of Policy'}
                                  </span>
                                </div>
                                <p className="text-xs text-foreground/60 mt-1">
                                  {f.departure} ➔ {f.arrival} • {f.duration} ({f.stops})
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-6">
                              <div className="text-left lg:text-right">
                                <p className="text-2xl font-display font-black text-foreground">{f.price}</p>
                                <p className="text-[11px] text-foreground/50">{f.tag}</p>
                              </div>
                              <button
                                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                                  selectedFlight === i
                                    ? 'bg-brand text-white shadow-md'
                                    : 'bg-foreground/5 hover:bg-foreground/10 text-foreground'
                                }`}
                              >
                                {selectedFlight === i ? 'Selected' : 'Select'}
                              </button>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-foreground/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                            <span className="text-foreground/70 font-medium flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                              {f.corporatePerks}
                            </span>
                            <span className="text-[11px] text-foreground/40 font-mono">
                              GST Input Credit Eligible: ₹975
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Policy Notice Box */}
                    {showApprovalNotice ? (
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span>
                            <strong>Approval Flow Triggered:</strong> This fare exceeds the ₹7,500 domestic manager cap. 1-click approval request will be dispatched to your VP of Finance on WhatsApp/Email.
                          </span>
                        </div>
                        <button 
                          onClick={openDemo}
                          className="px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold whitespace-nowrap hover:bg-amber-700 transition-colors"
                        >
                          Test Approval Flow
                        </button>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                          <span>
                            <strong>Instant Auto-Approval:</strong> In-policy selection. No manager approval wait time. E-ticket dispatched instantly to traveler & calendar.
                          </span>
                        </div>
                        <button 
                          onClick={openDemo}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold whitespace-nowrap hover:bg-emerald-700 transition-colors"
                        >
                          Book via Demo Account
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'hotels' && (
                  <motion.div
                    key="hotels"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="p-4 bg-foreground/[0.02] border border-foreground/10 rounded-2xl flex items-center justify-between flex-wrap gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand" />
                        <span className="font-bold text-foreground">Mumbai (Near BKC Financial District)</span>
                        <span className="text-foreground/50">• 1 Room, 2 Nights</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-corporate/10 text-corporate font-bold">
                        Corporate Hotel Cap: ₹12,000 / night
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {hotelOptions.map((h, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-foreground/10 bg-card-bg hover:border-brand/40 transition-all flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h4 className="font-bold text-lg text-foreground">{h.name}</h4>
                              <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                                {h.rating}
                              </span>
                            </div>
                            <p className="text-xs text-foreground/60 mb-4">{h.location}</p>
                            
                            <div className="p-3 bg-brand/5 border border-brand/10 rounded-xl mb-4 space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-brand">{h.savings}</span>
                                <span className="text-xs text-foreground/40 line-through">{h.publicRate}</span>
                              </div>
                              <p className="text-2xl font-display font-black text-foreground">
                                {h.negotiatedRate} <span className="text-xs font-normal text-foreground/60">/ night</span>
                              </p>
                            </div>

                            <p className="text-xs text-foreground/70 mb-6 leading-relaxed">
                              {h.amenities}
                            </p>
                          </div>

                          <button 
                            onClick={openDemo}
                            className="w-full py-2.5 bg-foreground/5 hover:bg-brand hover:text-white rounded-xl text-sm font-bold text-foreground transition-all flex items-center justify-center gap-2"
                          >
                            Reserve with Corporate Billing
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'cabs' && (
                  <motion.div
                    key="cabs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="p-4 bg-foreground/[0.02] border border-foreground/10 rounded-2xl flex items-center justify-between flex-wrap gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-brand" />
                        <span className="font-bold text-foreground">Chhatrapati Shivaji Terminal 2 ➔ BKC Office</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold">
                        Fixed Corporate Airport Rate
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {cabOptions.map((c, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-foreground/10 bg-card-bg hover:border-corporate/40 transition-all flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-base text-foreground">{c.type}</h4>
                              <p className="text-xl font-display font-black text-brand">{c.fare}</p>
                            </div>
                            <p className="text-xs text-foreground/60 mb-4">{c.idealFor}</p>
                            
                            <div className="space-y-2 text-xs text-foreground/70 mb-6">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>{c.tracking}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>{c.invoice}</span>
                              </div>
                            </div>
                          </div>

                          <button 
                            onClick={openDemo}
                            className="w-full py-2.5 bg-foreground/5 hover:bg-corporate hover:text-white rounded-xl text-sm font-bold text-foreground transition-all flex items-center justify-center gap-2"
                          >
                            Dispatch Cab to Terminal
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Corporate ROI & Cost Savings Calculator */}
      <section className="py-10 lg:py-14 bg-background relative border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Calculator Left Description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest inline-block">
                Corporate Cost Benefit
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-tight text-foreground">
                Calculate Your Corporate Travel Savings.
              </h2>
              <p className="text-foreground/70 text-base leading-relaxed">
                See exactly how much your organization saves annually by replacing legacy agency commissions and manual approvals with Thrive’s automated self-booking engine.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Average 24% discount via negotiated corporate fares & NDC",
                  "100% GSTR-2B compliance saves up to 18% in lost tax credits",
                  "Over 3.5 admin hours eliminated per business traveler each month",
                  "Zero hidden booking markup fees on airline tickets"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={openDemo}
                  className="px-6 py-3.5 bg-brand text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-brand/20 flex items-center gap-2"
                >
                  Request Full CFO Financial Model
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Calculator Sliders & Outputs */}
            <div className="lg:col-span-7 bg-card-bg border border-foreground/10 rounded-[32px] p-6 sm:p-10 shadow-2xl">
              <div className="space-y-8">
                {/* Slider 1: Employee Count */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-brand" />
                      Number of Traveling Employees
                    </label>
                    <span className="text-lg font-display font-black text-brand bg-brand/10 px-3 py-1 rounded-lg">
                      {employeeCount} Travelers
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full accent-brand h-2 bg-foreground/10 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                    <span>10 employees</span>
                    <span>500</span>
                    <span>1,000+ employees</span>
                  </div>
                </div>

                {/* Slider 2: Monthly Spend */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-foreground flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      Estimated Monthly Travel Spend
                    </label>
                    <span className="text-lg font-display font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg">
                      ₹{monthlySpend} Lakhs / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="100"
                    step="1"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-foreground/10 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                    <span>₹2 Lakhs</span>
                    <span>₹50 Lakhs</span>
                    <span>₹1+ Crore / mo</span>
                  </div>
                </div>

                {/* Live Output Cards */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-foreground/10">
                  <div className="p-4 rounded-2xl bg-brand/5 border border-brand/15 text-center">
                    <p className="text-xs font-bold text-foreground/60 uppercase">Estimated Annual Savings</p>
                    <p className="text-2xl sm:text-3xl font-display font-black text-brand mt-1">
                      ₹{annualSavingsINR}L
                    </p>
                    <p className="text-[11px] text-foreground/50 mt-1 font-medium">~24% direct cost cut</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-corporate/5 border border-corporate/15 text-center">
                    <p className="text-xs font-bold text-foreground/60 uppercase">Admin Hours Saved</p>
                    <p className="text-2xl sm:text-3xl font-display font-black text-corporate mt-1">
                      {adminHoursSaved} hrs
                    </p>
                    <p className="text-[11px] text-foreground/50 mt-1 font-medium">per month reclaimed</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 text-center">
                    <p className="text-xs font-bold text-foreground/60 uppercase">Recovered GST ITC</p>
                    <p className="text-2xl sm:text-3xl font-display font-black text-emerald-600 dark:text-emerald-400 mt-1">
                      ₹{gstInputRecovered}L
                    </p>
                    <p className="text-[11px] text-foreground/50 mt-1 font-medium">via compliant e-invoices</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-foreground/50">
                    *Estimates based on aggregate benchmarks across 500+ Indian & multinational corporate programs using Travelomate Thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Traditional Travel Agency vs Thrive SBT */}
      <section className="py-10 lg:py-14 bg-foreground/[0.02] border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest inline-block mb-2">
              Direct Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-foreground">
              Why Forward-Thinking Enterprises Switch to Thrive.
            </h2>
            <p className="mt-2 text-foreground/70 text-base sm:text-lg">
              Say goodbye to fragmented travel desks, delayed email quotes, and compliance loopholes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-card-bg border border-foreground/10 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 bg-navy text-white text-xs sm:text-sm font-bold uppercase tracking-wider p-4 sm:p-6 border-b border-white/10">
              <div className="col-span-4 sm:col-span-4 text-white/70">Evaluation Metric</div>
              <div className="col-span-4 sm:col-span-4 text-red-400">Traditional Agency / Desk</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-400 font-black">Thrive SBT 2.0</div>
            </div>

            <div className="divide-y divide-foreground/5">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center hover:bg-foreground/[0.02] transition-colors">
                  <div className="col-span-4 font-bold text-foreground pr-2">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-foreground/60 pr-2">
                    <span className="text-red-500 font-bold block sm:inline mr-1">✕</span>
                    {row.traditional}
                  </div>
                  <div className="col-span-4 font-semibold text-foreground">
                    <span className="text-emerald-500 font-black block sm:inline mr-1">✓</span>
                    {row.thrive}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built For Your Whole Organization: Persona Tabs */}
      <section className="py-10 lg:py-14 bg-background border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-corporate/10 text-corporate text-xs font-bold uppercase tracking-widest inline-block mb-2">
              Multi-Stakeholder Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-foreground">
              Built to Satisfy Every Corporate Stakeholder.
            </h2>
            <p className="mt-2 text-foreground/70 text-base sm:text-lg">
              Whether you control budgets, manage travel operations, or fly 100,000 miles a year—Thrive is built for you.
            </p>
          </div>

          {/* Persona Selection Tabs */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1.5 rounded-2xl bg-foreground/5 border border-foreground/10 max-w-full overflow-x-auto">
              {[
                { id: 'finance', label: 'For CFOs & Finance', icon: TrendingUp },
                { id: 'travelAdmin', label: 'For Travel Admins & HR', icon: ShieldCheck },
                { id: 'traveler', label: 'For Employees & Travelers', icon: Plane }
              ].map(p => (
                <button
                  key={p.id}
                  onClick={() => setActivePersona(p.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    activePersona === p.id
                      ? 'bg-card-bg text-brand shadow-lg border border-foreground/10'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  <p.icon className="w-4 h-4" />
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Persona Card Content */}
          <div className="max-w-5xl mx-auto">
            {activePersona === 'finance' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: DollarSign,
                    title: "Total Spend Visibility",
                    desc: "Real-time consolidated MIS dashboard tracking every rupee spent across flights, hotels, and cabs by department and cost center."
                  },
                  {
                    icon: FileSpreadsheet,
                    title: "100% GST Compliance",
                    desc: "State-accurate GSTIN application on all bookings with automatic GSTR-2B reconciliation to recover full Input Tax Credit."
                  },
                  {
                    icon: Lock,
                    title: "Zero Budget Overruns",
                    desc: "Strict automated caps prevent out-of-policy bookings before payment is made. No more messy post-trip reimbursement arguments."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-card-bg border border-foreground/10 shadow-lg hover:border-brand/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activePersona === 'travelAdmin' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Sliders,
                    title: "Flexible Policy Engine",
                    desc: "Configure customized travel allowances by seniority, department, domestic/international trips, and advance purchase windows."
                  },
                  {
                    icon: RefreshCw,
                    title: "Automated Approvals",
                    desc: "Set multi-tier manager hierarchies with instant approval triggers via WhatsApp, Email, or Slack so work never stalls."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Duty of Care & Tracking",
                    desc: "Real-time emergency traveler locator and flight status monitoring to keep all remote and traveling personnel safe 24/7."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-card-bg border border-foreground/10 shadow-lg hover:border-corporate/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-corporate/10 flex items-center justify-center text-corporate mb-6">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activePersona === 'traveler' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Zap,
                    title: "45-Second Bookings",
                    desc: "Intuitive consumer-grade search experience on both desktop and mobile. Book any trip in 3 clicks with saved preferences."
                  },
                  {
                    icon: Award,
                    title: "Corporate Fare Perks",
                    desc: "Enjoy free meals, seat selection, higher baggage limits, and minimal cancellation penalties on corporate airline tickets."
                  },
                  {
                    icon: Headphones,
                    title: "24/7 Concierge Backup",
                    desc: "Flight delayed at 2 AM? Our 16-year veteran travel desk steps in automatically with immediate rebooking and human support."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-card-bg border border-foreground/10 shadow-lg hover:border-emerald-500/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Embedded High-Converting Lead Capture Form (PPC Optimized) */}
      <section id="demo-form" className="py-10 lg:py-14 bg-foreground/[0.02] border-b border-foreground/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card-bg border border-foreground/15 rounded-[36px] shadow-2xl overflow-hidden grid lg:grid-cols-12">
            {/* Left Column: Form Pitch */}
            <div className="lg:col-span-5 bg-navy p-8 sm:p-12 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand text-[10px] font-black uppercase tracking-widest text-white mb-6">
                  VIP Corporate Pilot
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black leading-tight mb-4">
                  Experience Thrive in Action.
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-8">
                  Get a personalized walkthrough of Thrive SBT configured to your organization’s travel policies, budget tiers, and approval hierarchies.
                </p>

                <div className="space-y-4">
                  {[
                    "Live 15-minute tailored product demo",
                    "Customized ROI & travel spend audit",
                    "30-day zero-risk corporate pilot",
                    "48-hour rapid deployment"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-medium text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 text-xs text-white/50">
                <p className="font-semibold text-white/70">Prefer to speak directly?</p>
                <p className="mt-1">Corporate Hotline: +91 98917 49739</p>
                <p>corporate@travelomate.in</p>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-black text-foreground">
                    Demo Request Received!
                  </h4>
                  <p className="text-sm text-foreground/60 max-w-sm mx-auto leading-relaxed">
                    Thank you! Your demo request has been dispatched to our corporate travel desk. You can also connect with our corporate specialist directly on WhatsApp for immediate priority scheduling:
                  </p>

                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="thrive-whatsapp-forward-btn"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl font-bold text-sm shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-white text-white" />
                      Chat on WhatsApp
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-brand hover:underline inline-block"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-display font-bold text-foreground">
                      Book Your Corporate Demo
                    </h4>
                    <p className="text-xs text-foreground/60 mt-1">
                      No commitment required. 100% confidential.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground/70">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-sm focus:outline-hidden focus:border-brand transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground/70">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-sm focus:outline-hidden focus:border-brand transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground/70">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Infosys / Zomato"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-sm focus:outline-hidden focus:border-brand transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground/70">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-sm focus:outline-hidden focus:border-brand transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground/70">Team / Company Size</label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-sm focus:outline-hidden focus:border-brand transition-colors"
                      >
                        <option>10-50 employees</option>
                        <option>50-200 employees</option>
                        <option>200-1,000 employees</option>
                        <option>1,000+ employees</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground/70">Monthly Travel Spend</label>
                      <select
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-foreground/15 bg-background text-foreground text-sm focus:outline-hidden focus:border-brand transition-colors"
                      >
                        <option>Under ₹5 Lakhs</option>
                        <option>₹5L - ₹15L</option>
                        <option>₹15L - ₹50L</option>
                        <option>₹50L - ₹1 Crore+</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formLoading}
                      id="thrive-submit-lead-btn"
                      className="w-full py-4 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formLoading ? (
                        <>Processing Request...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Get Instant Access & Schedule Demo
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-foreground/40 text-center mt-3">
                      By submitting, you agree to receive a brief demo invitation. We respect your privacy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 48-Hour Enterprise Deployment Roadmap (How-To AEO Schema) */}
      <section className="py-10 lg:py-14 bg-card-bg border-b border-foreground/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest inline-block mb-2">
              Rapid Corporate Onboarding
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-foreground">
              Deploy Thrive Across Your Company in 48 Hours.
            </h2>
            <p className="mt-2 text-foreground/70 text-base sm:text-lg">
              No lengthy IT implementations or complex software installs. Here is our proven 4-step enterprise rollout roadmap.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Policy & Approval Setup",
                time: "Hour 0 - 12",
                desc: "Our travel engineers configure your travel policies, grade-wise hotel limits, advance booking windows, and multi-tier approval matrices."
              },
              {
                step: "02",
                title: "HRMS & User Sync",
                time: "Hour 12 - 24",
                desc: "Securely sync employee rosters via CSV or native API integration with Darwinbox, SAP Concur, Zoho, Workday, or BambooHR."
              },
              {
                step: "03",
                title: "GSTIN & Billing Link",
                time: "Hour 24 - 36",
                desc: "Map your state-wise GSTIN numbers, corporate lodge cards, or approved credit lines to ensure 100% tax credit capture from day one."
              },
              {
                step: "04",
                title: "Zero-Training Go-Live",
                time: "Hour 36 - 48",
                desc: "Team members receive automated activation invites. They start booking in 45 seconds with consumer-grade ease and enterprise guardrails."
              }
            ].map((st, sIdx) => (
              <div key={sIdx} className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-brand/30 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-display font-black text-brand/30 block mb-4">
                    {st.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {st.title}
                  </h3>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-3">
                    {st.time}
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities & Supported Inventory Networks */}
      <section className="py-10 lg:py-14 bg-foreground/[0.02] border-b border-foreground/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-corporate/10 text-corporate text-xs font-bold uppercase tracking-widest inline-block mb-2">
              Comprehensive Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-foreground">
              Direct Airline NDC, Global Hotels & Verified Ground Fleets.
            </h2>
            <p className="mt-2 text-foreground/70 text-base sm:text-lg">
              Thrive connects directly to live global reservation systems with zero intermediary markups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card-bg border border-foreground/10 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">
                Direct NDC Airline Fares
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Direct integration with IndiGo (6E Corporate), Air India, Vistara, Akasa Air, Emirates, Singapore Airlines, and 100+ global airlines. Access complimentary meals, free seat selection, and reduced cancellation fees.
              </p>
              <div className="pt-2 text-xs font-bold text-brand flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Wholesale SME & Enterprise Fares
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card-bg border border-foreground/10 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-corporate/10 text-corporate flex items-center justify-center">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">
                500,000+ Corporate Hotels
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Pre-negotiated corporate rates across luxury, business, and boutique hotels including Taj Hotels, Oberoi, Marriott Bonvoy, ITC Hotels, Hyatt, Lemon Tree, and Radisson with late checkouts and breakfast included.
              </p>
              <div className="pt-2 text-xs font-bold text-corporate flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Up to 35% Negotiated Discounts
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card-bg border border-foreground/10 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">
                Executive Cabs & Airport Transfers
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                Fixed flat-rate airport pickups, dedicated inter-city executive cabs, and electric EV fleets with real-time GPS flight delay tracking. Single consolidated invoice with driver duty slips.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Guaranteed On-Time Pickup SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Corporate Travel Solutions & Technology Ecosystem (Keyword Authority Cluster) */}
      <section className="py-10 lg:py-14 bg-card-bg border-b border-foreground/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest inline-block mb-2">
              Enterprise Corporate Travel Directory
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-foreground">
              End-to-End Corporate Travel Management, Self-Booking Software & Dedicated Desks.
            </h2>
            <p className="mt-2 text-foreground/70 text-base sm:text-lg">
              Whether your enterprise seeks an advanced <strong>Corporate Self Booking Platform for Employees</strong>, an <strong>Outsourced Corporate Travel Desk</strong>, or an established <strong>Travel Management Company in India</strong>, Travelomate delivers unified technology and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cluster 1: Self-Booking & Software */}
            <div className="p-8 sm:p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-brand/30 transition-all flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-black uppercase tracking-wider mb-4">
                  <Laptop className="w-4 h-4" /> Travel Automation & SaaS
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  Corporate Self Booking Tool & Travel Software
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Thrive is an industry-leading <strong>Corporate Self Booking Tool</strong> and <strong>Corporate Travel Booking Software</strong> built for fast-moving teams. Operating as an intuitive <strong>Business Travel Booking Platform</strong> and <strong>Online Corporate Travel Booking</strong> portal, it unifies <strong>Corporate Flight Booking Software</strong>, <strong>Corporate Hotel Booking Software</strong>, and <strong>Employee Self Booking Tool</strong> capabilities with real-time <strong>Corporate Travel Expense Management Software</strong> and <strong>Corporate Travel Policy Management Software</strong>.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-foreground/5">
                  {[
                    "Automated multi-level corporate travel policy enforcement",
                    "Direct GDS & NDC corporate airfares with state-wise GST",
                    "Self-service employee bookings with zero booking markups"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cluster 2: Travel Desk & Operations */}
            <div className="p-8 sm:p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-corporate/30 transition-all flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate/10 text-corporate text-xs font-black uppercase tracking-wider mb-4">
                  <Headphones className="w-4 h-4" /> 24/7 Operations & Desks
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  Dedicated & Outsourced Corporate Travel Desk
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Experience seamless operational support with our <strong>Dedicated Corporate Travel Desk</strong> and <strong>Outsourced Corporate Travel Desk</strong> services. Travelomate delivers complete <strong>Corporate Travel Desk Management</strong>, <strong>Corporate Travel Booking Desk</strong> workflows, and a 24/7 <strong>Corporate Travel Helpdesk</strong>. We oversee end-to-end <strong>Corporate Flight Booking Services</strong>, <strong>Corporate Hotel Booking Services</strong>, <strong>Employee Travel Management</strong>, and <strong>Corporate Travel Coordination</strong> with guaranteed SLAs.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-foreground/5">
                  {[
                    "24/7 dedicated travel manager with guaranteed SLA response times",
                    "Rapid offline flight amendments, cancellations & VIP re-routing",
                    "Consolidated monthly invoicing and centralized vendor reconciliation"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-corporate flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cluster 3: TMC & Enterprise Partner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider mb-4">
                  <Building2 className="w-4 h-4" /> Enterprise TMC & Partner
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  Travel Management Company in India & Delhi NCR
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Recognized as a premier <strong>Travel Management Company in India</strong> and top-tier <strong>Corporate Travel Management Company in Delhi NCR</strong>, Travelomate provides award-winning <strong>Corporate Travel Management Services</strong>, <strong>Enterprise Travel Management</strong>, and <strong>Corporate Travel Outsourcing</strong>. As a trusted <strong>Corporate Travel Partner for Businesses</strong>, we deliver customized <strong>Corporate Travel Booking Solutions for Enterprises</strong>, <strong>Corporate Travel Management Company for SMEs</strong>, and fulfill formal <strong>Corporate Travel Management Tender</strong> requirements.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-foreground/5">
                  {[
                    "Pan-India negotiated corporate contracts with 500,000+ hotels",
                    "Formal enterprise tender, RFP & procurement readiness",
                    "Full Duty-of-Care traveler tracking and automated expense analytics"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cluster 4: Specialized Sports & Employee Logistics */}
            <div className="p-8 sm:p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-amber-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider mb-4">
                  <Trophy className="w-4 h-4" /> Sports & Large Workforce Logistics
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  Sports Team & High-Performance Employee Travel
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  In addition to corporate enterprise programs, Travelomate has 16+ years of specialized leadership in <strong>Sports Travel Management</strong> and <strong>Sports Team Travel Management</strong> across professional sports leagues (Prime Volleyball, Hockey India League, Bengaluru Bulls). We manage complex squad movements, excess sports baggage, hotel athlete floors, and executive transit alongside large-scale <strong>Corporate Flight Booking</strong> and <strong>Corporate Hotel Booking</strong> programs.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-foreground/5">
                  {[
                    "Dedicated sports squad group movements and chartered air transit",
                    "Specialized oversized athlete baggage & equipment clearances",
                    "Secured hotel team floors, custom athlete meals & ground security"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Campaign FAQ Accordion */}
      <section className="py-10 lg:py-14 bg-background border-b border-foreground/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest inline-block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-foreground">
              Everything You Need to Know About Thrive SBT.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-foreground/10 rounded-2xl bg-card-bg overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-foreground hover:text-brand transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
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
                      className="px-6 pb-6 text-sm text-foreground/70 leading-relaxed border-t border-foreground/5 pt-4"
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

      {/* Bottom CTA Banner */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-brand border border-brand/30 text-xs font-bold uppercase tracking-widest inline-block">
            Take Your Corporate Travel to the Next Level
          </span>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight">
            Stop Bleeding Travel Hours and Money.<br />
            Switch to <span className="text-brand">Thrive SBT</span> Today.
          </h2>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Join hundreds of visionary enterprise teams enjoying 45-second bookings, 100% policy enforcement, and 24-30% lower corporate spend.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={openDemo}
              className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl font-bold text-base hover:scale-105 transition-all shadow-xl shadow-brand/30 flex items-center justify-center gap-2"
            >
              Request Corporate Access
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#demo-form"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              Fill Quick Pilot Form
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <span>✓ No Setup Fees</span>
            <span>✓ 48-Hour Onboarding</span>
            <span>✓ 24/7 Concierge Support</span>
            <span>✓ Cancel Anytime</span>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA Bar for PPC Conversion */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card-bg/95 backdrop-blur-xl border-t border-foreground/10 p-3 flex items-center justify-between gap-3 shadow-[0_-8px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-foreground">Thrive Corporate SBT</span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Save up to 30% on spend</span>
        </div>
        <button
          onClick={openDemo}
          className="px-5 py-2.5 bg-brand text-white text-xs font-bold rounded-xl shadow-md shadow-brand/20 flex items-center gap-1.5 flex-shrink-0"
        >
          Book Demo <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
