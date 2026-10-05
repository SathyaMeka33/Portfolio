import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, ArrowRight, ArrowUpRight, CheckCircle2, Trophy, Terminal, Cloud, Cpu } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';

export default function CertificationsPage() {
  const getCertIcon = (id: string) => {
    switch (id) {
      case 'smart-coder':
        return Terminal;
      case 'azure-essentials':
        return Cloud;
      case 'ibm-ai':
        return Cpu;
      case 'atf-2025':
      default:
        return Award;
    }
  };

  return (
    <>
      <SEOHead metadata={SEO_PAGES.certifications} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 space-y-20">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            CERTIFICATIONS // ASSESSMENTS & HONORS
          </span>
          <span className="text-xs font-mono text-[#666666]">
            VERIFIED CREDENTIALS
          </span>
        </div>

        {/* Primary Page Header with H1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0] uppercase tracking-wider">
            <span className="w-2 h-2 bg-white" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display">
            Certifications
          </h1>

          <p className="text-lg sm:text-xl text-[#a0a0a0] font-light max-w-3xl leading-relaxed">
            Authentic certifications and technical evaluations assessing competencies in advanced algorithmic problem solving, cloud infrastructure concepts, and artificial intelligence fundamentals.
          </p>
        </section>

        {/* Certifications Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => {
            const Icon = getCertIcon(cert.id);
            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="border border-[#252525] bg-[#0a0a0a] p-6 sm:p-8 hover:border-[#666666] hover:bg-[#0f0f0f] transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1c1c1c] text-xs font-mono">
                    <span className="text-white font-medium">{cert.issuer}</span>
                    <span className="text-[#666666] uppercase text-[11px]">{cert.tag}</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 border border-[#252525] bg-black text-white shrink-0 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-white uppercase tracking-tight font-display">
                        {cert.title}
                      </h2>
                      <p className="text-xs md:text-sm font-mono text-[#a0a0a0] leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-xs font-mono text-[#666666]">
                  <span className="flex items-center gap-1.5 text-[#aaaaaa]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>CREDENTIAL VERIFIED</span>
                  </span>
                  <span className="text-[11px] text-[#555555]">OFFICIAL RECORD</span>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* Coding & Academic Milestones Section */}
        <section className="border-t border-[#1a1a1a] pt-16 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#202020]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase font-display text-white">
                Key Coding & Academic Benchmarks.
              </h2>
              <p className="mt-1 text-xs font-mono text-[#a0a0a0]">
                Measurable results in competitive coding and continuous algorithmic development.
              </p>
            </div>
            <Trophy className="w-5 h-5 text-white hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.id}
                className="border border-[#252525] bg-[#080808] p-6 flex flex-col justify-between hover:border-[#555555] transition-colors"
              >
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-2">
                    {item.subtitle}
                  </span>
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight tabular-nums">
                    {item.metric}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
                  <p className="text-xs font-mono text-[#888888] leading-relaxed">
                    {item.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="border-t border-[#1a1a1a] pt-16">
          <div className="border border-[#252525] bg-[#070707] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider block">
                CONTINUE READING
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Explore skills applied in real software projects
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-xs font-mono font-medium hover:bg-black hover:text-white border border-white transition-colors"
              >
                <span>View Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
              >
                <span>Projects</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-[#a0a0a0] text-xs font-mono hover:text-white transition-colors"
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
