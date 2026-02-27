import React from 'react';
import heroImg from '../assets/images/hero_portrait.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-inner">
                <div className="hero-content">
                    <p className="hero-tag">Harvesting Excellence Since Generations</p>
                    <h1 className="hero-title">K K Trading Company</h1>
                    <p className="hero-desc">
                        Wholesalers and exporters in premium quality rice and spices.
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
