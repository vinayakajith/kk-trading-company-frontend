import { Link } from 'react-router-dom';
import heroImg from '../assets/images/heroimagefinal.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <img src={heroImg} alt="Golden rice grains ready for harvest" className="hero-bg-img" />
            <div className="hero-overlay" />
            <div className="container hero-inner">
                <div className="hero-content">
                    <p className="hero-eyebrow">K K Trading Company</p>
                    <h1 className="hero-title">
                        Rice <span className="hero-amp">&amp;</span> Spices<br />from Kerala
                    </h1>
                    <p className="hero-desc" style={{ marginBottom: '0.5rem' }}>Harvesting Excellence Since Generations</p>
                    <p className="hero-desc" style={{ fontSize: '1.2rem', opacity: 0.9, marginTop: 0 }}>Wholesalers and exporters in premium quality rice and spices.</p>
                    <div className="hero-actions">
                        <Link to="/products" className="btn-hero-primary">View Products</Link>
                        <a href="#contact" className="btn-hero-outline">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
