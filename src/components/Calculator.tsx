/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Clock, Info, Shield, CheckCircle, Flame, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { skinTypes } from '../data';

export default function Calculator() {
  const [minutes, setMinutes] = useState<number>(8);
  const [selectedSkinType, setSelectedSkinType] = useState<number>(3); // Default to III (Normal)

  const pricePerMinute = 170;
  const totalCost = minutes * pricePerMinute;

  // Handles skin type change and sets recommended starting minutes
  const handleSkinTypeSelect = (typeId: number) => {
    setSelectedSkinType(typeId);
    if (typeId === 1) setMinutes(4);
    else if (typeId === 2) setMinutes(6);
    else if (typeId === 3) setMinutes(8);
    else if (typeId === 4) setMinutes(10);
  };

  const activeSkin = skinTypes.find((s) => s.type === selectedSkinType) || skinTypes[2];

  return (
    <section id="calculator" className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,137,61,0.03),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-950/30 border border-gold-900/40 px-3 py-1 rounded-full">
            Tervező Segédlet
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Személyre Szabott Ár- és Barnulás Kalkulátor
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg">
            Válaszd ki a bőrtípusod, és tudd meg, mennyi idő javasolt az egészséges barna szín eléréséhez, valamint kalkuláld ki a pontos árat előre!
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Skin Type Selector & Tanning suggestions */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gold-400" />
                <span>1. Válaszd ki a Bőrtípusodat!</span>
              </h3>

              {/* Skin Type Grid */}
              <div className="grid grid-cols-2 gap-3">
                {skinTypes.map((skin) => (
                  <button
                    key={skin.type}
                    onClick={() => handleSkinTypeSelect(skin.type)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-full relative overflow-hidden ${
                      selectedSkinType === skin.type
                        ? 'bg-zinc-900 border-gold-500 shadow-md shadow-gold-500/5'
                        : 'bg-zinc-950/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-950/80'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-gold-400 font-mono">Bőrtípus {skin.type}</span>
                        {selectedSkinType === skin.type && (
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-400"></span>
                        )}
                      </div>
                      <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">
                        {skin.name.replace(/^\w+\.\s+/, '')}
                      </h4>
                    </div>
                    
                    <p className="text-[11px] text-zinc-500 font-sans mt-3 line-clamp-1">
                      {skin.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Active Skin Type Details panel */}
              <div className="bg-zinc-950 border border-zinc-850 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                {/* Subtle visual decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-xl"></div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-900 pb-2">
                  <span className="text-xs text-zinc-400 uppercase font-bold tracking-wide">
                    {activeSkin.name} jellemzői:
                  </span>
                  <div className="flex items-center space-x-1 bg-gold-500/10 text-gold-400 px-2.5 py-0.5 rounded text-xs font-medium border border-gold-800/10">
                    <Flame className="h-3 w-3 shrink-0" />
                    <span>Bőrtípus-specifikus tipp</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div>
                    <span className="text-zinc-500 block">Leírás:</span>
                    <span className="text-zinc-300 font-light block mt-0.5">{activeSkin.description}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Barnulási reakció:</span>
                    <span className="text-zinc-300 font-light block mt-0.5">{activeSkin.tanTendency}</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl mt-3 flex items-start space-x-2.5">
                  <CheckCircle className="h-4.5 w-4.5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase font-bold block">Javasolt időtartam</span>
                    <p className="text-xs sm:text-sm text-gold-300 font-medium mt-0.5">
                      {activeSkin.recommendedMinutes}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-zinc-950/80 border border-zinc-850/80 p-4 rounded-xl text-xs text-zinc-400">
              <Info className="h-4 w-4 text-gold-500 shrink-0" />
              <span>A bőrtípus megállapítása segít megelőzni a kellemetlen bőrpírt. Ha bizonytalan vagy, mindig az alacsonyabb percekkel kezdd!</span>
            </div>
          </div>

          {/* Right Side: Interactive Minutes Slider & Bill calculator */}
          <div className="lg:col-span-5 bg-zinc-900/70 border border-gold-800/15 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden shadow-2xl">
            {/* Top gold line indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-amber-500"></div>

            <div className="space-y-6">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gold-400" />
                <span>2. Állítsd be a kívánt perceket!</span>
              </h3>

              {/* Minute display circles */}
              <div className="text-center py-6 relative">
                <div className="relative inline-flex items-center justify-center">
                  {/* Outer circle layout */}
                  <div className="w-36 h-36 rounded-full border-2 border-gold-800/10 flex flex-col justify-center items-center bg-zinc-950 shadow-inner">
                    <span className="text-5xl font-display font-extrabold text-white tracking-tighter">
                      {minutes}
                    </span>
                    <span className="text-xs uppercase text-zinc-500 tracking-widest font-bold mt-1">
                      perc
                    </span>
                  </div>
                  {/* Floating effect decoration */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>Minimum: 1 perc</span>
                  <span>Maximum: 20 perc</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={minutes}
                  onChange={(e) => setMinutes(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  id="minutes-range-slider"
                />
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-light">Kiválasztva:</span>
                  <span className="text-gold-400 font-bold font-mono">{minutes} perc a szoláriumban</span>
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="border-t border-zinc-800/85 pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400 font-light">Egységár (Chocolate Brown csövek):</span>
                  <span className="text-zinc-300 font-semibold font-mono">170 Ft / perc</span>
                </div>
                
                <div className="flex justify-between items-baseline bg-zinc-950/80 border border-zinc-850 p-4 rounded-xl">
                  <span className="text-sm font-semibold text-white">Várható fizetendő összeg:</span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-gold-400 font-mono">
                      {totalCost.toLocaleString('hu-HU')}
                    </span>
                    <span className="text-sm font-bold text-gold-400 font-sans ml-1">Ft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical payment instructions info */}
            <div className="bg-zinc-950/50 border border-zinc-850 p-4 rounded-2xl space-y-2.5">
              <div className="flex items-center space-x-1.5">
                <Sparkles className="h-4 w-4 text-gold-500 shrink-0" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Hogyan fizethetek?</span>
              </div>
              <ul className="text-[11px] text-zinc-400 font-light list-disc list-inside space-y-1">
                <li>Automata zsetonvásárló gépünk papírpénzt és érmét is elfogad.</li>
                <li>Az egyes fülkék melletti bevezetőknél közvetlenül is fizethet érmével.</li>
                <li>A gép kijelzi a fennmaradó perceket, és gombnyomással indítható.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
