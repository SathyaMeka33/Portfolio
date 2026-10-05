import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, GraduationCap, Calendar, Compass, Code, Brain, Terminal, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutPage() {
  const quickFacts = [
    { label: 'LOCATION', value: 'Rajahmundry, Andhra Pradesh, India', icon: MapPin },
    { label: 'CURRENT DEGREE', value: 'B.Tech — Data Science', icon: GraduationCap },
    { label: 'TIMELINE', value: '2024 – Present', icon: Calendar },
    { label: 'TARGET ROLE', value: 'Software Engineering Intern', icon: Compass },
  ];

  const engineeringPrinciples = [
    {
      title: 'Algorithmic Optimization',
      icon: Terminal,
      description:
        'Continuous problem-solving practice across 250+ LeetCode problems covering dynamic programming, graphs, trees, and array manipulation, focusing on time and space complexity minimization.',
    },
    {
      title: 'Structured Architecture',
      icon: Shield,
      description:
        'Designing software applications with clean separation of concerns, utilizing proven MVC/MVT patterns, RESTful API principles, and robust schema constraints.',
    },
    {
      title: 'Relational Integrity',
      icon: Brain,
      description:
        'Translating complex business domain models into normalized SQL database schemas, ensuring ACID compliance, efficient indexing, and predictable query performance.',
    },
    {
      title: 'Modern Frontends',
      icon: Code,
      description:
        'Crafting responsive, accessible user interfaces with clean semantic HTML, modular CSS, React, and purposeful micro-interactions that elevate user experience.',
    },
  ];

  return (
    <>
      <SEOHead metadata={SEO_PAGES.about} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 space-y-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            ABOUT // BIOGRAPHY & OBJECTIVES
          </span>
          <span className="text-xs font-mono text-[#666666]">
            SATHYA MEKA
          </span>
        </div>

        {/* Primary Page Header with H1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] uppercase tracking-wider">
            <span className="w-2 h-2 bg-white" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display">
            About Sathya Meka
          </h1>

          <p className="text-lg sm:text-xl text-[#a0a0a0] font-light max-w-3xl leading-relaxed">
            Data Science engineering student at Aditya College of Engineering and Technology, driven by a deep fascination with algorithmic structures, robust backend architectures, and software craft.
          </p>
        </section>

        {/* Editorial Narrative & Quick Facts Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-neutral-300 font-light leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-widest text-white uppercase border-b border-[#222222] pb-2">
                Professional Introduction & Career Objective
              </h2>
              <p className="text-base sm:text-lg">
                I am a motivated Data Science engineering student actively seeking a Software Engineering internship. My approach to software development blends the analytical rigor of data science with the disciplined implementation standards of modern software engineering.
              </p>
              <p className="text-sm sm:text-base text-[#a0a0a0]">
                Throughout my academic journey and technical projects, I have developed practical applications using Python, JavaScript, Django, and SQL. I place a strong emphasis on writing code that is not just functioning, but readable, testable, and built on sound architectural patterns.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-widest text-white uppercase border-b border-[#222222] pb-2">
                Engineering Interests & Focus Areas
              </h2>
              <p className="text-sm sm:text-base text-[#a0a0a0]">
                My primary technical interests center on application architecture, relational database management, and algorithmic problem solving:
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#cccccc] pl-2 border-l border-[#252525]">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Backend logic and API design using Python, Django, and Node.js.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Relational data modeling, schema normalization, and SQL optimization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Competitive algorithmic problem solving, graph algorithms, and data structures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Intelligent workflow systems, such as recommendation engines and automated pathways.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-widest text-white uppercase border-b border-[#222222] pb-2">
                Current Education & Academic Standing
              </h2>
              <p className="text-sm sm:text-base text-[#a0a0a0]">
                Currently pursuing a Bachelor of Technology in Data Science at Aditya College of Engineering and Technology (2024 – Present). Prior to this, I completed my Intermediate (12th Standard) at Rajiv Gandhi University of Knowledge Technologies with 94.6% and SSC (10th Standard) at ZPHS Vetlapalem with 94.5%.
              </p>
            </div>
          </div>

          {/* Quick Facts Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#252525] bg-[#0a0a0a] divide-y divide-[#252525]">
              {quickFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="p-5 flex items-start justify-between">
                    <div>
                      <span className="block text-[11px] font-mono tracking-widest text-[#a0a0a0] mb-1">
                        {fact.label}
                      </span>
                      <span className="text-sm font-medium text-white">
                        {fact.value}
                      </span>
                    </div>
                    <Icon className="w-4 h-4 text-[#666666] mt-1 shrink-0" />
                  </div>
                );
              })}
            </div>

            <div className="p-6 border border-[#252525] bg-[#070707] space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#a0a0a0] uppercase block">
                Official Candidate Record
              </span>
              <p className="text-xs font-mono text-white">
                {PERSONAL_INFO.fullName}
              </p>
              <p className="text-[11px] font-mono text-[#777777]">
                Adheres strictly to verified academic credentials and authentic engineering projects without exaggeration.
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Principles Grid */}
        <section className="border-t border-[#1a1a1a] pt-16 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#202020]">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
              Engineering Mindset.
            </h2>
            <span className="text-xs font-mono text-[#666666]">
              CORE TENETS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringPrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 border border-[#252525] bg-[#090909] hover:border-[#555555] transition-colors space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-[#252525] bg-black text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#a0a0a0] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="border-t border-[#1a1a1a] pt-16">
          <div className="border border-[#252525] bg-[#080808] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider block">
                CONTINUE EXPLORING
              </span>
              <p className="text-base sm:text-lg font-medium text-white">
                Discover the technical stack, engineered projects, and verified credentials.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-xs font-mono font-medium hover:bg-black hover:text-white border border-white transition-colors"
              >
                <span>View Technical Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
              >
                <span>Explore Projects</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
