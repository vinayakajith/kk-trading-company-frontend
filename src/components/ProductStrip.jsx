import React from 'react';
import mattaImg from '../assets/images/kerala_red_rice_matta.jpeg';
import rawImg from '../assets/images/closeup-chinese-plant-healthy-ripe.jpg';
import brokenImg from '../assets/images/broken_rice.jpg';
import cardamomImg from '../assets/images/cardamom.jpg';
import pepperImg from '../assets/images/pepper.jpg';
import clovesImg from '../assets/images/cloves.jpg';

const ProductStrip = () => {
    const products = [
        { name: 'Palakkadan Matta Rice', img: mattaImg },
        { name: 'Raw Rice', img: rawImg },
        { name: 'Broken Rice', img: brokenImg },
        { name: 'Green Cardamom', img: cardamomImg },
        { name: 'Black Pepper', img: pepperImg },
        { name: 'Cloves', img: clovesImg }
    ];

    return (
        <section className="product-strip">
            <div className="product-strip-inner">
                {products.map((product, index) => (
                    <div className="strip-item" key={index}>
                        <div className="strip-img-wrapper">
                            <img src={product.img} alt={product.name} loading="lazy" />
                        </div>
                        <span className="strip-name">{product.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductStrip;
