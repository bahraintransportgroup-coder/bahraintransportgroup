import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { BookingForm } from '@/components/booking-form';
import { GradientButton } from '@/components/gradient-button';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';
import { StructuredData } from '@/components/structured-data';

const contactFaqs = [
  {
    question: "Is it safe for a solo female traveler to book late at night?",
    answer: "Absolutely. Safety is our #1 priority. Unlike anonymous app drivers, every BTG chauffeur is a registered commercial professional with an active background check. Your ride is GPS-tracked in real-time by our Manama dispatch office."
  },
  {
    question: "What if my flight is delayed? Will I be charged extra?",
    answer: "No extra waiting charges for flight delays. We monitor your flight number in real-time. Whether you land at 2 PM or 2 AM, your driver will be waiting in the Arrivals Hall with your name board."
  },
  {
    question: "Do you provide child seats for families?",
    answer: "Yes. Simply mention the age of the child when booking on WhatsApp. We can dispatch vehicles equipped with ISOFIX child safety seats to ensure your family's protection."
  },
  {
    question: "Can I pay in Saudi Riyals (SAR) or US Dollars?",
    answer: "Yes. While our quotes are in Bahraini Dinars (BHD), our drivers accept SAR, USD, and major credit cards via portable POS terminals, provided you request this at the time of booking."
  }
];

const breadcrumbs = [
  { name: 'Home', item: 'https://bahraintransportgroup.com' },
  { name: 'Contact', item: 'https://bahraintransportgroup.com/contact' },
];

export const metadata: Metadata = generateSEO({
  title: 'Contact Us - Book Your Taxi in Bahrain | 24/7 Service',
  description: 'Contact Bahrain Transport Group for bookings and inquiries. Available 24/7 via WhatsApp, or online booking form. Fast response guaranteed!',
  keywords: 'contact bahrain taxi, book taxi bahrain, taxi booking bahrain, whatsapp taxi bahrain',
  canonicalUrl: 'https://bahraintransportgroup.com/contact',
});

