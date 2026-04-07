import React, { useRef, useState, useCallback } from 'react';
import { Sparkles, XCircle, AlertTriangle, ArrowRight, MousePointer2, Smartphone, Search, TrendingUp, Clock, Zap } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <section id="transformation" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 reveal-text">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block hover:text-cyan-400 transition-colors duration-300 cursor-default">
            Die Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Erkennen Sie Ihre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">alte Webseite</span>{' '}
            wieder?
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-slate-400 max-w-2xl text-base sm:text-lg lg:text-xl font-light leading-relaxed text-center">
              Ziehen Sie den Regler und erleben Sie den Unterschied zwischen «so wie immer»
              und einer Webseite, die tatsächlich neue Kunden bringt.
            </p>
          </div>
        </div>

        {/* === INTERACTIVE SLIDER === */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-14 reveal-text">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-col-resize select-none shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/10"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* ===== AFTER (underneath, full width) ===== */}
            <div className="absolute inset-0">
              <img
                src="/media/images/after-hero.png"
                alt="Moderne, professionelle Webseite"
                className="w-full h-full object-cover"
                style={{ transform: 'scale(1.15)', transformOrigin: 'center center' }}
              />
              {/* NACHHER Label */}
              <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                <Sparkles size={12} /> Nachher
              </div>
            </div>

            {/* ===== BEFORE (overlay, clipped) ===== */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="/media/images/before-hero.png"
                alt="Veraltete, unprofessionelle Webseite"
                className="w-full h-full object-fill"
              />
              {/* VORHER Label */}
              <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 bg-red-500/90 backdrop-blur-md text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                <AlertTriangle size={12} /> Vorher
              </div>
            </div>


            {/* ===== SLIDER HANDLE ===== */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* Vertical Line */}
              <div className="w-[3px] h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

              {/* Drag Handle */}
              <div
                className="absolute w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-col-resize select-none hover:scale-110 active:scale-95 transition-transform duration-200"
                onMouseDown={handleMouseDown}
                onTouchStart={() => setIsDragging(true)}
              >
                <div className="flex items-center gap-0.5 text-slate-500">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M6 1L2 7l4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M2 1l4 6-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Drag Hint */}
          <div className="text-center mt-6 text-slate-500 text-xs md:text-sm font-light flex items-center justify-center gap-2 reveal-text">
            <MousePointer2 size={14} className="animate-float" /> Regler verschieben zum Vergleichen
          </div>
        </div>


        {/* === COMPARISON GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto reveal-text">
          
          {/* Problem Side */}
          <div className="bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 backdrop-blur-md relative overflow-hidden group hover:border-red-500/20 transition-all duration-500">
            <div className="absolute -top-10 -right-10 text-[8rem] font-black text-white/[0.02] leading-none select-none">✗</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center">
                <AlertTriangle size={22} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight">Typische Probleme</h3>
                <p className="text-slate-500 text-xs font-medium">Die Ihre Kunden abschrecken</p>
              </div>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {[
                { icon: Smartphone, text: 'Nicht für Smartphones optimiert' },
                { icon: Clock, text: 'Veraltetes Design aus den 2010ern' },
                { icon: Search, text: 'Bei Google unsichtbar' },
                { icon: XCircle, text: 'Keine klare Handlungsaufforderung' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm md:text-base font-light">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={14} className="text-red-400" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Side */}
          <div className="bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500">
            <div className="absolute -top-10 -right-10 text-[8rem] font-black text-white/[0.02] leading-none select-none">✓</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight">Das Resultat mit LocalWeb</h3>
                <p className="text-slate-500 text-xs font-medium">Mehr Vertrauen, mehr Anfragen</p>
              </div>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {[
                { icon: Smartphone, text: 'Kristallklar auf jedem Gerät' },
                { icon: Zap, text: 'Ultraschnell und modern' },
                { icon: Search, text: 'Sichtbar bei lokalen Google-Suchen' },
                { icon: TrendingUp, text: 'Struktur, die zum Handeln motiviert' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base font-light">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={14} className="text-blue-400" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 text-center reveal-text">
          <a href="#contact" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-black text-white transition-all duration-500 bg-blue-600 border border-blue-500 rounded-2xl hover:bg-blue-700 hover:scale-105 shadow-[0_15px_40px_rgba(37,99,235,0.3)] overflow-hidden">
            <span className="relative z-10 flex items-center">
              Kostenlose Analyse Ihrer Webseite
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
          <p className="text-slate-500 text-xs mt-4 font-light">Unverbindlich & kostenlos – wir zeigen Ihnen, was möglich ist.</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
