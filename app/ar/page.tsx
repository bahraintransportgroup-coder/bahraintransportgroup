import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { Plane, Building2, Briefcase, Map, GraduationCap, Dog, Heart, Shield, Clock, DollarSign, Star, ArrowLeft } from 'lucide-react';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
  title: 'بحرين ترانسبورت جروب | خدمة تاكسي بسعر ثابت على مدار 24 ساعة',
  description: 'أفضل خدمة تاكسي في البحرين. توصيل مطار بسعر ثابت، تاكسي داخل المدينة، ونقل عبر جسر الملك فهد دون تغيير السيارة عند الحدود. احجز الآن عبر واتساب.',
  keywords: 'تاكسي البحرين, توصيل مطار البحرين, تاكسي المنامة, جسر الملك فهد تاكسي, نقل الشركات البحرين',
  canonicalUrl: 'https://bahraintransportgroup.com/ar',
});

const services = [
  { icon: Plane, title: 'توصيل المطار', description: 'استقبال وتوصيل بسعر ثابت من وإلى مطار البحرين الدولي، مع متابعة موعد الرحلة واستقبال داخل صالة الوصول.', href: '/ar/airport-transfer' },
  { icon: Building2, title: 'تاكسي داخل المدينة', description: 'تنقل يومي موثوق داخل المنامة والمحرق والرفاع، بدون تسعير مفاجئ وقت الازدحام.', href: '/ar/city-taxi' },
  { icon: Briefcase, title: 'نقل الشركات', description: 'خدمة سائق خاص للاجتماعات التجارية والزيارات الدبلوماسية في جميع أنحاء المملكة.', href: '/ar/city-taxi' },
  { icon: Map, title: 'جسر الملك فهد', description: 'عبور حدودي مباشر إلى الدمام والخبر والرياض دون تغيير السيارة عند الجسر.', href: '/ar/saudi-causeway' },
];

const features = [
  { icon: Clock, title: 'متوفرون على مدار الساعة', description: 'خدمة حجز واستجابة سريعة 24 ساعة طوال أيام الأسبوع.' },
  { icon: DollarSign, title: 'سعر ثابت مضمون', description: 'لا رسوم مفاجئة ولا زيادة أسعار وقت الذروة أو وصول الرحلات.' },
  { icon: Shield, title: 'سائقون معتمدون', description: 'جميع السائقين مسجلون رسمياً وخاضعون للتحقق الأمني.' },
];

export default function ArabicHomePage() {
  const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('مرحباً! أرغب في حجز تاكسي في البحرين.');

  return (
    <div className="bg-white" dir="rtl">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              بحرين ترانسبورت جروب
            </span>
            <br />
            <span className="text-slate-900">تاكسي بسعر ثابت، على مدار الساعة</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            توصيل مطار، تاكسي داخل المدينة، ونقل عبر جسر الملك فهد بسعر ثابت 100% بدون مفاجآت. احجز الآن عبر واتساب واحصل على تأكيد فوري.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href={whatsappLink} variant="whatsapp" external>
              احجز الآن عبر واتساب
            </GradientButton>
            <GradientButton href="/ar/fare-calculator" variant="secondary">
              احسب السعر التقديري
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{f.title}</h3>
                  <p className="text-slate-600">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">خدماتنا</span>
            </h2>
            <p className="text-xl text-slate-600">حلول نقل شاملة ومنظمة لجميع احتياجاتكم في مملكة البحرين.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200/50 flex-shrink-0">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{s.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{s.description}</p>
                    <Link href={s.href} className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-800">
                      اعرف المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />)}
          </div>
          <h2 className="text-3xl font-bold mb-4">4.9/5 تقييم موثق من آلاف العملاء</h2>
          <p className="text-slate-400 mb-8">مصنفون بتقييم ممتاز على Google وTripAdvisor وTrustpilot.</p>
          <GradientButton href={whatsappLink} variant="whatsapp" external>
            تحدث معنا الآن
          </GradientButton>
        </div>
      </section>

      <CTASection locale="ar" />
    </div>
  );
}
