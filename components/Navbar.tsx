
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-950/80 backdrop-blur-lg border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-blue-500/20" />
          <span className="text-2xl font-black tracking-tighter text-white">CVEEEZ</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-blue-400 transition-colors">كيف نعمل</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">خدماتنا</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">الأسعار</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">الأسئلة الشائعة</a>
        </div>

        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-500/25 active:scale-95">
          ابدأ الآن
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
