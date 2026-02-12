
import React, { useState } from 'react';

const faqs = [
  {
    q: "إيه هو نظام الـ ATS ده أصلاً؟",
    a: "هو برنامج بتستخدمه الشركات عشان تفلتر آلاف السير الذاتية آلياً بناءً على كلمات مفتاحية محددة. لو الـ CV بتاعك مش متوافق معاه، غالباً مش هيوصل للشخص المسؤول."
  },
  {
    q: "بياخد وقت قد إيه عشان استلم الـ CV؟",
    a: "النسخة الآلية فورية، لكن المراجعة البشرية بتستغرق من ٢٤ لـ ٤٨ ساعة عمل لضمان أعلى جودة."
  },
  {
    q: "ممكن أعدل على الـ CV بعد ما استلمه؟",
    a: "أكيد! بنوفر لك عدد معين من المراجعات المجانية (حسب الباقة) لضمان رضاك التام."
  },
  {
    q: "بتدعموا مجالات طبية أو هندسية متخصصة؟",
    a: "نعم، عندنا خبراء في مختلف المجالات (تقنية، طبية، قانونية، إدارية) لضمان استخدام المصطلحات الصحيحة لمجالك."
  },
  {
    q: "هل بياناتي الشخصية في أمان؟",
    a: "بكل تأكيد. بنتبع أعلى معايير الخصوصية وتشفير البيانات، ولا يتم مشاركة معلوماتك مع أي جهة خارجية."
  },
  {
    q: "بتعملوا Cover Letter كمان؟",
    a: "أيوه، بنصيغ خطاب تغطية مخصص يبرز شغفك وخبرتك للوظيفة اللي بتقدم عليها."
  },
  {
    q: "لو أنا خريج جديد ومعنديش خبرة، هتعملوا إيه؟",
    a: "بنركز في الحالة دي على مهاراتك، مشاريع التخرج، التدريبات الصيفية (Internships)، والنشاطات التطوعية بشكل احترافي."
  },
  {
    q: "هل بتضمنوا إني ألاقي وظيفة؟",
    a: "إحنا بنضمن لك إن سيرتك الذاتية تكون بأفضل صورة ممكنة وتتخطى الأنظمة الآلية وتلفت نظر الـ Recruiters، لكن الوظيفة بتعتمد على أدائك في المقابلة وتوفيق ربنا."
  }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-black text-white text-center mb-12">عندك استفسار؟</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5 transition-all">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-right flex justify-between items-center text-white font-bold hover:bg-white/5"
              >
                <span className={`transform transition-transform ${open === i ? 'rotate-180' : ''}`}>▼</span>
                {faq.q}
              </button>
              {open === i && (
                <div className="p-6 pt-0 text-slate-400 text-right leading-relaxed border-t border-white/5 bg-white/5 animate-in fade-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
