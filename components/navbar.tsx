'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Car, Facebook, Instagram, Twitter, Mail, Languages } from 'lucide-react';
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

const navLinksAr = [
  { name: 'الرئيسية', href: '/ar' },
  { name: 'توصيل المطار', href: '/ar/airport-transfer' },
  { name: 'تاكسي المدينة', href: '/ar/city-taxi' },
  { name: 'جسر الملك فهد', href: '/ar/saudi-causeway' },
  { name: 'حاسبة الأجرة', href: '/ar/fare-calculator' },
  { name: 'اتصل بنا', href: '/ar/contact' },
];

interface NavbarProps {
  locale?: 'en' | 'ar';
}

export function Navbar({ locale = 'en' }: NavbarProps) {
  const isArabic = locale === 'ar';
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = isArabic ? navLinksAr : navLinks;
  const switchHref = isArabic
    ? (pathname === '/ar' ? '/' : pathname.replace(/^\/ar/, '') || '/')
    : (pathname === '/' ? '/ar' : `/ar${pathname}`);

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
            <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-green-400 transition-colors text-green-400 font-semibold">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span>+966 569487569</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">{isArabic ? 'تابعنا:' : 'Follow Us:'}</span>
            <a href="https://facebook.com/bahraintransportgroup" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="https://instagram.com/bahraintransportgroup" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="https://twitter.com/bahraintransport" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors" aria-label="Twitter"><Twitter className="w-3.5 h-3.5" /></a>
            <Link href={switchHref} className="flex items-center gap-1 hover:text-amber-500 transition-colors font-semibold border-l border-white/10 pl-4 ml-2">
              <Languages className="w-3.5 h-3.5" /> {isArabic ? 'English' : 'العربية'}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={isArabic ? '/ar' : '/'} className="flex items-center space-x-2 sm:space-x-3 group min-w-0 pr-2">
            <LogoSVG className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] transition-all shrink-0 rounded-full" />
            <div className="min-w-0">
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent truncate">
                {isArabic ? 'بحرين ترانسبورت' : 'Bahrain Transport'}
              </span>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate mt-0.5">{isArabic ? 'خدمة مميزة' : 'Premium Service'}</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
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

            <GradientButton href={isArabic ? '/ar/contact' : '/contact'} variant="primary">
              {isArabic ? 'احجز الآن' : 'Book Now'}
            </GradientButton>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
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
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={switchHref}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all font-semibold"
              >
                <Languages className="w-4 h-4" /> {isArabic ? 'English' : 'العربية'}
              </Link>
              <div className="pt-4 space-y-3">
                <a
                  href="https://wa.me/966569487569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WhatsApp: +966 569487569
                </a>
                <GradientButton href={isArabic ? '/ar/contact' : '/contact'} variant="primary" className="w-full">
                  {isArabic ? 'احجز الآن' : 'Book Now'}
                </GradientButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
