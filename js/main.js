// ─── Scroll-to-section (Menu Tabs) ───────────────────────────────────────────
function scrollToSection(e, id) {
    const el = document.getElementById(id);
    if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (e && e.currentTarget) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        e.currentTarget.classList.add('active');
    }
}

// ─── Menu Tab IntersectionObserver (highlight active tab on scroll) ───────────
const sections = document.querySelectorAll('section[id]:not(#location):not(#menu)');
const tabs = document.querySelectorAll('.tab');

const tabObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            tabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('onclick')?.includes(id)) {
                    tab.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.3, rootMargin: '-100px 0px 0px 0px' });

sections.forEach(section => tabObserver.observe(section));

// ─── Top Navigation scroll-based active highlighting ─────────────────────────
const navHome     = document.getElementById('nav-home');
const navAbout    = document.getElementById('nav-about');
const navMenu     = document.getElementById('nav-menu');
const navLocation = document.getElementById('nav-location');

const aboutSection    = document.getElementById('about');
const menuSection     = document.getElementById('menu');
const locationSection = document.getElementById('location');

window.addEventListener('scroll', () => {
    if (!navHome || !navAbout || !navMenu || !navLocation) return;
    navHome.classList.remove('active');
    navAbout.classList.remove('active');
    navMenu.classList.remove('active');
    navLocation.classList.remove('active');

    const scrollY = window.scrollY + 200;
    if (locationSection && locationSection.offsetTop <= scrollY) {
        navLocation.classList.add('active');
    } else if (menuSection && menuSection.offsetTop <= scrollY) {
        navMenu.classList.add('active');
    } else if (aboutSection && aboutSection.offsetTop <= scrollY) {
        navAbout.classList.add('active');
    } else {
        navHome.classList.add('active');
    }
});

// ─── Smooth scroll for nav links ──────────────────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href.startsWith('#')) return;
        const targetEl = document.getElementById(href.substring(1));
        if (targetEl) {
            e.preventDefault();
            const y = targetEl.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// ─── Premium UI Modifiers ─────────────────────────────────────────────────────
document.querySelectorAll('.card-white, .card-warm, .card-dark-translucent, .curry-box, .combo-box')
    .forEach(el => el.classList.add('hover-lift'));

// ─── Directional reveal classes ───────────────────────────────────────────────
document.querySelector('.tiffins-left')?.classList.add('reveal-left');
document.querySelector('.tiffins-right')?.classList.add('reveal-right');
document.querySelector('.hero-content')?.classList.add('reveal-left');
document.querySelector('.hero-image')?.classList.add('reveal-right');

document.querySelectorAll('.special-item').forEach((el, index) => {
    el.classList.add('reveal-scale');
    el.style.transitionDelay = `${index * 0.15}s`;
    el.classList.remove('reveal');
});

document.querySelectorAll('.section-title, .subsection-title').forEach(el => el.classList.add('reveal'));

// ─── Scroll reveal IntersectionObserver ──────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    .forEach(el => revealObserver.observe(el));

// ─── Back to Top button visibility ────────────────────────────────────────────
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (!backToTopBtn) return;
    backToTopBtn.classList.toggle('visible', window.scrollY > 400);
});

// ─── Splash Screen Animation ──────────────────────────────────────────────────
const splashSteps = [
    { id: 's1', label: 'Step 1 of 7 — Circle frame' },
    { id: 's2', label: 'Step 2 of 7 — Roof' },
    { id: 's3', label: 'Step 3 of 7 — Hut body & door' },
    { id: 's4', label: 'Step 4 of 7 — Left millet stalk' },
    { id: 's5', label: 'Step 5 of 7 — Right millet stalk' },
    { id: 's6', label: 'Step 6 of 7 — Name text' },
    { id: 's7', label: 'Step 7 of 7 — Tagline (complete!)' }
];

let splashCurrent = 0;

function renderSplash() {
    splashSteps.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el) el.style.opacity = i <= splashCurrent ? '1' : '0';
    });
}

renderSplash();

const splashTimer = setInterval(() => {
    if (splashCurrent < splashSteps.length - 1) {
        splashCurrent++;
        renderSplash();
    } else {
        clearInterval(splashTimer);
        setTimeout(() => {
            const splashScreen = document.getElementById('splash-screen');
            if (splashScreen) {
                splashScreen.classList.add('hidden');
                document.body.style.overflow = '';
                setTimeout(() => splashScreen.remove(), 800);
            }
        }, 400);
    }
}, 200);
