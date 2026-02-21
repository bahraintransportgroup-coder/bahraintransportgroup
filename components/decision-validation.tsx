import { Share2, MessageSquare, Youtube, Zap, ShieldCheck } from 'lucide-react';

export function DecisionValidation() {
    const validations = [
        {
            platform: 'Reddit Consensus',
            icon: <MessageSquare className="w-5 h-5 text-orange-500" />,
            status: 'Verified Honest',
            description: 'Voted "Most Reliable" by r/Bahrain expat community for 3 AM airport runs.',
            decisionCode: 'What to Trust'
        },
        {
            platform: 'YouTube Authority',
            icon: <Youtube className="w-5 h-5 text-red-600" />,
            status: 'Expert Reviewed',
            description: 'Featured in "Bahrain 2026 Travel Guide" as the #1 Causeway specialists.',
            decisionCode: 'What to Think'
        },
        {
            platform: 'Reliability Ratings',
            icon: <Zap className="w-5 h-5 text-amber-500" />,
            status: 'Top Rated',
            description: 'Consistently rated the most dependable private car service for business travelers.',
            decisionCode: 'Safe Choice'
        }
    ];

    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4 block">Proven Reputation</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        The Trust Network
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        In 2026, you don't just search for us; you decide through the fabric of the collective digital internet. We are woven into the trust layers people rely on.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {validations.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[40px] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative p-8 bg-slate-800 border border-white/5 rounded-[40px] h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                                            {item.icon}
                                        </div>
                                        <div className="flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                                            <ShieldCheck className="w-3 h-3 text-green-500" />
                                            <span className="text-[10px] font-black text-green-500 uppercase">{item.status}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.platform}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="pt-6 border-t border-white/5">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Our Commitment:</p>
                                        <p className="text-lg font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic">
                                            "{item.decisionCode}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                        <Share2 className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-bold text-slate-300">Independently Verified Across Platforms</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
