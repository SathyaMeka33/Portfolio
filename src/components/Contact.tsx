import { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-[#1a1a1a] bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            08 / CONTACT
          </span>
          <span className="text-xs font-mono text-[#666666]">
            START A DIALOGUE
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Dramatic Heading */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] uppercase font-display">
              Let's build
              <br />
              something
              <br />
              <span className="text-[#a0a0a0]">useful.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#a0a0a0] font-light max-w-xl leading-relaxed">
              Interested in software engineering, technology, collaboration, or building something meaningful?
              My inbox is open for internship opportunities, technical discussions, and prospective projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white border border-white"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-4 border border-[#252525] bg-[#0a0a0a] text-xs font-mono text-white hover:border-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#888888]" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Direct Contact Info Box */}
          <div className="lg:col-span-4 flex flex-col justify-between border border-[#252525] bg-[#0a0a0a] p-6 sm:p-8 space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-mono text-white hover:underline break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-1">
                  LOCATION
                </span>
                <span className="text-sm font-medium text-white">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-1">
                  RESPONSE TIME
                </span>
                <span className="text-xs font-mono text-[#a0a0a0]">
                  Typically within 24 hours
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1a1a1a] space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-2">
                VERIFIED PROFILES
              </span>
              <div className="flex flex-col gap-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#a0a0a0] hover:text-white transition-colors py-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#a0a0a0] hover:text-white transition-colors py-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#a0a0a0] hover:text-white transition-colors py-1"
                >
                  <span>LeetCode</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
