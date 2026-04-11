import React from 'react';

const MenuTabs = ({ activeTab, setActiveTab }) => {
    
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        setActiveTab(sectionId);
        
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100, // Account for fixed navbar
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="menu-tabs-wrapper" id="menu">
            <div className="menu-tabs">
                <button 
                    className={`tab ${activeTab === 'idli-snacks' ? 'active' : ''}`} 
                    onClick={(e) => scrollToSection(e, 'idli-snacks')}
                >
                    IDLI &amp; SNACKS
                </button>
                <button 
                    className={`tab ${activeTab === 'dosas-pesarattus' ? 'active' : ''}`} 
                    onClick={(e) => scrollToSection(e, 'dosas-pesarattus')}
                >
                    DOSAS &amp; PESARATTUS
                </button>
                <button 
                    className={`tab ${activeTab === 'specials-addons' ? 'active' : ''}`} 
                    onClick={(e) => scrollToSection(e, 'specials-addons')}
                >
                    SPECIALS
                </button>
            </div>
        </div>
    );
};

export default MenuTabs;
