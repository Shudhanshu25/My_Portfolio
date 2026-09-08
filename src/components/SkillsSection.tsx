import React, { useState } from 'react';
import { Layout, Zap, Server, Database, CheckCircle2, Terminal, Layers } from 'lucide-react';
import { SKILLS_DATA, SKILL_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools & Concepts'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools & Concepts'] as const;

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#C1552E]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#C1552E]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#C1552E]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#C1552E]" />;
      default:
        return <Layers className="w-5 h-5 text-[#C1552E]" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-[#DED3C4] bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with small uppercase eyebrow label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-[#DED3C4]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C1552E] font-semibold">
              SECTION 02 / CAPABILITIES & PROFICIENCY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161616] mt-2 tracking-tight">
              Technical Arsenal
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#5C5751] mt-3 sm:mt-0 max-w-sm">
            Audited proficiency across full-stack JavaScript, asynchronous Python, and systems performance.
          </p>
        </div>

        {/* 3-Column Layout as requested:
            - Left: Horizontal skill bars with percentage fills in accent color
            - Middle: Large pull-quote in serif italic
            - Right: 4 icon + label + short description blocks in soft accent rounded badges
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column (5 cols): Horizontal skill bars with percentage fills */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#C1552E]" />
                Proficiency Benchmarks
              </span>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                      activeCategory === cat
                        ? 'bg-[#C1552E] text-[#F5F1EA] font-semibold'
                        : 'bg-[#EFE9DE] text-[#5C5751] hover:text-[#161616]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Bars List */}
            <div className="space-y-4 pt-2">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between text-xs font-medium text-[#161616] mb-1">
                    <span className="font-sans font-semibold group-hover:text-[#C1552E] transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[#C1552E] font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Horizontal progress bar with accent color fill */}
                  <div className="h-2 w-full bg-[#EFE9DE] rounded-full overflow-hidden border border-[#DED3C4]">
                    <div
                      className="h-full bg-[#C1552E] rounded-full transition-all duration-700 ease-out group-hover:bg-[#DC6B43]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {skill.highlight && (
                    <p className="text-[10px] font-mono text-[#8A847C] mt-1 truncate">
                      {skill.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Summary bullet note */}
            <div className="pt-2 text-xs font-mono text-[#5C5751] flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C1552E] shrink-0" />
              <span>Full-Stack breadth verified through production code & academic excellence.</span>
            </div>
          </div>

          {/* Middle Column (3 cols): Large pull-quote in serif italic */}
          <div className="lg:col-span-3 lg:border-x lg:border-[#DED3C4] lg:px-6 py-4 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <span className="text-4xl sm:text-5xl font-serif text-[#C1552E] leading-none select-none block">
                &ldquo;
              </span>
              
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#161616] leading-snug tracking-tight">
                Architecting high-throughput full-stack systems where microsecond-level performance meets editorial visual clarity.
              </blockquote>

              <div className="pt-4 border-t border-[#DED3C4]">
                <p className="font-serif font-bold text-sm text-[#161616]">
                  {PERSONAL_INFO.name}
                </p>
                <p className="text-[11px] font-mono text-[#5C5751] mt-0.5">
                  CGPA {PERSONAL_INFO.cgpa} • ADYPSOE Pune
                </p>
              </div>
            </div>

            {/* Accent Highlight Card */}
            <div className="bg-[#EFE9DE] border border-[#DED3C4] rounded-xl p-4 space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-[#C1552E] font-bold">
                CORE PHILOSOPHY
              </p>
              <p className="text-xs text-[#5C5751] leading-relaxed">
                Code should be readable by humans and optimal for machines. Every millisecond saved in a loop or API handler compounds into tangible user value.
              </p>
            </div>
          </div>

          {/* Right Column (4 cols): 4 icon + label + short description blocks in soft accent rounded badges */}
          <div className="lg:col-span-4 space-y-4">
            <div className="pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]">
                Architectural Domains
              </span>
            </div>

            <div className="space-y-4">
              {SKILL_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="group bg-[#EFE9DE]/80 hover:bg-[#EFE9DE] border border-[#DED3C4] hover:border-[#C1552E]/40 rounded-2xl p-4 sm:p-5 transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Soft accent-colored rounded icon badge */}
                    <div className="w-10 h-10 rounded-xl bg-[#F5F1EA] border border-[#DED3C4] group-hover:border-[#C1552E]/30 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-sm sm:text-base text-[#161616] group-hover:text-[#C1552E] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#5C5751] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
