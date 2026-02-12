
import React from 'react';

const testimonials = [
  {
    text: "كنت بقدم في شركات كتير ومحدش بيرد عليا. بعد ما عدلت الـ CV مع CVEEEZ، جالي ٣ مقابلات في أول أسبوع!",
    author: "أحمد م.",
    role: "مهندس برمجيات"
  },
  {
    text: "الخدمة سريعة جداً والكلمات المفتاحية اللي استخدموها خلت الـ Profile بتاعي يظهر في نتائج بحث الـ Recruiters.",
    author: "سارة خ.",
    role: "مديرة تسويق"
  },
  {
    text: "أفضل استثمار عملته في مسيرتي المهنية. التصميم شيك جداً وبيعكس احترافية فعلاً.",
    author: "محمد ع.",
    role: "خريج جديد"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-16">قصص نجاح أصحابها كانوا مكانك</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 glass rounded-3xl relative">
              <span className="text-6xl text-blue-500/20 absolute top-4 left-4">“</span>
              <p className="text-slate-300 mb-8 leading-relaxed text-right relative z-10 italic">"{t.text}"</p>
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <p className="text-white font-bold">{t.author}</p>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
