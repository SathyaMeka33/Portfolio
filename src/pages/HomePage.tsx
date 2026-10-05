import { Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { ArrowDown, ArrowUpRight, ArrowRight, Code, Database, Sparkles, GraduationCap, Award, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';
import { PERSONAL_INFO, FEATURED_PROJECTS, EDUCATION_TIMELINE, ACHIEVEMENTS } from '../data/portfolioData';

export default function HomePage() {
  const project = FEATURED_PROJECTS[0];
  const primaryEducation = EDUCATION_TIMELINE[0];
  const topAchievements = ACHIEVEMENTS.slice(0, 3);

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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <>
      <SEOHead metadata={SEO_PAGES.home} />

      <main className="space-y-24 md:space-y-36 pb-24">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-between max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40">
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

            {/* Huge Headline (Single H1 for the page) */}
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

            {/* Primary Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white border border-white"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-transparent text-white text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 border border-[#252525] hover:border-white hover:bg-[#0a0a0a]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom metadata banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-16 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#a0a0a0]"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>BASED IN {PERSONAL_INFO.location.toUpperCase()}</span>
            </div>

            <a
              href="#overview"
              className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span className="tracking-widest">SCROLL TO OVERVIEW</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </section>

        {/* Short Introduction Preview Section */}
        <section id="overview" className="max-w-6xl mx-auto px-6 md:px-12 border-t border-[#1a1a1a] pt-20">
          <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
            <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
              01 / PROFILE OVERVIEW
            </span>
            <span className="text-xs font-mono text-[#666666]">
              ENGINEERING FOUNDATION
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-snug font-display">
                Curious about how computational systems operate.
                <br />
                <span className="text-[#a0a0a0]">Committed to engineering solutions that scale.</span>
              </h2>
              <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed font-light">
                {PERSONAL_INFO.objective}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#a0a0a0] transition-colors border-b border-white pb-1"
                >
                  <span>Learn more about my background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 border border-[#252525] bg-[#0a0a0a] p-6 space-y-4 font-mono text-xs">
              <div className="text-[#666666] tracking-widest uppercase text-[11px]">
                QUICK FACTS
              </div>
              <div className="space-y-3 divide-y divide-[#1a1a1a]">
                <div className="pt-2">
                  <span className="text-[#888888] block text-[11px]">DEGREE</span>
                  <span className="text-white">B.Tech in Data Science</span>
                </div>
                <div className="pt-2">
                  <span className="text-[#888888] block text-[11px]">INSTITUTION</span>
                  <span className="text-white">Aditya College of Engg. & Tech</span>
                </div>
                <div className="pt-2">
                  <span className="text-[#888888] block text-[11px]">LEETCODE DSA</span>
                  <span className="text-white">250+ Problems Solved</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Skills Preview */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 border-t border-[#1a1a1a] pt-20">
          <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
            <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
              02 / TECHNICAL COMPETENCIES
            </span>
            <span className="text-xs font-mono text-[#666666]">
              CORE TOOLING
            </span>
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
                Selected Skills.
              </h2>
              <p className="mt-2 text-sm font-mono text-[#a0a0a0]">
                Python · JavaScript · SQL · React · Django · Data Structures
              </p>
            </div>

            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#252525] hover:border-white bg-[#0a0a0a] text-xs font-mono text-white transition-colors"
            >
              <span>VIEW ALL SKILLS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: 'Python', role: 'Backend & ML' },
              { name: 'JavaScript', role: 'Full Stack' },
              { name: 'SQL', role: 'Data Layer' },
              { name: 'React.js', role: 'Frontend UI' },
              { name: 'Django', role: 'MVC Framework' },
              { name: 'Data Structures', role: 'Core Foundation' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="p-4 border border-[#202020] bg-[#070707] hover:border-[#404040] transition-colors"
              >
                <span className="block text-sm font-semibold text-white tracking-wide">
                  {skill.name}
                </span>
                <span className="block text-[11px] font-mono text-[#666666] mt-1">
                  {skill.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Project Preview */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 border-t border-[#1a1a1a] pt-20">
          <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
            <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
              03 / FEATURED WORK
            </span>
            <span className="text-xs font-mono text-[#666666]">
              FLAGSHIP PROJECT
            </span>
          </div>

          <div className="mt-12 border border-[#252525] bg-[#080808] p-6 sm:p-10 md:p-12 hover:border-[#555555] transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-3 text-xs font-mono text-[#a0a0a0]">
                  <span className="text-white font-bold">PROJECT {project.number}</span>
                  <span>•</span>
                  <span>DJANGO / MVC / SQL</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase font-display">
                  {project.title}
                </h3>

                <p className="text-sm font-mono text-[#888888]">
                  {project.subtitle}
                </p>

                <p className="text-sm md:text-base text-[#a0a0a0] font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono border border-[#222222] bg-black text-[#cccccc]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link
                  to="/projects/career-os"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-xs font-mono font-bold tracking-wider hover:bg-black hover:text-white border border-white transition-colors"
                >
                  <span>VIEW PROJECT CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
                >
                  <span>ALL PROJECTS</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Milestones Previews */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 border-t border-[#1a1a1a] pt-20">
          <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
            <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
              04 / ACADEMICS & BENCHMARKS
            </span>
            <span className="text-xs font-mono text-[#666666]">
              RIGOR & METRICS
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education Preview Card */}
            <div className="lg:col-span-7 border border-[#252525] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#888888]">
                  <span>CURRENT ACADEMIC DEGREE</span>
                  <span>{primaryEducation.period}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {primaryEducation.degree}
                </h3>
                <p className="text-sm font-mono text-[#a0a0a0]">
                  {primaryEducation.institution}
                </p>

                {primaryEducation.coursework && (
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#666666] uppercase block mb-1.5">
                      Focus Coursework
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {primaryEducation.coursework.slice(0, 4).map((c) => (
                        <span
                          key={c}
                          className="text-xs font-mono text-[#bbbbbb] px-2 py-0.5 border border-[#222222] bg-[#050505]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-[#1a1a1a]">
                <Link
                  to="/education"
                  className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#a0a0a0] transition-colors"
                >
                  <span>VIEW FULL EDUCATION TIMELINE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Achievements Preview */}
            <div className="lg:col-span-5 border border-[#252525] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#888888]">
                  KEY CODING MILESTONES
                </div>

                <div className="space-y-4">
                  {topAchievements.map((item) => (
                    <div key={item.id} className="border-b border-[#181818] pb-3 last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-mono font-bold text-white">{item.metric}</span>
                        <span className="text-xs font-mono text-[#777777]">{item.subtitle}</span>
                      </div>
                      <span className="text-xs font-mono text-[#aaaaaa] mt-0.5 block">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1a1a1a]">
                <Link
                  to="/certifications"
                  className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#a0a0a0] transition-colors"
                >
                  <span>VIEW CERTIFICATIONS & HONORS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strong Final CTA Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 border-t border-[#1a1a1a] pt-20">
          <div className="border border-[#252525] bg-[#060606] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono tracking-widest text-[#a0a0a0] uppercase block">
                05 / NEXT STEPS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-display text-white">
                Let's engineer together.
              </h2>
              <p className="text-sm md:text-base text-[#a0a0a0] font-light">
                Seeking a Software Engineering internship. Ready to contribute across algorithm design, backend logic, and scalable web applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-xs font-mono font-bold tracking-wider uppercase hover:bg-black hover:text-white border border-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Start a Dialogue</span>
              </Link>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#252525] text-xs font-mono text-white hover:border-white transition-colors"
              >
                <span>Direct Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
