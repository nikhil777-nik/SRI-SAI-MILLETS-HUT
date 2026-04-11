import React from 'react';

const Location = () => {
    return (
        <section id="location" className="menu-section mt-32 mb-32">
            <div className="section-header-line">
                <h2 className="section-title">Location &amp; Contact</h2>
                <div className="line"></div>
            </div>
            <div className="location-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
                <div className="location-info reveal" style={{ textAlign: 'left' }}>
                    <h3 className="subsection-title" style={{ color: 'var(--accent-gold)', marginBottom: '24px' }}>Visit Our Hut</h3>

                    <div className="info-block mb-24">
                        <span className="eyebrow small" style={{ marginBottom: '8px', display: 'block' }}>ADDRESS</span>
                        <p className="muted-text" style={{ color: 'var(--accent-dark)', fontWeight: '500' }}>
                            123, Heritage Square, Near Tech Park<br/>
                            Madhapur, Hyderabad, Telangana 500081
                        </p>
                    </div>

                    <div className="info-block mb-24">
                        <span className="eyebrow small" style={{ marginBottom: '8px', display: 'block' }}>OPERATING HOURS</span>
                        <p className="muted-text" style={{ color: 'var(--accent-dark)', fontWeight: '500' }}>
                            Mon - Sat: 7:00 AM - 10:00 PM<br/>
                            Sunday: 7:30 AM - 12:00 PM
                        </p>
                    </div>

                    <div className="info-block mb-24">
                        <span className="eyebrow small" style={{ marginBottom: '8px', display: 'block' }}>PHONE &amp; ENQUIRIES</span>
                        <p className="muted-text" style={{ color: 'var(--accent-dark)', fontWeight: '500' }}>
                            +91 92998 08010<br/>
                            contact@srisaimilletshut.com
                        </p>
                    </div>

                    <a href="https://share.google/EGla2NW96xy7uU0i9" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-block', padding: '12px 24px', fontSize: '13px' }}>Get Direction</a>
                </div>

                <div className="location-map reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow-lg)' }}>
                    <iframe src="https://maps.google.com/maps?q=SRI%20SAI%20MILLET%20HUT&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;
