import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { Heart, Car, Shield, Clock, Users, Sparkles } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'نقل الأعراس والمناسبات في البحرين | خدمة موكب سيارات VIP',
    description: 'احجزوا سيارات VIP مزينة ومواكب متعددة السيارات منسقة للأعراس والخطوبات والمناسبات الخاصة في البحرين. خدمة سائق خاص بسعر ثابت، حجز على مدار الساعة.',
    keywords: 'سيارة زفاف البحرين, نقل أعراس البحرين, نقل مناسبات المنامة, موكب زفاف البحرين, استئجار سيارة خطوبة البحرين',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/wedding-transport',
});

const features = [
    {
        icon: Sparkles,
        title: 'سيارات VIP مزينة',
        description: 'سيارات مرسيدس بنز وبي إم دبليو تنفيذية، مجهزة ومنسقة ليوم مناسبتكم.',
    },
    {
        icon: Users,
        title: 'مواكب منسقة',
        description: 'سيارات متعددة يتم إرسالها وتوقيتها معاً لموكب العرس والضيوف.',
    },
    {
        icon: Clock,
        title: 'جدولة دقيقة',
        description: 'أوقات استقبال ووصول مخططة حول جدول حفل الزفاف والاستقبال.',
    },
    {
        icon: Shield,
        title: 'سائقون محترفون وكتومون',
        description: 'سائقون بزي رسمي ذوو خبرة في لوجستيات يوم الزفاف وتوقفات التصوير.',
    },
];

const eventTypes = [
    { title: 'موكب يوم الزفاف', description: 'سيارة VIP رئيسية للعروسين بالإضافة إلى سيارات منسقة للعائلة المباشرة، مؤقتة وفق جدول حفل الزفاف.' },
    { title: 'ليلة الخطوبة والحناء', description: 'سيارات فاخرة للعروسين والعائلة المقربة عبر أماكن احتفال متعددة التوقفات.' },
    { title: 'خدمة نقل الضيوف', description: 'رحلات نقل مجدولة بين الفنادق ومكان المناسبة للضيوف القادمين من خارج المدينة.' },
    { title: 'نقل مواقع التصوير', description: 'سيارات جاهزة للعروسين اللذين يقومان بجلسات تصوير في مواقع متعددة عبر المنامة والساحل.' },
];

export default function WeddingTransportArabicPage() {
    const whatsappMsg = `مرحباً بحرين ترانسبورت جروب! أرغب في حجز نقل لزفاف/مناسبة. تاريخ مناسبتي هو: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'هل يمكنكم ترتيب عدة سيارات لموكب زفاف؟',
            answer: 'نعم. تنسق بحرين ترانسبورت جروب مواكب متعددة السيارات للعروسين والعائلة المباشرة والضيوف، جميعها يتم إرسالها وتوقيتها معاً وفق جدول مناسبتكم.',
        },
        {
            question: 'هل تقدمون سيارات مزينة للأعراس؟',
            answer: 'نعم، يمكن ترتيب سياراتنا الفاخرة من مرسيدس بنز وبي إم دبليو مع زينة ليوم الزفاف، بناءً على طلب مسبق أثناء الحجز.',
        },
        {
            question: 'كم من الوقت مسبقاً يجب أن أحجز نقل الزفاف؟',
            answer: 'نوصي بالحجز قبل 2-3 أسابيع على الأقل للأعراس لضمان توفر السيارات وإتاحة الوقت لتخطيط لوجستيات الموكب، رغم أن فريق الإرسال لدينا المتاح على مدار الساعة يمكنه استيعاب إشعار أقصر عند الإمكان.',
        },
    ];

    return (
        <div className="bg-white" dir="rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/ar/wedding-transport', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Heart className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            نقل الأعراس
                        </span>
                        <br />
                        <span className="text-slate-900">والمناسبات VIP</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        سيارات تنفيذية مزينة ومواكب متعددة السيارات منسقة للأعراس والخطوبات والمناسبات الخاصة في جميع أنحاء مملكة البحرين، مخططة حول جدولكم الزمني الدقيق.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            خطط لنقل مناسبتك
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            كيف أحجز نقل زفاف في البحرين؟
                        </h2>
                        <p>
                            تواصلوا مع فريق الإرسال لدينا المتاح على مدار الساعة عبر واتساب مع تاريخ مناسبتكم والمكان وعدد السيارات المطلوبة. تخطط بحرين ترانسبورت جروب موكباً منسقاً من سيارات VIP، مؤقتاً وفق جدول حفل الزفاف والاستقبال، مع تسعير ثابت متفق عليه قبل يوم المناسبة.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                مصممة ليومكم المميز
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-amber-100 flex items-center justify-center mb-4 shadow-sm">
                                            <Icon className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-600 text-sm">{feature.description}</p>
                                    </div>
                                </FloatingCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                المناسبات التي نغطيها
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {eventTypes.map((event, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                                    <p className="text-slate-600">{event.description}</p>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                الأسئلة الشائعة
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                                <p className="text-slate-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection locale="ar" />
        </div>
    );
}
