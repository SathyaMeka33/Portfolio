import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Track scroll state for subtle glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key and click outside to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-[#252525] py-3.5'
            : 'bg-black/40 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="group flex items-center gap-2 font-display text-lg tracking-wider font-bold text-white transition-opacity hover:opacity-80"
            aria-label="Sathya Meka - Homepage"
          >
            <span>{PERSONAL_INFO.brandName}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white opacity-60 group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 text-xs font-mono tracking-wider text-[#a0a0a0]">
              {NAV_LINKS.map((item) => {
                const active = isLinkActive(item.path);
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`relative py-1 transition-colors hover:text-white ${
                        active ? 'text-white font-medium' : ''
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-white"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 border-l border-[#252525] pl-6">
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 text-xs font-mono border border-[#252525] px-3 py-1.5 text-white hover:bg-white hover:text-black transition-colors"
                title="View Resume Summary (Press R)"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </button>
            </div>
          </nav>

          {/* Mobile & Tablet Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="text-xs font-mono border border-[#252525] px-2.5 py-1 text-white hover:bg-white hover:text-black transition-colors"
              title="View Resume"
            >
              RESUME
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white border border-[#252525] hover:bg-white hover:text-black transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-black/98 pt-24 px-8 flex flex-col justify-between pb-12 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#202020]">
                <span className="text-[11px] font-mono tracking-widest text-[#a0a0a0] uppercase">
                  Navigation
                </span>
                <span className="text-[11px] font-mono text-[#666666]">
                  SELECT PAGE
                </span>
              </div>

              <ul className="space-y-3">
                {NAV_LINKS.map((item, idx) => {
                  const active = isLinkActive(item.path);
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between text-2xl font-light py-2 transition-colors border-b border-[#141414] ${
                          active
                            ? 'text-white font-normal pl-2 border-white'
                            : 'text-[#a0a0a0] hover:text-white'
                        }`}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span>{item.label}</span>
                        {active && (
                          <span className="text-xs font-mono text-white tracking-widest">
                            CURRENT
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-8 border-t border-[#252525] space-y-4">
              <div className="flex flex-col gap-1 text-xs font-mono text-[#a0a0a0]">
                <span>{PERSONAL_INFO.email}</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white pt-2">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  LeetCode <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
