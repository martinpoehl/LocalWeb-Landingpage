import React, { useEffect, useState, useRef } from 'react';
import { Globe2 } from 'lucide-react';
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

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-10 md:h-20 bg-gradient-to-b from-slate-950 to-transparent"></div>

      <div className="container mx-auto px-5 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="w-full lg:w-1/2 relative reveal-text order-2 lg:order-1">
            <div className="absolute -inset-6 md:-inset-10 bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full animate-pulse"></div>

            <div className="relative z-10 p-2 md:p-4 border border-slate-100 rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
                alt="Lokale Unternehmen stärken"
                className="rounded-[2rem] md:rounded-[3.5rem] shadow-inner transition-all duration-700 grayscale hover:grayscale-0"
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce-slow cursor-pointer hover:scale-110 transition-transform">
                <Globe2 size={32} className="animate-spin-slow md:hidden" />
                <Globe2 size={48} className="animate-spin-slow hidden md:block" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 md:mb-8 block reveal-text">
              Partner für den Mittelstand
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-6 md:mb-10 leading-tight reveal-text">
              Unsere Expertise für Ihren<br className="hidden md:block" />
              <span className="text-blue-600 italic">lokalen Erfolg.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-2xl leading-relaxed mb-8 md:mb-12 font-light reveal-text">
              Wir wissen, was lokale Unternehmen brauchen: Vertrauen, Klarheit und Ergebnisse. LocalWeb unterstützt
              Handwerker, Gastronomen und Fachhändler dabei, digital so professionell aufzutreten, wie sie ihre Arbeit
              vor Ort verrichten. Keine leeren Versprechen, sondern echte Weblösungen für die Nachbarschaft.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16 reveal-text">
              <div className="group">
                <div className="text-3xl md:text-5xl font-black text-slate-950 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Lokale Betriebe
                </div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-5xl font-black text-slate-950 mb-1 md:mb-2 group-hover:text-cyan-500 transition-colors">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Leidenschaft</div>
              </div>
            </div>

            {/* Navigations-Links statt Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 reveal-text">
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl interactive text-center"
              >
                Referenzen
              </a>
              <Link
                href="/employee"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border-2 border-slate-100 text-slate-950 rounded-xl md:rounded-2xl font-black hover:bg-slate-50 transition-all interactive text-center"
              >
                Mitarbeiter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
