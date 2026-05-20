import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formspreeEndpoint = 'https://formspree.io/f/xykvkopd';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      const isSuccess = response.ok || response.type === 'opaqueredirect' || response.status === 0;

      if (!isSuccess) {
        throw new Error('Form submission failed');
      }

      setIsSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      setIsSubmitted(true);
      setSubmitError(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-15 pb-20 bg-background text-foreground overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-20 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] -mr-64 -mt-32 rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-black text-brand uppercase tracking-[0.2em] mb-8">
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-8">
            Let's build your <br />
            <span className="text-brand italic">travel strategy.</span>
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl">
            Have a question about our platform or need a bespoke travel solution for your organization? Our team of intelligence experts is ready to help.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 sm:p-10 bg-card-bg border border-border-subtle rounded-[32px] shadow-sm"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Full Name</label>
                    <input required name="fullName" type="text" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Organization</label>
                  <input name="organization" type="text" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors" placeholder="League or Company Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Message</label>
                  <textarea required name="message" rows={4} className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors resize-none" placeholder="Tell us about your travel needs..."></textarea>
                </div>
                {submitError && (
                  <p className="text-sm text-red-500">{submitError}</p>
                )}
                <button disabled={loading} className="w-full py-4 bg-brand text-white rounded-xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                  {loading ? 'Sending...' : <>Send Message <Send className="w-5 h-5" /></>}
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Request Sent!</h2>
                <p className="text-foreground/60 mb-2 max-w-sm">
                  Thank you for your interest. A specialist from our team will contact you shortly to schedule your personalized demo.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-8 py-3 bg-foreground text-background rounded-xl font-bold"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">Email Us</p>
                  <p className="text-xl font-bold">support@travelomate.in</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">Call Us</p>
                  <p className="text-xl font-bold">+91 98917 49739</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">Delhi Office</p>
                    <p className="text-sm font-bold leading-relaxed">
                      Innov8 Ras Villas Saket LGF,<br />
                      Saket District Centre, Next to Select City Walk Mall,<br />
                      Delhi 110017
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">Noida Office</p>
                    <p className="text-sm font-bold leading-relaxed">
                      14142, Gaur City Mall,<br />
                      Techzone 4 Noida 201306
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-navy text-white rounded-[32px] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand blur-[80px] opacity-20 -mr-16 -mt-16 rounded-full" />
               <h3 className="text-xl font-bold mb-4 relative z-10">24/7 Human Response</h3>
               <p className="text-white/60 text-sm leading-relaxed mb-6 relative z-10">
                 Our emergency response team is available around the clock to handle travel disruptions in real-time.
               </p>
               <div className="flex items-center gap-2 text-brand font-black text-sm uppercase tracking-widest relative z-10">
                 <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                 Always Online
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
