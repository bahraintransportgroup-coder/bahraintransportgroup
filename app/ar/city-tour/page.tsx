import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { Compass, Clock, MapPin, Camera, Shield, Landmark } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'استئجار تاكسي بالساعة وجولة المدينة في البحرين | باقات نصف يوم ويوم كامل',
    description: 'استأجروا سائقاً مخصصاً بالساعة لاستكشاف البحرين بالوتيرة التي تناسبكم. باقات جولة مدينة لمدة 4 أو 8 أو 12 ساعة تغطي متحف البحرين الوطني وباب البحرين وقلعة البحرين.',
    keywords: 'جولة مدينة البحرين, استئجار تاكسي بالساعة البحرين, جولة سياحية المنامة, تاكسي جولة يومية البحرين, جولة نصف يوم البحرين',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/city-tour',
});

const packages = [
    { duration: '4 ساعات', title: 'مستكشف نصف اليوم', description: 'مثالية لزيارة مركزة لـ 2-3 مواقع رئيسية، مثل متحف البحرين الوطني وسوق باب البحرين.' },
    { duration: '8 ساعات', title: 'اكتشاف اليوم الكامل', description: 'يوم كامل هادئ يغطي المواقع التاريخية وقلعة البحرين والتسوق وتوقف غداء من اختياركم.' },
    { duration: '12 ساعة', title: 'برنامج ممتد', description: 'للزوار الذين يرغبون بالجمع بين المشاهدة السياحية واجتماعات العمل أو الزيارات العائلية في أنحاء الجزيرة.' },
];

const features = [
    {
        icon: Clock,
        title: 'وتيرتكم، توقفاتكم',
        description: 'ينتظر السائق في كل موقع؛ لا عداد يعمل أثناء تجولكم السياحي.',
    },
    {
        icon: Compass,
        title: 'معرفة محلية بالطرق',
        description: 'سائقون على دراية بمتاحف المنامة وأسواقها وقلاعها وأفضل نقاط التصوير.',
    },
    {
        icon: Shield,
        title: 'سعر باقة ثابت',
        description: 'سعر واحد متفق عليه لكامل فترة الاستئجار، بغض النظر عن الازدحام أو عدد التوقفات.',
    },
    {
        icon: Camera,
        title: 'برنامج مرن',
        description: 'أضيفوا أو احذفوا توقفات في اليوم نفسه؛ تتكيف الخطة معكم، وليست نصاً ثابتاً.',
    },
];

export default function CityTourArabicPage() {
    const whatsappMsg = `مرحباً بحرين ترانسبورت جروب! أرغب في حجز جولة مدينة بالساعة. المدة المفضلة لدي هي: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'هل يمكنني حجز تاكسي لجولة مدينة لمدة 4 ساعات في المنامة؟',
            answer: 'نعم. تقدم بحرين ترانسبورت جروب خدمات استئجار بالساعة مع سائق مخصص لمدة 4 أو 8 أو 12 ساعة، مما يتيح لكم زيارة متحف البحرين الوطني وباب البحرين وقلعة البحرين بالوتيرة التي تناسبكم.',
        },
        {
            question: 'هل السعر ثابت لكامل الجولة، أم يتغير حسب الازدحام؟',
            answer: 'السعر ثابت لكامل فترة الاستئجار التي تحجزونها، سواء كانت 4 أو 8 أو 12 ساعة، بغض النظر عن عدد التوقفات التي تقومون بها أو مقدار الازدحام المروري الذي تواجهونه.',
        },
        {
            question: 'هل يمكنني تغيير برنامجي أثناء الجولة؟',
            answer: 'نعم، بما أن السيارة والسائق مستأجَران لكامل المدة، يمكنكم تعديل التوقفات أو إضافة مواقع إضافية أو تمديد المسار طالما بقيتم ضمن الساعات المحجوزة.',
        },
    ];

    return (
        <div className="bg-white" dir="rtl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/ar/city-tour', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Landmark className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            استئجار بالساعة
                        </span>
                        <br />
                        <span className="text-slate-900">تاكسي جولة المدينة</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        سائق واحد، سيارة واحدة، مستأجَرة لعدد من الساعات حتى تتمكنوا من استكشاف متاحف المنامة وأسواقها وقلاعها دون مراقبة عداد أو إعادة حجز بين التوقفات.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            احجز جولة مدينة عبر واتساب
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Compass className="w-6 h-6 text-amber-600" />
                            هل يمكنني حجز تاكسي لجولة مدينة في المنامة؟
                        </h2>
                        <p>
                            نعم، تقدم BTG خدمات "الاستئجار بالساعة". يمكنكم الحصول على سائق مخصص لمدة 4 أو 8 أو 12 ساعة لزيارة متحف البحرين الوطني وباب البحرين وقلعة البحرين بالوتيرة التي تناسبكم، وكل ذلك بسعر ثابت واحد.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                باقات الجولات
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {packages.map((pkg, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div className="text-center">
                                    <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4">{pkg.duration}</span>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">{pkg.title}</h3>
                                    <p className="text-slate-600 text-sm">{pkg.description}</p>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                لماذا الاستئجار بالساعة
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
