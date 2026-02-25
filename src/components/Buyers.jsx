import React from 'react';

const Buyers = () => {
    return (
        <>
            {/* Who We Work With Section */}
            <section id="buyers" className="section buyers-section">
                <div className="container">
                    <div className="section-header reveal-up text-center">
                        <p className="section-label">Our Partners</p>
                        <h2 className="section-title">Who We Work With</h2>
                    </div>

                    <div className="buyers-grid stagger-children">
                        <div className="buyer-card reveal-up">
                            <div className="buyer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <h4>Retail Chains</h4>
                        </div>
                        <div className="buyer-card reveal-up">
                            <div className="buyer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <h4>Wholesalers</h4>
                        </div>
                        <div className="buyer-card reveal-up">
                            <div className="buyer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="3" width="15" height="13"></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                </svg>
                            </div>
                            <h4>Distributors</h4>
                        </div>
                        <div className="buyer-card reveal-up">
                            <div className="buyer-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path
                                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                    </path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                            </div>
                            <h4>Bulk Buyers</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section contact-section">
                <div className="container contact-grid">
                    <div className="contact-info reveal-up">
                        <p className="section-label">Contact</p>
                        <h2 className="section-title">Get in Touch</h2>
                        <p>Email us your requirements &mdash; products, quantities, delivery location. Our team
                            reviews every inquiry and responds within 24 hours.</p>

                        <div className="contact-methods">
                            <div className="contact-item primary-contact">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="contact-label">WhatsApp (Chat Only)</p>
                                    <a href="https://wa.me/919846092242" target="_blank" rel="noreferrer"
                                        className="contact-value">+91 98460 92242</a>
                                </div>
                            </div>

                            <div className="contact-item secondary-contact">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                        </path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href="mailto:kktradingco.kerala@gmail.com"
                                        className="contact-value">kktradingco.kerala@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item tertiary-contact">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <p className="contact-label">Location</p>
                                    <p className="contact-value-text">Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrap reveal-up">
                        <h3>Send an Inquiry</h3>
                        <form className="contact-form" action="mailto:kktradingco.kerala@gmail.com" method="GET"
                            encType="text/plain">
                            <div className="form-group">
                                <label htmlFor="name">Company / Name</label>
                                <input type="text" id="name" name="subject" placeholder="Your name or company" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Requirements</label>
                                <textarea id="message" name="body" rows="5"
                                    placeholder="Products you need, approximate quantities, delivery location..."
                                    required></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full">Send via Email</button>
                            <p className="form-note">Opens your email client to send directly to our team.</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Buyers;
