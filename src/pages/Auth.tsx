import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left side: Branding/Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-navy-light relative overflow-hidden p-20 flex-col justify-between text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <Logo className="relative z-10" />

        <div className="relative z-10 max-w-lg">
          <h1 className="text-6xl font-display font-bold leading-[0.9] mb-8">
            The Engine of <br />
            <span className="text-electric-green italic">Global Movement.</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-12">
            Log in to manage your organization's travel, policy, and performance in one unified workspace.
          </p>

          <div className="grid grid-cols-2 gap-8">
             <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-electric-green">99.9%</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Uptime Reliability</p>
             </div>
             <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-electric-green">256-bit</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Bank-Grade Security</p>
             </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
           <span>Privacy Policy</span>
           <span className="w-1 h-1 bg-white/20 rounded-full" />
           <span>Terms of Service</span>
        </div>
      </div>

      {/* Right side: Auth Form */}
      <div className="flex-grow flex items-center justify-center p-8 lg:p-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-display font-bold mb-3">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="text-foreground/60">{isLogin ? 'Enter your credentials to access your dashboard' : 'Start managing your team travel today'}</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center gap-2 py-3 border border-foreground/10 rounded-xl hover:bg-foreground/5 transition-all font-bold text-sm">
                  <Github className="w-4 h-4" /> Github
               </button>
               <button className="flex items-center justify-center gap-2 py-3 border border-foreground/10 rounded-xl hover:bg-foreground/5 transition-all font-bold text-sm">
                  <Mail className="w-4 h-4 text-vivid-orange" /> Google
               </button>
            </div>

            <div className="relative">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-foreground/10" />
               </div>
               <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-4 text-foreground/40 font-black tracking-widest">Or continue with</span>
               </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               {!isLogin && (
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40 ml-1">Full Name</label>
                    <input type="text" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors" placeholder="John Doe" />
                  </div>
               )}
               <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors" placeholder="name@company.com" />
               </div>
               <div className="space-y-1.5">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] uppercase font-black tracking-widest text-foreground/40">Password</label>
                    {isLogin && <a href="#" className="text-[10px] uppercase font-black tracking-widest text-electric-green">Forgot?</a>}
                  </div>
                  <input type="password" className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-electric-green transition-colors" placeholder="••••••••" />
               </div>

               <button 
                  className="w-full py-4 bg-foreground text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-xl mt-6"
                  id="auth-submit"
               >
                  {isLogin ? 'Log In' : 'Sign Up'} <ArrowRight className="w-4 h-4" />
               </button>
            </form>

            <p className="text-center text-sm text-foreground/60">
               {isLogin ? "Don't have an account?" : "Already have an account?"} {' '}
               <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-electric-green font-bold hover:underline"
                  id="auth-reset-toggle"
               >
                  {isLogin ? 'Create one now' : 'Log in here'}
               </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
