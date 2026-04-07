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
      title: 'Webseiten, die überzeugen',
      desc: 'Professionelle Auftritte, die Ihre Expertise spiegeln und Besucher direkt in zahlende Kunden verwandeln.',
      icon: MousePointer2,
      color: 'from-blue-600 to-blue-400',
      link: "/websites",
    },
    {
      title: 'Smart Web-Tools',
      desc: 'Digitale Prozesse, die Ihnen wertvolle Zeit und Arbeit ersparen – von intelligenter Terminbuchung bis hin zu automatisierten Kundenanfragen.',
      icon: Smartphone,
      color: 'from-blue-700 to-indigo-600',
      link: "/web-tools",
    },
    {
      title: 'Lokale Dominanz (SEO)',
      desc: 'Wir bringen Sie bei Google genau dann nach ganz oben, wenn Menschen in Ihrer direkten Umgebung nach Ihren Leistungen suchen.',
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

    requestAnimationFrame(() => {
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
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const card = e.currentTarget;
    requestAnimationFrame(() => {
      card.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      const light = card.querySelector('.dynamic-light') as HTMLElement;
      if (light) light.style.opacity = '0';
    });
  };

  return (
    <section
      id="services"
      className="py-12 md:py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-6">
        <div className="mb-10 md:mb-14">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-[11px] md:text-xs mb-4 block reveal-text text-center hover:text-cyan-400 transition-colors duration-300 cursor-default">
            Ihr digitales Fundament
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight reveal-text text-center">
            Lösungen, die echten <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mehrwert bringen.</span>
          </h2>

          <div className="flex flex-col items-center gap-4 md:gap-6">
            <p className="text-slate-400 text-base md:text-xl font-light max-w-2xl leading-relaxed reveal-text text-center">
              Investieren Sie in eine Online-Präsenz, die sich wirklich auszahlt. Keine austauschbaren 08/15-Baukästen, sondern auf Sie zugeschnittene Werkzeuge, die Ihre tägliche Arbeit erleichtern und potenzielle Kunden vom ersten Klick an überzeugen.
            </p>
          </div>
        </div>

        {/* Karten im selben Container, horizontal zentriert */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items">
          {services.map((service, idx) => (
            <a
              key={idx}
              href={service.link}
              onMouseMove={handleCardInteraction as any}
              onMouseLeave={handleCardLeave as any}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`reveal-text relative group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] active:scale-[0.98] ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="dynamic-light absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none opacity-0 transition-opacity duration-300" />

              <div
                className={`w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-3 md:mb-8 shadow-2xl flex-shrink-0 ${idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
              >
                <service.icon className="w-5 h-5 md:w-8 md:h-8" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal mb-8">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 md:gap-3 text-white font-bold group-hover:gap-4 md:group-hover:gap-5 transition-all text-xs md:text-base">
                Mehr erfahren
                <ArrowRight size={16} className="text-blue-500 md:w-5 md:h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
