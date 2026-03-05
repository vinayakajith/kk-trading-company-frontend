import { Link } from 'react-router-dom';
import mattaImg from '../assets/images/kerala_red_rice_matta.jpeg';
import cardamomImg from '../assets/images/cardamom.jpg';

const Products = () => {
    return (
        <section id="products" className="section products-section">
            <div className="container">
                <div className="section-header reveal-up">
                    <p className="section-label">What We Supply</p>
                    <h2 className="section-title">Rice <span style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic', fontWeight: 400 }}>&</span> Spices</h2>
                    <p className="section-desc">Sourced directly from Kerala's farms — graded, inspected, and packed to your requirement.</p>
                </div>

                <div className="home-products-grid stagger-children">
                    <div className="home-product-card reveal-up">
                        <div className="home-product-img-wrap">
                            <img src={mattaImg} alt="Rice varieties" loading="lazy" />
                        </div>
                        <div className="home-product-body">
                            <h3>Rice</h3>
                            <p>Palakkadan Matta, Raw &amp; White Rice, Broken Rice. Multiple grades, 25kg–50kg bags.</p>
                            <Link to="/products" className="home-product-link">See all rice →</Link>
                        </div>
                    </div>

                    <div className="home-product-card reveal-up">
                        <div className="home-product-img-wrap">
                            <img src={cardamomImg} alt="Spice varieties" loading="lazy" />
                        </div>
                        <div className="home-product-body">
                            <h3>Spices</h3>
                            <p>Green Cardamom, Black Pepper, Cloves. Hand-picked from Kerala's hill gardens, sorted and graded.</p>
                            <Link to="/products" className="home-product-link">See all spices →</Link>
                        </div>
                    </div>
                </div>

                <div className="home-products-cta reveal-up">
                    <Link to="/products" className="btn-outline">Full Product Catalogue</Link>
                </div>
            </div>
        </section>
    );
};

export default Products;
