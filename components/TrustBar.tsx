
import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-slate-950/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          <div className="text-center group">
            <p className="text-4xl font-black text-white group-hover:scale-110 transition-transform">+[عدد]</p>
            <p className="text-slate-500 text-sm mt-1">سيرة ذاتية تم تحسينها</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl font-black text-white group-hover:scale-110 transition-transform">[نسبة]%</p>
            <p className="text-slate-500 text-sm mt-1">زيادة في طلب المقابلات</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl font-black text-white group-hover:scale-110 transition-transform">[مدة]</p>
            <p className="text-slate-500 text-sm mt-1">متوسط وقت الإنجاز</p>
          </div>
          <div className="h-10 w-px bg-white/10 self-center hidden md:block" />
          <div className="flex items-center gap-4 text-slate-400 overflow-hidden font-bold">
            <span className="whitespace-nowrap px-4 py-2 rounded-lg bg-white/5 border border-white/10">ATS-Friendly</span>
            <span className="whitespace-nowrap px-4 py-2 rounded-lg bg-white/5 border border-white/10">AI-Powered</span>
            <span className="whitespace-nowrap px-4 py-2 rounded-lg bg-white/5 border border-white/10">Remote Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
