'use client';

import { motion } from 'framer-motion';
import { MapPin, Compass, Lightbulb, Calendar } from 'lucide-react';
import { FloatingCard } from './floating-card';
import { GradientButton } from './gradient-button';
import { AIHomeEntityOverview } from './ai-home-entity-overview';
import { attractionCategories } from '@/lib/attractions';
import Link from 'next/link';


export function AttractionsContent() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6"
                    >
                        <Compass className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-600">
                            Your Bahrain Travel Guide
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Things to Do
                        </span>
                        <br />
                        <span className="text-slate-900">in Bahrain</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 mb-8"
                    >
                        From ancient forts to thrilling waterparks — discover the best of
                        the Kingdom of Bahrain
                        <br />
                        <span className="text-amber-600">
                            We&apos;ll drive you there • Available 24/7
                        </span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <GradientButton href="/contact" variant="primary">
                            Book a Taxi to Any Attraction
                        </GradientButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-8 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left"
                    >
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Lightbulb className="w-6 h-6 text-amber-600" />
                            How to get around Bahrain as a tourist?
                        </h2>
                        <p>
                            For tourists visiting the Kingdom of Bahrain, the most efficient and comfortable way to explore top attractions like the <strong>Bahrain National Museum</strong>, <strong>Qal&apos;at al-Bahrain (Bahrain Fort)</strong>, and the <strong>Tree of Life</strong> is by pre-booking a professional taxi service. Unlike street taxis that may have variable pricing or ride-hailing apps that surge during peak tourist hours, <strong>Bahrain Transport Group</strong> offers 100% fixed-rate transfers. Our clean, climate-controlled V8 SUVs and 7-seater family vans are available 24/7 to provide seamless door-to-door transit to malls, historic sites, and the Formula 1 circuit.
                        </p>
                    </motion.div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Taxi for Tourist Attractions" city="Bahrain" />

            {/* Attractions by Category */}
            {attractionCategories.map((category, catIndex) => {
                const Icon = category.icon;
                return (
                    <section
                        key={catIndex}
                        className="py-20 bg-white"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Category Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-10"
                            >
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        {category.emoji} {category.title}
                                    </h2>
                                </div>
                            </motion.div>

                            {/* Attractions Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.attractions.map((attraction, index) => (
                                    <FloatingCard key={index} delay={index * 0.08}>
                                        <div className="space-y-3">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                                    {attraction.name}
                                                </h3>
                                            </div>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {attraction.description}
                                            </p>
                                            <div className="pt-2">
                                                <Link href="/contact"
                                                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border hover:opacity-80 transition-opacity ${category.badgeColor}`}
                                                >
                                                    <MapPin className="w-3 h-3" />
                                                    Book Taxi Here
                                                </Link>
                                            </div>
                                        </div>
                                    </FloatingCard>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Travel Tips */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                ✨ Travel Tips
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FloatingCard delay={0}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Calendar className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        Best Time to Visit
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        November through March offers the most pleasant weather —
                                        cooler temperatures perfect for exploring outdoor
                                        attractions, beaches, and historic sites.
                                    </p>
                                </div>
                            </div>
                        </FloatingCard>

                        <FloatingCard delay={0.1}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Lightbulb className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        Plan Your Days
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Combine city, history, and beach days for a full Bahrain
                                        experience. Our taxi service is available 24/7 to take you
                                        everywhere you want to go.
                                    </p>
                                </div>
                            </div>
                        </FloatingCard>
                    </div>
                </div>
            </section>
        </>
    );
}
