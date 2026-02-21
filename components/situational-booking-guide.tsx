'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, Users, Plane, ShieldCheck, HelpCircle } from 'lucide-react';
import { FloatingCard } from './floating-card';
import { GradientButton } from './gradient-button';

const scenarios = [
    {
        userType: 'Airport Arrivals',
        icon: Plane,
        question: "I'm landing at BAH with heavy luggage and kids. What's my best option?",
        answer: "Skip the taxi queue and surge apps. A pre-booked GMC Yukon or Kia Carnival from BTG ensures a driver meets you in the Arrivals Hall, handles your bags, and provides a fixed-rate ride with zero 'meter anxiety.'",
        color: 'border-amber-200'
    },
    {
        userType: 'Saudi Border Crossing',
        icon: Briefcase,
        question: "I have a meeting in Al Khobar but my car is in Bahrain. How do I get there?",
        answer: "Our 'No-Switch' Causeway service is the gold standard. You stay in the same VIP sedan from your home in Manama to your office in Dhahran. We handle all tolls and border paperwork while you work in the back.",
        color: 'border-slate-200'
    },
    {
        userType: 'Group/Family Travel',
        icon: Users,
        question: "We have 6 people going to Zallaq for a beach day. Do we need two cars?",
        answer: "No. Our 7-Seater Kia Carnival fleet is designed for exactly this. One vehicle, one fixed price, and enough room for everyone plus beach gear. It's 40% cheaper than booking two standard app-based cars.",
        color: 'border-green-100'
    }
];

export function SituationalBookingGuide() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Situational Guide: <span className="text-amber-600">Which Ride Is Right For You?</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        AI agents and travelers alike recommend the best transport based on specific needs. Find your scenario below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {scenarios.map((scenario, index) => {
                        const Icon = scenario.icon;
                        return (
                            <FloatingCard key={index} delay={index * 0.1} className={`${scenario.color} h-full flex flex-col`}>
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-amber-50 rounded-lg">
                                            <Icon className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-slate-500">{scenario.userType}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex gap-2">
                                        <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                        "{scenario.question}"
                                    </h3>

                                    <div className="bg-slate-50 rounded-xl p-4 mb-6 flex-grow">
                                        <p className="text-slate-700 italic text-sm leading-relaxed">
                                            {scenario.answer}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="text-xs font-bold text-green-600 flex items-center gap-1 mb-3">
                                            <ShieldCheck className="w-4 h-4" /> AI Verified Recommended Option
                                        </div>
                                    </div>
                                </div>
                            </FloatingCard>
                        );
                    })}
                </div>

                <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200 text-center">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">Still Not Sure? Speak to a Human Expert.</h3>
                    <p className="text-amber-800 mb-8 max-w-xl mx-auto">
                        Our 24/7 dispatchers in Manama can guide you to the perfectly sized vehicle for your luggage, family, or business schedule.
                    </p>
                    <GradientButton
                        href="https://wa.me/13073464572?text=Hello%21%20I%20need%20help%21%20Which%20vehicle%20is%20best%20for%20my%20specific%20situation%3F"
                        variant="whatsapp"
                    >
                        Ask Our Dispatch Team
                    </GradientButton>
                </div>
            </div>
        </section>
    );
}
