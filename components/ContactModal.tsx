
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    serviceArea: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormState({ name: '', business: '', phone: '', email: '', serviceArea: '' });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg glass-card rounded-3xl border border-gray-800 shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-white mb-2">Book Your Live Demo</h3>
              <p className="text-gray-400">See your business transformed in 20 minutes.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Business Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Acme HVAC"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    value={formState.business}
                    onChange={e => setFormState({...formState, business: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Area</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Houston, TX"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    value={formState.serviceArea}
                    onChange={e => setFormState({...formState, serviceArea: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="(555) 000-0000"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                  value={formState.phone}
                  onChange={e => setFormState({...formState, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-gray-950 font-bold py-4 rounded-xl transition-all neon-glow flex items-center justify-center space-x-2 mt-4"
              >
                <span>Request My Slot</span>
                <Send size={18} />
              </button>
            </form>
          </>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-gray-950" size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-white">Success!</h3>
            <p className="text-gray-400">One of our specialists will reach out to you within 24 hours to schedule your live demo.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
