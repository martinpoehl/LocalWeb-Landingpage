import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Price from "./components/Pricing";
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Employee from './pages/Employee';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Websites from './pages/Websites';
import WebTools from './pages/WebTools';
import SEO from './pages/SEO';

// Home page component
const HomePage: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Price />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

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
        <Routes>
          <Route path="/" element={<HomePage activeSection={activeSection} />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/web-tools" element={<WebTools />} />
          <Route path="/seo" element={<SEO />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

