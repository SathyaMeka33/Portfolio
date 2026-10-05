import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Layers, Play, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onOpenDetails: (project: Project) => void;
}

export default function Projects({ onOpenDetails }: ProjectsProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const project = FEATURED_PROJECTS[0];

  const pipelineSteps = [
    { label: '01. USER INPUT', detail: 'Skill vectors (Python, SQL, DSA) & Interests' },
    { label: '02. DJANGO MVC', detail: 'Controller processes payload & dispatches to engine' },
    { label: '03. RECOMMENDATION', detail: 'Weighted alignment scoring across career pathways' },
    { label: '04. SQL STORE', detail: 'Profile updates & persistence in relational schema' },
  ];

  return (
    <section id="projects" className="py-24 md:py-36 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            03 / SELECTED WORK
          </span>
          <span className="text-xs font-mono text-[#666666]">
            ENGINEERED SYSTEMS
          </span>
        </div>

        {/* Section Headline */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Selected Work.
          </h2>
          <p className="mt-2 text-sm md:text-base font-mono text-[#a0a0a0]">
            A selection of things I've built. Things I'm proud of.
          </p>
        </div>

        {/* Major Project Showcase Card */}
        <div
          data-cursor="view"
          className="group relative border border-[#252525] bg-[#080808] hover:border-[#666666] transition-all duration-500 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#252525]">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between space-y-8">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#a0a0a0] mb-4">
                  <span className="text-white font-bold tracking-wider">
                    PROJECT {project.number}
                  </span>
                  <span>DJANGO • MVC • SQL</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase font-display group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs font-mono text-[#888888]">
                  {project.subtitle}
                </p>

                <p className="mt-6 text-sm sm:text-base text-[#a0a0a0] leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="mt-8 space-y-2.5">
                  <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase">
                    System Capabilities
                  </span>
                  <ul className="space-y-1.5 text-xs font-mono text-[#bbbbbb]">
                    {project.highlights.slice(0, 5).map((hl, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-white" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Actions */}
              <div className="pt-8 border-t border-[#1c1c1c] space-y-6">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-3">
                    Technologies Deployed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 border border-[#222222] bg-[#000000] text-white transition-transform group-hover:border-[#383838]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-mono font-semibold tracking-wider hover:bg-black hover:text-white border border-white transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GITHUB REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenDetails(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#252525] bg-transparent text-xs font-mono text-white hover:border-white hover:bg-[#121212] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>VIEW ARCHITECTURE</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Abstract Technical Visual Representation (5 cols) */}
            <div className="lg:col-span-5 bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1f1f1f] text-xs font-mono text-[#888888]">
                  <span>MVC PIPELINE VISUALIZER</span>
                  <span className="text-white">INTERACTIVE</span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="p-4 border border-[#252525] bg-black">
                    <span className="text-[11px] font-mono text-[#666666] uppercase block mb-1">
                      Algorithmic Core
                    </span>
                    <p className="text-xs font-mono text-white">
                      Skill Vector Matching Engine
                    </p>
                    <p className="text-[11px] text-[#888888] mt-1 font-mono">
                      Computes dot-product similarity between user competencies and industry career ontologies.
                    </p>
                  </div>

                  {/* Interactive Pipeline State Simulator */}
                  <div className="border border-[#202020] bg-[#080808] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#a0a0a0]">FLOW EXECUTION</span>
                      <button
                        type="button"
                        onClick={() => setActiveStep((prev) => (prev + 1) % pipelineSteps.length)}
                        className="flex items-center gap-1.5 text-[11px] text-white hover:underline"
                      >
                        <Play className="w-3 h-3" />
                        <span>NEXT STEP</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {pipelineSteps.map((step, idx) => {
                        const isCurrent = activeStep === idx;
                        return (
                          <div
                            key={step.label}
                            onClick={() => setActiveStep(idx)}
                            className={`p-2.5 border text-xs font-mono transition-colors cursor-pointer ${
                              isCurrent
                                ? 'border-white bg-[#141414] text-white'
                                : 'border-[#1a1a1a] bg-black text-[#666666] hover:border-[#333333]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold">{step.label}</span>
                              {isCurrent && <CheckCircle2 className="w-3 h-3 text-white" />}
                            </div>
                            {isCurrent && (
                              <p className="text-[11px] text-[#a0a0a0] mt-1">
                                {step.detail}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Annotation */}
              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between text-[11px] font-mono text-[#555555]">
                <span>RELATIONAL SCHEMA VERIFIED</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
