'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { GradientButton } from './gradient-button';

export function CTASection() {
  const pathname = usePathname();
  const whatsappMsg = `Hello Bahrain Transport Group! I am on this page: https://bahraintransportgroup.com${pathname} and I would like to book a ride.`;
  const whatsappLink = `https://wa.me/923176243861?text=${encodeURIComponent(whatsappMsg)}`;
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
              Ready to Ride?
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Book Your Taxi Today
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Available 24/7 Near Me for all your transportation needs in Bahrain
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GradientButton href="/contact" variant="primary">
              Book Now
            </GradientButton>
            <GradientButton
              href={whatsappLink}
              variant="whatsapp"
              external
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Now
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
