
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#how-it-works', hasDropdown: true },
    { name: 'Recovery Impact', href: '#pricing' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-vibrant-green rounded-md flex items-center justify-center font-black text-black">G</div>
          <span className="text-xl font-black tracking-tight text-white neon-text-glow">GhostLine</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-gray-400 hover:text-vibrant-green flex items-center transition-colors"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
            </a>
          ))}
          <a 
            href="tel:+13462872135"
            className="flex items-center bg-vibrant-green hover:brightness-110 text-black px-6 py-2.5 rounded-xl font-black text-sm transition-all transform hover:scale-105 neon-glow"
          >
            <Phone size={14} className="mr-2 fill-current" />
            CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-gray-300 hover:text-vibrant-green"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+13462872135"
            className="bg-vibrant-green text-black w-full py-4 rounded-xl font-black text-center flex items-center justify-center neon-glow"
          >
            <Phone size={18} className="mr-2 fill-current" />
            CALL NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
