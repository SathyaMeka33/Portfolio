import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export default function EducationPage() {
  return (
    <>
      <SEOHead metadata={SEO_PAGES.education} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 space-y-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            EDUCATION // ACADEMIC RECORD
          </span>
          <span className="text-xs font-mono text-[#666666]">
            INSTITUTIONAL TRAJECTORY
          </span>
        </div>

        {/* Primary Page Header with H1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] uppercase tracking-wider">
            <span className="w-2 h-2 bg-white" />
            <span>FOUNDATIONS & RIGOR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display">
            Education
          </h1>

          <p className="text-lg sm:text-xl text-[#a0a0a0] font-light max-w-3xl leading-relaxed">
            Academic trajectory rooted in computer science fundamentals, data structures, algorithmic analysis, relational database systems, and statistical mathematics.
          </p>
        </section>

        {/* Editorial Timeline */}
        <section className="border border-[#252525] bg-[#0a0a0a] divide-y divide-[#252525]">
          {EDUCATION_TIMELINE.map((entry, idx) => (
            <motion.article
              key={entry.institution}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 md:p-10 hover:bg-[#0f0f0f] transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Period & Status (3 cols) */}
                <div className="md:col-span-3 space-y-1">
                  <span className="text-xs font-mono tracking-wider text-white font-medium block">
                    {entry.period}
                  </span>
                  <span className="text-[11px] font-mono text-[#777777] uppercase block">
                    STATUS: {entry.status}
                  </span>
                </div>

                {/* Institution & Degree (6 cols) */}
                <div className="md:col-span-6 space-y-3">
                  <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {entry.institution}
                  </h2>
                  <p className="text-sm font-mono text-[#a0a0a0]">
                    {entry.degree}
                  </p>

                  {entry.coursework && (
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-[#666666] uppercase block mb-2">
                        Relevant Coursework & Core Disciplines
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs font-mono text-[#cccccc] px-2.5 py-1 border border-[#222222] bg-[#050505]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Academic Score (3 cols) */}
                <div className="md:col-span-3 md:text-right">
                  {entry.grade ? (
                    <div>
                      <span className="text-[11px] font-mono text-[#666666] uppercase block mb-1">
                        ACADEMIC SCORE
                      </span>
                      <span className="text-2xl md:text-3xl font-mono font-bold text-white tabular-nums">
                        {entry.grade}
                      </span>
                    </div>
                  ) : (
                    <div className="inline-block md:text-right">
                      <span className="text-[11px] font-mono text-[#666666] uppercase block mb-1">
                        PROGRAM
                      </span>
                      <span className="text-xs font-mono text-[#a0a0a0] border border-[#252525] px-2.5 py-1 bg-black">
                        4-Year Undergraduate
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Academic Focus Details */}
        <section className="border-t border-[#1a1a1a] pt-16 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#202020]">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
              Data Science & Engineering Curriculum.
            </h2>
            <span className="text-xs font-mono text-[#666666]">
              CORE FOCUS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-[#252525] bg-[#080808] space-y-3">
              <span className="text-xs font-mono font-bold text-white uppercase block">
                Algorithms & Problem Solving
              </span>
              <p className="text-xs md:text-sm text-[#a0a0a0] font-light leading-relaxed">
                Study of asymptotic complexity, graph traversal, trees, recursion, and dynamic programming algorithms applied directly in code.
              </p>
            </div>

            <div className="p-6 border border-[#252525] bg-[#080808] space-y-3">
              <span className="text-xs font-mono font-bold text-white uppercase block">
                Database Systems (DBMS)
              </span>
              <p className="text-xs md:text-sm text-[#a0a0a0] font-light leading-relaxed">
                Relational schema design, entity-relationship modeling, normalization up to BCNF, SQL query optimization, and transaction ACID properties.
              </p>
            </div>

            <div className="p-6 border border-[#252525] bg-[#080808] space-y-3">
              <span className="text-xs font-mono font-bold text-white uppercase block">
                Object-Oriented Programming
              </span>
              <p className="text-xs md:text-sm text-[#a0a0a0] font-light leading-relaxed">
                Modular software design adhering to encapsulation, inheritance, polymorphism, design patterns, and decoupled architectural tiers.
              </p>
            </div>
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="border-t border-[#1a1a1a] pt-16">
          <div className="border border-[#252525] bg-[#070707] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider block">
                NEXT EXPLORATION
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Explore technical certifications and skill competencies
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-xs font-mono font-medium hover:bg-black hover:text-white border border-white transition-colors"
              >
                <span>View Certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
              >
                <span>Technical Skills</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-[#a0a0a0] text-xs font-mono hover:text-white transition-colors"
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
