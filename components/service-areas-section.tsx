'use client';

import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Map } from 'lucide-react';
import { governorates } from '@/lib/locations';
import Link from 'next/link';
import { GradientButton } from './gradient-button';

export function ServiceAreasSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-100">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <span className="bg-amber-100 text-amber-600 p-2 rounded-xl">
              <Map className="w-8 h-8" />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Service Areas
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl font-light">
            We proudly cover all 4 governorates and 30+ distinct cities across the Kingdom of Bahrain, as well as seamless <strong>Saudi Causeway Border Transfers</strong> to Dammam and Khobar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-16">
          {governorates.map((gov, govIndex) => (
            <motion.div
              key={govIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: govIndex * 0.1 }}
              className="flex flex-col group border-b border-slate-200 pb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl leading-none">{gov.emoji}</span>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{gov.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                {gov.locations.slice(0, 3).map((location, index) => (
                  <Link
                    key={index}
                    href={`/locations/${location.slug}`}
                    className="flex items-center gap-3 group/link hover:pl-2 transition-all p-2 rounded-lg hover:bg-white"
                  >
                    <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-base text-slate-600 group-hover/link:text-amber-700 transition-colors font-medium truncate">
                      {location.name}
                    </span>
                  </Link>
                ))}
                {gov.locations.length > 3 && (
                  <Link
                    href="/locations"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-all text-amber-600 font-medium text-base hover:pl-4"
                  >
                    + {gov.locations.length - 3} more Locations
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left pt-6"
        >
          <GradientButton href="/locations" variant="primary" className="shadow-none">
            View All Covered Areas
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
