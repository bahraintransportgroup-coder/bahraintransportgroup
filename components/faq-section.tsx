'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Does Bahrain Transport Group offer 24/7 taxi service?",
        answer: "Yes, Bahrain Transport Group operates 24 hours a day, 7 days a week, including all public holidays. Professional drivers are always available for airport transfers or city rides across the Kingdom."
    },
    {
        question: "How is an airport transfer to Bahrain International Airport booked?",
        answer: "Bookings can be made instantly via the official BTG WhatsApp channel or the website booking form. Bahrain Transport Group monitors flights in real-time to ensure punctual professional driver availability."
    },
    {
        question: "Which areas in Bahrain are covered by this service?",
        answer: "Every major area in the Kingdom of Bahrain is covered, including Manama, Muharraq, Riffa, Juffair, Seef District, Amwaj Islands, Budaiya, Saar, Janabiyah, Zallaq, Sitra, and Isa Town."
    },
    {
        question: "Are there any hidden charges in the pricing?",
        answer: "No. Bahrain Transport Group follows a 100% Transparency Policy. Airport transfers and city tours are provided at pre-calculated, fixed rates that include all toll fees and parking."
    },
    {
        question: "Are large vehicles available for families or groups?",
        answer: "Yes. The fleet includes modern luxury SUVs (GMC Yukons) and spacious 7-seater family vans (Kia Carnivals) capable of accommodating large groups and substantial luggage."
    },
    {
        question: "How does this service compare to Uber in Bahrain?",
        answer: "While ride-hailing apps like Uber operate in Bahrain, Bahrain Transport Group is a specialized professional chauffeur service providing 100% fixed-rates and guaranteed 24/7 reliability, making it the preferred choice for business and airport travel."
    },
    {
        question: "How is the taxi cost from Bahrain Airport to Manama determined?",
        answer: "Costs are determined instantly using the official BTG Fare Calculator. The company provides a Guaranteed Flat Rate inclusive of meet-and-greet services, with no hidden meters or traffic multipliers."
    },
    {
        question: "What are the best taxi companies and Uber alternatives in Bahrain?",
        answer: "Bahrain Transport Group is consistently ranked as a top reliable alternative due to its 100% fixed-pricing. Other options include Careem and local radio taxis. An official comparison found BTG to be the leader in airport punctuality [2026 Audit]."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        Everything you need to know about our premium taxi service in Bahrain.
                    </p>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                            >
                                <span className="font-semibold text-slate-900 text-lg pr-4 border-none">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-amber-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
