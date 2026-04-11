import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './OurStory.css';

const OurStory = () => {
    return (
        <div>
            <Navbar />
            
            <section className="story-hero">
                <div className="reveal">
                    <span className="eyebrow gold">THE LEGACY</span>
                    <h1>The Journey to <em>True Health</em></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
                        Rediscovering the ancient grains that nourished our ancestors, 
                        and bringing them back to the center of the modern table.
                    </p>
                </div>
            </section>

            <section className="story-content">
                <div className="story-text-block reveal hover-lift">
                    <h3>A Vision of Wellness</h3>
                    <p>
                        From the very beginning, Sri Sai Millets Hut was built on a simple, yet profound realization: our modern diets have lost touch with the natural, nutrient-dense foods that sustained human life for thousands of years. We watched as processed grains and artificial ingredients took over the market, bringing with them a host of lifestyle diseases. We knew there had to be a better way—a way back to the roots of genuine nourishment.
                    </p>
                </div>

                <div className="quote-box reveal hover-lift">
                    "We aren't just serving food; we are curating health, heritage, and the forgotten wisdom of our ancestors."
                </div>

                <div className="story-text-block reveal hover-lift">
                    <h3>The Millet Renaissance</h3>
                    <p>
                        Millets aren't a new discovery; they are the original superfoods of the Indian subcontinent. Rich in dietary fiber, essential vitamins, and key minerals, these environmentally resilient grains are powerhouses of health. However, cooking with millets requires a delicate touch to unlock their true flavor and texture. Our expert chefs spent years perfecting the art of millet cuisine.
                    </p>
                    <p style={{ marginTop: '16px' }}>
                        By infusing these incredible grains with traditional Nawabi spices—the very spices that once graced royal banquets—we managed to create a menu that doesn't compromise on taste for the sake of health. 
                    </p>
                </div>

                <div className="story-text-block reveal hover-lift">
                    <h3>A Commitment to Quality</h3>
                    <p>
                        Every Dosa, every Pesarattu, and every serving of our Signature Ragi Jawa is crafted with an absolute commitment to quality. We source our millets directly from sustainable farms, ensuring that our food is not only good for you but also good for the earth. No refined flours, no artificial additives—just pure, unadulterated goodness in every bite.
                    </p>
                </div>

                <div className="text-center mt-32 reveal hover-lift" style={{ marginBottom: '64px' }}>
                    <Link to="/#menu" className="btn-primary" style={{ padding: '14px 32px', fontSize: '14px' }}>Explore Our Menu</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurStory;
