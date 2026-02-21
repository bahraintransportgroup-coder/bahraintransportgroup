'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { GradientButton } from './gradient-button';
import { governorates } from '@/lib/locations';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';
import Link from 'next/link';


export function LocationsContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6"
                    >
                        <Navigation className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-600">
                            30+ Service Areas Across Bahrain
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Our Service Areas
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600"
                    >
                        We cover every city, village, and island across the Kingdom of
                        Bahrain
                    </motion.p>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left text-balance">
                        <strong className="text-slate-900 block mb-1">Which areas in Bahrain do you cover for taxi services?</strong>
                        Bahrain Transport Group provides 24/7 premium taxi coverage across all four governorates of Bahrain. This includes fast dispatcher access to Manama, Muharraq, Riffa, Juffair, Seef District, Amwaj Islands, Budaiya, Saar, Janabiyah, Zallaq, Sitra, and Isa Town. Whether you are in a major city center or a residential complex, our professional drivers are typically available within 10 to 15 minutes.
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Taxi Services by Area" city="Bahrain" />

            {/* Governorates Grid */}
            {governorates.map((governorate, govIndex) => (
                <section
                    key={govIndex}
                    className="py-16 bg-white"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="text-3xl">{governorate.emoji}</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                {governorate.name}
                            </h2>
                            <span className="ml-auto px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600">
                                {governorate.locations.length} areas
                            </span>
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {governorate.locations.map((location, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                >
                                    <Link
                                        href={`/locations/${location.slug}`}
                                        className="block bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-500/30 transition-all group h-full shadow-sm hover:shadow-md"
                                    >
                                        <MapPin className="w-6 h-6 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                                        <h3 className="font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                                            {location.name}
                                        </h3>
                                        <p className="text-xs text-slate-600">
                                            {location.governorate}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Book CTA */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Don&apos;t see your area?
                        </h2>
                        <p className="text-slate-600 mb-6">
                            We cover all of Bahrain. Contact us for transfers to any location
                            not listed here.
                        </p>
                        <GradientButton href="/contact" variant="primary">
                            Contact Us for Custom Routes
                        </GradientButton>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
