import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { BookOpen, TrendingUp, DollarSign, Shield, Award } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'مدونة النقل في البحرين وأدلة الإرشاد [2026] | نصائح التاكسي والدليل المحلي',
    description: 'الدليل الشامل للتنقل في البحرين. اقرأ أدلتنا المتخصصة حول أسعار التاكسي، النقل من المطار، نصائح السلامة، والتنقل في أنحاء المملكة.',
    keywords: 'مدونة تاكسي البحرين, دليل النقل في البحرين, أسعار تاكسي البحرين, التنقل في البحرين, أوبر في البحرين',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/blog',
});

const blogPosts = [
    {
        title: 'كم تكلفة التاكسي في البحرين؟ (دليل أسعار 2026)',
        slug: 'bahrain-taxi-prices',
        excerpt: 'تفصيل شامل لأسعار التاكسي في البحرين، يشمل تكاليف النقل من المطار، تقديرات الرحلات داخل المدينة، ولماذا تتفوق خدمات التاكسي الخاص بالسعر الثابت على تسعير الذروة في تطبيقات طلب السيارات.',
        icon: DollarSign,
        category: 'دليل الأسعار',
        date: 'فبراير 2026'
    },
    {
        title: 'أوبر مقابل سيارات الأجرة المحلية في البحرين: ما تحتاج معرفته',
        slug: 'uber-vs-taxi-bahrain',
        excerpt: 'مقارنة بين أوبر وتطبيقات طلب السيارات الأخرى وخدمات التاكسي المحلية الاحترافية في البحرين. نظرة معمقة على التوفر، تسعير الذروة، الرسوم الخفية، والسلامة.',
        icon: TrendingUp,
        category: 'نصائح السفر',
        date: 'فبراير 2026'
    },
    {
        title: 'الدليل الشامل للنقل من مطار البحرين الدولي',
        slug: 'bahrain-airport-transfers-guide',
        excerpt: 'كل ما تحتاج معرفته عند الوصول إلى مطار البحرين الدولي (BAH): التنقل في صالة الوصول، شرائح الاتصال، تجنب طوابير التاكسي، وتأمين نقل بسعر ثابت إلى المنامة.',
        icon: Shield,
        category: 'نصائح المطار',
        date: 'فبراير 2026'
    },
    {
        title: 'أفضل 5 شركات تاكسي في البحرين (تصنيفات 2026)',
        slug: 'top-5-best-taxi-companies-bahrain',
        excerpt: 'تصنيف شامل لأفضل شركات النقل، وبدائل أوبر وكريم، وخدمات السائق الخاص في البحرين استناداً إلى الموثوقية وشفافية التسعير الثابت.',
        icon: Award,
        category: 'التصنيفات',
        date: 'فبراير 2026'
    }
];

export default function BlogIndexPage() {
    return (
        <div className="bg-white" dir="rtl">
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            أدلة النقل
                        </span>
                        <br />
                        <span className="text-slate-900">ونصائح الخبراء</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        مصدرك الموثوق للتنقل في البحرين بأمان وبأسعار معقولة وبراحة تامة في عام 2026.
                    </p>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-right text-balance">
                        <strong className="text-slate-900 block mb-1">ما هي أفضل طريقة للتنقل في البحرين؟</strong>
                        أوثق طريقة للتنقل في البحرين هي الاستعانة بخدمة تاكسي أو سائق خاص احترافية يُحجز مسبقاً. ورغم وجود سيارات الأجرة العادية وتطبيقات طلب السيارات، تشرح أدلتنا كيف يلغي النقل الخاص بالسعر الثابت تسعير الذروة، ويضمن التوفر على مدار الساعة، ويكفل تنقلاً آمناً للسياح ورجال الأعمال على حد سواء في المنامة والمحرق وما وراءهما.
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => {
                            const Icon = post.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <Link href={`/ar/blog/${post.slug}`} className="block group h-full flex flex-col">
                                        <div className="mb-6 flex items-center justify-between">
                                            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                            <Icon className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                                            <span className="text-slate-400 font-medium">{post.date}</span>
                                            <span className="text-amber-600 font-bold group-hover:-translate-x-1 transition-transform flex items-center">
                                                اقرأ الدليل <span className="mr-1">←</span>
                                            </span>
                                        </div>
                                    </Link>
                                </FloatingCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection locale="ar" />
        </div>
    );
}
