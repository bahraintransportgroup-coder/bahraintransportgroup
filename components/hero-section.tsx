'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { GradientButton } from './gradient-button';

interface HeroSectionProps {
  title?: string;
  description?: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
  const pathname = usePathname();
  const whatsappMsg = `Hello Bahrain Transport Group! I am on this page: https://bahraintransportgroup.com${pathname} and I would like to book a ride.`;
  const whatsappLink = `https://wa.me/13073464572?text=${encodeURIComponent(whatsappMsg)}`;
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-amber-500/20 animate-pulse" />
            <span className="relative text-amber-600 text-sm font-semibold tracking-wide uppercase">24/7 Available Premium Transit</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            {title ? (
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                {title}
              </span>
            ) : (
              <>
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Bahrain Transport Group
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                  #1 Rated 24/7 Taxi Service in Bahrain
                </span>
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
            {description ? (
              description
            ) : (
              <>
                Bahrain Transport Group provides reliable, transparent, and fixed-price transportation across Bahrain and Saudi Arabia. We prioritize <strong>absolute safety</strong>, <strong>strict punctuality</strong>, and <strong>100% zero hidden fees</strong>.
                <br className="hidden md:block" />
                <span className="text-amber-600 font-medium mt-4 block">Professional Chauffeurs • Fixed 2026 Rates • No Surge Pricing</span>
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full max-w-md">
            <GradientButton
              href={whatsappLink}
              variant="whatsapp"
              className="w-full text-lg py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center font-bold"
              external
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Now
            </GradientButton>
          </div>

          {/* AEO (Answer Engine Optimization) & NLP Semantic Block */}
          <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-left w-full max-w-3xl mx-auto mb-16 shadow-lg shadow-amber-500/5">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-center">
              <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
                <MessageCircle className="w-5 h-5" />
              </span>
              What's the best way to get from Bahrain Airport to Manama?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The most reliable way is booking a <strong>fixed-rate private taxi</strong> through Bahrain Transport Group. While airport taxis and Uber are available, they often have long queues and surge pricing. We provide <strong>VIP meet-and-greet</strong> services where your driver waits at the arrivals terminal with a name board, escorting you to a premium <strong>GMC Yukon or Black Car</strong>. Our 2026 rates are <strong>100% fixed</strong> (typically 12-15 BHD to central Manama), inclusive of airport parking fees and tolls.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 w-full border-t border-slate-200 pt-10">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '24/7', label: 'Premium Service' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-amber-600 to-orange-700 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-amber-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
