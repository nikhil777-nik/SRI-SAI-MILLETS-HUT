import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MilletSpotlight.css';

const grainsData = [
  {
    id: 'ragi', num: '01', badge: 'Calcium Champion', title: 'Ragi', aka: 'Finger Millet · ರಾಗಿ',
    desc: 'One of the oldest cultivated grains in India, ragi has been a staple of South Indian kitchens for over 3,000 years. Dense, earthy, and incredibly nourishing — it forms the backbone of our breakfast menu.',
    benefit: 'Ragi is the richest plant source of calcium — surpassing dairy per gram — and has one of the lowest glycemic indexes of any grain.',
    nutrients: [
      { label: 'Calcium',  val: 92, color: '#C88A2A' },
      { label: 'Iron',     val: 65, color: '#7B4F1E' },
      { label: 'Fibre',    val: 70, color: '#4A7C3F' },
      { label: 'Protein',  val: 55, color: '#5C8C3A' },
    ],
    dishes: [
      { name: 'Ghee Karam Idli', tag: 'Breakfast', price: '₹50' },
      { name: 'Ghee Ragi Dosa', tag: 'Classic', price: '₹70' },
      { name: 'Ragi Egg Dosa', tag: 'Special', price: '₹70' },
      { name: 'Sambar Idli', tag: 'Light', price: '₹50' },
    ],
    stats: ['364', 'mg Calcium / 100g', '54', 'Glycemic Index', '3000+', 'Years of heritage'],
  },
  {
    id: 'jowar', num: '02', badge: 'Gluten Free', title: 'Jowar', aka: 'Sorghum · ज्वार',
    desc: 'Known as the "new quinoa" in wellness circles, jowar is a powerhouse of antioxidants and dietary fibre. Native to Africa and cultivated in the Deccan Plateau for millennia, it thrives in the same soil as our city.',
    benefit: 'Rich in polyphenols that help reduce oxidative stress. Its high fibre content promotes gut health and keeps cholesterol levels in check.',
    nutrients: [
      { label: 'Fibre',    val: 85, color: '#4A7C3F' },
      { label: 'Protein',  val: 72, color: '#5C8C3A' },
      { label: 'Iron',     val: 60, color: '#7B4F1E' },
      { label: 'Calcium',  val: 48, color: '#C88A2A' },
    ],
    dishes: [
      { name: 'Millet Upma (Pongal)', tag: 'Morning', price: '₹80' },
      { name: 'Ghee Millet Upma', tag: 'Premium', price: '₹110' },
      { name: 'Millets Punugulu', tag: 'Evening', price: '₹60' },
      { name: 'Plain Pesarattu', tag: 'Classic', price: '₹60' },
    ],
    stats: ['0g', 'Gluten content', '62', 'Glycemic Index', '5000+', 'Years in Deccan'],
  },
  {
    id: 'bajra', num: '03', badge: 'Iron Rich', title: 'Bajra', aka: 'Pearl Millet · बाजरा',
    desc: 'Bajra is the grain of endurance — farmers in the Rajasthani desert and Andhra fields alike have relied on it for sustained energy through long working days. Its deep, nutty flavour is unmistakable.',
    benefit: 'Among the highest iron content of any cereal grain. Ideal for combating anaemia and boosting haemoglobin — especially beneficial for women and growing children.',
    nutrients: [
      { label: 'Iron',     val: 90, color: '#7B4F1E' },
      { label: 'Magnesium',val: 78, color: '#3B6B30' },
      { label: 'Protein',  val: 68, color: '#5C8C3A' },
      { label: 'Fibre',    val: 62, color: '#4A7C3F' },
    ],
    dishes: [
      { name: 'Millet Upma (Pongal)', tag: 'Hearty', price: '₹80' },
      { name: 'Uggani Bajji', tag: 'Street', price: '₹70' },
      { name: 'Millets Mirchi', tag: 'Spicy', price: '₹60' },
      { name: 'Madhur Wada', tag: 'Crispy', price: '₹60' },
    ],
    stats: ['8mg', 'Iron per 100g', '55', 'Glycemic Index', '4000+', 'Years cultivated'],
  },
  {
    id: 'foxtail', num: '04', badge: 'Protein Dense', title: 'Foxtail', aka: 'Foxtail Millet · కొర్రలు',
    desc: 'Called "korralu" in Telugu, foxtail millet is a beloved grain of Andhra Pradesh — woven into local food culture as a natural rice substitute. Its mild, slightly sweet taste makes it the most versatile millet we work with.',
    benefit: 'Highest protein density among common millets. Packed with B vitamins that support brain and nervous system health. Excellent for diabetics as a daily rice alternative.',
    nutrients: [
      { label: 'Protein',   val: 88, color: '#5C8C3A' },
      { label: 'B Vitamins',val: 80, color: '#C88A2A' },
      { label: 'Fibre',     val: 66, color: '#4A7C3F' },
      { label: 'Iron',      val: 55, color: '#7B4F1E' },
    ],
    dishes: [
      { name: 'Ghee Millet Upma', tag: 'Premium', price: '₹110' },
      { name: 'Millet Upma Dosa', tag: 'Classic', price: '₹70' },
      { name: 'Millets Upma Pesarattu', tag: 'Fusion', price: '₹80' },
      { name: 'Chicken Dosa', tag: 'Special', price: '₹130' },
    ],
    stats: ['12.3g', 'Protein per 100g', '50', 'Glycemic Index', '3000+', 'Years in Andhra'],
  },
];

