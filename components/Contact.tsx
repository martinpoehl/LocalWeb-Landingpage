import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] =
    useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('submitting');

    emailjs
      .sendForm(
        'service_ibcjet8',   // Deine EmailJS Service ID
        'template_61vol3t',  // Deine EmailJS Template ID
        form.current,
        '0u9qbxfzJjz9zAihB'  // Dein EmailJS Public Key
      )
      .then(
        () => {
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 3000);
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
        }
      );
  };

  const contactInfo = [
    { icon: Mail, label: 'E-Mail', value: 'info@localweb.ch' },
    { icon: Phone, label: 'Telefon', value: '+41 79 364 34 17' },
    { icon: MapPin, label: 'Standort', value: 'Winterthur, ZH' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-[80px] md:blur-[100px]" />

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 reveal-text">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block hover:text-cyan-400 transition-colors duration-300 cursor-default">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Lassen Sie uns Ihr{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projekt besprechen.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
            Haben Sie eine Frage oder eine konkrete Idee? Schreiben Sie uns einfach. Wir melden uns innerhalb von 24 Stunden bei Ihnen für ein unverbindliches Gespräch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Column */}
          <div className="space-y-6 md:space-y-8 reveal-text order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center lg:items-start gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800/50 active:bg-slate-800/70 group/info"
                >
                  <div className="bg-slate-800 p-3 md:p-4 rounded-xl text-blue-500 shadow-inner group-hover/info:text-cyan-400 transition-colors">
                    <info.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest">
                      {info.label}
                    </h4>
                    {info.label === 'E-Mail' && (
                      <a href={`mailto:${info.value}`} className="text-white text-lg md:text-xl font-bold group-hover/info:text-blue-400 transition-colors">
                        {info.value}
                      </a>
                    )}
                    {info.label === 'Telefon' && (
                      <a href={`tel:${info.value.replace(/\s/g, '')}`} className="text-white text-lg md:text-xl font-bold group-hover/info:text-blue-400 transition-colors">
                        {info.value}
                      </a>
                    )}
                    {info.label === 'Standort' && (
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.value)}`} target="_blank" rel="noopener noreferrer" className="text-white text-lg md:text-xl font-bold group-hover/info:text-blue-400 transition-colors">
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 reveal-text order-1 lg:order-2">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-slate-800/50 p-5 sm:p-8 rounded-2xl md:rounded-[2rem] border border-slate-700/50 backdrop-blur-md"
            >
              {/* Vorname + Nachname */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-3 sm:mb-6">
                <div>
                  <label className="block text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1.5 ml-1">
                    Vorname
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Max"
                    className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:bg-slate-800/90 focus:outline-none transition-all duration-300 placeholder:text-slate-600 text-sm sm:text-base hover:bg-slate-800/40 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1.5 ml-1">
                    Nachname
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Mustermann"
                    className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:bg-slate-800/90 focus:outline-none transition-all duration-300 placeholder:text-slate-600 text-sm sm:text-base hover:bg-slate-800/40 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  />
                </div>
              </div>

              {/* E-Mail + Firma */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-3 sm:mb-6">
                <div>
                  <label className="block text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1.5 ml-1">
                    E-Mail Adresse
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="beispiel@firma.ch"
                    className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:bg-slate-800/90 focus:outline-none transition-all duration-300 placeholder:text-slate-600 text-sm sm:text-base hover:bg-slate-800/40 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1.5 ml-1">
                    Unternehmen (optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Name Ihrer Firma"
                    className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:bg-slate-800/90 focus:outline-none transition-all duration-300 placeholder:text-slate-600 text-sm sm:text-base hover:bg-slate-800/40 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  />
                </div>
              </div>

              {/* Projektart (Mobile visible, simplified) */}
              <div className="mb-3 sm:mb-6">
                <label className="block text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1.5 ml-1">
                  Was planen Sie?
                </label>
                <select
                  name="project_type"
                  className="w-full bg-slate-900/50 border border-slate-700 text-slate-400 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:bg-slate-800/90 focus:outline-none transition-all duration-300 text-sm sm:text-base hover:bg-slate-800/40 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  defaultValue=""
                >
                  <option value="" disabled>Bitte wählen Sie eine Kategorie</option>
                  <option value="page">Neue Website</option>
                  <option value="shop">E-Commerce / Shop</option>
                  <option value="app">Individuelle Webapplikation</option>
                  <option value="seo">SEO & Sichtbarkeit</option>
                </select>
              </div>

              {/* Nachricht */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1.5 ml-1">
                  Ihre Nachricht
                </label>
                <textarea
                  rows={3}
                  name="message"
                  required
                  placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."
                  className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:bg-slate-800/90 focus:outline-none transition-all duration-300 placeholder:text-slate-600 text-sm sm:text-base resize-none hover:bg-slate-800/40 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`glow-border relative w-full group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-5 text-sm sm:text-base font-black text-white transition-all duration-300 rounded-xl shadow-lg interactive hover:scale-105 ${
                  status === 'success'
                    ? 'bg-green-600'
                    : status === 'error'
                    ? 'bg-red-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {status === 'idle' && (
                  <>
                    Anfrage senden <Send size={18} className="ml-2" />
                  </>
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
