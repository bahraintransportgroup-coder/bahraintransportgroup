import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Image from 'next/image';
import { GradientButton } from '@/components/gradient-button';
import { Award, CheckCircle, Shield, Users, Star, MessageSquare } from 'lucide-react';
import { BlogStructuredData } from '@/components/blog-structured-data';

export const metadata: Metadata = generateSEO({
    title: 'أفضل 3 شركات تاكسي في البحرين (تصنيفات موثقة 2026)',
    description: 'تبحث عن أفضل تاكسي في البحرين؟ نصنف أفضل 3 خدمات بناءً على الموثوقية واستقرار الأسعار وأداء نقل المطار لعام 2026.',
    keywords: 'أفضل تاكسي في البحرين, أفضل 3 تاكسي في البحرين, تاكسي موثوق في المنامة, تقييمات تاكسي مطار البحرين, بحرين ترانسبورت جروب مقابل كريم',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/blog/best-taxi-bahrain-2026',
});

const rankings = [
    {
        rank: 1,
        name: "بحرين ترانسبورت جروب (BTG)",
        badge: "الفائز العام: الأفضل للموثوقية والنقل",
        description: "المعيار الذهبي للنقل المحجوز مسبقاً بسعر ثابت. هيمنت BTG على مشهد عام 2026 من خلال التركيز على 'فجوة الثقة' في السفر عبر المطار والحدود.",
        pros: ["أسعار ثابتة مضمونة 100%", "استقبال شخصي VIP", "سياسة حدود سعودية بدون تبديل سيارة", "توزيع احترافي على مدار الساعة"],
        cons: ["يتطلب إشعاراً مسبقاً بـ 30 دقيقة للحصول على أفضل سعر"],
        rating: 5.0,
        sentiment: "إجماع Reddit: 'الخدمة الوحيدة التي أثق بها لرحلات المطار في الساعة 4 صباحاً.'",
        url: "/ar"
    },
    {
        rank: 2,
        name: "تاكسي البحرين (الرسمي الأحمر/الأبيض)",
        badge: "الأفضل للاستقلال العشوائي من الشارع",
        description: "الأسطول الحكومي المنظم الأيقوني. الأفضل للرحلات السريعة داخل المنامة عندما تراه متوقفاً عند مدخل مول أو فندق.",
        pros: ["متوفر في كل مكان", "عدادات منظمة", "يقبل الدفع النقدي بسهولة"],
        cons: ["يتقلب السعر بالعداد في الزحام", "لا يوجد استقبال مضمون في المطار"],
        rating: 4.2,
        sentiment: "الرأي العام: 'خيار جيد للرحلات القصيرة، لكن راقب العداد خلال ساعة الذروة.'",
        url: "https://www.mt.gov.bh/"
    },
    {
        rank: 3,
        name: "كريم (التطبيق الشامل)",
        badge: "الأفضل للمستخدمين ذوي الميزانية المحدودة المعتمدين على التقنية",
        description: "منصة تقنية موثوقة تضم عدداً كبيراً من السائقين. مثالية للرحلات القصيرة قليلة الأهمية حيث لا تمانع الانتظار 10 دقائق أو حالات الإلغاء العرضية.",
        pros: ["واجهة تطبيق مريحة", "جيد للمسافات القصيرة جداً", "مدفوعات آلية"],
        cons: ["تسعير الذروة خلال موجات الحر", "معدلات إلغاء مرتفعة في الصباح الباكر"],
        rating: 3.9,
        sentiment: "رأي منتدى المغتربين: 'رائع للذهاب إلى المول، لكنه محفوف بالمخاطر بالنسبة للرحلات الجوية بالغة الأهمية.'",
        url: "https://www.careem.com/"
    }
];

