'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { Car } from 'lucide-react';
import Link from 'next/link';
import { GradientButton } from './gradient-button';

const vehicles = [
  {
    name: 'Economy Sedan',
    model: 'Toyota Camry / Corolla',
    passengers: 4,
    luggage: 3,
  },
  {
    name: 'Family Van',
    model: '7-Seater Kia Carnival',
    passengers: 7,
    luggage: 5,
  },
  {
    name: 'Luxury SUV',
    model: 'GMC Yukon / V8',
    passengers: 6,
    luggage: 6,
  },
  {
    name: 'VIP Black Car',
    model: 'BMW 5 Series / Mercedes',
    passengers: 4,
    luggage: 3,
  },
];

export function FleetSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-b border-slate-100">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Our Fleet
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl font-light">
              Premium, highly-maintained vehicles for every occasion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GradientButton href="/fleet" variant="primary" className="shadow-none">
              View All Vehicles
            </GradientButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 mb-12">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer border-b-2 border-transparent hover:border-amber-500 pb-6 transition-all"
            >
              <div className="relative h-40 mb-6 rounded-2xl overflow-hidden bg-slate-50 group-hover:bg-amber-50/50 transition-colors flex items-center justify-center border border-slate-100">
                <Car className="w-16 h-16 text-amber-500/30 group-hover:text-amber-500/60 transition-colors group-hover:scale-110 duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-slate-900 group-hover:text-amber-700 transition-colors">{vehicle.name}</h3>
              <p className="text-amber-600 text-base mb-6 font-medium">{vehicle.model}</p>

              <div className="flex w-full items-center gap-6 text-sm border-t border-slate-100 pt-4">
                <div className="flex items-center space-x-2 text-slate-500 font-medium">
                  <Users className="w-5 h-5 text-slate-400" />
                  <span>{vehicle.passengers} Seats</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-500 font-medium">
                  <Briefcase className="w-5 h-5 text-slate-400" />
                  <span>{vehicle.luggage} Bags</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