const contactInfo = [

  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: '+92 317 624 3861',
    link: 'https://wa.me/923176243861?text=Hello%21%20I%20am%20on%20the%20Contact%20page%20and%20I%20would%20like%20to%20book%20a%20taxi.',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@bahraintransportgroup.com',
    link: 'mailto:info@bahraintransportgroup.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Manama, Bahrain',
    link: '#map',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <StructuredData faqs={contactFaqs} breadcrumbs={breadcrumbs} />
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Contact Us
            </span>
            <br />
            <span className="text-slate-900">Get in Touch</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Contact us 24/7 for premium taxi bookings, airport transfers, and
            corporate travel. Our dispatch team is ready to help you with instant confirmations and fixed-rate quotes.
          </p>

          <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left text-balance">
            <strong className="text-slate-900 block mb-1">How do I contact a taxi in Bahrain?</strong>
            Bahrain Transport Group can be contacted 24/7 via WhatsApp or phone at <strong>+92 317 624 3861</strong>. The company provides immediate taxi dispatch across Manama, Muharraq, and all other governorates. For the fastest response and guaranteed fixed pricing, the BTG dispatch team recommends messaging directly on WhatsApp with pickup and drop-off details.
          </div>
        </div>
      </section>

      <AIHomeEntityOverview serviceName="24/7 Taxi Booking Support" city="Bahrain" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <FloatingCard key={index} delay={index * 0.1}>
                  <a
                    href={info.link}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{info.title}</h3>
                    <p className="text-amber-600 hover:text-amber-700 transition-colors">
                      {info.details}
                    </p>
                  </a>
                </FloatingCard>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <FloatingCard>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                  Quick Booking
                </span>
              </h2>
              <p className="text-slate-600 mb-6">
                Submit your trip details below for a fixed-rate transportation quote. Our Manama-based dispatch team monitors requests 24/7 and guarantees instant confirmation for all airport transfers, city rides, and corporate travel across the Kingdom.
              </p>

              {/* AEO Passage */}
              <div className="bg-amber-50 rounded-2xl p-6 mb-6 border border-amber-200 shadow-sm">
                <h3 className="text-lg font-bold text-amber-900 mb-2">How fast will my taxi arrive in Bahrain?</h3>
                <p className="text-amber-800">
                  If you need immediate transportation, Bahrain Transport Group drivers typically arrive within 10 to 15 minutes. Because we maintain a centralized dispatch system in Manama with a large, dedicated premium fleet always on duty, we can rapidly deploy vehicles directly to popular areas like Seef District, Juffair, Amwaj Islands, and Muharraq without the delays common with app-based ride-hailing services.
                </p>
              </div>
              <BookingForm />
            </FloatingCard>

            <div className="space-y-6">
              <FloatingCard>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Operating Hours</h3>
                    <p className="text-slate-600 mb-2">We are available 24/7, every day of the year</p>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>Monday - Sunday: 24 Hours</li>
                      <li>Public Holidays: 24 Hours</li>
                      <li>No extra charges for night service</li>
                    </ul>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Why Book With Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Instant confirmation',
                    'Professional drivers',
                    'Fixed rates - no surge pricing',
                    'Clean and modern vehicles',
                    'Flight tracking for airport transfers',
                    'Customer support 24/7',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  Our Response Guarantee: <span className="text-amber-600">Under 180 Seconds</span> for WhatsApp dispatch requests [2026 Audit].
                </div>
              </FloatingCard>

              <FloatingCard>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Reach Out on WhatsApp</h3>
                <p className="text-slate-600 mb-4">
                  Chat directly with our dispatch team for immediate booking from anywhere in Manama or beyond. WhatsApp is highly recommended for immediate pickups or late-night airport emergencies.
                </p>
                <div className="space-y-3">

                  <GradientButton
                    href="https://wa.me/923176243861?text=Hello%21%20I%20am%20on%20the%20Contact%20page%20and%20I%20would%20like%20to%20book%20a%20taxi."
                    variant="whatsapp"
                    className="w-full sm:w-auto h-12 px-8"
                    external
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp: +92 317 624 3861
                  </GradientButton>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Real Questions from our <span className="text-amber-600">Sales Conversations</span>
            </h2>
            <p className="text-slate-600">Based on common inquiries from our WhatsApp dispatch transcripts</p>
          </div>

          <div className="grid gap-6">
            {contactFaqs.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 italic">
                  "{item.question}"
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed border-l-4 border-amber-500 pl-4">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 48: OFFICIAL REGULATORY CITATIONS (EEAT REINFORCEMENT) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Official Industry & <br />Regulatory References</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                As part of our commitment to transparency and E-E-A-T standards, we provide direct access to the official governing bodies and information portals that regulate transport and border logistics in the Kingdom of Bahrain.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center font-bold text-slate-900">!</div>
                <p className="text-xs text-slate-300">
                  <b>Disclaimer:</b> These are third-party official resources provided for passenger convenience and regulatory verification purposes.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 grid gap-4">
              {[
                {
                  title: 'Ministry of Transportation (MTT)',
                  desc: 'Public transport regulations and licensing standards in Bahrain.',
                  url: 'https://www.mtt.gov.bh'
                },
                {
                  title: 'King Fahad Causeway Authority',
                  desc: 'Real-time transit protocols and border requirements.',
                  url: 'https://www.kfca.com.sa'
                },
                {
                  title: 'Bahrain International Airport (BAH)',
                  desc: 'Official 2026 flight status and arrival hall logistics.',
                  url: 'https://www.bahrainairport.bh'
                }
              ].map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-amber-500/50 transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-bold text-slate-100 group-hover:text-amber-500 transition-colors uppercase tracking-widest text-xs mb-1">{ref.title}</h3>
                    <p className="text-sm text-slate-400">{ref.desc}</p>
                  </div>
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                    <Clock className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Find Us
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Serving all areas across Bahrain
            </p>
          </div>

          <FloatingCard>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230425.9518415039!2d50.4585!3d26.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5c9e577c1b1%3A0x6a60b2b0d7f5f5!2sBahrain!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FloatingCard>
        </div>
      </section>
    </div >
  );
}
