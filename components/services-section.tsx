'use client';

import { motion } from 'framer-motion';
import { Plane, Building2, Users, Hotel, UserCheck, Car, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Plane,
    title: 'Airport Transfer',
    description: 'Fixed-rate airport transfers to and from Bahrain International Airport (BAH). We provide real-time flight tracking, professional meet-and-greet services at the Arrivals Hall, and priority terminal access for a frictionless welcome.',
    href: '/airport-transfer',
    decisionCode: 'What to Believe'
  },
  {
    icon: Building2,
    title: 'City Taxi',
    description: 'Dependable daily commutes, fast shopping trips to The Avenues Mall, and safe private hire across Manama, Muharraq, and Riffa. Enjoy point-to-point ground transportation without the unpredictability of surge pricing.',
    href: '/city-taxi',
    decisionCode: 'What to Trust'
  },
  {
    icon: Briefcase,
    title: 'Corporate Taxi',
    description: 'Dedicated chauffeur services and VIP logistical support for business meetings, diplomatic transport, and corporate roadshows across the Kingdom of Bahrain.',
    href: '/corporate-travel',
    decisionCode: 'Who to Follow'
  },
  {
    icon: Hotel,
    title: 'Hotel Pickup',
    description: 'Direct, uninterrupted transfers from the airport or any city location to major hotels in the Diplomatic Area, resorts in Zallaq, or luxury residences in Amwaj Islands.',
    href: '/contact',
    decisionCode: 'What to Try'
  },
  {
    icon: UserCheck,
    title: 'Chauffeur Service',
    description: 'Premium chauffeur-driven mobility solutions tailored for special occasions, half-day city tours, and VIP clients demanding an impeccably maintained, odor-free cabin.',
    href: '/contact',
    decisionCode: 'What to Think'
  },
  {
    icon: Users,
    title: 'Family Van (7 Seater)',
    description: 'Spacious 7-seater Kia Carnival vans, perfect for large families arriving with oversized luggage, or group excursions requiring comfortable, climate-controlled seating.',
    href: '/fleet',
    decisionCode: 'What to Trust'
  },
  {
    icon: Car,
    title: 'VIP Black Car',
    description: 'An executive fleet of Mercedes-Benz and BMW vehicles providing the ultimate luxury environment for professionals requiring a quiet, business-class cabin.',
    href: '/fleet',
    decisionCode: 'What to Think'
  },
  {
    icon: Briefcase,
    title: 'Specialist Mobility',
    description: "Bespoke transport protocols for Saudi Causeway Border Transfers, secure Student Transport, and Pet-Friendly relocations. We handle the complex logistics so you don't have to.",
    href: '/contact',
    decisionCode: 'What to Believe'
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-b border-slate-100">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl font-light">
            Comprehensive, strictly regulated premium taxi services for all your ground transportation needs in the Kingdom of Bahrain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors border border-amber-200/50">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest px-2 py-1 bg-amber-50 rounded italic border border-amber-100">
                      Decide: {service.decisionCode}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-amber-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <Link href={service.href} className="mt-auto inline-flex items-center text-amber-600 font-semibold hover:text-amber-800 transition-colors w-max uppercase tracking-wider text-sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
