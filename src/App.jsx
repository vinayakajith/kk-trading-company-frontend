import { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductStrip from './components/ProductStrip';
import Heritage from './components/Heritage';
import Products from './components/Products';
import Process from './components/Process';
import Buyers from './components/Buyers';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import heroImg from './assets/images/heroimagefinal.jpg';

const MAX_LOADER_MS = 6000;

function HomePage({ onLoaded }) {
  const [loading, setLoading] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);
  const location = useLocation();

  const dismissLoader = useCallback(() => {
    setFadeLoader(true);
    setTimeout(() => {
      setLoading(false);
      onLoaded?.();
    }, 800);
  }, [onLoaded]);

  useEffect(() => {
    let dismissed = false;
    const safeDismiss = () => {
      if (dismissed) return;
      dismissed = true;
      clearTimeout(safetyTimer);
      setTimeout(dismissLoader, 400);
    };

    const img = new Image();
    img.src = heroImg;
    img.onload = safeDismiss;
    img.onerror = safeDismiss;

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { root: null, rootMargin: '0px', threshold: 0.12 });

    const els = document.querySelectorAll('.reveal-up, .stagger-children');
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
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
          <ProductsPage />
          <Footer />
          <BackToTop />
        </PageWrapper>
      } />
      <Route path="/about" element={
        <PageWrapper>
          <Navbar />
          <AboutPage />
          <Footer />
          <BackToTop />
        </PageWrapper>
      } />
    </Routes>
  );
}

export default App;
