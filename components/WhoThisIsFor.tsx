
import React from 'react';
import { Check, X } from 'lucide-react';

const WhoThisIsFor: React.FC = () => {
  const forList = [
    "Service businesses (HVAC, Plumbing, Roofing)",
    "Local operators ready to scale revenue",
    "Businesses starving for phone calls & leads",
    "Owners tired of bloated agency retainers"
  ];

  const notForList = [
    "Personal blogs or hobby projects",
    "Complex web portals / SaaS platforms",
    "Large e-commerce marketplaces",
    "Cheap, slow DIY 'business cards'"
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6">Who This Is For</h2>
          <p className="text-gray-500 text-lg sm:text-xl font-medium">We only partner with businesses we know we can scale.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* For List */}
          <div className="p-8 sm:p-12 rounded-3xl sm:rounded-[48px] bg-green-950/20 border-2 border-vibrant-green/30 hover:border-vibrant-green transition-all duration-500 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 flex items-center text-vibrant-green">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-vibrant-green text-black flex items-center justify-center mr-4 sm:mr-5 neon-glow">
                {/* Fixed invalid sm:size prop by using Tailwind classes for responsive sizing */}
                <Check className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={4} />
              </div>
              YES — This IS for you:
            </h3>
            <ul className="space-y-6 sm:space-y-8">
              {forList.map((item, idx) => (
                <li key={idx} className="flex items-start text-xl sm:text-2xl text-white font-bold">
                  {/* Fixed invalid sm:size prop by using Tailwind classes for responsive sizing */}
                  <Check className="text-vibrant-green mr-4 sm:mr-6 shrink-0 mt-1 w-6 h-6 sm:w-7 sm:h-7" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not For List */}
          <div className="p-8 sm:p-12 rounded-3xl sm:rounded-[48px] bg-red-950/20 border-2 border-vibrant-red/30 hover:border-vibrant-red transition-all duration-500 opacity-80 lg:opacity-60 hover:opacity-100">
            <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 flex items-center text-vibrant-red">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-vibrant-red text-white flex items-center justify-center mr-4 sm:mr-5 neon-glow-red">
                {/* Fixed invalid sm:size prop by using Tailwind classes for responsive sizing */}
                <X className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={4} />
              </div>
              NO — This is NOT for you:
            </h3>
            <ul className="space-y-6 sm:space-y-8">
              {notForList.map((item, idx) => (
                <li key={idx} className="flex items-start text-xl sm:text-2xl text-gray-400 font-bold">
                  {/* Fixed invalid sm:size prop by using Tailwind classes for responsive sizing */}
                  <X className="text-vibrant-red mr-4 sm:mr-6 shrink-0 mt-1 w-6 h-6 sm:w-7 sm:h-7" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
