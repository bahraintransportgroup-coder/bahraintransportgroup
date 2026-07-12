import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { BookingForm } from '@/components/booking-form';
import { GradientButton } from '@/components/gradient-button';

export const metadata: Metadata = generateSEO({
    title: 'اتصل بنا - احجز تاكسيك في البحرين | خدمة 24/7',
    description: 'تواصل مع بحرين ترانسبورت جروب للحجز والاستفسارات. متوفرون على مدار الساعة عبر واتساب أو نموذج الحجز الإلكتروني. استجابة سريعة مضمونة!',
    keywords: 'اتصل بتاكسي البحرين, احجز تاكسي البحرين, حجز تاكسي واتساب البحرين',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/contact',
});

const contactInfo = [
    { icon: MessageCircle, title: 'واتساب', details: '+966 569487569', link: 'https://wa.me/966569487569?text=' + encodeURIComponent('مرحباً! أنا في صفحة التواصل وأرغب في حجز تاكسي.') },
    { icon: Mail, title: 'البريد الإلكتروني', details: 'info@bahraintransportgroup.com', link: 'mailto:info@bahraintransportgroup.com' },
    { icon: MapPin, title: 'الموقع', details: 'المنامة، البحرين', link: '#map' },
];

export default function ArabicContactPage() {
    return (
        <div className="bg-white" dir="rtl">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            اتصل بنا
                        </span>
                        <br />
                        <span className="text-slate-900">نحن هنا لخدمتك</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        تواصل معنا على مدار الساعة لحجز تاكسي فاخر، توصيل مطار، أو نقل الشركات. فريق الحجز جاهز لمساعدتك بتأكيد فوري وأسعار ثابتة.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {contactInfo.map((info, i) => {
                            const Icon = info.icon;
                            return (
                                <FloatingCard key={i} delay={i * 0.1}>
                                    <a href={info.link} className="flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900">{info.title}</h3>
                                        <p className="text-amber-600 hover:text-amber-700 transition-colors" dir="ltr">{info.details}</p>
                                    </a>
                                </FloatingCard>
                            );
                        })}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <FloatingCard>
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                    حجز سريع
                                </span>
                            </h2>
                            <p className="text-slate-600 mb-6">
                                أرسل تفاصيل رحلتك أدناه للحصول على سعر ثابت. فريق الحجز في المنامة يراقب الطلبات على مدار الساعة ويضمن تأكيداً فورياً لجميع رحلات المطار والمدينة ونقل الشركات.
                            </p>
                            <BookingForm locale="ar" />
                        </FloatingCard>

                        <div className="space-y-6">
                            <FloatingCard>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">ساعات العمل</h3>
                                        <p className="text-slate-600 mb-2">متوفرون على مدار الساعة، كل أيام السنة</p>
                                        <ul className="space-y-1 text-slate-600 text-sm">
                                            <li>الإثنين - الأحد: 24 ساعة</li>
                                            <li>العطلات الرسمية: 24 ساعة</li>
                                            <li>لا رسوم إضافية للخدمة الليلية</li>
                                        </ul>
                                    </div>
                                </div>
                            </FloatingCard>

                            <FloatingCard>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">لماذا تحجز معنا؟</h3>
                                <ul className="space-y-3">
                                    {['تأكيد فوري', 'سائقون محترفون', 'سعر ثابت بدون تسعير مفاجئ', 'سيارات نظيفة وحديثة', 'متابعة موعد الرحلة', 'دعم عملاء على مدار الساعة'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600">
                                            <div className="w-2 h-2 rounded-full bg-amber-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </FloatingCard>

                            <FloatingCard>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">تواصل معنا عبر واتساب</h3>
                                <p className="text-slate-600 mb-4">
                                    تحدث مباشرة مع فريق الحجز للحصول على حجز فوري من أي مكان في المنامة أو خارجها.
                                </p>
                                <GradientButton
                                    href={'https://wa.me/966569487569?text=' + encodeURIComponent('مرحباً! أنا في صفحة التواصل وأرغب في حجز تاكسي.')}
                                    variant="whatsapp"
                                    className="w-full sm:w-auto h-12 px-8"
                                    external
                                >
                                    <MessageCircle className="w-5 h-5 ml-2" />
                                    واتساب: +966 569487569
                                </GradientButton>
                            </FloatingCard>
                        </div>
                    </div>
                </div>
            </section>

            <section id="map" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">موقعنا</span>
                        </h2>
                        <p className="text-xl text-slate-600">نخدم جميع مناطق البحرين</p>
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
        </div>
    );
}
