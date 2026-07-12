import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Clock, DollarSign, MapPin, CheckCircle, Smartphone } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { BlogStructuredData } from '@/components/blog-structured-data';

export const metadata: Metadata = generateSEO({
    title: 'كم تكلفة التاكسي في البحرين؟ (دليل أسعار 2026)',
    description: 'تعرف بالضبط على تكلفة التاكسي في البحرين لعام 2026. قارن أسعار النقل من المطار، وتقديرات رحلات المدينة، وتجنب تسعير الذروة، ومزايا السعر الثابت.',
    keywords: 'كم سعر التاكسي في البحرين, أسعار تاكسي البحرين, أجرة التاكسي في البحرين, تكلفة تاكسي مطار البحرين, تاكسي بسعر ثابت في البحرين',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/blog/bahrain-taxi-prices',
});

export default function TaxiPricesPage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('مرحباً! أنا أقرأ مقال أسعار التاكسي في البحرين وأرغب في حجز رحلة.');

    return (
        <div className="bg-white" dir="rtl">
            <BlogStructuredData
                title="كم تكلفة التاكسي في البحرين؟ (دليل أسعار 2026)"
                description="تعرف بالضبط على تكلفة التاكسي في البحرين لعام 2026. قارن أسعار النقل من المطار، وتقديرات رحلات المدينة، وتجنب تسعير الذروة، ومزايا السعر الثابت."
                url="https://bahraintransportgroup.com/ar/blog/bahrain-taxi-prices"
                datePublished="2026-02-01"
                dateModified="2026-06-22"
            />
            <article className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 border-b border-slate-200 pb-8 text-center">
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                            دليل الأسعار
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            كم تكلفة التاكسي في البحرين؟ <br />
                            <span className="text-amber-600">(دليل 2026)</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8">
                            التعامل مع تكاليف التنقل في بلد جديد قد يكون مرهقاً. سواء كنت قادماً عبر مطار البحرين، أو متجهاً لاجتماع عمل في المنطقة الدبلوماسية، أو تستكشف سوق المنامة، <strong>فأنت بحاجة إلى تسعير يمكن التنبؤ به.</strong>
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
                            <li><strong>سيارات الأجرة العادية بالعداد وتطبيقات طلب السيارات</strong> معرضة لتسعير الذروة، وتأخيرات المرور، ورسوم انتظار خفية في البحرين.</li>
                            <li><strong>حجز تاكسي خاص مسبقاً</strong> (مثل بحرين ترانسبورت جروب) يضمن أجرة ثابتة 100% قبل حتى ركوبك السيارة.</li>
                            <li><strong>أكثر الطرق فعالية من حيث التكلفة</strong> للسفر من مطار البحرين أو عبر الجسر السعودي هي تأمين عرض سعر ثابت عبر واتساب.</li>
                        </ul>
                    </div>

                    {/* AI Direct Answer Snippet (AEO) */}
                    <div className="semantic-ai-answer bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                            <DollarSign className="w-6 h-6 text-amber-600" />
                            الإجابة المختصرة 2026: أجرة التاكسي في البحرين
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            في عام 2026، تبدأ أجرة التاكسي العادية في البحرين بسعر أساسي بالعداد، بالإضافة إلى رسوم لكل كيلومتر ترتفع ليلاً أو خلال العطلات. ومع ذلك، ونظراً للازدحام المروري الشديد وتسعير الذروة في التطبيقات، <strong>فإن أكثر الطرق أماناً وفعالية من حيث التكلفة هي حجز تاكسي خاص بسعر ثابت.</strong> تقدم بحرين ترانسبورت جروب رحلات بأجرة محسوبة مسبقاً وثابتة. وهذا يعني أن النقل من المطار إلى الجفير أو السيف لا يحمل أي رسوم خفية، بغض النظر عن تأخيرات المرور.
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg prose-slate max-w-none">

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">مشكلة سيارات الأجرة بالعداد والتطبيقات</h2>
                        <p className="text-slate-600 mb-6">
                            إذا خرجت من فندق في العدلية أو من صالة وصول المطار، فلديك عادة خياران افتراضيان: استقلال سيارة أجرة بالعداد أو فتح تطبيق طلب سيارات مثل أوبر. إليك سبب فشل هذه الخيارات غالباً مع المسافرين:
                        </p>
                        <FloatingCard delay={0.1} className="mb-10 bg-white">
                            <ul className="space-y-4 mb-0 pr-0 list-none">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 text-red-500"><Clock className="w-5 h-5" /></div>
                                    <div>
                                        <strong className="text-slate-900 block">العداد يستمر بالعمل أثناء الزحام:</strong>
                                        <span className="text-sm text-slate-600">تحتسب سيارات الأجرة بالعداد الوقت الذي تقضيه متوقفة. في زحام المنامة الشديد، يمكن أن تتضاعف تكلفة رحلة قصيرة فجأة.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 text-red-500"><Smartphone className="w-5 h-5" /></div>
                                    <div>
                                        <strong className="text-slate-900 block">تسعير الذروة الديناميكي:</strong>
                                        <span className="text-sm text-slate-600">خلال ساعات الذروة (مثل تنقلات الصباح أو ليالي الخميس) والفعاليات الكبرى مثل سباق فورمولا 1، تطبق التطبيقات القائمة على الخوارزميات مضاعفات تسعير تتراوح بين 2 و3 أضعاف بشكل متكرر.</span>
                                    </div>
                                </li>
                            </ul>
                        </FloatingCard>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">لماذا التاكسي بالسعر الثابت أفضل</h2>
                        <p className="text-slate-600 mb-6">
                            عندما تحجز مع خدمة احترافية مثل بحرين ترانسبورت جروب عبر واتساب، فأنت تتعامل مع <strong>نموذج أجرة ثابتة</strong>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> الشفافية</h3>
                                <p className="text-sm text-slate-700">السعر المعروض هو بالضبط السعر الذي تدفعه. يشمل جميع وقت الانتظار، ورسوم مواقف المطار، والرسوم المحلية.</p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-green-600" /> من نقطة إلى نقطة</h3>
                                <p className="text-sm text-slate-700">سواء كنت متجهاً من المحرق إلى الرفاع، أو تعبر الجسر السعودي، فإن السعر مثبت قبل أن تجلس في السيارة.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">سيناريوهات تقديرية للسعر الثابت</h2>
                        <p className="text-slate-600 mb-6">
                            ورغم أن الأسعار الدقيقة تتفاوت حسب المواقع المحددة واختيار المركبة (سيدان اقتصادية مقابل فان عائلي بـ 7 مقاعد)، فإن هيكل السعر الثابت لدينا يتيح لك وضع ميزانية دقيقة تماماً.
                        </p>

                        <div className="overflow-x-auto mb-12 rounded-2xl border border-slate-200">
                            <table className="min-w-full divide-y divide-slate-200 text-right">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-bold text-slate-900">نوع المسار</th>
                                        <th className="px-6 py-4 text-sm font-bold text-slate-900">أفضل نوع مركبة</th>
                                        <th className="px-6 py-4 text-sm font-bold text-slate-900">لماذا هي فعالة من حيث التكلفة</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    <tr>
                                        <td className="px-6 py-4 text-sm text-slate-700 font-medium">استقبال من المطار إلى الجفير / السيف</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">سيدان قياسية</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">بدون غرامات تأخير رحلات أو رسوم انتظار طابور المطار.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm text-slate-700 font-medium">رحلة عائلية إلى المعالم المحلية</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">كيا كارنيفال بـ 7 مقاعد</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">تقسيم أجرة ثابتة واحدة بين مجموعة كبيرة أفضل من طلب سيارتي تاكسي منفصلتين عبر التطبيق.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm text-slate-700 font-medium">نقل تنفيذي للشركات</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">سيارة VIP فاخرة (مرسيدس/بي إم دبليو)</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">يتيح إصدار فواتير، وأسعار نصف يوم، وأجواء مقصورة هادئة وفاخرة.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">كيف تحصل على عرض سعر دقيق اليوم</h2>
                        <p className="text-slate-600 mb-8">
                            إذا أردت رقماً دقيقاً لرحلتك، فأسرع طريقة هي مراسلة مركز التوزيع المركزي لدينا في المنامة العامل على مدار الساعة. فقط أخبرنا بموقع الاستقبال، وموقع الوجهة، وكمية الأمتعة.
                        </p>

                        <div className="flex justify-center mb-16">
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full sm:w-auto text-lg px-8 py-4" external>
                                احصل على عرض سعر ثابت عبر واتساب الآن
                            </GradientButton>
                        </div>
                    </div>
                </div>
            </article>

            <CTASection locale="ar" />
        </div>
    );
}
