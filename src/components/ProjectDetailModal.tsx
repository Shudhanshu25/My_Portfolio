import React from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Cpu, Database, Layout } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#FAF7F2] text-[#161616] rounded-2xl shadow-2xl border border-[#DED3C4] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F5F1EA] border-b border-[#DED3C4]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-[#C1552E] text-[#F5F1EA]">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono uppercase text-[#5C5751]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#EFE9DE] text-[#5C5751] hover:text-[#161616] transition-colors"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Banner Image & Overlay Title */}
          <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-[#161616] border border-[#DED3C4]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/90 via-[#161616]/30 to-transparent flex items-end p-6">
              <div className="text-[#F5F1EA] space-y-1">
                <span className="text-xs font-mono text-[#DC6B43] tracking-widest uppercase font-bold">
                  {project.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-[#EFE9DE] border border-[#DED3C4] flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#C1552E] shrink-0" />
              <div className="text-xs font-mono">
                <span className="text-[#8A847C] uppercase block text-[10px]">Verified Technical Metric</span>
                <span className="font-bold text-[#161616]">{project.metrics}</span>
              </div>
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-base text-[#161616]">
              Architecture Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#5C5751] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#161616]">
              Core Engineering Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C5751] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#C1552E] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && project.architectureNotes.length > 0 && (
            <div className="space-y-2.5 p-4 rounded-xl bg-[#F5F1EA] border border-[#DED3C4]">
              <h5 className="text-xs font-mono uppercase tracking-widest text-[#161616] font-bold">
                System Implementation Notes
              </h5>
              <ul className="space-y-1.5 text-xs text-[#5C5751]">
                {project.architectureNotes.map((note, nIdx) => (
                  <li key={nIdx} className="flex items-start gap-2 font-mono">
                    <span className="text-[#C1552E] font-bold">&bull;</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#5C5751] font-bold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#EFE9DE] border border-[#DED3C4] text-xs font-mono text-[#161616]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F5F1EA] border-t border-[#DED3C4]">
          <span className="text-xs font-mono text-[#5C5751]">
            Engineering Case Study
          </span>

          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C1552E] text-[#F5F1EA] text-xs font-mono font-bold hover:bg-[#A54421] transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{project.liveUrlText || 'Launch Live App'}</span>
              </a>
            )}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#161616] text-[#F5F1EA] text-xs font-mono font-bold hover:bg-[#C1552E] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-[#EFE9DE] hover:bg-[#DED3C4] text-xs font-mono text-[#161616] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
