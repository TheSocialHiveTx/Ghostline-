
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Paid Demo",
      description: "We build a live demo website for your business: Custom copy, Your services & location, Clear calls-to-action, Mobile-optimized. Built in about 20 minutes. Small down payment required."
    },
    {
      step: "02",
      title: "Fine-Tune Together",
      description: "Over a few days, we refine the site: Adjust messaging, Improve conversion flow, Polish branding & layout, Optimize mobile experience. Focused, collaborative, and time-boxed."
    },
    {
      step: "03",
      title: "Launch & Deliver",
      description: "Once you’re happy: Final payment is made, Site goes live on your domain, Analytics, forms, and tracking are connected."
    },
    {
      step: "04",
      title: "Monthly Upkeep",
      description: "We handle: Hosting, Updates & small edits, Performance & uptime, Ongoing optimization. One simple monthly fee. No headaches."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">How It Works</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collaborative process designed to get you results fast without the friction 
            of traditional agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="reveal relative group p-8 glass-card rounded-3xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-6xl font-black text-gray-800/50 mb-6 group-hover:text-green-500/20 transition-colors">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
              
              {/* Connector for desktop (last one excluded) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-green-500/30 to-transparent z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
