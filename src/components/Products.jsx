import React from 'react';
import mattaImg from '../assets/images/matta_rice.png';
import rawImg from '../assets/images/closeup-chinese-plant-healthy-ripe.jpg';
import brokenImg from '../assets/images/broken_rice.jpg';
import cardamomImg from '../assets/images/cardamom.jpg';
import pepperImg from '../assets/images/pepper.jpg';
import clovesImg from '../assets/images/cloves.jpg';

const Products = () => {
    return (
        <>
            {/* Products Section */}
            <section id="products" className="section products-section">
                <div className="container">
                    <div className="section-header reveal-up">
                        <p className="section-label">Our Products</p>
                        <h2 className="section-title">Rice & Spices We Supply</h2>
                        <p className="section-desc">Every batch is inspected before dispatch.</p>
                    </div>

                    {/* Rice */}
                    <div className="category-label reveal-up">
                        <h3>Rice Varieties</h3>
                        <div className="category-line"></div>
                    </div>

                    {/* Note: In React, we'll keep the same CSS class names that we defined in index.css */}
                    <div className="product-grid stagger-children">
                        <div className="product-card reveal-up">
                            <div className="product-image img-crop-center">
                                <img src={mattaImg} alt="Palakkadan Matta Rice" loading="lazy" />
                            </div>
                            <div className="product-info">
                                <h4>Palakkadan Matta Rice</h4>
                                <p>Kerala's red parboiled rice. Distinct reddish grain. Available parboiled and raw.</p>
                            </div>
                        </div>

                        <div className="product-card reveal-up">
                            <div className="product-image">
                                <img src={rawImg} alt="Raw & White Rice" loading="lazy" />
                            </div>
                            <div className="product-info">
                                <h4>Raw & White Rice</h4>
                                <p>Milled white rice varieties. Clean grain, even texture. Supplied in bulk.</p>
                            </div>
                        </div>

                        <div className="product-card reveal-up">
                            <div className="product-image img-crop-tight">
                                <img src={brokenImg} alt="Broken Rice" loading="lazy" />
                            </div>
                            <div className="product-info">
                                <h4>Broken Rice</h4>
                                <p>Smaller grain fragments. Cost-effective, widely used in food processing and animal feed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spices Section */}
            <section id="spices" className="section spices-section">
                <div className="container">
                    <div className="category-label reveal-up">
                        <h3>Spices</h3>
                        <div className="category-line"></div>
                    </div>

                    <div className="product-grid stagger-children">
                        <div className="product-card reveal-up">
                            <div className="product-image">
                                <img src={cardamomImg} alt="Green Cardamom" loading="lazy" />
                            </div>
                            <div className="product-info">
                                <h4>Green Cardamom</h4>
                                <p>Hand-picked from Kerala's high ranges. Intense aroma. Sorted and graded.</p>
                            </div>
                        </div>

                        <div className="product-card reveal-up">
                            <div className="product-image">
                                <img src={pepperImg} alt="Black Pepper" loading="lazy" />
                            </div>
                            <div className="product-info">
                                <h4>Black Pepper</h4>
                                <p>Sun-dried Kerala black pepper. Bold heat and earthy flavor.</p>
                            </div>
                        </div>

                        <div className="product-card reveal-up">
                            <div className="product-image">
                                <img src={clovesImg} alt="Cloves" loading="lazy" />
                            </div>
                            <div className="product-info">
                                <h4>Cloves</h4>
                                <p>Aromatic whole cloves from local spice gardens. Dark, rich, and high in oil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
