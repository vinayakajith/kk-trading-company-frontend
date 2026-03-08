import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navHidden, setNavHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 100);

            // Hide on scroll down, show on scroll up — only past initial threshold
            if (currentY > 80) {
                if (currentY > lastScrollY.current) {
                    setNavHidden(true);
                    setMenuOpen(false); // close drawer when nav hides
                } else {
                    setNavHidden(false);
                }
            } else {
                setNavHidden(false);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    const handleAnchorNav = (e, anchor) => {
        e.preventDefault();
        closeMenu();
        if (isHome) {
            document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/${anchor}`);
        }
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${navHidden ? 'hidden' : ''}`}>
                <div className="container nav-container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <span className="logo-kk">K K</span>
                        <span className="logo-text">Trading Company</span>
                    </Link>

                    <div
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        role="button"
                        tabIndex="0"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'nav-active' : ''}>Our Heritage</Link>
                        </li>
                        <li>
                            <Link to="/products" onClick={closeMenu} className={location.pathname === '/products' ? 'nav-active' : ''}>Products</Link>
                        </li>
                        <li>
                            <a href="#process" onClick={(e) => handleAnchorNav(e, '#process')}>Our Process</a>
                        </li>
                        <li className="nav-cta-li">
                            <a href="#contact" className="btn-nav-contact" onClick={(e) => handleAnchorNav(e, '#contact')}>Contact Us</a>
                        </li>
                        <li className="nav-footer-li">
                            <div className="nav-drawer-footer">
                                <p className="nav-drawer-brand">K K Trading Co.</p>
                                <p className="nav-drawer-tagline">Harvesting Excellence Since Generations</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Backdrop — tap to close drawer */}
            <div
                className={`nav-overlay ${menuOpen ? 'active' : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Mobile bottom navigation — always visible, makes pages discoverable */}
            <nav className="mobile-bottom-nav" aria-label="Page navigation">
                <Link to="/" onClick={closeMenu} className={`mbn-item ${isHome ? 'mbn-active' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Home</span>
                </Link>

                <Link to="/products" onClick={closeMenu} className={`mbn-item ${location.pathname === '/products' ? 'mbn-active' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                    <span>Products</span>
                </Link>

                <Link to="/about" onClick={closeMenu} className={`mbn-item ${location.pathname === '/about' ? 'mbn-active' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22V12" />
                        <path d="M12 12C12 7 7 3 2 3c0 7 4 12 10 12z" />
                        <path d="M12 12c0-5 5-9 10-9 0 7-4 12-10 12" />
                    </svg>
                    <span>Heritage</span>
                </Link>

                <a href="#contact" onClick={(e) => handleAnchorNav(e, '#contact')} className="mbn-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Contact</span>
                </a>
            </nav>
        </>
    );
};

export default Navbar;
