import mattaImg from '../assets/images/kerala_red_rice_matta.jpeg';
import rawImg from '../assets/images/white-rice.jpg';
import brokenImg from '../assets/images/broken_rice.jpg';
import cardamomImg from '../assets/images/cardamom.jpg';
import pepperImg from '../assets/images/pepper.jpg';
import clovesImg from '../assets/images/cloves.jpg';
import Contact from '../components/Contact';
import { openWhatsApp } from '../utils/contact';

const riceProducts = [
    {
        name: 'Palakkadan Matta Rice',
        img: mattaImg,
        desc: "Kerala's iconic red parboiled rice. Distinct earthy flavour, nutritious grain. Available parboiled and raw.",
        packaging: '25 kg / 50 kg',
    },
    {
        name: 'Raw & White Rice',
        img: rawImg,
        desc: 'Milled white rice. Clean, consistent grain. Supplied in bulk.',
        packaging: '25 kg / 50 kg',
    },
    {
        name: 'Broken Rice',
        img: brokenImg,
        desc: 'Grain fragments from milling. Used in food processing, idli/dosa batter, and animal feed.',
        packaging: '25 kg / 50 kg · Bulk',
    },
];

const spiceProducts = [
    {
        name: 'Green Cardamom',
        img: cardamomImg,
        desc: 'Hand-picked from the hill ranges of Idukki and Wayanad. Strong aroma, plump pods.',
        packaging: '1 kg / 5 kg · 25 kg',
    },
    {
        name: 'Black Pepper',
        img: pepperImg,
        desc: 'Sun-dried Kerala black pepper. Bold and pungent.',
        packaging: '5 kg / 10 kg · 25 kg',
    },
    {
        name: 'Cloves',
        img: clovesImg,
        desc: 'Whole dried cloves from Kerala spice gardens. Dark and aromatic.',
        packaging: '1 kg / 5 kg · 25 kg',
    },
];

function ProductCard({ product }) {
    return (
        <div className="cat-card reveal-up">
            <div className="cat-card-img">
                <img src={product.img} alt={product.name} loading="lazy" />
            </div>
            <div className="cat-card-body">
                <h3 className="cat-card-name">{product.name}</h3>
                <p className="cat-card-desc">{product.desc}</p>
                <div className="cat-card-pack">
                    <span className="cat-meta-label">Packaging</span>
                    <span className="cat-packaging">{product.packaging}</span>
                </div>
            </div>
        </div>
    );
}

const ProductsPage = () => {
    return (
        <main className="pp-page">
            <section className="pp-hero">
                <div className="container pp-hero-inner">
                    <p className="section-label">What We Supply</p>
                    <h1 className="pp-hero-title">Rice &amp; Spices</h1>
                    <p className="pp-hero-sub">Sourced from Kerala. Packed to your requirement.</p>
                </div>
            </section>

            <section className="pp-section">
                <div className="container">
                    <div className="pp-category-header reveal-up">
                        <h2 className="pp-category-title">Rice</h2>
                        <div className="pp-category-line"></div>
                    </div>
                    <div className="cat-grid stagger-children">
                        {riceProducts.map(p => <ProductCard key={p.name} product={p} />)}
                    </div>
                </div>
            </section>

            <div className="container"><div className="section-divider"></div></div>

            <section className="pp-section">
                <div className="container">
                    <div className="pp-category-header reveal-up">
                        <h2 className="pp-category-title">Spices</h2>
                        <div className="pp-category-line"></div>
                    </div>
                    <div className="cat-grid stagger-children">
                        {spiceProducts.map(p => <ProductCard key={p.name} product={p} />)}
                    </div>
                </div>
            </section>

            <section className="pp-cta-section">
                <div className="container pp-cta-inner reveal-up">
                    <h2 className="pp-cta-title">Interested in placing an order?</h2>
                    <p className="pp-cta-sub">Tell us what you need and we'll get back to you.</p>
                    <div className="pp-cta-buttons">
                        <a href="#" onClick={openWhatsApp} className="btn-primary">WhatsApp Us</a>
                        <a href="#contact" className="btn-outline">Send an Email</a>
                    </div>
                </div>
            </section>

            <div className="container"><div className="section-divider"></div></div>
            <Contact />
        </main>
    );
};

export default ProductsPage;
