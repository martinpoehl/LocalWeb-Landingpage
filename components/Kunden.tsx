import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Berechnet den Index basierend darauf, welches Element der Mitte am nächsten ist
      const itemWidth = scrollRef.current.firstElementChild?.clientWidth || clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
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
      const cardElements = section.querySelectorAll('.kunden-card');
      cardElements.forEach((card) => observer.observe(card));
    }

    return () => {
      if (section) {
        const cardElements = section.querySelectorAll('.kunden-card');
        cardElements.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="kunden" ref={sectionRef} className="py-12 md:py-24 bg-gray-50 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 reveal-text">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm mb-3 md:mb-4 block hover:text-cyan-500 transition-colors duration-300 cursor-default">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter">
            Was unsere <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Kunden</span> sagen.
          </h2>
          <p className="text-slate-600 text-base md:text-xl font-light leading-relaxed">
            Vertrauen ist die Basis jeder erfolgreichen Zusammenarbeit. Wir sind stolz darauf, lokale Unternehmen auf ihrem digitalen Weg zu begleiten.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative group max-w-7xl mx-auto">
          {/* Mobile Navigation Buttons */}
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 w-12 h-12 rounded-full shadow-lg border border-slate-100 text-blue-600 transition-all flex lg:hidden items-center justify-center ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Nach links scrollen"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => scrollTo(activeIndex + 1)}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 w-12 h-12 rounded-full shadow-lg border border-slate-100 text-blue-600 transition-all flex lg:hidden items-center justify-center ${activeIndex === kundenDaten.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Nach rechts scrollen"
          >
            <ChevronRight size={32} />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-10 overflow-x-auto lg:overflow-x-visible pb-12 lg:pb-0 snap-x snap-mandatory scrollbar-hide px-4 -mx-4 lg:px-0 lg:mx-0 touch-pan-x"
          >
            {kundenDaten.map((stimme, idx) => (
              <div
                key={idx}
                className="kunden-card group/card relative bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-500/10 lg:shadow-xl lg:shadow-slate-200/50 lg:hover:shadow-2xl lg:hover:shadow-blue-500/10 -translate-y-2 lg:translate-y-10 lg:hover:-translate-y-2 transition-all duration-500 flex flex-col h-auto w-[82vw] sm:w-[450px] lg:w-full flex-shrink-0 snap-center opacity-100 lg:opacity-0"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute top-8 right-8 text-blue-600 scale-110 lg:text-blue-100 lg:scale-100 lg:group-hover/card:text-blue-600 lg:group-hover/card:scale-110 transition-all duration-500">
                  <Quote size={40} />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(stimme.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>

                <blockquote className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 flex-1 font-medium italic relative z-10">
                  "{stimme.content}"
                </blockquote>

                <div className="flex items-center gap-4 pt-8 border-t border-slate-50 mt-auto">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600/20 blur-lg rounded-full opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100 transition-opacity" />
                    <img
                      src={stimme.image}
                      alt={stimme.name}
                      className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover grayscale-0 lg:grayscale lg:group-hover/card:grayscale-0 transition-all duration-500 shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black text-lg leading-tight">
                      {stimme.name}
                    </h4>
                    <div className="mt-1">
                      <p className="text-blue-600 text-xs font-black uppercase tracking-wider leading-tight">
                        {stimme.role}
                      </p>
                      <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mt-1">
                        {stimme.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicators */}
          <div className="flex justify-center gap-3 mt-4 lg:hidden">
            {kundenDaten.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Gehe zu Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .is-visible { 
            opacity: 1 !important; 
            transform: translateY(0) !important; 
          }
          @media (min-width: 1024px) {
            .kunden-card {
              transition: all 0.7s ease-out;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Kunden;
