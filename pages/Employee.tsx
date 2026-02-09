import React from 'react';
import { ArrowLeft, Mail, Linkedin, Github } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  email?: string;
  linkedin?: string;
  github?: string;
}

const Employee: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Martin Pöhl',
      role: 'Gründer & Lead Developer',
      bio: 'Mit über 10 Jahren Erfahrung in der Webentwicklung bringe ich lokale Unternehmen ins digitale Zeitalter. Meine Leidenschaft gilt sauberen Code und benutzerfreundlichen Designs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      skills: ['React', 'TypeScript', 'Node.js', 'UI/UX Design'],
      email: 'martin@localweb.ch',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    {
      name: 'Sarah Müller',
      role: 'UI/UX Designerin',
      bio: 'Ich verwandle komplexe Anforderungen in intuitive Benutzeroberflächen. Mit einem Auge für Details und einem Gespür für Trends gestalte ich moderne Webauftritte.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'Brand Design'],
      email: 'sarah@localweb.ch',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Luca Brunner',
      role: 'Frontend Developer',
      bio: 'Als leidenschaftlicher Frontend-Entwickler liebe ich es, Designs zum Leben zu erwecken. Performance und Accessibility stehen bei mir an erster Stelle.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      skills: ['Vue.js', 'React', 'CSS/SASS', 'Animation'],
      email: 'luca@localweb.ch',
      github: 'https://github.com',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Zurück zur Startseite</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="mesh-bg"></div>
        <div className="container mx-auto px-5 md:px-6 relative z-10 text-center">
          <span className="inline-block text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
            Unser Team
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Die Menschen hinter <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400">
              LocalWeb.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Lernen Sie die Experten kennen, die Ihre digitale Vision Wirklichkeit werden lassen.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]"
              >
                {/* Image */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                    {member.role}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white mt-2 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-5 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Bereit, mit uns zu arbeiten?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Starten Sie Ihr Projekt mit einem Team, das Ihre Vision versteht.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_15px_40px_rgba(37,99,235,0.3)]"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5">
        <div className="container mx-auto px-5 md:px-6 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 LocalWeb. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Employee;