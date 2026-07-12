import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { UserCheck, Shield, Clock, Briefcase, Star, Car } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'خدمة السائق الخاص في البحرين | استئجار بالساعة واليوم',
    description: 'احجزوا سائقاً خاصاً ومحترفاً في البحرين بالساعة أو باليوم. خدمة سائق VIP للمدراء التنفيذيين والمناسبات الخاصة ورحلات المدينة متعددة التوقفات، متاحة على مدار الساعة.',
    keywords: 'خدمة السائق الخاص البحرين, سائق خاص البحرين, استئجار سائق المنامة, سائق شخصي البحرين, سائق تنفيذي البحرين',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/chauffeur-service',
});

const features = [
    {
        icon: UserCheck,
        title: 'سائق مخصص',
        description: 'يبقى معكم نفس السائق المحترف طوال مدة الاستئجار، وليس مجموعة متناوبة من السائقين.',
    },
    {
        icon: Briefcase,
        title: 'آداب العمل',
        description: 'مدربون على الكتمان والسلوك المهني لاجتماعات مجلس الإدارة والزيارات الدبلوماسية والعملاء المميزين.',
    },
    {
        icon: Clock,
        title: 'فترات استئجار مرنة',
        description: 'احجزوا بالساعة أو نصف يوم أو يوم كامل، مع انتظار السيارة لكم بين التوقفات.',
    },
    {
        icon: Shield,
        title: 'سيارات لا تشوبها شائبة',
        description: 'كل سيارة يتم تنظيفها وتجهيزها مهنياً وخالية من الروائح قبل كل مهمة.',
    },
];

const useCases = [
    { title: 'نقل تنفيذي ودبلوماسي', description: 'سائقون بارعون ودقيقو المواعيد لاجتماعات مجلس الإدارة وزيارات السفارات والجولات الترويجية في جميع أنحاء المملكة.' },
    { title: 'المناسبات الخاصة', description: 'سائق مخصص وسيارة فاخرة للذكرى السنوية أو أعياد الميلاد أو سهرة في العدلية والبلوك 338.' },
    { title: 'أيام المدينة متعددة التوقفات', description: 'سائق واحد، سيارة واحدة، ليوم كامل من التسوق والاجتماعات والمهام دون الحاجة لإعادة الحجز في كل مرحلة.' },
    { title: 'الضيوف الزائرون والشخصيات المهمة', description: 'سائق أنيق يتحدث الإنجليزية والعربية لاستضافة العائلة الزائرة أو العملاء أو كبار الشخصيات.' },
];

export default function ChauffeurServiceArabicPage() {
    const whatsappMsg = `مرحباً بحرين ترانسبورت جروب! أرغب في استئجار سائق خاص. التاريخ/المدة المفضلة لدي هي: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'هل يمكنني استئجار سائق لبضع ساعات فقط؟',
            answer: 'نعم. تقدم بحرين ترانسبورت جروب باقات سائق بالساعة تبدأ من 4 ساعات، بالإضافة إلى استئجار نصف يوم أو يوم كامل، وكل ذلك بسعر ثابت متفق عليه مسبقاً.',
        },
        {
            question: 'هل ينتظر السائق بين التوقفات؟',
            answer: 'نعم، يبقى سائقكم المخصص وسيارتكم في وضع الاستعداد بين التوقفات خلال فترة الاستئجار، لذا لا داعي لإعادة حجز سيارة جديدة لكل وجهة.',
        },
        {
            question: 'ما الفرق بين خدمة السائق الخاص والتاكسي العادي؟',
            answer: 'تخصص خدمة السائق الخاص سائقاً واحداً موثوقاً وسيارة واحدة حصرياً لكم طوال فترة الاستئجار كاملة، بدلاً من رحلة واحدة من نقطة إلى أخرى، وتشمل مستوى خدمة أكثر رسمية وكتماناً يناسب المدراء التنفيذيين والمناسبات الخاصة.',
        },
    ];

    return (
        <div className="bg-white" dir="rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/ar/chauffeur-service', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            سائق خاص
                        </span>
                        <br />
                        <span className="text-slate-900">خدمة في البحرين</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        سائق مخصص ومحترف وسيارة فاخرة، تُستأجر بالساعة أو باليوم. مصممة للمدراء التنفيذيين والمناسبات الخاصة ولكل من يريد سيارة واحدة وسائقاً واحداً لجدوله بالكامل.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            استأجر سائقاً عبر واتساب
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            كيف يعمل استئجار السائق بالساعة في البحرين؟
                        </h2>
                        <p>
                            تختارون وقت البدء والمدة (4 أو 8 أو 12 ساعة)، وتخصص بحرين ترانسبورت جروب سائقاً وسيارة مخصصين لكامل هذه الفترة. ينتظر السائق بين التوقفات، حتى تتمكنوا من إجراء الاجتماعات أو المهام أو جولات المشاهدة دون حجز رحلة جديدة في كل مرة. يكون التسعير ثابتاً ومتفقاً عليه قبل الانطلاق.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                ما الذي تحصلون عليه
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/50">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.description}</p>
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
                                حالات الاستخدام الشائعة
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div className="flex items-start gap-4">
                                    <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{useCase.title}</h3>
                                        <p className="text-slate-600">{useCase.description}</p>
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
