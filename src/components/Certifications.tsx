import { motion } from 'motion/react';
import { Award, ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-36 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            05 / CERTIFICATIONS
          </span>
          <span className="text-xs font-mono text-[#666666]">
            CREDENTIALS & ASSESSMENTS
          </span>
        </div>

        {/* Section Headline */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Certifications.
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#a0a0a0] font-light max-w-xl">
            Verified technical competencies across algorithmic problem solving, cloud foundations, and artificial intelligence.
          </p>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="group border border-[#252525] bg-[#0a0a0a] p-6 hover:border-[#666666] hover:bg-[#0f0f0f] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#888888] pb-3 mb-3 border-b border-[#1c1c1c]">
                  <span>{cert.issuer}</span>
                  <span className="text-[11px] text-[#555555] uppercase">{cert.tag}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight uppercase group-hover:text-white transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-2 text-xs md:text-sm font-mono text-[#a0a0a0] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#181818] flex items-center justify-between text-xs font-mono text-[#666666] group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>CREDENTIAL VERIFIED</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
