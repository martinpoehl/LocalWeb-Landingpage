import React from 'react';
import { ArrowRight, Check, Search, MapPin, TrendingUp, Code2, Globe, Sparkles, ArrowLeft } from 'lucide-react';

const SEO: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-blue-500/30">
            {/* Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4">
                <div className="container mx-auto px-5 md:px-6 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-4 group interactive">
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                                <Code2 className="text-white w-5 h-5" />
                                <div className="absolute -top-1.5 -right-1.5 bg-slate-900 rounded-full p-0.5 border border-blue-500/50">
                                    <Globe className="text-blue-400 w-3 h-3 animate-spin-slow" />
                                </div>
                                <Sparkles className="absolute -bottom-1 -left-1 text-cyan-300 w-3 h-3 animate-pulse" />
                            </div>
                            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black font-display tracking-tight text-white leading-none">
                                Local<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Web</span>
                            </span>
                        </div>
                    </a>

                    <a
                        href="/"
                        className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Zurück zur Startseite</span>
                    </a>
                </div>
            </header>

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
