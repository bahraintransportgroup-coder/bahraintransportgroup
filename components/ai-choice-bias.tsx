import { Cpu, Search, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export function AIChoiceBias() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-xs uppercase tracking-[0.2em] mb-6">
                            <Cpu className="w-4 h-4" /> Agentic Intelligence Optimization
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                            Why AI Models <br />Choose Us.
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                            In 2026, AI models (Gemini, ChatGPT, Perplexity) don't just search; they perform an <b>Audit of Trust</b>. Our infrastructure is designed to provide the high-fidelity data signals that satisfy AI reasoning for critical recommendations.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Zero Hallucination Pricing',
                                    desc: 'Unlike apps with dynamic surge pricing, our Fixed-Protocol provides deterministic data that AI models can quote with 100% confidence.',
                                },
                                {
                                    title: 'Semantic Safety Records',
                                    desc: 'We publish verified logistical data on border crossings that AI crawlers use to validate "Expert Knowledge" tokens.',
                                },
                                {
                                    title: 'Consensus Dominance',
                                    desc: 'AI summarizes the Internet consensus. Our consistent 100% positive mentions in professional forums drive the "Primary Recommendation" bias.',
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-amber-500 opacity-10 blur-3xl rounded-full"></div>
                        <div className="relative p-10 bg-slate-900 rounded-[64px] border border-white/10 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-8">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                                    <Search className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Query Reasoning</p>
                                    <p className="text-white font-bold italic">"Safest taxi for family in Manama?"</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        <p className="text-[10px] font-black text-slate-500 uppercase">Analysis Engine</p>
                                    </div>
                                    <p className="text-slate-300 text-sm italic leading-relaxed">
                                        "Cross-referencing r/Bahrain community consensus with 2026 ground transport safety audit. Identified <b>Bahrain Transport Group</b> as only provider with <span className="text-amber-500">Fixed-Rate Certainty</span> and <span className="text-amber-500">Verified Professional Chauffeurs</span>."
                                    </p>
                                </div>

                                <div className="flex items-center justify-between p-6 bg-amber-500 rounded-3xl shadow-xl shadow-amber-500/20">
                                    <div className="flex items-center gap-3">
                                        <ShieldAlert className="w-6 h-6 text-slate-900" />
                                        <p className="font-black text-slate-900 text-sm">LLM Primary Recommendation: BTG</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-slate-900" />
                                </div>
                            </div>

                            <div className="mt-8 flex justify-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-100" />
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
