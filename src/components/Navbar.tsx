import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Trophy, LogIn, Sun, Moon } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useDemo } from '@/src/lib/DemoContext';

import Logo from './Logo';

interface NavLink {
  name: string;
  href: string;
  isNew?: boolean;
  dropdown?: { name: string; href: string; isNew?: boolean }[];
  sections?: { title: string; items: { name: string; href: string; isNew?: boolean }[] }[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { openDemo } = useDemo();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks: NavLink[] = [
    
    { name: 'Sports Leagues', href: '/sports-leagues' },
    { name: 'Corporate', href: '/corporate-teams' },
    { 
      name: 'Solutions', 
      href: '#solutions',
      sections: [
        {
          title: 'By Role',
          items: [
            { name: 'Finance Teams', href: '/solutions/finance-teams' },
            { name: 'Travel Managers', href: '/solutions/travel-managers' },
            { name: 'Executive Assistants', href: '/solutions/executive-assistants' },
            { name: 'Human Resources', href: '/solutions/human-resources' },
            { name: 'Operations Teams', href: '/solutions/operations-teams' }
          ]
        },
        {
          title: 'By Industry',
          items: [
            { name: 'Healthcare staffing & recruiting', href: '/solutions/healthcare' },
            { name: 'Construction', href: '/solutions/construction' },
            { name: 'Software and Tech', href: '/solutions/software-tech' },
            { name: 'Manufacturing', href: '/solutions/manufacturing' },
            { name: 'Transportation and Logistics', href: '/solutions/transportation-logistics' }
          ]
        }
      ]
    },
    { 
      name: 'Resoureces ', 
      href: '#Resourece',
      dropdown: [
         
        { name: 'Our Journey', href: '/journey' },
        { name: 'Blog', href: '/blog' },
        { name: 'News Letter', href: '/' },
        { name: 'Research & Development', href: '/' },
        
         
      ]
    },
    { 
      name: 'Company', 
      href: '#company',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
  ];

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 w-full px-6 py-2.5",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-foreground/10" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden md:flex items-center pl-4 border-l border-foreground/10 h-10">
              <div className="flex flex-col justify-center leading-tight">
                <span className="text-lg font-black tracking-tight flex items-center gap-1">
                  <span className="text-brand">16</span>
                  <span className="text-foreground/80 lowercase">Years</span>
                </span>
                <span className="text-xs uppercase font-bold tracking-[0.1em] text-foreground/30">of Excellence</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      to={link.href}
                      className="text-sm font-semibold text-foreground/70 hover:text-foreground flex items-center gap-2 transition-colors"
                    >
                      {link.name}
                      {link.isNew && (
                        <span className="bg-electric-green text-navy text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">NEW</span>
                      )}
                    </Link>
                  ) : (
                    <a
                      href={link.href.startsWith('/#') ? link.href : ((link.dropdown || link.sections) ? '#' : link.href)}
                      className="text-sm font-semibold text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
                    >
                      {link.name}
                      {(link.dropdown || link.sections) && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />}
                    </a>
                  )}

                  {(link.dropdown || link.sections) && (
                    <div className={cn(
                      "absolute top-full left-0 pt-4 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200",
                      link.sections ? "-left-20" : ""
                    )}>
                      <div className={cn(
                        "bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-2xl p-4 shadow-2xl",
                        link.sections ? "w-[500px] flex gap-8" : "w-56"
                      )}>
                        {link.dropdown && link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center justify-between py-2.5 px-3 text-sm text-foreground/60 hover:text-electric-green hover:bg-foreground/5 rounded-lg transition-all"
                          >
                            {item.name}
                            {item.isNew && (
                              <span className="bg-electric-green text-navy text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">NEW</span>
                            )}
                          </Link>
                        ))}
                        {link.sections && link.sections.map((section) => (
                          <div key={section.title} className="flex-1">
                            <h4 className="px-3 pb-2 text-sm font-bold text-foreground">{section.title}</h4>
                            <div className="space-y-1">
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-center justify-between py-2.5 px-3 text-sm text-foreground/60 hover:text-electric-green hover:bg-foreground/5 rounded-lg transition-all"
                                >
                                  {item.name}
                                  {item.isNew && (
                                    <span className="bg-electric-green text-navy text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">NEW</span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-all text-foreground"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-electric-green" /> : <Moon className="w-5 h-5 text-navy" />}
            </button>

            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={() => navigate('/auth')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-foreground/20 hover:bg-foreground hover:text-background transition-all text-foreground"
              >
                <LogIn className="w-4 h-4" /> Log In
              </button>
              <button 
                onClick={openDemo}
                className="px-6 py-2.5 rounded-full text-sm font-bold bg-electric-green text-navy hover:scale-105 active:scale-95 transition-all shadow-lg shadow-electric-green/20"
              >
                Request a Demo
              </button>
            </div>

            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-background border-b border-foreground/10 lg:hidden overflow-hidden shadow-2xl z-[100]"
            >
              <div className="py-8 px-6 space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-4">
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link 
                        to={link.href} 
                        className="text-xl font-bold flex items-center justify-between text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                        {link.isNew && (
                          <span className="bg-electric-green text-navy text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">NEW</span>
                        )}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-xl font-bold block text-foreground"
                        onClick={() => !(link.dropdown || link.sections) && setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                    {(link.dropdown || link.sections) && (
                      <div className="pl-4 space-y-3">
                        {link.dropdown && link.dropdown.map(item => (
                          <Link 
                            key={item.name} 
                            to={item.href} 
                            className="flex items-center justify-between text-foreground/60 active:text-electric-green"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                            {item.isNew && (
                              <span className="bg-electric-green text-navy text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">NEW</span>
                            )}
                          </Link>
                        ))}
                        {link.sections && link.sections.map(section => (
                          <div key={section.title} className="space-y-2 pt-2">
                            <h4 className="text-sm font-bold text-foreground/80">{section.title}</h4>
                            {section.items.map(item => (
                              <Link 
                                key={item.name} 
                                to={item.href} 
                                className="flex items-center justify-between text-foreground/60 active:text-electric-green pl-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                                {item.isNew && (
                                  <span className="bg-electric-green text-navy text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">NEW</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-foreground/10 flex flex-col gap-4">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate('/auth');
                    }}
                    className="w-full py-4 text-center font-bold border border-foreground/20 rounded-xl text-foreground"
                  >
                    Log In
                  </button>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openDemo();
                    }}
                    className="w-full py-4 text-center font-bold bg-electric-green text-navy rounded-xl shadow-lg shadow-electric-green/10"
                  >
                    Request a Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
