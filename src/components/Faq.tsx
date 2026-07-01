/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqItems } from '../data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first question

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-900/40 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-950/30 border border-gold-900/40 px-3 py-1 rounded-full">
            Tudnivalók
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Gyakori Kérdések & Tippek
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-xl mx-auto">
            Összegyűjtöttük a legfontosabb kérdéseket az automata szolárium működésével és a higiéniával kapcsolatban.
          </p>
        </div>

        {/* Faq List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none transition-colors group"
                >
                  <div className="flex items-start space-x-3 pr-4">
                    <HelpCircle className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="font-semibold text-white group-hover:text-gold-400 transition-colors text-sm sm:text-base">
                      {item.question}
                    </span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded-lg text-zinc-400 shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 border-t border-zinc-900/80 pt-4">
                        <p className="text-sm text-zinc-400 font-light leading-relaxed pl-8">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Alert Box */}
        <div className="bg-gradient-to-r from-gold-950/40 to-zinc-950 border border-gold-800/20 p-6 rounded-3xl mt-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-white font-semibold text-base">További kérdésed van a szalonnal kapcsolatban?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Keress minket bátran telefonon vagy üzenetben, szívesen segítünk!</p>
          </div>
          <a
            href="tel:06203272558"
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-gold-500/20 text-gold-400 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm tracking-wide transition-all"
          >
            Hívás: 06 20 327 2558
          </a>
        </div>

      </div>
    </section>
  );
}
