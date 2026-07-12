import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { Building2, Briefcase, UserCheck, Shield, Clock, MessageCircle, Star } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'سائق شركات وVIP في البحرين | سفر أعمال تنفيذي',
    description: 'خدمات نقل شركات وسائق VIP فاخرة في البحرين. سائقون محترفون، أسطول فاخر، وإدارة حسابات مخصصة للشركات والبعثات الدبلوماسية.',
    keywords: 'تاكسي شركات البحرين, سائق تنفيذي المنامة, نقل VIP البحرين, سفر أعمال البحرين, نقل دبلوماسي',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/corporate-travel',
});

const features = [
    {
        icon: Briefcase,
        title: 'مقصورة درجة رجال الأعمال',
        description: 'سيارات سيدان وSUV فاخرة محافظ عليها بعناية تشمل مرسيدس بنز وبي إم دبليو، توفر بيئة هادئة للعمل أو الاسترخاء.',
    },
    {
        icon: UserCheck,
        title: 'سائقون محترفون',
        description: 'سائقون يتحدثون الإنجليزية والعربية، بملابس رسمية ومدربون على آداب التعامل التنفيذي والكتمان.',
    },
    {
        icon: Clock,
        title: 'التزام موثوق بالمواعيد',
        description: 'وصول في الوقت المحدد مضمون لاجتماعات مجلس الإدارة ووصول المطار والجولات الترويجية للشركات في جميع أنحاء المملكة.',
    },
    {
        icon: Shield,
        title: 'أمان VIP',
        description: 'معالجة ذات أولوية ودعم لوجستي متخصص للبعثات الدبلوماسية والمدراء التنفيذيين البارزين.',
    },
];

export default function CorporateTravelArabicPage() {
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent('مرحباً بحرين ترانسبورت جروب! أرغب في مناقشة خدمات النقل للشركات لشركتي.')}`;

    return (
        <div className="bg-white" dir="rtl">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-full mb-6">
                        <Star className="w-8 h-8 text-amber-500" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                            الشركات وVIP
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">حلول السفر</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        بحرين ترانسبورت جروب هي الشريك اللوجستي المفضل للمدراء التنفيذيين للشركات والبعثات الدبلوماسية والمسافرين الفاخرين في البحرين. نقدم حلول سائق خاص مصممة خصيصاً تعكس المعايير المهنية لمؤسستكم.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="primary" external>
                            افتح حساب شركات
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-12 text-slate-300 leading-relaxed shadow-xl max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <Building2 className="w-6 h-6 text-amber-500" />
                            لماذا تختارونا لنقل الشركات؟
                        </h2>
                        <p>
                            نوفر <strong>مدراء حسابات مخصصين</strong>، وفوترة موحدة، وخط إرسال ذو أولوية على مدار الساعة لشركائنا من الشركات. يتكون أسطولنا حصرياً من <strong>سيارات تنفيذية حديثة الطراز</strong>، مما يضمن سفر عملائكم ومدرائكم التنفيذيين بأقصى درجات الراحة. نغطي جميع مراكز الأعمال الرئيسية بما في ذلك <strong>ميناء البحرين المالي</strong>، و<strong>منطقة السيف</strong>، و<strong>منتزه البحرين الدولي للاستثمار (BIIP)</strong>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                                معايير التنقل التنفيذي
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100 group-hover:bg-slate-900 transition-all duration-300">
                                            <Icon className="w-8 h-8 text-slate-900 group-hover:text-amber-500" />
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

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6">أسطولنا للأعمال</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                            اختاروا من فئات مركباتنا الفاخرة المصممة خصيصاً لمتطلبات الأعمال.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['سيارة VIP سوداء', 'SUV للأعمال', 'فان فاخر'].map((v, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                                <h3 className="font-bold text-slate-900 mb-2">{v}</h3>
                                <p className="text-sm text-slate-500 mb-4">ما يعادل مرسيدس/بي إم دبليو</p>
                                <Link href="/ar/fleet" className="text-amber-600 text-sm font-semibold hover:underline">عرض التفاصيل</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection locale="ar" />
        </div>
    );
}
