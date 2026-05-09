import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Globe, Users, Target } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import Logo from './Logo';

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-background border border-foreground/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Left side: Marketing Info */}
            <div className="hidden md:flex md:w-2/5 bg-navy-light p-8 flex-col justify-between text-white border-r border-white/5">
              <div>
                <Logo className="mb-8" showTagline={false} />
                <h3 className="text-2xl font-bold font-display leading-tight mb-4">See how champions travel.</h3>
                <p className="text-sm text-white/60 mb-8">Join 500+ global organizations optimizing their travel spend.</p>
                
                <div className="space-y-4">
                  {[
                    { icon: Users, text: "Group Booking Tech" },
                    { icon: Target, text: "Policy Enforcement" },
                    { icon: CheckCircle2, text: "24/7 Concierge" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <item.icon className="w-4 h-4 text-electric-green" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] uppercase font-black tracking-widest text-white/40">Enterprise Grade</p>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="flex-grow p-8 md:p-10 bg-background text-foreground relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-foreground/5 transition-colors"
                id="demo-modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h2 className="text-2xl font-display font-bold mb-2">Request a Demo</h2>
                    <p className="text-foreground/60 text-sm mb-8">Our team will reach out within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40 ml-1">First Name</label>
                          <input required type="text" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors" placeholder="John" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40 ml-1">Last Name</label>
                          <input required type="text" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40 ml-1">Work Email</label>
                        <input required type="email" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors" placeholder="john@company.com" />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40 ml-1">Company</label>
                        <input required type="text" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors" placeholder="Organization name" />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40 ml-1">Organization Type</label>
                        <select className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors appearance-none">
                          <option>Sports League / Team</option>
                          <option>Corporate Enterprise</option>
                          <option>Event Management</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <button 
                        disabled={loading}
                        className="w-full py-4 bg-electric-green text-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-electric-green/20 mt-4"
                        id="demo-modal-submit"
                      >
                        {loading ? "Processing..." : <>Send Request <Send className="w-4 h-4" /></>}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-electric-green/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-electric-green" />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">Request Sent!</h2>
                    <p className="text-foreground/60 mb-8 max-w-sm">
                      Thank you for your interest. A specialist from our team will contact you shortly to schedule your personalized demo.
                    </p>
                    <button 
                      onClick={onClose}
                      className="px-8 py-3 bg-foreground text-background rounded-xl font-bold"
                      id="demo-modal-done"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
