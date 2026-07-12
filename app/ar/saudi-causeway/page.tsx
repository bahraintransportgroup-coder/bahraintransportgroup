import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Car, Clock, Shield, DollarSign, Map } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي جسر الملك فهد | نقل بين البحرين والسعودية',
    description: 'احجز تاكسي عبر جسر الملك فهد بين البحرين والسعودية. عبور مباشر بدون تغيير السيارة، رسوم الجسر مشمولة، حجز على مدار الساعة.',
    keywords: 'تاكسي البحرين السعودية, تاكسي جسر الملك فهد, تاكسي حدود البحرين السعودية, تاكسي الدمام الخبر الرياض',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/saudi-causeway',
});

const features = [
    { icon: Clock, title: 'إجراءات سريعة', description: 'سائقون يعرفون إجراءات الجسر جيداً لتقليل وقت الانتظار.' },
    { icon: Map, title: 'من الباب إلى الباب', description: 'استقبال وتوصيل مباشر بين البحرين والسعودية دون انقطاع.' },
    { icon: DollarSign, title: 'سعر ثابت شامل', description: 'سعر واضح يشمل جميع رسوم العبور والتأمين.' },
    { icon: Shield, title: 'إجراءات آمنة', description: 'جميع أوراق العبور ومعايير السلامة موثقة رسمياً.' },
];

export default function ArabicSaudiCausewayPage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('مرحباً! أرغب في حجز تاكسي عبر جسر الملك فهد.');

    const faqs = [
        { q: 'هل أحتاج لتغيير السيارة عند الحدود السعودية البحرينية؟', a: 'لا، مع بحرين ترانسبورت جروب تبقى في نفس السيارة من البحرين إلى السعودية. أسطولنا يملك تصاريح عبور حدودي خاصة لرحلة سلسة.' },
        { q: 'ما هو سعر التاكسي من البحرين إلى الدمام؟', a: 'نقدم نظام تسعير ثابت 100% يشمل جميع الرسوم. تواصل مع فريق الحجز عبر واتساب على مدار الساعة للحصول على عرض سعر محدد.' },
        { q: 'هل يمكنني الحصول على تاكسي من مطار البحرين إلى السعودية؟', a: 'نعم، نوفر نقل مباشر من مطار البحرين الدولي إلى أي وجهة في السعودية مع خدمة استقبال داخل الصالة.' },
    ];

    return (
        <div className="bg-white" dir="rtl">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            جسر الملك فهد
                        </span>
                        <br />
                        <span className="text-slate-900">نقل حدودي بسعر ثابت</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
                        خدمة تاكسي فاخرة وسلسة للعبور الحدودي بين مملكة البحرين والمملكة العربية السعودية. سواء كنت مسافراً بين المنامة والظهران للأعمال أو رحلة عائلية إلى الخبر، نضمن لك رحلة مريحة.
                    </p>
                    <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        أسطولنا يحمل تصاريح عبور حدودي خاصة، مما يتيح لك السفر عبر جسر الملك فهد دون انقطاع تغيير السيارة عند نقطة التفتيش.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            احجز عبور الجسر عبر واتساب
                        </GradientButton>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            كيف أحجز تاكسي من البحرين إلى السعودية؟
                        </h2>
                        <p>
                            نوفر خدمة تاكسي بسعر ثابت على مدار الساعة بين البحرين والسعودية عبر جسر الملك فهد. يبقى الركاب في نفس السيارة طوال الرحلة، بينما يتولى سائقونا المعتمدون جميع إجراءات الجمارك والرسوم إلى الدمام أو الخبر أو الرياض.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">مميزات عبور الجسر</span>
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

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">الأسئلة الشائعة</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
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
