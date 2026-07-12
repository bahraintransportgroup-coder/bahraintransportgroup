import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { CTASection } from '@/components/cta-section';
import { GradientButton } from '@/components/gradient-button';
import { LogoSVG } from '@/components/logo-svg';
import Link from 'next/link';
import {
    MapPin,
    Compass,
    Lightbulb,
    Calendar,
    Landmark,
    ShoppingBag,
    Sun,
    Ticket,
    Sparkles,
    ShieldCheck,
    Phone,
    Info,
    CheckCircle,
    XCircle,
    Clock,
    HelpCircle,
    Users,
    Plane,
    Car,
    Briefcase,
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'أنشطة سياحية في البحرين - أبرز المعالم والدليل السياحي',
    description:
        'اكتشف أفضل الأنشطة السياحية في البحرين. مواقع تاريخية، شواطئ، ملاهي مائية، تسوق، وتجارب فريدة. احجز تاكسي إلى أي معلم سياحي مع بحرين ترانسبورت جروب.',
    keywords:
        'أنشطة سياحية في البحرين, معالم البحرين, دليل سياحي البحرين, متحف البحرين الوطني, قلعة البحرين, شجرة الحياة البحرين, فورمولا 1 البحرين, فردوس ديلمون المفقود, سوق المنامة, جزر حوار',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/things-to-do',
});

