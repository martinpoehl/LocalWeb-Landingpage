import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Handwerker Unternehmen',
    category: 'Webseite',
    image: '/media/images/poehl-haustechnik-GmbH.jpg',
    link: 'https://poehl-haustechnik.ch',
  },
  {
    title: 'Fusspflege Studio',
    category: 'Webseite',
    image: '/media/images/schweizerfussplege-ag.jpg',
    link: 'https://schweizerfusspflege.ch',
  },
  {
    title: 'Regionale Shop-Lösung',
    category: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    link: '#',
  },
  {
    title: 'Gastronomie Buchungssystem',
    category: 'Web-Lösung',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setCurrentIndex(prevIndex =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = projects.length - 1 === currentIndex;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-white overflow-hidden text-center"
    >
      <div className="container mx-auto px-5 md:px-6">
        {/* Kopfbereich */}
        <div className="mb-12 md:mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4 block reveal-text">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight reveal-text">
            Lokale Erfolge.
          </h2>

          {/* Textblock unter der Überschrift, komplett zentriert */}
          <div className="mt-4 md:mt-6 flex flex-col items-center justify-center gap-4 md:gap-8">
            <p className="text-slate-600 max-w-md text-base md:text-lg reveal-text text-center">
              Echte Ergebnisse für echte Unternehmen aus der Region. Entdecken
              Sie unsere neuesten Web-Lösungen.
            </p>
          </div>
        </div>

        {/* Portfolio Slider */}
        <div className="relative group max-w-6xl mx-auto reveal-text">
          <div className="w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] bg-slate-200 overflow-hidden relative shadow-2xl shadow-slate-200 reveal-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />

                {/* Caption komplett zentriert */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 z-20">
                  <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
                    <div className="transform translate-y-0 transition-transform duration-500">
                      <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-1 md:mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-5xl font-black text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3.5 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-base hover:bg-blue-600 hover:text-white transition-all shadow-xl interactive"
                    >
                      Projekt ansehen
                      <ExternalLink size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute top-1/2 -left-4 lg:-left-10 -translate-y-1/2 z-20 bg-white shadow-2xl p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all border border-slate-100 interactive focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute top-1/2 -right-4 lg:-right-10 -translate-y-1/2 z-20 bg-white shadow-2xl p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all border border-slate-100 interactive focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8 md:mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-500 interactive ${
                  index === currentIndex
                    ? 'w-8 md:w-16 bg-blue-600 shadow-lg shadow-blue-200'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
