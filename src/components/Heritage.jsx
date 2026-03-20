import { Link } from 'react-router-dom';
import farmerHandsImg from '../assets/images/farmer_hands_rice.png';

const Heritage = () => {
    return (
        <section id="heritage" className="section heritage-section">
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
                            <span className="heritage-number">4</span>
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
