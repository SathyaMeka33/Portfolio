import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1f1f1f] bg-black py-12 text-xs font-mono text-[#777777]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="text-white font-medium">© 2026 Sathya Meka</span>
          <span className="hidden sm:inline text-[#444444]">·</span>
          <span className="text-[#a0a0a0]">Software Engineering / Data Science</span>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            EMAIL
          </a>
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={PERSONAL_INFO.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LEETCODE
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="tracking-widest uppercase text-[#555555]">
            BUILT WITH PRECISION.
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 border border-[#252525] hover:border-white text-[#a0a0a0] hover:text-white transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
