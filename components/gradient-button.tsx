'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  className?: string;
  external?: boolean;
}

export function GradientButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
}: GradientButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-[0_0_30px_rgba(251,146,60,0.5)]',
    secondary: 'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white shadow-[0_0_30px_rgba(100,116,139,0.3)]',
    whatsapp: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-[0_0_30px_rgba(34,197,94,0.5)]',
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    return <Link href={href}>{buttonContent}</Link>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}
