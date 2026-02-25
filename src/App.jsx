import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Products from './components/Products';
import Process from './components/Process';
import Buyers from './components/Buyers';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
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
