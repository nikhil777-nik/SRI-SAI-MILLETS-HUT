import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import MilletSpotlight from './pages/MilletSpotlight';
import OurStory from './pages/OurStory';

function ScrollAndReveal() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Handle Scrolling based on Hash or Path
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
           const y = element.getBoundingClientRect().top + window.scrollY - 80; // Account for navbar
           window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
        window.scrollTo(0, 0); // Scroll to top if no hash
    }

    // 2. Handle Intersection Observer for Reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .hover-lift').forEach(el => revealObserver.observe(el));
    }, 150);

    return () => revealObserver.disconnect();
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
        <ScrollAndReveal />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/millet-spotlight" element={<MilletSpotlight />} />
            <Route path="/our-story" element={<OurStory />} />
        </Routes>
    </Router>
  )
}

export default App;
