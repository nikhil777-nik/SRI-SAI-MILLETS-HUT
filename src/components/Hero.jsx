import React from 'react';

const Hero = () => {
    return (
        <>
            <div id="home"></div>
            <section className="hero">
                <div className="hero-content reveal-left">
                    <span className="eyebrow">A LEGACY OF HEALTH</span>
                    <h1>Our Imperial<br/><em>Millet Selection</em></h1>
                    <p>Experience the renaissance of ancient grains. Curated with traditional Nawabi spices and modern nutritional science.</p>
                    <div className="reveal mt-32">
                        <a href="#menu" className="btn-primary" style={{ display: 'inline-block', padding: '14px 40px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            View Our Menu
                        </a>
                    </div>
                </div>
                <div className="hero-image reveal-right">
                    <img src="/assets/images/hero_dosa.png" alt="Millet Dosa Thali" fetchPriority="high" decoding="async" />
                </div>
            </section>
        </>
    );
};

export default Hero;
