import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Shield, Clock, Heart, Car, MapPin, CheckCircle, Dog } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي صديق للحيوانات الأليفة في البحرين | خدمة نقل آمنة للحيوانات',
    description: 'تقدم بحرين ترانسبورت جروب خدمة نقل احترافية صديقة للحيوانات الأليفة في جميع أنحاء البحرين. سواء لزيارة بيطرية أو انتقال، نوفر رحلات مريحة وآمنة لكم ولأصدقائكم ذوي الفراء.',
    keywords: 'نقل الحيوانات الأليفة البحرين, تاكسي صديق للحيوانات البحرين, تاكسي كلاب المنامة, نقل قطط البحرين, خدمة نقل الحيوانات',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/pet-transport',
});

const features = [
    {
        icon: Heart,
        title: 'راحة الحيوان أولاً',
        description: 'السيارات مجهزة لضمان بيئة خالية من التوتر للحيوانات الأليفة من جميع الأحجام، مع تحكم بالمناخ ومقصورات واسعة.',
    },
    {
        icon: Shield,
        title: 'آمن ومضمون',
        description: 'سائقون مدربون يعطون الأولوية لاحتياجات مسافري الحيوانات الأليفة الخاصة أثناء التنقل في المطار والمدينة.',
    },
    {
        icon: CheckCircle,
        title: 'مقصورة صحية',
        description: 'يتم تعقيم كل سيارة مهنياً بعد نقل الحيوانات الأليفة للحفاظ على أعلى معايير النظافة.',
    },
    {
        icon: Car,
        title: 'سيارات SUV واسعة',
        description: 'يتم استخدام سيارات SUV كبيرة مثل جي إم سي يوكن وكيا كارنيفال لضمان ملاءمة حتى الأقفاص كبيرة الحجم بشكل مريح.',
    },
];

export default function PetTransportArabicPage() {
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent('مرحباً بحرين ترانسبورت جروب! أرغب في حجز رحلة صديقة للحيوانات الأليفة. ما هي أسعاركم؟')}`;

    return (
        <div className="bg-white" dir="rtl">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Dog className="w-8 h-8 text-amber-700" />
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">إصدار النظام</span>
                            <span className="text-sm font-bold text-slate-900">بروتوكول v3.2</span>
                        </div>
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">آخر تحديث</span>
                            <span className="text-sm font-bold text-slate-900">يونيو 2026</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            رحلات صديقة للحيوانات الأليفة
                        </span>
                        <br />
                        <span className="text-slate-900">في البحرين</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        بحرين ترانسبورت جروب واحدة من خدمات التاكسي القليلة الصديقة للحيوانات الأليفة بنسبة 100% في المملكة. من زيارات الطبيب البيطري إلى عمليات الانتقال عبر المطار الدولي، تضمن BTG رحلة مريحة لكل من الحيوانات الأليفة وأصحابها.
                    </p>

                    {/* Practical Experience Factor (EEAT) */}
                    <div className="bg-slate-900 p-8 rounded-[32px] text-right max-w-3xl mx-auto border border-slate-800 relative overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Shield className="w-24 h-24 text-white" />
                        </div>
                        <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <Clock className="w-4 h-4" /> تقرير تجربة الانتقال
                        </h3>
                        <p className="text-white text-lg leading-relaxed mb-6 font-medium italic">
                            "عندما احتاجت عائلة إلى نقل ثلاثة كلاب گولدن ريتريفر كبيرة إلى المطار خلال صيف بحريني بحرارة 45 درجة مئوية، أرسلت BTG سيارتي SUV بتحكم مناخي وتهوية مخصصة. تولينا العملية بأكملها من فيلتهم في سار إلى محطة الشحن، وضمنا وصول الحيوانات هادئة ورطبة الجسم. نتولى 'لوجستيات الحيوانات الأليفة' المعقدة التي لا تستطيع التطبيقات التعامل معها ببساطة."
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">نتيجة موثقة</p>
                                <p className="text-sm font-bold text-white">100% نجاح في عمليات الانتقال</p>
                            </div>
                            <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">مواصفات الأسطول</p>
                                <p className="text-sm font-bold text-white">سيارات V8 بتحكم مناخي</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            احجز رحلة لحيوانك الأليف عبر واتساب
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Dog className="w-6 h-6 text-amber-600" />
                            كيف أحجز تاكسي لحيواني الأليف في البحرين؟
                        </h2>
                        <p>
                            حجز <strong>تاكسي صديق للحيوانات الأليفة</strong> مع بحرين ترانسبورت جروب عملية سلسة. يمكن للمسافرين التواصل مع فريق الإرسال المتاح على مدار الساعة عبر <strong>واتساب</strong> مع تفاصيل حجم الحيوان وسلالته. يتم بعدها إرسال سيارات SUV أو حافلات صغيرة واسعة وبتحكم مناخي لضمان أقصى درجات الراحة. تحافظ BTG على <strong>تسعير ثابت وشفاف</strong> لجميع تنقلات الحيوانات الأليفة، دون أي رسوم إضافية مفاجئة للرحلات المحلية.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                سياستنا الخاصة بالحيوانات الأليفة
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600">رعاية متميزة لكل فرد من أفراد عائلتكم.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-amber-100 flex items-center justify-center mb-4 shadow-sm group-hover:bg-amber-500 transition-colors">
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-10 md:p-16 text-white text-center shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">"رحلات آمنة لكل الأقدام"</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                            تحتاجون لرحلة إلى الطبيب البيطري أو الانتقال مع حيوانكم الأليف؟ نتولى تحويلات المطار للحيوانات الأليفة وأصحابها برعاية احترافية.
                        </p>
                        <div className="flex justify-center">
                            <GradientButton href={whatsappLink} variant="whatsapp" className="bg-white text-amber-700" external>
                                استفسر الآن
                            </GradientButton>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection locale="ar" />
        </div>
    );
}
