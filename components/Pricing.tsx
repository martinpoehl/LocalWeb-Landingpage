import React from 'react';
import { Check, ArrowRight, Star, ShieldCheck, Zap, ChevronDown } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Starter',
      tagline: 'Ideal für Kleinbetriebe',
      icon: Zap,
      features: [
        'Einseitige Web-Visitenkarte',
        'Mobile Optimierung',
        'Kontaktformular',
        'Basis SEO-Konfiguration',
        'E-Mail Integration'
      ],
      highlight: false,
      delay: 0
    },
    {
      name: 'Business',
      tagline: 'Der Bestseller für KMU',
      icon: Star,
      features: [
        'Mehrseitiges Webdesign',
        'Erweiterte SEO-Optimierung',
        'Google Maps Integration',
        'Blog oder News-Sektion',
        'Individuelle Icons & Grafik'
      ],
      highlight: true,
      delay: 150
    },
    {
      name: 'Premium',
      tagline: 'Full-Service Digitalisierung',
      icon: ShieldCheck,
      features: [
        'E-Commerce / Shop-Systeme',
        'Online-Terminbuchung',
        'Custom Web-App Features',
        'Performance-Hosting inkl.',
        'Regelmäßige Wartung'
      ],
      highlight: false,
      delay: 300
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 skew-x-12 transform origin-top-right -z-10"></div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-4 block">Transparenz</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
            Einfache Pakete. <br /><span className="text-blue-600">Faire Preise.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Wir bieten maßgeschneiderte Lösungen für jedes Budget. Da jedes Projekt einzigartig ist, kalkulieren wir unsere Preise individuell für Ihren Erfolg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto perspectives-1000">
          {plans.map((plan, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className={`relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 group overflow-hidden cursor-pointer md:cursor-auto ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-20 rotate-x-12'
                  } ${plan.highlight
                    ? 'bg-slate-900 text-white shadow-[0_30px_60px_rgba(15,23,42,0.2)] md:scale-105 z-20 hover:scale-110 hover:shadow-[0_40px_80px_rgba(37,99,235,0.3)]'
                    : 'bg-white border border-slate-200 text-slate-900 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2'
                  }`}
                style={{ transitionDelay: `${plan.delay}ms` }}
              >
                {/* Highlight Glow Effect */}
                {plan.highlight && (
                  <div className="absolute top-6 right-10 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg animate-pulse md:block hidden">
                    Empfohlen
                  </div>
                )}

                {/* Mobile Header (Always Visible) */}
                <div className="flex items-center justify-between md:block">
                  <div className="flex items-center md:block gap-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-0 md:mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                      }`}>
                      <plan.icon size={28} className="transition-transform duration-500 group-hover:stroke-[2.5px]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight md:mb-2">{plan.name}</h3>
                  </div>

                  {/* Chevron for Mobile */}
                  <div className={`md:hidden transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} className={plan.highlight ? 'text-white' : 'text-slate-400'} />
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className={`${isExpanded ? 'block mt-6' : 'hidden'} md:block md:mt-0`}>
                  <p className={`text-sm mb-6 md:mb-10 font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>

                  <div className="mb-6 md:mb-10">
                    <span className="text-3xl md:text-4xl font-black tracking-tighter">Auf Anfrage</span>
                    <p className={`text-xs mt-2 uppercase font-bold tracking-widest ${plan.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                      Individuelles Angebot
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-5 mb-8 md:mb-12">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-center gap-3 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                        style={{ transitionDelay: `${plan.delay + (fIdx * 100)}ms` }}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                          }`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black transition-all group-hover:gap-5 relative overflow-hidden ${plan.highlight
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-slate-900 text-white'
                      }`}
                  >
                    <span className="relative">Anfragen</span>
                    <ArrowRight size={20} className="relative" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 md:mt-20 p-6 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl text-center lg:text-left">
            <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight">Sie haben ein spezielles Projekt?</h4>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Für komplexe Web-Applikationen oder umfangreiche E-Commerce Lösungen erstellen wir Ihnen gerne ein detailliertes Lastenheft und ein passgenaues Angebot.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-xl interactive hover:scale-105 active:scale-95"
          >
            Spezialprojekt anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
