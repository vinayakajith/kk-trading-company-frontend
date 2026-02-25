import React from 'react';

const Process = () => {
    return (
        <section id="process" className="section process-section">
            <div className="container">
                <div className="section-header reveal-up">
                    <p className="section-label">Our Process</p>
                    <h2 className="section-title">How We Work</h2>
                    <p className="section-desc">No complicated supply chains. Just a clear, reliable process.</p>
                </div>

                <div className="process-grid">
                    <div className="process-step reveal-up" style={{ '--delay': '0s' }}>
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h4>Source from Local Farms</h4>
                            <p>Direct sourcing from trusted networks. Rice from Palakkad, spices from the Western Ghats.
                                Every batch traceable.</p>
                        </div>
                    </div>

                    <div className="process-step reveal-up" style={{ '--delay': '0.1s' }}>
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h4>Inspect Before Dispatch</h4>
                            <p>Checked for moisture, consistency, and aroma. If it fails inspection, it doesn't ship.</p>
                        </div>
                    </div>

                    <div className="process-step reveal-up" style={{ '--delay': '0.2s' }}>
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h4>Pack to Your Requirement</h4>
                            <p>25kg bags, 50kg bags, or custom. Packed strictly to your market requirements.</p>
                        </div>
                    </div>

                    <div className="process-step reveal-up" style={{ '--delay': '0.3s' }}>
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h4>Ship and Follow Up</h4>
                            <p>We coordinate logistics and provide proactive updates. Issues communicated immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
