
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">باقات تناسب طموحك</h2>
          <p className="text-slate-400">استثمر في مستقبلك المهني مع باقاتنا المتنوعة.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter */}
          <div className="p-8 glass rounded-[40px] border-white/10 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">البداية (Starter)</h3>
            <div className="text-4xl font-black text-white mb-6">[X] <span className="text-sm font-normal text-slate-400">جنيه</span></div>
            <ul className="space-y-4 text-slate-300 text-right mb-10 flex-grow">
              <li>• نموذج واحد احترافي</li>
              <li>• تحسين ATS آلي</li>
              <li>• تصدير PDF لا محدود</li>
              <li className="text-slate-500 line-through">• مراجعة خبير بشري</li>
            </ul>
            <button className="w-full py-4 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all">اشترك الآن</button>
          </div>

          {/* Pro */}
          <div className="p-8 bg-blue-600 rounded-[40px] shadow-2xl shadow-blue-600/20 scale-105 relative flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">الأكثر طلباً</div>
            <h3 className="text-2xl font-bold text-white mb-2">الاحترافية (Pro)</h3>
            <div className="text-4xl font-black text-white mb-6">[Y] <span className="text-sm font-normal text-blue-100">جنيه</span></div>
            <ul className="space-y-4 text-blue-50 text-right mb-10 flex-grow">
              <li>• ٣ نماذج عالمية</li>
              <li>• تحسين كلمات مفتاحية عميق</li>
              <li>• مراجعة من خبير توظيف</li>
              <li>• خطاب تغطية (Cover Letter)</li>
            </ul>
            <button className="w-full py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-xl">ابدأ فوراً</button>
          </div>

          {/* Premium */}
          <div className="p-8 glass rounded-[40px] border-white/10 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">النخبة (Premium)</h3>
            <div className="text-4xl font-black text-white mb-6">[Z] <span className="text-sm font-normal text-slate-400">جنيه</span></div>
            <ul className="space-y-4 text-slate-300 text-right mb-10 flex-grow">
              <li>• كل ما في الباقة الاحترافية</li>
              <li>• تحسين ملف LinkedIn بالكامل</li>
              <li>• جلسة تحضير للمقابلات (٤٥ د)</li>
              <li>• دعم أولوية متاح ٢٤/٧</li>
            </ul>
            <button className="w-full py-4 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all">اطلب النخبة</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
