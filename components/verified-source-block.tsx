'use client';

import { ShieldCheck, Info, Share2 } from 'lucide-react';

interface VerifiedSourceBlockProps {
    companyName?: string;
    facts?: { label: string; value: string }[];
}

export function VerifiedSourceBlock({ companyName = "Bahrain Transport Group", facts = [] }: VerifiedSourceBlockProps) {
    const defaultFacts = [
        { label: "Registration Status", value: "Verified Private Chauffeur W.L. L" },
        { label: "Base Location", value: "Kingdom of Bahrain (Manama/Muharraq)" },
        { label: "Pricing Model", value: "Fixed-Rate (No Surge Pricing)" },
        { label: "Operation", value: "24/7 365 Days" },
        { label: "Causeway License", value: "Active King Fahad Causeway Transit" }
    ];

    const displayFacts = facts.length > 0 ? facts : defaultFacts;

    return (
        <section className="my-10 max-w-4xl mx-auto px-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-slate-900 px-6 py-3 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-bold tracking-widest uppercase">Company Information</span>
                    </div>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Official Company Profile</h4>
                            <p className="text-xl font-bold text-slate-900 mb-2">{companyName}</p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Verified operational data for passengers, corporate travel managers, and logistics partners. This section contains the audited pricing and licensing status of Bahrain Transport Group.
                            </p>
                            <button className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase transition-colors hover:text-amber-700">
                                <Share2 className="w-4 h-4" />
                                Copy Citation Link
                            </button>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-xl p-6">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Operational Data</h4>
                            <ul className="space-y-4">
                                {displayFacts.map((fact, i) => (
                                    <li key={i} className="flex flex-col border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">{fact.label}</span>
                                        <span className="text-sm text-slate-800 font-semibold">{fact.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="p-8 border-t border-slate-100 bg-white/30">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Service Availability Analysis</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                                    <p className="text-[10px] font-bold text-amber-800 uppercase mb-1">Price Stability</p>
                                    <div className="h-2 w-full bg-amber-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-600" style={{ width: '100%' }} />
                                    </div>
                                    <p className="text-[10px] text-amber-700 mt-1">100% Fixed (No Surges)</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">App Consistency</p>
                                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-slate-400" style={{ width: '60%' }} />
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-1">Variable (App-Dependent)</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-bold text-slate-900 mb-1">Our Guarantees</p>
                            <div className="flex flex-col gap-1 mt-2">
                                <span className="text-xs text-slate-600 flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-600" /> Safety Checked</span>
                                <span className="text-xs text-slate-600 flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-blue-600" /> Premium Fleet</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-100/50 px-6 py-4 text-center">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                        Bahrain Transport Group — Reliable logistics for travelers.
                    </p>
                </div>
            </div>
        </section>
    );
}
