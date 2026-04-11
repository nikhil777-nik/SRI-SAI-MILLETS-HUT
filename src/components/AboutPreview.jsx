import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section id="about" className="about-teaser-container reveal">
            <span className="eyebrow hover-lift">KNOW YOUR GRAIN</span>
            <h2 className="section-title hover-lift">The Millet Spotlight</h2>
            <p className="muted-text mb-24 hover-lift">
                Ancient wisdom meets modern nutritional science. Every grain we serve has a story and a specific benefit for your body. Discover the secrets of Ragi, Jowar, Bajra, and Foxtail in our interactive spotlight.
            </p>
            <div className="about-cta-group">
                <Link to="/millet-spotlight" className="btn-primary">Explore Spotlight</Link>
                <Link to="/our-story" className="btn-primary btn-warm">Our Full Story</Link>
            </div>
        </section>
    );
};

export default AboutPreview;
