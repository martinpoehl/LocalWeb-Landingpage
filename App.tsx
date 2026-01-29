import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Webapplikation from './pages/Webapplication';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const ring = document.getElementById('custom-cursor-ring');
    const progress = document.getElementById('scroll-progress');

    if (!cursor || !ring || !progress) return;

    // Cursor movement
    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      ring.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    };

    // Scroll Progress & Active Section
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progress.style.width = scrolled + '%';

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    // Interaction Observers for Reveal
    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document
      .querySelectorAll('.reveal-text')
      .forEach((el) => observer.observe(el));

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Header activeSection={activeSection} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Portfolio />
                  <Contact />
                </>
              }
            />
            <Route
              path="/webapplikation"
              element={<Webapplikation />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
