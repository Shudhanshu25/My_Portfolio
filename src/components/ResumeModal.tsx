import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { getResumeDataUri } from '../utils/resumeGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumeUri = getResumeDataUri();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] text-[#161616] rounded-2xl shadow-2xl border border-[#DED3C4] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#F5F1EA] border-b border-[#DED3C4]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C1552E]" />
            <span className="font-serif font-bold text-sm sm:text-base text-[#161616]">
              Shudhanshu_Tripathi_Resume.pdf
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-[#EFE9DE] text-[#5C5751]">
              ATS Verified
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DED3C4] text-xs font-mono font-medium hover:bg-[#EFE9DE] transition-colors"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#5C5751]" />
              <span>Print</span>
            </button>

            {/* Exact hardcoded download filename requirement */}
            <a
              download="Shudhanshu-Resume.pdf"
              href={resumeUri}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#C1552E] text-[#F5F1EA] text-xs font-mono font-bold hover:bg-[#A54421] transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#EFE9DE] text-[#5C5751] hover:text-[#161616] transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto font-sans space-y-8 print:p-0 print:max-h-none print:overflow-visible">
          
          {/* Header block */}
          <div className="border-b-2 border-[#161616] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#161616] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <span className="font-mono text-xs text-[#C1552E] font-bold">
                9.485 CGPA • Computer Engineering
              </span>
            </div>

            <p className="text-sm font-semibold text-[#5C5751]">
              Full-Stack Developer & Computer Engineering Undergraduate (2023–2027)
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#5C5751] pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C1552E]" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#161616] hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#C1552E]" />
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-[#161616] hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#C1552E]" />
                {PERSONAL_INFO.phoneFormatted}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-[#C1552E]">
              <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn Profile &rarr;
              </a>
              <a href={PERSONAL_INFO.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub Repositories &rarr;
              </a>
              <a href={PERSONAL_INFO.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LeetCode Profile &rarr;
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#C1552E] border-b border-[#DED3C4] pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#161616] leading-relaxed">
              Technically rigorous Full-Stack Developer and Computer Engineering student with a verified 9.485 CGPA. Hands-on experience developing single-page web applications with React.js, high-throughput asynchronous services using Python & FastAPI, and real-time state synchronization. Proven engineering capability demonstrated through an audited 30% FPS performance optimization during a Game Developer Internship at GameLoom Interactives.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#C1552E] border-b border-[#DED3C4] pb-1">
              Education
            </h2>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="text-xs sm:text-sm space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-[#161616]">
                  <span>{edu.institution}</span>
                  <span className="text-xs font-mono text-[#5C5751]">{edu.period}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#5C5751]">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-[#C1552E] font-bold">CGPA: {edu.cgpa}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-[#5C5751] space-y-0.5 pt-1">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#C1552E] border-b border-[#DED3C4] pb-1">
              Experience
            </h2>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-[#161616]">
                  <span className="text-sm sm:text-base">{exp.role} — {exp.company}</span>
                  <span className="text-xs font-mono text-[#5C5751] font-normal">{exp.period} | {exp.location}</span>
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-xs text-[#5C5751] leading-relaxed">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5">
            <h2 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#C1552E] border-b border-[#DED3C4] pb-1">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-[#EFE9DE] border border-[#DED3C4]">
                <strong className="block font-serif text-[#161616] mb-1">Frontend</strong>
                <p className="text-[#5C5751] leading-normal font-mono text-[11px]">
                  React.js, React Native, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Recharts
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#EFE9DE] border border-[#DED3C4]">
                <strong className="block font-serif text-[#161616] mb-1">Backend & DB</strong>
                <p className="text-[#5C5751] leading-normal font-mono text-[11px]">
                  Python, FastAPI, REST API Design, JWT Auth, WebSockets, MySQL, SQLModel/ORM, Firestore
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#EFE9DE] border border-[#DED3C4]">
                <strong className="block font-serif text-[#161616] mb-1">Game Systems & Tools</strong>
                <p className="text-[#5C5751] leading-normal font-mono text-[11px]">
                  Unreal Engine (Blueprints), UMSP, Companion AI, Vehicle Physics, Git, Docker, DSA
                </p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#C1552E] border-b border-[#DED3C4] pb-1">
              Key Projects
            </h2>
            {PROJECTS_DATA.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs sm:text-sm">
                <div className="flex items-baseline justify-between font-bold text-[#161616]">
                  <span className="flex items-center gap-2">
                    <span>{proj.number}. {proj.title}</span>
                    {proj.liveUrl && proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[10px] font-mono text-[#C1552E] hover:underline"
                        title="Open live deployment"
                      >
                        [{proj.liveUrlText || 'Live App'} ↗]
                      </a>
                    )}
                  </span>
                  <span className="text-[11px] font-mono text-[#C1552E] font-normal">{proj.category}</span>
                </div>
                <p className="text-xs text-[#5C5751]">{proj.description}</p>
                <p className="text-[11px] font-mono text-[#8A847C]">
                  Tech: {proj.tags.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Key Achievements */}
          <div className="space-y-3">
            <h2 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#C1552E] border-b border-[#DED3C4] pb-1">
              Key Achievements & Honors
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5C5751]">
              <li className="flex items-start gap-2">
                <span className="text-[#C1552E] font-bold">▪</span>
                <span><strong>LeetCode:</strong> 90+ problems solved (Easy to Medium) with a consistent daily problem-solving streak.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C1552E] font-bold">▪</span>
                <span><strong>Competitive Selection:</strong> Completed 5-month internship as the sole B.E. student selected from college batch.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C1552E] font-bold">▪</span>
                <span><strong>Production Systems:</strong> Built and deployed 2 full-stack applications with live URLs during final year.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer sticky bar */}
        <div className="px-6 py-4 bg-[#F5F1EA] border-t border-[#DED3C4] flex items-center justify-between">
          <span className="text-xs font-mono text-[#5C5751]">
            File: Shudhanshu-Resume.pdf
          </span>
          <a
            download="Shudhanshu-Resume.pdf"
            href={resumeUri}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#161616] text-[#F5F1EA] text-xs font-bold uppercase tracking-wider hover:bg-[#C1552E] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Copy</span>
          </a>
        </div>
      </div>
    </div>
  );
};
