import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, GitBranch, Database, Server, Layers, Cpu, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-[#252525] text-white p-6 md:p-10 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-[#252525]">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] mb-2">
                <span>PROJECT {project.number}</span>
                <span>/</span>
                <span>ARCHITECTURE & DESIGN</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase font-display">
                {project.title}
              </h2>
              <p className="text-sm text-[#a0a0a0] mt-1 font-light">
                {project.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 border border-[#252525] text-[#a0a0a0] hover:text-white hover:border-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overview */}
          <div className="py-6 border-b border-[#1c1c1c] space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#a0a0a0] uppercase">
              Project Statement
            </h3>
            <p className="text-base text-neutral-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architectural Blueprint */}
          <div className="py-6 border-b border-[#1c1c1c] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono tracking-widest text-[#a0a0a0] uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-white" />
                <span>System Architecture (MVC Blueprint)</span>
              </h3>
              <span className="text-[11px] font-mono text-[#666666]">
                Django MVT / Relational Core
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-[#252525] bg-[#050505] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Server className="w-3.5 h-3.5" />
                  <span>BACKEND LAYER</span>
                </div>
                <p className="text-xs font-mono text-[#a0a0a0]">
                  {project.architectureOverview.backend}
                </p>
                <p className="text-[11px] text-[#777777] leading-relaxed">
                  Processes user requests, validates payloads, and executes career recommendation algorithms.
                </p>
              </div>

              <div className="p-4 border border-[#252525] bg-[#050505] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Database className="w-3.5 h-3.5" />
                  <span>DATABASE LAYER</span>
                </div>
                <p className="text-xs font-mono text-[#a0a0a0]">
                  {project.architectureOverview.database}
                </p>
                <p className="text-[11px] text-[#777777] leading-relaxed">
                  Normalized database schema preserving user skill taxonomies, profile histories, and career indices.
                </p>
              </div>

              <div className="p-4 border border-[#252525] bg-[#050505] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>PRESENTATION UI</span>
                </div>
                <p className="text-xs font-mono text-[#a0a0a0]">
                  {project.architectureOverview.frontend}
                </p>
                <p className="text-[11px] text-[#777777] leading-relaxed">
                  Clean responsive user interface delivering interactive skill assessment and recommendation cards.
                </p>
              </div>
            </div>
          </div>

          {/* Key Modules & Highlights */}
          <div className="py-6 border-b border-[#1c1c1c] space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#a0a0a0] uppercase flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-white" />
              <span>Core Highlights & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 border border-[#1f1f1f] bg-[#070707]"
                >
                  <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-[#cccccc] leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills replaced with typographic specs */}
          <div className="py-6 space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-[#a0a0a0] uppercase">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-[#252525] bg-black text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-[#252525] flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-mono font-semibold tracking-wider hover:bg-black hover:text-white border border-white transition-colors"
            >
              <span>VIEW REPO ON GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-[#252525] text-xs font-mono text-[#a0a0a0] hover:text-white hover:border-[#666666] transition-colors"
            >
              CLOSE BLUEPRINT
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
