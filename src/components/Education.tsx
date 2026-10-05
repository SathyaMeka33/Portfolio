import { motion } from 'motion/react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-36 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            04 / EDUCATION
          </span>
          <span className="text-xs font-mono text-[#666666]">
            ACADEMIC TRAJECTORY
          </span>
        </div>

        {/* Section Headline */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Education.
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#a0a0a0] font-light max-w-xl">
            Strong academic rigor focused on data structures, algorithmic analysis, and computational mathematics.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="border border-[#252525] bg-[#0a0a0a] divide-y divide-[#252525]">
          {EDUCATION_TIMELINE.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 md:p-8 hover:bg-[#0f0f0f] transition-colors"
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
                <div className="md:col-span-6 space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                    {entry.institution}
                  </h3>
                  <p className="text-sm font-mono text-[#a0a0a0]">
                    {entry.degree}
                  </p>

                  {entry.coursework && (
                    <div className="pt-3">
                      <span className="text-[11px] font-mono text-[#666666] uppercase block mb-2">
                        Relevant Coursework
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs font-mono text-[#bbbbbb] px-2 py-0.5 border border-[#222222] bg-[#050505]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Score / Grade (3 cols) */}
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
                        PROGRAM TYPE
                      </span>
                      <span className="text-xs font-mono text-[#a0a0a0] border border-[#252525] px-2 py-1">
                        4-Year Degree
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
