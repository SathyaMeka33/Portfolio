import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Printer } from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_TIMELINE,
  SKILL_GROUPS,
  FEATURED_PROJECTS,
  CERTIFICATIONS,
  ACHIEVEMENTS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = async () => {
    const resumeText = `
${PERSONAL_INFO.fullName}
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.links.linkedin}
GitHub: ${PERSONAL_INFO.links.github}
LeetCode: ${PERSONAL_INFO.links.leetcode}

PROFESSIONAL OBJECTIVE
${PERSONAL_INFO.objective}

EDUCATION
${EDUCATION_TIMELINE.map(
  (e) => `• ${e.institution} — ${e.degree} (${e.period})${e.grade ? ` | Score: ${e.grade}` : ''}`
).join('\n')}

TECHNICAL SKILLS
${SKILL_GROUPS.map((g) => `• ${g.category}: ${g.skills.join(', ')}`).join('\n')}

SELECTED PROJECTS
• ${FEATURED_PROJECTS[0].title}
  Technologies: ${FEATURED_PROJECTS[0].technologies.join(', ')}
  Description: ${FEATURED_PROJECTS[0].description}
  Key Highlights:
  ${FEATURED_PROJECTS[0].highlights.map((h) => `  - ${h}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS.map((c) => `• ${c.title} (${c.issuer}) — ${c.description}`).join('\n')}

ACHIEVEMENTS
${ACHIEVEMENTS.map((a) => `• ${a.metric} ${a.title} — ${a.context}`).join('\n')}
    `.trim();

    try {
      await navigator.clipboard.writeText(resumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0a0a0a] border border-[#252525] text-white p-6 sm:p-10 shadow-2xl space-y-8"
        >
          {/* Top Bar with actions */}
          <div className="flex items-center justify-between pb-4 border-b border-[#202020]">
            <span className="text-xs font-mono text-[#888888]">
              OFFICIAL RESUME SPECIFICATION
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[#252525] hover:border-white text-xs font-mono text-[#a0a0a0] hover:text-white transition-colors"
                title="Copy Plaintext Resume"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY TEXT'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-[#252525] hover:border-white text-xs font-mono text-[#a0a0a0] hover:text-white transition-colors"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 border border-[#252525] hover:border-white text-[#a0a0a0] hover:text-white transition-colors"
                aria-label="Close resume modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8 font-mono text-xs">
            {/* Header info */}
            <div className="space-y-2 border-b border-[#1c1c1c] pb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white uppercase font-display">
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#a0a0a0]">
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#888888] pt-1">
                <a href={PERSONAL_INFO.links.github} target="_blank" rel="noreferrer" className="hover:text-white">
                  GitHub: SathyaMeka33
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                  LinkedIn: mekasathya
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-white">
                  LeetCode: Sathya_Meka
                </a>
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-2 border-b border-[#1c1c1c] pb-6">
              <h2 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#888888]">
                Professional Objective
              </h2>
              <p className="text-[#cccccc] font-sans text-xs sm:text-sm leading-relaxed font-light">
                {PERSONAL_INFO.objective}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4 border-b border-[#1c1c1c] pb-6">
              <h2 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#888888]">
                Education
              </h2>
              <div className="space-y-3">
                {EDUCATION_TIMELINE.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <span className="font-semibold text-white">{item.institution}</span>
                      <p className="text-[#a0a0a0]">{item.degree}</p>
                      {item.coursework && (
                        <p className="text-[#777777] text-[11px] mt-0.5">
                          Coursework: {item.coursework.join(', ')}
                        </p>
                      )}
                    </div>
                    <div className="text-left sm:text-right text-[#a0a0a0] shrink-0">
                      <span>{item.period}</span>
                      {item.grade && <span className="block text-white font-bold">{item.grade}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3 border-b border-[#1c1c1c] pb-6">
              <h2 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#888888]">
                Technical Skills
              </h2>
              <div className="space-y-2">
                {SKILL_GROUPS.map((g) => (
                  <div key={g.category} className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                    <span className="sm:col-span-4 text-[#888888]">{g.category}:</span>
                    <span className="sm:col-span-8 text-white">{g.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4 border-b border-[#1c1c1c] pb-6">
              <h2 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#888888]">
                Selected Projects
              </h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white uppercase">{FEATURED_PROJECTS[0].title}</span>
                  <span className="text-[#888888]">{FEATURED_PROJECTS[0].technologies.join(' · ')}</span>
                </div>
                <p className="text-[#bbbbbb] font-sans text-xs">
                  {FEATURED_PROJECTS[0].description}
                </p>
                <ul className="list-disc list-inside text-[#999999] space-y-1 pt-1">
                  {FEATURED_PROJECTS[0].highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3 border-b border-[#1c1c1c] pb-6">
              <h2 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#888888]">
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CERTIFICATIONS.map((c) => (
                  <div key={c.id} className="p-2.5 border border-[#1a1a1a] bg-[#050505]">
                    <span className="text-white font-bold block">{c.title}</span>
                    <span className="text-[#777777] text-[11px] block">{c.issuer}</span>
                    <span className="text-[#a0a0a0] text-[11px] block mt-0.5">{c.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h2 className="text-white font-bold uppercase tracking-wider text-[11px] text-[#888888]">
                Achievements & Coding
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.id} className="p-2.5 border border-[#1a1a1a] bg-[#050505]">
                    <span className="text-white font-bold">{a.metric} {a.title}</span>
                    <p className="text-[#777777] text-[11px] mt-0.5">{a.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
