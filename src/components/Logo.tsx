import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className, showTagline = true }: LogoProps) {
  return (
    <Link to="/" className={cn("flex flex-col group cursor-pointer", className)}>
      <div className="flex items-baseline font-display font-black tracking-tighter text-2xl lg:text-3xl">
        <span className="text-foreground transition-colors">Travelo</span>
        <span className="text-electric-green transition-colors">mate</span>
      </div>
      {showTagline && (
        <span className="text-[7px] lg:text-[9px] font-medium italic opacity-60 tracking-[0.05em] -mt-1 transform group-hover:translate-x-1 transition-transform">
          "Travel intelligence, Human at the core"
        </span>
      )}
    </Link>
  );
}
