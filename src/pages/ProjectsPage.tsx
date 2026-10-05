import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Github, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <>
      <SEOHead metadata={SEO_PAGES.projects} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 space-y-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            PROJECTS // ENGINEERED SYSTEMS
          </span>
          <span className="text-xs font-mono text-[#666666]">
            SOFTWARE ARTIFACTS
          </span>
        </div>

        {/* Primary Page Header with H1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] uppercase tracking-wider">
            <span className="w-2 h-2 bg-white" />
            <span>SELECTED REPOSITORIES & SYSTEMS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display">
            Projects
          </h1>

          <p className="text-lg sm:text-xl text-[#a0a0a0] font-light max-w-3xl leading-relaxed">
            Real software systems engineered with practical architectures, database integrity, and algorithmic reasoning. Focused on genuine engineering depth rather than artificial quantity.
          </p>
        </section>

        {/* Project Listings */}
        <section className="space-y-8">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="border border-[#252525] bg-[#080808] hover:border-[#666666] transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 sm:p-10 md:p-12 space-y-8">
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1c1c1c] text-xs font-mono">
                  <div className="flex items-center gap-3 text-[#a0a0a0]">
                    <span className="text-white font-bold tracking-wider">PROJECT {project.number}</span>
                    <span>•</span>
                    <span className="text-[#888888]">FULL-STACK & AI GUIDANCE</span>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>VERIFIED REPO & ARCHITECTURE</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-display text-white">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-[#888888]">
                    {project.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-[#a0a0a0] font-light leading-relaxed max-w-3xl pt-2">
                    {project.description}
                  </p>
                </div>

                {/* System Highlights / Relevant Features */}
                <div className="space-y-3">
                  <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block">
                    Core Capabilities & System Highlights
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {project.highlights.map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 border border-[#1b1b1b] bg-[#050505] text-xs font-mono text-[#cccccc]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block">
                    Technologies Deployed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono border border-[#222222] bg-[#000000] text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-6 border-t border-[#1c1c1c] flex flex-wrap items-center gap-4">
                  <Link
                    to="/projects/career-os"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-xs font-mono font-bold tracking-wider uppercase hover:bg-black hover:text-white border border-white transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Commitment to Integrity Banner */}
        <section className="border border-[#252525] bg-[#060606] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#a0a0a0]">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="uppercase tracking-widest">AUTHENTICITY NOTICE</span>
            </div>
            <p className="text-sm font-mono text-[#888888] leading-relaxed">
              This portfolio presents only verified, real projects built by Sathya Meka. Additional projects in development will be listed upon code completion and testing.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] hover:border-white text-white text-xs font-mono transition-colors"
            >
              <span>Discuss a Collaboration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
