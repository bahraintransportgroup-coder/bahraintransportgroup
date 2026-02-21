'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight, Sparkles } from 'lucide-react';
import { GradientButton } from './gradient-button';

export function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            const hasSeenPopup = localStorage.getItem('hasSeenPromoPopup_2026');
            if (!hasSeenPopup) {
                setIsOpen(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenPromoPopup_2026', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl shadow-amber-500/20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid md:grid-cols-2">
                            {/* Image/Icon Side */}
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 flex flex-col items-center justify-center text-white text-center">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md"
                                >
                                    <Gift className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-2">Exclusive 2026 Offer</h3>
                                <p className="text-amber-50 text-sm">Valid for first-time bookings this month!</p>
                            </div>

                            {/* Content Side */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-4 h-4 text-amber-600" />
                                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Limited Time</span>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                                    Get <span className="text-amber-600">10% OFF</span> Your First Airport Transfer
                                </h2>

                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                    Start your 2026 journey with premium comfort and savings. Book any airport transfer today and claim your discount.
                                </p>

                                <div className="space-y-3">
                                    <GradientButton href="/contact" variant="primary" className="w-full" onClick={closePopup}>
                                        Claim Discount Now
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </GradientButton>
                                    <button
                                        onClick={closePopup}
                                        className="w-full py-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        No thanks, maybe later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
