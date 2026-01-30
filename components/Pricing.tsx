import React from 'react';
import { Check, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
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
      highlight: false
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
      highlight: true
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
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 transform origin-top-right -z-10"></div>
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 reveal-text">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-4 block">Transparenz</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            Einfache Pakete. <br /><span className="text-blue-600">Faire Preise.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Wir bieten maßgeschneiderte Lösungen für jedes Budget. Da jedes Projekt einzigartig ist, kalkulieren wir unsere Preise individuell für Ihren Erfolg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`reveal-text relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500 group overflow-hidden ${
                plan.highlight 
                ? 'bg-slate-900 text-white shadow-[0_30px_60px_rgba(15,23,42,0.2)] scale-105 z-20' 
                : 'bg-white border border-slate-100 text-slate-900 shadow-xl shadow-slate-100/50 hover:shadow-2xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-6 right-10 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Empfohlen
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                plan.highlight ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
              }`}>
                <plan.icon size={28} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight">{plan.name}</h3>
              <p className={`text-sm mb-10 font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.tagline}
              </p>

              <div className="mb-10">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">Auf Anfrage</span>
                <p className={`text-xs mt-2 uppercase font-bold tracking-widest ${plan.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                  Individuelles Angebot
                </p>
              </div>

              <div className="space-y-5 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
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
                className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black transition-all group-hover:gap-5 ${
                  plan.highlight 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Anfragen <ArrowRight size={20} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 p-8 md:p-12 bg-blue-50 rounded-[2.5rem] md:rounded-[3rem] border border-blue-100 flex flex-col lg:flex-row items-center justify-between gap-10 reveal-text">
          <div className="max-w-2xl text-center lg:text-left">
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">Sie haben ein spezielles Projekt?</h4>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Für komplexe Web-Applikationen oder umfangreiche E-Commerce Lösungen erstellen wir Ihnen gerne ein detailliertes Lastenheft und ein passgenaues Angebot.
            </p>
          </div>
          <a 
            href="#contact" 
            className="whitespace-nowrap bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-xl interactive"
          >
            Spezialprojekt anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
