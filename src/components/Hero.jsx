import React from 'react';
import heroImg from '../assets/images/heroimagefinal.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-inner">
                <div className="hero-content">
                    <p className="hero-tag"><span className="hero-tag-bar"></span>Harvesting Excellence Since Generations</p>
                    <h1 className="hero-title">K K Trading Company</h1>
                    <p className="hero-desc">
                        Wholesalers and exporters in premium quality rice and spices.
                    </p>
                    <p className="hero-location">Kerala, India</p>
                    <div className="hero-actions">
                        <a href="#products" className="btn-hero-primary">View Products</a>
                        <a href="#contact" className="btn-hero-outline">Get in Touch</a>
                    </div>
                </div>
                <div className="hero-image-wrapper reveal-up">
                    <img src={heroImg} alt="Golden rice grains ready for harvest under a clear blue sky" className="hero-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
