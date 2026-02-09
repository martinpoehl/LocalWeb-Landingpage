import React from 'react';
import { ArrowRight, Check, Calendar, Laptop, Settings } from 'lucide-react';

const WebTools: React.FC = () => {
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
                        <span className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-4 block">Smart Web-Tools</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                            Mehr Zeit für Ihr <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kerngeschäft.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
                            Automatisieren Sie wiederkehrende Prozesse. Von der Online-Terminbuchung bis zur digitalen Speisekarte – wir digitalisieren Ihren Alltag.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-500 transition-all hover:scale-105">
                            Lösung anfragen <ArrowRight size={20} />
                        </a>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                                <Calendar size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Terminbuchung</h3>
                            <p className="text-slate-400">Lassen Sie Kunden Termine direkt online buchen. Synchronisiert mit Ihrem Kalender, ohne Telefon-Ping-Pong.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-6">
                                <Laptop size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Kundenportale</h3>
                            <p className="text-slate-400">Bereiche für Ihre Stammkunden zum Austausch von Dokumenten, Rechnungen oder Projekt-Status.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                                <Settings size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Automatisierung</h3>
                            <p className="text-slate-400">Verbinden Sie Ihre Webseite mit Ihrem CRM, Newsletter-Tool oder Buchhaltungssystem.</p>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-[3rem] p-8 md:p-12 border border-purple-500/20">
                        <h2 className="text-3xl font-bold text-white mb-8">Beliebte Anwendungsfälle</h2>
                        <div className="space-y-4">
                            {[
                                'Restaurant: Digitale Speisekarte & Tischreservierung',
                                'Friseur/Arzt: Online-Terminkalender',
                                'Handwerker: Anfrageformular mit Foto-Upload',
                                'Coach: Mitgliederbereich für Kurs-Inhalte',
                                'Verein: Mitgliederverwaltung & Event-Anmeldung'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <Check size={16} className="text-purple-400" strokeWidth={3} />
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

export default WebTools;
