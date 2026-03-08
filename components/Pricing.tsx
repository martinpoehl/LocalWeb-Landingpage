import React from 'react';
import { Check, ArrowRight, Star, ShieldCheck, Zap, ChevronDown } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const [isSpecialProjectExpanded, setIsSpecialProjectExpanded] = React.useState(false);
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
      tagline: 'Ideal für Einzelunternehmen & Startups',
      icon: Zap,
      price: 'ab 1’400 CHF',
      priceNote: 'Onepager / Web-Visitenkarte',
      description: 'Eine professionelle Web-Visitenkarte, um online gefunden zu werden. Perfekt für den Start in die digitale Welt.',
      features: [
        'Moderne Onepager-Webseite (1 Seite)',
        'Individuelles Design im bestehenden Branding',
        'Mobile Optimierung (Responsive Design)',
        'Kontaktformular inkl. Spam-Schutz',
        'Basis SEO-Setup (Titel, Meta, Struktur)',
        'Einbindung von Google Maps & Social Links',
      ],
      highlight: false,
      delay: 0,
    },
    {
      name: 'Business',
      tagline: 'Der Bestseller für KMU',
      icon: Star,
      price: 'ab 3’200 CHF',
      priceNote: 'Mehrseitige Unternehmenswebsite',
      description: 'Die umfassende Webseite für etablierte KMU, die wachsen und ihre digitalen Kanäle voll ausschöpfen möchten.',
      features: [
        'Website mit 4–8 Seiten (z.B. Start, Über uns, Leistungen, Referenzen, Kontakt)',
        'Individuelles, konversionsorientiertes Design',
        'Erweiterte SEO-Grundlage (Struktur, Pagespeed, OnPage-Basics)',
        'Integration von Blog oder News-Bereich',
        'DSGVO/DSG-konforme Cookie- & Datenschutz-Hinweise',
        'Schulung zur eigenständigen Pflege der Inhalte',
      ],
      highlight: false,
      delay: 150,
    },
    {
      name: 'Premium',
      tagline: 'Shop & individuelle Funktionen',
      icon: ShieldCheck,
      price: 'ab 6’500 CHF',
      priceNote: 'Online-Shop oder komplexes Projekt',
      description: 'Die High-End-Lösung für anspruchsvolle Projekte, Online-Shops oder individuelle Web-Applikationen mit spezifischen Anforderungen.',
      features: [
        'Online-Shop oder komplexe Weblösung',
        'Produktkatalog & Warenkorb-Funktion',
        'Integration von gängigen Zahlungsmethoden',
        'Online-Terminbuchung oder individuelle Features',
        'Performance-Optimierung & technisches SEO',
        'Wartungs- & Updatepaket im ersten Jahr inklusive',
      ],
      highlight: false,
      delay: 300,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-12 md:py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 skew-x-12 transform origin-top-right -z-10" />

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-10 md:mb-20 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-blue-500 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-4 block md:hover:text-cyan-400 transition-colors duration-300 cursor-default">
            Transparenz
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Einfache Pakete. <br />
            <span className="text-blue-500 md:hover:text-cyan-400 transition-colors duration-500 cursor-default">Faire Preise.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Wir bieten maßgeschneiderte Lösungen für jedes Budget. Da jedes Projekt einzigartig ist,
            kalkulieren wir unsere Preise individuell auf Basis dieser Pakete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto perspectives-1000">
          {plans.map((plan, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => window.innerWidth < 768 && setExpandedIndex(isExpanded ? null : idx)}
                className={`
                  group
                  relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem]
                  transition-all duration-700 overflow-hidden
                  ${window.innerWidth < 768 ? 'cursor-pointer' : 'cursor-auto'}
                  flex flex-col h-full
                  border-2 md:hover:border-blue-500/50 md:hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
                  ${
                    isVisible
                      ? 'opacity-100 translate-y-0 rotate-x-0'
                      : 'opacity-0 translate-y-20 rotate-x-12'
                  }
                  bg-slate-900 border-slate-800 text-white shadow-xl shadow-slate-950/20 md:hover:-translate-y-2
                `}
                style={{ transitionDelay: `${plan.delay}ms` }}
              >


                {/* Card-Content: flex-1 drückt den Button nach unten */}
                <div className="flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between md:block mb-6">
                    <div className="flex items-center md:block gap-4">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-0 md:mb-8 transition-transform duration-500 md:group-hover:scale-110 md:group-hover:rotate-6 bg-slate-800 text-blue-400`}
                      >
                        <plan.icon
                          size={28}
                          className="transition-transform duration-500 md:group-hover:stroke-[2.5px]"
                        />
                      </div>
                      <div className="flex flex-col">
                                              <h3 className="text-xl md:text-2xl font-black tracking-tight md:mb-2 md:group-hover:text-blue-400 transition-colors">
                                                {plan.name}
                                              </h3>                        <p className="text-sm font-light text-slate-400 md:hidden">
                          {plan.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Chevron for Mobile */}
                    <div
                      className={`md:hidden transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown
                        size={24}
                        className={'text-slate-500'}
                      />
                    </div>
                  </div>
                  
                  <p
                    className={`text-sm mb-6 md:mb-8 font-medium hidden md:block text-slate-400`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mb-6 md:mb-8 hidden md:block">
                    <span className="text-3xl md:text-4xl font-black tracking-tighter">
                      {plan.price}
                    </span>
                                          <p
                                            className={`text-xs mt-2 uppercase font-bold tracking-widest text-blue-400`}
                                          >                      {plan.priceNote}
                    </p>
                  </div>


                  {/* Body */}
                  <div className={`${isExpanded ? 'block' : 'hidden'} md:block flex-1 flex flex-col`}>
                    
                    <div className="mb-6 md:hidden">
                      <span className="text-3xl font-black tracking-tighter">
                        {plan.price}
                      </span>
                      <p
                        className={`text-xs mt-1 uppercase font-bold tracking-widest text-blue-400`}
                      >
                        {plan.priceNote}
                      </p>
                    </div>
                    
                    <p className={`text-sm mb-8 font-normal text-slate-400 leading-relaxed`}>
                      {plan.description}
                    </p>

                    <div className="space-y-4 md:space-y-5 flex-1">
                      {plan.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className={`flex items-center gap-3 transition-all duration-500 transform ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                          }`}
                          style={{ transitionDelay: `${plan.delay + fIdx * 100}ms` }}
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-400`}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span
                            className={`text-sm font-medium text-slate-300`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button: eigenes Element, nach flex-1 -> immer ganz unten, skaliert bei Hover */}
                    <a
                      href="#contact"
                      className={`
                    glow-border relative mt-8 w-full items-center justify-center gap-3 py-5 rounded-2xl font-black
                    bg-blue-600 text-white md:hover:bg-blue-700 md:hover:scale-105 transition-all duration-300 shadow-xl interactive
                    ${isExpanded ? 'flex' : 'hidden'}
                    md:hidden
                  `}
                >
                  <span className="relative">Anfragen</span>
                  <ArrowRight size={20} className="relative" />
                </a>
              </div>
            </div>

            <a
              href="#contact"
              className="glow-border relative mt-8 w-full items-center justify-center gap-3 py-5 rounded-2xl font-black bg-blue-600 text-white md:hover:bg-blue-700 md:hover:scale-105 transition-all duration-300 shadow-xl interactive hidden md:flex"
            >
              <span className="relative">Anfragen</span>
              <ArrowRight size={20} className="relative" />
            </a>
              </div>
            );
          })}
        </div>

        <div
          className={`
            mt-12 md:mt-20 p-6 sm:p-8 bg-slate-800/50 rounded-[2rem] border border-slate-700/50 backdrop-blur-md
            flex flex-col lg:flex-row items-center justify-between gap-10
            transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="max-w-2xl text-center lg:text-left w-full">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={() => window.innerWidth < 768 && setIsSpecialProjectExpanded(!isSpecialProjectExpanded)}
            >
              <h4 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-4 tracking-tight">
                Haben Sie ein spezielles Projekt?
              </h4>
              <div
                className={`md:hidden transition-transform duration-300 ${
                  isSpecialProjectExpanded ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown size={24} className={'text-slate-500'} />
              </div>
            </div>
            <div className={`${isSpecialProjectExpanded ? 'block' : 'hidden'} md:block`}>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-4">
                Für komplexe Web-Applikationen oder umfangreiche E-Commerce Lösungen erstellen wir
                Ihnen gerne ein detailliertes Lastenheft und ein passgenaues Angebot.
              </p>
              <p className="text-slate-500 text-xs mt-4">
                * Alle Preise verstehen sich als Richtwerte exkl. MwSt. Zzgl. laufende Kosten für
                Hosting & Domain.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className={`w-full sm:w-auto group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-black text-white transition-all duration-500 bg-blue-600 border border-blue-500 rounded-2xl md:rounded-2xl md:hover:bg-blue-700 md:hover:scale-105 shadow-[0_15px_40px_rgba(37,99,235,0.3)] overflow-hidden interactive ${isSpecialProjectExpanded ? 'flex' : 'hidden'} md:flex`}
          >
            <span className="relative z-10 flex items-center">
              Spezialprojekt anfragen
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 md:group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
