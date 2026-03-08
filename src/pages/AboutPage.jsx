import farmerHandsImg from '../assets/images/farmer_hands_rice.png';
import heroRiceFieldImg from '../assets/images/hero_rice_field.png';
import Contact from '../components/Contact';
import { openWhatsApp } from '../utils/contact';

const timeline = [
    {
        period: 'The Beginning',
        title: 'Rice farming in Alappuzha',
        body: 'The family began as rice farmers in Alappuzha — working paddy fields through monsoon floods and dry seasons. Four generations in the same land.',
    },
    {
        period: 'Moving into Trade',
        title: 'From field to market',
        body: 'With years of farming behind us, we began supplying rice to local merchants and wholesalers. We knew the grain well enough to know what was worth buying and what wasn\'t.',
    },
    {
        period: 'Expanding the Range',
        title: 'Spices added',
        body: 'We extended sourcing to green cardamom, black pepper, and cloves — working with spice farmers in Wayanad and Idukki the same way we had with rice farmers closer to home.',
    },
    {
        period: 'Today',
        title: 'K K Trading Company',
        body: 'Still family-run, still based in Alappuzha. We supply rice and spices to wholesalers, distributors, and buyers across Kerala and beyond.',
    },
];

const AboutPage = () => {
    return (
        <main className="ap-page">

            {/* Hero */}
            <section className="ap-hero">
                <div className="ap-hero-bg" style={{ backgroundImage: `url(${heroRiceFieldImg})` }}></div>
                <div className="ap-hero-overlay"></div>
                <div className="container ap-hero-inner">
                    <p className="ap-hero-label">Harvesting Excellence Since Generations</p>
                    <h1 className="ap-hero-title">Farmers who<br />became traders.</h1>
                    <p className="ap-hero-sub">Four generations of rice farming in Alappuzha, Kerala. We know the crop — that's why we know how to source it.</p>
                </div>
            </section>

            {/* Who we are */}
            <section className="ap-section">
                <div className="container ap-origin-grid">
                    <div className="ap-origin-image reveal-up">
                        <img src={farmerHandsImg} alt="Farmer holding freshly harvested rice" className="ap-main-img" loading="lazy" />
                    </div>
                    <div className="ap-origin-text reveal-up">
                        <p className="section-label">Who We Are</p>
                        <h2 className="section-title">K K Trading Company</h2>
                        <p>We are a family business based in Alappuzha, Kerala. Before we were traders, we were farmers — four generations of growing rice in the backwaters is where this all started.</p>
                        <p>That background matters. When you've farmed rice yourself, you know what a good grain looks like. You know the difference between grades. You know what to ask the farmer and what to check before buying. That's the knowledge we bring to every order we fulfill.</p>
                        <p>We source from farmers like us — small and mid-size growers up and down the state who know their crop.</p>
                        <blockquote className="ap-quote">
                            "We know the crop — that's why we know how to source it."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="ap-timeline-section">
                <div className="container">
                    <div className="section-header text-center reveal-up">
                        <p className="section-label">Our Background</p>
                        <h2 className="section-title">How We Got Here</h2>
                    </div>
                    <div className="ap-timeline">
                        {timeline.map((item, i) => (
                            <div key={i} className="ap-timeline-item reveal-up">
                                <div className="ap-timeline-marker">
                                    <div className="ap-timeline-dot"></div>
                                    {i < timeline.length - 1 && <div className="ap-timeline-line"></div>}
                                </div>
                                <div className="ap-timeline-content">
                                    <span className="ap-timeline-period">{item.period}</span>
                                    <h3 className="ap-timeline-title">{item.title}</h3>
                                    <p className="ap-timeline-body">{item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location + CTA */}
            <section className="ap-location-section">
                <div className="container ap-location-inner reveal-up">
                    <div className="ap-location-text">
                        <p className="section-label">Find Us</p>
                        <h2 className="section-title">Alappuzha, Kerala</h2>
                        <address className="ap-address">
                            K K Trading Company<br />
                            27/188J, Pazhaveed<br />
                            Alappuzha — 688009<br />
                            Keralam, India
                        </address>
                    </div>
                    <div className="ap-location-cta">
                        <h3 className="ap-cta-mini-title">Get in touch</h3>
                        <p>Send us your requirements and we'll get back to you.</p>
                        <div className="pp-cta-buttons" style={{ marginTop: '1rem' }}>
                            <a href="#" onClick={openWhatsApp} className="btn-primary">WhatsApp Us</a>
                            <a href="#contact" className="btn-outline">Send an Email</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container"><div className="section-divider"></div></div>
            <Contact />
        </main>
    );
};

export default AboutPage;
