import { spotlightGrains } from './spotlight-data.js';

document.addEventListener('DOMContentLoaded', () => {
    buildTabs();
    renderGrain(spotlightGrains[0]);
});

let currentIdx = 0;

function buildTabs() {
    const container = document.getElementById('tabs');
    if (!container) return;
    
    spotlightGrains.forEach((g, i) => {
        const btn = document.createElement('button');
        btn.className = 'grain-tab' + (i === 0 ? ' active' : '');
        btn.innerHTML = `<span class="dot"></span>${g.title}`;
        btn.addEventListener('click', () => switchGrain(i));
        container.appendChild(btn);
    });
}

function fadeAll(out) {
    document.querySelectorAll('.fade-target').forEach(el => {
        el.classList.toggle('fade-out', out);
    });
}

function switchGrain(idx) {
    if (idx === currentIdx) return;
    fadeAll(true);
    setTimeout(() => {
        currentIdx = idx;
        renderGrain(spotlightGrains[idx]);
        fadeAll(false);
    }, 220);
    document.querySelectorAll('.grain-tab').forEach((b, i) => b.classList.toggle('active', i === idx));
}

function renderGrain(g) {
    const safeSet = (id, val, isHtml = false) => {
        const el = document.getElementById(id);
        if (el) isHtml ? (el.innerHTML = val) : (el.textContent = val);
    };

    safeSet('grain-num', g.num);
    safeSet('grain-badge', g.badge);
    safeSet('grain-title', g.title);
    safeSet('grain-aka', g.aka);
    safeSet('grain-desc', g.desc);
    safeSet('grain-benefit', `<strong>Why it matters:</strong> ${g.benefit}`, true);

    // Nutrients
    const bars = document.getElementById('nutrient-bars');
    if (bars) {
        bars.innerHTML = g.nutrients.map(n => `
            <div class="nutrient-row">
                <span class="n-label">${n.label}</span>
                <div class="n-track"><div class="n-fill" style="width:0%;background:${n.color}" data-w="${n.val}"></div></div>
                <span class="n-val">${n.val}%</span>
            </div>`).join('');
        
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                bars.querySelectorAll('.n-fill').forEach(el => el.style.width = el.dataset.w + '%');
            });
        });
    }

    // Dishes
    const dishes = document.getElementById('dish-list');
    if (dishes) {
        dishes.innerHTML = g.dishes.map(d => `
            <div class="dish-row">
                <span class="dish-name">${d.name}</span>
                <span class="dish-tag">${d.tag}</span>
                <span class="dish-price">${d.price}</span>
            </div>`).join('');
    }
}
