/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Star, Clock, ShieldCheck, Sun } from 'lucide-react';
import { motion } from 'motion/react';

const heroBg = "/src/assets/images/tanning_salon_hero_1782858430815.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern Konkurencia Szolárium belső tér"
          className="w-full h-full object-cover object-center opacity-45 transform scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if there is an issue loading the file
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Gradients to blend background cleanly */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50"></div>
        
        {/* Ambient Warm Glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Rating & Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 bg-zinc-900/90 border border-gold-800/30 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <div className="flex items-center text-amber-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm font-bold text-white">4.8</span>
              </div>
              <span className="text-zinc-500">|</span>
              <span className="text-xs sm:text-sm font-semibold text-gold-300">
                71+ értékelés alapján Mór kedvenc szalonja
              </span>
            </motion.div>

            {/* Display Headings */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
              >
                Mélybarna tónus <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
                  Chocolate Brown
                </span> <br />
                csövekkel.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-light"
              >
                Üdvözöl a <strong className="text-white font-medium">Konkurencia Automata Szolárium</strong> Mór belvárosában! Prémium minőségű szoláriumgépekkel, álló és fekvő kialakításban, zsetonos automatával, hétvégén is hosszú nyitvatartással várunk.
              </motion.p>
            </div>

            {/* Quick value props list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 max-w-md text-zinc-400"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-gold-500 shrink-0" />
                <span className="text-sm font-medium">170 Ft / Perc Ár</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gold-500 shrink-0" />
                <span className="text-sm font-medium">Minden Nap 6:00 - 22:00</span>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#calculator"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-xl text-base tracking-wide shadow-xl shadow-gold-950/40 hover:shadow-gold-500/20 transition-all transform hover:-translate-y-0.5"
                id="hero-calculator-btn"
              >
                <span>Barnulás Kalkulátor</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              
              <a
                href="#services"
                className="flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/50 hover:border-gold-500/30 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
                id="hero-services-btn"
              >
                <span>Gépeink & Szolgáltatások</span>
              </a>
            </motion.div>
          </div>

          {/* Side features card - Highlight of automated features */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 bg-zinc-900/80 border border-gold-950/40 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-2xl space-y-6 relative overflow-hidden"
          >
            {/* Subtle glow border effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <h3 className="font-display font-bold text-xl text-white tracking-wide border-b border-zinc-800 pb-3">
              Miért a Konkurencia?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500/10 p-2.5 rounded-xl border border-gold-800/20 mt-0.5">
                  <Sun className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Eredeti Chocolate Brown® Csövek</h4>
                  <p className="text-sm text-zinc-400 font-light mt-0.5">
                    Az egyedülálló, természetes csokoládébarna árnyalat és hosszan tartó szín elérésére kifejlesztve.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-500/10 p-2.5 rounded-xl border border-gold-800/20 mt-0.5">
                  <Clock className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Kényelmes Automata Rendszer</h4>
                  <p className="text-sm text-zinc-400 font-light mt-0.5">
                    Nincs várakozás a recepcióra. Könnyű zsetonos indítás, teljes szabadság reggel 6 és este 10 óra között minden nap.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-500/10 p-2.5 rounded-xl border border-gold-800/20 mt-0.5">
                  <Star className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Komplett Szépségápolás</h4>
                  <p className="text-sm text-zinc-400 font-light mt-0.5">
                    A szoláriumozás mellett profi manikűr és tartós zselés műkörömépítés is vár nálunk, előzetes bejelentkezéssel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800 text-center">
              <p className="text-xs text-zinc-400 font-sans">
                Nincs szükség előzetes bejelentkezésre a szolárium gépekhez!
              </p>
              <p className="text-sm text-gold-400 font-bold tracking-wider mt-1 uppercase">
                Gyerünk bátran, várunk!
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
