import React from 'react';
import { Star, Quote } from 'lucide-react';

const kundenDaten = [
  {
    name: 'Karin Schweizer',
    role: 'Inhaberin',
    company: 'Schweizer Fusspflege AG',
    content: 'Endlich eine Agentur, die versteht, worauf es bei einem lokalen Dienstleister ankommt. Mein Online-Terminkalender ist seit dem Launch der neuen Seite fast immer ausgebucht. Absolute Empfehlung!',
    rating: 5,
    image: '/media/images/karin_schweizer.jpg',
  },
  {
    name: 'Stefan Pöhl',
    role: 'Geschäftsführer',
    company: 'Pöhl Haustechnik GmbH',
    content: 'Seit unsere neue Webseite online ist, haben wir eine deutliche Steigerung der digitalen Sichtbarkeit. Das Team von LocalWeb arbeitet extrem strukturiert und lösungsorientiert. Ein echter Gewinn für unser Unternehmen.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Michael Oeri',
    role: 'Geschäftsführer',
    company: 'Regioport AG',
    content: 'LocalWeb hat unsere Erwartungen übertroffen. Unsere neue Webseite sieht nicht nur fantastisch aus, sondern wir erhalten auch spürbar mehr Anfragen aus der Region. Die Zusammenarbeit war professionell und unkompliziert.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

const Kunden: React.FC = () => {
  return (
    <section id="kunden" className="py-20 md:py-24 bg-gray-50 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 reveal-text">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-4 block hover:text-cyan-500 transition-colors duration-300 cursor-default">
            Referenzen
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
            Was unsere <span className="text-blue-600 hover:text-cyan-500 transition-colors duration-500 cursor-default">Kunden</span> sagen.
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Vertrauen ist die Basis jeder erfolgreichen Zusammenarbeit. Wir sind stolz darauf, lokale Unternehmen auf ihrem digitalen Weg zu begleiten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {kundenDaten.map((stimme, idx) => (
            <div
              key={idx}
              className="reveal-text group relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full w-full"
            >
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-blue-600/5 text-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Quote size={32} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(stimme.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-blue-500 text-blue-500" />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 flex-1 font-medium italic">
                "{stimme.content}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img
                  src={stimme.image}
                  alt={stimme.name}
                  className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-md shadow-slate-200"
                />
                <div>
                  <h4 className="text-slate-900 font-black text-base md:text-lg leading-tight">
                    {stimme.name}
                  </h4>
                  <div className="mt-1">
                    <p className="text-blue-600 text-[11px] md:text-xs font-black uppercase tracking-wider leading-tight">
                      {stimme.role}
                    </p>
                    <p className="text-slate-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-1">
                      {stimme.company}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kunden;
