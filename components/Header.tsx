import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Globe, Sparkles, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

interface NavItem {
  name: string;
  id?: string; // For section links
  href?: string; // For page links
  children?: NavItem[]; // For subcategories
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null); // New state for mobile submenus

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
      setOpenMobileSubmenu(null); // Close any open submenus when main menu closes
    }
  }, [isMobileMenuOpen]);

  const navItems: NavItem[] = [
    {
      name: 'Über uns',
      id: 'about', // Added id
      children: [
        { name: 'Mitarbeiter', href: '/employee' },
        { name: 'Referenzen', id: 'portfolio' }, // Assuming Portfolio section serves as References
      ],
    },
    {
      name: 'Leistungen',
      id: 'services', // Added id
      children: [
        { name: 'Premium Webseiten', href: '/websites' },
        { name: 'Smarte Apps', href: '/web-tools' },
        { name: 'Lokale Sichtbarkeit', href: '/seo' },
        ],
    },
    { name: 'Preise', id: 'pricing' },
    { name: 'Ablauf', id: 'steps' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Kontakt', id: 'contact' },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null); // Close any open submenus when a link is clicked
  };

  const toggleSubmenu = (itemName: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3 md:py-3 shadow-lg'
        : 'bg-transparent py-6 md:py-6'
        }`}
    >
      <div className="container mx-auto px-5 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 group interactive z-[70]">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2 md:p-2.5 rounded-xl md:rounded-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              <Code2 className="text-white w-5 h-5 md:w-6 md:h-6" />
              <div className="absolute -top-1.5 -right-1.5 bg-slate-900 rounded-full p-0.5 border border-blue-500/50">
                <Globe className="text-blue-400 w-3 h-3 md:w-3.5 md:h-3.5 animate-spin-slow" />
              </div>
              <Sparkles className="absolute -bottom-1 -left-1 text-cyan-300 w-3 h-3 md:w-4 md:h-4 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-xl font-black font-display tracking-tight text-white leading-none">
              Local<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Web</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/80 mt-1">Websolutions</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative group flex items-center">
              {item.children ? (
                <>
                  <a
                    href={item.id ? `#${item.id}` : '#'} // Use the parent's ID as href if available, otherwise '#'
                    className={`group relative text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 hover:text-blue-400 ${activeSection === item.id || item.children.some(child => child.id === activeSection || child.href === window.location.pathname) ? 'text-blue-500 scale-110' : 'text-slate-400'} focus:outline-none pr-6`} // Add padding for icon
                    onClick={item.id ? handleNavLinkClick : (e) => e.preventDefault()} // Prevent default if no direct link
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${activeSection === item.id || item.children.some(child => child.id === activeSection || child.href === window.location.pathname) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                  <ChevronDown size={16} className="absolute right-0 text-slate-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-180" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-52 rounded-xl bg-slate-900 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 p-2 border border-white/10">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href || `#${child.id}`}
                        className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                        onClick={handleNavLinkClick}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href || `#${item.id}`}
                  className={`group relative text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 hover:text-blue-400 ${activeSection === item.id || item.href === window.location.pathname ? 'text-blue-500 scale-110' : 'text-slate-400'
                    }`}
                  onClick={handleNavLinkClick}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${activeSection === item.id || item.href === window.location.pathname ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className="glow-border relative bg-blue-600 text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl interactive"
            onClick={handleNavLinkClick} // Use this for closing main menu
          >
            Anfrage senden
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden z-[110] text-white p-2 md:p-3 bg-white/5 rounded-xl border border-white/10 interactive focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 h-[100dvh] bg-gradient-to-b from-slate-900 to-slate-950 transition-all duration-500 ease-in-out z-[100] flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col items-center gap-8 md:gap-12">
          {navItems.map((item, i) => (
            <div key={item.name} className="flex flex-col items-center">
              {item.children ? (
                <>
                  <div className={`flex items-center gap-2 relative text-3xl md:text-5xl font-black transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                    <a
                      href={item.id ? `#${item.id}` : '#'}
                      className={`group relative ${activeSection === item.id || item.children.some(child => child.id === activeSection || child.href === window.location.pathname) ? 'text-blue-500' : 'text-white'}`}
                      onClick={item.id ? handleNavLinkClick : (e) => e.preventDefault()}
                    >
                      {item.name}
                      <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${activeSection === item.id || item.children.some(child => child.id === activeSection || child.href === window.location.pathname) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                    <button
                      className="p-1 focus:outline-none"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <ChevronDown size={32} className={`transition-transform duration-300 ${openMobileSubmenu === item.name ? 'rotate-180' : ''} ${activeSection === item.id || item.children.some(child => child.id === activeSection || child.href === window.location.pathname) ? 'text-blue-500' : 'text-white'}`} />
                    </button>
                  </div>
                  <div className={`mt-4 space-y-4 text-center overflow-hidden transition-all duration-500 ease-in-out ${openMobileSubmenu === item.name ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {item.children.map((child, childIdx) => (
                      <a
                        key={child.name}
                        href={child.href || `#${child.id}`}
                        className={`block pl-8 py-2 text-lg md:text-xl font-medium text-slate-300 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-300 transform ${openMobileSubmenu === item.name ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                          }`}
                        style={{ transitionDelay: `${childIdx * 50}ms` }}
                        onClick={handleNavLinkClick}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href || `#${item.id}`}
                  className={`group relative text-3xl md:text-5xl font-black transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    } ${activeSection === item.id || item.href === window.location.pathname ? 'text-blue-500' : 'text-white'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={handleNavLinkClick}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${activeSection === item.id || item.href === window.location.pathname ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className={`mt-4 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg transition-all transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: `${navItems.length * 100}ms` }}
            onClick={handleNavLinkClick}
          >
            Jetzt anfragen
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;