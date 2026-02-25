import React, { useEffect, useState, useRef } from 'react';
import farmerHandsImg from '../assets/images/farmer_hands_rice.png';

const Heritage = () => {
    const [years, setYears] = useState(0);
    const [yearEst, setYearEst] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Animate counts
                let start = 0;
                const duration = 2000;

                // Animate Years
                const animateYears = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);
                    setYears(Math.floor(150 * (1 - Math.pow(1 - percentage, 3))));
                    if (progress < duration) {
                        requestAnimationFrame(animateYears);
                    } else {
                        setYears(150);
                    }
                };

                // Animate Established
                let startEst = 0;
                const animateEst = (timestamp) => {
                    if (!startEst) startEst = timestamp;
                    const progress = timestamp - startEst;
                    const percentage = Math.min(progress / duration, 1);
                    setYearEst(Math.floor(1963 * (1 - Math.pow(1 - percentage, 3))));
                    if (progress < duration) {
                        requestAnimationFrame(animateEst);
                    } else {
                        setYearEst(1963);
                    }
                };

                requestAnimationFrame(animateYears);
                requestAnimationFrame(animateEst);

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
                    <p>For generations, our family cultivated rice paddies and spice gardens across Kerala.</p>
                    <p>In the 1960s, we began trading the very produce we grew &mdash; bringing it directly to retailers and distributors.</p>
                    <p>Today, we remain a family-managed business rooted in the same land, working with the same principles.</p>

                    <div className="heritage-stats-row">
                        <div className="heritage-stat">
                            <span className="heritage-number">{years}+</span>
                            <span className="heritage-label">Years of Farming</span>
                        </div>
                        <div className="heritage-stat">
                            <span className="heritage-number">{yearEst}</span>
                            <span className="heritage-label">Trade Established</span>
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
