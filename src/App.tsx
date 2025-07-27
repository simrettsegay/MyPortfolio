import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-navy text-white font-inter overflow-x-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-neon rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-60 right-10 w-80 h-80 bg-neon rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-neon rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;