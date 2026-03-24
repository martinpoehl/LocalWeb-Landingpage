import React from 'react';
import { Code2, Globe, Sparkles, Mail, Phone, MapPin, ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const agencyLinks = [
    { name: 'Über uns', id: 'about' },
    { name: 'Team', href: '/employee' },
    { name: 'Leistungen', id: 'services' },
    { name: 'Vorgehen', id: 'process' },
    { name: 'Preise', id: 'pricing' },
    { name: 'Kontakt', id: 'contact' }
  ];

  const serviceLinks = [
    { name: 'Premium Webseiten', href: '/websites' },
    { name: 'Smarte Web-Tools', href: '/web-tools' },
    { name: 'Lokale SEO', href: '/seo' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
  ];

  return (
    <footer className="bg-gray-100 text-slate-600">
      <div className="container mx-auto px-5 md:px-6">
        
        {/* Newsletter Section */}
        <div className="py-12 md:py-16 border-b border-slate-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Bleiben Sie auf dem Laufenden</h3>
              <p className="text-slate-500">Tipps für Ihr lokales Marketing direkt in Ihr Postfach.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400"
              />
              <button 
                type="submit"
                className="glow-border group inline-flex items-center justify-center whitespace-nowrap px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-xl interactive"
              >
                Anmelden <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Branding & Social */}
          <div className="space-y-6 lg:col-span-1 sm:col-span-2">
            <div className="flex items-center gap-4">
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                <Code2 className="text-white w-5 h-5" />
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-slate-100">
                  <Globe className="text-blue-600 w-2.5 h-2.5" />
                </div>
                <Sparkles className="absolute -bottom-1 -left-1 text-cyan-200 w-3 h-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black font-display tracking-tight text-slate-900 leading-none">
                  Local<span className="text-blue-600">Web</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/80 mt-1">Websolutions</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base pr-4">
              Ihre digitale Full-Service-Agentur für professionelle Web-Lösungen, die lokale Unternehmen sichtbar machen.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-200 hover:bg-blue-600 active:bg-blue-700 active:scale-90 text-slate-500 hover:text-white transition-all duration-300">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Webseite */}
          <div className="sm:pl-0">
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-1">
              {agencyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href || `#${link.id}`} className="text-slate-500 hover:text-blue-600 active:text-blue-700 transition-colors text-base font-medium py-2 block">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Leistungen */}
          <div>
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">Leistungen</h4>
            <ul className="space-y-1">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-blue-600 active:text-blue-700 transition-colors text-base font-medium py-2 block">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Kontakt */}
          <div>
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-6">Kontakt</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 mt-1 shrink-0" />
                <span>Winterthur, Schweiz</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-600 mt-1 shrink-0" />
                <a href="mailto:info@localweb.ch" className="hover:text-blue-600 transition-colors">info@localweb.ch</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-600 mt-1 shrink-0" />
                <a href="tel:+41793643417" className="hover:text-blue-600 transition-colors">+41 79 364 34 17</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="py-8 border-t border-slate-200 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium text-center md:text-left">
            © {currentYear} LocalWeb. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 md:gap-8 text-xs font-semibold">
            <a href="/impressum" className="text-slate-500 hover:text-blue-600 transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-slate-500 hover:text-blue-600 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;