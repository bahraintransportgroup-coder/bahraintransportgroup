import { Share2, MessageSquare, Clock, Zap, ShieldCheck } from 'lucide-react';

export function DecisionValidation() {
    const validations = [
        {
            platform: '24/7 Dispatch',
            icon: <MessageSquare className="w-5 h-5 text-orange-500" />,
            status: 'Always On',
            description: 'A real WhatsApp dispatch line, day or night — including 3 AM airport runs when app-based drivers go offline.',
            decisionCode: 'What to Trust'
        },
        {
            platform: 'Causeway Specialists',
            icon: <Clock className="w-5 h-5 text-amber-600" />,
            status: 'Route Expertise',
            description: "Drivers experienced with King Fahd Causeway border crossings, so you're not the one figuring out the paperwork.",
            decisionCode: 'What to Expect'
        },
        {
            platform: 'Business Travel Ready',
            icon: <Zap className="w-5 h-5 text-amber-500" />,
            status: 'Dependable',
            description: "Fixed pickup windows and professional vehicles built for executives who can't afford a late arrival.",
            decisionCode: 'Safe Choice'
        }
    ];

    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4 block">Our Commitments</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        The Trust Network
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Reliable transport comes down to a few things done consistently. Here's what we commit to on every ride.
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
                    <a
                        href="https://wa.me/966569487569"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                    >
                        <Share2 className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-bold text-slate-300">Message Us Directly on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
