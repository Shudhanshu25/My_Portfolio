import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getResumeDataUri } from '../utils/resumeGenerator';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeUri = getResumeDataUri();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F1EA]/95 backdrop-blur-md py-3 border-b border-[#DED3C4] shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Monogram and identity */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-hidden focus:ring-2 focus:ring-[#C1552E]"
          aria-label="Shudhanshu Tripathi - Return to top"
        >
          <div className="w-10 h-10 rounded-full bg-[#C1552E] text-[#F5F1EA] flex items-center justify-center font-serif font-bold text-lg tracking-wider transition-transform duration-300 group-hover:scale-105">
            ST
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#161616] group-hover:text-[#C1552E] transition-colors leading-tight">
              SHUDHANSHU TRIPATHI
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[#5C5751] uppercase">
              Full-Stack Developer • Pune
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-wider uppercase text-[#161616]" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-1 hover:text-[#C1552E] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C1552E] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Quick actions and status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFE9DE] border border-[#DED3C4] text-[11px] font-mono font-medium text-[#161616]">
            <span className="w-2 h-2 rounded-full bg-[#C1552E] animate-pulse" />
            <span>AVAILABLE FOR ROLES</span>
          </div>

          {/* Download Resume Link with exact hardcoded filename */}
          <a
            download="Shudhanshu-Resume.pdf"
            href={resumeUri}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] text-[#F5F1EA] text-xs font-semibold tracking-wider uppercase hover:bg-[#C1552E] transition-colors duration-200 shadow-xs focus:ring-2 focus:ring-[#C1552E]"
            aria-label="Download Shudhanshu's Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            onClick={onOpenResumeModal}
            className="text-xs font-semibold tracking-wider uppercase underline underline-offset-4 text-[#5C5751] hover:text-[#C1552E] transition-colors"
            title="Preview resume in browser"
          >
            Preview
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            download="Shudhanshu-Resume.pdf"
            href={resumeUri}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161616] text-[#F5F1EA] text-[11px] font-semibold tracking-wider uppercase"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#161616] hover:bg-[#EFE9DE] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#C1552E]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F1EA] border-b border-[#DED3C4] px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#DED3C4] text-xs font-mono text-[#5C5751]">
              <span className="w-2 h-2 rounded-full bg-[#C1552E] animate-pulse" />
              <span>Full-Stack Dev • 9.485 CGPA • Pune</span>
            </div>

            <nav className="flex flex-col gap-3 text-base font-serif uppercase tracking-wider text-[#161616]">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#C1552E] transition-colors flex items-center justify-between border-b border-[#EFE9DE]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C1552E]" />
                </a>
              ))}
            </nav>

            <div className="pt-3 flex flex-col gap-3">
              <a
                download="Shudhanshu-Resume.pdf"
                href={resumeUri}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#C1552E] text-[#F5F1EA] text-xs font-bold uppercase tracking-widest shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full text-center py-2 text-xs font-semibold text-[#5C5751] hover:text-[#161616]"
              >
                View ATS Web Resume Preview
              </button>

              <div className="flex items-center justify-center gap-6 pt-2 text-[#161616]">
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="hover:text-[#C1552E] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="hover:text-[#C1552E] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="hover:text-[#C1552E] transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
