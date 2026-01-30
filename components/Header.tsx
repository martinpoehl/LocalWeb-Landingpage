
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Globe, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Start', id: 'home' },
    { name: 'Über uns', id: 'about' },
    { name: 'Leistungen', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Kontakt', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3 md:py-4 shadow-lg' 
          : 'bg-transparent py-6 md:py-10'
      }`}
    >
      <div className="container mx-auto px-5 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 group interactive z-[70]">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 md:p-3 rounded-xl md:rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              <Code2 className="text-white w-5 h-5 md:w-6 md:h-6" />
              <div className="absolute -top-1.5 -right-1.5 bg-slate-900 rounded-full p-0.5 border border-blue-500/50">
                <Globe className="text-blue-400 w-3 h-3 md:w-3.5 md:h-3.5 animate-spin-slow" />
              </div>
              <Sparkles className="absolute -bottom-1 -left-1 text-cyan-300 w-3 h-3 md:w-4 md:h-4 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black font-display tracking-tight text-white leading-none">
              Marly<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Couture</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/80 mt-1">Websolutions</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 hover:text-blue-400 ${
                activeSection === item.id ? 'text-blue-500 scale-110' : 'text-slate-400'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="glow-border relative bg-blue-600 text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl interactive overflow-hidden"
          >
            Anfrage senden
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-[70] text-white p-2 md:p-3 bg-white/5 rounded-xl border border-white/10 interactive focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 ease-in-out z-[65] flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 md:gap-12">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-3xl md:text-5xl font-black transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${activeSection === item.id ? 'text-blue-500' : 'text-white'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`mt-4 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg transition-all transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${navItems.length * 100}ms` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Jetzt anfragen
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
