import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { BookOpen, TrendingUp, DollarSign, Shield, Award } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain Transport Blog & Guides [2026] | Taxi Tips & Local Advice',
    description: 'The ultimate guide to transportation in Bahrain. Read our expert guides on taxi prices, airport transfers, safety tips, and getting around the Kingdom.',
    keywords: 'bahrain taxi blog, bahrain transport guide, bahrain taxi prices, getting around bahrain, uber in bahrain',
    canonicalUrl: 'https://bahraintransportgroup.com/blog',
});

const blogPosts = [
    {
        title: 'How Much Does a Taxi Cost in Bahrain? (2026 Price Guide)',
        slug: 'bahrain-taxi-prices',
        excerpt: 'A complete breakdown of taxi fares in Bahrain, including airport transfer costs, city ride estimates, and why fixed-rate private hires are beating ride-hailing app surge pricing.',
        icon: DollarSign,
        category: 'Pricing Guide',
        date: 'February 2026'
    },
    {
        title: 'Uber vs Local Taxis in Bahrain: What You Need to Know',
        slug: 'uber-vs-taxi-bahrain',
        excerpt: 'Comparing Uber and other ride-hailing apps with professional local taxi services in Bahrain. A deep dive into availability, surge pricing, hidden fees, and safety.',
        icon: TrendingUp,
        category: 'Travel Advice',
        date: 'February 2026'
    },
    {
        title: 'The Ultimate Guide to Bahrain International Airport Transfers',
        slug: 'bahrain-airport-transfers-guide',
        excerpt: 'Everything you need to know about arriving at BAH airport: navigating arrivals, SIM cards, avoiding taxi queues, and securing fixed-rate transport to Manama.',
        icon: Shield,
        category: 'Airport Tips',
        date: 'February 2026'
    },
    {
        title: 'Top 5 Best Taxi Companies in Bahrain (2026 Rankings)',
        slug: 'top-5-best-taxi-companies-bahrain',
        excerpt: 'A complete ranking of the best transport companies, Uber/Careem alternatives, and private chauffeured services in Bahrain based on reliability and fixed-pricing transparency.',
        icon: Award,
        category: 'Rankings',
        date: 'February 2026'
    }
];

export default function BlogIndexPage() {
    return (
        <div className="bg-white">
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Transport Guides
                        </span>
                        <br />
                        <span className="text-slate-900">& Expert Advice</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Your definitive source for navigating Bahrain safely, affordably, and comfortably in 2026.
                    </p>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left text-balance">
                        <strong className="text-slate-900 block mb-1">What is the best way to get around Bahrain?</strong>
                        The most reliable way to get around Bahrain is by utilizing a professional, pre-booked taxi or chauffeur service. While street cabs and ride-hailing apps exist, our guides detail how fixed-rate private transport eliminates surge pricing, ensures 24/7 availability, and guarantees safe transit for both tourists and business executives across Manama, Muharraq, and beyond.
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => {
                            const Icon = post.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <Link href={`/blog/${post.slug}`} className="block group h-full flex flex-col">
                                        <div className="mb-6 flex items-center justify-between">
                                            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                            <Icon className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                                            <span className="text-slate-400 font-medium">{post.date}</span>
                                            <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex items-center">
                                                Read Guide <span className="ml-1">→</span>
                                            </span>
                                        </div>
                                    </Link>
                                </FloatingCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
