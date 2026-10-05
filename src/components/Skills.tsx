import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...SKILL_GROUPS.map((g) => g.category)];

  const filteredGroups =
    selectedCategory === 'ALL'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === selectedCategory);

  return (
    <section id="skills" className="py-24 md:py-36 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            02 / TECHNICAL SKILLS
          </span>
          <span className="text-xs font-mono text-[#666666]">
            SYSTEMS & TOOLING
          </span>
        </div>

        {/* Section Headline */}
        <div className="mt-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-display">
              Technical Stack.
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#a0a0a0] font-light max-w-xl">
              Grounded in strong computational foundations, relational systems, and scalable application architecture.
            </p>
          </div>

          {/* Clean Segmented Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 border border-[#252525] p-1 bg-[#0a0a0a]">
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
                {cat === 'FRAMEWORKS & LIBRARIES' ? 'FRAMEWORKS' : cat === 'CORE COMPETENCIES' ? 'CORE' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
              className="border border-[#252525] bg-[#0a0a0a] p-6 hover:border-[#404040] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1c1c1c]">
                  <h3 className="text-xs font-mono tracking-widest text-[#a0a0a0] uppercase">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-[#555555]">
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block text-sm font-light text-white tracking-wide hover:text-[#a0a0a0] transition-colors py-1 px-2 border border-[#1f1f1f] bg-[#000000]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#161616] flex items-center justify-between text-[11px] font-mono text-[#555555]">
                <span>VERIFIED PROFICIENCY</span>
                <span className="w-1.5 h-1.5 bg-[#404040]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
