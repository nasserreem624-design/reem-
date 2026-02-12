
import React from 'react';

const features = [
  {
    title: "تحسين الـ ATS",
    description: "بنحلل سيرتك الذاتية ونظبطها بحيث تطلع في أول نتائج البحث لأنظمة التوظيف الآلية.",
    icon: "🎯"
  },
  {
    title: "الكلمات المفتاحية",
    description: "بنحدد الكلمات اللي بيدور عليها الـ Recruiters في مجالك وبنضيفها بذكاء في محتواك.",
    icon: "🔑"
  },
  {
    title: "صياغة الإنجازات",
    description: "بنحول المهام الروتينية لنتائج مبهرة بتستخدم الأرقام والنسب المئوية.",
    icon: "📈"
  },
  {
    title: "تصميمات نظيفة",
    description: "قوالب عصرية، مريحة للعين، وبسيطة كفاية إنها تتقري من أي برنامج أو إنسان.",
    icon: "💎"
  },
  {
    title: "دعم اللغتين",
    description: "سواء بتقدم في شركة محلية أو عالمية، بنظبطلك الـ CV بالعربي وبالإنجليزي باحترافية.",
    icon: "🌍"
  },
  {
    title: "تصدير PDF ذكي",
    description: "ملفات جاهزة للطباعة والرفع المباشر، متوافقة 100% مع معايير الـ LinkedIn.",
    icon: "📄"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">كل اللي تحتاجه في مكان واحد</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">أدوات ذكية ومراجعة بشرية عشان نضمن إنك دايماً في المقدمة.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group p-8 glass rounded-3xl hover:bg-white/5 transition-all border-white/5 hover:border-blue-500/30">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-right">{feature.title}</h3>
              <p className="text-slate-400 text-right leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
