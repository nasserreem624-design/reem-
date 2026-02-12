
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative glass p-12 md:p-24 rounded-[60px] text-center overflow-hidden border-white/10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white">مستعد تبدأ رحلتك الحقيقية؟</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              متخليش الـ ATS يوقفك. انضم لآلاف المحترفين اللي اختاروا CVEEEZ وبدأوا يوصلوا لأحلامهم.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <button className="px-12 py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-all shadow-2xl">
                ابدأ تحسين سيرتك الآن
              </button>
              <button className="px-12 py-5 bg-green-600/20 border border-green-500/30 text-green-400 font-black rounded-2xl hover:bg-green-600/30 transition-all flex items-center gap-2">
                تواصل معنا واتساب
                <span>💬</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
