import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronRight } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="pt-32 pb-20 bg-background text-foreground overflow-hidden">
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Full Name</label>
                  <input type="text" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Email Address</label>
                  <input type="email" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Organization</label>
                <input type="text" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors" placeholder="League or Company Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Message</label>
                <textarea rows={4} className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 focus:border-brand/30 outline-none transition-colors resize-none" placeholder="Tell us about your travel needs..."></textarea>
              </div>
              <button className="w-full py-4 bg-brand text-white rounded-xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
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
                  <p className="text-xl font-bold">hello@travelomate.in</p>
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
