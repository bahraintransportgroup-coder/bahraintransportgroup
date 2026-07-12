import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Clock, DollarSign, MapPin, Zap, Shield, ThumbsUp } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي داخل مدينة البحرين | خدمة على مدار 24 ساعة',
    description: 'خدمة تاكسي داخل المدينة في جميع أنحاء البحرين لعام 2026. متوفرون على مدار الساعة في المنامة والمحرق والرفاع. استجابة سريعة وسائقون محترفون.',
    keywords: 'تاكسي المنامة, تاكسي المحرق, تاكسي الرفاع, خدمة تاكسي البحرين, تاكسي داخل المدينة',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/city-taxi',
});

const features = [
    { icon: Clock, title: 'متوفرون 24/7', description: 'خدمة على مدار الساعة لجميع تنقلاتك داخل المدينة' },
    { icon: Zap, title: 'استجابة سريعة', description: 'استقبال سريع خلال 10 دقائق في معظم المناطق' },
    { icon: DollarSign, title: 'أسعار تنافسية', description: 'أسعار ثابتة بدون رسوم مخفية' },
    { icon: Shield, title: 'رحلة آمنة', description: 'سائقون مرخصون وسيارات بحالة ممتازة' },
    { icon: MapPin, title: 'تغطية شاملة', description: 'خدمة في المنامة والمحرق والرفاع وكل المناطق' },
    { icon: ThumbsUp, title: 'حجز سهل', description: 'احجز عبر واتساب أو نموذج الحجز الإلكتروني' },
];

export default function ArabicCityTaxiPage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('مرحباً! أرغب في حجز تاكسي داخل المدينة.');

    return (
        <div className="bg-white" dir="rtl">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            خدمة تاكسي داخل المدينة
                        </span>
                        <br />
                        <span className="text-slate-900">في جميع أنحاء البحرين</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        تاكسي سريع وموثوق في المنامة والمحرق والرفاع وجميع مدن البحرين
                        <br />
                        <span className="text-amber-600">متوفرون 24/7 • أسعار تنافسية • سائقون محترفون</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            احجز تاكسي عبر واتساب
                        </GradientButton>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-right">
                        <strong className="text-slate-900 block mb-1">ما هي المناطق التي تغطونها لخدمة التاكسي داخل المدينة؟</strong>
                        نوفر خدمة تاكسي شاملة على مدار الساعة في جميع أنحاء مملكة البحرين، بما في ذلك المنامة والمحرق والرفاع والمناطق الشمالية. يمكنكم حجز سائق محترف فوراً للرحلات الخاصة والتنقلات اليومية.
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">لماذا يثق بنا السكان والزوار</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <FloatingCard key={i} delay={i * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">{f.title}</h3>
                                        <p className="text-slate-600">{f.description}</p>
                                    </div>
                                </FloatingCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection locale="ar" />
        </div>
    );
}
