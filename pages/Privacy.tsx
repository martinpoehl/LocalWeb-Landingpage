import React from 'react';

const Privacy: React.FC = () => {
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
                <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">Datenschutzerklärung</h1>

                <div className="space-y-12">
                    {/* 1. Datenschutz auf einen Blick */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-xl font-semibold text-white mb-2">Allgemeine Hinweise</h3>
                        <p className="leading-relaxed mb-4">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                        </p>
                        <h3 className="text-xl font-semibold text-white mb-2">Datenerfassung auf dieser Website</h3>
                        <p className="leading-relaxed mb-4">
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                        <p className="leading-relaxed mb-4">
                            <strong>Wie erfassen wir Ihre Daten?</strong><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                        </p>
                        <p className="leading-relaxed">
                            <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>
                    </section>

                    {/* 2. Hosting */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
                        <p className="leading-relaxed">
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                            [Muster-Hoster GmbH]<br />
                            Musterweg 5<br />
                            90210 Musterstadt
                        </p>
                    </section>

                    {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="text-xl font-semibold text-white mb-2">Datenschutz</h3>
                        <p className="leading-relaxed mb-4">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p className="leading-relaxed mb-4">
                            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                        </p>
                        <p className="leading-relaxed mb-4">
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="leading-relaxed mb-4">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                            LocalWeb Websolutions<br />
                            Musterstraße 123<br />
                            8424 Embrach<br />
                            Schweiz<br />
                            <br />
                            E-Mail: kontakt@localweb.ch
                        </p>
                        <p className="leading-relaxed mb-4">
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                        </p>
                    </section>

                    {/* 4. Datenerfassung auf dieser Website */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                        <h3 className="text-xl font-semibold text-white mb-2">Cookies</h3>
                        <p className="leading-relaxed mb-4">
                            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">Kontaktformular</h3>
                        <p className="leading-relaxed mb-4">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </section>

                    {/* 5. Plugins und Tools */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Plugins und Tools</h2>
                        <h3 className="text-xl font-semibold text-white mb-2">Google Fonts</h3>
                        <p className="leading-relaxed">
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
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

export default Privacy;
