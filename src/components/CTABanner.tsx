import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';

export default function CTABanner() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-7xl mx-auto relative z-10 rounded-[32px] lg:rounded-[48px] overflow-hidden h-[300px] lg:h-[400px] w-full"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/velocity.mp4"
          />
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 flex items-center gap-4 z-20">
          <button 
            onClick={toggleMute}
            className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors pointer-events-auto"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button 
            onClick={togglePlay}
            className="px-6 h-12 bg-electric-green text-navy rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors pointer-events-auto shadow-lg"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 fill-current" /> Pause
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" /> Play
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
