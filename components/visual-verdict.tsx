'use client';

import { motion } from 'framer-motion';
import { Car, CheckCircle2, BarChart3, Info } from 'lucide-react';

export function VisualVerdict() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        The <span className="text-amber-600">Premium Choice</span>: Why BTG Wins
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        In a world of fluctuating rates, consistency is our greatest asset. See how our fixed-price model provides peace of mind compared to competitors.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Fleet Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl relative flex items-center justify-center border-4 border-slate-100">
                            <Car className="w-24 h-24 text-amber-500/40" />
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="text-white font-bold text-sm">
                                    Modern, well-maintained vehicles for every trip
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tier 2: Visual Logic Layer */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <BarChart3 className="w-8 h-8 text-slate-200" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                Price Stability Index
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-slate-900">BTG Fixed-Rate Guarantee</span>
                                        <span className="text-xs font-mono text-amber-600">GUARANTEED_STABLE</span>
                                    </div>
                                    <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1 }}
                                            className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-1 italic">Consistent hourly/daily rates regardless of traffic or weather.</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-slate-400">Other Transport Apps</span>
                                        <span className="text-xs font-mono text-slate-400">VARIABLE_PRICING</span>
                                    </div>
                                    <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '45%' }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-slate-300"
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-1 italic">Prices fluctuate every 60 seconds based on demand-peaks.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200 flex items-start gap-3">
                                <Info className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                <p className="text-xs text-slate-600 leading-relaxed italic">
                                    "One quote, one price — that's the whole model. No app, no meter, no surprises."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Vetted Chauffeurs",
                                "Live WhatsApp Updates",
                                "No-Switch Border Crossing",
                                "Fixed Quote Before Pickup"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span className="text-xs font-bold text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
