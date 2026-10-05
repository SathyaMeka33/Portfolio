import { motion, type Variants } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onConnect: () => void;
}

export default function Hero({ onExploreProjects, onConnect }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between max-w-6xl mx-auto px-6 md:px-12 pt-36 md:pt-44 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 md:space-y-12 max-w-4xl"
      >
        {/* Role eyebrow label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white" />
          <p className="text-xs md:text-sm font-mono tracking-widest text-[#a0a0a0] uppercase">
            {PERSONAL_INFO.roleHeadline}
          </p>
        </motion.div>

        {/* Huge Headline */}
        <motion.div variants={itemVariants} className="space-y-2 md:space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] uppercase font-display">
            Building with logic.
            <br />
            <span className="text-[#a0a0a0]">Designing with purpose.</span>
          </h1>
        </motion.div>

        {/* Intro bio snippet */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-[#a0a0a0] max-w-2xl font-light leading-relaxed"
        >
          {PERSONAL_INFO.heroTagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <button
            type="button"
            onClick={onExploreProjects}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white border border-white hover:border-[#404040]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          <button
            type="button"
            onClick={onConnect}
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-transparent text-white text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 border border-[#252525] hover:border-white hover:bg-[#0a0a0a]"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle bottom bar & scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="pt-16 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#a0a0a0]"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>BASED IN {PERSONAL_INFO.location.toUpperCase()}</span>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="tracking-widest">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </motion.div>
    </section>
  );
}
