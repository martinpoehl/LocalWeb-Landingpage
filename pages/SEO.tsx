import React from 'react';
import { ArrowRight, Check, Search, MapPin, TrendingUp } from 'lucide-react';

const SEO: React.FC = () => {
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
                        <span className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4 block">Lokale Sichtbarkeit</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                            Gefunden werden, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">wo Kunden suchen.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
                            97% der Menschen suchen online nach lokalen Dienstleistern. Wir sorgen dafür, dass Sie bei Google ganz oben stehen – genau dann, wenn man Sie braucht.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-all hover:scale-105">
                            Sichtbarkeit checken <ArrowRight size={20} />
                        </a>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6">
                                <Search size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Google Ranking</h3>
                            <p className="text-slate-400">Durch gezielte Keywords und technische Optimierung klettert Ihre Webseite auf die oberen Plätze.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Google Maps</h3>
                            <p className="text-slate-400">Ein optimiertes Unternehmensprofil sorgt dafür, dass Sie lokal in der "Map Pack" Box angezeigt werden.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Mehr Anfragen</h3>
                            <p className="text-slate-400">Sichtbarkeit ist kein Selbstzweck. Unser Ziel sind mehr Anrufe, mehr Mails und mehr Kunden im Laden.</p>
                        </div>
                    </div>
                </section>

                {/* Checklist */}
                <section className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-green-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h2 className="text-3xl font-bold text-white mb-8 relative z-10">Unser SEO-Paket</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                            {[
                                'Keyword-Analyse',
                                'Google MyBusiness Optimierung',
                                'Technische SEO (Speed & Struktur)',
                                'Content-Optimierung',
                                'Aufbau von Backlinks',
                                'Regelmäßiges Reporting',
                                'Konkurrenz-Analyse',
                                'Lokalzitate & Branchenbücher'
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

export default SEO;
