/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import PopularTimes from './components/PopularTimes';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { ArrowUp, Phone, Sun } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-zinc-950">
      
      {/* Background radial gradient overlay across the whole site for luxury feel */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(24,24,27,0.85),_rgba(9,9,11,1))] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Sticky Header */}
        <Header />

        {/* Main Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Services & Machinery */}
          <Services />

          {/* Interactive Calculator */}
          <Calculator />

          {/* Popular / Traffic Times */}
          <PopularTimes />

          {/* Google Reviews */}
          <Reviews />

          {/* Frequently Asked Questions */}
          <Faq />
        </main>

        {/* Informative Footer */}
        <Footer />
      </div>

      {/* Floating Call to Action and Back to Top Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Quick mobile floating call button */}
        <a
          href="tel:06203272558"
          className="md:hidden flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 shadow-lg shadow-gold-500/20 active:scale-95 transition-transform"
          title="Hívás most"
          id="floating-phone-btn"
        >
          <Phone className="h-5 w-5" />
        </a>

        {/* Back to top scroll button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center h-12 w-12 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-gold-500/30 text-gold-400 hover:text-white shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
            title="Ugrás a tetejére"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>

    </div>
  );
}
