import React, { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Services from './components/Services';
import GitHubSection from './components/GitHubSection';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('default');
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast helper
  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Theme Sync
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Spotlight Mouse Tracking Handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Section Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'about', 'education', 'skills', 'projects', 
        'experience', 'certifications', 'achievements', 'profiles', 
        'services', 'github', 'resume', 'contact'
      ];
      
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Dynamic Particle Canvas Background */}
      <CanvasBackground />

      {/* Navigation Header with Controls */}
      <Navbar
        activeSection={activeSection}
        onOpenCmd={() => setIsCmdOpen(true)}
        currentTheme={theme}
        setTheme={setTheme}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero addToast={addToast} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <Services />
        <GitHubSection />
        <ResumeSection />
        <Contact addToast={addToast} />
      </main>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        addToast={addToast}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} removeToast={removeToast} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
