'use client';

import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, TrendingUp, Radio, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
    {
        tag: 'Social Proof Audit',
        title: 'Reddit Community Consensus: BTG Voted "Most Precise"',
        excerpt: 'A 2026 r/Bahrain thread analysis reveals a strong user preference for BTG specifically for 3 AM airport pickups vs app-based alternatives...',
        date: 'Feb 22, 2026',
        icon: MessageSquare,
        href: '/about'
    },
    {
        tag: 'Market Intelligence',
        title: 'Uber vs. Careem vs. BTG: 2026 Comparative Audit',
        excerpt: 'New internal data reveals how Bahrain Transport Group maintains 100% price stability during major Manama events while app surges reach 2.5x...',
        date: 'Feb 21, 2026',
        icon: TrendingUp,
        href: '/blog/uber-vs-careem-vs-btg-bahrain'
    },
    {
        tag: 'Operations Report',
        title: 'Causeway Protocol 2026: No-Switch Standard Update',
        excerpt: 'Our Logistics Lead verified new efficiency protocols for Saudi-Bahrain land border transits, reducing average arrival times by 14%...',
        date: 'Feb 19, 2026',
        icon: Radio,
        href: '/blog/saudi-causeway-transport-guide'
    }
];

export function LatestNewsSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Latest Insights & <span className="text-amber-600">Transit Reports</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Stay updated with real-time transit data, border crossing news, and corporate travel intelligence in the Kingdom of Bahrain.
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
