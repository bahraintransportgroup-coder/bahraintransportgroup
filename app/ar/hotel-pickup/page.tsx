import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { Hotel, Clock, Shield, MapPin, Luggage, Star } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'استقبال وتوصيل من الفندق في البحرين | تاكسي بسعر ثابت',
    description: 'احجزوا خدمة استقبال وتوصيل موثوقة من وإلى أي فندق في البحرين. تحويلات بسعر ثابت إلى المنطقة الدبلوماسية ومنتجعات الزلاق وجزر أمواج وفنادق منطقة السيف، على مدار الساعة.',
    keywords: 'استقبال من الفندق البحرين, تاكسي الفندق البحرين, توصيل الفندق المنامة, تاكسي المنتجع البحرين, تاكسي فندق جزر أمواج',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/hotel-pickup',
});

const features = [
    {
        icon: Clock,
        title: 'في الوقت المحدد دائماً',
        description: 'يتمركز السائقون بالقرب من فندقكم مسبقاً، ويتابعون جدولكم الزمني حتى لا تنتظروا أبداً في اللوبي.',
    },
    {
        icon: Luggage,
        title: 'مساعدة كاملة بالأمتعة',
        description: 'مساعدة على طراز خدمة حمل الحقائب من اللوبي إلى السيارة، مثالية للضيوف الذين يحملون حقائب متعددة.',
    },
    {
        icon: Shield,
        title: 'سائقون موثوقون',
        description: 'سائقون بزي رسمي وخاضعون للتحقق من الخلفية، يعرفون كل مدخل فندق رئيسي وطريق خدمة.',
    },
    {
        icon: MapPin,
        title: 'كل الفنادق مشمولة',
        description: 'من المنطقة الدبلوماسية ومنطقة السيف إلى منتجعات الزلاق ومساكن جزر أمواج.',
    },
];

const hotelAreas = [
    { name: 'المنطقة الدبلوماسية والسيف', description: 'فنادق أعمال خمس نجوم تشمل فورسيزونز وريتز كارلتون وداون تاون روتانا.' },
    { name: 'الزلاق ودرة البحرين', description: 'منتجعات وفلل شاطئية تتطلب تحويلات لمسافات أطول تركز على الراحة.' },
    { name: 'جزر أمواج', description: 'مساكن على الواجهة البحرية وشقق مخدومة تحظى بشعبية لدى الضيوف طويلي الإقامة.' },
    { name: 'الجفير والعدلية', description: 'فنادق بوتيك وشقق مخدومة قريبة من حياة المنامة الليلية والمطاعم.' },
];

export default function HotelPickupArabicPage() {
    const whatsappMsg = `مرحباً بحرين ترانسبورت جروب! أرغب في حجز استقبال/توصيل من الفندق. فندقي هو: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'هل يمكنكم استقبالي مباشرة من لوبي الفندق؟',
            answer: 'نعم. يتواصل سائقونا مع كونسيرج الفندق أو ينتظرون عند المدخل الرئيسي حسب بروتوكول المكان، ويتابعون وقت الاستقبال لضمان جاهزية السيارة عند وصولكم.',
        },
        {
            question: 'هل تقدمون تحويلات من فندق إلى فندق وليس فقط رحلات المطار؟',
            answer: 'نعم. تتولى بحرين ترانسبورت جروب التحويلات من فندق إلى فندق ومن الفندق إلى أي مكان في المملكة، وليس فقط مسارات المطار، وكل ذلك بنفس نظام التسعير الثابت 100%.',
        },
        {
            question: 'هل يمكنني حجز رحلة ذهاب وإياب لكامل إقامتي في الفندق؟',
            answer: 'نعم، يمكن للضيوف الحجز المسبق لعدة عمليات استقبال وتوصيل لكامل مدة إقامتهم في محادثة واحدة مع فريق الإرسال لدينا المتاح على مدار الساعة عبر واتساب، بما في ذلك سعر يومي ثابت.',
        },
    ];

    return (
        <div className="bg-white" dir="rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/ar/hotel-pickup', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Hotel className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            استقبال من الفندق
                        </span>
                        <br />
                        <span className="text-slate-900">وخدمة التوصيل</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        تحويلات مباشرة ومتواصلة من وإلى أي فندق في البحرين، من أبراج الأعمال في المنطقة الدبلوماسية إلى منتجعات الزلاق ومساكن جزر أمواج. بدون انتظار في اللوبي، وبدون تسعير مرتفع في أوقات الذروة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            احجز توصيل الفندق عبر واتساب
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Hotel className="w-6 h-6 text-amber-600" />
                            كيف أحجز استقبالاً من الفندق في البحرين؟
                        </h2>
                        <p>
                            راسلوا فريق الإرسال لدينا المتاح على مدار الساعة عبر واتساب مع اسم فندقكم ووقت الاستقبال. توفر بحرين ترانسبورت جروب تحويلات <strong>بسعر ثابت</strong> بين أي فندق ووجهة في المملكة، مع تأكيد السائقين مسبقاً حتى لا تنتظروا أبداً في اللوبي.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                لماذا توصي الفنادق بـ BTG
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
                                مناطق الفنادق التي نغطيها
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hotelAreas.map((area, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div className="flex items-start gap-4">
                                    <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{area.name}</h3>
                                        <p className="text-slate-600">{area.description}</p>
                                    </div>
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
