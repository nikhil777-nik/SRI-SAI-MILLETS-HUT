import React from 'react';
import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Menu from '../components/Menu';
import Location from '../components/Location';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Home = () => {
    return (
        <div>
            <SplashScreen />
            <Navbar />
            <Hero />
            <AboutPreview />
            <Menu />
            <Location />
            <Footer />
            <FloatingButtons />
        </div>
    );
};

export default Home;
