'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);

      if (data) {
        setTestimonials(data);
      }
    }
    fetchTestimonials();
  }, []);

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
              Latest Verified Reviews 2026
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 font-light">
            Trusted by thousands of satisfied customers. Consistently rated <strong>5-Stars</strong> across major independent platforms including <strong>Google Business, TripAdvisor, Trustpilot, and Yelp</strong>.
          </p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="font-bold text-slate-900">4.9/5 on Google</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
              <Star className="w-5 h-5 text-green-500 fill-green-500" />
              <span className="font-bold text-slate-900">Top Rated on TripAdvisor</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
              <Star className="w-5 h-5 text-blue-500 fill-blue-500" />
              <span className="font-bold text-slate-900">Excellent on Trustpilot</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-6"
            >
              <div className="flex-shrink-0 pt-2">
                <Quote className="w-12 h-12 text-amber-200" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed italic border-l-2 border-amber-300 pl-4">{testimonial.review}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-xl border border-amber-200">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm font-medium text-amber-600 uppercase tracking-widest">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
