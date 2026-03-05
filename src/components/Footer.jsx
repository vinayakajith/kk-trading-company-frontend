import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className="footer" id="contact">
            <div className="container footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div>
                            <div className="footer-brand-name">
                                <span className="logo-kk">K K</span>
                                <span className="logo-text">Trading Company</span>
                            </div>
                            <p className="footer-tagline">Harvesting Excellence Since Generations</p>
                            <address className="footer-address">
                                K K Trading Company<br />
                                27/188J, Pazhaveed<br />
                                Alappuzha — 688009<br />
                                Keralam, India
                            </address>
                        </div>
                    </div>
                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">Heritage</Link>
                        <Link to="/products">Products</Link>
                        <a href="/#process">Process</a>
                        <a href="/#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-bottom">
                    <p>&copy; <span id="year">{year}</span> K K Trading Company. All rights reserved.</p>
                    <p className="footer-location">Kerala, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
