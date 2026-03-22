import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Masthead } from './Masthead';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';

// Lazy-load Three.js so it doesn't block initial page render
const SmokeCanvas = lazy(() =>
  import('../ui/SmokeCanvas').then(m => ({ default: m.SmokeCanvas }))
);

export function Root() {
  return (
    <>
      <ScrollToTop />

      {/* WebGL domain-warped fBm smoke — lazy loaded */}
      <Suspense fallback={null}>
        <SmokeCanvas />
      </Suspense>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Masthead />
        <main id="main-content" style={{ flex: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
