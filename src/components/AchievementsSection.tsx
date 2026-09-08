import React from 'react';
import { Award, Sparkles, ArrowUpRight, Code2, Globe } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'ach-1':
        return <Code2 className="w-5 h-5 text-[#C1552E]" />;
      case 'ach-2':
        return <Award className="w-5 h-5 text-[#C1552E]" />;
      case 'ach-3':
        return <Globe className="w-5 h-5 text-[#C1552E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C1552E]" />;
    }
  };

  return (
    <section id="achievements" className="relative py-20 lg:py-28 border-b border-[#DED3C4] bg-[#F5F1EA]">
      {/* Anchor alias for compatibility */}
      <span id="recommendations" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-[#DED3C4]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C1552E] font-semibold">
              SECTION 04 / KEY MILESTONES & RECOGNITION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161616] mt-2 tracking-tight">
              Achievements
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#5C5751] mt-3 sm:mt-0 max-w-md">
            Verified milestones across algorithmic problem solving, selective industry recruitment, and full-stack production delivery.
          </p>
        </div>

        {/* 3-Column Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((item) => (
            <article
              key={item.id}
              className="group bg-[#EFE9DE]/80 hover:bg-[#EFE9DE] border border-[#DED3C4] hover:border-[#C1552E]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Header row: Icon + Number Badge + Metric Highlight */}
                <div className="flex items-center justify-between pb-3 border-b border-[#DED3C4]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F1EA] border border-[#DED3C4] flex items-center justify-center shadow-2xs group-hover:border-[#C1552E]/40 transition-colors">
                      {getAchievementIcon(item.id)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A847C] block font-bold">
                        MILESTONE {item.number}
                      </span>
                      <span className="text-xs font-mono uppercase text-[#C1552E] font-bold tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-[#161616] text-[#F5F1EA] font-mono text-xs font-bold tracking-wide shadow-2xs">
                    {item.metric}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#161616] group-hover:text-[#C1552E] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C5751] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer: Tags & Action Link */}
              <div className="space-y-4 pt-4 border-t border-[#DED3C4]">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-[#F5F1EA] border border-[#DED3C4] text-[#161616]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.linkUrl && (
                  <div className="pt-1">
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#161616] hover:text-[#C1552E] transition-colors"
                    >
                      <span>{item.linkText || 'Verify Milestone'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C1552E]" />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
