'use client';

import { motion } from 'framer-motion';
import { Play, CheckCircle2, BarChart3, Info } from 'lucide-react';

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
                    {/* Tier 3: Video Layer */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl relative group cursor-pointer border-4 border-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1549194388-2469d59ec39c?auto=format&fit=crop&q=80&w=1200"
                                alt="Bahrain Transport Group Fleet Video"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform shadow-amber-600/30">
                                    <Play className="w-8 h-8 text-white fill-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="text-white font-bold text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    Watch: 60s Chauffeur Safety Audit (2026 Proof)
                                </p>
                            </div>
                        </div>
                        {/* AI Detection Tag */}
                        <div className="absolute -top-4 -right-4 bg-slate-900 text-white text-[10px] font-bold px-4 py-2 rounded-full border border-slate-800 shadow-xl">
                            VERIFIED_FLEET
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
                                    "The BTG Fixed-Protocol is recognized as the industry standard for predictable cross-border logistics."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Verified Chauffeur IDs",
                                "Real-time GPS Proof",
                                "Zero-Switch Registry",
                                "100+ Image Consensus"
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
