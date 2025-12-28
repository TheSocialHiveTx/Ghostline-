
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhatIsIncluded: React.FC = () => {
  const inclusions = [
    "Custom lead-generation website",
    "Fast, static build (excellent performance)",
    "Mobile-first design",
    "Contact forms & call routing",
    "Basic SEO setup",
    "Unlimited small edits (monthly plan)",
    "Domain management & hosting",
    "Analytics & Conversion tracking"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto glass-card rounded-[32px] p-10 md:p-16 border border-gray-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-white">What’s Included</h2>
            <p className="text-gray-400">
              We provide everything you need to dominate your local market online. 
              No hidden fees, no complicated setup.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <span className="text-lg text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIncluded;
