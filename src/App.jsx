import { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductStrip from './components/ProductStrip';
import Heritage from './components/Heritage';
import Products from './components/Products';
import Process from './components/Process';
import Buyers from './components/Buyers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import heroImg from './assets/images/heroimagefinal.jpg';

// Lazy-load inner pages so they don't bloat the initial bundle
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const MAX_LOADER_MS = 2500; // hard cap — splash never exceeds this
const MIN_LOADER_MS = 800;  // always shows long enough to feel intentional

function HomePage({ onLoaded }) {
  const [loading, setLoading] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);
  const location = useLocation();

  const dismissLoader = useCallback(() => {
    setFadeLoader(true);
    setTimeout(() => {
      setLoading(false);
      onLoaded?.();
    }, 600);
  }, [onLoaded]);

  useEffect(() => {
    const startTime = Date.now();
    let dismissed = false;

    const safeDismiss = () => {
      if (dismissed) return;
      dismissed = true;
      clearTimeout(safetyTimer);
      // Ensure splash shows for at least MIN_LOADER_MS — no extra wait beyond that
      const elapsed = Date.now() - startTime;
      const delay = Math.max(0, MIN_LOADER_MS - elapsed);
      setTimeout(dismissLoader, delay);
    };

    const img = new Image();
    img.src = heroImg;
    img.onload = safeDismiss;
    img.onerror = safeDismiss; // error also dismisses — never gets stuck

    const safetyTimer = setTimeout(safeDismiss, MAX_LOADER_MS);

    return () => {
      clearTimeout(safetyTimer);
      img.onload = null;
      img.onerror = null;
    };
  }, [dismissLoader]);

  // Handle scrolling to hash from another page (e.g. Products -> /#process)
  // We must wait until loading is false so the DOM elements actually exist.
  useEffect(() => {
    if (!loading && location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [loading, location.hash]);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    const revealElements = document.querySelectorAll('.reveal-up, .stagger-children');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {loading && <Loader finishLoading={fadeLoader} />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <ProductStrip />
          <Heritage />
          <Products />
          <Process />
          <Buyers />
          <Contact />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

function PageWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={
        <PageWrapper>
          <Navbar />
          <Suspense fallback={null}>
            <ProductsPage />
          </Suspense>
          <Footer />
          <BackToTop />
        </PageWrapper>
      } />
      <Route path="/about" element={
        <PageWrapper>
          <Navbar />
          <Suspense fallback={null}>
            <AboutPage />
          </Suspense>
          <Footer />
          <BackToTop />
        </PageWrapper>
      } />
    </Routes>
  );
}

export default App;
