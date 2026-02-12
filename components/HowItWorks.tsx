
import React from 'react';

const steps = [
  {
    num: "٠١",
    title: "ارفع بياناتك",
    desc: "ابعت لنا سيرتك القديمة أو املأ بياناتك الأساسية من خلال نموذج بسيط."
  },
  {
    num: "٠٢",
    title: "حدد هدفك",
    desc: "قولنا إيه نوع الوظائف أو الشركات اللي بتهدف ليها عشان نخصص الكلمات المفتاحية."
  },
  {
    num: "٠٣",
    title: "استلم الـ CV",
    desc: "في وقت قياسي، هتستلم نسختك الجديدة المحسنة والجاهزة للمنافسة العالمية."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-blue-600/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">خطواتك للوظيفة أسهل مما تتخيل</h2>
          <p className="text-slate-400">ثلاث خطوات بس بتفصلك عن سيرة ذاتية احترافية.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="text-7xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-blue-500/10 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 max-w-[250px] mx-auto leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -left-6 translate-y-[-50%] text-white/10 text-4xl">←</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95">
            ابدأ رحلة النجاح الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
