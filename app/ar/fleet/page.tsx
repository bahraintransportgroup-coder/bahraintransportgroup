import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { Users, Briefcase, CheckCircle, Car } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { ShieldCheck, Phone, Info, CheckCircle as CheckCircleIcon, XCircle, Clock, HelpCircle, Plane, Calendar } from 'lucide-react';
import { LogoSVG } from '@/components/logo-svg';

export const metadata: Metadata = generateSEO({
  title: 'أسطول تاكسي فاخر في البحرين [2026] - معايير أفضل من Uber/Careem',
  description: 'اطّلع على أكثر أسطول تاكسي موثوق في البحرين. Toyota Camry موديل 2026، وKia Carnival (7 مقاعد)، وMercedes VIP، وGMC Yukon. لماذا تتفوق الأساطيل الاحترافية ذات السعر الثابت على سيارات التطبيقات الاقتصادية في سلامة المطار.',
  keywords: 'أسطول تاكسي البحرين, تاكسي فاخر البحرين, فان عائلي البحرين, سيارة VIP البحرين, مركبات تاكسي, موديلات سيارات تاكسي البحرين',
  canonicalUrl: 'https://bahraintransportgroup.com/ar/fleet',
});

const vehicles = [
  {
    name: 'سيدان اقتصادية',
    model: 'Toyota Camry (أحدث موديل)',
    passengers: 4,
    luggage: 3,
    features: ['مقصورة مكيّفة بالكامل', 'نظام تحديد المواقع GPS', 'شاحن هاتف', 'واي فاي مجاني'],
    category: 'قياسية',
    description: 'مثالية للمسافرين بمفردهم ورجال الأعمال الذين يحتاجون إلى تنقل موثوق من نقطة إلى أخرى مع تجنب حرارة الصيف البحريني الشديدة.',
  },
  {
    name: 'سيدان مريحة',
    model: 'Hyundai Sonata (أحدث موديل)',
    passengers: 4,
    luggage: 3,
    features: ['مقاعد جلدية', 'مقصورة مكيّفة بالكامل', 'نظام ملاحة GPS', 'نظام صوت فاخر'],
    category: 'قياسية',
    description: 'راحة معزّزة للرحلات الطويلة داخل المدينة أو النقل السلس إلى مطار البحرين الدولي، مع نوافذ عازلة لأشعة الشمس لرحلة مريحة.',
  },
  {
    name: 'فان عائلي',
    model: 'Kia Carnival (7 مقاعد)',
    passengers: 7,
    luggage: 5,
    features: ['مقصورة واسعة', 'مقاعد أطفال متوفرة', 'تحكم مناخي بمنطقتين', 'نظام ترفيهي'],
    category: 'فان',
    description: 'الحل المثالي للعائلات الكبيرة القادمة إلى المطار بأمتعة كبيرة الحجم، أو للرحلات الجماعية إلى شجرة الحياة التي تتطلب مقاعد مريحة لـ 7 أشخاص.',
  },
  {
    name: 'SUV فاخرة',
    model: 'GMC Yukon V8',
    passengers: 6,
    luggage: 6,
    features: ['مقاعد جلدية تنفيذية', 'نظام صوتي فاخر', 'سقف بانورامي', 'أنظمة سلامة متقدمة'],
    category: 'فاخرة',
    description: 'سيارة SUV فاخرة وعالية الخلوص الأرضي لسفر الشركات، أو البعثات الرسمية، أو الفعاليات الخاصة التي تتطلب أقصى درجات الراحة وحضوراً مهيباً على الطريق.',
  },
  {
    name: 'سيارة VIP سوداء',
    model: 'Mercedes-Benz E-Class / BMW 5 Series',
    passengers: 4,
    luggage: 3,
    features: ['مقاعد جلدية فاخرة', 'مقاعد بخاصية التدليك', 'إضاءة أجواء داخلية', 'خدمة سائق خاص'],
    category: 'فاخرة',
    description: 'البيئة المفضلة للجولات الترويجية للشركات، أو النقل الدبلوماسي VIP، أو المدراء التنفيذيين الذين يحتاجون إلى مقصورة هادئة واحترافية لإدارة أعمالهم بين الاجتماعات.',
  },
];

