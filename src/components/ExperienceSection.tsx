import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, TrendingUp, CheckCircle, Award } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-[#DED3C4] bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-[#DED3C4]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C1552E] font-semibold">
              SECTION 03 / TRACK RECORD & FORMATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161616] mt-2 tracking-tight">
              Experience & Education
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#5C5751] mt-3 sm:mt-0 max-w-sm">
            Demonstrated engineering execution, real-world systems optimization, and stellar academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#C1552E]" />
                <h3 className="font-serif text-2xl font-bold text-[#161616]">
                  Work Experience
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5C5751]">
                PRODUCTION IMPACT
              </span>
            </div>

            {EXPERIENCE_DATA.map((exp, idx) => (
              <article
                key={idx}
                className="bg-[#EFE9DE]/90 border border-[#DED3C4] rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden transition-all duration-300 hover:border-[#C1552E]/50 shadow-xs"
              >
                {/* Metric Banner badge in terracotta */}
                {exp.metricsHighlight && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C1552E] text-[#F5F1EA] text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{exp.metricsHighlight}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#DED3C4] pb-4">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#161616]">
                      {exp.role}
                    </h4>
                    <p className="font-sans font-semibold text-[#C1552E] text-base mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#5C5751]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C1552E]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8A847C]" />
                      {exp.location} • {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#161616] font-medium leading-relaxed">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5C5751]">
                    Key Contributions & Engineering Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5C5751] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C1552E] mt-2 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#F5F1EA] border border-[#DED3C4] text-[11px] font-mono text-[#161616]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            {/* Note on upcoming availability */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-dashed border-[#DED3C4] flex items-center justify-between text-xs font-mono text-[#5C5751]">
              <span>Ready for immediate internship or full-time deployment</span>
              <span className="text-[#C1552E] font-bold">2026/2027 COHORT</span>
            </div>
          </div>

          {/* Education & Academic Rigor Column (5 cols) */}
          <div id="education" className="lg:col-span-5 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#C1552E]" />
                <h3 className="font-serif text-2xl font-bold text-[#161616]">
                  Academic Distinction
                </h3>
              </div>
              <span className="text-xs font-mono text-[#C1552E] font-bold">
                9.485 CGPA
              </span>
            </div>

            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#EFE9DE]/90 border border-[#DED3C4] rounded-2xl p-6 sm:p-7 space-y-5 relative"
              >
                {/* Outstanding CGPA Stat Box */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#F5F1EA] border border-[#DED3C4]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#5C5751] block">
                      CUMULATIVE GRADE POINT AVERAGE
                    </span>
                    <span className="font-serif text-3xl font-extrabold text-[#C1552E] tracking-normal [font-variant-numeric:lining-nums]">
                      {edu.cgpa}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#EFE9DE] border border-[#DED3C4] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#C1552E]" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#161616]">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[#5C5751] mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-[#8A847C] mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C1552E]" />
                    {edu.period} • {edu.location}
                  </p>
                </div>

                <div className="space-y-2 pt-1 border-t border-[#DED3C4]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5C5751]">
                    Academic Highlights:
                  </span>
                  <ul className="space-y-2">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#5C5751] leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C1552E] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Quick Competitive Coding & DSA Box */}
            <div className="bg-[#FAF7F2] border border-[#DED3C4] rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#161616] font-bold">
                  LeetCode & Problem Solving
                </span>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#C1552E] hover:underline"
                >
                  View Profile &rarr;
                </a>
              </div>
              <p className="text-xs text-[#5C5751] leading-relaxed">
                Regularly practicing algorithmic challenges spanning dynamic programming, graph theory, trees, and system design patterns.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
