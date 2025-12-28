
import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000 text-center lg:text-left">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] md:leading-none">
              <span className="block text-white">Performance</span>
              <span className="block text-vibrant-green neon-text-glow py-1 md:py-2">Business Growth</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-500">
              for Local Service Businesses
            </h2>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Lead-Generating Websites Built Live Before You Pay in Full. Get a custom, 
            conversion-focused website demo in 20 minutes. Refine it together. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start justify-center lg:justify-start">
            <a 
              href="tel:+13462872135"
              className="w-full sm:w-auto flex items-center justify-center bg-vibrant-green hover:brightness-110 text-black px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl transition-all transform hover:scale-105 neon-glow group"
            >
              <Phone className="mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform fill-current" />
              Get Your Live Demo
              <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
            <button 
              className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-white/10 hover:border-white/30 text-white font-bold text-base sm:text-lg transition-all"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </button>
          </div>

          <div className="w-24 sm:w-48 h-1.5 bg-gradient-to-r from-vibrant-green to-transparent rounded-full opacity-60 mx-auto lg:mx-0"></div>
        </div>

        {/* Right Column - Status Cards Visualization (Hidden on small mobile, visible from LG) */}
        <div className="relative hidden lg:block h-[600px]">
          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 600">
            <path 
              d="M380,80 C420,150 250,180 200,280" 
              stroke="rgba(0, 255, 102, 0.25)" 
              strokeWidth="3" 
              fill="none" 
            />
            <path 
              d="M200,280 C150,380 350,420 380,500" 
              stroke="rgba(0, 255, 102, 0.25)" 
              strokeWidth="3" 
              fill="none" 
            />
          </svg>

          {/* Staggered Cards with reveal animations */}
          <div className="absolute top-0 right-5 z-10 reveal" style={{ transitionDelay: '100ms' }}>
            <div className="animate-float">
              <StatusCard 
                label="Growth Systems"
                title="Lead captured & qualified"
                status="Automated follow-up sent"
                color="bg-vibrant-green"
              />
            </div>
          </div>
          
          <div className="absolute top-1/3 left-0 z-10 translate-y-12 reveal" style={{ transitionDelay: '300ms' }}>
            <div className="animate-float-delayed">
              <StatusCard 
                label="Digital Growth"
                title="GBP optimized"
                status="5-star review requested"
                color="bg-blue-400"
              />
            </div>
          </div>

          <div className="absolute bottom-1/4 right-5 z-10 translate-y-12 reveal" style={{ transitionDelay: '500ms' }}>
            <div className="animate-float-slow">
              <StatusCard 
                label="Websites & Funnels"
                title="Landing page live"
                status="Conversion tracking active"
                color="bg-vibrant-green"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-5 z-10 reveal" style={{ transitionDelay: '700ms' }}>
            <div className="animate-float">
              <StatusCard 
                label="Brand Kit"
                title="Yard signs delivered"
                status="Job site visibility +100%"
                color="bg-amber-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatusCardProps {
  label: string;
  title: string;
  status: string;
  color: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ label, title, status, color }) => (
  <div className="glass-card w-80 p-6 rounded-[24px] shadow-2xl border border-white/10 hover:border-vibrant-green/50 transition-all duration-500 hover:scale-105 group cursor-default">
    <div className="flex items-center space-x-3 mb-3">
      <div className={`w-3 h-3 rounded-full animate-pulse-neon shadow-[0_0_10px_rgba(0,255,102,0.8)] ${color}`}></div>
      <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-vibrant-green transition-colors">{label}</span>
    </div>
    <div className="text-xl font-bold text-white mb-2 group-hover:text-vibrant-green transition-colors">{title}</div>
    <div className="text-sm text-gray-400 italic font-medium">{status}</div>
  </div>
);

export default Hero;
