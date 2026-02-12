
import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] border-white/10 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl -z-10" />
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">ليه السيرة الذاتية بتموت قبل ما تتقري؟</h2>
            <p className="text-lg text-slate-400">
              أغلب الشركات الكبيرة بتستخدم نظام <span className="text-blue-400 font-bold">ATS</span> بيفلتر المتقدمين آلياً. لو سيرتك الذاتية مش "صديقة" للنظام ده، فرصتك بتضيع حتى لو كنت أشطر واحد.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2 justify-end">
                المشكلة المعتادة
                <span className="text-xl">❌</span>
              </h3>
              <ul className="space-y-4 text-slate-300 text-right">
                <li>• كلمات مفتاحية ضعيفة أو غائبة تماماً.</li>
                <li>• وصف مهام يومية بدون إنجازات ملموسة.</li>
                <li>• تصميمات "مبهرجة" الـ ATS مبيعرفش يقرأها.</li>
                <li>• غموض في التخصص أو المسار المهني.</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400 flex items-center gap-2 justify-end">
                الحل مع CVEEEZ
                <span className="text-xl">✅</span>
              </h3>
              <ul className="space-y-4 text-slate-300 text-right">
                <li>• استخراج أدق الكلمات المفتاحية لمجالك.</li>
                <li>• صياغة إنجازاتك بلغة الأرقام والنتائج (STAR Method).</li>
                <li>• قوالب هندسية مدروسة بتقرأها كل الأنظمة.</li>
                <li>• توافق تام مع شروط الشركات العالمية.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-slate-400 italic mb-6">بطل تضيع وقت في التقديم العشوائي.. خلّي كل تقديم يحسب لصالحك.</p>
            <button className="px-8 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-all">ابدأ الآن</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
