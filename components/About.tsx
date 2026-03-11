import React, { useEffect, useState, useRef } from 'react';
import { Globe2, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CountUp: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setHasStarted(true);
    });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const GlobeButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 z-20"
    >
      {/* Shockwaves */}
      {isAnimating && (
        <>
          <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping-large opacity-0"></div>
          <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping-delayed opacity-0"></div>
        </>
      )}

      {/* Icon */}
      <Globe2
        size={32}
        className={`md:hidden transition-all ${isAnimating ? 'animate-spin-super-fast' : 'animate-spin-slow hover:animate-spin-fast'}`}
      />
      <Globe2
        size={40}
        className={`hidden md:block transition-all ${isAnimating ? 'animate-spin-super-fast' : 'animate-spin-slow hover:animate-spin-fast'}`}
      />
    </div>
  );
};

const About: React.FC = () => {
  const [isImageGrayscale, setIsImageGrayscale] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <>
      <section id="about" className="py-20 md:py-24 bg-gray-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-10 md:h-20 bg-gradient-to-b from-slate-950 to-transparent"></div>

        <div className="container mx-auto px-5 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 relative reveal-text order-2 lg:order-1">
              <div className="absolute -inset-6 md:-inset-10 bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full animate-pulse"></div>

              <div className="relative z-10 p-2 md:p-4 border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] bg-white shadow-2xl">
                <img
                  src="/media/images/about.jpg"
                  alt="Lokale Unternehmen stärken"
                  className={`rounded-[2rem] md:rounded-[2.5rem] shadow-inner transition-all duration-1000 ${isImageGrayscale ? 'grayscale hover:grayscale-0' : 'grayscale-0 hover:grayscale'} ${isAnimating ? 'brightness-125 scale-[1.02] rotate-1' : 'brightness-100 scale-100 rotate-0'}`}
                />

                <div
                  onClick={(e) => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setIsImageGrayscale(!isImageGrayscale);
                    setTimeout(() => setIsAnimating(false), 1000);
                  }}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all duration-500 z-20 group ${isAnimating ? 'animate-bounce-short scale-125 bg-cyan-500' : ''}`}
                >
                  {/* Enhanced Shockwaves */}
                  <div className={`absolute inset-0 rounded-full bg-blue-600 opacity-0 ${isAnimating ? 'animate-ping-large' : ''}`}></div>
                  <div className={`absolute inset-0 rounded-full bg-cyan-400 opacity-0 ${isAnimating ? 'animate-ping-delayed' : ''}`}></div>
                  <div className={`absolute inset-0 rounded-full bg-white opacity-0 ${isAnimating ? 'animate-ping-fast' : ''}`}></div>

                  <Globe2 size={32} className={`md:hidden transition-all duration-500 ${isAnimating ? 'animate-spin-super-fast text-white' : 'animate-spin-slow group-hover:animate-spin-fast'}`} />
                  <Globe2 size={40} className={`hidden md:block transition-all duration-500 ${isAnimating ? 'animate-spin-super-fast text-white' : 'animate-spin-slow group-hover:animate-spin-fast'}`} />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 md:mb-8 block reveal-text hover:text-cyan-500 transition-colors duration-300 cursor-default">
                Partner für den Mittelstand
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight reveal-text">
                Unsere Expertise für{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Ihren Erfolg.</span>
              </h2>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-normal reveal-text">
                Wir wissen, was lokale Unternehmen brauchen: Vertrauen, Klarheit und Ergebnisse. LocalWeb unterstützt
                Handwerker, Gastronomen und Fachhändler dabei, digital so professionell aufzutreten, wie sie ihre Arbeit
                vor Ort verrichten. Keine leeren Versprechen, sondern echte Weblösungen für die Nachbarschaft.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-10 md:mb-16 reveal-text">
                <div className="group">
                  <div className="text-3xl md:text-4xl font-black text-slate-950 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                    <CountUp end={10} suffix="+" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Jahre Erfahrung
                  </div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-black text-slate-950 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                    <CountUp end={15} suffix="+" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Lokale Kunden
                  </div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-black text-slate-950 mb-1 md:mb-2 group-hover:text-cyan-500 transition-colors">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Leidenschaft</div>
                </div>
                
              </div>

              {/* Navigations-Links statt Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 reveal-text">
                <Link
                  href="/employee"
                  className="glow-border relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl interactive text-center flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  Unser Team
                </Link>
                <a
                  href="#services"
                  className="glow-border relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border-2 border-slate-200 text-slate-950 rounded-xl md:rounded-2xl font-black hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 transition-all duration-300 interactive text-center flex items-center justify-center gap-2"
                >
                  <Sparkles size={20} />
                  Unsere Leistungen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes ping-large {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(5); opacity: 0; }
        }
        @keyframes ping-delayed {
          0% { transform: scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes ping-fast {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes bounce-short {
          0%, 100% { transform: translate(-50%, -50%) scale(1.25); }
          50% { transform: translate(-50%, -55%) scale(1.3); }
        }
        .animate-ping-large {
          animation: ping-large 1s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
        .animate-ping-delayed {
          animation: ping-delayed 1.2s cubic-bezier(0, 0, 0.2, 1) 0.1s forwards;
        }
        .animate-ping-fast {
          animation: ping-fast 0.6s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
        .animate-bounce-short {
          animation: bounce-short 0.5s ease-out;
        }
        .animate-spin-fast {
          animation: spin 3s linear infinite;
        }
        .animate-spin-super-fast {
          animation: spin 0.4s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default About;
