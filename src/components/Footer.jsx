import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-left">
                    <Link to="/#home" className="footer-logo">
                        <img src="/assets/logo.svg" alt="Sri Sai Millets Hut Logo" className="brand-logo-large" />
                        <span className="brand-text">SRI SAI MILLETS HUT</span>
                    </Link>
                    <p>Dedicated to preserving our culinary heritage through the superfood of our ancestors. Join us in the millet revolution.</p>
                    <small className="copyright">© 2024 SRI SAI MILLETS HUT. CURATING HEALTH &amp; HERITAGE.</small>
                </div>
                <div className="footer-right">
                    <div className="footer-col">
                        <span className="eyebrow small">RESOURCES</span>
                        <ul className="clean-list footer-links">
                            <li><Link to="/millet-spotlight">Millet Nutrition Guide</Link></li>
                            <li><Link to="/our-story">Our Story</Link></li>
                            <li><Link to="/#location">Find Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <span className="eyebrow small">LEGAL</span>
                        <ul className="clean-list footer-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
