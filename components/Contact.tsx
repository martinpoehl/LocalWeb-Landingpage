
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('submitting');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',    // Ersetzen Sie dies mit Ihrer Service ID von EmailJS
      'YOUR_TEMPLATE_ID',   // Ersetzen Sie dies mit Ihrer Template ID von EmailJS
      form.current,
      'YOUR_PUBLIC_KEY'     // Ersetzen Sie dies mit Ihrem Public Key von EmailJS
    ).then(
      () => {
        setStatus('success');
        form.current?.reset();
        setTimeout(() => setStatus('idle'), 3000);
      },
      (error) => {
        console.error('FAILED...', error);
        setStatus('error');
        // Optional: Dem Benutzer eine Fehlermeldung anzeigen
        setTimeout(() => setStatus('idle'), 3000);
      }
    );
  };

  const contactInfo = [
    { icon: Mail, label: 'E-Mail', value: 'info@localweb.ch' },
    { icon: Phone, label: 'Telefon', value: '+41 793 643 417' },
    { icon: MapPin, label: 'Standort', value: 'Winterthur, ZH' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-[80px] md:blur-[100px]"></div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 reveal-text">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Lassen Sie uns reden.</h2>
          <p className="text-slate-400 text-base md:text-lg">Bereit für eine Website, die wirklich verkauft? Wir sind Ihr Team für professionelle Web-Lösungen in der Region.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Column */}
          <div className="space-y-6 md:space-y-8 reveal-text order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center lg:items-start gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                  <div className="bg-slate-800 p-3 md:p-4 rounded-xl text-blue-500 shadow-inner">
                    <info.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest">{info.label}</h4>
                    <p className="text-white text-lg md:text-xl font-bold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 reveal-text order-1 lg:order-2">
            <form ref={form} onSubmit={handleSubmit} className="bg-slate-800/50 p-6 sm:p-8 md:p-8 rounded-[2rem] md:rounded-[2rem] border border-slate-700/50 backdrop-blur-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2 ml-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Ihr Name"
                    className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2 ml-1">E-Mail</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="ihre@email.de"
                    className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="mb-4 md:mb-6">
                <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2 ml-1">Betreff</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Wie können wir helfen?"
                  className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="mb-6 md:mb-8">
                <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2 ml-1">Nachricht</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Ihr Anliegen..."
                  className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full group inline-flex items-center justify-center px-8 py-5 font-black text-white transition-all duration-300 rounded-xl shadow-lg interactive ${
                  status === 'success' ? 'bg-green-600' : 
                  status === 'error' ? 'bg-red-600' : 
                  'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {status === 'idle' && (
                  <>Anfrage senden <Send size={18} className="ml-2" /></>
                )}
                {status === 'submitting' && 'Wird gesendet...'}
                {status === 'success' && 'Gesendet!'}
                {status === 'error' && 'Fehler! Bitte erneut versuchen.'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
