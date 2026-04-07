
import React, { useRef } from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const handleParallax = (e: React.MouseEvent) => {
    if (!textRef.current || window.innerWidth < 1024) return;
    requestAnimationFrame(() => {
      if (!textRef.current) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      textRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleParallax}
      className="relative min-h-screen flex items-center justify-center pt-28 md:pt-16 overflow-hidden bg-slate-950"
    >
      <div className="mesh-bg"></div>

      <div className="container mx-auto px-5 md:px-6 relative z-10 text-center" ref={textRef}>
        <div className="reveal-text animate-float relative z-20 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 md:px-5 py-2.5 md:py-2.5 rounded-full mb-8 md:mb-8 backdrop-blur-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] group hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
          <Wand2 className="text-blue-500 w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            Dort sichtbar sein, wo Ihre Kunden suchen
          </span>
        </div>

        <h1 className="reveal-text text-5xl sm:text-6xl lg:text-[5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Ihre regionale Webseite, <br />
          die Tag & Nacht <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 animate-shimmer">Kunden gewinnt.</span>
        </h1>

        <p className="reveal-text text-slate-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed font-normal px-4">
          Sie leisten jeden Tag grossartige Arbeit. Wir sorgen dafür, dass die Menschen in Ihrer Region das auch online sehen. Mit massgeschneiderten Weblösungen, die sofort Vertrauen wecken, echte Anfragen generieren und zu 100 % zu Ihrem Betrieb passen.
        </p>

        <div className="reveal-text flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="#contact"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-black text-white transition-all duration-500 bg-blue-600 border border-blue-500/70 rounded-2xl md:rounded-2xl hover:bg-blue-500 hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Kostenloses Strategiegespräch
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto relative px-8 md:px-10 py-4 md:py-5 font-black text-white group overflow-hidden interactive text-center"
          >
            <span className="relative z-10">Unser Angebot einsehen</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
      </div>

      <div className="hidden md:block absolute top-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full animate-float opacity-50 shadow-[0_0_15px_#3b82f6]"></div>
      <div className="hidden md:block absolute top-3/4 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float-delayed opacity-50 shadow-[0_0_15px_#60a5fa]"></div>
      <div className="hidden md:block absolute bottom-1/4 left-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-pulse opacity-50 shadow-[0_0_15px_#06b6d4]"></div>
    </section>
  );
};

export default Hero;
