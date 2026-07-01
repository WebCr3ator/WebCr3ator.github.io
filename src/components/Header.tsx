/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sun, Phone, Clock, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [salonOpenStatus, setSalonOpenStatus] = useState({ isOpen: true, text: 'Nyitva' });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      // Salon is open everyday from 6:00 to 22:00 (6 am to 10 pm)
      if (hours >= 6 && hours < 22) {
        setSalonOpenStatus({ isOpen: true, text: 'Nyitva vagyunk (6:00 - 22:00)' });
      } else {
        setSalonOpenStatus({ isOpen: false, text: 'Zárva vagyunk (Nyitás: 6:00)' });
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'Főoldal', href: '#home' },
    { name: 'Szolgáltatások', href: '#services' },
    { name: 'Kalkulátor & Árak', href: '#calculator' },
    { name: 'Vélemények', href: '#reviews' },
    { name: 'Kapcsolat', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-gold-800/20 py-3 shadow-lg'
          : 'bg-gradient-to-b from-zinc-950/80 to-transparent py-5'
      }`}
      id="app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sun className="h-8 w-8 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-md group-hover:bg-gold-500/30 transition-all"></div>
            </div>
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white">
                KONKURENCIA
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-gold-400 font-sans font-semibold">
                Automata Szolárium
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action elements */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Open badge */}
            <div className="flex items-center space-x-2 bg-zinc-900/80 border border-gold-800/30 px-3 py-1.5 rounded-full text-xs font-medium">
              <span
                className={`h-2.5 w-2.5 rounded-full inline-block ${
                  salonOpenStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                }`}
              ></span>
              <span className="text-zinc-300 font-sans">{salonOpenStatus.text}</span>
            </div>

            {/* Direct Call Button */}
            <a
              href="tel:06203272558"
              className="flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-zinc-950 font-bold px-4 py-2 rounded-full text-xs sm:text-sm tracking-wide shadow-md shadow-gold-950/20 hover:shadow-gold-500/10 transition-all transform hover:-translate-y-0.5"
              id="header-call-btn"
            >
              <Phone className="h-4 w-4" />
              <span>06 20 327 2558</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-3">
            <a
              href="tel:06203272558"
              className="bg-gold-500 hover:bg-gold-400 text-zinc-950 p-2 rounded-full shadow-md transition-colors"
              title="Hívás most"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white p-2 focus:outline-none"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-zinc-950 border-t border-gold-950/30 overflow-hidden shadow-2xl"
            id="mobile-navigation-panel"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Open badge for mobile */}
              <div className="flex items-center space-x-2 bg-zinc-900 border border-gold-950/50 px-3 py-2 rounded-xl text-xs font-medium mb-3">
                <span
                  className={`h-2 w-2 rounded-full inline-block ${
                    salonOpenStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                  }`}
                ></span>
                <span className="text-zinc-300 font-sans">{salonOpenStatus.text}</span>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-gold-400 hover:bg-zinc-900/50 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 border-t border-zinc-900 flex flex-col space-y-3">
                <div className="flex items-center text-xs text-zinc-400 px-4 space-x-2">
                  <Clock className="h-3.5 w-3.5 text-gold-500" />
                  <span>Nyitva: Hétfő - Vasárnap: 06:00 - 22:00</span>
                </div>
                <div className="flex items-center text-xs text-zinc-400 px-4 space-x-2">
                  <MapPin className="h-3.5 w-3.5 text-gold-500" />
                  <span>Mór, Vértes u. 8/a, 8060</span>
                </div>

                <a
                  href="tel:06203272558"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 font-bold py-3 rounded-xl tracking-wide text-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>Hívás: 06 20 327 2558</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
