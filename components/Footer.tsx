
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-900 bg-gray-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center font-bold text-gray-950 text-xs">G</div>
            <span className="text-lg font-bold text-white neon-text-glow">GhostLine</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 GhostLine Consultants. All rights reserved.</p>
        </div>

        <div className="flex space-x-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#how-it-works" className="hover:text-green-400 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-green-400 transition-colors">Impact</a>
          <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
        </div>

        <div className="text-center md:text-right">
          <a href="tel:+13462872135" className="text-white font-bold text-lg hover:text-green-400 transition-colors block mb-1">
            (346) 287-2135
          </a>
          <div className="text-gray-500 text-xs">Based in H-Town, TX</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
