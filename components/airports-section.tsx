'use client';

import { motion } from 'framer-motion';
import {
    Plane,
    Shield,
    Navigation,
    MapPin,
    Info,
    AlertTriangle,
} from 'lucide-react';
import { FloatingCard } from './floating-card';

import Link from 'next/link';

const internationalAirports = [
    {
        slug: 'bahrain-international-airport',
        name: 'Bahrain International Airport',
        codes: 'BAH / OBBI',
        location: 'Muharraq, near Manama',
        description:
            'The primary and only major international airport serving the Kingdom of Bahrain. Hub for Gulf Air and the main gateway for all international arrivals and departures.',
        isPrimary: true,
    },
    {
        slug: 'muharraq-airport',
        name: 'Muharraq Airport',
        codes: 'GBQ',
        location: 'Muharraq',
        description:
            'A smaller airport/airfield located in Muharraq, used for private and charter flights.',
        isPrimary: false,
    },
];

const militaryBases = [
    {
        slug: 'shaikh-isa-air-base',
        name: 'Shaikh Isa Air Base',
        codes: 'OBBS',
        location: 'Near Sitrah',
        description:
            'Military base operated by the Bahrain Defense Force, located near Sitrah.',
    },
    {
        slug: 'sakhir-air-base',
        name: 'Sakhir Air Base',
        codes: 'OBKH',
        location: 'Sakhir',
        description:
            'Airfield used for military purposes and host of the prestigious Bahrain International Airshow.',
    },
];

const helipads = [
    {
        slug: 'bahrain-defense-force-heliport',
        name: 'Bahrain Defense Force Heliport',
        location: 'Isa Town',
    },
    {
        slug: 'amwaj-heliport',
        name: 'Amwaj Heliport',
        location: 'Amwaj Island',
    },
    {
        slug: 'bic-heliport',
        name: 'Bahrain International Circuit Heliport',
        location: 'Sakhir',
    },
    {
        slug: 'hawar-island-heliport',
        name: 'Hawar Island Heliport',
        location: 'Hawar Island',
    },
];

export function AirportsSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[200px] opacity-[0.07]" />
                <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-orange-600 rounded-full blur-[180px] opacity-[0.05]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6">
                        <Plane className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-600">
                            Airports & Airfields in Bahrain
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            All Bahrain Airports
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        We provide premium taxi service to and from every major airport and
                        airfield across the Kingdom of Bahrain
                    </p>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left text-balance">
                        <strong className="text-slate-900 block mb-1">Does Bahrain Transport Group serve all airports in Bahrain?</strong>
                        Yes, Bahrain Transport Group provides 24/7 premium taxi and chauffeur services to all major airports and specialized airfields in Bahrain. While Bahrain International Airport (BAH) is the primary commercial hub, we also support pre-booked transfers for Muharraq Airport, Shaikh Isa Air Base, Sakhir Air Base, and various helipads across the Kingdom. Every trip features fixed rates, professional meet-and-greet, and reliable flight tracking.
                    </div>
                </motion.div>

                {/* ─── International Airports ─── */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                            <Plane className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            International Airports
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {internationalAirports.map((airport, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <Link href={`/airports/${airport.slug}`} className="block w-full h-full group">
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                                                    {airport.name}
                                                </h4>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-200">
                                                        {airport.codes}
                                                    </span>
                                                    {airport.isPrimary && (
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                                                            ✈ Primary Airport
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-slate-600">
                                            <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                            <span className="text-sm">{airport.location}</span>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {airport.description}
                                        </p>
                                    </div>
                                </Link>
                            </FloatingCard>
                        ))}
                    </div>
                </div>

                {/* ─── Military Air Bases ─── */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-lg shadow-slate-500/30">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            Military Air Bases
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {militaryBases.map((base, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <Link href={`/airports/${base.slug}`} className="block w-full h-full group">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-600 transition-colors">
                                                {base.name}
                                            </h4>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                                                {base.codes}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-slate-400">
                                            <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                            <span className="text-sm">{base.location}</span>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {base.description}
                                        </p>
                                    </div>
                                </Link>
                            </FloatingCard>
                        ))}
                    </div>
                </div>

                {/* ─── Helipads & Other Airfields ─── */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                            <Navigation className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            Helipads & Airfields
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {helipads.map((helipad, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all group hover:border-sky-500/30"
                            >
                                <Link href={`/airports/${helipad.slug}`} className="block w-full h-full">
                                    <Navigation className="w-6 h-6 text-sky-600 mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-sky-700 transition-colors">
                                        {helipad.name}
                                    </h4>
                                    <p className="text-xs text-slate-600 flex items-center gap-1">
                                        <MapPin className="w-3 h-3 text-amber-600" />
                                        {helipad.location}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 text-xs text-slate-500 flex items-center gap-1"
                    >
                        <Info className="w-3 h-3 text-slate-500 flex-shrink-0" />
                        Plus additional helipads at hospitals, police stations, hotels, and
                        remote islands across Bahrain.
                    </motion.p>
                </div>

                {/* ─── Important Note ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4"
                >
                    <div className="flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-600 mb-1">Important Note</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Many of the smaller airfields and helipads serve military, private,
                            or specific local functions rather than regular commercial
                            passenger flights. Our taxi service primarily operates pickups and
                            drop-offs at{' '}
                            <span className="text-slate-900 font-semibold">
                                Bahrain International Airport (BAH)
                            </span>
                            , the only commercial airport in Bahrain. For transfers to other
                            locations, please{' '}
                            <a
                                href="/contact"
                                className="text-amber-600 underline underline-offset-2 hover:text-amber-700 transition-colors"
                            >
                                contact us directly
                            </a>{' '}
                            to arrange your trip.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