const MilletSpotlight = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [animateBars, setAnimateBars] = useState(false);
    
    const activeGrain = grainsData[currentIndex];

    const handleSwitch = (idx) => {
        if (idx === currentIndex) return;
        setFade(true); // Trigger fade out
        setAnimateBars(false); // Reset bars to 0% width
        setTimeout(() => {
            setCurrentIndex(idx);
            setFade(false); // Trigger fade in
            setTimeout(() => setAnimateBars(true), 100); // Wait 100ms then animate bars
        }, 300);
    };

    // Initial load animation for bars
    useEffect(() => {
        setTimeout(() => setAnimateBars(true), 200);
    }, []);

    const fadeClass = fade ? 'fade-out' : 'fade-target';

    return (
        <div>
            <Navbar />
            <main className="spotlight-wrapper">
                <section className="spotlight-section">
                    
                    <div className="section-eyebrow">
                        <span className="eyebrow-line"></span>
                        <span className="eyebrow-text">Nutritional Wisdom</span>
                    </div>
                    <h2 className="section-heading">Millet <em>Spotlight</em></h2>
                    <p className="section-sub">Every grain on our menu carries centuries of wisdom. Tap to explore its story, nutrients, and the dishes we craft from it.</p>

                    <div className="grain-tabs">
                        {grainsData.map((g, i) => (
                            <button 
                                key={g.id} 
                                className={`grain-tab ${i === currentIndex ? 'active' : ''}`}
                                onClick={() => handleSwitch(i)}
                            >
                                <span className="dot"></span>{g.title}
                            </button>
                        ))}
                    </div>

                    <div className="grain-card reveal">
                        <div className="card-left">
                            <span className={`grain-number ${fadeClass}`}>{activeGrain.num}</span>
                            <span className={`grain-badge ${fadeClass}`}>✦ {activeGrain.badge}</span>
                            <h3 className={`grain-title ${fadeClass}`}>{activeGrain.title}</h3>
                            <p className={`grain-aka ${fadeClass}`}>{activeGrain.aka}</p>
                            <p className={`grain-desc ${fadeClass}`}>{activeGrain.desc}</p>
                            <div className={`benefit-callout ${fadeClass}`}>
                                <strong>Why it matters:</strong> {activeGrain.benefit}
                            </div>
                        </div>

                        <div className="card-right">
                            <div className="nutrients-block">
                                <div className="block-label">Nutritional potency (% of daily value)</div>
                                <div id="nutrient-bars">
                                    {activeGrain.nutrients.map((n, i) => (
                                        <div className="nutrient-row" key={`${activeGrain.id}-${i}`}>
                                            <span className="n-label">{n.label}</span>
                                            <div className="n-track">
                                                <div className="n-fill" style={{ width: animateBars ? `${n.val}%` : '0%', background: n.color }}></div>
                                            </div>
                                            <span className="n-val">{n.val}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-divider"></div>
                            <div className="dishes-block">
                                <div className="block-label">Featured dishes</div>
                                <div id="dish-list">
                                    {activeGrain.dishes.map((d, i) => (
                                        <div className="dish-row" key={i}>
                                            <span className="dish-name">{d.name}</span>
                                            <span className="dish-tag">{d.tag}</span>
                                            <span className="dish-price">{d.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-row reveal">
                        <div className="stat-cell">
                            <div className={`stat-value ${fadeClass}`}>{activeGrain.stats[0]}</div>
                            <div className="stat-label">{activeGrain.stats[1]}</div>
                        </div>
                        <div className="stat-cell">
                            <div className={`stat-value ${fadeClass}`}>{activeGrain.stats[2]}</div>
                            <div className="stat-label">{activeGrain.stats[3]}</div>
                        </div>
                        <div className="stat-cell">
                            <div className={`stat-value ${fadeClass}`}>{activeGrain.stats[4]}</div>
                            <div className="stat-label">{activeGrain.stats[5]}</div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MilletSpotlight;
