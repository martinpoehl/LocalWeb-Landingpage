import React from 'react';

const Imprint: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-blue-500/30">
            {/* Header / Nav Placeholder (Back to Home) */}
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

            <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">Impressum</h1>

                <div className="space-y-12">
                    {/* Angaben gemäß § 5 TMG */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <p className="leading-relaxed">
                            <strong>LocalWeb Websolutions</strong><br />
                            Musterstraße 123<br />
                            8424 Embrach<br />
                            Schweiz
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                        <p className="leading-relaxed">
                            Telefon: +41 12 345 67 89<br />
                            E-Mail: kontakt@localweb.ch<br />
                            Web: www.localweb.ch
                        </p>
                    </section>

                    {/* Umsatzsteuer-ID */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
                        <p className="leading-relaxed">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            CHE-123.456.789 MWST
                        </p>
                    </section>

                    {/* Redaktionell verantwortlich */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Redaktionell verantwortlich</h2>
                        <p className="leading-relaxed">
                            Martin Pöhl<br />
                            Musterstraße 123<br />
                            8424 Embrach<br />
                            Schweiz
                        </p>
                    </section>

                    {/* EU-Streitschlichtung */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
                        <p className="leading-relaxed">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                                https://ec.europa.eu/consumers/odr/
                            </a>.<br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    {/* Verbraucherstreitbeilegung/Universalschlichtungsstelle */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                        <p className="leading-relaxed">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    {/* Haftung für Inhalte */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Haftung für Inhalte</h2>
                        <p className="leading-relaxed mb-4">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p className="leading-relaxed">
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>
                    </section>

                    {/* Haftung für Links */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Haftung für Links</h2>
                        <p className="leading-relaxed">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </section>

                    {/* Urheberrecht */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Urheberrecht</h2>
                        <p className="leading-relaxed">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="border-t border-white/10 bg-slate-950 py-12">
                <div className="container mx-auto px-6 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} LocalWeb Websolutions. Alle Rechte vorbehalten.</p>
                </div>
            </footer>
        </div>
    );
};

export default Imprint;
