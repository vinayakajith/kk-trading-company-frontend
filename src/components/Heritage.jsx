import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import farmerHandsImg from '../assets/images/farmer_hands_rice.png';

const Heritage = () => {
    const [generations, setGenerations] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

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
                observer.unobserve(node);
            }
        }, { threshold: 0.3 });

        observer.observe(node);

        return () => observer.unobserve(node);
    }, []);

    return (
        <section id="heritage" className="section heritage-section" ref={sectionRef}>
            <div className="container heritage-grid">
                <div className="heritage-text reveal-up">
                    <p className="section-label">Harvesting Excellence Since Generations</p>
                    <h2 className="section-title">Farmers Who Became Traders</h2>
                    <p>K K Trading Company started where all good trade starts — on the farm. Our family has been cultivating rice in Alappuzha for four generations. We know the crop, the season, and what a good grain looks like.</p>
                    <blockquote className="heritage-quote">
                        "We are farmers. That's why we know what to look for when we source."
                    </blockquote>
                    <p>When we moved into trading, we sourced from farmers like ourselves. That hasn't changed.</p>

                    <div className="heritage-stats-row">
                        <div className="heritage-stat">
                            <span className="heritage-number">{generations}</span>
                            <span className="heritage-label">Generations of Farming</span>
                        </div>
                    </div>

                    <Link to="/about" className="home-product-link" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Our full story →</Link>
                </div>

                <div className="heritage-visual reveal-up">
                    <img src={farmerHandsImg} alt="Farmer holding fresh rice grains" className="heritage-main-img" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default Heritage;
