import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { FooterContact } from './components/FooterContact';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#161616] font-sans relative selection:bg-[#C1552E] selection:text-[#F5F1EA]">
      {/* Editorial Gridlines overlay in subtle opacity for texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#DED3C4 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

          {/* Projects Section (Numbered 01–04) */}
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

          {/* Skills Section (3-Column Layout: Progress Bars, Pull-Quote, 4 Pillars) */}
          <SkillsSection />

          {/* Experience & Education Section */}
          <ExperienceSection />

          {/* Key Achievements & Recognition Row */}
          <AchievementsSection />
        </main>

        {/* Footer & Contact Section */}
        <FooterContact onOpenResumeModal={() => setResumeModalOpen(true)} />
      </div>

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#161616] text-[#F5F1EA] hover:bg-[#C1552E] shadow-lg transition-all duration-300 hover:scale-110 focus:outline-hidden focus:ring-2 focus:ring-[#C1552E]"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
