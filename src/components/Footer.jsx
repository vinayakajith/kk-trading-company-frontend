import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="logo-kk">K K</span>
                        <span className="logo-text">Trading Company</span>
                    </div>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#heritage">Heritage</a>
                        <a href="#products">Products</a>
                        <a href="#process">Process</a>
                        <a href="#contact">Contact</a>
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
