
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Lazy load 3D scene to improve initial page load
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <Suspense fallback={<div className="fixed inset-0 bg-slate-950" />}>
        <ThreeBackground />
      </Suspense>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
