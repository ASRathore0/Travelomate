import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-electric-green text-navy shadow-lg transition hover:translate-y-[-2px] hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
