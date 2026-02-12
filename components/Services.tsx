
import React from 'react';

const services = [
  {
    name: "صانع الـ CV بالذكاء الاصطناعي",
    desc: "أداة ذكية بتبني لك الـ CV في دقايق مع اقتراحات فورية لكل قسم.",
    price: "مجاني / باشتراك بسيط"
  },
  {
    name: "كتابة احترافية (مراجعة بشرية)",
    desc: "خبير توظيف بيقعد يراجع الـ CV بتاعك كلمة بكلمة ويصيغ إنجازاتك بنفسه.",
    price: "باقة مخصصة"
  },
  {
    name: "خطاب التغطية (Cover Letter)",
    desc: "خطاب مقنع مخصص لكل وظيفة بيحسس الشركة إنك فعلاً مهتم بيهم.",
    price: "إضافة اختيارية"
  },
  {
    name: "تحسين ملف LinkedIn",
    desc: "خلي الشركات هي اللي تدور عليك! بنظبطلك الـ Headline والـ About وكل تفصيلة.",
    price: "خدمة مميزة"
  },
  {
    name: "التحضير للمقابلات",
    desc: "جلسات تدريبية وتوقعات للأسئلة عشان تدخل المقابلة وأنت واثق في نفسك.",
    price: "باقة النخبة"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-16">خدماتنا اللي بتغير اللعبة</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-8 glass rounded-3xl flex flex-col justify-between border-white/5 group hover:-translate-y-2 transition-all">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 text-right group-hover:text-blue-400 transition-colors">{service.name}</h3>
                <p className="text-slate-400 text-right mb-6 leading-relaxed">{service.desc}</p>
              </div>
              <div className="flex justify-between items-center border-t border-white/5 pt-6">
                <button className="text-blue-400 font-bold hover:underline text-sm">اعرف أكتر</button>
                <span className="text-xs text-slate-500 font-medium px-3 py-1 bg-white/5 rounded-full">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
