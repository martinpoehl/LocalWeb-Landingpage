import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Palette, Code, Rocket, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: '1 - Erstberatung',
      desc: 'Analyse Ihrer Ziele und der lokalen Zielgruppe in einem kostenlosen Erstgespräch.',
      icon: MessageSquare,
    },
    {
      title: '2 - Konzept',
      desc: 'Erstellung eines modernen Designs, das perfekt zu Ihrer Marke und Region passt.',
      icon: Palette,
    },
    {
      title: '3 - Entwicklung',
      desc: 'Programmierung mit Fokus auf Performance, Sicherheit und mobile Optimierung.',
      icon: Code,
    },
    {
      title: '4 - Launch',
      desc: 'Nach gründlichen Tests geht Ihre Seite live, inklusive SEO-Basics für Google.',
      icon: Rocket,
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const itemWidth = scrollRef.current.firstElementChild?.clientWidth || clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer && window.innerWidth < 1024) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const stepsElements = section.querySelectorAll('.step-item');
      stepsElements.forEach((step) => observer.observe(step));
    }

    return () => {
      if (section) {
        const stepsElements = section.querySelectorAll('.step-item');
        stepsElements.forEach((step) => observer.unobserve(step));
      }
    };
  }, []);

  return (
    <section id="process" className="py-20 md:py-24 bg-gray-100 relative overflow-hidden">
      <div className="absolute top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={sectionRef} className="relative pt-0 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-4 block hover:text-cyan-500 transition-colors duration-300 cursor-default">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
            So begleiten wir Sie zum <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Erfolg.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-light">
            Unser bewährter Prozess für Ihr digitales Wachstum. Wir begleiten Sie von der ersten Idee bis zum erfolgreichen Launch – transparent, partnerschaftlich und zielorientiert:
          </p>
        </div>

        <div className="relative">
          {/* Connection Line Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] z-0 overflow-visible">
            <svg className="w-full h-2" viewBox="0 0 1200 2" fill="none" preserveAspectRatio="none">
              <path d="M0 1H1200" stroke="rgba(59,130,246,0.1)" strokeWidth="2" strokeDasharray="12 12" />
              <path d="M0 1H1200" stroke="url(#line_gradient)" strokeWidth="2" strokeDasharray="12 12" className="animate-dash" />
              <defs>
                <linearGradient id="line_gradient" x1="0" y1="1" x2="1200" y2="1" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-4 gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible pb-12 lg:pb-0 snap-x snap-mandatory scrollbar-hide px-4 -mx-4 lg:px-0 lg:mx-0 touch-pan-x relative z-10"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="step-item group relative flex flex-col items-center lg:items-start transition-all duration-700 ease-out transform opacity-0 translate-y-10 w-[85vw] sm:w-[350px] lg:w-full flex-shrink-0 snap-center"
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="relative mb-8 lg:mb-10 z-20">
                  <div className={`absolute inset-0 bg-blue-500/20 blur-xl rounded-full transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} />
                  <div className={`w-20 h-20 md:w-24 md:h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg lg:shadow-2xl relative ${activeIndex === idx ? 'bg-blue-600 text-white border-blue-400' : 'text-blue-600 lg:group-hover:text-white lg:group-hover:bg-blue-600 lg:group-hover:border-blue-400'}`}>
                    <step.icon size={32} strokeWidth={1.5} className="relative z-10" />
                    <div className={`absolute inset-0 rounded-full border border-blue-500/30 transition-all duration-700 ${activeIndex === idx ? 'scale-125 opacity-100' : 'scale-100 opacity-0 lg:group-hover:scale-125 lg:group-hover:opacity-100'}`} />
                  </div>
                </div>

                <div className={`flex-1 text-center lg:text-left bg-white border border-slate-200 p-8 rounded-[2rem] lg:rounded-[2.5rem] transition-all duration-500 shadow-lg lg:group-hover:shadow-2xl lg:group-hover:-translate-y-2 lg:group-hover:border-blue-500/30 w-full ${activeIndex === idx ? 'border-blue-500/30 shadow-blue-500/10 -translate-y-1' : ''}`}>
                  <h3 className={`text-xl font-bold lg:font-black text-slate-900 mb-4 tracking-tight transition-colors ${activeIndex === idx ? 'text-blue-600' : 'lg:group-hover:text-blue-600'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-slate-600 text-base leading-relaxed font-light transition-colors ${activeIndex === idx ? 'text-slate-900' : 'lg:group-hover:text-slate-700'}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="flex justify-center gap-3 mt-4 lg:hidden">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}`}
              aria-label={`Schritt ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-black text-white transition-all duration-500 bg-blue-600 border border-blue-500 rounded-2xl md:rounded-2xl hover:bg-blue-700 hover:scale-105 shadow-[0_15px_40px_rgba(37,99,235,0.3)] overflow-hidden">
            <span className="relative z-10 flex items-center">
              Kostenlose Erstberatung anfragen
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes dash { to { stroke-dashoffset: -100; } }
        .animate-dash { animation: dash 30s linear infinite; }
        .is-visible { opacity: 1; transform: translateY(0); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Process;
