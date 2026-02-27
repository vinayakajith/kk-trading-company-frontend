import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    <span className="logo-kk">K K</span>
                    <span className="logo-text">Trading Company</span>
                </a>

                <div
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    role="button"
                    tabIndex="0"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#heritage" onClick={closeMenu}>Our Heritage</a></li>
                    <li><a href="#products" onClick={closeMenu}>Products</a></li>
                    <li><a href="#process" onClick={closeMenu}>How We Work</a></li>
                    <li><a href="#contact" className="btn-nav-contact" onClick={closeMenu}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
