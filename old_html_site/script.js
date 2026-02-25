document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // Footer year
    // ==========================================
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ==========================================
    // Navbar — scroll effect + auto-hide + glass
    // ==========================================
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
        const y = window.scrollY;

        if (y > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('hidden');
        }

        // Auto-hide on scroll down, show on scroll up
        if (y > 400) {
            if (y > lastScrollY && y - lastScrollY > 8) {
                navbar.classList.add('hidden');
            } else if (lastScrollY - y > 5) {
                navbar.classList.remove('hidden');
            }
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollY = y;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    updateNavbar();

    // ==========================================
    // Active nav link highlighting
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

    const highlightNav = () => {
        const scrollY = window.scrollY + navbar.offsetHeight + 60;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', () => {
        requestAnimationFrame(highlightNav);
    }, { passive: true });

    highlightNav();

    // ==========================================
    // Mobile menu
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    let menuOpen = false;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
        navLinks.classList.toggle('active', menuOpen);
        document.body.classList.toggle('no-scroll', menuOpen);

        const spans = hamburger.querySelectorAll('span');
        if (menuOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    };

    const closeMenu = () => {
        if (!menuOpen) return;
        menuOpen = false;
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    };

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // ==========================================
    // Smooth scroll with navbar offset
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;

            const target = document.querySelector(id);
            if (!target) return;

            e.preventDefault();
            const offset = navbar.offsetHeight + 10;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // ==========================================
    // Scroll reveal — staggered
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================
    // Heritage counter animation
    // ==========================================
    const counters = document.querySelectorAll('.heritage-number[data-count]');
    let countersAnimated = false;

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        // Easing function — ease-out cubic
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const current = Math.round(easedProgress * target);

            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                counters.forEach(counter => animateCounter(counter));
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => counterObserver.observe(counter));

    // Parallax and card tilt removed for cleaner experience

    // ==========================================
    // Back to top
    // ==========================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
