import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Github, Server, Database, Cpu, CheckCircle2, Play, GitBranch, Terminal, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export default function CareerOsPage() {
  const project = FEATURED_PROJECTS[0];
  const [activeStep, setActiveStep] = useState<number>(0);

  const pipelineSteps = [
    {
      title: '01. USER INPUT & SKILL PROFILE',
      description: 'Candidate submits current competencies (Python, SQL, DSA, etc.) and aspirational career domains.',
      output: 'Normalized vector payload dispatched to backend controller.',
    },
    {
      title: '02. DJANGO CONTROLLER & VALIDATION',
      description: 'Request pipeline authenticates session, validates schema types, and invokes recommendation routines.',
      output: 'Sanitized dictionary prepared for pathway alignment evaluator.',
    },
    {
      title: '03. RECOMMENDATION ENGINE',
      description: 'Computes affinity and gap analysis between candidate skills and domain target milestones.',
      output: 'Ranked career paths, missing prerequisite competencies, and recommended actions.',
    },
    {
      title: '04. RELATIONAL SQL PERSISTENCE',
      description: 'Updates candidate profile records, persists recommendation history, and maintains audit states.',
      output: 'ACID-compliant storage in relational tables ready for presentation rendering.',
    },
  ];

  const careerOsSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Career OS',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    description: project.description,
    author: {
      '@type': 'Person',
      name: 'Veera Venkata Satya Narayana Meka',
      alternateName: 'Sathya Meka',
    },
    programmingLanguage: ['Python', 'Django', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <SEOHead metadata={SEO_PAGES.careerOs} structuredData={careerOsSchema} />

      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 space-y-20">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252525] text-xs font-mono">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-[#a0a0a0] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO PROJECTS</span>
          </Link>
          <span className="text-[#666666]">CASE STUDY // 01</span>
        </div>

        {/* Hero Section with H1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] uppercase tracking-wider">
            <span className="w-2 h-2 bg-white" />
            <span>FULL CASE STUDY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-display">
            Career OS
          </h1>

          <p className="text-xl sm:text-2xl font-mono text-[#a0a0a0]">
            AI-Powered Career Guidance Platform
          </p>

          <p className="text-base sm:text-lg text-[#cccccc] font-light leading-relaxed max-w-3xl pt-2">
            An AI-powered career guidance platform delivering personalized career recommendations based on user skills and interests. Built with a structured Django MVC architecture, relational SQL data layer, and responsive interface.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-xs font-mono font-bold tracking-wider hover:bg-black hover:text-white border border-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>VIEW CODE ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
            >
              <span>INQUIRE ABOUT THIS PROJECT</span>
            </Link>
          </div>
        </section>

        {/* Overview Section */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            1. Overview
          </h2>
          <p className="text-neutral-300 font-light leading-relaxed">
            Career OS is engineered to resolve a core problem faced by aspiring students and engineers: the lack of clear, data-driven pathway recommendations tailored to their actual technical competencies. By systematically capturing candidate skill inventories, analyzing interest profiles, and evaluating target requirements, the platform calculates actionable career tracks.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border border-[#252525] bg-[#080808] font-mono text-xs">
            <div>
              <span className="text-[#666666] block text-[11px]">ROLE</span>
              <span className="text-white font-medium">Lead Developer</span>
            </div>
            <div>
              <span className="text-[#666666] block text-[11px]">ARCHITECTURE</span>
              <span className="text-white font-medium">Django MVC / MVT</span>
            </div>
            <div>
              <span className="text-[#666666] block text-[11px]">DATABASE</span>
              <span className="text-white font-medium">Relational SQL</span>
            </div>
            <div>
              <span className="text-[#666666] block text-[11px]">STATUS</span>
              <span className="text-white font-medium">Core Implemented</span>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            2. The Problem
          </h2>
          <div className="space-y-4 text-neutral-300 font-light leading-relaxed">
            <p>
              Students and early-career developers often face overwhelming and fragmented information when attempting to align their current skillset with industry requirements. Generic advice fails to account for specific programming languages, database knowledge, and individual engineering interests.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[#a0a0a0] pl-4 border-l border-[#222222]">
              <li>• Disconnected guidance that ignores specific technical foundations.</li>
              <li>• Absence of concrete prerequisite roadmaps based on relational skill dependencies.</li>
              <li>• Inefficient trial-and-error in course selection and project building.</li>
            </ul>
          </div>
        </section>

        {/* Solution Section */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            3. The Solution
          </h2>
          <p className="text-neutral-300 font-light leading-relaxed">
            Career OS addresses this challenge through an intelligent career recommendation engine powered by Python, Django, and SQL. By processing user attributes through structured backend logic, the system computes clear pathway alignment scores, highlights missing skills, and organizes structured progression roadmaps for each student.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            4. Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#202020] bg-[#090909] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="text-xs font-mono text-[#cccccc] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            5. Technology Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { category: 'Backend Engine', tech: 'Python & Django', role: 'MVC architecture, REST endpoints, recommendation logic' },
              { category: 'Data Layer', tech: 'Relational SQL', role: 'User profile models, skill taxonomy tables, career pathways' },
              { category: 'User Interface', tech: 'HTML5 & Modular CSS3', role: 'Responsive layout, accessible semantic structure' },
              { category: 'Client Logic', tech: 'JavaScript (ES6+)', role: 'Interactive form validations, dynamic DOM updates' },
              { category: 'Version Control', tech: 'Git & GitHub', role: 'Branch management and codebase tracking' },
              { category: 'Development Env', tech: 'VS Code & Virtualenv', role: 'Isolated Python package dependencies' },
            ].map((item) => (
              <div key={item.tech} className="p-5 border border-[#202020] bg-[#060606] space-y-2">
                <span className="text-[11px] font-mono text-[#666666] uppercase block">
                  {item.category}
                </span>
                <span className="text-sm font-mono font-bold text-white block">
                  {item.tech}
                </span>
                <p className="text-xs font-mono text-[#888888] leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
              6. System Architecture (MVC Blueprint)
            </h2>
            <span className="text-xs font-mono text-[#666666]">
              STRUCTURED DECOUPLING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 border border-[#252525] bg-[#070707] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Server className="w-4 h-4" />
                <span className="font-bold">CONTROLLER (DJANGO)</span>
              </div>
              <p className="text-xs font-mono text-[#a0a0a0]">
                {project.architectureOverview.backend}
              </p>
              <p className="text-[11px] text-[#777777] font-mono leading-relaxed">
                Coordinates input requests, executes authorization rules, runs recommendation algorithms, and yields structured responses.
              </p>
            </div>

            <div className="p-6 border border-[#252525] bg-[#070707] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Database className="w-4 h-4" />
                <span className="font-bold">MODEL (SQL STORE)</span>
              </div>
              <p className="text-xs font-mono text-[#a0a0a0]">
                {project.architectureOverview.database}
              </p>
              <p className="text-[11px] text-[#777777] font-mono leading-relaxed">
                Relational schema structuring users, skills, and pathways with primary/foreign key integrity.
              </p>
            </div>

            <div className="p-6 border border-[#252525] bg-[#070707] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Cpu className="w-4 h-4" />
                <span className="font-bold">VIEW (PRESENTATION)</span>
              </div>
              <p className="text-xs font-mono text-[#a0a0a0]">
                {project.architectureOverview.frontend}
              </p>
              <p className="text-[11px] text-[#777777] font-mono leading-relaxed">
                Modular responsive presentation rendering personalized guidance metrics and pathway recommendations.
              </p>
            </div>
          </div>

          {/* Interactive Pipeline Visualizer */}
          <div className="p-6 border border-[#252525] bg-[#050505] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#a0a0a0]">REQUEST EXECUTION PIPELINE</span>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % pipelineSteps.length)}
                className="flex items-center gap-1.5 text-white hover:underline"
              >
                <Play className="w-3 h-3" />
                <span>CYCLE STEP</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {pipelineSteps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <div
                    key={step.title}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 border text-xs font-mono cursor-pointer transition-colors ${
                      isSelected
                        ? 'border-white bg-[#141414] text-white'
                        : 'border-[#1a1a1a] bg-black text-[#666666] hover:border-[#333333]'
                    }`}
                  >
                    <div className="font-semibold text-[11px]">{step.title}</div>
                    {isSelected && (
                      <div className="mt-2 text-[11px] text-[#a0a0a0] space-y-1">
                        <p>{step.description}</p>
                        <p className="text-emerald-400 font-mono text-[10px]">↳ {step.output}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Development Section */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            7. Development Workflow
          </h2>
          <div className="space-y-4 text-neutral-300 font-light leading-relaxed">
            <p>
              The development followed iterative milestones: schema design, backend logic prototyping in Django, algorithmic recommendation formulation, and front-end integration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 border border-[#202020] bg-[#070707]">
                <span className="text-white font-bold block mb-1">Phase 1: Relational Schema</span>
                <span className="text-[#888888]">Normalized SQL tables for candidate profiles, skill taxonomies, and career definitions.</span>
              </div>
              <div className="p-4 border border-[#202020] bg-[#070707]">
                <span className="text-white font-bold block mb-1">Phase 2: Django Backend</span>
                <span className="text-[#888888]">Constructed controller workflows, views, and recommendation matching routines.</span>
              </div>
              <div className="p-4 border border-[#202020] bg-[#070707]">
                <span className="text-white font-bold block mb-1">Phase 3: Presentation UI</span>
                <span className="text-[#888888]">Integrated semantic HTML, responsive CSS, and client-side interactions.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            8. Engineering Challenges & Solutions
          </h2>
          <div className="space-y-4">
            <div className="p-5 border border-[#202020] bg-[#080808] space-y-2">
              <h3 className="text-sm font-mono font-bold text-white">
                Challenge: Complex Skill Mapping Across Varying Career Tracks
              </h3>
              <p className="text-xs md:text-sm text-[#a0a0a0] font-light leading-relaxed">
                <strong className="text-white font-mono">Solution:</strong> Modeled skill vectors in the relational schema with domain weights, allowing the recommendation algorithm to differentiate between foundational prerequisites and optional electives.
              </p>
            </div>
            <div className="p-5 border border-[#202020] bg-[#080808] space-y-2">
              <h3 className="text-sm font-mono font-bold text-white">
                Challenge: Maintaining MVC Decoupling in Django
              </h3>
              <p className="text-xs md:text-sm text-[#a0a0a0] font-light leading-relaxed">
                <strong className="text-white font-mono">Solution:</strong> Isolated the recommendation computational service from the HTTP views, ensuring business logic remained independently testable and maintainable.
              </p>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            9. What I Learned
          </h2>
          <ul className="space-y-2 text-xs font-mono text-[#cccccc] pl-4 border-l border-[#252525]">
            <li>• Structuring real-world Django applications following strict separation of concerns.</li>
            <li>• Designing normalized relational databases that support efficient filtering and updates.</li>
            <li>• Implementing practical recommendation algorithms using skill vectors.</li>
            <li>• Bridging full-stack interfaces with robust backend business logic.</li>
          </ul>
        </section>

        {/* Future Improvements */}
        <section className="border-t border-[#1c1c1c] pt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
            10. Future Improvements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 border border-[#202020] bg-[#070707] space-y-1">
              <span className="text-white font-semibold">Extended Domain Taxonomies</span>
              <p className="text-[#888888]">Incorporate emerging engineering specializations into the relational database.</p>
            </div>
            <div className="p-4 border border-[#202020] bg-[#070707] space-y-1">
              <span className="text-white font-semibold">Automated Benchmark Sync</span>
              <p className="text-[#888888]">Integrate with external coding platform APIs to dynamically verify candidate competencies.</p>
            </div>
          </div>
        </section>

        {/* GitHub & Contact Actions */}
        <section className="border-t border-[#1c1c1c] pt-12">
          <div className="border border-[#252525] bg-[#060606] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-[#888888] uppercase block mb-1">
                OPEN SOURCE CODEBASE
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Inspect Career OS on GitHub
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-mono font-bold tracking-wider hover:bg-black hover:text-white border border-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>VISIT REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
              >
                <span>ALL PROJECTS</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
