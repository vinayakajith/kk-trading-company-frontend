import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Products from './components/Products';
import Process from './components/Process';
import Buyers from './components/Buyers';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import heroImg from './assets/images/hero_portrait.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);

  // Preload huge hero image before letting user see site
  useEffect(() => {
    const img = new Image();
    img.src = heroImg;
    img.onload = () => {
      // Small artificial delay to let animation play at least once
      setTimeout(() => {
        setFadeLoader(true); // Triggers fade-out class
        // Completely unmount loader after fade transition completes
        setTimeout(() => setLoading(false), 800);
      }, 500);
    };
  }, []);

  // Global scroll reveal logic ported from script.js
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initial check for elements already in viewport
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-up, .stagger-children');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {loading && <Loader finishLoading={fadeLoader} />}
      <Navbar />
      <Hero />
      <Heritage />
      <Products />
      <Process />
      <Buyers />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
