import React, { useEffect, useRef } from 'react';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const Process: React.FC = () => {
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

  const sectionRef = useRef<HTMLDivElement>(null);

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
      const steps = section.querySelectorAll('.step-item');
      steps.forEach((step) => observer.observe(step));
    }

    return () => {
      if (section) {
        const steps = section.querySelectorAll('.step-item');
        steps.forEach((step) => observer.unobserve(step));
      }
    };
  }, []);


  return (
    <>
      <section
        id="process"
        className="py-20 md:py-24 bg-gray-100 relative overflow-hidden"
      >
        {/* Background Decor */}
        <div className="absolute top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />


        {/* CONTENT-WRAPPER */}
        <div ref={sectionRef} className="relative pt-0 max-w-7xl mx-auto px-4 lg:px-0">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-4 block hover:text-cyan-500 transition-colors duration-300 cursor-default">
              Workflow
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
              In 4 Schritten zum <span className="text-blue-600 hover:text-cyan-500 transition-colors duration-500 cursor-default">Erfolg.</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
              Ein strukturierter Prozess für messbare Ergebnisse. Unser Ansatz folgt vier klar definierten Schritten – transparent, effizient und immer auf Ihr Ziel ausgerichtet:
            </p>
          </div>

          <div className="relative">
            {/* Connection Line Desktop - Centered behind icons */}
            <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] z-0 overflow-visible">
              <svg
                className="w-full h-2"
                viewBox="0 0 1200 2"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 1H1200"
                  stroke="rgba(59,130,246,0.1)"
                  strokeWidth="2"
                  strokeDasharray="12 12"
                />
                <path
                  d="M0 1H1200"
                  stroke="url(#line_gradient)"
                  strokeWidth="2"
                  strokeDasharray="12 12"
                  className="animate-dash"
                />
                <defs>
                  <linearGradient
                    id="line_gradient"
                    x1="0"
                    y1="1"
                    x2="1200"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-20 relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="step-item group relative flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 transition-all duration-700 ease-out transform opacity-0 translate-y-10"
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  {/* Step Icon - Compact on mobile */}
                  <div className="relative flex-shrink-0 lg:mb-10 z-20">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center text-blue-600 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500 shadow-lg lg:shadow-2xl relative">
                      <step.icon
                        size={24}
                        strokeWidth={1.5}
                        className="relative z-10 lg:w-8 lg:h-8"
                      />
                      {/* Pulse Ring - only on desktop */}
                      <div className="hidden lg:block absolute inset-0 rounded-full border border-blue-500/30 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                  </div>

                  {/* Step Card Content - Compact on mobile, full on desktop */}
                  <div className="flex-1 lg:text-left lg:h-full bg-white border border-slate-200 p-4 lg:p-8 rounded-2xl lg:rounded-[2.5rem] transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-blue-500/30 w-full">
                    <h3 className="text-base lg:text-xl font-bold lg:font-black text-slate-900 mb-1 lg:mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs lg:text-base leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                      {step.desc}
                    </p>
                  </div>

                  {/* Vertical Mobile Line */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden absolute left-7 top-[70px] w-[2px] h-[calc(100%-10px)] bg-gradient-to-b from-blue-500/30 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="glow-border relative inline-block w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl interactive text-center"
            >
              Kostenlose Erstberatung anfragen
            </a>
          </div>
        </div>

        <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-dash {
          animation: dash 30s linear infinite;
        }
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      </section>
    </>
  );
};

export default Process;



