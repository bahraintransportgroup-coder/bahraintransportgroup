'use client';

import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, TrendingUp, Radio, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
    {
        tag: 'Comparison Guide',
        title: 'Uber vs. Careem vs. BTG: Which Should You Book in Bahrain?',
        excerpt: 'A side-by-side look at fixed-rate private transport versus app-based ride-hailing — pricing, wait times, and when each option makes sense.',
        date: '2026',
        icon: TrendingUp,
        href: '/blog/uber-vs-careem-vs-btg-bahrain'
    },
    {
        tag: 'Border Crossing Guide',
        title: 'King Fahd Causeway: What to Expect Crossing Into Saudi Arabia',
        excerpt: 'Visa requirements, border checkpoint tips, and how a no-switch private transfer compares to public transport across the Causeway.',
        date: '2026',
        icon: Radio,
        href: '/blog/saudi-visa-king-fahad-causeway'
    },
    {
        tag: 'Pricing Guide',
        title: 'Bahrain Taxi Prices: What You Should Actually Be Paying',
        excerpt: 'A breakdown of typical airport transfer and city ride costs in Bahrain, and how fixed-rate pricing avoids surge-time surprises.',
        date: '2026',
        icon: MessageSquare,
        href: '/blog/bahrain-taxi-prices'
    }
];

export function LatestNewsSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Travel Guides & <span className="text-amber-600">Transit Insights</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Practical guides on pricing, border crossings, and getting around the Kingdom of Bahrain.
                        </p>
                    </div>
                    <Link href="/blog" className="flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all duration-300 group">
                        View All Reports <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((news, index) => {
                        const Icon = news.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-amber-50 rounded-lg">
                                        <Icon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{news.tag}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-amber-600 transition-colors">
                                    {news.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">
                                    {news.excerpt}
                                </p>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                                    <span className="text-xs text-slate-400 font-medium">{news.date}</span>
                                    <Link href={news.href} className="text-sm font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors">
                                        Read Report <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
