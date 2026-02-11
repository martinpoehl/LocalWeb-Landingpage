import React from 'react';
import { ArrowRight, MessageSquare, Palette, Code, Rocket, Send } from 'lucide-react';

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

  return (
    <>
      <section
        id="steps"
        className="pb-20 md:py-24 bg-slate-950 relative overflow-hidden"
      >
        {/* Background Decor */}
        <div className="absolute top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />


        {/* CONTENT-WRAPPER */}
        <div className="relative pt-20 max-w-7xl mx-auto px-4 lg:px-0">
          <div className="text-center mb-16 md:mb-20 reveal-text">
            <span className="text-blue-500 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-4 block">
              Workflow
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              In 4 Schritten zum <span className="text-blue-500">Erfolg.</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
              Ein strukturierter Prozess für messbare Ergebnisse.
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
                  className="reveal-text group relative flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0"
                >
                  {/* Step Icon - Compact on mobile */}
                  <div className="relative flex-shrink-0 lg:mb-10 z-20">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center text-blue-500 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500 shadow-lg lg:shadow-2xl relative">
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
                  <div className="flex-1 lg:text-left lg:h-full bg-slate-900/30 lg:bg-slate-900/20 backdrop-blur-md border border-white/5 p-4 lg:p-8 rounded-2xl lg:rounded-[2.5rem] transition-all duration-500 group-hover:bg-slate-900/40 group-hover:border-white/10 w-full">
                    <h3 className="text-base lg:text-xl font-bold lg:font-black text-white mb-1 lg:mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs lg:text-base leading-relaxed font-light group-hover:text-slate-400 transition-colors">
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

          <div className="mt-16 text-center reveal-text">
            <a
              href="#contact"
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] group"
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
      `}</style>
      </section>
    </>
  );
};

export default Process;




