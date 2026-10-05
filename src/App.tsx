import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

// Homepage is loaded eagerly for instant LCP
import HomePage from './pages/HomePage';

// Other pages are code-split for optimal Core Web Vitals
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CareerOsPage = lazy(() => import('./pages/CareerOsPage'));
const EducationPage = lazy(() => import('./pages/EducationPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageFallback() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex items-center gap-3 font-mono text-xs text-[#a0a0a0]">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span>LOADING RESOURCE...</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Global keyboard shortcuts (R for resume, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      } else if (
        (e.key === 'r' || e.key === 'R') &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        setIsResumeOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between">
        {/* Desktop subtle custom cursor */}
        <CustomCursor />

        {/* Top 2px hairline scroll progress */}
        <ScrollProgress />

        {/* Scroll reset on route change */}
        <ScrollToTop />

        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-mono focus:text-xs"
        >
          Skip to main content
        </a>

        {/* Fixed top navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Router */}
        <div id="main-content" className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/career-os" element={<CareerOsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>

        {/* Consistent Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