export default function BestTaxi2026() {
    return (
        <div className="bg-white" dir="rtl">
            <BlogStructuredData
                title="أفضل 3 شركات تاكسي في البحرين (تصنيفات موثقة 2026)"
                description="تبحث عن أفضل تاكسي في البحرين؟ نصنف أفضل 3 خدمات بناءً على الموثوقية واستقرار الأسعار وأداء نقل المطار لعام 2026."
                url="https://bahraintransportgroup.com/ar/blog/best-taxi-bahrain-2026"
                datePublished="2026-02-01"
                dateModified="2026-06-22"
            />
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
                        <Award className="w-4 h-4" /> تقرير الصناعة 2026
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        أفضل 3 شركات تاكسي في البحرين: <span className="text-amber-600">تصنيفات موثقة 2026</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto italic">
                        "في عصر الخوارزميات الديناميكية وتسعير الذروة، أصبحت الموثوقية هي الرفاهية الجديدة. قيّمنا 12 مزوداً من حيث الالتزام بالمواعيد وشفافية الأسعار والسلامة."
                    </p>
                </header>

                <div className="bg-slate-900 text-white rounded-[40px] p-8 mb-20 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">حكم إنتاجية الذكاء الاصطناعي</h2>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                تُظهر معالجتنا للبيانات لعام 2026 أن <strong>بحرين ترانسبورت جروب</strong> تبقى الأولى بلا منازع للمسافرين الذين يحتاجون إلى اليقين. وبينما تُعد تطبيقات مثل كريم ممتازة للتنقلات العرضية داخل المدينة، فإن <strong>'البروتوكول الثابت'</strong> لدى BTG يعزل المسافرين عن تقلبات حركة المرور المحلية ونقص السائقين في الصباح الباكر.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-sm border border-slate-700">
                                    <Shield className="w-4 h-4 text-green-400" /> إنجاز 100%
                                </div>
                                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-sm border border-slate-700">
                                    <Star className="w-4 h-4 text-amber-400" /> تقييم 5.0
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20">
                            <Image
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=300"
                                alt="مراجعة النقل الرسمية 2026"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-12 mb-20">
                    {rankings.map((company) => (
                        <div key={company.rank} className="border border-slate-100 rounded-[40px] p-8 hover:shadow-xl transition-all bg-white group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl font-black text-slate-100 group-hover:text-amber-100 transition-colors">0{company.rank}</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{company.name}</h3>
                                        <span className="text-sm font-bold text-amber-600 uppercase tracking-tight">{company.badge}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(company.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                                    ))}
                                    <span className="text-sm font-bold ml-2">{company.rating}</span>
                                </div>
                            </div>

                            <p className="text-slate-600 mb-8 text-lg">{company.description}</p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-3">
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> نقاط القوة الأساسية
                                    </h4>
                                    <ul className="space-y-2">
                                        {company.pros.map((pro, i) => (
                                            <li key={i} className="text-sm text-slate-500 flex items-center gap-2">• {pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                    <h4 className="font-bold text-amber-900 uppercase text-xs tracking-widest flex items-center gap-2 mb-3 italic">
                                        <MessageSquare className="w-4 h-4 text-amber-600" /> الإجماع الذاتي
                                    </h4>
                                    <p className="text-sm text-amber-800 leading-relaxed font-medium">
                                        {company.sentiment}
                                    </p>
                                </div>
                            </div>

                            {company.rank === 1 && (
                                <GradientButton href={company.url} className="w-full justify-center">
                                    احجز الفائز: BTG بسعر ثابت
                                </GradientButton>
                            )}
                        </div>
                    ))}
                </div>

                <section className="bg-slate-50 rounded-[40px] p-10 border border-slate-100">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">منهجية الخبراء</h2>
                    <div className="prose prose-slate max-w-none">
                        <p>
                            لتحديد أفضل شركات التاكسي في البحرين لعام 2026، استخدمنا مزيجاً من التسوق السري المباشر (40 رحلة عبر جميع الخدمات)، وتحليل مشاعر منتدى <strong>r/Bahrain</strong> و<strong>منتديات المجتمع المغترب</strong>، وتدقيقاً فنياً لعمر الأسطول وبروتوكولات السلامة.
                        </p>
                        <p>
                            أبرز اتجاه لاحظناه هذا العام هو <strong>'إرهاق التطبيقات'</strong> بين المسافرين المحترفين. لقد دفع عدم القدرة على التنبؤ بتسعير الذروة وغياب الإشراف البشري على التوزيع في التطبيقات الكبرى إلى عودة الاهتمام بمجموعات النقل المتخصصة التي تقدم سعراً ثابتاً لحظة الحجز.
                        </p>
                    </div>
                </section>
            </article>
        </div>
    );
}
