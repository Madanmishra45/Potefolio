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

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
      {/* Dynamic Ambient Particle Background */}
      <CanvasBackground />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero />
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
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
