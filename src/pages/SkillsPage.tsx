import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Database, Terminal, Cpu, Layers, GitBranch } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...SKILL_GROUPS.map((g) => g.category)];

  const filteredGroups =
    selectedCategory === 'ALL'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'LANGUAGES':
        return Code2;
      case 'FRAMEWORKS & LIBRARIES':
        return Layers;
      case 'BACKEND / APPLICATION DEVELOPMENT':
        return Cpu;
      case 'DATABASES':
        return Database;
      case 'TOOLS':
        return GitBranch;
      case 'CORE CONCEPTS':
      default:
        return Terminal;
    }
  };

  return (
    <>
      <SEOHead metadata={SEO_PAGES.skills} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 space-y-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            SKILLS // TECHNICAL TAXONOMY
          </span>
          <span className="text-xs font-mono text-[#666666]">
            AUTHENTIC CAPABILITIES
          </span>
        </div>

        {/* Primary Page Header with H1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] uppercase tracking-wider">
            <span className="w-2 h-2 bg-white" />
            <span>TECHNOLOGY & METHODOLOGIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display">
            Technical Skills
          </h1>

          <p className="text-lg sm:text-xl text-[#a0a0a0] font-light max-w-3xl leading-relaxed">
            A comprehensive, verified inventory of programming languages, framework ecosystems, database systems, and computer science foundations. Grounded in actual project implementations without fabricated percentages.
          </p>
        </section>

        {/* Filter Bar */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1c1c1c] pb-6">
          <span className="text-xs font-mono text-[#777777] uppercase tracking-wider">
            FILTER BY DOMAIN ({filteredGroups.length} CATEGORIES)
          </span>

          <div className="flex flex-wrap items-center gap-1.5 p-1 border border-[#252525] bg-[#080808]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                {cat === 'BACKEND / APPLICATION DEVELOPMENT'
                  ? 'BACKEND'
                  : cat === 'FRAMEWORKS & LIBRARIES'
                  ? 'FRAMEWORKS'
                  : cat === 'CORE CONCEPTS'
                  ? 'CORE'
                  : cat}
              </button>
            ))}
          </div>
        </section>

        {/* Skills Categorization Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="border border-[#252525] bg-[#090909] p-6 hover:border-[#555555] transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1c1c1c]">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#888888]" />
                      <h2 className="text-xs font-mono tracking-wider text-white font-semibold uppercase">
                        {group.category}
                      </h2>
                    </div>
                    <span className="text-[11px] font-mono text-[#555555]">
                      {String(group.skills.length).padStart(2, '0')} ITEMS
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block text-xs font-mono text-white py-1.5 px-3 border border-[#202020] bg-black hover:border-[#444444] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#161616] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                  <span>PRACTICED & VERIFIED</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40" />
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* Skills in Action Contextual Box */}
        <section className="border border-[#252525] bg-[#070707] p-8 sm:p-12 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#1c1c1c]">
            <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-widest">
              SKILLS IN PRACTICE
            </span>
            <span className="text-xs font-mono text-[#666666]">
              REAL-WORLD APPLICATION
            </span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold uppercase font-display text-white">
              Applied in Career OS & Algorithmic Problem Solving
            </h3>
            <p className="text-sm md:text-base text-[#a0a0a0] font-light leading-relaxed">
              These technologies are actively utilized across projects such as Career OS (built with Python, Django, SQL, JavaScript, HTML, and CSS) and proven through over 250 data structure and algorithm challenges solved on LeetCode.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/projects/career-os"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-xs font-mono font-bold tracking-wider hover:bg-black hover:text-white border border-white transition-colors"
            >
              <span>Explore Career OS Implementation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
            >
              <span>View All Projects</span>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#252525] text-[#a0a0a0] text-xs font-mono hover:text-white transition-colors"
            >
              <span>About My Background</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
