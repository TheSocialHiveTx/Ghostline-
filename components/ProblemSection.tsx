
import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const points = [
    "Load painfully slowly on mobile devices",
    "Leak leads instead of converting visitors",
    "Are a nightmare to update or fix",
    "Collect digital dust and zero revenue"
  ];

  return (
    <section id="problem" className="py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">
          Most Websites Look Fine — <br />
          <span className="text-vibrant-red neon-text-glow-red">But Don’t Generate Leads</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Business owners waste thousands on designs that fail at the only job they have: 
          growing your bottom line.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <div className="bg-red-950/20 p-6 sm:p-10 rounded-2xl sm:rounded-[40px] border-2 border-vibrant-red/30 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-vibrant-red/10 blur-[100px] rounded-full group-hover:bg-vibrant-red/20 transition-colors"></div>
          
          <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-10 flex items-center text-vibrant-red">
            <XCircle className="mr-3 sm:mr-4 w-6 h-6 sm:w-8 sm:h-8" /> The "Nice" Website Trap
          </h3>
          <ul className="space-y-4 sm:space-y-8">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-3 sm:space-x-5">
                <AlertTriangle className="w-5 h-5 sm:w-7 sm:h-7 text-vibrant-red shrink-0 mt-1 animate-pulse" />
                <span className="text-gray-200 text-lg sm:text-xl font-bold">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col justify-center space-y-6 sm:space-y-8 p-4 sm:p-6">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 leading-tight border-l-4 border-vibrant-red pl-6 sm:pl-8 italic">
            "You don’t need ‘a nice website.’ You need a site designed to turn 
            <span className="text-vibrant-red"> visitors into calls </span> 
            and cash flow."
          </div>
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed font-medium">
            Stop treating your website like a digital business card. It should be 
            your most aggressive salesperson, closing deals 24/7/365.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
