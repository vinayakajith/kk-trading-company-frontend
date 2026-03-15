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


        </>
    );
};

export default Navbar;
