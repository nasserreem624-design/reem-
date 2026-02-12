
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6 text-right">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-2xl font-black tracking-tighter text-white">CVEEEZ</span>
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg" />
            </div>
            <p className="text-slate-400 max-w-md ml-auto">
              CVEEEZ هي منصتك المتكاملة لتحسين سيرتك الذاتية ومساعدتك في الوصول لكبرى الشركات العالمية بذكاء واحترافية. نحن لا نصنع أوراقاً، نحن نصنع مستقبلاً.
            </p>
            <p className="text-slate-500 text-sm italic">
              CVEEEZ — Your gateway to global career opportunities.
            </p>
          </div>
          
          <div className="text-right space-y-4">
            <h4 className="text-white font-bold">روابط سريعة</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-blue-400">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-blue-400">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div className="text-right space-y-4">
            <h4 className="text-white font-bold">تابعنا</h4>
            <div className="flex gap-4 justify-end">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">FB</div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">LI</div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">X</div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} CVEEEZ. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
