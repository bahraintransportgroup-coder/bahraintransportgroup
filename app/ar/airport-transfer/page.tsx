import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Plane, Clock, Shield, Luggage, MapPin, CheckCircle } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'توصيل مطار البحرين | تاكسي بسعر ثابت من وإلى المطار',
    description: 'توصيل مطار البحرين الدولي (BAH) بسعر ثابت. متابعة موعد الرحلة، استقبال داخل صالة الوصول، وأولوية الوصول للمحطة. احجز الآن عبر واتساب.',
    keywords: 'توصيل مطار البحرين, تاكسي مطار البحرين, استقبال مطار البحرين, أجرة توصيل المطار',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/airport-transfer',
});

const features = [
    { icon: Clock, title: 'متابعة موعد الرحلة', description: 'نتابع رحلتك مباشرة، فسواء تأخرت أو وصلت مبكراً، يكون السائق بانتظارك.' },
    { icon: Luggage, title: 'مساعدة في الأمتعة', description: 'سائقونا يساعدونك في حمل الحقائب من صالة الوصول إلى السيارة مباشرة.' },
    { icon: Shield, title: 'سعر ثابت 100%', description: 'لا رسوم انتظار مخفية ولا زيادة سعر عند وصول الرحلات الليلية.' },
    { icon: MapPin, title: 'استقبال داخل الصالة', description: 'سائق يحمل لوحة باسمك وينتظرك داخل صالة الوصول مباشرة.' },
];

export default function ArabicAirportTransferPage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('مرحباً! أرغب في حجز توصيل من/إلى مطار البحرين.');

    const faqs = [
        { q: 'هل يمكنكم استقبالي من داخل صالة الوصول في مطار البحرين؟', a: 'نعم، يقف سائقنا داخل صالة الوصول حاملاً لوحة باسمك، ويتابع رحلتك لضمان وصوله في الوقت المناسب حتى لو تأخرت الرحلة.' },
        { q: 'هل السعر يشمل رسوم الانتظار والركن؟', a: 'نعم، سعرنا ثابت 100% ويشمل جميع رسوم الانتظار والركن في المطار، بدون أي مفاجآت عند الوصول.' },
    ];

    return (
        <div className="bg-white" dir="rtl">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            توصيل مطار البحرين
                        </span>
                        <br />
                        <span className="text-slate-900">بسعر ثابت ومضمون</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        استقبال وتوصيل من وإلى مطار البحرين الدولي (BAH) مع متابعة موعد الرحلة واستقبال احترافي داخل صالة الوصول.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            احجز توصيل المطار عبر واتساب
                        </GradientButton>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3">كيف أحجز توصيل من مطار البحرين؟</h2>
                        <p>
                            تواصل مع فريق الحجز عبر واتساب على مدار الساعة مع تفاصيل رحلتك. سيقوم سائقنا بمتابعة موعد الهبوط والانتظار داخل صالة الوصول، مع سعر ثابت متفق عليه مسبقاً دون أي رسوم إضافية.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">لماذا يثق بنا المسافرون</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">الأسئلة الشائعة</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-amber-600" /> {faq.q}
                                </h3>
                                <p className="text-slate-700">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection locale="ar" />
        </div>
    );
}
