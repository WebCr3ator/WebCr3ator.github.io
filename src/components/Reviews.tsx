/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Star, MessageSquare, Quote, X, Check, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { reviews as initialReviews } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  
  // New review form states
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    // Create initials
    const initials = newName
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      author: newName,
      rating: newRating,
      text: newText,
      date: 'Ma',
      initials: initials || 'V',
    };

    // Prepend new review
    setReviewsList([newReview, ...reviewsList]);
    
    // Clear states
    setNewName('');
    setNewRating(5);
    setNewText('');
    setSuccessMsg(true);
    
    // Auto close modal after showing success
    setTimeout(() => {
      setSuccessMsg(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-950/30 border border-gold-900/40 px-3 py-1 rounded-full">
              Vendégeink Véleménye
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              4.8 Csillag a Vendégeinktől
            </h2>
            <p className="text-zinc-400 font-light text-base sm:text-lg max-w-2xl">
              Nálunk a vendég elégedettsége és a makulátlan tisztaság az első. Olvasd el a legutóbbi visszajelzéseket a nálunk eltöltött percekről!
            </p>
          </div>

          {/* Big Score Box */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row items-center gap-6 bg-zinc-900/60 border border-zinc-850 p-6 rounded-2xl justify-between">
            <div className="text-center sm:text-left">
              <span className="block text-4xl sm:text-5xl font-display font-extrabold text-white">4.8</span>
              <div className="flex items-center justify-center sm:justify-start text-amber-400 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-zinc-500 font-sans block mt-1">71 Google Értékelés</span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-zinc-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm tracking-wide transition-all shrink-0 w-full sm:w-auto"
              id="write-review-btn"
            >
              Írj Véleményt!
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => (
            <motion.div
              key={review.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 relative hover:border-gold-500/10 transition-colors"
            >
              {/* Quote icon water mark */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-zinc-800/20 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-zinc-700'}`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 font-light text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center space-x-3 pt-4 border-t border-zinc-900/80">
                <div className="w-10 h-10 rounded-full bg-gold-950 border border-gold-800/30 flex items-center justify-center text-gold-400 font-bold font-display text-sm shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{review.author}</h4>
                  <span className="text-[10px] text-zinc-500 font-mono">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Write Review Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
              id="review-modal-backdrop"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900 border border-gold-800/20 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl text-left"
                id="review-modal-container"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 p-2 rounded-full transition-colors"
                  aria-label="Bezárás"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Success state */}
                {successMsg ? (
                  <div className="py-8 text-center space-y-4 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Köszönjük a visszajelzést!</h3>
                    <p className="text-sm text-zinc-400 max-w-xs mx-auto">
                      Véleményedet sikeresen rögzítettük és megjelenítettük az oldalon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-5">
                    <div>
                      <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">Értékelés írása</span>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                        Oszd meg a tapasztalataidat!
                      </h3>
                    </div>

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="reviewer-name" className="text-xs text-zinc-400 font-semibold uppercase">
                        Teljes Név
                      </label>
                      <input
                        type="text"
                        id="reviewer-name"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Pl. Kovács Melinda"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    {/* Star Rating Selection */}
                    <div className="space-y-1.5">
                      <span className="text-xs text-zinc-400 font-semibold uppercase block">
                        Hány csillagot adsz a szalonnak?
                      </span>
                      <div className="flex items-center space-x-2 bg-zinc-950 p-3 rounded-xl border border-zinc-800 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className="p-1 focus:outline-none transition-transform active:scale-95"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= newRating ? 'text-amber-400 fill-current' : 'text-zinc-700'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <div className="space-y-1.5">
                      <label htmlFor="reviewer-text" className="text-xs text-zinc-400 font-semibold uppercase">
                        Vélemény szövege
                      </label>
                      <textarea
                        id="reviewer-text"
                        required
                        rows={4}
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="Írd le a tapasztalataidat, a gépek tisztaságát, a barnulást vagy a körömápolást..."
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="flex-1 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold py-3 rounded-xl text-sm transition-all"
                      >
                        Mégse
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-zinc-950 font-bold py-3 rounded-xl text-sm transition-all shadow-md shadow-gold-500/10"
                      >
                        Küldés
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
