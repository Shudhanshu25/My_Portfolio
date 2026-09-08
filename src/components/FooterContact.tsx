import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, ArrowUpRight, Github, Linkedin, Code2, Send, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getResumeDataUri } from '../utils/resumeGenerator';

interface FooterContactProps {
  onOpenResumeModal: () => void;
}

export const FooterContact: React.FC<FooterContactProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const resumeUri = getResumeDataUri();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${contactName}`);
    const body = encodeURIComponent(
      `Hi Shudhanshu,\n\n${contactMessage}\n\nFrom: ${contactName} (${contactEmail})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#F5F1EA] border-t-2 border-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bold Headline as requested:
            "LET'S CREATE SOMETHING GREAT" (accent color on second line)
        */}
        <div className="pb-12 border-b border-[#DED3C4]">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5C5751] block mb-3 font-semibold">
            START A CONVERSATION
          </span>
          <h2 className="font-serif font-black uppercase text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-[#161616]">
            LET'S CREATE <br />
            <span className="text-[#C1552E] underline decoration-[#C1552E]/30 decoration-4 underline-offset-8">
              SOMETHING GREAT
            </span>
          </h2>
        </div>

        {/* 2-Column Footer Layout:
            - Left-aligned tagline & quick info & resume download
            - Right-aligned icon list of email/phone/location/social links
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-[#DED3C4] items-start">
          
          {/* Left-aligned Tagline & Bio (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            <p className="font-serif text-xl sm:text-2xl text-[#161616] leading-snug">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-sm text-[#5C5751] font-sans leading-relaxed max-w-2xl">
              Currently evaluating full-time SDE roles, software engineering internships, and high-impact systems projects. Open to relocation and remote opportunities worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Mandatory Download Resume button in Contact */}
              <a
                download="Shudhanshu-Resume.pdf"
                href={resumeUri}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C1552E] text-[#F5F1EA] text-xs font-bold uppercase tracking-widest hover:bg-[#A54421] transition-all duration-200 shadow-sm focus:ring-2 focus:ring-[#C1552E]"
                aria-label="Download Shudhanshu-Resume.pdf"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-4 py-3 rounded-full bg-[#EFE9DE] border border-[#DED3C4] text-[#161616] text-xs font-semibold uppercase tracking-wider hover:bg-[#DED3C4] transition-colors"
              >
                Preview CV
              </button>
            </div>

            {/* Quick Email Copy Pill */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono">
              <span className="text-[#8A847C]">Quick copy:</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EFE9DE] hover:bg-[#DED3C4] text-[#161616] font-mono transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#C1552E]" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right-aligned icon list of email/phone/location/links (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#161616] font-bold block">
              Direct Contact & Channels
            </span>

            <ul className="space-y-3 font-sans">
              {/* Email link with mailto: */}
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-[#EFE9DE]/80 hover:bg-[#EFE9DE] border border-[#DED3C4] hover:border-[#C1552E]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F5F1EA] text-[#C1552E] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase text-[#8A847C] block">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#161616] group-hover:text-[#C1552E] transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>
              </li>

              {/* Phone link with tel: */}
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-[#EFE9DE]/80 hover:bg-[#EFE9DE] border border-[#DED3C4] hover:border-[#C1552E]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F5F1EA] text-[#C1552E] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#8A847C] block">Phone / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#161616] group-hover:text-[#C1552E] transition-colors">
                      {PERSONAL_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>
              </li>

              {/* Location */}
              <li>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#EFE9DE]/80 border border-[#DED3C4]">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F1EA] text-[#C1552E] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#8A847C] block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#161616]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Links List */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#EFE9DE] hover:bg-[#DED3C4] border border-[#DED3C4] text-xs font-mono font-semibold text-[#161616] hover:text-[#C1552E] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#C1552E]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#EFE9DE] hover:bg-[#DED3C4] border border-[#DED3C4] text-xs font-mono font-semibold text-[#161616] hover:text-[#C1552E] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#C1552E]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#EFE9DE] hover:bg-[#DED3C4] border border-[#DED3C4] text-xs font-mono font-semibold text-[#161616] hover:text-[#C1552E] transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-[#C1552E]" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quick Direct Message Dispatch Form for Recruiters */}
        <div className="py-10 border-b border-[#DED3C4]">
          <div className="max-w-2xl mx-auto bg-[#EFE9DE] border border-[#DED3C4] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="text-center space-y-1.5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161616] tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-[#5C5751]">
                Sends directly to tripathishudhanshu76@gmail.com • Typically responds within 24 hours
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-emerald-300 text-emerald-800 text-center space-y-2">
                <Check className="w-6 h-6 mx-auto text-emerald-600" />
                <p className="text-sm font-semibold">Your default email client has been launched!</p>
                <p className="text-xs font-mono">You can also write directly to tripathishudhanshu76@gmail.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5C5751] mb-1">
                      Your Name / Role
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah (Technical Recruiter)"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F1EA] border border-[#DED3C4] text-xs text-[#161616] placeholder:text-[#8A847C] focus:outline-hidden focus:ring-2 focus:ring-[#C1552E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5C5751] mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F1EA] border border-[#DED3C4] text-xs text-[#161616] placeholder:text-[#8A847C] focus:outline-hidden focus:ring-2 focus:ring-[#C1552E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#5C5751] mb-1">
                    Role Overview / Opportunity
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about the role, project requirements, or schedule a quick screening call..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F1EA] border border-[#DED3C4] text-xs text-[#161616] placeholder:text-[#8A847C] focus:outline-hidden focus:ring-2 focus:ring-[#C1552E] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#161616] text-[#F5F1EA] text-xs font-bold uppercase tracking-widest hover:bg-[#C1552E] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Shudhanshu</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8A847C] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Shudhanshu Tripathi. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Pune, Maharashtra, India</span>
            <span>•</span>
            <span>B.E. Computer Engineering (2023–2027)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
