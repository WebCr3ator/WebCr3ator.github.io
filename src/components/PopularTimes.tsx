/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Clock, Info, UserCheck, Activity, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface HourTraffic {
  hour: string;
  level: number; // 0 to 100 representing busy percentage
  status: 'quiet' | 'moderate' | 'busy';
}

export default function PopularTimes() {
  const [selectedDay, setSelectedDay] = useState<string>('Hétfő');

  const days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];

  // Base hourly traffic data structure matching typical tanning studio traffic
  // Opens 6:00 to 22:00
  const getTrafficData = (day: string): HourTraffic[] => {
    const isWeekend = day === 'Szombat' || day === 'Vasárnap';
    
    if (isWeekend) {
      return [
        { hour: '06h', level: 15, status: 'quiet' },
        { hour: '08h', level: 30, status: 'quiet' },
        { hour: '10h', level: 65, status: 'moderate' },
        { hour: '12h', level: 55, status: 'moderate' },
        { hour: '14h', level: 45, status: 'quiet' },
        { hour: '16h', level: 60, status: 'moderate' },
        { hour: '18h', level: 75, status: 'busy' }, // peak weekend evening
        { hour: '20h', level: 50, status: 'moderate' },
        { hour: '22h', level: 10, status: 'quiet' },
      ];
    }
    
    // Weekday traffic distribution
    return [
      { hour: '06h', level: 20, status: 'quiet' },
      { hour: '08h', level: 40, status: 'quiet' },
      { hour: '10h', level: 50, status: 'moderate' },
      { hour: '12h', level: 35, status: 'quiet' },
      { hour: '14h', level: 30, status: 'quiet' },
      { hour: '16h', level: 65, status: 'moderate' },
      { hour: '18h', level: 85, status: 'busy' }, // 6 pm peak!
      { hour: '20h', level: 55, status: 'moderate' },
      { hour: '22h', level: 15, status: 'quiet' },
    ];
  };

  const currentTraffic = getTrafficData(selectedDay);

  const getStatusColor = (status: 'quiet' | 'moderate' | 'busy') => {
    switch (status) {
      case 'quiet':
        return 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400';
      case 'moderate':
        return 'bg-amber-500/20 border-amber-500/30 text-amber-400';
      case 'busy':
        return 'bg-rose-500/20 border-rose-500/30 text-rose-400';
    }
  };

  const getStatusLabel = (status: 'quiet' | 'moderate' | 'busy') => {
    switch (status) {
      case 'quiet':
        return 'Nyugodt időszak';
      case 'moderate':
        return 'Közepesen forgalmas';
      case 'busy':
        return 'Népszerű időszak';
    }
  };

  return (
    <section id="popular-times" className="py-24 bg-zinc-900/30 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-950/30 border border-gold-900/40 px-3 py-1 rounded-full">
            Tervezz Előre
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Népszerű Időszakok & Forgalom
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg">
            Kerüld el a sorban állást! Tekintsd meg, mikor a legnépszerűbb a szalonunk, és mikor találod a legtöbb szabad gépet.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                selectedDay === day
                  ? 'bg-gold-500 border-gold-500 text-zinc-950 shadow-md shadow-gold-500/10'
                  : 'bg-zinc-950/50 border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Graphical Traffic Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Traffic Visualizer (Bar chart) */}
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-850 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-[350px]">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-4">
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Activity className="h-4 w-4 text-gold-400" />
                Várható terheltség - {selectedDay}
              </span>
              <div className="flex gap-4 text-[10px] sm:text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>Szabad</span>
                </div>
                <div className="flex items-center gap-1.5 text-rose-400">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                  <span>Népszerű</span>
                </div>
              </div>
            </div>

            {/* Custom Bar Chart */}
            <div className="flex items-end justify-between h-48 px-2 sm:px-4">
              {currentTraffic.map((t, index) => (
                <div key={index} className="flex flex-col items-center flex-1 space-y-3 group h-full justify-end">
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute mb-56 bg-zinc-900 border border-zinc-800 text-white text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none z-10">
                    {t.level}% terheltség
                  </div>
                  
                  {/* Visual Bar */}
                  <div className="w-6 sm:w-10 rounded-t-md relative overflow-hidden transition-all duration-500 bg-zinc-900 border border-zinc-800 flex items-end h-full">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${t.level}%` }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className={`w-full rounded-t-sm ${
                        t.level < 40 
                          ? 'bg-gradient-to-t from-emerald-600 to-emerald-500' 
                          : t.level < 70 
                            ? 'bg-gradient-to-t from-amber-600 to-amber-500' 
                            : 'bg-gradient-to-t from-rose-600 to-gold-500'
                      }`}
                    ></motion.div>
                  </div>

                  {/* Hour label */}
                  <span className="text-[10px] font-mono text-zinc-500 font-semibold">
                    {t.hour}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="text-[10px] sm:text-xs text-zinc-500 text-center mt-4 border-t border-zinc-900/80 pt-3">
              Az adatok tájékoztató jellegűek, az aktuális foglaltság ettől eltérhet.
            </div>
          </div>

          {/* Traffic Insights Card */}
          <div className="lg:col-span-4 bg-zinc-900/40 border border-zinc-850 p-6 sm:p-8 rounded-3xl space-y-6 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-white flex items-center space-x-2">
                <Users className="h-5 w-5 text-gold-400" />
                <span>Napi Összegző</span>
              </h3>

              <div className="space-y-3">
                <div className="p-4 bg-zinc-950 border border-zinc-850 rounded-2xl">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Népszerű óra</span>
                  <p className="text-sm font-semibold text-white mt-1">17:00 - 19:30 között</p>
                  <p className="text-xs text-zinc-400 font-light mt-1">A munkaidő utáni órákban (különösen 18:00 körül) általában kicsit többen vagyunk.</p>
                </div>

                <div className="p-4 bg-zinc-950 border border-zinc-850 rounded-2xl">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Ajánlott időszak</span>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">Reggel 6:00 - 10:00 és 12:00 - 15:00</p>
                  <p className="text-xs text-zinc-400 font-light mt-1">Kora reggel és a kora délutáni órákban szinte garantált, hogy azonnal sorra kerülsz.</p>
                </div>
              </div>
            </div>

            <div className="bg-gold-950/20 border border-gold-900/20 p-4 rounded-xl flex items-start gap-2.5 mt-4">
              <Info className="h-5 w-5 text-gold-400 shrink-0" />
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Egy szoláriumozás átlagos időtartama <strong className="text-white font-semibold">25 perc</strong> (felkészülés, barnulás, fertőtlenítés). A 4 nagy gépünknek köszönhetően a várakozási idő rendkívül minimális!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
