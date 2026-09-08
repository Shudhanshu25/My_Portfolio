import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, ArrowUpRight, Github, Linkedin, Code2, Sparkles, MapPin, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO, VERTICAL_TAGS, KEY_METRICS } from '../data/portfolioData';
import { getResumeDataUri } from '../utils/resumeGenerator';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const resumeUri = getResumeDataUri();

  return (
    <section className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden border-b border-[#DED3C4]">
      {/* Decorative vertical sidebar tags on the left edge */}
      <div
        className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-20 flex-col gap-10 items-center select-none pointer-events-none"
        aria-hidden="true"
      >
        {VERTICAL_TAGS.map((tag, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C1552E]" />
            <span className="text-[10px] tracking-[0.25em] font-mono text-[#8A847C] uppercase writing-mode-vertical rotate-180">
              {tag}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Giant editorial headline filling the width of the hero */}
        <div className="w-full text-center border-b border-[#DED3C4] pb-6 sm:pb-8 mb-8 sm:mb-12">
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#5C5751] mb-2 px-1">
            <span>VOL. 01 — SELECTED WORKS</span>
            <span className="hidden sm:inline">FULL-STACK & SYSTEMS ENGINEERING</span>
            <span>EDITION 2026</span>
          </div>
          
          <h1 className="font-serif font-black tracking-tighter uppercase text-[#161616] text-[15vw] sm:text-[13vw] lg:text-[11.5vw] leading-[0.88] select-none scale-y-105">
            PORTFOLIO
          </h1>

          <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#5C5751] mt-2 px-1">
            <span>SHUDHANSHU TRIPATHI</span>
            <span>LOHEGAON, PUNE</span>
            <span>COMP. ENG. (2023–27)</span>
          </div>
        </div>

        {/* Hero Main Content Grid: Left bio & metrics, Right large terracotta circle + photo + stamp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Introduction, signature flourish, metrics, actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DE] border border-[#DED3C4] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#C1552E]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#161616] font-semibold">
                Undergrad Engineer & Full-Stack Developer
              </span>
            </div>

            {/* Intro text */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161616] leading-[1.15] tracking-tight">
                Engineering fast, resilient web systems from <span className="text-[#C1552E] italic underline decoration-[#C1552E]/30 decoration-2 underline-offset-8">Pune, India</span>.
              </h2>

              <p className="text-base sm:text-lg text-[#5C5751] font-sans leading-relaxed max-w-2xl">
                I am <strong className="text-[#161616] font-semibold">Shudhanshu Tripathi</strong>, a Computer Engineering undergraduate (2023–2027) at Ajeenkya DY Patil SOE with an audited <span className="font-semibold text-[#161616]">9.485 CGPA</span>. Specialized in crafting high-concurrency <span className="text-[#161616] font-medium">React.js</span> client architectures, microsecond-latency <span className="text-[#161616] font-medium">FastAPI / Python</span> backends, and performance-tuned real-time systems.
              </p>

              {/* Handwritten Script Signature Flourish */}
              <div className="pt-1 pb-2 flex items-center gap-4">
                <span className="font-signature text-3xl sm:text-4xl text-[#C1552E] -rotate-2 select-none tracking-wide">
                  Shudhanshu Tripathi
                </span>
                <span className="h-px w-20 bg-[#DED3C4]" />
                <span className="text-xs font-mono text-[#8A847C] tracking-widest uppercase">
                  Signature of authenticity
                </span>
              </div>
            </div>

            {/* Quantifiable Key Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-2">
              {KEY_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#EFE9DE]/80 border border-[#DED3C4] rounded-xl p-3.5 flex flex-col justify-between hover:border-[#C1552E]/50 transition-colors"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C1552E] tracking-normal [font-variant-numeric:lining-nums]">
                    {metric.value}
                  </span>
                  <div className="mt-1">
                    <p className="text-xs font-semibold text-[#161616] tracking-tight">{metric.label}</p>
                    <p className="text-[10px] font-mono text-[#5C5751] leading-tight mt-0.5">{metric.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Download Resume button with exact hardcoded filename */}
              <a
                download="Shudhanshu-Resume.pdf"
                href={resumeUri}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#161616] text-[#F5F1EA] text-sm font-semibold tracking-wider uppercase hover:bg-[#C1552E] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#C1552E] focus:ring-offset-2"
                aria-label="Download Shudhanshu-Resume.pdf"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EFE9DE] border border-[#DED3C4] text-[#161616] text-sm font-semibold tracking-wider uppercase hover:bg-[#DED3C4] transition-colors duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#C1552E]" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="text-xs font-mono uppercase tracking-widest text-[#5C5751] hover:text-[#C1552E] underline underline-offset-4 py-2 px-1 transition-colors"
              >
                Inspect ATS CV
              </button>
            </div>

            {/* Prominent Profile Social Links */}
            <div className="flex items-center gap-5 pt-2 text-[#161616] border-t border-[#DED3C4]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5C5751]">
                Connect:
              </span>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-[#C1552E] transition-colors"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#C1552E]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#8A847C]" />
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-[#C1552E] transition-colors"
                aria-label="Visit GitHub Profile"
              >
                <Github className="w-4 h-4 text-[#C1552E]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#8A847C]" />
              </a>

              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-[#C1552E] transition-colors"
                aria-label="Visit LeetCode Profile"
              >
                <Code2 className="w-4 h-4 text-[#C1552E]" />
                <span>LeetCode</span>
                <ArrowUpRight className="w-3 h-3 text-[#8A847C]" />
              </a>
            </div>

          </div>

          {/* Right Column (5 cols): Profile photo inside large solid terracotta circle bleeding off edge with rotating stamp badge */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center py-6">
            
            {/* The Large Terracotta Solid Circle bleeding aesthetic */}
            <div className="relative w-[300px] sm:w-[380px] lg:w-[440px] aspect-square">
              
              {/* Solid Terracotta Circle Backdrop */}
              <div className="absolute inset-0 rounded-full bg-[#C1552E] shadow-2xl transition-transform duration-500 hover:scale-[1.02]" />

              {/* Editorial Secondary Ring with dashed border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-[#C1552E]/40 pointer-events-none" />

              {/* Profile Image Container with animations (Clean and separated from text) */}
              <motion.div 
                id="hero-profile-container"
                className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden border-4 border-[#F5F1EA] shadow-2xl bg-[#161616] flex items-center justify-center p-0 select-none group cursor-default"
                animate={{
                  y: [0, -6, 0],
                  boxShadow: [
                    "0 12px 28px -8px rgba(193, 85, 46, 0.22), inset 0 2px 6px rgba(0,0,0,0.08)",
                    "0 22px 38px -8px rgba(193, 85, 46, 0.38), inset 0 2px 6px rgba(0,0,0,0.08)",
                    "0 12px 28px -8px rgba(193, 85, 46, 0.22), inset 0 2px 6px rgba(0,0,0,0.08)",
                  ]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <img
                  id="hero-profile-image"
                  src="/profile.png"
                  alt="Shudhanshu Tripathi — Full-Stack Developer & Computer Engineering Undergrad"
                  className="w-full h-full object-cover object-[center_28%] filter contrast-[1.02] brightness-[1.02] group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle soft vignette overlay to blend edges with circular bezel */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(0,0,0,0.35)] pointer-events-none" />

                {/* Subtle light sweep reflection animation across photo */}
                <motion.div
                  className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -skew-x-12"
                  animate={{
                    left: ['-80%', '160%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Circular rotating "badge/stamp" graphic - placed top-left on mobile/tablet to avoid overlapping text, bottom-left on desktop */}
              <div
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:top-auto lg:-bottom-4 lg:-left-6 z-20 w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-[#161616] text-[#F5F1EA] shadow-xl flex items-center justify-center p-1 border-2 border-[#F5F1EA] hover:scale-105 transition-transform"
                title="Status: Open for New Projects"
              >
                {/* Rotating SVG with curved text */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full animate-spin-slow"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="stampCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[9.5px] font-mono uppercase tracking-[2.2px] fill-[#F5F1EA]">
                    <textPath href="#stampCirclePath" xlinkHref="#stampCirclePath" startOffset="0%">
                      • OPEN FOR NEW PROJECTS • FULL-STACK DEV • 2026
                    </textPath>
                  </text>
                </svg>

                {/* Center Star / Emblem inside rotating stamp */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#C1552E] flex items-center justify-center shadow-inner">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5F1EA]" />
                  </div>
                </div>
              </div>

              {/* Floating Academic Tag on top right */}
              <div className="absolute -top-2 -right-2 sm:-right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#F5F1EA] border border-[#DED3C4] shadow-md flex items-center gap-1.5 text-xs font-mono font-bold text-[#161616]">
                <Award className="w-4 h-4 text-[#C1552E]" />
                <span>9.485 CGPA</span>
              </div>

            </div>

            {/* Separated Profile Text / Identity Caption in new <p> elements */}
            <div className="mt-5 sm:mt-6 text-center select-none">
              <p className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#161616] leading-tight">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#C1552E] uppercase tracking-wider font-semibold mt-1">
                Full-Stack Dev • 2023–2027
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
