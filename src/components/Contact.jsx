import { useState, useEffect } from 'react';
import { openWhatsApp, getEmailText, getPhoneText } from '../utils/contact';

const _e = [107,107,116,114,97,100,105,110,103,99,111,46,107,101,114,97,108,97,64,103,109,97,105,108,46,99,111,109];
const _decode = arr => arr.map(c => String.fromCharCode(c)).join('');

const Contact = () => {
    const [phoneText, setPhoneText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setPhoneText(getPhoneText());
        setEmailText(getEmailText());
    }, []);

    const subject = encodeURIComponent(`KK Trading Inquiry${name ? ' — ' + name : ''}`);
    const body = encodeURIComponent(message || 'Please describe your requirements: products, quantities, delivery location.');
    const mailtoHref = `mailto:${_decode(_e)}?subject=${subject}&body=${body}`;

    return (
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
                                <a href="#" onClick={openWhatsApp} className="contact-value">{phoneText}</a>
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
                                <a href="#" onClick={(e) => { e.preventDefault(); openEmail(); }} className="contact-value">{emailText}</a>
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
                    <h3>Send an Enquiry</h3>
                    <div className="contact-form">
                        <div className="form-group">
                            <label htmlFor="inq-name">Company / Name</label>
                            <input
                                type="text"
                                id="inq-name"
                                placeholder="Your name or company"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inq-msg">Requirements</label>
                            <textarea
                                id="inq-msg"
                                rows="5"
                                placeholder="Products you need, approximate quantities, delivery location..."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <a
                            href={mailtoHref}
                            className="btn-primary w-full"
                            style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                        >
                            Send via Email
                        </a>
                        <p className="form-note">Opens your email client — pre-filled and ready to send.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
