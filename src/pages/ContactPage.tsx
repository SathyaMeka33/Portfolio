import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight, ArrowRight, MapPin, Clock, ShieldCheck, Terminal } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactPage() {
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
    <>
      <SEOHead metadata={SEO_PAGES.contact} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 space-y-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            CONTACT // INQUIRIES & COLLABORATION
          </span>
          <span className="text-xs font-mono text-[#666666]">
            START A DIALOGUE
          </span>
        </div>

        {/* Primary Page Header with H1: "Let's Build Something Useful." */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] uppercase tracking-wider">
            <span className="w-2 h-2 bg-white" />
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] uppercase font-display max-w-4xl">
            Let's Build Something Useful.
          </h1>

          <p className="text-lg sm:text-xl text-[#a0a0a0] font-light max-w-3xl leading-relaxed">
            Interested in software engineering, technical collaboration, or engineering internship opportunities? My inbox is always open.
          </p>
        </section>

        {/* Contact Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct CTA box (7 cols) */}
          <div className="lg:col-span-7 border border-[#252525] bg-[#080808] p-8 sm:p-12 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#666666] uppercase tracking-wider block">
                DIRECT COMMUNICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-display">
                Get in Touch via Email
              </h2>
              <p className="text-sm md:text-base text-[#a0a0a0] font-light leading-relaxed">
                Whether you have an inquiry regarding a Software Engineering internship, technical discussion on system architecture, or feedback on Career OS, reach out directly.
              </p>
            </div>

            <div className="p-4 border border-[#202020] bg-black">
              <span className="text-[11px] font-mono text-[#666666] uppercase block mb-1">
                PRIMARY EMAIL INBOX
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-mono font-medium text-white hover:underline break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-xs font-mono font-bold tracking-wider uppercase hover:bg-black hover:text-white border border-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-4 border border-[#252525] bg-[#0d0d0d] text-xs font-mono text-white hover:border-white transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#888888]" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sidebar Info & Verified Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#252525] bg-[#0a0a0a] p-6 sm:p-8 space-y-6">
              <span className="text-xs font-mono tracking-widest text-[#a0a0a0] uppercase block pb-3 border-b border-[#1c1c1c]">
                VERIFIED PROFILES
              </span>

              <div className="space-y-4">
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border border-[#1f1f1f] bg-[#050505] hover:border-[#555555] transition-colors group"
                >
                  <div>
                    <span className="text-sm font-semibold text-white group-hover:text-white block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] font-mono text-[#777777]">
                      mekasathya
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border border-[#1f1f1f] bg-[#050505] hover:border-[#555555] transition-colors group"
                >
                  <div>
                    <span className="text-sm font-semibold text-white group-hover:text-white block">
                      GitHub
                    </span>
                    <span className="text-[11px] font-mono text-[#777777]">
                      SathyaMeka33
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border border-[#1f1f1f] bg-[#050505] hover:border-[#555555] transition-colors group"
                >
                  <div>
                    <span className="text-sm font-semibold text-white group-hover:text-white block">
                      LeetCode
                    </span>
                    <span className="text-[11px] font-mono text-[#777777]">
                      Sathya_Meka (250+ Solved)
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="border border-[#252525] bg-[#070707] p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#888888]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#a0a0a0]">
                <Clock className="w-4 h-4 text-[#888888]" />
                <span>Response time: Typically within 24 hours</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="border-t border-[#1a1a1a] pt-16">
          <div className="border border-[#252525] bg-[#080808] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider block">
                EXPLORE WORK
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Review projects and engineering background
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-xs font-mono font-medium hover:bg-black hover:text-white border border-white transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
              >
                <span>About Background</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
