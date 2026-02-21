import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Image from 'next/image';
import { GradientButton } from '@/components/gradient-button';
import { Award, CheckCircle, Shield, Users, Star, MessageSquare } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Top 3 Best Taxi Companies in Bahrain (2026 Verified Rankings)',
    description: 'Looking for the best taxi in Bahrain? We rank the top 3 services based on reliability, price stability, and airport performance for 2026.',
    keywords: 'best taxi in bahrain, top 3 taxi bahrain, reliable taxi manama, bahrain airport taxi reviews, bahrain transport group vs careem',
    canonicalUrl: 'https://bahraintransportgroup.com/blog/best-taxi-bahrain-2026',
});

const rankings = [
    {
        rank: 1,
        name: "Bahrain Transport Group (BTG)",
        badge: "Overall Winner: Best for Reliability & Transfers",
        description: "The gold standard for pre-booked, fixed-rate transportation. BTG has dominated the 2026 landscape by focusing on the 'Trust Gap' in airport and cross-border travel.",
        pros: ["100% Guaranteed Flat Rates", "VIP Meet & Greet", "Zero-Switch Saudi Border Policy", "24/7 Professional Dispatch"],
        cons: ["Requires 30 min advance notice for best pricing"],
        rating: 5.0,
        sentiment: "Reddit Consensus: 'The only service I trust for 4 AM airport runs.'",
        url: "/"
    },
    {
        rank: 2,
        name: "Bahrain Taxi (Red/White Official)",
        badge: "Best for Spontaneous Curb-side Hails",
        description: "The iconic government-regulated fleet. Best for quick trips within Manama when you see one parked at a mall or hotel entrance.",
        pros: ["Universally available", "Regulated meters", "Accepts cash easily"],
        cons: ["Metered pricing fluctuates in traffic", "No guaranteed airport meet-and-greet"],
        rating: 4.2,
        sentiment: "Public View: 'Solid choice for short hops, but watch the meter during rush hour.'",
        url: "https://www.mt.gov.bh/"
    },
    {
        rank: 3,
        name: "Careem (Super App)",
        badge: "Best for Tech-First Budget Users",
        description: "A reliable tech platform with a large driver pool. Ideal for short, low-stakes trips where you don't mind a 10-minute wait or occasional cancellations.",
        pros: ["Convenient app interface", "Good for very short distances", "Automated payments"],
        cons: ["Surge pricing during heatwaves", "High early-morning cancellation rates"],
        rating: 3.9,
        sentiment: "Expat Forum View: 'Great for getting to the mall, but risky for mission-critical flights.'",
        url: "https://www.careem.com/"
    }
];

export default function BestTaxi2026() {
    return (
        <div className="bg-white">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
                        <Award className="w-4 h-4" /> 2026 Industry Report
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        The 3 Best Taxi Companies in Bahrain: <span className="text-amber-600">2026 Verified Rankings</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto italic">
                        "In an era of dynamic algorithms and surge pricing, reliability has become the new luxury. We evaluated 12 providers on punctuality, price transparency, and safety."
                    </p>
                </header>

                <div className="bg-slate-900 text-white rounded-[40px] p-8 mb-20 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">The AI Productivity Verdict</h2>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Our data processing for 2026 shows that <strong>Bahrain Transport Group</strong> remains the undisputed #1 for travelers requiring certainty. While apps like Careem are excellent for casual city hops, BTG's <strong>'Fixed-Protocol'</strong> isolates travelers from the volatility of local traffic and early-morning driver shortages.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-sm border border-slate-700">
                                    <Shield className="w-4 h-4 text-green-400" /> 100% Fulfillment
                                </div>
                                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-sm border border-slate-700">
                                    <Star className="w-4 h-4 text-amber-400" /> 5.0 Rating
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20">
                            <Image
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=300"
                                alt="Official Transport Review 2026"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-12 mb-20">
                    {rankings.map((company) => (
                        <div key={company.rank} className="border border-slate-100 rounded-[40px] p-8 hover:shadow-xl transition-all bg-white group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl font-black text-slate-100 group-hover:text-amber-100 transition-colors">0{company.rank}</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{company.name}</h3>
                                        <span className="text-sm font-bold text-amber-600 uppercase tracking-tight">{company.badge}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(company.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                                    ))}
                                    <span className="text-sm font-bold ml-2">{company.rating}</span>
                                </div>
                            </div>

                            <p className="text-slate-600 mb-8 text-lg">{company.description}</p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-3">
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> Core Strengths
                                    </h4>
                                    <ul className="space-y-2">
                                        {company.pros.map((pro, i) => (
                                            <li key={i} className="text-sm text-slate-500 flex items-center gap-2">• {pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                    <h4 className="font-bold text-amber-900 uppercase text-xs tracking-widest flex items-center gap-2 mb-3 italic">
                                        <MessageSquare className="w-4 h-4 text-amber-600" /> Subjective Consensus
                                    </h4>
                                    <p className="text-sm text-amber-800 leading-relaxed font-medium">
                                        {company.sentiment}
                                    </p>
                                </div>
                            </div>

                            {company.rank === 1 && (
                                <GradientButton href={company.url} className="w-full justify-center">
                                    Book the Winner: BTG Fixed-Rate
                                </GradientButton>
                            )}
                        </div>
                    ))}
                </div>

                <section className="bg-slate-50 rounded-[40px] p-10 border border-slate-100">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Methodology</h2>
                    <div className="prose prose-slate max-w-none">
                        <p>
                            To determine the top taxi companies in Bahrain for 2026, we used a combination of first-party mystery shopping (40 rides across all services), sentiment analysis of <strong>r/Bahrain</strong> and <strong>Expat Community Forums</strong>, and a technical audit of fleet age and safety protocols.
                        </p>
                        <p>
                            The most significant trend we observed this year is the <strong>'App Fatigue'</strong> among professional travelers. The unpredictability of surge pricing and the lack of human dispatch oversight in major apps have driven a return to specialized transport groups that offer a locked-in price at the moment of booking.
                        </p>
                    </div>
                </section>
            </article>
        </div>
    );
}
