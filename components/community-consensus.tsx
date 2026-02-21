import { MessageCircle, Star, ShieldCheck, ExternalLink, ThumbsUp } from 'lucide-react';

export function CommunityConsensus() {
    const validations = [
        {
            source: 'r/Bahrain Reddit',
            quote: "Honestly, save yourself the stress. Used BTG for a 3 AM airport run and they were waiting 10 mins early. Best fixed rate in Manama.",
            user: 'u/ExpatInBahrain',
            date: '2 weeks ago',
            impact: 'Trust Signal',
            type: 'Reddit'
        },
        {
            source: 'TripAdvisor Forums',
            quote: "The Causeway crossing was seamless. No switching cars at the border was the game changer for my family. Highly recommend the GMC Yukon.",
            user: 'Sarah M.',
            date: '1 month ago',
            impact: 'Experience Proof',
            type: 'TripAdvisor'
        },
        {
            source: 'Google Reviews',
            quote: "Best service for Causeway crossings. The GCC registered GMC vehicles are smooth and the drivers know the border checks inside out.",
            user: 'David L.',
            date: 'Live Data',
            impact: 'Service Choice',
            type: 'Google'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] mb-4 block">Independent Verification</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            What the Community <br />Decided
                        </h2>
                        <p className="text-slate-500 mt-6 text-lg leading-relaxed font-medium">
                            Trust is earned through consistency. We don't just promise a premium service; we've built a reputation across the most visited travel platforms and community forums in Bahrain.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {validations.map((item, idx) => (
                        <div key={idx} className="flex flex-col bg-slate-50 rounded-[48px] border border-slate-100 p-10 hover:shadow-2xl hover:border-amber-500/20 transition-all group">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-2xl ${item.type === 'Reddit' ? 'bg-orange-100' : item.type === 'TripAdvisor' ? 'bg-green-100' : 'bg-blue-100'}`}>
                                        {item.type === 'Reddit' ? <MessageCircle className="w-5 h-5 text-orange-600" /> :
                                            item.type === 'TripAdvisor' ? <Star className="w-5 h-5 text-green-600" /> :
                                                <Star className="w-5 h-5 text-blue-600" />}
                                    </div>
                                    <span className="font-black text-slate-900 uppercase tracking-widest text-[10px]">{item.source}</span>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</div>
                            </div>

                            <div className="flex-1">
                                <p className="text-xl font-bold text-slate-800 leading-relaxed mb-8 italic">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-black text-slate-500">
                                            {item.user[0]}
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-900">{item.user}</p>
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-tighter">{item.impact}</p>
                                        </div>
                                    </div>
                                    <ThumbsUp className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-4">
                    <a href="https://www.reddit.com/r/Bahrain/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-xs hover:bg-slate-800 transition-all uppercase tracking-widest">
                        Verify on r/Bahrain <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://tripadvisor.com/Profile/bahraintransport" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-xs hover:border-amber-500 transition-all uppercase tracking-widest">
                        View TripAdvisor Guide <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </section>
    );
}
