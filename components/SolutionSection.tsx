
import React from 'react';
import { Eye, Zap, ShieldCheck } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="absolute -inset-10 bg-vibrant-green/10 blur-[120px] rounded-full group-hover:bg-vibrant-green/20 transition-all duration-700"></div>
          <div className="relative glass-card p-1 rounded-2xl sm:rounded-[40px] overflow-hidden border-2 border-vibrant-green/30 shadow-[0_0_50px_rgba(0,255,102,0.1)] group-hover:shadow-[0_0_80px_rgba(0,255,102,0.2)] transition-all">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
              alt="Live Demo Preview" 
              className="rounded-2xl sm:rounded-[36px] grayscale-[0.2] brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700 h-[300px] sm:h-[400px] lg:h-[500px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-black/80 backdrop-blur-2xl p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-vibrant-green/40 shadow-2xl">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-vibrant-green rounded-xl sm:rounded-2xl flex items-center justify-center neon-glow">
                  <Eye className="text-black w-6 h-6 sm:w-8 sm:h-8 font-black" />
                </div>
                <div>
                  <h4 className="font-black text-xl sm:text-2xl text-white">Live-Build Tech</h4>
                  <p className="text-gray-400 text-sm sm:text-base font-medium">Witness your growth in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6 sm:space-y-10">
          <div className="inline-block px-4 py-1.5 bg-vibrant-green/10 border border-vibrant-green/30 rounded-full text-vibrant-green text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase">
            The GhostLine Method
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] md:leading-[0.9]">
            A Better Way to <br />
            <span className="text-vibrant-green neon-text-glow">Build Websites</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 font-medium leading-relaxed">
            Stop trusting mockups. We build a functional, 
            live demo first. See the results before you drop a single cent on the final project.
          </p>
          
          <div className="space-y-6 sm:space-y-8 pt-2 sm:pt-4">
            <div className="flex items-start space-x-4 sm:space-x-6 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-vibrant-green/10 flex items-center justify-center shrink-0 border border-vibrant-green/30 group-hover:bg-vibrant-green transition-all">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-vibrant-green group-hover:text-black transition-colors" />
              </div>
              <div>
                <h4 className="font-black text-xl sm:text-2xl text-white mb-1 sm:mb-2">Zero Guesswork</h4>
                <p className="text-gray-500 text-base sm:text-lg font-medium">Eliminate the "hope and pray" phase. You approve exactly what goes live.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 sm:space-x-6 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-vibrant-green/10 flex items-center justify-center shrink-0 border border-vibrant-green/30 group-hover:bg-vibrant-green transition-all">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-vibrant-green group-hover:text-black transition-colors" />
              </div>
              <div>
                <h4 className="font-black text-xl sm:text-2xl text-white mb-1 sm:mb-2">Extreme Performance</h4>
                <p className="text-gray-500 text-base sm:text-lg font-medium">Our sites aren't just pretty. They are weapons built for speed and SEO dominance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
