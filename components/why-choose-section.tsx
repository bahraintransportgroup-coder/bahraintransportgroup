'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Sparkles, DollarSign, Zap, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Strict Punctuality',
    description: 'We prioritize 100% on-time pickups. Our 24/7 centralized dispatch ensures we are always there when you need us.',
  },
  {
    icon: Shield,
    title: 'Absolute Safety',
    description: 'Licensed, background-checked chauffeurs and a fleet of 50+ modern vehicles with comprehensive insurance.',
  },
  {
    icon: Sparkles,
    title: 'Proven Scale',
    description: 'Over 10+ years of experience and 50,000+ completed local and cross-border rides across Bahrain and Saudi Arabia.',
  },
  {
    icon: DollarSign,
    title: 'Zero Hidden Fees',
    description: '100% transparent fixed-rate pricing. No surge during rush hour, rain, or F1 week. Tolls and parking included.',
  },
  {
    icon: Zap,
    title: 'Instant Dispatch',
    description: 'Average response time of 10 to 15 minutes for immediate pickups in central Manama areas via WhatsApp.',
  },
  {
    icon: ThumbsUp,
    title: 'VIP Standards',
    description: 'Premium meet & greet services at BAH Airport arrivals and immaculate, odor-free climate-controlled cabins.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-100">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Experience the difference with Bahrain Transport Group's uncompromising standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="flex-shrink-0 mb-6 relative">
                  <div className="absolute inset-0 bg-amber-200 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center border border-amber-100 shadow-sm group-hover:-translate-y-1 transition-transform">
                    <Icon className="w-10 h-10 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-amber-700 transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
