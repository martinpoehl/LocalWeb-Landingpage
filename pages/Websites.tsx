import React from 'react';
import { ArrowRight, Check, Smartphone, Zap, Palette } from 'lucide-react';

const Websites: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-blue-500/30">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold font-display tracking-tight text-white">
            Local<span className="text-blue-600">Web</span>
          </a>
          <a href="/" className="text-sm font-medium hover:text-white transition-colors">
            Zurück zur Startseite
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Moderne Webseiten
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Ihr digitaler <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Maßanzug.
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
              Wir entwickeln Webseiten, die nicht nur gut aussehen, sondern Ihre Besucher in Kunden
              verwandeln. Schnell, sicher und für jedes Gerät optimiert.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all hover:scale-105"
            >
              Jetzt Projekt starten <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile First</h3>
              <p className="text-slate-400">
                Über 70% Ihrer Kunden kommen über das Smartphone. Wir sorgen dafür, dass Ihre Seite
                auf jedem Display perfekt aussieht.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Blitzschnell</h3>
              <p className="text-slate-400">
                Ladezeiten unter 1 Sekunde. Das freut nicht nur Ihre Besucher, sondern wird auch von
                Google mit besserem Ranking belohnt.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <Palette size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Individuelles Design</h3>
              <p className="text-slate-400">
                Keine Templates von der Stange. Wir gestalten ein Design, das exakt zu Ihrer Marke
                und Ihrer Zielgruppe passt.
              </p>
            </div>
          </div>
        </section>

        {/* Typen von Web-Projekten */}
        <section className="container mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              Welche Art Projekt planen Sie?
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Ob neue Webseite, fokussierte Landingpage, Relaunch oder kompletter Online-Shop –
              wir entwickeln die passende Lösung für Ihr Business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Webseite */}
              <div className="bg-white/5 border border-white/10 p-7 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-3">Neue Webseite</h3>
                <p className="text-slate-400 mb-4">
                  Die zentrale Online-Visitenkarte für Ihr Unternehmen – mit allen wichtigen
                  Informationen, Leistungen und Kontaktmöglichkeiten übersichtlich strukturiert.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300"
                >
                  Angebot für Webseite anfragen <ArrowRight size={16} />
                </a>
              </div>

              {/* Landingpage */}
              <div className="bg-white/5 border border-white/10 p-7 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-3">Landingpage</h3>
                <p className="text-slate-400 mb-4">
                  Eine einzelne Seite mit einem klaren Ziel – perfekt für Kampagnen, Aktionen
                  oder ein spezifisches Angebot, optimiert auf maximale Conversion.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300"
                >
                  Landingpage anfragen <ArrowRight size={16} />
                </a>
              </div>

              {/* Relaunch bestehender Webseite */}
              <div className="bg-white/5 border border-white/10 p-7 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-3">Relaunch bestehender Webseite</h3>
                <p className="text-slate-400 mb-4">
                  Wir überarbeiten Design, Struktur und Technik Ihrer bestehenden Seite und bringen
                  sie optisch und technisch auf den neuesten Stand – ohne Ihre Inhalte zu verlieren.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300"
                >
                  Relaunch besprechen <ArrowRight size={16} />
                </a>
              </div>

              {/* Online-Shop */}
              <div className="bg-white/5 border border-white/10 p-7 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-3">Online-Shop</h3>
                <p className="text-slate-400 mb-4">
                  Verkaufen Sie Ihre Produkte direkt online – mit einem schnell ladenden, modernen
                  Shop, der für Mobilgeräte optimiert und auf Conversion ausgelegt ist.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300"
                >
                  Shop-Projekt starten <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Details List */}
        <section className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Was ist inklusive?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'Responsive Webdesign',
                'SSL-Verschlüsselung',
                'DSGVO-Konformität',
                'Kontaktformulare',
                'Google Maps Integration',
                'Social Media Verknüpfung',
                'Bildoptimierung',
                'Basis SEO-Setup',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-400" strokeWidth={3} />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} LocalWeb Websolutions. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default Websites;