const attractionCategories = [
    {
        title: 'أبرز المعالم التاريخية والثقافية',
        emoji: '🏛️',
        icon: Landmark,
        color: 'from-amber-500 to-orange-600',
        badgeColor: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        attractions: [
            {
                name: 'متحف البحرين الوطني',
                description: 'أكبر متحف في المملكة، يضم قطعاً أثرية تعرض تاريخ البحرين العريق والغني الممتد لآلاف السنين.',
            },
            {
                name: 'مسار اللؤلؤ',
                description: 'مسار مدرج في قائمة التراث العالمي لليونسكو يعرض إرث الغوص على اللؤلؤ الأسطوري في البحرين واقتصاد اللؤلؤ التقليدي.',
            },
            {
                name: "قلعة البحرين (قلعة البحرين)",
                description: 'قلعة أثرية وموقع تاريخي قديم. احجز تاكسي مسبقاً لزيارات الغروب لتجنب عدم موثوقية سيارات الأجرة العادية عند الغسق خارج القلعة.',
            },
            {
                name: 'مسجد الفاتح الكبير',
                description: 'أحد أكبر المساجد في العالم. عمارة مذهلة ومفتوح لجولات إرشادية للزوار من جميع الأديان.',
            },
            {
                name: 'البيوت القديمة في المحرق',
                description: 'مبانٍ تاريخية مُرمّمة بشكل جميل تعرض الحياة التقليدية لجزيرة البحرين وإرثها المعماري.',
            },
            {
                name: 'بيت القرآن',
                description: 'متحف جميل مخصص لمخطوطات القرآن الكريم، يضم نسخاً نادرة وقديمة من مختلف أنحاء العالم الإسلامي.',
            },
            {
                name: 'معبد شرينثجي',
                description: 'أحد أقدم المعابد الهندوسية في منطقة الخليج، يقع في قلب المنامة. شاهد على تنوع البحرين.',
            },
        ],
    },
    {
        title: 'الأسواق ومعالم المدينة',
        emoji: '🛍️',
        icon: ShoppingBag,
        color: 'from-rose-500 to-pink-600',
        badgeColor: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
        attractions: [
            {
                name: 'باب البحرين وسوق المنامة',
                description: 'أكثر الأسواق التقليدية حيوية في البحرين. تجنب التنقل عبر الشوارع الضيقة والمزدحمة باستلام سائقنا لك وإنزالك مباشرة عند قوس البوابة.',
            },
            {
                name: 'مراسي غاليريا وشاطئ تشيبريانى',
                description: 'تجربة تسوق أنيقة في ديار المحرق مع متاجر المصممين ومشهد طعام ساحلي فاخر.',
            },
            {
                name: 'جزيرة الريف وأفق المنامة',
                description: 'عمارة حديثة، وفنادق فاخرة، وممرات ساحلية خلابة بإطلالات بانورامية على أفق مدينة المنامة.',
            },
        ],
    },
    {
        title: 'الطبيعة والشواطئ والجزر',
        emoji: '🌞',
        icon: Sun,
        color: 'from-cyan-500 to-teal-600',
        badgeColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
        attractions: [
            {
                name: 'جزر حوار',
                description: 'جنة منعزلة من الشواطئ الهادئة، ومراقبة الطيور ذات المستوى العالمي، واسترخاء تام بعيداً عن البر الرئيسي.',
            },
            {
                name: 'الجزائر / شاطئ مراسي',
                description: 'شمس وبحر وأنشطة مائية مثيرة. أحد أكثر الوجهات الشاطئية شعبية في البحرين للعائلات والأزواج.',
            },
            {
                name: 'محمية العرين للحياة البرية',
                description: 'مسارات طبيعية ولقاءات قريبة مع الحياة البرية العربية بما في ذلك المها والغزلان والطيور الغريبة.',
            },
            {
                name: 'جزر الدار',
                description: 'على بُعد رحلة قصيرة بالقارب - شواطئ نقية، ومياه صافية كالبلور، ووقت هادئ في المحيط.',
            },
        ],
    },
    {
        title: 'المرح والترفيه',
        emoji: '🎢',
        icon: Ticket,
        color: 'from-violet-500 to-purple-600',
        badgeColor: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
        attractions: [
            {
                name: 'ملاهي فردوس ديلمون المفقود المائية',
                description: 'أكبر مغامرة ملاهي مائية في البحرين. إذا كنت مسافراً من الجفير، فإن الحجز المسبق لأحد فاناتنا العائلية ذات 7 مقاعد هو الطريقة الأكثر توفيراً للتنقل الجماعي.',
            },
            {
                name: 'أكواريوم مراسي وحديقة الحيوان تحت الماء',
                description: 'معارض مذهلة للحياة البحرية تضم أسماك القرش، وأسماك الراي، والأسماك الاستوائية الملونة في منشأة حديثة.',
            },
            {
                name: 'حلبة البحرين الدولية',
                description: 'موطن سباق جائزة البحرين الكبرى المثير للفورمولا 1. تقدّم تجارب، وسباقات كارتينغ، وسباقات دراغ على مدار العام.',
            },
            {
                name: 'جرافيتي للقفز الحر الداخلي',
                description: 'اشعر بإثارة السقوط الحر في نفق رياح عمودي قوي - دون الحاجة إلى طائرة أو مظلة!',
            },
        ],
    },
    {
        title: 'تجارب فريدة',
        emoji: '🐪',
        icon: Sparkles,
        color: 'from-amber-600 to-yellow-500',
        badgeColor: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
        attractions: [
            {
                name: 'شجرة الحياة',
                description: 'تقع شجرة الحياة في عمق الصحراء الجنوبية، ويصعب الوصول إليها عبر تطبيقات طلب الركوب العادية. يقدّم سائقونا خدمة انتظار مخصصة لنصف يوم، لإعادتك بأمان إلى المنامة.',
            },
            {
                name: 'رحلة قارب الداو التقليدي',
                description: 'اختبر إرث الغوص على اللؤلؤ في البحرين من البحر على متن قارب داو خشبي تقليدي. رحلات الغروب لا تُنسى.',
            },
        ],
    },
];

