import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-36 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            06 / ACHIEVEMENTS
          </span>
          <span className="text-xs font-mono text-[#666666]">
            DATA & MILESTONES
          </span>
        </div>

        {/* Section Headline */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Key Metrics.
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#a0a0a0] font-light max-w-xl">
            Objective benchmarks reflecting continuous algorithmic practice, academic focus, and competitive grit.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-[#252525] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between hover:border-[#666666] transition-colors"
            >
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-3">
                  {item.subtitle}
                </span>

                <div className="text-4xl sm:text-5xl lg:text-5xl font-mono font-bold text-white tracking-tight tabular-nums">
                  {item.metric}
                </div>

                <h3 className="mt-4 text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
                <p className="text-xs font-mono text-[#888888] leading-relaxed">
                  {item.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
