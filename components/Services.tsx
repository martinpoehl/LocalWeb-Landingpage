import React from 'react';
import {
  Terminal,
  Cpu,
  Layers,
  ArrowRight,
  MousePointer2,
  Smartphone,
  Search,
  Send,
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Moderne Webseiten',
      desc: 'Professionelle Webauftritte, die perfekt auf mobilen Geräten funktionieren und Ihre Kunden regional direkt ansprechen.',
      icon: MousePointer2,
      color: 'from-blue-600 to-blue-400',
      link: "/websites",
    },
    {
      title: 'Smart Web-Tools',
      desc: 'Praktische Lösungen wie Online-Terminbuchungen oder digitale Speisekarten, die Ihnen Zeit und Arbeit ersparen.',
      icon: Smartphone,
      color: 'from-blue-700 to-indigo-600',
      link: "/webapplication",
    },
    {
      title: 'Lokale Sichtbarkeit',
      desc: 'Wir sorgen dafür, dass Sie bei Google ganz oben stehen, wenn Menschen in Ihrer Nähe nach Ihren Leistungen suchen.',
      icon: Search,
      color: 'from-cyan-600 to-blue-500',
      link: "/seo",
    },
  ];

  const handleCardInteraction = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const light = card.querySelector('.dynamic-light') as HTMLElement;
    if (light) {
      light.style.opacity = '1';
      light.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    }

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const card = e.currentTarget;
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    const light = card.querySelector('.dynamic-light') as HTMLElement;
    if (light) light.style.opacity = '0';
  };

  return (
    <section
      id="services"
      className="py-24 md:py-30 bg-slate-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-6">
        {/* Kopfbereich ohne leere rechte Spalte */}
        <div className="mb-16 md:mb-32">
          <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block reveal-text">
            Maßgeschneiderte Pakete
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-10 leading-tight reveal-text">
            Digitale <span className="text-blue-500">Lösungen.</span>
          </h2>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-md reveal-text mb-10">
              Wir bauen keine komplizierten Systeme, sondern Webseiten, die Ihnen
              mehr Kunden und weniger Aufwand bringen.
            </p>
          </div>
          <a
              href="#contact"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 font-black text-white transition-all duration-500 bg-blue-600 border border-blue-500 rounded-2xl md:rounded-3xl hover:bg-blue-700 hover:scale-105 shadow-[0_15px_40px_rgba(37,99,235,0.3)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Preise anfragen
                <Send
                  size={18}
                  className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform"
                />
              </span>
            </a>
        </div>

        {/* Karten */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
  {services.map((service, idx) => (
    <a
      key={idx}
      href={service.link}
      onMouseMove={handleCardInteraction as any}
      onMouseLeave={handleCardLeave as any}
      className={`reveal-text relative group bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] transition-all duration-300 overflow-hidden ${
        idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="dynamic-light absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none opacity-0 transition-opacity duration-300"></div>

      <div
        className={`w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-10 shadow-2xl`}
      >
        <service.icon className="w-7 h-7 md:w-10 md:h-10" />
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 group-hover:text-blue-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-6 md:mb-8">
        {service.desc}
      </p>

      <div className="flex items-center gap-3 text-white font-bold group-hover:gap-5 transition-all text-sm md:text-base">
        Mehr erfahren
        <ArrowRight size={20} className="text-blue-500" />
      </div>
    </a>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;
