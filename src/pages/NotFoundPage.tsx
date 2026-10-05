import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Compass } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_PAGES } from '../config/seo';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead metadata={SEO_PAGES.notFound} />

      <main className="min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-24 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#252525] bg-[#0a0a0a] text-xs font-mono text-[#888888]">
            <Compass className="w-3.5 h-3.5" />
            <span>404 // ROUTE NOT FOUND</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-display">
            This page doesn't exist.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#a0a0a0] font-light max-w-lg mx-auto leading-relaxed">
            The resource you requested could not be located. It may have been moved, renamed, or never existed in the repository.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-xs font-mono font-bold tracking-wider uppercase hover:bg-black hover:text-white border border-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK HOME</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#252525] text-white text-xs font-mono hover:border-white transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>VIEW PROJECTS</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
