
import React from 'react';
import { Phone } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-40 px-4 sm:px-6 relative overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-vibrant-green/5 blur-[100px] sm:blur-[150px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vibrant-green to-transparent"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 sm:space-y-12">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-tight sm:leading-none tracking-tighter">
          SEE YOUR SITE <br />
          <span className="text-vibrant-green neon-text-glow">BEFORE YOU PAY</span>
        </h2>
        
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-bold leading-relaxed">
          The era of "blind faith" agency contracts is over. Call us to see your live demo built in real-time.
        </p>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <a 
            href="tel:+13462872135"
            className="w-full sm:w-auto group flex items-center justify-center bg-vibrant-green hover:brightness-110 text-black px-8 sm:px-16 py-5 sm:py-8 rounded-2xl sm:rounded-[32px] font-black text-xl sm:text-3xl transition-all transform hover:scale-110 neon-glow"
          >
            <Phone className="mr-3 sm:mr-5 w-6 h-6 sm:w-10 sm:h-10 fill-current" />
            CALL FOR A DEMO
          </a>
          
          <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-xl font-black text-center">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-vibrant-red rounded-full animate-pulse shadow-[0_0_15px_rgba(255,0,51,0.8)] shrink-0"></span>
            <span className="text-vibrant-red uppercase tracking-[0.2em] sm:tracking-[0.3em]">ONLY 2 SLOTS LEFT THIS WEEK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
