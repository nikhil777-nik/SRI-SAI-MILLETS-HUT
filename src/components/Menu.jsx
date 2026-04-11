import React, { useState } from 'react';
import MenuTabs from './MenuTabs';

const MenuItem = ({ name, price }) => (
    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '8px' }}>
        <span>{name}</span>
        <strong style={{ color: 'var(--accent-gold)' }}>{price}/-</strong>
    </li>
);

const Menu = () => {
    const [activeTab, setActiveTab] = useState('idli-snacks');

    return (
        <>
            <MenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* IDLI & SNACKS */}
            <section id="idli-snacks" className="dark-theme-section">
                <div className="dark-theme-overlay">
                    <div className="dark-theme-content">
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'rgba(200,138,42,0.12)',
                                border: '1px solid rgba(200,138,42,0.35)',
                                borderRadius: '50px',
                                padding: '7px 20px'
                            }}>
                                <span style={{ fontSize: '13px', color: '#E5CD82' }}>📦</span>
                                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.55)', fontWeight: '500' }}>Parcel Charges:</span>
                                <strong style={{ fontSize: '12px', color: 'var(--accent-gold)' }}>₹10 extra</strong>
                            </div>
                        </div>

                        <span className="eyebrow gold reveal text-center" style={{ display: 'block' }}>MORNING ESSENTIALS</span>
                        <h2 className="section-title white-text text-center reveal hover-lift">Breakfast</h2>

                        <div className="tiffins-grid mt-32">
                            <div className="card-dark-translucent reveal hover-lift">
                                <h3 className="subsection-title" style={{ color: 'var(--accent-gold)' }}>🥣 Idli Varieties</h3>
                                <ul className="clean-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <MenuItem name="Ragi Idli (2 pcs)" price="30" />
                                    <MenuItem name="Ragi Idli (3 pcs)" price="40" />
                                    <MenuItem name="Ragi Idli (4 pcs)" price="50" />
                                    <MenuItem name="Ragi Idli (2 pcs) + Onion Bonda" price="50" />
                                    <MenuItem name="Ragi Idli + Mysore Bonda" price="50" />
                                    <MenuItem name="Ghee Karam Idli (2 pcs)" price="50" />
                                    <MenuItem name="Sambar Idli (2 pcs)" price="50" />
                                    {/* Trimmed some for brevity, but easily expandable */}
                                </ul>
                            </div>

                            <div className="card-dark-translucent reveal hover-lift" style={{ transitionDelay: '0.1s' }}>
                                <h3 className="subsection-title" style={{ color: 'var(--accent-gold)' }}>🍽️ Snacks &amp; Tiffins</h3>
                                <ul className="clean-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <MenuItem name="Onion Bonda" price="50" />
                                    <MenuItem name="Mysore Bonda" price="50" />
                                    <MenuItem name="Upma" price="50" />
                                    <MenuItem name="Wada" price="60" />
                                    <MenuItem name="Millet Upma (Pongal)" price="80" />
                                    <MenuItem name="Ghee Millet Upma (Pongal)" price="110" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DOSAS & PESARATTUS */}
            <section id="dosas-pesarattus" className="dark-theme-section">
                <div className="dark-theme-overlay">
                    <div className="dark-theme-content">
                        <span className="eyebrow gold reveal">TRADITIONAL FAVORITES</span>
                        <h2 className="section-title white-text reveal">Dosas &amp; Pesarattus</h2>

                        <div className="dosas-columns mt-32">
                            <div className="card-dark-translucent reveal hover-lift">
                                <h3 className="subsection-title" style={{ color: 'var(--accent-gold)' }}>🥞 Ragi &amp; Millet Dosas</h3>
                                <ul className="clean-list">
                                    <MenuItem name="Plain Ragi Dosa" price="50" />
                                    <MenuItem name="Masala Ragi Dosa" price="60" />
                                    <MenuItem name="Onion Ragi Dosa" price="60" />
                                    <MenuItem name="Ghee Ragi Dosa" price="70" />
                                    <MenuItem name="Erra Karam Onion Dosa" price="80" />
                                    <MenuItem name="Ragi Double Egg Dosa" price="80" />
                                </ul>
                                <h3 className="subsection-title mt-24" style={{ color: 'var(--accent-gold)' }}>🌿 Pesarattu Varieties</h3>
                                <ul className="clean-list">
                                    <MenuItem name="Plain Pesarattu" price="60" />
                                    <MenuItem name="Masala Pesarattu" price="70" />
                                    <MenuItem name="Upma Pesarattu" price="70" />
                                </ul>
                            </div>

                            <div className="card-dark-translucent reveal hover-lift" style={{ transitionDelay: '0.1s' }}>
                                <h3 className="subsection-title" style={{ color: 'var(--accent-gold)' }}>🧈 Butter / Ghee Specials</h3>
                                <ul className="clean-list">
                                    <MenuItem name="Butter/Ghee Plain Dosa" price="70" />
                                    <MenuItem name="Butter/Ghee Masala Dosa" price="80" />
                                    <MenuItem name="Butter/Ghee Karam Dosa" price="80" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIALS & ADD-ONS */}
            <section id="specials-addons" className="dark-theme-section">
                <div className="dark-theme-overlay">
                    <div className="dark-theme-content">
                        <span className="eyebrow gold reveal text-center" style={{ display: 'block' }}>THE SUNSET SELECTION</span>
                        <h2 className="section-title white-text text-center reveal hover-lift">Evening Specials</h2>

                        <div className="card-dark-translucent reveal hover-lift mt-32">
                            <h3 className="subsection-title" style={{ color: 'var(--accent-gold)', marginBottom: '24px' }}>🌆 Evening Specials</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>
                                <ul className="clean-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <MenuItem name="Mysore Bonda" price="50" />
                                    <MenuItem name="Sprouts Wada" price="60" />
                                    <MenuItem name="Millets Punugulu" price="60" />
                                </ul>
                                <ul className="clean-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <MenuItem name="Chicken Dosa" price="130" />
                                    <MenuItem name="Chicken Idli" price="130" />
                                    <MenuItem name="Chicken Keema Dosa" price="140" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
