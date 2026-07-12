import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Plane, Clock, Shield, MapPin, CheckCircle, Smartphone, CreditCard } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { BlogStructuredData } from '@/components/blog-structured-data';

export const metadata: Metadata = generateSEO({
    title: 'الدليل الشامل للنقل من مطار البحرين الدولي (BAH)',
    description: 'هل تصل إلى مطار البحرين؟ اقرأ دليلنا لعام 2026 حول التنقل في صالة الوصول، شرائح الاتصال، تجنب طوابير التاكسي، وتأمين نقل موثوق بسعر ثابت من المطار.',
    keywords: 'نقل من مطار البحرين, تاكسي مطار البحرين, دليل وصول مطار البحرين, كيفية الوصول من مطار البحرين إلى المنامة, تاكسي من مطار البحرين إلى الجفير',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/blog/bahrain-airport-transfers-guide',
});

export default function AirportGuidePage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('مرحباً! أنا أقرأ مقال دليل النقل من المطار وأرغب في حجز رحلة.');

    return (
        <div className="bg-white" dir="rtl">
            <BlogStructuredData
                title="الدليل الشامل للنقل من مطار البحرين الدولي (BAH)"
                description="هل تصل إلى مطار البحرين؟ اقرأ دليلنا لعام 2026 حول التنقل في صالة الوصول، شرائح الاتصال، تجنب طوابير التاكسي، وتأمين نقل موثوق بسعر ثابت من المطار."
                url="https://bahraintransportgroup.com/ar/blog/bahrain-airport-transfers-guide"
                datePublished="2026-02-01"
                dateModified="2026-06-22"
            />
            <article className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-200 pb-8 text-center">
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                            نصائح المطار
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            الدليل الكامل للنقل من <br />
                            <span className="text-amber-600">مطار البحرين الدولي (BAH)</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8">
                            الهبوط في بلد جديد قد يكون مرهقاً. سواء كنت متجهاً مباشرة إلى اجتماع عمل في السيف أو إلى فندقك في المنامة، فأنت بحاجة إلى تنقل سريع وموثوق. إليك بالضبط ما يجب فعله عند الوصول إلى مطار البحرين الدولي في عام 2026.
                        </p>

                        {/* Author Bio (EEAT) */}
                        <div className="flex items-center justify-center gap-4 text-right border-t border-b border-slate-100 py-4 max-w-2xl mx-auto">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                <img src="/favicon.svg" alt="فريق تحرير بحرين ترانسبورت جروب" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">بقلم فريق عمليات بحرين ترانسبورت جروب</p>
                                <p className="text-xs text-slate-500">خبراء لوجستيات ومديرو أسطول نقل في المنامة (أكثر من 10 سنوات خبرة)</p>
                            </div>
                        </div>
                    </header>

                    {/* TL;DR Summary for AI */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6 mb-12">
                        <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-amber-600" />
                            الخلاصة السريعة: أهم النقاط
                        </h2>
                        <ul className="space-y-2 text-slate-700 text-sm list-disc pr-5">
                            <li><strong>مطار البحرين الدولي (BAH)</strong> يضم صالات حديثة، لكن الانتظار في طوابير التاكسي العادية ما زال يستهلك وقتاً ثميناً.</li>
                            <li><strong>الاعتماد على تطبيقات طلب السيارات</strong> في المطار غالباً ما يؤدي إلى ارتباك في العثور على السائق داخل مناطق الاستقبال المزدحمة.</li>
                            <li><strong>الحجز المسبق لخدمة النقل من المطار</strong> يضمن أن يستقبلك سائقك في صالة الوصول حاملاً لوحة باسمك، ويتابع رحلتك لحساب أي تأخير، ويقدم سعراً ثابتاً لأي وجهة في البحرين أو السعودية.</li>
                        </ul>
                    </div>

                    {/* AI Direct Answer Snippet (AEO) */}
                    <div className="semantic-ai-answer bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                            <Plane className="w-6 h-6 text-amber-600" />
                            كيف تصل من مطار البحرين إلى المنامة؟
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            أكثر الطرق كفاءةً وأماناً للتنقل من مطار البحرين الدولي (BAH) إلى المنامة أو الجفير أو السيف هي <strong>حجز خدمة نقل احترافية من المطار مسبقاً.</strong> ورغم توفر سيارات الأجرة العادية بالعداد وتطبيقات طلب السيارات في الصالة، إلا أنها غالباً ما تعاني من طوابير طويلة وتسعير عداد غير متوقع. حجز سائق خاص بسعر ثابت عبر بحرين ترانسبورت جروب يضمن تتبعاً فورياً لرحلتك، واستقبالاً شخصياً في صالة الوصول، وانعدام أي رسوم خفية بغض النظر عن حالة المرور.
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg prose-slate max-w-none">

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">الخطوة الأولى: التنقل في صالة وصول مطار البحرين</h2>
                        <p className="text-slate-600 mb-6">
                            صالة مطار البحرين الدولي الجديدة حديثة وفعّالة للغاية. بعد إنهاء إجراءات الجوازات واستلام الأمتعة، ستدخل صالة الوصول الرئيسية. وإذا لم تكن قد رتبت وسيلة نقل مسبقاً، فسيتوجب عليك الاختيار بين استئجار سيارة، أو الوقوف في طابور موقف التاكسي الرسمي، أو محاولة طلب رحلة عبر أحد التطبيقات باستخدام واي فاي المطار.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <FloatingCard delay={0.1} className="bg-white">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Smartphone className="w-5 h-5 text-amber-600" /> الحصول على اتصال
                                </h3>
                                <p className="text-sm text-slate-700">قبل مغادرة المنطقة الآمنة، تقدم أكشاك بتلكو وزين و stc شرائح اتصال مسبقة الدفع للسياح إذا كنت بحاجة إلى بيانات جوال خلال إقامتك. كما يوفر مطار البحرين واي فاي عاماً مجانياً.</p>
                            </FloatingCard>
                            <FloatingCard delay={0.2} className="bg-white">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-amber-600" /> صرف العملات
                                </h3>
                                <p className="text-sm text-slate-700">ستجد أجهزة صراف آلي ومكاتب صرافة (Travelex) فور خروجك من الجمارك. الدينار البحريني (BHD) هو العملة الرسمية.</p>
                            </FloatingCard>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">الخطوة الثانية: لماذا يجب عليك حجز النقل مسبقاً</h2>
                        <p className="text-slate-600 mb-6">
                            ورغم أن موقف التاكسي خارج المطار منظم، فإن سيارات الأجرة بالعداد تحتسب الأجرة بناءً على وقت التوقف في الزحام - ومن المعروف أن حركة المرور في المنامة مزدحمة خلال ساعات الذروة وعطلات نهاية الأسبوع. إليك سبب تفوق الحجز المسبق على البدائل:
                        </p>

                        <ul className="space-y-6 mb-12">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 bg-blue-100 p-2 rounded-full"><CheckCircle className="w-6 h-6 text-blue-600" /></div>
                                <div>
                                    <strong className="text-slate-900 text-xl block mb-1">لا رسوم خفية ولا رسوم إضافية للمطار</strong>
                                    <span className="text-slate-600 text-[17px] leading-relaxed block">عند حجز تاكسي بحرين ترانسبورت جروب مسبقاً، يشمل السعر الثابت المعروض رسوم مواقف المطار القياسية والرسوم المرورية. أما سيارات الأجرة بالعداد فغالباً ما تضيف هذه الرسوم في نهاية الرحلة.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 bg-blue-100 p-2 rounded-full"><CheckCircle className="w-6 h-6 text-blue-600" /></div>
                                <div>
                                    <strong className="text-slate-900 text-xl block mb-1">حماية من تأخير الرحلات</strong>
                                    <span className="text-slate-600 text-[17px] leading-relaxed block">مركز التوزيع المركزي لدينا يعمل على مدار الساعة ويراقب رادارات الرحلات الجوية العالمية. فإذا تأخرت رحلة طيران الخليج الخاصة بك ساعتين، يقوم سائقك المخصص تلقائياً بتعديل وقت الاستقبال. لن تتعرض لأي غرامات ولن تفقد حجز رحلتك.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 bg-blue-100 p-2 rounded-full"><CheckCircle className="w-6 h-6 text-blue-600" /></div>
                                <div>
                                    <strong className="text-slate-900 text-xl block mb-1">استقبال كبار الشخصيات</strong>
                                    <span className="text-slate-600 text-[17px] leading-relaxed block">انسَ التجول في مناطق الاستقبال بحثاً عن لوحات السيارات. يقف سائقونا المحترفون مباشرة داخل صالة الوصول حاملين لوحة تحمل اسمك، وجاهزون لمرافقتك مباشرة إلى سيارة مرسيدس أو جي إم سي يوكن أو كيا كارنيفال بانتظارك.</span>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">أشهر مسارات المطار والمركبات</h2>
                        <p className="text-slate-600 mb-6">
                            سواء كنت تحمل حقيبة كمبيوتر محمول أو تسافر مع خمس حقائب ثقيلة، فإن اختيار المركبة المناسبة أمر مهم.
                        </p>

                        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 mb-12">
                            <h3 className="font-bold text-slate-900 text-xl mb-4 text-center">أفضل توافقات وسائل النقل الموصى بها</h3>
                            <div className="space-y-4 text-slate-700 max-w-2xl mx-auto">
                                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                                    <span className="font-semibold text-slate-900">مسافر أعمال منفرد إلى منطقة السيف:</span>
                                    <span className="text-slate-600 mr-4 font-medium text-left">سيدان اقتصادية / سيارة VIP فاخرة</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-amber-200">
                                    <span className="font-semibold text-slate-900">عائلة من 5 أفراد إلى منتجع جزر أمواج:</span>
                                    <span className="text-slate-600 mr-4 font-medium text-left">كيا كارنيفال بـ 7 مقاعد</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="font-semibold text-slate-900">وفد كبار الشخصيات إلى مرفأ البحرين المالي:</span>
                                    <span className="text-slate-600 mr-4 font-medium text-left">جي إم سي يوكن الفاخرة</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">نصيحة أخيرة للزوار</h2>
                        <p className="text-slate-600 mb-8 p-6 bg-slate-50 border-r-4 border-amber-500 rounded-l-2xl">
                            حرارة الصيف في البحرين شديدة، والتنقل في شوارع غير مألوفة وأنت تعاني من إرهاق السفر ليست طريقة جيدة لبدء رحلتك. <strong>احمِ راحة بالك بحجز استقبالك من المطار عبر واتساب حتى قبل صعودك على متن الطائرة.</strong> وعند الهبوط، ستحصل على بيانات التواصل المباشر مع سائقك، مما يضمن انتقالاً سلساً تماماً من الطائرة إلى الفندق.
                        </p>

                        <div className="flex justify-center mb-16">
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full sm:w-auto text-lg px-8 py-4" external>
                                احجز نقل المطار مسبقاً عبر واتساب
                            </GradientButton>
                        </div>
                    </div>
                </div>
            </article>

            <CTASection locale="ar" />
        </div>
    );
}
