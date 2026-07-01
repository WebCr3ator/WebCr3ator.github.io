/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, Sun, CheckCircle, Smartphone, Scissors, HelpCircle, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { tanningMachines, manicureServices } from '../data';

const manicureImg = "/src/assets/images/manicure_nails_1782858447430.jpg";

export default function Services() {
  const [activeTab, setActiveTab] = useState<'tanning' | 'beauty'>('tanning');
  const [selectedMachine, setSelectedMachine] = useState<typeof tanningMachines[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-zinc-900/50 border-y border-gold-950/20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-950/30 border border-gold-900/40 px-3 py-1 rounded-full">
            Kínálatunk
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Szolgáltatásaink & Gépparkunk
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg">
            Mór legmodernebb önkiszolgáló szoláriuma kiegészítve professzionális manikűr és tartós zselés műkörömépítéssel.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('tanning')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'tanning'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 shadow-md shadow-gold-500/10'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sun className="h-4 w-4" />
              <span>Szolárium (4 Gép)</span>
            </button>
            <button
              onClick={() => setActiveTab('beauty')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'beauty'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 shadow-md shadow-gold-500/10'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Scissors className="h-4 w-4" />
              <span>Manikűr & Műköröm</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'tanning' ? (
            <motion.div
              key="tanning-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Info alert box */}
              <div className="bg-zinc-950/80 border border-gold-950/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500/10 p-3 rounded-full border border-gold-800/20 shrink-0">
                    <Sparkles className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Eredeti Chocolate Brown Csövek</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Minden gépünkben a prémium minőségű csokicsövek üzemelnek, amelyek garantálják az egyenletes, mélybarnulást és a hosszan tartó csokoládé színt leégés nélkül.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl shrink-0 text-center">
                  <span className="block text-[10px] uppercase text-zinc-400 tracking-wider font-semibold">Egységes ár</span>
                  <span className="text-lg font-bold text-gold-400">170 Ft / Perc</span>
                </div>
              </div>

              {/* Machine Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-6">
                {tanningMachines.map((machine, index) => (
                  <motion.div
                    key={machine.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-zinc-950/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 hover:border-gold-500/20 transition-all flex flex-col justify-between group relative overflow-hidden shadow-xl"
                  >
                    {/* Background faint card decorations */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold-600/5 rounded-full blur-2xl group-hover:bg-gold-600/10 transition-colors"></div>

                    <div className="space-y-4">
                      {/* Badge / Type */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-950/40 border border-gold-900/55 px-2.5 py-1 rounded-md">
                          {machine.type === 'lying' ? 'Fekvő Gép' : 'Álló Gép'}
                        </span>
                        <span className="text-xs text-zinc-500 font-mono">
                          {machine.tubes}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                        {machine.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 font-light leading-relaxed">
                        {machine.description}
                      </p>

                      {/* Bullet Features */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {machine.features.slice(0, 4).map((feat, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-zinc-300">
                            <CheckCircle className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action in Card footer */}
                    <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-900/80">
                      <div className="text-xs text-zinc-500">
                        Ajánlott idő: <span className="text-zinc-300 font-semibold">4 - {machine.maxMinutes} perc</span>
                      </div>
                      <button
                        onClick={() => setSelectedMachine(machine)}
                        className="flex items-center space-x-1.5 text-xs font-bold text-gold-400 group-hover:text-gold-300 transition-colors bg-gold-500/5 hover:bg-gold-500/10 border border-gold-500/15 hover:border-gold-500/30 px-3 py-1.5 rounded-lg"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Részletek</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="beauty-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl relative group">
                  <img
                    src={manicureImg}
                    alt="Elegáns manikűr és műköröm díszítés"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                  
                  {/* Overlay banner */}
                  <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 border border-gold-800/30 p-4 rounded-2xl backdrop-blur-md">
                    <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block mb-1">Bejelentkezés</span>
                    <p className="text-sm text-white font-medium">Hívd a szalon körmösét közvetlenül az alábbi számon!</p>
                  </div>
                </div>
                {/* Glow ring under image */}
                <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
              </div>

              {/* Service list side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">Kéz- és Körömápolás</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Manikűr & Műköröm Szolgáltatások</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Szépülj nálunk tetőtől talpig! A modern zselés műkörömépítéstől és a tartós erősített gél lakktól a klasszikus japán és hagyományos ápoló manikűrig minden igényt kielégítünk.
                  </p>
                </div>

                <div className="space-y-4">
                  {manicureServices.map((service) => (
                    <div
                      key={service.id}
                      className="bg-zinc-950/60 border border-zinc-800/80 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-gold-500/10 transition-all"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-gold-500 shrink-0" />
                          <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg pl-6">
                          {service.description}
                        </p>
                        
                        {/* Bullet Details */}
                        {service.details && (
                          <div className="flex flex-wrap gap-x-4 gap-y-1 pl-6 pt-1 text-[11px] text-zinc-500 font-sans">
                            {service.details.map((detail, index) => (
                              <span key={index} className="flex items-center space-x-1">
                                <span className="h-1 w-1 rounded-full bg-gold-500 inline-block"></span>
                                <span>{detail}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="sm:text-right shrink-0 bg-zinc-900 border border-zinc-800 sm:border-0 sm:bg-transparent p-3 sm:p-0 rounded-xl flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-400 sm:mb-1 block">Kezdőár</span>
                        <span className="text-base sm:text-lg font-bold text-gold-400">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Call-to-action */}
                <div className="bg-zinc-950/40 border border-gold-950/20 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-xs text-zinc-400">A köröm szolgáltatásokra előzetes egyeztetés szükséges:</p>
                    <p className="text-lg font-bold text-white tracking-wide mt-1">+36 20 327 2558</p>
                  </div>
                  <a
                    href="tel:06203272558"
                    className="flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-gold-500/5 w-full sm:w-auto justify-center"
                    id="manicure-book-btn"
                  >
                    <Smartphone className="h-4 w-4" />
                    <span>Bejelentkezés telefonon</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Machine Details Modal */}
        <AnimatePresence>
          {selectedMachine && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
              id="machine-modal-backdrop"
              onClick={() => setSelectedMachine(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900 border border-gold-800/20 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl text-left"
                id="machine-modal-container"
                onClick={(e) => e.stopPropagation()} // Prevent close on card click
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMachine(null)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 rounded-full transition-colors"
                  aria-label="Bezárás"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Modal Title and details */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                      {selectedMachine.type === 'lying' ? 'Fekvő szolárium gép' : 'Álló szolárium gép'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                      {selectedMachine.name}
                    </h3>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800/80 p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-500 uppercase font-sans">Cső Típusa</span>
                      <p className="text-sm font-bold text-gold-400 mt-0.5">{selectedMachine.tubes}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zinc-500 uppercase font-sans">Percdíj</span>
                      <p className="text-sm font-bold text-gold-400 mt-0.5">170 Ft / Perc</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-2">
                      Részletes leírás
                    </h4>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      {selectedMachine.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-3">
                      Beépített extrák és jellemzők
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedMachine.features.map((feat, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-zinc-950/50 border border-zinc-850 p-2.5 rounded-lg text-xs text-zinc-300"
                        >
                          <CheckCircle className="h-4 w-4 text-gold-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggestion Info */}
                  <div className="bg-amber-950/20 border border-amber-900/30 p-4 rounded-xl flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                        Használati útmutató & Javaslat
                      </h5>
                      <p className="text-xs text-zinc-400 mt-1">
                        Ehhez a géphez első alkalommal legfeljebb 5-6 perc használatot javasolunk. Ha már alapozott a színe, legfeljebb {selectedMachine.maxMinutes} percet töltsön el az egyenletes csokoládé tónus megőrzésére.
                      </p>
                    </div>
                  </div>

                  {/* Modal Action Footer */}
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setSelectedMachine(null)}
                      className="bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all w-full sm:w-auto"
                    >
                      Bezárás
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
