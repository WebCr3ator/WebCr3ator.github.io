/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Clock, Facebook, Navigation, ExternalLink, Sun, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Coordinates for Mór, Vértes u. 8/a (approx for static map query link)
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Mór,+Vértes+u.+8/a,+8060";
  const facebookUrl = "https://www.facebook.com/p/Konkurencia-Automata-Szol%C3%A1rium-61584024188565/";

  return (
    <footer id="contact" className="bg-zinc-950 border-t border-gold-950/20 pt-20 pb-10 relative">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-950 via-gold-500/20 to-zinc-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900/80">
          
          {/* Brand & Intro Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2 group">
              <Sun className="h-8 w-8 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white">
                  KONKURENCIA
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-gold-400 font-sans font-semibold">
                  Automata Szolárium
                </span>
              </div>
            </a>
            
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Mór legújabb prémium automata szolárium stúdiója. Önnek tervezve a hét minden napján, rendkívüli nyitvatartással, Chocolate Brown csövekkel és kényelmes, gyors zsetonos rendszerrel.
            </p>

            <div className="flex space-x-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 p-2.5 rounded-full text-zinc-400 hover:text-gold-400 transition-colors flex items-center justify-center"
                title="Kövess minket Facebookon"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Details & Hours Column */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4">
            
            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Nyitvatartás
              </h4>
              <ul className="space-y-2.5 text-sm text-zinc-300 font-light">
                <li className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium">Minden Nap</span>
                    <span className="text-xs text-zinc-500">Hétfő - Vasárnap</span>
                    <span className="block text-gold-400 font-mono mt-0.5">06:00 - 22:00</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Elérhetőségek
              </h4>
              <ul className="space-y-3.5 text-sm text-zinc-300 font-light">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="h-4.5 w-4.5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block">Címünk:</span>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-gold-400 transition-colors block text-zinc-400 underline mt-0.5"
                    >
                      Mór, Vértes u. 8/a, 8060
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Phone className="h-4.5 w-4.5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block">Telefonszám:</span>
                    <a
                      href="tel:06203272558"
                      className="font-bold hover:text-gold-400 transition-colors text-white text-xs sm:text-sm font-mono mt-0.5 block"
                    >
                      06 20 327 2558
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Location / Embed Map Guide Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Hol Találsz Minket?
            </h4>
            
            {/* Mock Visual Map Card representing exact location */}
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-4 overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
              
              {/* Graphic background styled as a premium dark vector map */}
              <div className="h-28 bg-zinc-950 relative rounded-lg border border-zinc-850 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute h-px w-full bg-zinc-700 top-1/3"></div>
                  <div className="absolute h-px w-full bg-zinc-700 top-2/3"></div>
                  <div className="absolute w-px h-full bg-zinc-700 left-1/3"></div>
                  <div className="absolute w-px h-full bg-zinc-700 left-2/3"></div>
                </div>
                {/* Visual Radar Pulse marker */}
                <div className="absolute flex items-center justify-center z-10">
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-gold-400/20 animate-ping"></span>
                  <div className="h-5 w-5 rounded-full bg-gold-500 border-2 border-white flex items-center justify-center shadow-lg">
                    <Sun className="h-3 w-3 text-zinc-950 fill-current" />
                  </div>
                </div>
                <div className="absolute text-[10px] text-zinc-600 font-mono bottom-1 right-2">Mór, Vértes u. 8/a</div>
              </div>

              {/* Map Actions */}
              <div className="relative z-20 mt-3 flex justify-between items-center">
                <div>
                  <span className="block text-[11px] font-bold text-white uppercase tracking-wider">Konkurencia Szoli</span>
                  <span className="text-[10px] text-zinc-500">Mór, Vértes u. 8/a</span>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-zinc-950 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border border-gold-800/30 hover:border-gold-500 shadow-md"
                  id="footer-google-maps-btn"
                >
                  <Navigation className="h-3 w-3" />
                  <span>Útvonalterv</span>
                </a>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 font-light font-sans">
              * A szalon a Vértes utcában könnyen megközelíthető, közvetlenül a bejárat előtt kényelmes parkolási lehetőséggel.
            </p>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-xs gap-4">
          <div className="text-center md:text-left">
            <p>© {currentYear} Konkurencia Automata Szolárium Mór. Minden jog fenntartva.</p>
            <p className="text-[10px] text-zinc-700 mt-1">Chocolate Brown® csövek, álló és fekvő szolárium gépek.</p>
          </div>
          
          <div className="flex items-center space-x-1.5 text-zinc-500 font-sans">
            <Sparkles className="h-3.5 w-3.5 text-gold-500/40" />
            <span>Kellemes barnulást kívánunk!</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
