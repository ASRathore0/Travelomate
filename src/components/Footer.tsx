import { Globe, Trophy, Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="footer" className="bg-background border-t border-foreground/5 pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-foreground">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          
          <div className="col-span-2">
            <Logo className="mb-8" />
            <p className="text-foreground/40 max-w-sm mb-8 leading-relaxed">
              The world's first travel management engine built for the unique speed of champions and the precision of corporate giants.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/travelomate/" className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Company</h4>
             <ul className="space-y-4 text-foreground/60 text-sm">
                <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
                <li><Link to="/journey" className="hover:text-brand transition-colors">Our Journey</Link></li>
                <li><Link to="/blog" className="hover:text-brand transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-brand transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Solution</h4>
             <ul className="space-y-4 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-brand transition-colors">Sports Travel</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Expense Mgmt</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Analytics</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Contact</h4>
             <ul className="space-y-4 text-foreground/60 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@travelomate.in</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9891749739</li>
                <li className="space-y-4 pt-4 border-t border-foreground/5">
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-1">Delhi Office</p>
                      <p className="text-xs leading-relaxed opacity-60">Innov8 Ras Villas Saket LGF,<br />Saket, Delhi 110017</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-1">Noida Office</p>
                      <p className="text-xs leading-relaxed opacity-60">14142, Gaur City Mall,<br />Techzone 4 Noida 201306</p>
                   </div>
                </li>
             </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/30 text-xs">
            © 2025 Travelomate. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-foreground/30 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white dark:hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
