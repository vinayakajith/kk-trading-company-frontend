import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
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
            navigate('/');
            setTimeout(() => {
                document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
                        <Link to="/" onClick={closeMenu} className={isHome ? '' : ''}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'nav-active' : ''}>Our Heritage</Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={closeMenu} className={location.pathname === '/products' ? 'nav-active' : ''}>Products</Link>
                    </li>
                    <li>
                        <a href="#process" onClick={(e) => handleAnchorNav(e, '#process')}>How We Work</a>
                    </li>
                    <li>
                        <a href="#contact" className="btn-nav-contact" onClick={(e) => handleAnchorNav(e, '#contact')}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
