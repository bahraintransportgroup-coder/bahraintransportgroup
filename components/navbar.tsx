'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Car, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { GradientButton } from './gradient-button';
import { LogoSVG } from './logo-svg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Airport Transfer', href: '/airport-transfer' },
  { name: 'City Taxi', href: '/city-taxi' },
  { name: 'Saudi Causeway', href: '/saudi-causeway' },
  { name: 'Calculator', href: '/fare-calculator' },
  { name: 'Guides', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white border-b border-slate-200 shadow-lg'
        : 'bg-transparent'
        }`}
    >
      {/* Top Bar - Hidden on mobile, visible on lg */}
      <div className={`hidden lg:block w-full border-b border-white/10 transition-colors ${scrolled ? 'bg-slate-900 border-slate-800' : 'bg-slate-900'} text-slate-300 py-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@bahraintransportgroup.com" className="flex items-center space-x-2 hover:text-amber-500 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@bahraintransportgroup.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span>Available 24/7 for Booking</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Follow Us:</span>
            <a href="https://facebook.com/bahraintransportgroup" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="https://instagram.com/bahraintransportgroup" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="https://twitter.com/bahraintransport" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" aria-label="Twitter"><Twitter className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0 pr-2">
            <LogoSVG className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] transition-all shrink-0 rounded-full" />
            <div className="min-w-0">
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent truncate">
                Bahrain Transport
              </span>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate mt-0.5">Premium Service</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">

            <GradientButton href="/contact" variant="primary">
              Book Now
            </GradientButton>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors shrink-0 ml-2"
          >
            {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">

                <GradientButton href="/contact" variant="primary" className="w-full">
                  Book Now
                </GradientButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
