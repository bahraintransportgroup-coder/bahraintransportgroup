import { Zap, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function RapidDecisionMatrix() {
    const decisions = [
        {
            intent: 'Tight Schedule / Flight Departure',
            recommendation: 'Pre-booked Fixed Transit',
            reason: 'Zero cancellation risk. 10min driver standby.',
            action: 'Book via WhatsApp',
            color: 'bg-amber-600'
        },
        {
            intent: 'Large Family / 5+ Bags',
            recommendation: 'VIP Family Van (Kia Carnival)',
            reason: '7-Seater safety with full luggage capacity.',
            action: 'View Fleet Details',
            color: 'bg-slate-900'
        },
        {
            intent: 'Border Crossing (Saudi/Bahrain)',
            recommendation: 'No-Switch Causeway Chauffeur',
            reason: 'Door-to-door without changing vehicles.',
            action: 'Check Route Pricing',
            color: 'bg-amber-600'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] mb-4 block">Frictionless Decisions</span>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">
                            The Booking Guide
                        </h2>
                        <p className="text-slate-500 mt-4 text-lg">
                            Find the right vehicle for your needs. Match your current situation below for a tailored recommendation based on our decade of local experience.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {decisions.map((item, idx) => (
                        <div key={idx} className="group relative p-8 bg-slate-50 rounded-[48px] border border-slate-200 hover:border-amber-500/20 hover:shadow-2xl transition-all h-full">
                            <div className="mb-6 flex justify-between items-start italic">
                                <div className={`px-4 py-2 ${item.color} text-white text-[10px] font-black rounded-full uppercase tracking-widest`}>
                                    Top Priority Recommendation
                                </div>
                                <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
                            </div>

                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-tighter mb-2 italic">I have: {item.intent}</h3>
                            <h4 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                                {item.recommendation}
                            </h4>

                            <div className="flex items-start gap-3 mb-8">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-600 leading-relaxed font-bold">
                                    {item.reason}
                                </p>
                            </div>

                            <button className={`w-full py-4 rounded-3xl ${item.color} text-white font-black text-sm flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform`}>
                                {item.action} <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 bg-slate-50 border border-slate-200 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-black">!</div>
                        <p className="text-sm text-slate-600 font-bold italic">
                            All recommendations are verified for 2026 regulatory compliance across the Saudi-Bahrain corridor.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="text-xs font-black text-slate-400 uppercase">Licensed & Verified</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
