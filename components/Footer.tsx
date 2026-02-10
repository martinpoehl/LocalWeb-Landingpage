
import React from 'react';
import { Code2, Globe, Send, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const agencyLinks = [
    { name: 'Über uns', id: 'about' },
    { name: 'Leistungen', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Kontakt', id: 'contact' }
  ];

  const serviceLinks = [
    { name: 'Premium Webseiten', id: 'services' },
    { name: 'Smarte Apps', id: 'services' },
    { name: 'Lokale SEO', id: 'services' },
    { name: 'Digital Branding', id: 'services' }
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 md:pt-16 pb-8 md:pb-8">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg shadow-lg">
                <Code2 className="text-white w-5 h-5" />
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-slate-100">
                  <Globe className="text-blue-600 w-2.5 h-2.5" />
                </div>
                <Sparkles className="absolute -bottom-1 -left-1 text-cyan-200 w-3 h-3" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-slate-900">
                Local<span className="text-blue-600">Web</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              Wir bauen die Brücke in die digitale Welt. Professionelle Web-Lösungen für lokale Unternehmen mit Vision und Kreativität.
            </p>
          </div>

          <div className="sm:pl-4">
            <h4 className="text-slate-950 font-black uppercase tracking-widest text-[10px] mb-6">Agentur</h4>
            <ul className="space-y-4">
              {agencyLinks.map(link => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-950 font-black uppercase tracking-widest text-[10px] mb-6">Leistungen</h4>
            <ul className="space-y-4">
              {serviceLinks.map(link => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium text-center md:text-left">
            © {currentYear} LocalWeb. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 md:gap-8 text-[10px] font-black uppercase tracking-widest">
            <a href="/impressum" className="hover:text-blue-500 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-blue-500 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
