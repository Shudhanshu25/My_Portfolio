import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-[#DED3C4] bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-[#DED3C4]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C1552E] font-semibold">
              SECTION 01 / SIGNATURE ARCHITECTURES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161616] mt-2 tracking-tight">
              Selected Projects
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-3">
            <span className="text-xs font-mono text-[#5C5751]">
              NUMBERED 01–02
            </span>
            <span className="h-3 w-px bg-[#DED3C4]" />
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#161616] hover:text-[#C1552E] transition-colors"
            >
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C1552E]" />
            </a>
          </div>
        </div>

        {/* Numbered Grid (01–04 style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer flex flex-col justify-between bg-[#EFE9DE]/70 hover:bg-[#EFE9DE] border border-[#DED3C4] hover:border-[#C1552E]/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md"
              onClick={() => onSelectProject(project)}
            >
              {/* Project Card Top Thumbnail with bold overlay title */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#161616]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 filter contrast-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Dark Editorial Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/90 via-[#161616]/30 to-transparent" />

                {/* Big Number in corner */}
                <div className="absolute top-4 left-4 z-10 font-serif font-extrabold text-3xl sm:text-4xl text-[#F5F1EA] drop-shadow-md">
                  <span className="text-[#C1552E] font-mono text-sm tracking-widest block font-normal">
                    NO.
                  </span>
                  {project.number}
                </div>

                {/* Floating Action Hint */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#F5F1EA]/90 backdrop-blur-xs text-[#161616] group-hover:bg-[#C1552E] group-hover:text-[#F5F1EA] flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bold Overlay Title inside Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-[#F5F1EA]">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#DC6B43] font-bold block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-tight drop-shadow-xs">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Bottom Details & Category Label */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#5C5751]">
                    <span className="text-[#C1552E] font-bold tracking-wider uppercase">
                      {project.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-[#5C5751] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Performance Metric */}
                <div className="space-y-3 pt-3 border-t border-[#DED3C4]">
                  {project.metrics && (
                    <div className="flex items-center gap-2 text-xs font-mono text-[#161616] font-semibold bg-[#F5F1EA] px-3 py-1.5 rounded-lg border border-[#DED3C4]">
                      <Sparkles className="w-3.5 h-3.5 text-[#C1552E] shrink-0" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-[#FAF7F2] border border-[#DED3C4] text-[#161616]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono rounded-md text-[#8A847C]">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Link row */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#161616]">
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:text-[#C1552E] transition-colors">
                    Inspect Architecture & Case Study &rarr;
                  </span>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C1552E] text-[#F5F1EA] text-[11px] font-bold uppercase tracking-wider hover:bg-[#A54421] transition-colors shadow-2xs z-10"
                      title="Open live web app in new tab"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>{project.liveUrlText || 'Live App'}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom banner for recruiters */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EFE9DE] border border-[#DED3C4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C1552E] text-[#F5F1EA] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-base text-[#161616]">
                Looking for code repositories & live deployments?
              </p>
              <p className="text-xs font-mono text-[#5C5751]">
                All projects feature clean commits, comprehensive READMEs, and CI/CD pipelines.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161616] text-[#F5F1EA] text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#C1552E] transition-colors shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub Repos</span>
          </a>
        </div>

      </div>
    </section>
  );
};
