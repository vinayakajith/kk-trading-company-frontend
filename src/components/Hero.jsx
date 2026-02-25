import React from 'react';
import heroImg from '../assets/images/hero_portrait.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-inner">
                <div className="hero-content">
                    <p className="hero-tag">Est. 1963 · Palakkad, Kerala</p>
                    <h1 className="hero-title">Kerala Rice &amp; Spices,<br />Direct from the Land<br />We Farm</h1>
                    <p className="hero-desc">
                        Family-managed. Farming since 1963.<br />
                        Direct supply to retailers and distributors.
                    </p>
                    <div className="hero-actions">
                        <a href="#products" className="btn-hero-primary">View Products</a>
                        <a href="#contact" className="btn-hero-outline">Get in Touch</a>
                    </div>
                </div>
                <div className="hero-image-wrapper reveal-up">
                    <img src={heroImg} alt="Kerala rice paddy workers" className="hero-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
