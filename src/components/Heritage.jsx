import React, { useEffect, useState, useRef } from 'react';
import farmerHandsImg from '../assets/images/farmer_hands_rice.png';

const Heritage = () => {
    const [generations, setGenerations] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const duration = 2000;

                // Animate Generations
                let startGen = 0;
                const animateGen = (timestamp) => {
                    if (!startGen) startGen = timestamp;
                    const progress = timestamp - startGen;
                    const percentage = Math.min(progress / duration, 1);
                    setGenerations(Math.floor(4 * (1 - Math.pow(1 - percentage, 3))));
                    if (progress < duration) {
                        requestAnimationFrame(animateGen);
                    } else {
                        setGenerations(4);
                    }
                };

                requestAnimationFrame(animateGen);

                // Once triggered, unobserve to run once
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            }
        }, { threshold: 0.3 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="heritage" className="section heritage-section" ref={sectionRef}>
            <div className="container heritage-grid">
                <div className="heritage-text reveal-up">
                    <p className="section-label">From Farm to Trade</p>
                    <h2 className="section-title">Rooted in Kerala's Agricultural Legacy</h2>
                    <p>For generations, our family has cultivated rice paddies and spice gardens across Kerala's fertile land.</p>
                    <blockquote className="heritage-quote">
                        "What began as farming, grew into trade — carrying the same values from our fields to your shelves."
                    </blockquote>
                    <p>Today, we remain a family-managed business rooted in the same land, working with the same principles of quality, trust, and integrity.</p>

                    <div className="heritage-stats-row">
                        <div className="heritage-stat">
                            <span className="heritage-number">{generations}</span>
                            <span className="heritage-label">Generations of Excellence</span>
                        </div>
                    </div>
                </div>

                <div className="heritage-visual reveal-up">
                    <img src={farmerHandsImg} alt="Farmer holding fresh rice grains" className="heritage-main-img" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default Heritage;
