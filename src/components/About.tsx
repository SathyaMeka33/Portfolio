import { motion } from 'motion/react';
import { MapPin, GraduationCap, Calendar, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const infoItems = [
    {
      label: 'LOCATION',
      value: 'Rajahmundry, Andhra Pradesh',
      icon: MapPin,
    },
    {
      label: 'EDUCATION',
      value: 'B.Tech — Data Science',
      icon: GraduationCap,
    },
    {
      label: 'STATUS',
      value: '2024 – Present',
      icon: Calendar,
    },
    {
      label: 'FOCUS',
      value: 'Software Engineering',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            01 / ABOUT
          </span>
          <span className="text-xs font-mono text-[#666666]">
            BACKGROUND & MINDSET
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight font-display">
              Curious about how things work.
              <br />
              <span className="text-[#a0a0a0]">Focused on building things that work.</span>
            </h2>

            <div className="space-y-5 text-[#a0a0a0] text-base md:text-lg leading-relaxed font-light">
              <p>
                {PERSONAL_INFO.objective}
              </p>
              <p className="text-sm md:text-base text-[#888888]">
                Registered candidate name: <span className="text-white font-mono text-xs">{PERSONAL_INFO.fullName}</span>. 
                I approach software development with an engineering-first mentality: systematically analyzing bottlenecks, 
                optimizing algorithmic complexity, and writing clean, scalable backend architecture backed by sound relational principles.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Information Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="border border-[#252525] bg-[#0a0a0a] divide-y divide-[#252525]">
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ backgroundColor: '#121212' }}
                    className="p-5 flex items-start justify-between transition-colors"
                  >
                    <div>
                      <span className="block text-[11px] font-mono tracking-widest text-[#a0a0a0] mb-1">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-white tracking-wide">
                        {item.value}
                      </span>
                    </div>
                    <Icon className="w-4 h-4 text-[#666666] mt-1" />
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 p-5 border border-[#252525] bg-[#050505]">
              <span className="block text-[11px] font-mono tracking-widest text-[#a0a0a0] mb-2 uppercase">
                Core Engineering Mindset
              </span>
              <p className="text-xs font-mono text-[#888888] leading-relaxed">
                Clean abstractions · Predictable state · Algorithmic efficiency · Relational integrity · Zero bloat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
