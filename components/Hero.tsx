
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-right space-y-8 animate-in fade-in slide-in-from-right duration-700">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            🚀 ثورة في عالم التوظيف
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            سيرتك الذاتية هي <span className="gradient-text">مفتاحك</span> للدور القادم.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            تخطَّ أنظمة تصفية الـ ATS واضمن مكانك في المقابلات الشخصية بأقوى الكلمات المفتاحية وأفضل التصميمات العالمية، بذكاء اصطناعي يفهم احتياجك.
          </p>
          
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full text-xs">✓</span>
              تحسين ذكي لمواصفات الـ ATS
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full text-xs">✓</span>
              صياغة احترافية للإنجازات والنتائج
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full text-xs">✓</span>
              نماذج عصرية جاهزة للشركات العالمية
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-lg">
              ابدأ تحسين سيرتك الآن
            </button>
            <button className="px-8 py-4 glass hover:bg-white/5 text-white font-bold rounded-2xl transition-all active:scale-95 text-lg">
              شوف الباقات
            </button>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] hidden md:block animate-in fade-in zoom-in duration-1000">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {/* Visual spacer for Three.js elements positioned globally */}
            <div className="w-64 h-80 glass border-blue-500/30 rounded-3xl absolute top-10 right-10 -rotate-6 animate-pulse" />
            <div className="w-64 h-80 glass border-purple-500/30 rounded-3xl absolute bottom-10 left-10 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
