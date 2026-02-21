'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`relative bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
