/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('Websites');

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToSection('contact');
  };

  const handleInquireFromProject = (projectTitle: string) => {
    setPrefilledService(`Project similar to ${projectTitle}`);
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-[#09090c] text-[#ededf0] selection:bg-[#D2FF3A] selection:text-black font-sans">
      {/* Background Grid & Atmospheric Lighting */}
      <InteractiveBackground />

      {/* Floating 5-Zone Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onStartProject={() => scrollToSection('contact')}
        />

        {/* Work Section */}
        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* About Section */}
        <AboutSection onStartProject={() => scrollToSection('contact')} />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Contact Section */}
        <ContactSection selectedServicePreFill={prefilledService} />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer
        onScrollToTop={() => scrollToSection('home')}
        onNavigate={scrollToSection}
      />

      {/* Interactive Project Case Study Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromProject}
      />
    </div>
  );
}
