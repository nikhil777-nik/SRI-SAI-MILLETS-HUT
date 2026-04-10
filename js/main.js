import { menuData } from './menu-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Menu rendering
    renderMenu();

    // 2. Navigation scroll logic (Avoid URL hash changes)
    setupNavigation();

    // 3. Reveal animations
    setupRevealAnimations();

    // 4. Back to top button
    setupBackToTop();

    // 5. Splash Screen (if it exists)
    setupSplashScreen();
    
    // 6. Intersection Observer for tab highlighting
    setupTabHighlighting();
});

function renderMenu() {
    const idliSnacksContainer = document.querySelector('#idli-snacks .tiffins-grid');
    const dosasPesarattusContainer = document.querySelector('#dosas-pesarattus .dosas-columns');
    const SpecialsAddonsContainer = document.querySelector('#specials-addons .tiffins-grid');

    if (idliSnacksContainer) {
        idliSnacksContainer.innerHTML = menuData.idliSnacks.map(cat => `
            <div class="card-dark-translucent reveal hover-lift">
                <h3 class="subsection-title" style="color: var(--accent-gold);">${cat.category}</h3>
                <ul class="clean-list" style="display: flex; flex-direction: column; gap: 12px;">
                    ${cat.items.map(item => `
                        <li style="display:flex; justify-content:space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
                            <span>${item.name}</span><strong style="color:var(--accent-gold);">${item.price}</strong>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    if (dosasPesarattusContainer) {
        dosasPesarattusContainer.innerHTML = menuData.dosasPesarattus.map(cat => `
            <div class="card-dark-translucent reveal hover-lift">
                <h3 class="subsection-title" style="color: var(--accent-gold);">${cat.category}</h3>
                <ul class="clean-list">
                    ${cat.items.map(item => `
                        <li style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                            <span>${item.name}</span><strong style="color:var(--accent-gold);">${item.price}</strong>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }
    
    if (SpecialsAddonsContainer) {
        SpecialsAddonsContainer.innerHTML = menuData.specialsAddons.map(cat => `
            <div class="card-dark-translucent reveal hover-lift">
                <h3 class="subsection-title" style="color: var(--accent-gold);">${cat.category}</h3>
                <ul class="clean-list" style="display: flex; flex-direction: column; gap: 12px;">
                    ${cat.items.map(item => `
                        <li style="display:flex; justify-content:space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
                            <span>${item.name}</span><strong style="color:var(--accent-gold);">${item.price}</strong>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }
}

function setupNavigation() {
    // Intercept all anchor clicks with hash hrefs
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            
            if (targetEl) {
                e.preventDefault();
                const offset = 80; // Adjust for sticky nav
                const y = targetEl.getBoundingClientRect().top + window.scrollY - offset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });

                // Set active class manually
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');

                // Optional: Use history.replaceState to keep URL clean
                // history.replaceState(null, null, ' '); 
            }
        });
    });

    // Handle internal menu tabs
    window.scrollToSection = function(e, id) {
        const el = document.getElementById(id);
        if (el) {
            e.preventDefault();
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
        if (e && e.currentTarget) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }
    };
}

function setupRevealAnimations() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => revealObserver.observe(el));
    
    // Apply hover-lift automatically to dynamic cards
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.card-dark-translucent')) {
            e.target.closest('.card-dark-translucent').classList.add('hover-lift');
        }
    });
}

function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}

function setupSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    if (!splashScreen) return;

    const splashSteps = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
    let current = 0;

    const render = () => {
        splashSteps.forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.style.opacity = i <= current ? '1' : '0';
        });
    };

    render();

    const timer = setInterval(() => {
        if (current < splashSteps.length - 1) {
            current++;
            render();
        } else {
            clearInterval(timer);
            setTimeout(() => {
                splashScreen.classList.add('hidden');
                document.body.style.overflow = '';
                setTimeout(() => splashScreen.remove(), 800);
            }, 400);
        }
    }, 200);
}

function setupTabHighlighting() {
    const sections = document.querySelectorAll('section[id]:not(#location):not(#menu)');
    const tabs = document.querySelectorAll('.tab');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.getAttribute('onclick')?.includes(id)) {
                        tab.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3, rootMargin: "-100px 0px 0px 0px" });
    
    sections.forEach(s => observer.observe(s));
}
