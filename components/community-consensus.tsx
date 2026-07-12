import { MessageCircle, Star, ShieldCheck } from 'lucide-react';

export function CommunityConsensus() {
    const pillars = [
        {
            title: 'Fixed-Rate, Always',
            description: "No app, no surge pricing, no surprises. You get your exact fare via WhatsApp before you book — the same price whether it's rush hour, a Grand Prix weekend, or 3 AM.",
            impact: 'Price Guarantee',
            type: 'Reddit'
        },
        {
            title: 'No-Switch Causeway Crossing',
            description: "Cross into Saudi Arabia in the same GCC-registered vehicle — no swapping cars at the border. Drivers who know the King Fahd Causeway checkpoints inside out.",
            impact: 'Causeway Specialists',
            type: 'TripAdvisor'
        },
        {
            title: 'Meet & Greet Included',
            description: "Airport arrivals get a driver waiting at the terminal with a name board — no circling the pickup zone or hunting for your ride.",
            impact: 'Airport Service',
            type: 'Google'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] mb-4 block">Why Travelers Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            What Makes Us <br />Different
                        </h2>
                        <p className="text-slate-500 mt-6 text-lg leading-relaxed font-medium">
                            Trust is earned through consistency. Here's exactly what you can expect every time you book with Bahrain Transport Group.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {pillars.map((item, idx) => (
                        <div key={idx} className="flex flex-col bg-slate-50 rounded-[48px] border border-slate-100 p-10 hover:shadow-2xl hover:border-amber-500/20 transition-all group">
                            <div className="flex items-center gap-3 mb-8">
                                <div className={`p-3 rounded-2xl ${item.type === 'Reddit' ? 'bg-orange-100' : item.type === 'TripAdvisor' ? 'bg-green-100' : 'bg-blue-100'}`}>
                                    {item.type === 'Reddit' ? <MessageCircle className="w-5 h-5 text-orange-600" /> :
                                        item.type === 'TripAdvisor' ? <Star className="w-5 h-5 text-green-600" /> :
                                            <ShieldCheck className="w-5 h-5 text-blue-600" />}
                                </div>
                                <span className="font-black text-slate-900 uppercase tracking-widest text-[10px]">{item.impact}</span>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