export default function ThingsToDoPageAr() {
    return (
        <div className="bg-white" dir="rtl">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6">
                        <Compass className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-600">
                            دليلك السياحي في البحرين
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            أنشطة سياحية
                        </span>
                        <br />
                        <span className="text-slate-900">في البحرين</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        من القلاع القديمة إلى الملاهي المائية المثيرة - اكتشف أفضل ما في
                        مملكة البحرين
                        <br />
                        <span className="text-amber-600">
                            سنوصلك إلى هناك • متاحون على مدار الساعة
                        </span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href="/ar/contact" variant="primary">
                            احجز تاكسي إلى أي معلم سياحي
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-8 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-right">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Lightbulb className="w-6 h-6 text-amber-600" />
                            كيف تتنقل في البحرين كسائح؟
                        </h2>
                        <p>
                            بالنسبة للسياح الزائرين لمملكة البحرين، فإن الطريقة الأكثر كفاءة وراحة لاستكشاف أبرز المعالم السياحية مثل <strong>متحف البحرين الوطني</strong>، و<strong>قلعة البحرين</strong>، و<strong>شجرة الحياة</strong>، هي الحجز المسبق لخدمة تاكسي احترافية. على عكس سيارات الأجرة العادية التي قد يتفاوت تسعيرها أو تطبيقات طلب الركوب التي ترتفع أسعارها في ساعات الذروة السياحية، تقدّم <strong>بحرين ترانسبورت جروب</strong> نقلاً بسعر ثابت 100%. سياراتنا الرياضية V8 النظيفة والمكيّفة وفاناتنا العائلية ذات 7 مقاعد متاحة على مدار الساعة لتوفير تنقل سلس من الباب إلى الباب إلى المولات، والمواقع التاريخية، وحلبة الفورمولا 1.
                        </p>
                    </div>
                </div>
            </section>

            {/* AIHomeEntityOverview inline Arabic replacement */}
            <section className="py-24 bg-white border-b border-slate-100" id="comprehensive-guide">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col md:flex-row items-center gap-6 mb-16 pb-12 border-b border-slate-100">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden flex-shrink-0 border-2 border-amber-200">
                                <LogoSVG className="w-full h-full object-cover p-1" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="font-bold text-slate-900">العمليات المحلية لبحرين ترانسبورت جروب</p>
                                    <ShieldCheck className="w-5 h-5 text-green-600" />
                                </div>
                                <p className="text-sm text-slate-500">
                                    <span className="text-amber-700 font-bold uppercase tracking-tighter ml-2 text-xs">خدمة موثّقة</span>
                                    خبراء المنطقة المحلية | أكثر من 10 سنوات خبرة في البحرين | مملكة البحرين
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 md:border-r md:pr-8 border-slate-100">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-2">تواصل معنا</span>
                                <a
                                    href="https://wa.me/966569487569"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-green-700" />
                                    <span className="text-xs font-bold text-green-700">التواصل عبر واتساب</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
                                الدليل الشامل<br />
                                لـ <span className="text-amber-600">تاكسي المعالم السياحية في البحرين</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light max-w-4xl">
                                توفر بحرين ترانسبورت جروب خدمة نقل بري فاخرة وموثوقة على مدار الساعة في جميع المناطق الرئيسية في البحرين. من خلال تشغيل أسطول حديث مخصص، ندعم السياح والمقيمين المحليين والمدراء التنفيذيين للشركات الذين يحتاجون إلى رحلات آمنة ومحجوزة مسبقاً دون تسعير مرتفع. من نقل مضمون من مطار البحرين الدولي إلى تنقلات VIP للشركات في منطقة السفارات بالمنامة، يضمن أسطولنا وصولك إلى وجهتك بأمان وفي الوقت المحدد. تابع القراءة لاكتشاف كيف تقارن خدمتنا، وما هي تكلفتها، ولماذا نحن الخيار الأول لآلاف المسافرين.
                            </p>
                        </div>

                        <div className="mb-16 bg-slate-50 p-8 md:p-10 rounded-3xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <Info className="w-6 h-6 text-amber-600" /> ما هي أكثر خدمة تاكسي موثوقة في البحرين؟
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-lg mb-4">
                                تُعتبر بحرين ترانسبورت جروب على نطاق واسع أكثر خدمة تاكسي موثوقة في البحرين. على عكس تطبيقات طلب الركوب التقليدية، نقدّم نظام تسعير ثابت محسوب مسبقاً بنسبة 100%، ونضمن إرسالاً دقيق المواعيد على مدار الساعة دون تسعير مرتفع، مع سائقين محترفين يتحدثون الإنجليزية في مركبات VIP حديثة.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                سواء كنت بحاجة إلى نقل فوري من مبنى مطار البحرين الدولي أو فان عائلي آمن عبر المملكة، ما عليك سوى مراسلة مركز الإرسال المركزي لدينا عبر واتساب لتحصل فوراً على عرض سعر ثابت دقيق.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mt-10">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b border-amber-200 pb-2 inline-block">من يحتاج هذه الخدمة؟</h3>
                                <p className="text-slate-600 leading-relaxed mb-4 text-lg">تخدم خدمة تاكسي المعالم السياحية المخصصة لدينا في البحرين ثلاث فئات رئيسية تحديداً:</p>
                                <ul className="space-y-4 text-slate-600 list-none">
                                    <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>السياح والزوار:</strong> القادمون إلى مطار البحرين الدولي متجهين إلى الفنادق أو لاستكشاف المواقع التاريخية مثل قلعة البحرين.</span></li>
                                    <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>العائلات المحلية:</strong> المقيمون الذين يحتاجون إلى فانات فسيحة (مثل Kia Carnival) للتنقل الجماعي الآمن، أو توصيل المدارس، أو رحلات نهاية الأسبوع.</span></li>
                                    <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>الشركات:</strong> المدراء التنفيذيون الذين يحتاجون إلى نقل VIP لاجتماعات في ميناء البحرين المالي أو رحلات عبر جسر الملك فهد إلى السعودية.</span></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b border-amber-200 pb-2 inline-block">لماذا هي مهمة في البحرين؟</h3>
                                <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                                    يأتي التنقل في البحرين مصحوباً بتحديات إقليمية. خلال حرارة الصيف الشديدة، لا يُعد المشي لطلب سيارة أجرة أمراً عملياً. علاوة على ذلك، خلال المواسم الذروة مثل سباق جائزة الفورمولا 1 أو عطلات الشتاء، تشهد تطبيقات طلب الركوب تسعيراً مرتفعاً هائلاً ونقصاً في السائقين.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    تحل بحرين ترانسبورت جروب هذه المشكلة من خلال توفير خط نقل ثابت وموثوق إلى مواقع حيوية مثل مجمع السلمانية الطبي، ومطار البحرين الدولي، ومراكز الأعمال الرئيسية، بمعزل تام عن ارتفاعات الطلب المحلية.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h3 className="text-3xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                            <Phone className="w-8 h-8 text-amber-600" /> كيف تعمل الخدمة: حجز تاكسي المعالم السياحية
                        </h3>
                        <p className="text-slate-600 mb-10 text-xl font-light">اتبع هذه الخطوات البسيطة لتأمين رحلتك الفاخرة مع بحرين ترانسبورت جروب.</p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="border-r-4 border-amber-200 pr-6 py-2">
                                <span className="text-amber-600 font-bold block mb-2 tracking-widest text-sm uppercase">الخطوة 1</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">أرسل طلبك</h4>
                                <p className="text-slate-600 leading-relaxed">تواصل مع مركز الإرسال لدينا على مدار الساعة عبر واتساب أو نموذجنا الإلكتروني. زوّدنا بموقع الانطلاق في البحرين، ووجهتك، والوقت المطلوب.</p>
                            </div>
                            <div className="border-r-4 border-amber-400 pr-6 py-2">
                                <span className="text-amber-600 font-bold block mb-2 tracking-widest text-sm uppercase">الخطوة 2</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">استلم عرض سعر ثابت</h4>
                                <p className="text-slate-600 leading-relaxed">سيرد فريقنا فوراً بسعر ثابت وشفاف. لا توجد رسوم خفية، ولن يرتفع السعر أبداً.</p>
                            </div>
                            <div className="border-r-4 border-amber-600 pr-6 py-2">
                                <span className="text-amber-600 font-bold block mb-2 tracking-widest text-sm uppercase">الخطوة 3</span>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">تتبّع واصعد</h4>
                                <p className="text-slate-600 leading-relaxed">استلم بيانات التواصل المباشر مع سائقك وموقعه المباشر. تصل مركبتك النظيفة والمكيّفة في الوقت المحدد تماماً.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-24">
                        <div className="flex flex-col">
                            <HelpCircle className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">ما هي المناطق التي تغطونها؟</h4>
                            <p className="text-slate-600 leading-relaxed">نغطي كل حي في البحرين، بما في ذلك جزر أمواج، وسار، والرفاع، والرحلات العابرة للحدود إلى السعودية عبر جسر الملك فهد.</p>
                        </div>
                        <div className="flex flex-col">
                            <Plane className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">هل تتابعون رحلات الطيران؟</h4>
                            <p className="text-slate-600 leading-relaxed">نعم. بالنسبة لرحلات المطار، نراقب رادارات الطيران العالمية. إذا تأخر وصولك إلى مطار البحرين الدولي، نُعدّل موعد الاستلام دون أي رسوم إضافية.</p>
                        </div>
                        <div className="flex flex-col">
                            <Clock className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">ما مدى سرعة الاستجابة؟</h4>
                            <p className="text-slate-600 leading-relaxed">توقعات الوقت: إذا كنت في وسط البحرين، توقع وصول سائق مخصص مسبقاً خلال 10 إلى 15 دقيقة بعد التأكيد.</p>
                        </div>
                        <div className="flex flex-col">
                            <Users className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">هل يمكنكم التعامل مع مجموعات كبيرة؟</h4>
                            <p className="text-slate-600 leading-relaxed">بالتأكيد. لدينا فانات عائلية فسيحة (حتى 7 ركاب) مثالية للجولات الجماعية إلى شجرة الحياة أو العشاءات متعددة العائلات.</p>
                        </div>
                        <div className="flex flex-col">
                            <Car className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">ماذا يحدث في حالات الطوارئ؟</h4>
                            <p className="text-slate-600 leading-relaxed">إذا كانت لديك حالة طبية طارئة في وقت متأخر من الليل للوصول إلى مستشفى الملك حمد الجامعي، غالباً ما تكون سياراتنا المرسلة على مدار الساعة الخيار الأسرع والأكثر موثوقية.</p>
                        </div>
                        <div className="flex flex-col">
                            <Calendar className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="text-xl font-bold text-slate-900 mb-3">ما مدى مرونة الإلغاء؟</h4>
                            <p className="text-slate-600 leading-relaxed">مرنة جداً. يمكنك إلغاء حجزك بأمان حتى ساعتين قبل موعد الاستلام المحدد دون مواجهة أي غرامات صارمة.</p>
                        </div>
                    </div>

                    <div className="mb-24 bg-amber-50/50 p-8 md:p-12 rounded-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <Briefcase className="w-8 h-8 text-amber-600" />
                            <h3 className="text-3xl font-extrabold text-slate-900">كم تبلغ التكلفة؟</h3>
                        </div>
                        <p className="text-slate-600 mb-8 text-xl font-light">نؤمن بالشفافية المطلقة. يتم تحديد أسعار تاكسي المعالم السياحية في البحرين وفقاً لعوامل بسيطة جداً:</p>
                        <ul className="list-none space-y-5 mb-10 max-w-3xl">
                            <li className="flex items-start gap-4">
                                <span className="text-amber-600 mt-1"><CheckCircle className="w-6 h-6" /></span>
                                <span className="text-slate-700 text-lg"><strong>فئة المركبة:</strong> اختيار سيدان اقتصادية قياسية مقابل SUV فاخرة من فئة VIP (مثل GMC Yukon).</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-amber-600 mt-1"><CheckCircle className="w-6 h-6" /></span>
                                <span className="text-slate-700 text-lg"><strong>المسافة الإجمالية:</strong> المسافة الدقيقة من نقطة الانطلاق إلى الوجهة عبر البحرين.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-amber-600 mt-1"><CheckCircle className="w-6 h-6" /></span>
                                <span className="text-slate-700 text-lg"><strong>الشمولية:</strong> تُدرج تلقائياً في عرض السعر جميع رسوم مواقف المطار، ورسوم عبور الجسر، وأوقات الانتظار القياسية.</span>
                            </li>
                        </ul>
                        <div className="border-t border-amber-200/60 pt-6">
                            <p className="text-slate-800 text-lg leading-relaxed flex gap-3">
                                <Info className="w-6 h-6 shrink-0 text-amber-600" />
                                <span><strong>تغيّرات الأسعار الموسمية:</strong> على عكس التطبيقات التي ترفع أسعارها أثناء الأمطار أو ساعات الذروة، تبقى أسعارنا ثابتة. لن تدفع أبداً أكثر لمجرد أن الحركة المرورية على شارع الملك فيصل مزدحمة.</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 mb-16 items-start">

                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">البدائل</h3>
                            <p className="text-slate-600 mb-8 text-lg">مقارنة سيارات الأجرة المحلية وتطبيقات طلب الركوب الجماهيرية مقابل أسطولنا الفاخر المخصص في البحرين.</p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-right border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="py-4 pl-4 border-b-2 border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-sm">الميزة</th>
                                            <th className="py-4 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-sm">التطبيقات وسيارات الأجرة</th>
                                            <th className="py-4 pr-4 border-b-2 border-amber-500 text-amber-700 font-bold uppercase tracking-wider text-sm">بحرين ترانسبورت</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="py-4 pl-4 text-slate-900 font-medium">التسعير المرتفع</td>
                                            <td className="py-4 px-4 text-slate-600">زيادة عند الطلب المرتفع</td>
                                            <td className="py-4 pr-4 text-green-700 font-bold">أبداً / ثابت</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 pl-4 text-slate-900 font-medium">نوع المركبة</td>
                                            <td className="py-4 px-4 text-slate-600">تخصيص عشوائي</td>
                                            <td className="py-4 pr-4 text-green-700 font-bold">فاخرة مضمونة</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 pl-4 text-slate-900 font-medium">أوقات الانتظار</td>
                                            <td className="py-4 px-4 text-slate-600">غير متوقعة</td>
                                            <td className="py-4 pr-4 text-green-700 font-bold">إرسال مضمون</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 pl-4 border-b border-transparent text-slate-900 font-medium">استقبال شخصي</td>
                                            <td className="py-4 px-4 border-b border-transparent text-slate-600">لا</td>
                                            <td className="py-4 pr-4 border-b border-transparent text-green-700 font-bold">نعم (مُدرج)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">متى يجب أن تختارنا؟</h3>
                            <p className="text-slate-600 mb-8 text-lg">نظرة صادقة على مزايا وحدود اختيار خدمة تاكسي المعالم السياحية لدينا.</p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-green-600" /> المزايا (اختَرنا عندما...)
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-slate-700 text-lg">
                                            <span className="mt-1 flex-shrink-0 text-slate-400">•</span> <strong>الوقت حاسم:</strong> لديك جدول رحلة طيران صارم وتحتاج مواعيد استلام مضمونة 100% في جميع أنحاء البحرين.
                                        </li>
                                        <li className="flex gap-3 text-slate-700 text-lg">
                                            <span className="mt-1 flex-shrink-0 text-slate-400">•</span> <strong>تخطيط الميزانية:</strong> تريد وضوحاً تاماً في السعر قبل ركوب السيارة.
                                        </li>
                                        <li className="flex gap-3 text-slate-700 text-lg">
                                            <span className="mt-1 flex-shrink-0 text-slate-400">•</span> <strong>السلامة والنظافة:</strong> تطلب مركبات نظيفة تماماً وخالية من الروائح مع سائقين تم فحصهم بدقة وملتزمين بمعايير وزارة المواصلات.
                                        </li>
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-slate-100">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <XCircle className="w-6 h-6 text-slate-400" /> متى لا تختارنا
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-slate-600 text-lg">
                                            <span className="mt-1 flex-shrink-0 text-slate-300">•</span> إذا كنت تبحث عن خدمات مشاركة ركوب جماعية مخفضة بشكل كبير مع غرباء.
                                        </li>
                                        <li className="flex gap-3 text-slate-600 text-lg">
                                            <span className="mt-1 flex-shrink-0 text-slate-300">•</span> إذا كنت بحاجة إلى رحلة محلية قصيرة جداً بمسافة 500 متر حيث يكون المشي أسرع بطبيعة الحال.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            سائقون محترفون
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            أسطول حديث
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            دعم على مدار الساعة
                        </div>
                    </div>
                </div>
            </section>

            {/* Attractions by Category */}
            {attractionCategories.map((category, catIndex) => {
                const Icon = category.icon;
                return (
                    <section
                        key={catIndex}
                        className="py-20 bg-white"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        {category.emoji} {category.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Attractions Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.attractions.map((attraction, index) => (
                                    <div key={index} className="space-y-3 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                                {attraction.name}
                                            </h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {attraction.description}
                                        </p>
                                        <div className="pt-2">
                                            <Link href="/ar/contact"
                                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border hover:opacity-80 transition-opacity ${category.badgeColor}`}
                                            >
                                                <MapPin className="w-3 h-3" />
                                                احجز تاكسي هنا
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Travel Tips */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                ✨ نصائح للسفر
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Calendar className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        أفضل وقت للزيارة
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        تقدّم الفترة من نوفمبر إلى مارس أفضل الأجواء - درجات
                                        حرارة أكثر اعتدالاً مثالية لاستكشاف المعالم الخارجية،
                                        والشواطئ، والمواقع التاريخية.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Lightbulb className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        خطط لأيامك
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        امزج بين أيام المدينة والتاريخ والشاطئ للحصول على تجربة
                                        بحرينية كاملة. خدمة التاكسي لدينا متاحة على مدار الساعة
                                        لتأخذك إلى أي مكان تريد الذهاب إليه.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection locale="ar" />
        </div>
    );
}
