import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export default function SocialLinks() {
  return (
    <section id="connect" className="py-24 md:py-36 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
          <span className="text-xs font-mono tracking-widest text-[#a0a0a0]">
            07 / FIND ME ONLINE
          </span>
          <span className="text-xs font-mono text-[#666666]">
            EXTERNAL PROFILES
          </span>
        </div>

        {/* Section Headline */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase font-display">
            Online Presence.
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#a0a0a0] font-light max-w-xl">
            Direct access to my source repositories, algorithmic progression, and professional network.
          </p>
        </div>

        {/* Large Editorial Links Stack */}
        <div className="border-t border-[#252525] divide-y divide-[#252525]">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 sm:py-10 px-4 sm:px-6 transition-all duration-300 hover:bg-white hover:text-black"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono tracking-widest text-[#777777] group-hover:text-black/60 transition-colors uppercase">
                      {link.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display transition-transform duration-300 group-hover:translate-x-2">
                    {link.handle}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <span className="text-xs font-mono text-[#888888] group-hover:text-black/70 transition-colors max-w-xs text-left md:text-right hidden sm:block">
                    {link.descriptor}
                  </span>
                  <div className="w-10 h-10 border border-[#252525] group-hover:border-black flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
