import Link from 'next/link';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { governorates } from '@/lib/locations';
import { LogoSVG } from './logo-svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <LogoSVG className="w-12 h-12 rounded-full shrink-0" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                  Bahrain Transport Group
                </h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              BEST premium taxi service in Bahrain. Available 24/7 Near Me for airport transfers and city rides across all governorates.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/bahraintransportgroup"
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-amber-50 flex items-center justify-center transition-colors border border-slate-100"
                aria-label="Bahrain Transport Group Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-slate-600 hover:text-amber-600" />
              </a>
              <a
                href="https://instagram.com/bahraintransportgroup"
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-amber-50 flex items-center justify-center transition-colors border border-slate-100"
                aria-label="Bahrain Transport Group Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-slate-600 hover:text-amber-600" />
              </a>
              <a
                href="https://twitter.com/bahraintransport"
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-amber-50 flex items-center justify-center transition-colors border border-slate-100"
                aria-label="Bahrain Transport Group Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-slate-600 hover:text-amber-600" />
              </a>
              <a
                href="https://linkedin.com/company/bahraintransportgroup"
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-amber-50 flex items-center justify-center transition-colors border border-slate-100"
                aria-label="Bahrain Transport Group LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-slate-600 hover:text-amber-600" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              <li><Link href="/" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/locations" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Service Areas</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Travel Guides</Link></li>
              <li><Link href="/help-center" className="text-amber-600 font-bold hover:text-amber-700 transition-colors text-sm">AI Help Center</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Book a Taxi</Link></li>
            </ul>

            <h4 className="text-slate-900 font-semibold mb-4 text-xs uppercase tracking-widest text-slate-400">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/airport-transfer" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Airport Transfers</Link></li>
              <li><Link href="/saudi-causeway" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Saudi Causeway</Link></li>
              <li><Link href="/student-transport" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Student Transport</Link></li>
              <li><Link href="/pet-transport" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Pet-Friendly Rides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">The Premium Fleet</h4>
            <ul className="space-y-2 mb-6">
              <li><Link href="/fleet" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">VIP Black Car Service</Link></li>
              <li><Link href="/fleet" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Family SUV (7 Seater)</Link></li>
              <li><Link href="/fleet" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Standard Economy Taxi</Link></li>
              <li><Link href="/fleet" className="text-slate-600 hover:text-amber-600 transition-colors text-sm">Corporate Chauffeur</Link></li>
            </ul>

            <h4 className="text-slate-900 font-semibold mb-4">Verified Reputation</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://trustpilot.com/review/bahraintransportgroup.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-amber-600 transition-colors text-sm flex items-center gap-2">
                  <span className="text-green-500">★</span> 4.9 on Trustpilot
                </a>
              </li>
              <li>
                <a href="https://tripadvisor.com/Profile/bahraintransport" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-amber-600 transition-colors text-sm flex items-center gap-2">
                  <span className="text-green-500">★</span> TripAdvisor Choice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Contact Info & Safety</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-tighter">Phone / WhatsApp (24/7)</p>
                  <a href="https://wa.me/923176243861" className="text-slate-900 font-bold hover:text-amber-600 transition-colors text-sm" itemProp="telephone">
                    +92 317 624 3861
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-500 text-xs">Direct Support</p>
                  <a href="mailto:info@bahraintransportgroup.com" className="text-slate-900 hover:text-amber-600 transition-colors text-sm break-all" itemProp="email">
                    info@bahraintransportgroup.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-900 text-sm font-bold">Main Office</p>
                  <p className="text-slate-600 text-sm" itemProp="streetAddress">Building 1131, Road 2113</p>
                  <p className="text-slate-600 text-sm">
                    <span itemProp="addressLocality">Block 321, Manama</span>, <span itemProp="addressCountry">Bahrain</span>
                  </p>
                  <p className="text-slate-400 text-xs mt-1 border-l-2 border-amber-500 pl-2 italic">Trusted by thousands of travelers and local residents.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Location Map</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden rounded-xl border border-slate-200 shadow-sm relative mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114510.82583856236!2d50.45719369931792!3d26.242781442008888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a5826fdb2bb1%3A0xe9f79b1adfb4f3c0!2sManama%2C%20Bahrain!5e0!3m2!1sen!2sus!4v1714420000000!5m2!1sen!2sus"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-[10px] text-slate-400 leading-tight">
              Looking for a <strong>taxi service near me</strong> or a reliable <strong>local cab service near me</strong>? Save our <strong>taxi booking number</strong>. As a leading <strong>transport bahrain</strong> provider, we offer the fastest <strong>bah taxi</strong> and <strong>city taxi number</strong> dispatch across all areas.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Bahrain Transport Group™. All rights reserved.
              <span className="block mt-1 text-[10px] opacity-50 uppercase tracking-widest font-mono">
                Official Registered Commercial Company.
              </span>
            </p>
            <div className="flex items-center gap-6">
              <Link href="/sitemap.xml" className="text-slate-400 hover:text-amber-600 text-sm transition-colors">Sitemap</Link>
              <Link href="/privacy-policy" className="text-slate-400 hover:text-amber-600 text-sm transition-colors">Privacy</Link>
              <Link href="/terms-and-conditions" className="text-slate-400 hover:text-amber-600 text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
