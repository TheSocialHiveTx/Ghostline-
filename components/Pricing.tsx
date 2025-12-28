
import React from 'react';
import { Check, Info, Phone } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black">Pricing Snapshot</h2>
          <p className="text-gray-500 text-lg sm:text-xl font-medium">No fluff. No hidden fees. Just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1 */}
          <div className="glass-card p-8 sm:p-10 rounded-2xl sm:rounded-[40px] border border-white/5 flex flex-col hover:border-white/20 transition-all">
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">Paid Demo</h3>
            <div className="text-4xl sm:text-5xl font-black mb-6 sm:mb-8 text-white">$199</div>
            <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-10 font-medium">
              See the future of your business. Fully credited toward your final build.
            </p>
            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-grow">
              <li className="flex items-center text-base sm:text-lg font-bold text-gray-300"><Check className="text-vibrant-green w-5 h-5 sm:w-6 sm:h-6 mr-3" /> Live functional demo</li>
              <li className="flex items-center text-base sm:text-lg font-bold text-gray-300"><Check className="text-vibrant-green w-5 h-5 sm:w-6 sm:h-6 mr-3" /> Custom strategy session</li>
            </ul>
            <a href="tel:+13462872135" className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-white/10 hover:border-vibrant-green hover:text-vibrant-green font-black transition-all text-center flex items-center justify-center text-lg sm:text-xl">
              <Phone size={18} className="mr-3" /> BOOK DEMO
            </a>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-black p-8 sm:p-10 rounded-2xl sm:rounded-[40px] border-4 border-vibrant-green relative flex flex-col md:transform md:-translate-y-8 shadow-[0_0_60px_rgba(0,255,102,0.2)] z-20 order-first md:order-none">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-vibrant-green text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,102,0.5)]">
              MOST POPULAR
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-vibrant-green">Full Website</h3>
            <div className="text-5xl sm:text-6xl font-black mb-6 sm:mb-8 text-white">$999 <span className="text-lg sm:text-xl font-bold text-gray-600">total</span></div>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 font-bold">
              The ultimate lead-generation engine. Designed to dominate.
            </p>
            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-grow">
              <li className="flex items-center text-base sm:text-lg font-black text-white"><Check className="text-vibrant-green w-6 h-6 sm:w-7 sm:h-7 mr-4" /> Everything in Demo</li>
              <li className="flex items-center text-base sm:text-lg font-black text-white"><Check className="text-vibrant-green w-6 h-6 sm:w-7 sm:h-7 mr-4" /> Full multi-page setup</li>
              <li className="flex items-center text-base sm:text-lg font-black text-white"><Check className="text-vibrant-green w-6 h-6 sm:w-7 sm:h-7 mr-4" /> Advanced Lead Tracking</li>
              <li className="flex items-center text-base sm:text-lg font-black text-white"><Check className="text-vibrant-green w-6 h-6 sm:w-7 sm:h-7 mr-4" /> CRM Integration</li>
            </ul>
            <a href="tel:+13462872135" className="w-full py-5 sm:py-6 rounded-xl sm:rounded-2xl bg-vibrant-green text-black font-black transition-all hover:scale-105 neon-glow text-center flex items-center justify-center text-xl sm:text-2xl">
              <Phone size={22} className="mr-3 fill-current" /> GET STARTED
            </a>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 sm:p-10 rounded-2xl sm:rounded-[40px] border border-white/5 flex flex-col hover:border-white/20 transition-all">
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">Upkeep</h3>
            <div className="text-4xl sm:text-5xl font-black mb-6 sm:mb-8 text-white">$149 <span className="text-lg sm:text-xl font-bold text-gray-600">/mo</span></div>
            <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-10 font-medium">
              24/7 technical superiority. We handle the code, you handle the clients.
            </p>
            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-grow">
              <li className="flex items-center text-base sm:text-lg font-bold text-gray-300"><Check className="text-vibrant-green w-5 h-5 sm:w-6 sm:h-6 mr-3" /> Premium Hosting</li>
              <li className="flex items-center text-base sm:text-lg font-bold text-gray-300"><Check className="text-vibrant-green w-5 h-5 sm:w-6 sm:h-6 mr-3" /> Unlimited small edits</li>
              <li className="flex items-center text-base sm:text-lg font-bold text-gray-300"><Check className="text-vibrant-green w-5 h-5 sm:w-6 sm:h-6 mr-3" /> Security & Backups</li>
            </ul>
            <a href="tel:+13462872135" className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-white/10 hover:border-vibrant-green hover:text-vibrant-green font-black transition-all text-center flex items-center justify-center text-lg sm:text-xl">
              <Phone size={18} className="mr-3" /> CHOOSE PLAN
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex items-center justify-center space-x-2 md:space-x-3 text-gray-600 font-bold px-4 text-center">
          <Info size={18} className="text-vibrant-green shrink-0" />
          <span className="uppercase tracking-widest text-[10px] sm:text-sm">No long-term contracts. Cancel anytime.</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