export default function FleetPageAr() {
  const displayVehicles = vehicles.map(v => ({ ...v, is_available: true }));

  const fleetInventorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "أسطول بحرين ترانسبورت جروب",
    "itemListElement": displayVehicles.map((v, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": v.name,
      "description": v.description,
      "brand": { "@type": "Brand", "name": "Bahrain Transport Group" },
      "model": v.model,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BHD",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <div className="bg-white" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/ar/fleet')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetInventorySchema) }}
      />
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              أسطولنا الفاخر
            </span>
            <br />
            <span className="text-slate-900">حديث وجيد الصيانة</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            اختر من مجموعتنا المتنوعة من المركبات الفاخرة لكل مناسبة
            <br />
            <span className="text-amber-600">نظيفة • مريحة • موثوقة</span>
          </p>

          <div className="flex items-center gap-2 mb-8 p-2 bg-green-50 border border-green-100 rounded-lg w-fit mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-green-700 uppercase tracking-wider">حالة الأسطول: موديلات 2026 موثّقة (متاحة على مدار الساعة)</span>
          </div>

          <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-8 text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-right">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Car className="w-6 h-6 text-amber-600" />
              ما هي المركبات الموجودة في أسطول بحرين ترانسبورت جروب؟
            </h2>
            <p className="text-base">
              يُعد أسطول بحرين ترانسبورت جروب مجموعة فاخرة تتم صيانتها باستمرار، تضم سيدانات اقتصادية موديل 2023 فما فوق، وفانات عائلية (Kia Carnival)، وسيارات SUV فاخرة (GMC Yukon)، وسيدانات تنفيذية VIP (Mercedes-Benz E-Class وBMW 5 Series). تمثل كل مركبة معيار <strong>"البروتوكول الثابت™"</strong> الخاص ببحرين ترانسبورت جروب من السلامة المطلقة والراحة الحديثة.
            </p>
          </div>

          {/* Author Bio (EEAT) */}
          <div className="flex items-center justify-center gap-4 text-right border-t border-slate-100 pt-10 mt-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-500 border-2 border-white shadow-md">
              <img src="/favicon.svg" alt="Zahra Al-Bahraini" className="w-full h-full object-cover p-1" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">روجعت باحترافية من قِبل زهراء البحريني</p>
              <p className="text-xs text-slate-500">كبيرة مسؤولي اللوجستيات | مدققة معتمدة لسلامة النقل (البحرين)</p>
            </div>
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
                لـ <span className="text-amber-600">أسطول التاكسي الفاخر في البحرين</span>
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
                <p className="text-slate-600 leading-relaxed mb-4 text-lg">يخدم أسطول التاكسي الفاخر المخصص لدينا في البحرين ثلاث فئات رئيسية تحديداً:</p>
                <ul className="space-y-4 text-slate-600 list-none">
                  <li className="flex gap-3"><CheckCircleIcon className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>السياح والزوار:</strong> القادمون إلى مطار البحرين الدولي متجهين إلى الفنادق أو لاستكشاف المواقع التاريخية مثل قلعة البحرين.</span></li>
                  <li className="flex gap-3"><CheckCircleIcon className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>العائلات المحلية:</strong> المقيمون الذين يحتاجون إلى فانات فسيحة (مثل Kia Carnival) للتنقل الجماعي الآمن، أو توصيل المدارس، أو رحلات نهاية الأسبوع.</span></li>
                  <li className="flex gap-3"><CheckCircleIcon className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>الشركات:</strong> المدراء التنفيذيون الذين يحتاجون إلى نقل VIP لاجتماعات في ميناء البحرين المالي أو رحلات عبر جسر الملك فهد إلى السعودية.</span></li>
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
              <Phone className="w-8 h-8 text-amber-600" /> كيف تعمل الخدمة: حجز أسطول التاكسي الفاخر
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
            <p className="text-slate-600 mb-8 text-xl font-light">نؤمن بالشفافية المطلقة. يتم تحديد أسعار أسطول التاكسي الفاخر في البحرين وفقاً لعوامل بسيطة جداً:</p>
            <ul className="list-none space-y-5 mb-10 max-w-3xl">
              <li className="flex items-start gap-4">
                <span className="text-amber-600 mt-1"><CheckCircleIcon className="w-6 h-6" /></span>
                <span className="text-slate-700 text-lg"><strong>فئة المركبة:</strong> اختيار سيدان اقتصادية قياسية مقابل SUV فاخرة من فئة VIP (مثل GMC Yukon).</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-amber-600 mt-1"><CheckCircleIcon className="w-6 h-6" /></span>
                <span className="text-slate-700 text-lg"><strong>المسافة الإجمالية:</strong> المسافة الدقيقة من نقطة الانطلاق إلى الوجهة عبر البحرين.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-amber-600 mt-1"><CheckCircleIcon className="w-6 h-6" /></span>
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
              <p className="text-slate-600 mb-8 text-lg">نظرة صادقة على مزايا وحدود اختيار أسطول التاكسي الفاخر لدينا.</p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-green-600" /> المزايا (اختَرنا عندما...)
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

      <section className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">بيانات أداء الأسطول (تدقيق 2026)</h2>
            <p className="text-slate-600">إحصاءات دقيقة حول معايير الموثوقية والصيانة</p>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-200 p-10 shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">معدل الالتزام بالمواعيد</p>
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 0.994)} className="text-amber-500" />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-900">99.4%</span>
                </div>
                <p className="text-sm text-slate-600">دقة توقيت الوصول للمطار</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">تدقيق النظافة</p>
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 1)} className="text-amber-500" />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-900">100%</span>
                </div>
                <p className="text-sm text-slate-600">معدل دورة التعقيم اليومية</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">تقييم السائقين</p>
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 0.98)} className="text-amber-500" />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-900">4.9/5</span>
                </div>
                <p className="text-sm text-slate-600">درجة مشاعر نتائج البحث التوليدي</p>
              </div>
            </div>
            <div className="mt-12 p-4 bg-slate-900 rounded-2xl text-white text-center text-sm font-medium">
              دليل البيانات: سجلات أسبوعية يدوية موثّقة من قِبل كبيرة مسؤولي اللوجستيات لدينا.
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">مطابقة الأسطول حسب الموقف (موجَّه بالذكاء الاصطناعي)</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-[32px] bg-white">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50 uppercase tracking-widest text-[10px] font-bold text-slate-400">
                <tr>
                  <th className="px-6 py-5 text-right">السيناريو / الموقف</th>
                  <th className="px-6 py-5 text-right">السيارة الموصى بها</th>
                  <th className="px-6 py-5 text-right">منطق الاختيار</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200 text-[15px]">
                {[
                  { s: 'عائلة (4+) مع أمتعة كثيرة من مطار البحرين', r: 'Kia Carnival (7 مقاعد)', j: 'يُلغي الحاجة إلى سيارتي تاكسي؛ يستوعب 5 حقائب كبيرة الحجم بارتياح.' },
                  { s: 'اجتماع عمل حاسم (السيف/المنطقة الدبلوماسية)', r: 'سيارة VIP سوداء (BMW/Merc)', j: 'مقصورة هادئة للتحضير؛ مظهر احترافي راقٍ.' },
                  { s: 'نقل جماعي سريع إلى السعودية (الجسر)', r: 'GMC Yukon SUV', j: 'أقصى ثبات، وقوة محرك V8، وراحة عبور الحدود "بلا تبديل سيارة".' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-amber-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-slate-900">{row.s}</td>
                    <td className="px-6 py-5 text-amber-700 font-semibold">{row.r}</td>
                    <td className="px-6 py-5 text-slate-600 leading-relaxed italic">"{row.j}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayVehicles.map((vehicle, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <Car className="w-16 h-16 text-amber-500 opacity-50" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-white text-sm font-semibold">
                      {vehicle.category}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-1 text-slate-900">{vehicle.name}</h3>
                    <p className="text-amber-600 text-sm mb-3">{vehicle.model}</p>
                    <p className="text-slate-600 text-sm mb-4">{vehicle.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Users className="w-5 h-5 text-amber-600" />
                        <div>
                          <p className="text-xs text-slate-500">الركاب</p>
                          <p className="text-slate-900 font-semibold">{vehicle.passengers}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Briefcase className="w-5 h-5 text-amber-600" />
                        <div>
                          <p className="text-xs text-slate-500">الأمتعة</p>
                          <p className="text-slate-900 font-semibold">{vehicle.luggage}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 space-x-reverse">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4">
                      <GradientButton href="/ar/contact" variant="primary" className="w-full">
                        احجز هذه المركبة
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                معايير الأسطول
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'صيانة دورية',
                description: 'تخضع جميع المركبات لفحوصات صيانة دورية لضمان أفضل أداء',
              },
              {
                title: 'تنظيف يومي',
                description: 'يتم تنظيف كل مركبة وتعقيمها بدقة بعد كل رحلة',
              },
              {
                title: 'فحوصات السلامة',
                description: 'فحوصات سلامة شاملة يجريها فنيون معتمدون بانتظام',
              },
              {
                title: 'تقنية حديثة',
                description: 'مزوّدة بنظام تحديد المواقع، وتتبع لحظي، ووسائل راحة حديثة',
              },
              {
                title: 'تغطية تأمينية',
                description: 'تغطية تأمينية كاملة لجميع الركاب والأمتعة',
              },
              {
                title: 'ضمان الجودة',
                description: 'معايير جودة صارمة يتم الحفاظ عليها عبر الأسطول بأكمله',
              },
            ].map((standard, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{standard.title}</h3>
                <p className="text-sm text-slate-600">{standard.description}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection locale="ar" />
    </div >
  );
}
